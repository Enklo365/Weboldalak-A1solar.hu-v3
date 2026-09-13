import Link from "next/link";
import { ArrowRight, BatteryCharging, Building2, Cpu, Gauge, ShieldCheck, SunMedium, Wrench } from "lucide-react";
import { FramedHero, type FramedHeroMedia } from "@/components/hero/FramedHero";
import {
  Bullets,
  DarkFeature,
  FeatureTiles,
  ImageOverlap,
  ProjectMosaic,
  StatementSection,
  type FeatureTileItem,
  type ProjectMosaicItem,
} from "@/components/section/SectionKit";
import { Breadcrumbs } from "@/components/v3/Breadcrumbs";
import { EditorialSlot } from "@/components/v3/EditorialSlot";
import { hasV3HeroSupplement, hasV3Supplement, V3HeroSupplement, V3Supplement } from "@/components/v3/V3Supplement";
import { getV3HeroMedia } from "@/lib/v3-hero-media";
import { getV3Layout, type CopyItem, type CopyPage, type CopySection } from "@/lib/v3-pages";

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

type VisualFamily = "home" | "about" | "residential" | "commercial" | "industrial" | "references" | "technology" | "articles" | "contact";

const VISUAL_IMAGES = [
  "/wp-content/uploads/2022/08/szuha-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/Esztergom-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/budapest-3-napelem.jpg",
  "/wp-content/uploads/2022/08/Pecel-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/Budapest-2-napelem.jpg",
  "/wp-content/uploads/2022/08/Erd-napelem.jpg",
];

const TILE_ICONS = [SunMedium, BatteryCharging, ShieldCheck, Gauge, Wrench, Cpu, Building2];

const visualFamilyFor = (page: CopyPage): VisualFamily => {
  if (page.number === 1) return "home";
  if (page.number >= 2 && page.number <= 5) return "about";
  if (page.number >= 6 && page.number <= 11) return "residential";
  if (page.number >= 12 && page.number <= 18) return "commercial";
  if (page.number >= 19 && page.number <= 23) return "industrial";
  if (page.number >= 24 && page.number <= 29) return "references";
  if (page.number >= 30 && page.number <= 33) return "technology";
  if (page.number === 34) return "articles";
  return "contact";
};

const sectionImageFor = (page: CopyPage, sectionIndex: number, mediaIndex = 0) => {
  const hero = getV3HeroMedia(page.url);
  const heroImage = hero.type === "image" ? hero.src : hero.poster;
  const images = heroImage ? [heroImage, ...VISUAL_IMAGES] : VISUAL_IMAGES;
  return images[(page.number + sectionIndex + mediaIndex) % images.length];
};

const mediaBrief = (item: Extract<CopyItem, { kind: "editorial" }>) => (
  <div className="v3-media-brief">
    <span>{item.mediaType}{item.placement ? ` · ${item.placement}` : ""}</span>
    <p>{item.details}</p>
  </div>
);

const mosaicItemFor = (
  page: CopyPage,
  section: CopySection,
  item: Extract<CopyItem, { kind: "editorial" }>,
  sectionIndex: number,
  mediaIndex: number,
): ProjectMosaicItem => {
  const lines = item.details.split(/\r?\n/).filter(Boolean);
  return {
    image: sectionImageFor(page, sectionIndex, mediaIndex),
    imageAlt: `${page.h1} – ${section.title}`,
    location: `${item.mediaType}${item.placement ? ` · ${item.placement}` : ""}`,
    title: lines[0] || section.title,
    meta: lines.slice(1).join(" "),
  };
};

const featureIcon = (index: number) => {
  const Icon = TILE_ICONS[index % TILE_ICONS.length];
  return <Icon size={24} strokeWidth={1.8} />;
};

const subheadingTiles = (items: CopyItem[]): FeatureTileItem[] | null => {
  if (items.filter((item) => item.kind === "subheading").length < 2) return null;
  if (items.some((item) => item.kind !== "subheading" && item.kind !== "paragraph")) return null;
  const groups: { title: string; items: CopyItem[] }[] = [];
  for (const item of items) {
    if (item.kind === "subheading") groups.push({ title: item.text, items: [] });
    else if (groups.length) groups.at(-1)?.items.push(item);
    else return null;
  }
  return groups.map((group, index) => ({
    icon: featureIcon(index),
    title: group.title,
    text: group.items.length ? <RenderItems items={group.items} /> : undefined,
  }));
};

const itemVisualLength = (item: CopyItem) => {
  if (item.kind === "paragraph" || item.kind === "subheading" || item.kind === "note") return item.text.length;
  if (item.kind === "bullets") return item.items.join(" ").length;
  if (item.kind === "cta" || item.kind === "link") return item.label.length;
  if (item.kind === "linkList") return item.links.map((link) => link.label).join(" ").length;
  return item.details.length;
};

const splitOverlapItems = (items: CopyItem[], title: string) => {
  const budget = Math.max(220, 570 - title.length * 4);
  let used = 0;
  let splitAt = 0;

  while (splitAt < items.length) {
    const nextLength = itemVisualLength(items[splitAt]);
    if (used + nextLength > budget) break;
    used += nextLength;
    splitAt += 1;
  }

  return {
    leadItems: items.slice(0, splitAt),
    continuationItems: items.slice(splitAt),
  };
};

