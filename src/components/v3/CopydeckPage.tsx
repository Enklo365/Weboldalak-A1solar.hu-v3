import Link from "next/link";
import { ArrowRight, BatteryCharging, Building2, Cpu, DraftingCompass, FileCheck2, Gauge, HardHat, Play, ShieldCheck, SunMedium, Wrench } from "lucide-react";
import { Fragment } from "react";
import { FramedHero, type FramedHeroMedia } from "@/components/hero/FramedHero";
import {
  Bullets,
  BigStats,
  CtaButton,
  DarkFeature,
  Eyebrow,
  FactorGrid,
  FaqList,
  FeatureGrid,
  FeatureTiles,
  FeatureTilesEqualRed,
  ImageOverlap,
  ImageOverlapLeftGraphite,
  ProjectMosaic,
  StepTimeline,
  StatementSection,
  Typography,
  type FeatureTileItem,
  type ProjectMosaicItem,
} from "@/components/section/SectionKit";
import { GoogleReviews } from "@/components/section/GoogleReviews";
import { Breadcrumbs } from "@/components/v3/Breadcrumbs";
import { EditorialSlot } from "@/components/v3/EditorialSlot";
import { hasV3HeroSupplement, hasV3Supplement, V3HeroSupplement, V3Supplement } from "@/components/v3/V3Supplement";
import { getV3HeroMedia } from "@/lib/v3-hero-media";
import { getV3Layout, type CopyItem, type CopyPage, type CopySection } from "@/lib/v3-pages";

type ParagraphFlow = "wide" | "column" | "preserve";

const isLegacyInlineStats = (item: CopyItem) => (
  item.kind === "paragraph"
  && item.text.includes("|")
  && ["13 év", "2019 óta", "5000+", "országos kivitelezés", "MWh"].filter((marker) => item.text.includes(marker)).length >= 2
);

const mergeParagraphRuns = (items: CopyItem[], flow: ParagraphFlow) => {
  const visibleItems = items.filter((item) => !isLegacyInlineStats(item));
  if (flow === "preserve") return visibleItems;

  const targetChars = flow === "wide" ? 520 : 350;
  const merged: CopyItem[] = [];
  let paragraphs: string[] = [];
  let paragraphLength = 0;

  const flushParagraphs = () => {
    if (!paragraphs.length) return;
    merged.push({ kind: "paragraph", text: paragraphs.join(" ") });
    paragraphs = [];
    paragraphLength = 0;
  };

  for (const item of visibleItems) {
    if (item.kind !== "paragraph") {
      flushParagraphs();
      merged.push(item);
      continue;
    }

    const nextLength = item.text.length + (paragraphs.length ? 1 : 0);
    if (paragraphs.length && paragraphLength >= targetChars * 0.55 && paragraphLength + nextLength > targetChars) {
      flushParagraphs();
    }
    paragraphs.push(item.text);
    paragraphLength += nextLength;
  }
  flushParagraphs();
  return merged;
};

