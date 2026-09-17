import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Building2, Cpu, DraftingCompass, FileCheck2, Gauge, HardHat, ShieldCheck, SunMedium, Wrench } from "lucide-react";
import { Fragment } from "react";
import { FramedHeroBadges, type FramedHeroMedia } from "@/components/hero/FramedHero";
import {
  Bullets,
  BigStats,
  BrandBadges,
  BrandRow,
  CtaButton,
  DarkFeature,
  Eyebrow,
  FactorGrid,
  FactorGridCompact,
  FeatureGrid,
  FeatureTiles,
  FeatureTilesEqualRed,
  ImageOverlap,
  ImageOverlapLeftFloatingGraphite,
  ImageOverlapLeftGraphite,
  ImageOverlapRightFloatingGraphite,
  ProjectMosaic,
  NumberedList,
  Section,
  StepTimeline,
  StatementSection,
  Typography,
  type FeatureTileItem,
  type ProjectMosaicItem,
} from "@/components/section/SectionKit";
import { GoogleReviews } from "@/components/section/GoogleReviews";
import { ContactForm } from "@/components/ContactForm";
import { ArticleArchive } from "@/components/v3/ArticleArchive";
import { EditorialSlot } from "@/components/v3/EditorialSlot";
import { hasV3HeroSupplement, hasV3Supplement, V3HeroSupplement, V3Supplement } from "@/components/v3/V3Supplement";
import { getV3HeroMedia } from "@/lib/v3-hero-media";
import { getV3SectionMedia } from "@/lib/v3-curated-media";
import { MEDIA_OUTLETS } from "@/lib/media-outlets";
import { getPosts, postCard } from "@/lib/content";
import { RESIDENTIAL_STORAGE_PROJECTS, type ResidentialStorageProject } from "@/lib/residential-storage-projects";
import { getV3Layout, type CopyItem, type CopyPage, type CopySection } from "@/lib/v3-pages";

type ParagraphFlow = "wide" | "column" | "preserve";

const consolidatedReferenceHref = (href: string) => {
  if (href === "/referenciak/naperomu/") return "/referenciak/vallalati/#naperomu-referenciak";
  if (href === "/referenciak/bess-ipari/") return "/referenciak/vallalati/#bess-ipari-referenciak";
  return href;
};

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
        return <a key={index} className="v3-inline-link" href={consolidatedReferenceHref(item.href)} {...props}>{item.label}<ArrowRight size={15} /></a>;
      }
      if (item.kind === "linkList") return (
        <div key={index} className="v3-link-list">
          {item.links.map((link) => <a key={`${link.href}-${link.label}`} className="v3-inline-link" href={consolidatedReferenceHref(link.href)} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}>{link.label}<ArrowRight size={15} /></a>)}
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

type VisualFamily = "home" | "about" | "residential" | "commercial" | "industrial" | "references" | "technology" | "articles" | "contact";

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

const capitalizeFirst = (value: string) => value.charAt(0).toLocaleUpperCase("hu-HU") + value.slice(1);

const STORAGE_TECHNOLOGY_BRANDS = [
  { name: "Deye", logo: "/wp-content/uploads/brands/deye.png" },
  { name: "Huawei", logo: "/wp-content/uploads/brands/huawei.webp" },
  { name: "FoxESS", logo: "/wp-content/uploads/brands/foxess.png" },
  { name: "Sigenergy", logo: "/wp-content/uploads/brands/sigenergy.svg" },
];

const BACKUP_REFERENCE_PROJECTS: ResidentialStorageProject[] = [
  RESIDENTIAL_STORAGE_PROJECTS[8],
  {
    location: "Harta · Deye",
    solar: "Nincs feltüntetve",
    inverter: "Deye",
    battery: "Nincs feltüntetve",
    backup: "Igen",
    goal: "Kritikus fogyasztók áramszüneti tartalékellátása.",
    images: [
      { src: "/media/v3/images/backup-harta-deye-system.webp", alt: "Deye backup rendszer A1 Solar kivitelezésben Hartán" },
      { src: "/media/v3/images/backup-harta-pharmacy.webp", alt: "Backup rendszer egy hartai gyógyszertárnál" },
    ],
  },
  {
    location: "Mosonszolnok · Deye",
    solar: "Nincs feltüntetve",
    inverter: "Deye",
    battery: "Nincs feltüntetve",
    backup: "Igen",
    goal: "Lakossági energiatárolás és áramszüneti tartalékellátás.",
    images: [{ src: "/media/v3/images/backup-mosonszolnok-deye.webp", alt: "Deye energiatároló és backup rendszer Mosonszolnokon" }],
  },
  {
    location: "Helyszín nincs feltüntetve · Deye",
    solar: "Nincs feltüntetve",
    inverter: "Deye",
    battery: "Nincs feltüntetve",
    backup: "Igen",
    goal: "Lakossági backup és energiabiztonság.",
    images: [{ src: "/media/v3/images/backup-deye-orange-wall.webp", alt: "Deye inverter, akkumulátor és leválasztás egy A1 Solar backup rendszerben" }],
  },
];

const TEMPORARY_OFF_GRID_REFERENCE_PROJECTS = [
  RESIDENTIAL_STORAGE_PROJECTS[4],
  RESIDENTIAL_STORAGE_PROJECTS[8],
  RESIDENTIAL_STORAGE_PROJECTS[10],
  RESIDENTIAL_STORAGE_PROJECTS[11],
];

const RESIDENTIAL_REFERENCE_INTRO = "A fotók mellett a projekt legfontosabb műszaki adatait és célját is megmutatjuk, hogy látható legyen, milyen rendszer milyen feladatra készült. A referenciák között különböző méretű és kialakítású napelemes, energiatárolós és kapcsolódó lakossági rendszerek szerepelnek. Az egyes projektek adatai segítenek összehasonlítani, hogy eltérő fogyasztási igényekhez és felhasználási célokhoz milyen műszaki megoldásokat valósítottunk meg.";

const STORAGE_REFERENCE_MOSAIC = [
  {
    src: "/media/v3/images/residential-reference-balatonalmadi-sigenergy.webp",
    alt: "Sigenergy SigenStor energiatároló Balatonalmádiban",
    title: "Balatonalmádi · Sigenergy",
    text: "4,10 kWp napelem · 5 kW inverter · 10 kWh energiatároló",
  },
  {
    src: "/media/v3/images/home-retrofit-huawei-jaszszentlaszlo.webp",
    alt: "Huawei inverter és energiatároló Jászszentlászlón",
    title: "Jászszentlászló · Huawei",
    text: "5 kW inverter · 10 kWh energiatároló · 14 × 410 W napelem",
  },
  {
    src: "/media/v3/images/commercial-balatonlelle-sigenergy.webp",
    alt: "Sigenergy vállalati energiatároló rendszer Balatonlellén",
    title: "Balatonlelle · Sigenergy",
    text: "50 kW-os rendszer · 102 × 630 W napelem",
  },
  {
    src: "/media/v3/images/bess-foxess-gmax-team.webp",
    alt: "Magyarország első FoxESS G-MAX energiatároló rendszere Fertődön",
    title: "Fertőd · FoxESS G-MAX",
    text: "2 × 100 kW teljesítmény · 2 × 215 kWh kapacitás",
  },
] as const;

const COMMERCIAL_REFERENCE_MOSAIC = [
  {
    src: "/media/v3/images/commercial-allee-rooftop.webp",
    alt: "Az Allee Center tetőre szerelt napelemes rendszere",
    title: "Allee Center · Budapest",
    text: "Vállalati tetőre szerelt napelemes rendszer",
  },
  {
    src: "/media/v3/images/commercial-pecel-industrial-roof.webp",
    alt: "Ipari napelemes rendszer Pécelen",
    title: "Pécel · ipari telephely",
    text: "Nagy felületű vállalati napelemes projekt",
  },
  {
    src: "/media/v3/images/commercial-balatonlelle-sigenergy.webp",
    alt: "Sigenergy vállalati energiatároló rendszer Balatonlellén",
    title: "Balatonlelle · Sigenergy",
    text: "Napelem és vállalati energiatárolás egy rendszerben",
  },
] as const;

const COMMERCIAL_PROJECT_STEPS = [
  { num: "01", title: "Felmérés", text: "A telephely, a villamos infrastruktúra és a rendelkezésre álló felületek műszaki felmérése." },
  { num: "02", title: "Fogyasztási elemzés", text: "A napi és szezonális fogyasztási profil, valamint a várható jövőbeni energiaigény értékelése." },
  { num: "03", title: "Tervezés", text: "A vállalati célokhoz illeszkedő napelemes rendszer és szükség esetén energiatárolás megtervezése." },
  { num: "04", title: "Engedélyezés", text: "A projekthez szükséges hálózati és hatósági dokumentáció összeállítása és koordinálása." },
  { num: "05", title: "Kivitelezés", text: "A jóváhagyott műszaki tartalom szakszerű, ütemezett helyszíni megvalósítása." },
  { num: "06", title: "Monitoring", text: "A rendszer működésének és teljesítményének folyamatos követhetősége." },
  { num: "07", title: "Szerviz", text: "Hosszú távú műszaki háttér, karbantartás és célzott hibafeltárás." },
];

