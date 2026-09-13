export type TextPageContent = {
  eyebrow: string;
  title: string;
  html: string;
  updated?: string;
};

/** Default hero image + intro line per eyebrow group. */
const HERO_IMAGE = "/wp-content/uploads/2023/11/210363746_m_normal_none.jpg";
const INTRO_BY_EYEBROW: Record<string, string> = {
  "Jogi nyilatkozatok":
    "Átlátható működés és felelős adatkezelés – az A1 Solar Kft. hivatalos jogi tájékoztatói egy helyen.",
  "Promóciós szabályzat": "Promócióink hivatalos, mindenkor hatályos részvételi feltételei és szabályai.",
};

export const CompactLegalHero = ({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) => (
  <header className="legal-hero">
    <div className="container">
      <div className="legal-hero__panel">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO_IMAGE} alt={title} className="legal-hero__image" />
        <div className="legal-hero__overlay" aria-hidden="true" />
        <div className="legal-hero__content">
          <div>
            <span className="legal-hero__eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
          </div>
          <p>{intro}</p>
        </div>
      </div>
    </div>
  </header>
);

/**
 * Native full-width long-form text page for legal and policy content.
 */
export function TextPage({ content }: { content: TextPageContent }) {
  const intro = INTRO_BY_EYEBROW[content.eyebrow] ?? "Az A1 Solar Kft. hivatalos dokumentuma és tájékoztatója.";

  return (
    <div className="pb-6 md:pb-8">
      <CompactLegalHero
        eyebrow={content.eyebrow}
        title={content.title}
        intro={intro}
      />

      <div className="container text-page__layout">
        {content.updated ? (
          <p className="post-meta" style={{ marginBottom: 16 }}>
            Utolsó frissítés: {content.updated}
          </p>
        ) : null}
        <div
          className="prose prose--flush text-page__prose"
          // eslint-disable-next-line react/no-danger -- migrated CMS content
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </div>
    </div>
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
