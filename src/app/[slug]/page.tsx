import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { MirrorContent } from "@/components/MirrorContent";
import { ServicePage } from "@/components/service/ServicePage";
import { SERVICE_PAGES } from "@/components/service/serviceData";
import { WpContent } from "@/components/WpContent";
import {
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
              <ContactForm formName="Kapcsolati űrlap" />
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

  return (
    <article>
      <div className="article-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Morzsamenü">
            <Link href="/">Kezdőlap</Link>
            <span>/</span>
            <Link href="/tudastar-blog">Tudástár</Link>
            <span>/</span>
            <span>{category}</span>
          </nav>
          <h1>{post.title}</h1>
          <p className="post-meta" style={{ marginTop: 8 }}>
            {category} · {formatDate(post.date)}
          </p>
        </div>
      </div>
      <div className="article-body">
        <div className="container">
          <div
            className="prose"
            // eslint-disable-next-line react/no-danger -- migrated CMS content
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <section className="section-tight">
        <div className="container" style={{ display: "grid", placeItems: "center" }}>
          <ContactForm
            formName={`Cikk – ${post.title}`}
            heading="Érdekli a napelem vagy energiatárolás?"
            intro="Kérjen ingyenes, személyre szabott ajánlatot szakértő munkatársainktól."
          />
        </div>
      </section>
    </article>
  );
}