const ResidentialReferenceGrid = ({
  projects,
  titlePrefix = "A1 Solar napelem + energiatároló referencia",
}: {
  projects: ResidentialStorageProject[];
  titlePrefix?: string;
}) => (
  <div className="v3-residential-references__grid">
    {projects.map((project) => (
      <article className="v3-residential-reference" key={project.location}>
        <div className={`v3-residential-reference__media${project.images.length > 1 ? " v3-residential-reference__media--pair" : ""}`}>
          {project.images.map((projectImage) => (
            <div className="v3-residential-reference__image" key={projectImage.src}>
              <Image
                src={projectImage.src}
                alt={projectImage.alt}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 33vw"
                style={{ objectFit: "cover", objectPosition: projectImage.position ?? "center" }}
              />
            </div>
          ))}
        </div>
        <div className="v3-residential-reference__body">
          <span className="v3-residential-reference__location">{project.location}</span>
          <h3>{titlePrefix} – {project.location}</h3>
          <dl>
            <div><dt>Napelem</dt><dd>{project.solar}</dd></div>
            <div><dt>Inverter</dt><dd>{project.inverter}</dd></div>
            <div><dt>Akkumulátor</dt><dd>{project.battery}</dd></div>
            <div><dt>Backup</dt><dd>{project.backup}</dd></div>
            <div><dt>Projekt célja</dt><dd>{project.goal}</dd></div>
          </dl>
        </div>
      </article>
    ))}
  </div>
);

const CommercialReferenceGrid = ({ count = 6 }: { count?: number }) => (
  <div className="v3-residential-references__grid v3-commercial-references__grid">
    {Array.from({ length: count }, (_, index) => ({ number: String(index + 1).padStart(2, "0") })).map((project) => (
      <article className="v3-residential-reference v3-commercial-reference" key={project.number}>
        <div className="v3-commercial-reference__placeholder" aria-label={`Vállalati referenciakép ${project.number} feltöltésre vár`}>
          <span>KÉP {project.number}</span>
        </div>
        <div className="v3-residential-reference__body">
          <span className="v3-residential-reference__location">VÁLLALATI REFERENCIA {project.number}</span>
          <h3>Helyszín és projektadatok feltöltésre várnak</h3>
          <dl>
            <div><dt>Helyszín</dt><dd>Feltöltés alatt</dd></div>
            <div><dt>Rendszer</dt><dd>Feltöltés alatt</dd></div>
            <div><dt>Üzemi cél</dt><dd>Feltöltés alatt</dd></div>
            <div><dt>Inverter</dt><dd>Feltöltés alatt</dd></div>
            <div><dt>A1 Solar feladata</dt><dd>Feltöltés alatt</dd></div>
          </dl>
        </div>
      </article>
    ))}
  </div>
);

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

const IndustrialContactSection = ({ pageNumber }: { pageNumber: number }) => {
  const copy = pageNumber === 21
    ? {
        eyebrow: "STANDALONE BESS",
        title: "Önálló energiatárolási projektet tervez?",
        text: "Írja meg, milyen műszaki, hálózati vagy üzleti célt szeretne elérni. Szakértőink az alapadatok áttekintése után felveszik Önnel a kapcsolatot, és segítenek kijelölni a következő lépést.",
        formName: "Standalone energiatárolás érdeklődés",
      }
    : pageNumber === 22
      ? {
          eyebrow: "PV + STORAGE",
          title: "Naperőművét energiatárolással egészítené ki?",
          text: "Küldje el a meglévő vagy tervezett PV-rendszer fő adatait és a tárolás célját. Segítünk megvizsgálni, milyen műszaki kialakítás illeszkedhet a projekthez.",
          formName: "PV + storage érdeklődés",
        }
      : {
          eyebrow: "AGGREGÁCIÓ ÉS FLEXIBILITÁS",
          title: "Flexibilitási vagy aggregációs lehetőséget vizsgál?",
          text: "Írja meg, milyen vezérelhető fogyasztó, termelő vagy energiatároló kapcsolódna a projekthez. Műszaki oldalról segítünk felmérni az integráció és a vezérelhetőség feltételeit.",
          formName: "Aggregáció és flexibilitás érdeklődés",
        };

  return (
    <section className="v3-industrial-contact" aria-labelledby={`industrial-contact-${pageNumber}`}>
      <div className="container v3-industrial-contact__layout">
        <div className="v3-industrial-contact__copy">
          <span>{copy.eyebrow}</span>
          <h2 id={`industrial-contact-${pageNumber}`}>{copy.title}</h2>
          <p>{copy.text}</p>
        </div>
        <div className="v3-industrial-contact__form">
          <ContactForm
            formName={copy.formName}
            heading="Vegye fel velünk a kapcsolatot"
            intro="Adja meg elérhetőségét és a projekt rövid leírását; munkatársunk hamarosan jelentkezik."
            submitLabel="Kapcsolatfelvétel küldése"
            bare
          />
        </div>
      </div>
    </section>
  );
};