const RenderItems = ({ items, compact = false, paragraphFlow = "column" }: { items: CopyItem[]; compact?: boolean; paragraphFlow?: ParagraphFlow }) => (
  <div className={`v3-copy${compact ? " v3-copy--compact" : ""}`}>
    {mergeParagraphRuns(items, paragraphFlow).map((item, index) => {
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
          {item.links.map((link) => <a key={`${link.href}-${link.label}`} className="v3-inline-link" href={link.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}>{link.label}<ArrowRight size={15} /></a>)}
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

const MEDIA_MENTIONS = [
  {
    name: "Telex / G7",
    href: "https://telex.hu/g7/kozelet/2025/05/03/menny-es-pokol-ot-ev-alatt-igy-epitettek-fel-a-negymilliardos-napelemes-ceget",
    title: "Menny és pokol öt év alatt – így építették fel a négymilliárdos napelemes céget",
  },
  {
    name: "Portfolio",
    href: "https://www.portfolio.hu/uzlet/20250316/par-ev-alatt-nemzetkozi-sikertortenetet-irt-egy-magyar-napelemes-ceg-747415",
    title: "Pár év alatt nemzetközi sikertörténetet írt egy magyar napelemes cég",
  },
  {
    name: "Index",
    href: "https://index.hu/gazdasag/2024/01/22/napelem-napelemek-zold-index-kormany-napenergia-lantos-csaba-aram-aramar-akkumulator/",
    title: "Index – A1 Solar médiamegjelenés",
  },
  {
    name: "HVG",
    href: "https://hvg.hu/kkv/20250304_ft-1000-startup-novekedes-napelem-a1",
    title: "FT 1000: az A1 Solar Európa leggyorsabban növekvő vállalatai között",
  },
  {
    name: "Világgazdaság",
    href: "https://www.vg.hu/vilaggazdasag-magyar-gazdasag/2026/08/backup-a1-solar-szenyan-tartalekuzem-aramszunet",
    title: "Világgazdaság – A1 Solar médiamegjelenés",
  },
] as const;

const MEDIA_ARTICLES = [
  {
    outlet: "Telex / G7",
    title: "Menny és pokol öt év alatt – így építették fel a négymilliárdos napelemes céget",
    intro: "A G7 részletes cégportréban mutatta be az A1 Solar történetét, növekedését, valamint azt, hogyan alkalmazkodott a vállalat a magyar napelemes piac néhány év alatt bekövetkezett jelentős változásaihoz. 2025. május 3.",
    href: "https://telex.hu/g7/kozelet/2025/05/03/menny-es-pokol-ot-ev-alatt-igy-epitettek-fel-a-negymilliardos-napelemes-ceget",
  },
  {
    outlet: "Portfolio",
    title: "Pár év alatt nemzetközi sikertörténetet írt egy magyar napelemes cég",
    intro: "A Portfolio önálló cégprofilban foglalkozott az A1 Solar fejlődésével, a vállalat növekedésével és a hazai napelemes piac kihívásaival. 2025. március 16.",
    href: "https://www.portfolio.hu/uzlet/20250316/par-ev-alatt-nemzetkozi-sikertortenetet-irt-egy-magyar-napelemes-ceg-747415",
  },
  {
    outlet: "HVG",
    title: "Már eldőltek az első dominók: választás utáni összeomlástól fél a napelemes szakma",
    intro: "A HVG részletes háttérelemzésben vizsgálta a hazai napelemes piac helyzetét, a támogatási programok hatását és az iparági szereplők előtt álló kihívásokat. A cikkben az A1 Solar tapasztalatai és szakmai álláspontja is hangsúlyosan megjelent. 2024. június 5.",
    href: "https://hvg.hu/kkv/20240605_lakossagi-napelemes-palyazat-napenergia-plusz-program-napelemes-cegek-kkv-k-a1-solar",
  },
  {
    outlet: "Index",
    title: "A kormány százezrek életéről döntött, és már túl is lehet a nehezén",
    intro: "Az Index részletes szakmai anyagban foglalkozott a napelemes piac változásaival, az új szabályozási környezettel és az energiatárolás szerepével. A cikkben az A1 Solar szakértői tapasztalatai is megjelentek. 2024. január 22.",
    href: "https://index.hu/gazdasag/2024/01/22/napelem-napelemek-zold-index-kormany-napenergia-lantos-csaba-aram-aramar-akkumulator/",
  },
  {
    outlet: "Portfolio",
    title: "Szabadesésben a hazai lakossági és céges napelemes piac",
    intro: "A Portfolio elemzése a magyar lakossági és vállalati napelemes piac jelentős visszaesését és annak okait vizsgálta. Az anyag elkészítéséhez az A1 Solar piaci tapasztalatait és adatait is felhasználták. 2024. június 5.",
    href: "https://www.portfolio.hu/gazdasag/20240605/szabadesesben-a-hazai-lakossagi-es-ceges-napelemes-piac-690475",
  },
  {
    outlet: "HVG",
    title: "Egy budafoki napelemcég lett Magyarország leggyorsabban növekvő vállalata",
    intro: "A HVG az A1 Solar Financial Times FT1000 rangsorban elért eredményéről számolt be. A vállalat a rangsorban a leggyorsabban növekvő magyar vállalkozásként szerepelt. 2025. március 4.",
    href: "https://hvg.hu/kkv/20250304_ft-1000-startup-novekedes-napelem-a1",
  },
  {
    outlet: "Világgazdaság",
    title: "Napelem áramszünet alatt? Így alakíthatja át bombabiztosra otthonát",
    intro: "A Világgazdaság az otthoni energiatárolás és a tartalék energiaellátás lehetőségeit mutatta be az A1 Solar szakmai tapasztalatain keresztül, kitérve a különböző backup-megoldások műszaki és költségoldalára is. 2026. augusztus 11.",
    href: "https://www.vg.hu/vilaggazdasag-magyar-gazdasag/2026/08/backup-a1-solar-szenyan-tartalekuzem-aramszunet",
  },
] as const;

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

  if (page.number === 5 && section.id === "milyen-teruleteken-dolgozunk") {
    const areas = section.items.find((item) => item.kind === "bullets");
    return (
      <section id={section.id} className="v3-section v3-career-areas">
        <div className="v3-section__heading">
          <span className="v3-section__number">01</span>
          <h2>{section.title}</h2>
        </div>
        <FactorGrid
          columns={3}
          items={(areas?.kind === "bullets" ? areas.items : []).map((label, areaIndex) => ({
            icon: featureIcon(areaIndex),
            label,
          }))}
        />
      </section>
    );
  }

  if (page.number === 5 && section.id === "nyitott-poziciok") {
    return (
      <section id={section.id} className="v3-section v3-career-openings">
        <div className="v3-section__heading">
          <span className="v3-section__number">02</span>
          <h2>{section.title}</h2>
        </div>
        {supplement}
      </section>
    );
  }

  if (page.number === 3) {
    if (section.id === "kiemelt-mediamegjelenesek") {
      return (
        <section id={section.id} className="v3-section v3-section--tiles v3-media-featured">
          <div className="v3-section__heading">
            <span className="v3-section__number">01</span>
            <h2>{section.title}</h2>
          </div>
          <FeatureTilesEqualRed
            items={MEDIA_ARTICLES.map((article, articleIndex) => ({
              icon: featureIcon(articleIndex),
              eyebrow: article.outlet,
              title: article.title,
              text: article.intro,
              href: article.href,
              linkLabel: "Cikk megnyitása",
              external: true,
            }))}
          />
        </section>
      );
    }

    if (section.id === "fo-szakmai-temaink-a-sajtoban") {
      const topics: { title: string; text: string }[] = [];
      for (const item of section.items) {
        if (item.kind === "subheading") topics.push({ title: item.text, text: "" });
        if (item.kind === "paragraph" && topics.length) {
          const topic = topics[topics.length - 1];
          topic.text = `${topic.text}${topic.text ? " " : ""}${item.text}`;
        }
      }
      return (
        <section id={section.id} className="v3-section v3-media-topics">
          <div className="v3-section__heading">
            <span className="v3-section__number">03</span>
            <h2>{section.title}</h2>
          </div>
          <FeatureGrid items={topics} />
        </section>
      );
    }

    if (section.id === "tovabbi-mediamegjelenesek") return null;

    if (section.id === "sajtokapcsolat") {
      return (
        <section id={section.id} className="v3-section v3-media-contact">
          <div className="v3-section__heading">
            <span className="v3-section__number">04</span>
            <h2>{section.title}</h2>
            <RenderItems items={textItems} paragraphFlow="wide" />
          </div>
          <div className="v3-media-archive">
            <h3>Összes médiamegjelenés</h3>
            <FaqList
              items={MEDIA_ARTICLES.map((article) => ({
                q: `${article.outlet} – ${article.title}`,
                a: (
                  <>
                    <p>{article.intro}</p>
                    <a href={article.href} target="_blank" rel="noopener noreferrer">
                      Cikk megnyitása <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  </>
                ),
              }))}
            />
          </div>
        </section>
      );
    }
  }

  if (page.number === 2) {
    if (index === 0) {
      return (
        <section id={section.id} className="v3-section v3-section--mosaic v3-about-origin">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <RenderItems items={textItems} paragraphFlow="wide" />
          </div>
          <ProjectMosaic items={editorials.map((item, mediaIndex) => mosaicItemFor(page, section, item, index, mediaIndex))} />
        </section>
      );
    }

    if (index === 1) {
      return (
        <section id={section.id} className="v3-section v3-about-timeline">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <RenderItems items={textItems} />
            <div className="v3-about-timeline__video" data-video-embed-slot>
              <span className="v3-about-timeline__play" aria-hidden="true"><Play size={24} fill="currentColor" /></span>
              <div>
                <strong>Videó beillesztési helye</strong>
                <p>A mérföldkövekhez kapcsolódó videó ebben a blokkban jelenhet meg.</p>
              </div>
            </div>
          </div>
          <StepTimeline
            variant="years"
            items={[
              { num: "2013", title: "Szakmai alapok", text: "A Szorgos Vill Kft. és a Blyxa Consulting Kft. még külön utakon." },
              { num: "2019", title: "A1 Solar", text: "2019-ben létrejött A1 Solar Kft a lakossági és kisvállalati rendszerekre fükuszálva." },
              { num: "2020", title: "Covid", text: "Induló vállalkozásként ez az év a túlélésről szólt, 50 millió forintos forgalommal zártunk." },
              { num: "2021–2022", title: "Kilő az árbevétel", text: "A forgalom előbb 700 millió, majd 2 milliárd forint fölé emelkedik. 2022 végén már teszteltük az első energiatárolós megoldásokat." },
              { num: "2023–2024", title: "Külpiac és nagykereskedelem", text: "Megkezdtük a kivitelezési munkákat Ausztriában és elindult a nagykereskedelmi üzletágunk." },
              { num: "2025", title: "Az első projekt Afrikában", text: "Zanzibár szigetén kezdtük meg az első, Európán kívüli telepítésünket" },
              { num: "2026", title: "7 MWh projekt", text: "Megkezdtük eddigi legnagyobb beruházásunkat egy 7 MWh tárolókapacitású komplex napelemes rendszer kiépítését" },
            ]}
          />
        </section>
      );
    }

    if (index === 2) {
      return (
        <div className="v3-section v3-section--dark v3-about-system">
          <DarkFeature id={section.id} eyebrow={number} title={section.title}>
            <RenderItems items={section.items} />
          </DarkFeature>
        </div>
      );
    }

    if (index === 3) {
      const imageEditorials = editorials.filter((item) => !item.mediaType.toUpperCase().includes("VIDEÓ"));
      const videoEditorials = editorials.filter((item) => item.mediaType.toUpperCase().includes("VIDEÓ"));
      return (
        <section id={section.id} className="v3-section v3-section--mosaic v3-about-manufacturers">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <RenderItems items={textItems} paragraphFlow="wide" />
          </div>
          <ProjectMosaic items={imageEditorials.map((item, mediaIndex) => mosaicItemFor(page, section, item, index, mediaIndex))} />
          <div className="v3-about-manufacturers__video">
            {videoEditorials.map((item) => <Fragment key={item.details}>{mediaBrief(item)}</Fragment>)}
          </div>
        </section>
      );
    }

    if (index === 4) {
      const firstEditorialIndex = section.items.findIndex((item) => item.kind === "editorial");
      const leadItems = section.items.slice(0, firstEditorialIndex).filter((item) => item.kind !== "editorial");
      const laterItems = section.items.slice(firstEditorialIndex + 1).filter((item) => item.kind !== "editorial" && item.kind !== "link");
      const laterEditorials = editorials.slice(1);
      const continuation = (
        <div className="v3-section__copy v3-section__copy--continuation">
          <Eyebrow><Link href="/rolunk/szerviz-es-garancia/">Szerviz és garancia</Link></Eyebrow>
          <RenderItems items={laterItems} paragraphFlow="wide" />
          {laterEditorials.length ? (
            <ProjectMosaic items={laterEditorials.map((item, mediaIndex) => mosaicItemFor(page, section, item, index, mediaIndex + 1))} />
          ) : null}
        </div>
      );
      return (
        <section id={section.id} className="v3-section v3-section--overlap v3-about-international">
          <ImageOverlapLeftGraphite
            image={sectionImageFor(page, index)}
            imageAlt={`${page.h1} – ${section.title}`}
            continuation={continuation}
          >
            <div className="v3-section__copy">
              <span className="v3-section__number">{number}</span>
              <h2>{section.title}</h2>
              <RenderItems items={leadItems} />
            </div>
          </ImageOverlapLeftGraphite>
        </section>
      );
    }
  }

  if (family === "home") {
    if (index === 6) {
      return (
        <div className="v3-section v3-section--dark">
          <DarkFeature
            id={section.id}
            eyebrow={number}
            title={section.title}
            items={[
              { icon: <img src="/wp-content/uploads/brands/deye.png" alt="Deye" />, title: "", text: "" },
              { icon: <span className="dark-feature__wordmark">HUAWEI</span>, title: "", text: "" },
              { icon: <img src="/wp-content/uploads/brands/sigenergy.svg" alt="Sigenergy" />, title: "", text: "" },
              { icon: <img src="/wp-content/uploads/brands/foxess.png" alt="FoxESS" />, title: "", text: "" },
            ]}
          >
            <RenderItems items={section.items} />
            {supplement}
          </DarkFeature>
        </div>
      );
    }

    return (
      <section id={section.id} className="v3-section v3-section--overlap">
        <ImageOverlap image={image} imageAlt={imageAlt} side={index % 2 ? "left" : "right"} tone="red">
          <div className="v3-section__copy">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <RenderItems items={textItems} />
            {supplement}
            {editorials[0] ? mediaBrief(editorials[0]) : null}
          </div>
        </ImageOverlap>
      </section>
    );
  }

  if (editorials.length >= 2) {
    return (
      <section id={section.id} className="v3-section v3-section--mosaic">
        <div className="v3-section__heading">
          <span className="v3-section__number">{number}</span>
          <h2>{section.title}</h2>
          <RenderItems items={textItems} paragraphFlow="wide" />
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
        <RenderItems items={continuationItems} paragraphFlow="wide" />
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
            <RenderItems items={section.items.slice(0, bulletIndex)} paragraphFlow="wide" />
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
        <FramedHero
          className="v3-hero__frame"
          media={heroMedia}
          notch={page.number === 2 ? <img src="/images/brand/a1solar-badges.svg" alt="A1 Solar szakmai és pénzügyi minősítései" /> : undefined}
        >
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
  const aboutIntro = page.number === 2
    ? introRemainder.filter((item) => item.kind === "paragraph" && !item.text.startsWith("13 év szakmai múlt |"))
    : [];
  const homeIntroParagraphs = page.number === 1
    ? introRemainder.filter((item): item is Extract<CopyItem, { kind: "paragraph" }> => item.kind === "paragraph")
    : [];
  const homeIntro = homeIntroParagraphs.length >= 3 ? (
    <section className="v3-home-intro" aria-labelledby="v3-home-intro-title">
      <h2 id="v3-home-intro-title">{homeIntroParagraphs[0].text}</h2>
      <div className="v3-home-intro__copy">
        <p>{homeIntroParagraphs[2].text}</p>
        <p>{homeIntroParagraphs[1].text}</p>
      </div>
      <BigStats />
    </section>
  ) : null;
  const homeFactors = page.number === 1 ? (
    <section className="v3-home-factors" aria-labelledby="v3-home-factors-title">
      <h2 id="v3-home-factors-title">Amiben számíthatsz ránk:</h2>
      <FeatureTilesEqualRed
        items={[
          {
            icon: <DraftingCompass size={24} strokeWidth={1.8} />,
            eyebrow: "MÉRNÖKI TERVEZÉS",
            title: "A rendszer az igényeidhez igazodik",
            text: "A fogyasztás, a helyszíni adottságok és a jövőbeli energiaigény alapján tervezzük meg a műszakilag és gazdaságilag megfelelő rendszert.",
          },
          {
            icon: <HardHat size={24} strokeWidth={1.8} />,
            eyebrow: "MEGVALÓSÍTÁS",
            title: "Szakszerű kivitelezés, egy kézből",
            text: "A telepítést saját szakmai csapatunk koordinálja a helyszíni előkészítéstől az üzembe helyezésig és az átadásig.",
          },
          {
            icon: <FileCheck2 size={24} strokeWidth={1.8} />,
            eyebrow: "Pályázatírás",
            title: "A lehetőségektől a megvalósításig",
            text: "Segítünk eligazodni az elérhető támogatások között, és végigkísérjük a projektet a szükséges adminisztrációtól a megvalósításig.",
          },
          {
            icon: <Wrench size={24} strokeWidth={1.8} />,
            eyebrow: "Karbantartás és szerviz",
            title: "Az átadás után is számíthatsz ránk",
            text: "Karbantartással, hibafeltárással, monitoringgal és szerviztámogatással gondoskodunk a rendszer megbízható működéséről.",
          },
        ]}
      />
    </section>
  ) : null;

  return (
    <>
      <div className="container v3-content">
        <div className="v3-sections">
          {homeIntro}
          {aboutIntro.length ? (
            <Typography title="Rólunk">
              <RenderItems items={aboutIntro} paragraphFlow="wide" />
            </Typography>
          ) : null}
          {!homeIntro && !aboutIntro.length && (introRemainder.length || heroSupplement) ? (
            <section className="v3-intro-continuation" aria-label="Bevezető részletek">
              <RenderItems items={introRemainder} paragraphFlow="wide" />
              {heroSupplement ? <div className="v3-intro-supplement"><V3HeroSupplement pageNumber={page.number} /></div> : null}
            </section>
          ) : null}
          {page.sections.map((section, index) => (
            <Fragment key={section.id}>
              <V3Section page={page} section={section} index={index} layout={layout} />
              {index === 2 ? homeFactors : null}
            </Fragment>
          ))}
        </div>
      </div>
      {page.number === 2 ? (
        <section className="v3-about-media-cta" aria-label="További információ">
          <CtaButton href="/rolunk/media/">A1 Solar a médiában</CtaButton>
          <div className="v3-about-media-cta__logos" aria-label="Kiemelt médiamegjelenések">
            {MEDIA_MENTIONS.map((mention) => (
              <a key={mention.name} href={mention.href} target="_blank" rel="noopener noreferrer" title={mention.title}>
                <span>{mention.name}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>
      ) : null}
      {page.number === 1 || page.number === 2 ? <GoogleReviews /> : null}
    </>
  );
};
