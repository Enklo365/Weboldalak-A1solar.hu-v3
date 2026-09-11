import fs from "node:fs";
import path from "node:path";

const source = JSON.parse(fs.readFileSync(path.resolve("docs/copydeck-structured.json"), "utf8"));
const destination = path.resolve("src/content/v3-pages.generated.json");
const numberedTitle = /^\d+\.\s/;

const slugify = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const parseMarker = (text) => {
  text = text.trim();
  if (/^CTA:/i.test(text)) return { kind: "cta", label: text.replace(/^CTA:\s*/i, "") };
  const linkGroup = text.match(/^\[(BELSŐ|KÜLSŐ) LINK\]\s*([\s\S]*)$/i);
  if (linkGroup) {
    const links = linkGroup[2].split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map((line) => {
      const pair = line.match(/^(.*?)\s*→\s*(\S+)$/);
      return pair ? { label: pair[1], href: pair[2] } : null;
    }).filter(Boolean);
    if (links.length === 1) return { kind: "link", ...links[0], external: linkGroup[1].toUpperCase() === "KÜLSŐ" };
    return { kind: "linkList", links, external: linkGroup[1].toUpperCase() === "KÜLSŐ" };
  }
  const slot = text.match(/^\[([^\]]+)\]\s*([\s\S]*)$/i);
  if (slot) {
    const [mediaType, ...placement] = slot[1].split(/\s+[–-]\s+/);
    return {
      kind: "editorial",
      mediaType: mediaType.toUpperCase(),
      placement: placement.join(" – ").trim(),
      details: slot[2].trim(),
    };
  }
  const caption = text.match(/^(Kép|Grafika)cím:\s*([\s\S]*)$/i);
  if (caption) return { kind: "editorial", mediaType: `${caption[1].toUpperCase()}CÍM`, placement: "", details: caption[2] };
  return { kind: "note", text };
};

const toItems = (blocks) => {
  const items = [];
  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];
    if (block.type !== "paragraph") continue;
    if (block.style === "Bullet") {
      const bullets = [];
      while (index < blocks.length && blocks[index].type === "paragraph" && blocks[index].style === "Bullet") {
        bullets.push(blocks[index].text.replace(/^•\s*/, ""));
        index += 1;
      }
      index -= 1;
      items.push({ kind: "bullets", items: bullets });
    } else if (block.style === "Body") {
      items.push({ kind: "paragraph", text: block.text });
    } else if (block.style === "WebH3") {
      items.push({ kind: "subheading", text: block.text });
    } else if (block.style === "Marker") {
      items.push(parseMarker(block.text));
    }
  }
  return items;
};

const pageStarts = source.blocks
  .map((block, index) => ({ block, index }))
  .filter(({ block }) => block.type === "paragraph" && block.style === "PageTitle" && numberedTitle.test(block.text));

const pages = pageStarts.map(({ block, index }, pageIndex) => {
  const nextPageTitle = source.blocks.findIndex((entry, blockIndex) => blockIndex > index && entry.type === "paragraph" && entry.style === "PageTitle");
  const blocks = source.blocks.slice(index + 1, nextPageTitle < 0 ? source.blocks.length : nextPageTitle);
  const pathBlock = blocks.find((entry) => entry.type === "paragraph" && entry.style === "PagePath");
  const metaTable = blocks.find((entry) => entry.type === "table" && entry.rows.some((row) => row[0] === "URL"));
  const meta = Object.fromEntries(metaTable?.rows ?? []);
  const h1Index = blocks.findIndex((entry) => entry.type === "paragraph" && entry.style === "WebH1");
  const firstSection = blocks.findIndex((entry, itemIndex) => itemIndex > h1Index && entry.type === "paragraph" && entry.style === "WebH2");
  const introBlocks = blocks.slice(h1Index + 1, firstSection < 0 ? blocks.length : firstSection);
  const sections = [];
  for (let cursor = firstSection; cursor >= 0 && cursor < blocks.length;) {
    const heading = blocks[cursor];
    let next = cursor + 1;
    while (next < blocks.length && !(blocks[next].type === "paragraph" && blocks[next].style === "WebH2")) next += 1;
    sections.push({ id: slugify(heading.text), title: heading.text, items: toItems(blocks.slice(cursor + 1, next)) });
    cursor = next;
  }
  return {
    number: Number(block.text.match(/^\d+/)[0]),
    name: block.text.replace(numberedTitle, ""),
    breadcrumb: pathBlock?.text ?? "",
    url: meta.URL,
    seoTitle: meta["SEO title"],
    metaDescription: meta["Meta description"],
    h1: blocks[h1Index]?.text ?? block.text.replace(numberedTitle, ""),
    intro: toItems(introBlocks),
    sections,
  };
});

fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.writeFileSync(destination, `${JSON.stringify(pages, null, 2)}\n`);
console.log(JSON.stringify({ pages: pages.length, destination: path.relative(process.cwd(), destination) }));
