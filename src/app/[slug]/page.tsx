import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { MirrorContent } from "@/components/MirrorContent";
import { CAMPAIGN_PAGES } from "@/components/page/campaign";
import { MARKETING_PAGES } from "@/components/page/marketing";
import { SuccessPage, SUCCESS_PAGES } from "@/components/page/SuccessPage";
import { TextPage, TEXT_PAGES } from "@/components/page/TextPage";
import { TOOL_PAGES } from "@/components/page/tools";
import { ServicePage } from "@/components/service/ServicePage";
import { SERVICE_PAGES } from "@/components/service/serviceData";
import { HeroDivider, SidebarLayout } from "@/components/service/SidebarLayout";
import { SupportWidget } from "@/components/service/SupportWidget";
import { WpContent } from "@/components/WpContent";
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

type Params = { slug: string };

/** Contact page gets an appended working form (the mirrored one is static). */
const APPEND_CONTACT_FORM = new Set(["kapcsolat"]);

export function generateStaticParams(): Params[] {
  const slugs = new Set<string>();
  for (const p of getPages()) if (!RESERVED_SLUGS.has(p.slug)) slugs.add(p.slug);
  for (const p of getPosts()) if (!slugs.has(p.slug)) slugs.add(p.slug);
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPage(slug) ?? getPost(slug);
  if (!entry) return {};
  const description = entry.excerpt.trim()
    ? plainExcerpt(entry.excerpt)
    : plainExcerpt(entry.content);
  return {
    title: entry.title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title: entry.title, description },
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  if (RESERVED_SLUGS.has(slug)) notFound();

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

  return (
    <article className="pb-6 md:pb-8">
      {/* Editorial article header: title-first (handles any length), banner below. */}
      <header className="w-full pt-8 md:pt-12">
        <div className="container">
          <div className="max-w-[900px]">
            <span
              className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
              style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
            >
              {category}
            </span>
            <h1 className="text-[var(--ink)]" style={{ margin: "18px 0 0", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.15 }}>
              {post.title}
            </h1>
            <p className="post-meta" style={{ marginTop: 14 }}>
              {category} · {formatDate(post.date)}
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-[24px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cover} alt={post.title} style={{ width: "100%", aspectRatio: "1192 / 500", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </header>

      <HeroDivider />

      <SidebarLayout sidebar={<SupportWidget />}>
        <div
          className="prose"
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