const V3Section = ({ page, section, index, layout }: { page: CopyPage; section: CopySection; index: number; layout: ReturnType<typeof getV3Layout> }) => {
  const family = visualFamilyFor(page);
  const supplemented = hasV3Supplement(page.number, section.id);
  const editorials = supplemented
    ? []
    : section.items.filter((item): item is Extract<CopyItem, { kind: "editorial" }> => item.kind === "editorial");
  const textItems = section.items.filter((item) => item.kind !== "editorial");
  const number = String(index + 1).padStart(2, "0");
  const image = HOME_SECTION_IMAGES[section.id]?.src ?? sectionImageFor(page, index);
  const imageAlt = HOME_SECTION_IMAGES[section.id]?.alt ?? `${page.h1} – ${section.title}`;
  const tone = family === "industrial" || family === "technology" || family === "commercial" ? "graphite" : "red";
  const supplement = <V3Supplement pageNumber={page.number} sectionId={section.id} />;

  if (editorials.length >= 2) {
    return (
      <section id={section.id} className="v3-section v3-section--mosaic">
        <div className="v3-section__heading">
          <span className="v3-section__number">{number}</span>
          <h2>{section.title}</h2>
          <RenderItems items={textItems} />
          {supplement}
        </div>
        <ProjectMosaic items={editorials.map((item, mediaIndex) => mosaicItemFor(page, section, item, index, mediaIndex))} />
      </section>
    );
  }

  if (editorials.length === 1) {
    const { leadItems, continuationItems } = splitOverlapItems(textItems, section.title);
    const continuation = continuationItems.length ? (
      <div className="v3-section__copy v3-section__copy--continuation">
        <RenderItems items={continuationItems} />
        {mediaBrief(editorials[0])}
      </div>
    ) : undefined;

    return (
      <section id={section.id} className="v3-section v3-section--overlap">
        <ImageOverlap image={image} imageAlt={imageAlt} side={index % 2 ? "left" : "right"} tone={tone} continuation={continuation}>
          <div className="v3-section__copy">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <RenderItems items={leadItems} />
            {supplement}
            {continuationItems.length ? null : mediaBrief(editorials[0])}
          </div>
        </ImageOverlap>
      </section>
    );
  }

  const bulletIndex = section.items.findIndex((item) => item.kind === "bullets");
  if (bulletIndex >= 0) {
    const bulletItem = section.items[bulletIndex];
    if (bulletItem.kind === "bullets") {
      const tiles = bulletItem.items.map((title, tileIndex) => ({ icon: featureIcon(tileIndex), title }));
      return (
        <section id={section.id} className="v3-section v3-section--tiles">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <RenderItems items={section.items.slice(0, bulletIndex)} />
          </div>
          <FeatureTiles items={tiles} layout={tiles.length >= 4 ? "mosaic" : "equal"} tone={tone} />
          <RenderItems items={section.items.slice(bulletIndex + 1)} />
          {supplement}
        </section>
      );
    }
  }

  const headingTiles = subheadingTiles(section.items);
  if (headingTiles) {
    return (
      <section id={section.id} className="v3-section v3-section--tiles">
        <div className="v3-section__heading">
          <span className="v3-section__number">{number}</span>
          <h2>{section.title}</h2>
        </div>
        <FeatureTiles items={headingTiles} layout="mosaic" tone={tone} />
        {supplement}
      </section>
    );
  }

  const useDark = layout !== "listing" && (
    (family === "industrial" && index % 2 === 1)
    || (family === "technology" && index === 2)
    || (family === "commercial" && index === page.sections.length - 1)
    || (family === "about" && index === page.sections.length - 1)
  );
  if (useDark) {
    return (
      <div className="v3-section v3-section--dark">
        <DarkFeature id={section.id} eyebrow={number} title={section.title}>
          <RenderItems items={section.items} />
          {supplement}
        </DarkFeature>
      </div>
    );
  }

  return (
    <div className="v3-section v3-section--statement">
      <StatementSection id={section.id} eyebrow={number} title={section.title} tone={index % 3 === 1 ? "soft" : "plain"}>
        <RenderItems items={section.items} />
        {supplement}
      </StatementSection>
    </div>
  );
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
    <article className={`v3-page v3-page--${layout} v3-family--${visualFamilyFor(page)}`}>
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

  return (
    <div className="container v3-content">
        <div className="v3-sections">
          {introRemainder.length || heroSupplement ? (
            <section className="v3-intro-continuation" aria-label="Bevezető részletek">
              <RenderItems items={introRemainder} />
              {heroSupplement ? <div className="v3-intro-supplement"><V3HeroSupplement pageNumber={page.number} /></div> : null}
            </section>
          ) : null}
          {page.sections.map((section, index) => (
            <V3Section key={section.id} page={page} section={section} index={index} layout={layout} />
          ))}
        </div>
      </div>
  );
};
