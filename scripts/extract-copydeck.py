"""Extract the A1 Solar copy deck into an ordered, reviewable JSON snapshot."""

from __future__ import annotations

import json
import sys
from pathlib import Path

from docx import Document
from docx.document import Document as DocumentObject
from docx.table import Table
from docx.text.paragraph import Paragraph


def iter_blocks(parent: DocumentObject):
    for child in parent.element.body.iterchildren():
        if child.tag.endswith("}p"):
            yield Paragraph(child, parent)
        elif child.tag.endswith("}tbl"):
            yield Table(child, parent)


def paragraph_record(paragraph: Paragraph) -> dict[str, object] | None:
    text = paragraph.text.strip()
    if not text:
        return None
    properties = paragraph._p.pPr
    numbered = bool(properties is not None and properties.numPr is not None)
    return {
        "type": "paragraph",
        "style": paragraph.style.name if paragraph.style else "Normal",
        "numbered": numbered,
        "text": text,
    }


def table_record(table: Table) -> dict[str, object]:
    rows: list[list[str]] = []
    for row in table.rows:
        rows.append(["\n".join(p.text.strip() for p in cell.paragraphs if p.text.strip()) for cell in row.cells])
    return {"type": "table", "rows": rows}


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: extract-copydeck.py INPUT.docx OUTPUT.json")

    source = Path(sys.argv[1]).resolve()
    destination = Path(sys.argv[2]).resolve()
    document = Document(source)
    blocks: list[dict[str, object]] = []
    for block in iter_blocks(document):
        record = paragraph_record(block) if isinstance(block, Paragraph) else table_record(block)
        if record:
            blocks.append(record)

    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(
        json.dumps({"source": source.name, "blocks": blocks}, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(json.dumps({"source": source.name, "blocks": len(blocks)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
