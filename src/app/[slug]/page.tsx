import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { MirrorContent } from "@/components/MirrorContent";
import { CAMPAIGN_PAGES } from "@/components/page/campaign";
import { MARKETING_PAGES } from "@/components/page/marketing";
import { SuccessPage, SUCCESS_PAGES } from "@/components/page/SuccessPage";
import { NotchBanner } from "@/components/page/NotchHero";
import { TextPage, TEXT_PAGES } from "@/components/page/TextPage";
import { TOOL_PAGES } from "@/components/page/tools";
import { ServicePage } from "@/components/service/ServicePage";
import { SERVICE_PAGES } from "@/components/service/serviceData";
import { SidebarLayout } from "@/components/service/SidebarLayout";
import { SupportWidget } from "@/components/service/SupportWidget";
import { WpContent } from "@/components/WpContent";
import { CopydeckPage } from "@/components/v3/CopydeckPage";
import {
  firstImage,
  formatDate,
  getPage,
  getPages,
  getPost,
  getPosts,
  plainExcerpt,
  processHtml,
  RESERVED_SLUGS,
} from "@/lib/content";
import { getMirror } from "@/lib/mirror";
import { SITE } from "@/lib/site";
import { getV3Page, V3_PAGES } from "@/lib/v3-pages";

type Params = { slug: string };

// Every supported one-segment URL is known at build time. Disabling runtime
// fallback keeps the hardened read-only container from trying to persist
// prerender entries for unknown URLs.
export const dynamicParams = false;

/** Contact page gets an appended working form (the mirrored one is static). */
const APPEND_CONTACT_FORM = new Set(["kapcsolat"]);

export function generateStaticParams(): Params[] {
  const slugs = new Set<string>();
  for (const p of getPages()) if (!RESERVED_SLUGS.has(p.slug)) slugs.add(p.slug);
  for (const p of getPosts()) if (!slugs.has(p.slug)) slugs.add(p.slug);
  for (const page of V3_PAGES) {
    const parts = new URL(page.url, "https://a1solar.hu").pathname.split("/").filter(Boolean);
    if (parts.length === 1) slugs.add(parts[0]);
  }
  return [...slugs].map((slug) => ({ slug }));
}

