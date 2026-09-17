import { ContactForm } from "@/components/ContactForm";

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

const stripLegacyLegalHero = (html: string) => {
  let cleaned = html
    .replace(/<!--[^]*?-->/g, "")
    .replace(/<style[^>]*>[^]*?<\/style>/gi, "");

  const duplicatedHeading = /^\s*(?:Jogi nyilatkozatok|Promóciós szabályzat)\s*<h1[^>]*>[^]*?<\/h1>/i;
  while (duplicatedHeading.test(cleaned)) cleaned = cleaned.replace(duplicatedHeading, "");
  return cleaned.trim();
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
export function TextPage({ content, showPrivacyRequest = false }: { content: TextPageContent; showPrivacyRequest?: boolean }) {
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
          id="a1-aszf-top"
          className="prose prose--flush text-page__prose"
          // eslint-disable-next-line react/no-danger -- migrated CMS content
          dangerouslySetInnerHTML={{ __html: stripLegacyLegalHero(content.html) }}
        />
        {showPrivacyRequest ? (
          <section id="adatkezelesi-igenyles" className="text-page__request" aria-label="Adatkezelési igénylés">
            <ContactForm
              bare
              privacyRequest
              formName="Adatkezelési igénylés"
              heading="Adattörlés, adatigénylés vagy adatkorlátozás"
              intro="Az alábbi űrlapon jelezheted, milyen adatkezelési intézkedést kérsz tőlünk."
              submitLabel="Igénylés küldése"
            />
          </section>
        ) : null}
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
