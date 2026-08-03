import { NotchHero } from "@/components/page/NotchHero";
import { HeroDivider, SidebarLayout } from "@/components/service/SidebarLayout";
import { SupportWidget } from "@/components/service/SupportWidget";

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

/**
 * Native long-form text page (legal / policy / prose) on the sidebar +
 * notch-hero layout: a shaped hero, then the migrated CMS body in the shared
 * `.prose` container with a sticky customer-service sidebar.
 */
export function TextPage({ content }: { content: TextPageContent }) {
  const intro = INTRO_BY_EYEBROW[content.eyebrow] ?? "Az A1 Solar Kft. hivatalos dokumentuma és tájékoztatója.";

  return (
    <div className="pb-6 md:pb-8">
      <NotchHero
        eyebrow={content.eyebrow}
        titleStrong={content.title}
        image={HERO_IMAGE}
        imageAlt={content.title}
        intro={intro}
      />

      <HeroDivider />

      <SidebarLayout sidebar={<SupportWidget />}>
        {content.updated ? (
          <p className="post-meta" style={{ marginBottom: 16 }}>
            Utolsó frissítés: {content.updated}
          </p>
        ) : null}
        <div
          className="prose"
          // eslint-disable-next-line react/no-danger -- migrated CMS content
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </SidebarLayout>
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