const sectionImageFor = (page: CopyPage, sectionId: string, mediaIndex = 0) => {
  const media = getV3SectionMedia(page.url, sectionId, mediaIndex);
  return media.type === "video" ? media.poster ?? getV3HeroMedia(page.url).src : media.src;
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
  mediaIndex: number,
): ProjectMosaicItem => {
  const lines = item.details.split(/\r?\n/).filter(Boolean);
  const media = getV3SectionMedia(page.url, section.id, mediaIndex);
  const aboutImageTitle = page.number === 2
    ? lines.find((line) => /^Képcím:/i.test(line))?.replace(/^Képcím:\s*/i, "")
        .replace("[HELYSZÍN]", "Zanzibár")
    : undefined;
  return {
    image: media.type === "video" ? media.poster ?? sectionImageFor(page, section.id, mediaIndex) : media.src,
    video: media.type === "video" && item.mediaType.toUpperCase().includes("VIDEÓ") ? media.src : undefined,
    imageAlt: media.alt,
    imagePosition: media.position,
    location: page.number === 2 ? "" : `${item.mediaType}${item.placement ? ` · ${item.placement}` : ""}`,
    title: aboutImageTitle || lines[0] || section.title,
    meta: page.number === 2 ? undefined : lines.slice(1).join(" "),
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
  const sectionMedia = getV3SectionMedia(page.url, section.id);
  const image = sectionMedia.type === "video" ? sectionMedia.poster ?? getV3HeroMedia(page.url).src : sectionMedia.src;
  const imageAlt = sectionMedia.alt;
  const sectionVideo = sectionMedia.type === "video" ? sectionMedia.src : undefined;
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

    if (section.id === "hol-jelent-meg-az-a1-solar") {
      return (
        <section id={section.id} className="v3-section v3-media-outlets">
          <div className="v3-section__heading">
            <span className="v3-section__number">02</span>
            <h2>{section.title}</h2>
          </div>
          <div className="v3-media-outlets__panel">
            {MEDIA_OUTLETS.map((outlet) => (
              <article className="v3-media-outlet" key={outlet.name}>
                <a
                  className="v3-media-outlet__brand"
                  href={outlet.articles[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${outlet.name} – legfrissebb megjelenés`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={outlet.logo} alt={`${outlet.name} logó`} />
                  <strong>{outlet.name}</strong>
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <details className="v3-media-outlet__details">
                  <summary>{outlet.articles.length > 1 ? `${outlet.articles.length} megjelenés` : "Cikk megnyitása"}</summary>
                  <div className="v3-media-outlet__articles">
                    {outlet.articles.map((article) => (
                      <a href={article.href} target="_blank" rel="noopener noreferrer" key={`${article.date}-${article.title}`}>
                        <span>{article.date}</span>
                        <strong>{article.title}</strong>
                      </a>
                    ))}
                  </div>
                </details>
              </article>
            ))}
          </div>
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
        </section>
      );
    }
  }

  if (page.number === 4) {
    if (section.id === "nem-er-veget-a-kapcsolat-a-telepitessel") {
      const editorialIndex = section.items.findIndex((item) => item.kind === "editorial");
      const leadItems = section.items.slice(0, editorialIndex).filter((item) => item.kind !== "editorial");
      const helpItems = section.items.slice(editorialIndex + 1).filter((item) => item.kind !== "editorial");
      const helpTitle = helpItems[0]?.kind === "paragraph" ? helpItems[0].text : "Miben segít az A1 Solar szerviz?";
      const helpBody = helpItems[0]?.kind === "paragraph" ? helpItems.slice(1) : helpItems;

      return (
        <section id={section.id} className="v3-section v3-section--overlap v3-service-intro">
          <ImageOverlap
            image={image}
            imageAlt={imageAlt}
            imagePosition={sectionMedia.position}
            side="right"
            tone="graphite"
            continuation={(
              <div className="v3-service-intro__help">
                <h3>{helpTitle}</h3>
                <RenderItems items={helpBody} paragraphFlow="wide" />
              </div>
            )}
          >
            <div className="v3-section__copy">
              <span className="v3-section__number">{number}</span>
              <h2>{section.title}</h2>
              <RenderItems items={leadItems} />
            </div>
          </ImageOverlap>
        </section>
      );
    }

    if (section.id === "igy-tortenik-a-szervizbejelentes") {
      const paragraphs = section.items.filter((item) => item.kind === "paragraph");
      const process = section.items.find((item) => item.kind === "editorial" && item.mediaType === "GRAFIKA");

      return (
        <section id={section.id} className="v3-section v3-section--overlap v3-service-process">
          <ImageOverlapLeftFloatingGraphite
            image={image}
            imageAlt={imageAlt}
            imagePosition={sectionMedia.position}
          >
            <div className="v3-section__copy">
              <span className="v3-section__number">{number}</span>
              <h2>{section.title}</h2>
              <RenderItems items={paragraphs} />
              {process?.kind === "editorial" ? <p className="v3-service-process__steps">{process.details}</p> : null}
            </div>
          </ImageOverlapLeftFloatingGraphite>
        </section>
      );
    }

    if (section.id === "kozvetlen-gyartoi-hatter") {
      return (
        <section id={section.id} className="v3-section v3-service-manufacturers">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <RenderItems items={textItems} paragraphFlow="wide" />
          </div>
        </section>
      );
    }

    if (section.id === "stabil-ceg-kell-egy-hosszu-elettartamu-rendszer-moge") {
      return (
        <section id={section.id} className="v3-section v3-service-stability">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <RenderItems items={textItems} paragraphFlow="wide" />
          </div>
          <BrandBadges />
        </section>
      );
    }

    if (section.id === "szervizbejelentes") {
      const promptSection = page.sections.find((candidate) => candidate.id === "ha-a1-solar-altal-telepitett-rendszerrel-kapcsolatban-muszaki-problemat-tapasztalsz-irj");
      const emailSection = page.sections.find((candidate) => candidate.id === "szerviz-a1solar-hu");
      const serviceText = emailSection?.items.find((item) => item.kind === "paragraph");
      const serviceCta = emailSection?.items.find((item) => item.kind === "cta");

      return (
        <div className="v3-section v3-section--dark v3-service-contact">
          <DarkFeature id={section.id} eyebrow={number} title={section.title}>
            <h3>{promptSection?.title}</h3>
            <a className="v3-service-contact__email" href="mailto:szerviz@a1solar.hu">szerviz@a1solar.hu</a>
            {serviceText?.kind === "paragraph" ? <p>{serviceText.text}</p> : null}
            <a className="btn btn-primary" href="mailto:szerviz@a1solar.hu">
              {serviceCta?.kind === "cta" ? serviceCta.label : "Szervizbejelentést küldök"}
              <ArrowRight size={17} />
            </a>
          </DarkFeature>
        </div>
      );
    }

    if (
      section.id === "ha-a1-solar-altal-telepitett-rendszerrel-kapcsolatban-muszaki-problemat-tapasztalsz-irj"
      || section.id === "szerviz-a1solar-hu"
    ) return null;
  }

  if (page.number === 6) {
    if (section.id === "nem-kulon-napelemet-es-akkumulatort-valasztunk-rendszert-tervezunk") {
      return (
        <section id={section.id} className="v3-section v3-section--overlap v3-residential-design">
          <ImageOverlapRightFloatingGraphite
            image={sectionImageFor(page, section.id)}
            imageAlt={sectionMedia.alt}
            imagePosition={sectionMedia.position}
          >
            <div className="v3-section__copy">
              <span className="v3-section__number">{number}</span>
              <h2>{section.title}</h2>
              <RenderItems items={textItems} />
            </div>
          </ImageOverlapRightFloatingGraphite>
          <figure className="v3-residential-design__graphic">
            <Image
              src="/media/v3/images/residential-storage-design-process.webp"
              alt="Az A1 Solar személyre szabott napelem, inverter, akkumulátor, fogyasztás és backup tervezési folyamata"
              width={1672}
              height={941}
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </figure>
        </section>
      );
    }

    if (section.id === "mit-ad-az-energiatarolo-a-napelemes-rendszerhez") {
      const batterySection = page.sections.find((candidate) => candidate.id === "mekkora-akkumulator-kell");
      return (
        <section className="v3-section v3-residential-duo" aria-label="Az energiatároló előnyei és méretezése">
          <div className="v3-residential-duo__item">
            <Section id={section.id} eyebrow={number} title={section.title}>
              <RenderItems items={section.items} paragraphFlow="wide" />
            </Section>
          </div>
          {batterySection ? (
            <div className="v3-residential-duo__item">
              <Section id={batterySection.id} eyebrow="03" title={batterySection.title}>
                <RenderItems items={batterySection.items} paragraphFlow="wide" />
              </Section>
            </div>
          ) : null}
        </section>
      );
    }

    if (section.id === "mekkora-akkumulator-kell") return null;

    if (section.id === "deye-huawei-sigenergy-es-foxess") {
      const brands = [
        { name: "Deye", href: "/technologiak/deye/", logo: "/wp-content/uploads/brands/deye.png" },
        { name: "Huawei", href: "/technologiak/huawei/", logo: "/wp-content/uploads/brands/huawei.webp" },
        { name: "Sigenergy", href: "/technologiak/sigenergy/", logo: "/wp-content/uploads/brands/sigenergy.svg" },
        { name: "FoxESS", href: "/technologiak/foxess/", logo: "/wp-content/uploads/brands/foxess.png" },
      ];

      return (
        <section id={section.id} className="v3-section v3-residential-brand-section">
          <div className="v3-residential-brand-section__copy">
            <Section eyebrow={number} title={section.title}>
              <RenderItems items={section.items.filter((item) => item.kind !== "linkList")} paragraphFlow="wide" />
            </Section>
          </div>
          <div className="v3-residential-brands" aria-label="Lakossági energiatároló technológiai partnerek">
            {brands.map((brand) => (
              <Link className="v3-residential-brand" href={brand.href} key={brand.name} aria-label={`${brand.name} technológiai oldal`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={brand.logo} alt={`${brand.name} logó`} />
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      );
    }

    if (section.id === "a-rendszer-atadasa-utan-is-szamithatsz-rank") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <RenderItems items={section.items} paragraphFlow="wide" />
          </Section>
        </section>
      );
    }

    if (section.id === "lakossagi-referenciak-nem-csak-igeretek") {
      const referenceLinks = section.items.filter((item) => item.kind === "linkList");
      return (
        <section id={section.id} className="v3-section v3-residential-references">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <p>Valós A1 Solar projektek a telepített rendszer legfontosabb műszaki adataival.</p>
          </div>
          <ResidentialReferenceGrid projects={RESIDENTIAL_STORAGE_PROJECTS} />
          <RenderItems items={referenceLinks} />
        </section>
      );
    }
  }

  if (page.number === 7) {
    if (section.id === "nem-minden-napelemes-rendszert-ugyanugy-kell-boviteni") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow="01" title={section.title}>
            <RenderItems items={section.items} paragraphFlow="wide" />
          </Section>
        </section>
      );
    }

    if (section.id === "meglevo-hibrid-inverter-akkumulator") {
      const inverterChange = page.sections.find((candidate) => candidate.id === "invertercsere-akkumulator");
      const customSystem = page.sections.find((candidate) => candidate.id === "egyedi-rendszerkialakitas");
      const featureText = (candidate: CopySection | undefined) => candidate?.items
        .filter((item): item is Extract<CopyItem, { kind: "paragraph" }> => item.kind === "paragraph")
        .map((item) => item.text)
        .join(" ") ?? "";

      return (
        <section id={section.id} className="v3-section v3-retrofit-paths">
          <div className="v3-section__heading">
            <span className="v3-section__number">02</span>
            <h2>Meglévő napelemes rendszer akkumulátoros bővítésének lehetséges útjai</h2>
          </div>
          <FeatureGrid
            items={[
              { title: "Meglévő inverter megtartása", text: featureText(section) },
              { title: "Invertercsere", text: featureText(inverterChange) },
              { title: "Egyedi kialakítás", text: featureText(customSystem) },
            ]}
          />
        </section>
      );
    }

    if (section.id === "invertercsere-akkumulator" || section.id === "egyedi-rendszerkialakitas") return null;

    if (section.id === "backup-is-kialakithato") {
      const paragraphs = section.items.filter((item): item is Extract<CopyItem, { kind: "paragraph" }> => item.kind === "paragraph");
      const backupText = paragraphs.slice(0, 2).map((item) => item.text).join(" ");
      const sizingText = paragraphs.slice(3).map((item) => item.text).join(" ");

      return (
        <section id={section.id} className="v3-section v3-retrofit-backup">
          <div className="v3-section__heading">
            <span className="v3-section__number">03</span>
            <h2>{section.title}</h2>
          </div>
          <FeatureGrid
            items={[
              { title: "Tartalék energiaellátás", text: backupText },
              { title: paragraphs[2]?.text ?? "Mekkora akkumulátort érdemes telepíteni?", text: sizingText },
            ]}
          />
          <div className="v3-retrofit-backup__cta">
            <CtaButton href="/lakossagi/backup-aramszuneti-megoldasok/">Backup megoldások</CtaButton>
          </div>
        </section>
      );
    }

    if (section.id === "valodi-bovitesi-referenciak") {
      const references = [
        {
          title: "Meglévő inverter megtartása",
          locationLabel: "Budapest · Huawei",
          project: RESIDENTIAL_STORAGE_PROJECTS[7],
          image: RESIDENTIAL_STORAGE_PROJECTS[7].images[1],
        },
        {
          title: "Invertercsere + akkumulátor",
          locationLabel: "Nagymaros · Sigenergy",
          project: RESIDENTIAL_STORAGE_PROJECTS[4],
          image: RESIDENTIAL_STORAGE_PROJECTS[4].images[1],
        },
        {
          title: "Más kivitelező rendszerének bővítése",
          locationLabel: "Atkár · Deye",
          project: RESIDENTIAL_STORAGE_PROJECTS[11],
          image: RESIDENTIAL_STORAGE_PROJECTS[11].images[0],
        },
      ];

      return (
        <section id={section.id} className="v3-section v3-retrofit-references">
          <h2>{section.title}</h2>
          <div className="v3-retrofit-references__grid">
            {references.map(({ title, locationLabel, project, image: projectImage }) => (
              <article className="v3-retrofit-reference" key={title}>
                <div className="v3-retrofit-reference__image">
                  <Image
                    src={projectImage.src}
                    alt={projectImage.alt}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: projectImage.position ?? "center" }}
                  />
                </div>
                <div className="v3-retrofit-reference__body">
                  <span>{locationLabel}</span>
                  <h3>{title}</h3>
                  <p>{project.inverter} · {project.battery} akkumulátor</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      );
    }

    if (
      section.id === "meglevo-inverter-megtartasa-helyszin"
      || section.id === "invertercsere-akkumulator-helyszin"
      || section.id === "mas-kivitelezo-rendszerenek-bovitese-helyszin"
    ) return null;
  }

  if (page.number === 8) {
    if (section.id === "tobb-vezeto-backup-technologiaval-dolgozunk") {
      return (
        <section className="v3-section v3-residential-text-section v3-backup-brands">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <RenderItems items={section.items} paragraphFlow="wide" />
            <div className="v3-backup-brands__logos">
              <BrandRow items={STORAGE_TECHNOLOGY_BRANDS} />
            </div>
          </Section>
        </section>
      );
    }

    if (section.id === "backup-referencia-helyszin") {
      return (
        <section id={section.id} className="v3-section v3-residential-references v3-reference-section">
          <div className="v3-section__heading">
            <span className="v3-section__number">05</span>
            <h2>Backup referenciák</h2>
            <p>Valós A1 Solar projektek a rendelkezésre álló műszaki adatokkal.</p>
          </div>
          <ResidentialReferenceGrid projects={BACKUP_REFERENCE_PROJECTS} titlePrefix="A1 Solar backup referencia" />
          <div className="v3-reference-section__cta"><CtaButton href="/kapcsolat/">Backup rendszerre kérek ajánlatot</CtaButton></div>
        </section>
      );
    }
  }

  if (page.number === 9) {
    if (section.id === "mibol-all-egy-szigetuzemu-rendszer") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <RenderItems items={section.items.filter((item) => item.kind !== "editorial")} paragraphFlow="wide" />
          </Section>
        </section>
      );
    }

    if (section.id === "szigetuzemu-referenciak") {
      return (
        <section id={section.id} className="v3-section v3-residential-references v3-reference-section">
          <div className="v3-section__heading">
            <span className="v3-section__number">04</span>
            <h2>{section.title}</h2>
            <p>Korábbi A1 Solar projektek a végleges szigetüzemű referenciafotók beérkezéséig.</p>
          </div>
          <ResidentialReferenceGrid projects={TEMPORARY_OFF_GRID_REFERENCE_PROJECTS} titlePrefix="Korábbi A1 Solar projekt" />
          <div className="v3-reference-section__cta"><CtaButton href="/kapcsolat/">Szigetüzemű rendszerre kérek ajánlatot</CtaButton></div>
        </section>
      );
    }
  }

  if (page.number === 10) {
    if (section.id === "miben-tudunk-segiteni") {
      const bulletItem = section.items.find((item) => item.kind === "bullets");
      const tiles = bulletItem?.kind === "bullets"
        ? bulletItem.items.map((title, tileIndex) => ({ icon: featureIcon(tileIndex), title: capitalizeFirst(title) }))
        : [];
      return (
        <section id={section.id} className="v3-section v3-section--tiles v3-maintenance-services">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
          </div>
          <FeatureTiles items={tiles} layout="mosaic" tone={tone} className="v3-maintenance-services__tiles" />
        </section>
      );
    }

    if (section.id === "tavoli-monitoring-es-diagnosztika") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <RenderItems items={section.items} paragraphFlow="wide" />
          </Section>
        </section>
      );
    }
  }

  if (page.number === 11) {
    if (section.id === "nem-csak-a-palyazatot-kell-megnyerni-a-rendszernek-mukodnie-is-kell") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <RenderItems items={section.items} paragraphFlow="wide" />
          </Section>
        </section>
      );
    }

    if (section.id === "mire-figyelj-palyazati-rendszer-valasztasakor") {
      const bulletIndex = section.items.findIndex((item) => item.kind === "bullets");
      const bulletItem = section.items[bulletIndex];
      const factors = bulletItem?.kind === "bullets"
        ? bulletItem.items.map((label, factorIndex) => ({ icon: featureIcon(factorIndex), label: capitalizeFirst(label) }))
        : [];
      return (
        <section className="v3-section v3-residential-text-section v3-grant-factors">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <FactorGridCompact items={factors} columns={2} />
            <RenderItems items={section.items.slice(bulletIndex + 1)} paragraphFlow="wide" />
          </Section>
        </section>
      );
    }
  }

  if (page.number === 12) {
    if (section.id === "napelem-onmagaban-vagy-energiatarolassal") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <RenderItems items={section.items} paragraphFlow="wide" />
          </Section>
        </section>
      );
    }

    if (section.id === "teljes-projektfolyamat") {
      return (
        <section className="v3-section v3-commercial-process">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <NumberedList items={COMMERCIAL_PROJECT_STEPS} />
          </Section>
        </section>
      );
    }

    if (section.id === "vallalati-referenciak") {
      return (
        <section id={section.id} className="v3-section v3-residential-references v3-reference-section v3-commercial-references">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <p>A hat vállalati referenciakártya elkészült; a végleges képek és projektadatok később tölthetők fel.</p>
          </div>
          <CommercialReferenceGrid />
          <div className="v3-reference-section__cta"><CtaButton href="/kapcsolat/">Vállalati napelemes ajánlatot kérek</CtaButton></div>
        </section>
      );
    }
  }

  if (page.number === 13) {
    if (section.id === "mikor-lehet-indokolt-az-energiatarolas") {
      const bulletItem = section.items.find((item) => item.kind === "bullets");
      const factors = bulletItem?.kind === "bullets"
        ? bulletItem.items.map((label, factorIndex) => ({ icon: featureIcon(factorIndex), label: capitalizeFirst(label) }))
        : [];
      return (
        <section className="v3-section v3-residential-text-section v3-commercial-factors">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <FactorGridCompact items={factors} columns={2} />
          </Section>
        </section>
      );
    }

    if (section.id === "nem-akkumulatorkapacitassal-kezdunk-hanem-adatokkal") {
      return (
        <section className="v3-section v3-residential-text-section v3-commercial-data-profile">
          <Section id={section.id} eyebrow={number} title={section.title}>
              <RenderItems items={section.items.filter((item) => item.kind !== "editorial")} paragraphFlow="wide" />
            <div className="v3-commercial-data-profile__image">
              <Image
                src="/media/v3/images/commercial-pv-storage-data-profile.png"
                alt="Vállalati napelem és energiatárolás adatalapú méretezése napi fogyasztási és termelési profillal"
                width={1680}
                height={909}
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          </Section>
        </section>
      );
    }

    if (section.id === "mikor-kell-inkabb-ipari-bess-megoldas") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <RenderItems items={section.items} paragraphFlow="wide" />
          </Section>
        </section>
      );
    }

    if (section.id === "referenciak") {
      return (
        <section id={section.id} className="v3-section v3-residential-references v3-reference-section v3-commercial-references">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <p>A négy vállalati napelem- és energiatároló-referenciakártya elkészült; a végleges képek és leírások később tölthetők fel.</p>
          </div>
          <CommercialReferenceGrid count={4} />
          <div className="v3-reference-section__cta"><CtaButton href="/kapcsolat/">Vállalati napelem + energiatároló ajánlatot kérek</CtaButton></div>
        </section>
      );
    }
  }

  if (page.number === 14) {
    if (section.id === "mit-vizsgalunk-meg") {
      const bulletItem = section.items.find((item) => item.kind === "bullets");
      const factors = bulletItem?.kind === "bullets"
        ? bulletItem.items.map((label, factorIndex) => ({ icon: featureIcon(factorIndex), label: capitalizeFirst(label) }))
        : [];
      return (
        <section className="v3-section v3-residential-text-section v3-commercial-factors">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <FactorGridCompact items={factors} columns={2} />
          </Section>
        </section>
      );
    }

    if (section.id === "nem-automatikusan-csereljuk-le-a-meglevo-rendszert") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <RenderItems items={section.items.filter((item) => item.kind !== "editorial")} paragraphFlow="wide" />
          </Section>
        </section>
      );
    }
  }

  if (page.number === 15) {
    if (section.id === "mire-terjedhet-ki-az-o-m") {
      const bulletItem = section.items.find((item) => item.kind === "bullets");
      const factors = bulletItem?.kind === "bullets"
        ? bulletItem.items.map((label, factorIndex) => ({ icon: featureIcon(factorIndex), label: capitalizeFirst(label) }))
        : [];
      return (
        <section className="v3-section v3-residential-text-section v3-commercial-factors">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <FactorGridCompact items={factors} columns={2} />
          </Section>
        </section>
      );
    }

    if (section.id === "energetikai-optimalizacio") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <RenderItems items={section.items.filter((item) => item.kind !== "editorial" && item.kind !== "link")} paragraphFlow="wide" />
          </Section>
        </section>
      );
    }
  }

  if (page.number === 16 && section.id === "mivel-kezdunk") {
    return (
      <section className="v3-section v3-residential-text-section">
        <Section id={section.id} eyebrow={number} title={section.title}>
          <RenderItems items={section.items.filter((item) => item.kind !== "editorial")} paragraphFlow="wide" />
        </Section>
      </section>
    );
  }

  if (page.number === 18 && section.id === "a-muszaki-projektet-a-palyazattol-fuggetlenul-is-jol-kell-megtervezni") {
    return (
      <section className="v3-section v3-residential-text-section">
        <Section id={section.id} eyebrow={number} title={section.title}>
          <div className="v3-copy v3-copy--wide">
            <p>A pályázati kiírás meghatározhatja a támogatható elemeket, de a rendszer méretezésének továbbra is a vállalat fogyasztásából, termelési profiljából, hálózati adottságaiból és üzleti céljaiból kell kiindulnia.</p>
            <p>Egy támogatott beruházás akkor jelent valódi üzleti előnyt, ha nemcsak megfelel a pályázati feltételeknek, hanem hosszú távon is illeszkedik a telephely energetikai működéséhez. Ezért a napelem, az energiatároló és az egyéb energetikai elemek műszaki tartalmát mindig az adott vállalkozás valós igényeihez érdemes igazítani.</p>
            <p>Az A1 Solar célja, hogy a támogatási lehetőség és a műszakilag indokolt rendszer ne két külön szempont legyen, hanem egy jól működő beruházásban találkozzon.</p>
          </div>
        </Section>
      </section>
    );
  }

  if (page.number === 18 && section.id === "a1-solar-szerepe") {
    const roles = [
      { title: "Műszaki felmérés és koncepció", text: "A telephely adottságainak és a fejlesztési céloknak megfelelő műszaki alapok meghatározása." },
      { title: "Napelem és energiatárolás méretezése", text: "A fogyasztási profilhoz és a pályázati keretekhez illeszkedő rendszer kialakítása." },
      { title: "Projektköltség és műszaki tartalom összehangolása", text: "A támogatható elemek és a valóban szükséges műszaki megoldás egyeztetése." },
      { title: "Kivitelezés, beüzemelés, monitoring és szerviz", text: "A projekt megvalósítása és hosszú távú műszaki támogatása egy kézből." },
    ];
    return (
      <section className="v3-section v3-residential-text-section v3-commercial-role">
        <Section id={section.id} eyebrow={number} title={section.title}>
          <FeatureGrid items={roles} />
          <RenderItems items={section.items.filter((item) => item.kind === "cta")} />
        </Section>
      </section>
    );
  }

  if (page.number === 19) {
    if (section.id === "naperomu-energiatarolas") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <div className="v3-copy v3-copy--wide">
              <p>A megújuló termelés és az energiatárolás integrációja olyan projektekben lehet fontos, ahol a hálózati korlátok, a termelési profil, az energiapiaci cél vagy a flexibilitás indokolja a tároló alkalmazását.</p>
              <p>Az energiatároló szerepe projektenként eltérő lehet: segítheti a termelés időbeli áthelyezését, a hálózati csatlakozás jobb kihasználását vagy az energiapiaci működés optimalizálását.</p>
              <p>A megfelelő műszaki kialakítást ezért mindig a naperőmű várható termelése, a csatlakozási adottságok és a projekt üzleti céljai alapján kell meghatározni.</p>
              <Link className="v3-inline-link" href="/ipari/pv-storage/">PV + storage<ArrowRight size={15} /></Link>
            </div>
          </Section>
        </section>
      );
    }

    if (section.id === "projektfolyamat") {
      return (
        <section className="v3-section v3-industrial-process">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <StepTimeline
              items={[
                { num: "01", title: "Helyszín és hálózat", text: "A terület, a csatlakozási adottságok és a projektcél feltérképezése." },
                { num: "02", title: "Koncepció", text: "A műszaki architektúra és a megvalósítási út meghatározása." },
                { num: "03", title: "Tervezés és engedélyezés", text: "Részletes tervek, egyeztetések és szükséges engedélyek előkészítése." },
                { num: "04", title: "Kivitelezés", text: "A naperőmű szakszerű, koordinált megvalósítása." },
                { num: "05", title: "Beüzemelés", text: "Mérések, próbaüzem és dokumentált műszaki átadás." },
                { num: "06", title: "Monitoring és O&M", text: "Folyamatos felügyelet, üzemeltetés és karbantartási támogatás." },
              ]}
            />
          </Section>
        </section>
      );
    }

    if (section.id === "naperomu-referenciak") {
      return (
        <section id={section.id} className="v3-section v3-industrial-reference">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>Naperőmű referencia</h2>
          </div>
          <article className="v3-industrial-reference__card">
            <div className="v3-industrial-reference__image">
              <Image
                src="/media/v3/images/tompa-2-2mw-solar-park.png"
                alt="Tompa 2,2 MW napelempark Huawei inverterekkel"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
            <div className="v3-industrial-reference__body">
              <span>Tompa</span>
              <h3 className="v3-industrial-reference__title--compact">Tompa, 2,2 MW napelempark Huawei inverterekkel</h3>
              <dl>
                <div><dt>Teljesítmény</dt><dd>2,2 MW</dd></div>
                <div><dt>Technológia</dt><dd>Huawei inverterek</dd></div>
              </dl>
              <div className="v3-industrial-reference__actions">
                <Link className="v3-inline-link" href="/referenciak/vallalati/#naperomu-referenciak">Naperőmű referenciák<ArrowRight size={15} /></Link>
                <CtaButton href="/kapcsolat/">Naperőmű projektről egyeztetek</CtaButton>
              </div>
            </div>
          </article>
        </section>
      );
    }
  }

  if (page.number === 20) {
    if (section.id === "mikor-lehet-indokolt-a-bess") {
      const factors = ["Peak shaving", "PV-többlet", "Energiaoptimalizálás", "Backup", "Flexibilitás"]
        .map((label, factorIndex) => ({ icon: featureIcon(factorIndex), label }));
      return (
        <section className="v3-section v3-residential-text-section v3-industrial-factors">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <RenderItems items={section.items.filter((item) => item.kind === "paragraph")} paragraphFlow="wide" />
            <FactorGridCompact items={factors} columns={2} />
          </Section>
        </section>
      );
    }

    if (section.id === "nem-akkumulatorkapacitassal-kezdunk-hanem-adatokkal") {
      return (
        <section className="v3-section v3-residential-text-section v3-commercial-data-profile">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <RenderItems items={section.items.filter((item) => item.kind !== "editorial")} paragraphFlow="wide" />
            <div className="v3-commercial-data-profile__image">
              <Image
                src="/media/v3/images/commercial-pv-storage-data-profile.png"
                alt="Adatalapú ipari energiatároló-méretezés fogyasztási, termelési és akkumulátorprofillal"
                width={1680}
                height={909}
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          </Section>
        </section>
      );
    }

    if (section.id === "mi-az-a-bess") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <div className="v3-copy v3-copy--wide">
              <p>A BESS – Battery Energy Storage System – olyan akkumulátoros energiatároló rendszer, amely az akkumulátor mellett teljesítményelektronikából, vezérlésből, biztonsági rendszerekből és jellemzően EMS-ből áll.</p>
              <p>A BESS értéke nem önmagában az eltárolható energiamennyiségből adódik, hanem abból, hogy a rendszer mikor, milyen teljesítménnyel és milyen üzleti cél szerint tölti vagy süti az akkumulátort. Ezért a vezérlés legalább olyan fontos része a rendszernek, mint maga az akkumulátor. A jól beállított EMS a termelési, fogyasztási és hálózati adatok alapján optimalizálja a működést.</p>
              <p>Ipari környezetben a BESS rendszer méretezését mindig az adott telephely működéséhez kell igazítani. Más rendszer szükséges peak shavinghez, más a napelemes többlet jobb felhasználásához, backuphoz vagy későbbi flexibilitási szolgáltatásokhoz. Ezért minden projektet egyedi energetikai és műszaki elemzésből indítunk.</p>
            </div>
          </Section>
        </section>
      );
    }

    if (section.id === "magyarorszag-elso-foxess-g-max-projektje") {
      return (
        <section className="v3-section v3-bess-project">
          <Section id={section.id} eyebrow={number} title="Magyarország első FoxESS G-MAX energiatároló rendszere">
            <div className="v3-copy v3-copy--wide">
              <p>Magyarország első FoxESS G-MAX energiatároló rendszerének telepítése az A1 Solar közreműködésével valósult meg.</p>
              <p>Kapacitás: 2x100 kW<br />Teljesítmény: 2x215 kWh<br />Projekt célja: Önogyasztás optimalizálása</p>
            </div>
            <div className="v3-bess-project-media">
              <div className="v3-bess-project-media__item">
                <Image src="/media/v3/images/bess-foxess-gmax-team.webp" alt="Magyarország első FoxESS G-MAX energiatároló rendszere" fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="v3-bess-project-media__item">
                <video controls playsInline preload="metadata" poster="/media/v3/images/bess-foxess-gmax-team.webp">
                  <source src="/media/v3/videos/foxess-gmax-ferod-commissioning.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </Section>
        </section>
      );
    }

    if (section.id === "7-mwh-energiatarolasi-projekt") {
      return (
        <section className="v3-section v3-bess-project">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <div className="v3-copy v3-copy--wide">
              <p>Jelenlegi legnagyobb energiatárolási projektünk 7 MWh tárolókapacitású vállalati/ipari BESS rendszer.</p>
              <p>Helyszín: Miskolc és Albertirsa<br />Tárolókapacitás: 2x3,5 MWh<br />Technológia: Sigenergy SigenStack<br />A1 Solar szerepe: generálkivitelező<br />Státusz: építés alatt</p>
            </div>
            <div className="v3-bess-centered-media">
              <Image src="/media/v3/images/sigenergy-7mwh-project-team.webp" alt="Az A1 Solar 7 MWh energiatárolási projektje" fill sizes="(max-width: 980px) 100vw, 900px" />
            </div>
          </Section>
        </section>
      );
    }

    if (section.id === "mennyi-ido-alatt-terul-meg") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <div className="v3-copy v3-copy--wide">
              <p>Erre nincs minden projektre érvényes válasz. A megtérülés függ a fogyasztási és termelési profiltól, az energiaáraktól, a teljesítménycsúcsoktól, a hálózati korlátoktól, a rendszer kihasználtságától és attól, milyen feladatokat lát el a BESS.</p>
              <p>Ezért megtérülést csak konkrét telephelyi adatok és valós üzemeltetési feltételek alapján érdemes számolni. A cél nem egy általános megtérülési ígéret, hanem annak meghatározása, hogy az adott rendszer milyen üzleti értéket tud teremteni.</p>
              <CtaButton href="/kapcsolat/">Műszaki és gazdasági BESS elemzést kérek</CtaButton>
            </div>
          </Section>
        </section>
      );
    }
  }

  if (page.number === 21) {
    if (section.id === "mire-hasznalhato") {
      const bulletItem = section.items.find((item) => item.kind === "bullets");
      const factors = bulletItem?.kind === "bullets"
        ? bulletItem.items.map((label, factorIndex) => ({ icon: featureIcon(factorIndex), label: capitalizeFirst(label) }))
        : [];
      return (
        <section className="v3-section v3-residential-text-section v3-industrial-factors">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <FactorGridCompact items={factors} columns={2} />
          </Section>
        </section>
      );
    }

    if (section.id === "a-rendszer-nem-csak-akkumulator") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <div className="v3-copy v3-copy--wide">
              <p>Egy standalone BESS az akkumulátormodulokon túl teljesítményelektronikát, EMS-t, védelmi és biztonsági rendszereket, kommunikációt, hálózati csatlakozást és megfelelő műszaki környezetet igényel.</p>
              <p>A rendszer valódi képességeit az határozza meg, hogyan működnek együtt ezek az elemek. Nem elég a megfelelő kapacitás: a töltési és kisütési teljesítmény, a hálózati kapcsolat, a vezérlés, a reakcióidő és a biztonsági logika együtt határozza meg, mire lesz képes a BESS a gyakorlatban.</p>
              <p>Ezért a standalone energiatárolót komplett energetikai infrastruktúraként kezeljük. A cél az, hogy a rendszer műszakilag stabilan, biztonságosan és az adott projekt üzleti vagy hálózati céljaihoz igazítva működjön.</p>
            </div>
          </Section>
        </section>
      );
    }

    if (section.id === "projektelokeszites") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <div className="v3-copy v3-copy--wide">
              <p>A tervezés a projektcél, a szükséges MW teljesítmény, MWh kapacitás, ciklusszám, csatlakozási feltételek, helyszíni adottságok és üzemeltetési modell meghatározásával kezdődik.</p>
              <p>Az első lépés annak tisztázása, hogy a rendszer pontosan milyen feladatot fog ellátni. Más műszaki kialakítás lehet indokolt energiapiaci működéshez, hálózati szolgáltatáshoz, teljesítménykezeléshez vagy több funkció együttes kiszolgálásához.</p>
              <p>Ezután következik a hálózati és helyszíni adottságok vizsgálata. Ilyen többek között a csatlakozási pont, a rendelkezésre álló kapacitás, a transzformátor és középfeszültségű infrastruktúra, a telepítési terület, valamint a tűzvédelmi és üzemeltetési környezet.</p>
              <p>A műszaki és üzleti paraméterekből áll össze a rendszer koncepciója: teljesítmény, kapacitás, PCS, akkumulátortechnológia, EMS, védelmi rendszer és csatlakozási architektúra. Csak ezután érdemes konkrét berendezést és szállítót választani.</p>
            </div>
          </Section>
        </section>
      );
    }
  }

  if (page.number === 22) {
    if (section.id === "a-meretezes-ket-rendszer-osszehangolasa") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <div className="v3-copy v3-copy--wide">
              <p>Megvizsgáljuk a PV-termelési profilt, a hálózati csatlakozást, a tárolás célját, a szükséges MW/MWh arányt, az EMS vezérlést, a töltési-kisütési logikát és a projekt üzemeltetési modelljét.</p>
              <p>A megfelelő rendszer kialakításánál nem elég külön meghatározni a naperőmű és az energiatároló méretét. A két rendszer működését együtt kell modellezni, hogy látható legyen, mikor keletkezik többlettermelés, mikor érdemes tölteni vagy kisütni az akkumulátort, és milyen hálózati vagy üzleti korlátokat kell figyelembe venni.</p>
              <p>Az EMS feladata, hogy ezt az összehangolt működést a gyakorlatban is megvalósítsa. A vezérlési logika a projekt céljaihoz igazodhat: például termelési csúcsok kisimításához, visszatáplálási korlátok kezeléséhez vagy az energia későbbi időpontra történő áthelyezéséhez.</p>
            </div>
          </Section>
        </section>
      );
    }

    if (section.id === "uj-es-meglevo-naperomu-melle-is-vizsgalhato") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <div className="v3-copy v3-copy--wide">
              <p>Az energiatárolás új naperőművi projekt részeként és meglévő PV-rendszer kiegészítéseként is vizsgálható. A műszaki megoldás a csatlakozási és projektfeltételektől függ.</p>
              <p>Meglévő naperőmű esetén különösen fontos a jelenlegi inverterek, transzformátorok, védelmek, mérési rendszer és hálózati csatlakozás vizsgálata. Ezek határozzák meg, hogy az energiatároló milyen módon és milyen korlátok mellett illeszthető a rendszerhez.</p>
              <p>Új projekt esetén a PV-rendszer és a BESS már a tervezés kezdetétől közös architektúrában kezelhető. Ez nagyobb szabadságot ad a teljesítmény, a kapacitás, a csatlakozás és a vezérlés optimalizálásában.</p>
              <p>Mindkét esetben ugyanaz az alapelv: előbb a projektcél és a rendelkezésre álló adatok, utána a konkrét technológia és rendszerkialakítás.</p>
            </div>
          </Section>
        </section>
      );
    }
  }

  if (page.number === 23) {
    if (section.id === "mi-kell-a-flexibilitashoz") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <div className="v3-copy v3-copy--wide">
              <p>A flexibilitás nem attól jön létre, hogy van egy akkumulátor vagy más vezérelhető eszköz. A rendszernek mérhetőnek, kommunikációképesnek és megfelelően vezérelhetőnek kell lennie ahhoz, hogy egy külső jelre vagy előre meghatározott logika alapján módosítani tudja a működését.</p>
              <p>A műszaki alkalmasság mellett fontos az adatkapcsolat megbízhatósága, a vezérlés reakcióideje, a rendelkezésre álló teljesítmény és energia, valamint az, hogy a rendszer mennyi ideig és milyen gyakran képes beavatkozásra. Ezek együtt határozzák meg, hogy az adott eszköz milyen flexibilitási feladatokra lehet alkalmas.</p>
              <p>A piaci részvételhez ezen felül megfelelő szerződéses és üzemeltetési modell is szükséges. Az elérhető lehetőségek és bevételi modellek konstrukciónként változhatnak, ezért ezeket mindig az aktuális partneri és piaci feltételek alapján kell vizsgálni.</p>
            </div>
          </Section>
        </section>
      );
    }

    if (section.id === "az-a1-solar-szerepe") {
      return (
        <section className="v3-section v3-residential-text-section">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <div className="v3-copy v3-copy--wide">
              <p>Az A1 Solar a műszaki oldalon a napelem, energiatároló, mérés, vezérlés és kapcsolódó rendszerek integrációját tudja támogatni. Az adott aggregációs vagy flexibilitási konstrukció pontos keretei mindig a konkrét projekt és piaci partner függvényei.</p>
              <p>A feladatunk annak biztosítása, hogy az energetikai rendszer műszakilag mérhető, vezérelhető és megfelelően integrálható legyen. Ez magában foglalhatja a mérési pontok, kommunikáció, EMS, inverterek, energiatárolók és egyéb vezérelhető eszközök összehangolását.</p>
              <p>Már a rendszer tervezésekor érdemes figyelembe venni a későbbi aggregációs vagy flexibilitási lehetőségeket. Így elkerülhető, hogy egy későbbi piaci csatlakozáshoz jelentős műszaki átalakításra legyen szükség.</p>
              <p>A konkrét energiapiaci részvételt, elszámolást és bevételi modellt mindig az adott aggregátorral vagy piaci partnerrel együtt kell kialakítani. Az A1 Solar szerepe elsősorban az ehhez szükséges műszaki alap megteremtése.</p>
            </div>
          </Section>
        </section>
      );
    }
  }

  if (page.number === 24 && section.id === "lakossagi-napelem-energiatarolo-helyszin") {
    const firstTwoRows = RESIDENTIAL_STORAGE_PROJECTS.slice(0, 6);
    const remainingProjects = RESIDENTIAL_STORAGE_PROJECTS.slice(6);
    return (
      <section id={section.id} className="v3-section v3-residential-references v3-reference-library">
        <div className="v3-section__heading">
          <span className="v3-section__number">{number}</span>
          <h2>Lakossági referenciák, nem csak ígéretek</h2>
          <p>Valós A1 Solar projektek a telepített rendszer legfontosabb műszaki adataival.</p>
        </div>
        <ResidentialReferenceGrid projects={firstTwoRows} />
        <div className="v3-reference-library__stats" aria-label="A1 Solar számokban">
          <BigStats />
        </div>
        {remainingProjects.length ? <ResidentialReferenceGrid projects={remainingProjects} /> : null}
        <div className="v3-reference-section__cta"><CtaButton href="/kapcsolat/">Hasonló lakossági rendszert szeretnék</CtaButton></div>
      </section>
    );
  }

  if ((page.number === 8 || page.number === 9) && editorials.length === 0) {
    return (
      <section className="v3-section v3-residential-text-section">
        <Section id={section.id} eyebrow={number} title={section.title}>
          <RenderItems items={section.items} paragraphFlow="wide" />
        </Section>
      </section>
    );
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
          <ProjectMosaic items={editorials.map((item, mediaIndex) => mosaicItemFor(page, section, item, mediaIndex))} />
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
            <div className="v3-about-timeline__video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/a-3vU7MlPTU?start=2&rel=0"
                title="Az A1 Solar története és fontosabb mérföldkövei"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
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
      const serviceLinks = section.items.find((item) => item.kind === "linkList");
      const serviceTiles = serviceLinks?.kind === "linkList"
        ? serviceLinks.links.map((link, tileIndex) => ({
            icon: featureIcon(tileIndex),
            title: link.label,
            text: "",
            href: link.href,
          }))
        : [];
      return (
        <div className="v3-section v3-section--dark v3-about-system">
          <DarkFeature id={section.id} eyebrow={number} title={section.title} items={serviceTiles} className="v3-about-system__services">
            <RenderItems items={section.items.filter((item) => item.kind !== "linkList")} />
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
          <ProjectMosaic items={imageEditorials.map((item, mediaIndex) => mosaicItemFor(page, section, item, mediaIndex))} />
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
      const serviceTitle = laterItems[0]?.kind === "paragraph" ? laterItems[0].text : "Nem csak telepítjük. Hosszú távon is mögötte állunk.";
      const serviceBody = laterItems[0]?.kind === "paragraph" ? laterItems.slice(1) : laterItems;
      const continuation = (
        <div className="v3-about-service-card">
          <Eyebrow><Link href="/rolunk/szerviz-es-garancia/">Szerviz és garancia</Link></Eyebrow>
          <h3>{serviceTitle}</h3>
          <RenderItems items={serviceBody} paragraphFlow="wide" />
        </div>
      );
      return (
        <section id={section.id} className="v3-section v3-section--overlap v3-about-international">
          <ImageOverlapLeftGraphite
            image={sectionImageFor(page, section.id)}
            imageAlt={sectionMedia.alt}
            continuation={continuation}
          >
            <div className="v3-section__copy">
              <span className="v3-section__number">{number}</span>
              <h2>{section.title}</h2>
              <RenderItems items={leadItems} />
            </div>
          </ImageOverlapLeftGraphite>
          {laterEditorials.length ? (
            <ProjectMosaic
              className="v3-about-international__gallery"
              items={laterEditorials.map((item, mediaIndex) => mosaicItemFor(page, section, item, mediaIndex + 1))}
            />
          ) : null}
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
            <RenderItems items={section.items.filter((item) => item.kind !== "link" && item.kind !== "linkList")} />
            {supplement}
          </DarkFeature>
        </div>
      );
    }

    return (
      <section id={section.id} className="v3-section v3-section--overlap">
        <ImageOverlap image={image} imageAlt={imageAlt} video={sectionVideo} side={index % 2 ? "left" : "right"} tone="red">
          <div className="v3-section__copy">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <RenderItems items={textItems} />
            {supplement}
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
        <ProjectMosaic items={editorials.map((item, mediaIndex) => mosaicItemFor(page, section, item, mediaIndex))} />
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
        <ImageOverlap image={image} imageAlt={imageAlt} video={sectionVideo} side={index % 2 ? "left" : "right"} tone={tone} continuation={continuation}>
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
        <FramedHeroBadges
          className="v3-hero__frame"
          media={heroMedia}
        >
          <div className="container v3-hero__inner">
            <div className="v3-hero__grid">
              <div className="v3-hero__copy">
                <span className="v3-kicker">{page.name}</span>
                <h1>{page.h1}</h1>
                {heroCopy.length ? <RenderItems items={heroCopy} compact /> : null}
              </div>
            </div>
          </div>
        </FramedHeroBadges>
      </header>

      <CopydeckBody page={page} />
    </article>
  );
};

export const CopydeckBody = ({ page }: { page: CopyPage }) => {
  if (page.number === 34) {
    const intro = page.intro.find((item): item is Extract<CopyItem, { kind: "paragraph" }> => item.kind === "paragraph");
    return (
      <div className="container v3-article-listing">
        {intro ? <p className="v3-article-listing__intro">{intro.text}</p> : null}
        <ArticleArchive posts={getPosts().map(postCard)} />
      </div>
    );
  }

  const renderReferenceSection = (section: CopySection, index: number) => {
    const number = String(index + 1).padStart(2, "0");
    if (page.number === 25) {
    if (section.id === "lakossagi-rendszerektol-a-tobb-mwh-s-ipari-energiatarolasig") {
      return (
        <section id={section.id} className="v3-section v3-storage-reference-intro">
          <div className="v3-section__heading v3-section__heading--full">
            <span className="v3-section__number">{number}</span>
            <h2>{section.title}</h2>
            <RenderItems items={section.items.filter((item) => item.kind === "paragraph")} paragraphFlow="wide" />
          </div>
          <div className="v3-storage-reference-mosaic">
            {STORAGE_REFERENCE_MOSAIC.map((item) => (
              <figure className="v3-storage-reference-mosaic__item" key={item.src}>
                <div className="v3-storage-reference-mosaic__image">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 720px) 100vw, 50vw" />
                </div>
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      );
    }

    if (section.id === "magyarorszag-elso-foxess-g-max-energiatarolo-rendszere") {
      return (
        <section className="v3-section v3-bess-project">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <div className="v3-copy v3-copy--wide">
              <p>Magyarország első FoxESS G-MAX energiatároló rendszerének telepítése az A1 Solar közreműködésével valósult meg.</p>
              <p>Helyszín: Fertőd<br />Teljesítmény: 2 × 100 kW<br />Tárolókapacitás: 2 × 215 kWh<br />Projekt célja: önfogyasztás optimalizálása</p>
            </div>
            <div className="v3-bess-project-media">
              <div className="v3-bess-project-media__item">
                <Image src="/media/v3/images/bess-foxess-gmax-team.webp" alt="Magyarország első FoxESS G-MAX energiatároló rendszere Fertődön" fill sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
              <div className="v3-bess-project-media__item">
                <video controls playsInline preload="metadata" poster="/media/v3/images/bess-foxess-gmax-team.webp">
                  <source src="/media/v3/videos/foxess-gmax-ferod-commissioning.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </Section>
        </section>
      );
    }

    if (section.id === "7-mwh-energiatarolasi-projekt") {
      return (
        <section className="v3-section v3-bess-project">
          <Section id={section.id} eyebrow={number} title={section.title}>
            <div className="v3-copy v3-copy--wide">
              <p>Jelenlegi legnagyobb energiatárolási projektünk 7 MWh tárolókapacitású vállalati és ipari BESS rendszer.</p>
              <p>Helyszín: Miskolc és Albertirsa<br />Tárolókapacitás: 2 × 3,5 MWh<br />Technológia: Sigenergy SigenStack<br />A1 Solar szerepe: generálkivitelező<br />Státusz: építés alatt</p>
            </div>
            <div className="v3-bess-centered-media">
              <Image src="/media/v3/images/sigenergy-7mwh-project-team.webp" alt="Az A1 Solar 7 MWh energiatárolási projektje" fill sizes="(max-width: 980px) 100vw, 900px" />
            </div>
          </Section>
        </section>
      );
    }

    if (section.id === "lakossagi-energiatarolo-referencia-helyszin") {
      const nagymaros = {
        ...RESIDENTIAL_STORAGE_PROJECTS[4],
        images: [{
          src: "/media/v3/images/residential-reference-nagymaros-sigenergy-storage.webp",
          alt: "Sigenergy SigenHybrid inverter és 10 kWh energiatároló Nagymaroson",
        }],
      };
      return (
        <section id={section.id} className="v3-section v3-residential-references v3-reference-section">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>Lakossági energiatároló referencia – Nagymaros</h2>
            <p>A 8,2 kWp napelemes rendszerhez Sigenergy SigenHybrid inverter és 10 kWh energiatároló készült, backup funkció nélkül.</p>
          </div>
          <ResidentialReferenceGrid projects={[nagymaros]} titlePrefix="Lakossági energiatároló referencia" />
        </section>
      );
    }

    if (section.id === "backup-referencia-helyszin") {
      return (
        <section id={section.id} className="v3-section v3-residential-references v3-reference-section">
          <div className="v3-section__heading">
            <span className="v3-section__number">{number}</span>
            <h2>Backup referencia – Harta</h2>
            <p>A rendszer célja a kritikus fogyasztók tartalékellátása áramszünet esetén. A Deye inverterrel kialakított megoldás a korábban bemutatott hartai A1 Solar referencia.</p>
          </div>
          <ResidentialReferenceGrid projects={[BACKUP_REFERENCE_PROJECTS[1]]} titlePrefix="A1 Solar backup referencia" />
        </section>
      );
    }

    if (section.id === "deye-referenciak") {
      const technologySections = page.sections.slice(5, 9);
      const tiles: FeatureTileItem[] = technologySections.map((technologySection, technologyIndex) => {
        const link = technologySection.items.find((item): item is Extract<CopyItem, { kind: "link" }> => item.kind === "link");
        const text = technologySection.items
          .filter((item): item is Extract<CopyItem, { kind: "paragraph" }> => item.kind === "paragraph")
          .map((item) => item.text)
          .join(" ");
        return {
          icon: featureIcon(technologyIndex),
          eyebrow: `0${technologyIndex + 6}`,
          title: technologySection.title,
          text,
          href: link?.href,
          linkLabel: link?.label,
        };
      });
      return (
        <section className="v3-section v3-storage-technologies" aria-label="Energiatároló technológiai referenciák">
          <FeatureTiles items={tiles} layout="mosaic" tone="graphite" />
        </section>
      );
    }

    if (["foxess-referenciak", "sigenergy-referenciak", "huawei-referenciak"].includes(section.id)) return null;
  }

    if (page.number === 26 && section.id === "backup-rendszer-helyszin") {
    return (
      <section id={section.id} className="v3-section v3-residential-references v3-reference-section">
        <div className="v3-section__heading">
          <span className="v3-section__number">{number}</span>
          <h2>Megvalósult backup rendszerek</h2>
          <p>Négy korábbi A1 Solar projekt a jelenleg rendelkezésre álló rendszeradatokkal. A végleges fotókat és műszaki adatokat a későbbi frissítéskor cseréljük.</p>
        </div>
        <ResidentialReferenceGrid projects={BACKUP_REFERENCE_PROJECTS} titlePrefix="A1 Solar backup referencia" />
        <div className="v3-reference-section__cta"><CtaButton href="/kapcsolat/">Backup rendszerre kérek ajánlatot</CtaButton></div>
      </section>
    );
    }

    if (page.number === 27 && section.id === "vallalati-projekt-helyszin") {
      return (
        <>
          <section id={section.id} className="v3-section v3-unified-commercial-references">
            <div className="v3-section__heading v3-section__heading--full">
              <span className="v3-section__number">01</span>
              <h2>Vállalati napelemes és energiatárolós projektek</h2>
              <p>Vállalati referenciáink között tetőre szerelt napelemes rendszerek, ipari telephelyek és energiatárolással kiegészített megoldások egyaránt szerepelnek.</p>
            </div>
            <div className="v3-unified-reference-grid">
              {COMMERCIAL_REFERENCE_MOSAIC.map((project) => (
                <article className="v3-unified-reference-card" key={project.src}>
                  <div className="v3-unified-reference-card__image">
                    <Image src={project.src} alt={project.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  </div>
                  <div className="v3-unified-reference-card__body">
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="naperomu-referenciak" className="v3-section v3-industrial-reference v3-unified-reference-section">
            <div className="v3-section__heading v3-section__heading--full">
              <span className="v3-section__number">02</span>
              <h2>Naperőmű referenciák</h2>
              <p>Nagy naperőművi projektjeinknél a projektméret, a technológia, a megvalósítás státusza és az A1 Solar szerepe is meghatározó.</p>
            </div>
            <article className="v3-industrial-reference__card">
              <div className="v3-industrial-reference__image">
                <Image src="/media/v3/images/tompa-2-2mw-solar-park.png" alt="Tompa 2,2 MW napelempark Huawei inverterekkel" fill sizes="(max-width: 1280px) 100vw, 1200px" />
              </div>
              <div className="v3-industrial-reference__body">
                <span>Tompa</span>
                <h3 className="v3-industrial-reference__title--compact">Tompa, 2,2 MW napelempark Huawei inverterekkel</h3>
                <dl>
                  <div><dt>Teljesítmény</dt><dd>2,2 MW</dd></div>
                  <div><dt>Technológia</dt><dd>Huawei inverterek</dd></div>
                </dl>
                <div className="v3-industrial-reference__actions">
                  <Link className="v3-inline-link" href="/ipari/naperomuvek/">Nagy naperőművek<ArrowRight size={15} /></Link>
                  <CtaButton href="/kapcsolat/">Naperőmű projektről egyeztetek</CtaButton>
                </div>
              </div>
            </article>
          </section>

          <section id="bess-ipari-referenciak" className="v3-section v3-unified-reference-section">
            <div className="v3-section__heading v3-section__heading--full">
              <span className="v3-section__number">03</span>
              <h2>Ipari és BESS referenciák</h2>
              <p>A nagyobb energiatárolási projekteknél a kapacitás és teljesítmény mellett a vezérlési logika, a hálózati környezet és a projektcél is fontos.</p>
            </div>

            <div className="v3-unified-bess-projects">
              <article className="v3-unified-bess-card">
                <div className="v3-unified-bess-card__media">
                  <Image src="/media/v3/images/bess-foxess-gmax-team.webp" alt="Magyarország első FoxESS G-MAX energiatároló rendszere Fertődön" fill sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <div className="v3-unified-bess-card__body">
                  <span>FERTŐD · FOXESS</span>
                  <h3>Magyarország első FoxESS G-MAX energiatároló rendszere</h3>
                  <p>Magyarország első FoxESS G-MAX rendszerének telepítése az A1 Solar közreműködésével valósult meg.</p>
                  <dl>
                    <div><dt>Teljesítmény</dt><dd>2 × 100 kW</dd></div>
                    <div><dt>Tárolókapacitás</dt><dd>2 × 215 kWh</dd></div>
                    <div><dt>Projekt célja</dt><dd>Önfogyasztás optimalizálása</dd></div>
                  </dl>
                </div>
              </article>

              <article className="v3-unified-bess-card">
                <div className="v3-unified-bess-card__media">
                  <Image src="/media/v3/images/sigenergy-7mwh-project-team.webp" alt="Az A1 Solar 7 MWh energiatárolási projektje" fill sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <div className="v3-unified-bess-card__body">
                  <span>MISKOL ÉS ALBERTIRSA · SIGENERGY</span>
                  <h3>7 MWh energiatárolási projekt</h3>
                  <p>Jelenlegi legnagyobb energiatárolási projektünk egy vállalati és ipari BESS rendszer.</p>
                  <dl>
                    <div><dt>Tárolókapacitás</dt><dd>2 × 3,5 MWh</dd></div>
                    <div><dt>Technológia</dt><dd>Sigenergy SigenStack</dd></div>
                    <div><dt>A1 Solar szerepe</dt><dd>Generálkivitelező</dd></div>
                    <div><dt>Státusz</dt><dd>Építés alatt</dd></div>
                  </dl>
                </div>
              </article>
            </div>
            <div className="v3-reference-section__cta"><CtaButton href="/kapcsolat/">Vállalati vagy ipari projektről egyeztetek</CtaButton></div>
          </section>
        </>
      );
    }

    return undefined;
  };

  const layout = getV3Layout(page);
  const heroSupplement = hasV3HeroSupplement(page.number);
  const heroSlotIndex = page.intro.findIndex(
    (item) => item.kind === "editorial" && item.placement.trim().toUpperCase() === "HERO",
  );
  const ctaIndex = page.intro.findIndex((item) => item.kind === "cta");
  const introRemainder = page.intro
    .filter((item, index) => (
      index !== heroSlotIndex
      && index !== ctaIndex
      && !(heroSupplement && item.kind === "editorial")
      && !([23, 24, 27].includes(page.number) && item.kind === "editorial")
    ))
    .map((item, index) => (
      page.number === 24 && index === 0 && item.kind === "paragraph"
        ? { ...item, text: RESIDENTIAL_REFERENCE_INTRO }
        : item
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
          {page.sections.map((section, index) => {
            const referenceSection = renderReferenceSection(section, index);
            return (
              <Fragment key={section.id}>
                {referenceSection !== undefined ? referenceSection : <V3Section page={page} section={section} index={index} layout={layout} />}
                {index === 2 ? homeFactors : null}
              </Fragment>
            );
          })}
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
      {[7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].includes(page.number) ? (
        <section className={page.number >= 19 && page.number <= 23 ? "v3-industrial-proof" : "v3-residential-proof"} aria-label="A1 Solar számokban">
          <div className="container">
            <BigStats />
          </div>
        </section>
      ) : null}
      {[21, 22, 23].includes(page.number) ? <IndustrialContactSection pageNumber={page.number} /> : null}
      {page.number === 26 ? (
        <section className="v3-residential-proof" aria-label="A1 Solar számokban">
          <div className="container"><BigStats /></div>
        </section>
      ) : null}
      {page.number === 24 ? (
        <section className="v3-reference-brand-badges" aria-label="A1 Solar díjak és szakmai minősítések">
          <div className="container"><BrandBadges /></div>
        </section>
      ) : null}
      {page.number === 1 || page.number === 2 || [7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 24, 26].includes(page.number) ? <GoogleReviews /> : null}
    </>
  );
};
