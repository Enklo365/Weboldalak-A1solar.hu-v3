import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FramedHero, type FramedHeroMedia } from "@/components/hero/FramedHero";
import { Bullets } from "@/components/section/SectionKit";
import { Breadcrumbs } from "@/components/v3/Breadcrumbs";
import { EditorialSlot } from "@/components/v3/EditorialSlot";
import { hasV3HeroSupplement, hasV3Supplement, V3HeroSupplement, V3Supplement } from "@/components/v3/V3Supplement";
import { getV3HeroMedia } from "@/lib/v3-hero-media";
import { getV3Layout, type CopyItem, type CopyPage } from "@/lib/v3-pages";

const RenderItems = ({ items, compact = false }: { items: CopyItem[]; compact?: boolean }) => (
  <div className={`v3-copy${compact ? " v3-copy--compact" : ""}`}>
    {items.map((item, index) => {
      if (item.kind === "paragraph") return <p key={index}>{item.text}</p>;
      if (item.kind === "subheading") return <h3 key={index}>{item.text}</h3>;
      if (item.kind === "bullets") return <Bullets key={index} items={item.items} />;
      if (item.kind === "editorial") return <EditorialSlot key={index} type={item.mediaType} placement={item.placement} details={item.details} />;
      if (item.kind === "cta") return <Link key={index} className="btn btn-primary" href="/kapcsolat/">{item.label}<ArrowRight size={17} /></Link>;
      if (item.kind === "link") {
        const props = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
        return <a key={index} className="v3-inline-link" href={item.href} {...props}>{item.label}<ArrowRight size={15} /></a>;
      }
      if (item.kind === "linkList") return (
        <div key={index} className="v3-link-list">
          {item.links.map((link) => <a key={link.href} className="v3-inline-link" href={link.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}>{link.label}<ArrowRight size={15} /></a>)}
        </div>
      );
      return <p key={index} className="v3-editor-note">{item.text}</p>;
    })}
  </div>
);

const resolveHeroMedia = (item: CopyItem | undefined, path: string): FramedHeroMedia => {
  const media = item?.kind === "editorial" ? item : undefined;
  const fallback = getV3HeroMedia(path);
  const src = media?.src ?? fallback.src;
  const poster = media?.poster ?? fallback.poster;
  const position = fallback.position ?? "center";
  const isVideo = media?.src
    ? media.mediaType.trim().toUpperCase().includes("VIDEÓ")
    : fallback.type === "video";

  return { type: isVideo ? "video" : "image", src, poster, position };
};

const HOME_SECTION_IMAGES: Record<string, { src: string; alt: string }> = {
  "meglevo-napelem-bovitese-energiataroloval": {
    src: "/wp-content/uploads/2025/08/7854.jpg",
    alt: "Meglévő napelemes rendszer bővítése energiatárolóval",
  },
};

export const CopydeckPage = ({ page }: { page: CopyPage }) => {
  const layout = getV3Layout(page);
  const heroSlotIndex = page.intro.findIndex(
    (item) => item.kind === "editorial" && item.placement.trim().toUpperCase() === "HERO",
  );
  const heroSlot = heroSlotIndex >= 0 ? page.intro[heroSlotIndex] : undefined;
  const heroMedia = resolveHeroMedia(heroSlot, page.url);
  const ctaIndex = page.intro.findIndex((item) => item.kind === "cta");
  const heroCopyIndexes = new Set([ctaIndex].filter((index) => index >= 0));
  const heroCopy = page.intro.filter((_, index) => heroCopyIndexes.has(index));

  return (
    <article className={`v3-page v3-page--${layout}`}>
      <header className="v3-hero">
        <FramedHero className="v3-hero__frame" media={heroMedia}>
          <div className="container v3-hero__inner">
            <Breadcrumbs value={page.breadcrumb} />
            <div className="v3-hero__grid">
              <div className="v3-hero__copy">
                <span className="v3-kicker">{page.name}</span>
                <h1>{page.h1}</h1>
                {heroCopy.length ? <RenderItems items={heroCopy} compact /> : null}
              </div>
            </div>
          </div>
        </FramedHero>
      </header>

      <CopydeckBody page={page} />
    </article>
  );
};

export const CopydeckBody = ({ page }: { page: CopyPage }) => {
  const layout = getV3Layout(page);
  const heroSupplement = hasV3HeroSupplement(page.number);
  const heroSlotIndex = page.intro.findIndex(
    (item) => item.kind === "editorial" && item.placement.trim().toUpperCase() === "HERO",
  );
  const ctaIndex = page.intro.findIndex((item) => item.kind === "cta");
  const introRemainder = page.intro.filter((item, index) => (
    index !== heroSlotIndex
    && index !== ctaIndex
    && !(heroSupplement && item.kind === "editorial")
  ));
  const hasSidebar = layout === "service" && page.sections.length >= 5;

  return (
    <div className={`container v3-content${hasSidebar ? " v3-content--sidebar" : ""}`}>
        {hasSidebar ? (
          <aside className="v3-toc">
            <span>Az oldalon</span>
            <nav aria-label="Oldalon belüli navigáció">
              {page.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
            </nav>
            <Link className="btn btn-primary" href="/kapcsolat/">Kapcsolat</Link>
          </aside>
        ) : null}

        <div className="v3-sections">
          {introRemainder.length || heroSupplement ? (
            <section className="v3-intro-continuation" aria-label="Bevezető részletek">
              <RenderItems items={introRemainder} />
              {heroSupplement ? <div className="v3-intro-supplement"><V3HeroSupplement pageNumber={page.number} /></div> : null}
            </section>
          ) : null}
          {page.sections.map((section, index) => {
            const supplemented = hasV3Supplement(page.number, section.id);
            const editorial = supplemented ? undefined : section.items.find((item) => item.kind === "editorial");
            const sectionImage = page.number === 1 ? HOME_SECTION_IMAGES[section.id] : undefined;
            const textItems = section.items.filter((item) => item !== editorial && !(supplemented && item.kind === "editorial"));
            const split = Boolean(editorial || sectionImage) && layout !== "listing";
            return (
              <section key={section.id} id={section.id} className={`v3-section${split ? " v3-section--split" : ""}${index % 2 ? " v3-section--reverse" : ""}`}>
                <div className="v3-section__copy">
                  <span className="v3-section__number">{String(index + 1).padStart(2, "0")}</span>
                  <h2>{section.title}</h2>
                  <RenderItems items={textItems} />
                  <V3Supplement pageNumber={page.number} sectionId={section.id} />
                </div>
                {editorial?.kind === "editorial" ? (
                  <div className="v3-section__visual"><EditorialSlot type={editorial.mediaType} placement={editorial.placement} details={editorial.details} /></div>
                ) : sectionImage ? (
                  <div className="v3-section__visual v3-section__visual--image">
                    <Image src={sectionImage.src} alt={sectionImage.alt} fill sizes="(max-width: 1024px) 100vw, 46vw" />
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>
      </div>
  );
};
