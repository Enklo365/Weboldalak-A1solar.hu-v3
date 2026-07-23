import Link from "next/link";

export type TextPageContent = {
  eyebrow: string;
  title: string;
  html: string;
  updated?: string;
};

/**
 * Native long-form text page (legal / policy / prose). A clean brand hero band
 * with an eyebrow + title, then the migrated CMS body in the shared `.prose`
 * container. On-brand, no WP chrome.
 */
export function TextPage({ content }: { content: TextPageContent }) {
  return (
    <article>
      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Morzsamenü">
            <Link href="/">Kezdőlap</Link>
            <span>/</span>
            <span>{content.eyebrow}</span>
          </nav>
          <span
            className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
            style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
          >
            {content.eyebrow}
          </span>
          <h1 style={{ marginTop: 16 }}>{content.title}</h1>
          {content.updated ? (
            <p className="post-meta" style={{ marginTop: 8 }}>
              Utolsó frissítés: {content.updated}
            </p>
          ) : null}
        </div>
      </div>
      <div className="article-body">
        <div className="container">
          <div
            className="prose"
            // eslint-disable-next-line react/no-danger -- migrated CMS content
            dangerouslySetInnerHTML={{ __html: content.html }}
          />
        </div>
      </div>
    </article>
  );
}

/** Slug → eyebrow label for the native legal / policy text pages. */
export const TEXT_PAGES: Record<string, string> = {
  "adatvedelmi-nyilatkozat": "Jogi nyilatkozatok",
  aszf: "Jogi nyilatkozatok",
  "cookie-nyilatkozat": "Jogi nyilatkozatok",
  "panelmosas-karbantartas-aszf": "Jogi nyilatkozatok",
  "lakossagi-napelemes-rendszerek-tamogatasa-promocios-szabalyzat": "Promóciós szabályzat",
};