/** Hand-tuned SEO title + description for the key conversion pages. */
const SEO_OVERRIDES: Record<string, { title: string; description: string }> = {
  "lakossagi-napelem": {
    title: "Lakossági napelem és energiatároló – teljes ügyintézéssel | A1 Solar",
    description:
      "Lakossági napelemes rendszerek tervezéstől a kivitelezésig: engedélyeztetés, pályázati ügyintézés, saját kivitelezés és szervizháttér egy kézben.",
  },
  "vallalati-napelem": {
    title: "Vállalati napelem és energiatárolás | A1 Solar",
    description:
      "Vállalati napelemes és energiatárolási rendszerek fogyasztásra szabott tervezéssel, megtérülési vizsgálattal, saját kivitelezéssel és teljes körű garanciával.",
  },
  "lakossagi-napelem-tisztitas-es-karbantartas": {
    title: "Lakossági napelem-tisztítás és karbantartás | A1 Solar",
    description:
      "Professzionális napelem-tisztítás és teljes körű állapotfelmérés: ioncserélt vizes tisztítás, villamos ellenőrzés, inverter- és hőkamerás vizsgálat.",
  },
  "lakossagi-energiatarolo-tamogatas": {
    title: "Otthoni Energiatároló Program – kivitelezés és csomagok | A1 Solar",
    description:
      "Jóváhagyták OETP-pályázatát? Ingyenes helyszíni felmérés, végleges műszaki tartalom, engedélyeztetés és energiatároló-kivitelezés egy kézben.",
  },
  "hibrid-napelem-backup": {
    title: "Hibrid napelemes rendszer backuppal | A1 Solar",
    description:
      "Hibrid napelemes rendszer energiatárolóval és áramszüneti backup funkcióval. Kérj személyre szabott ajánlatot az A1 Solartól, akár 6 havi kamatmentes részletfizetéssel.",
  },
  "napelem-energiatarolo-reszletfizetes": {
    title: "Napelem és energiatároló 6 havi kamatmentes részletfizetéssel | A1 Solar",
    description:
      "Napelemes és energiatárolós rendszer akár 6 havi, 0% kamatos részletfizetéssel. Backup a legfontosabb fogyasztókhoz vagy teljes ingatlanra – kérj díjmentes ajánlatot az A1 Solartól.",
  },
  "ertekesito-eloszuro": {
    title: "Értékesítő előszűrő – vállalkozói értékesítői lehetőség | A1 Solar",
    description:
      "Építs sikeres értékesítői karriert az A1 Solarral: vállalkozói, jutalékalapú együttműködés, központi leadtámogatás és modern CRM. Töltsd ki az előszűrőt.",
  },
  "regiovezeto-eloszures": {
    title: "Régióvezető előszűrő – építs saját értékesítői csapatot | A1 Solar",
    description:
      "Régióvezetői lehetőség az A1 Solarnál: vállalkozói, jutalékalapú együttműködés, saját régió és csapat, erős vállalati háttérrel. Töltsd ki az előszűrőt.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  const v3Page = getV3Page(`/${slug}/`);
  if (v3Page) {
    return {
      title: { absolute: v3Page.seoTitle },
      description: v3Page.metaDescription,
      alternates: { canonical: `/${slug}/` },
      openGraph: { title: v3Page.seoTitle, description: v3Page.metaDescription },
    };
  }

  // Confirmation ("sikeres…") pages must not be indexed.
  const success = SUCCESS_PAGES[slug];
  if (success) {
    return {
      title: `${success.title} | A1 Solar`,
      robots: { index: false, follow: true },
      alternates: { canonical: `/${slug}/` },
    };
  }

  const override = SEO_OVERRIDES[slug];
  const entry = getPage(slug) ?? getPost(slug);
  if (!entry && !override) return {};

  const rawDescription = entry
    ? entry.excerpt.trim()
      ? plainExcerpt(entry.excerpt)
      : plainExcerpt(entry.content)
    : "";
  const title = override?.title ?? entry?.title ?? "A1 Solar";
  const description = override?.description ?? rawDescription;

  return {
    title,
    description,
    alternates: { canonical: `/${slug}/` },
    openGraph: { title, description },
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  if (RESERVED_SLUGS.has(slug)) notFound();

  // The contact page intentionally uses the bespoke native form-led layout.
  const ContactPage = slug === "kapcsolat" ? MARKETING_PAGES[slug] : undefined;
  if (ContactPage) return <ContactPage />;

  const v3Page = getV3Page(`/${slug}/`);
  if (v3Page) return <CopydeckPage page={v3Page} />;

  // Natively rebuilt service subpages take over from the WP mirror.
  const service = SERVICE_PAGES[slug];
  if (service) return <ServicePage data={service} />;

  // Bespoke native marketing pages.
  const Marketing = MARKETING_PAGES[slug];
  if (Marketing) return <Marketing />;

  // Native tool / utility pages (calculators, brochure, eligibility…).
  const Tool = TOOL_PAGES[slug];
  if (Tool) return <Tool />;

  // Bespoke native campaign / landing pages.
  const Campaign = CAMPAIGN_PAGES[slug];
  if (Campaign) return <Campaign />;

  // Native confirmation ("sikeres…") pages.
  const success = SUCCESS_PAGES[slug];
  if (success) return <SuccessPage content={success} />;

  // Native legal / policy text pages.
  const textEyebrow = TEXT_PAGES[slug];
  if (textEyebrow) {
    const textPage = getPage(slug);
    if (textPage) {
      return (
        <TextPage
          content={{ eyebrow: textEyebrow, title: textPage.title, html: processHtml(textPage.content) }}
        />
      );
    }
  }

  // Pages take precedence over same-slug posts (e.g. `ft1000`).
  const page = getPage(slug);
  if (page) {
    const mirror = getMirror(slug);
    const body = mirror ? (
      <MirrorContent page={mirror} />
    ) : (
      <WpContent html={page.content} />
    );
    if (APPEND_CONTACT_FORM.has(slug)) {
      return (
        <>
          {body}
          <section className="section-tight">
            <div className="container" style={{ display: "grid", placeItems: "center" }}>
              <ContactForm formName="Kapcsolati űrlap" submitLabel="Üzenet küldése" />
            </div>
          </section>
        </>
      );
    }
    return body;
  }

  const post = getPost(slug);
  if (!post) notFound();

  const category = post.categories[0] ?? "Hírek";
  const html = processHtml(post.content);
  const cover = firstImage(post.content) ?? "/wp-content/uploads/2023/11/210363746_m_normal_none.jpg";
  const wordCount = post.content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  const readingMin = Math.max(1, Math.ceil(wordCount / 200));
  const shareUrl = `${SITE.url}/${slug}/`;
  const shareTargets = [
    {
      label: "Megosztás Facebookon",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      path: "M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.6H6.61v3.56h3.07V22h3.68v-9.14h3.06l.46-3.56h-3.52V7.05c0-1.03.28-1.73 1.76-1.73z",
    },
    {
      label: "Megosztás LinkedInen",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.52v14H.24V8zM8.34 8h4.33v1.92h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V22h-4.52v-6.7c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V22H8.34V8z",
    },
    {
      label: "Megosztás X-en",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
      path: "M18.9 1.5h3.4l-7.43 8.49L23 22.5h-6.8l-5.33-6.97-6.1 6.97H1.37l7.95-9.08L1.5 1.5h6.97l4.82 6.37zm-1.2 18h1.88L6.38 3.4H4.36z",
    },
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    image: cover.startsWith("http") ? cover : `${SITE.url}${cover}`,
    author: { "@type": "Organization", name: SITE.legalName },
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
      logo: { "@type": "ImageObject", url: `${SITE.url}/images/brand/a1solar-logo.svg` },
    },
    mainEntityOfPage: shareUrl,
    articleSection: category,
  };

  return (
    <article className="pb-6 md:pb-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {/* Content-less notch banner (same shape as other subpages); the article
          badge + title live in the main column below (no divider). The lower-right
          notch holds the meta, reading time and share icons. */}
      <NotchBanner
        image={cover}
        imageAlt={post.title}
        notch={
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
            <div style={{ fontSize: "13px", color: "var(--ink-muted)" }}>
              {category} · {formatDate(post.date)} · {readingMin} perc olvasás
            </div>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: "13px", color: "var(--ink-muted)" }}>Megosztás:</span>
              {shareTargets.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--ink-soft)] transition-colors hover:text-[var(--brand)]"
                  style={{ background: "var(--surface-3)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        }
      />

      <div className="mt-10 md:mt-12" />

      <SidebarLayout sidebar={<SupportWidget />}>
        <span
          className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
          style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
        >
          {category}
        </span>
        <h1 className="text-[var(--ink)]" style={{ margin: "18px 0 28px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}>
          {post.title}
        </h1>
        <div
          className="prose prose--flush"
          // eslint-disable-next-line react/no-danger -- migrated CMS content
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <hr className="my-10" style={{ border: 0, borderTop: "1px dashed #ececec" }} />
        <ContactForm
          bare
          formName={`Cikk – ${post.title}`}
          heading="Érdekli a napelem vagy energiatárolás?"
          intro="Kérjen ingyenes, személyre szabott ajánlatot szakértő munkatársainktól."
        />
      </SidebarLayout>
    </article>
  );
}
