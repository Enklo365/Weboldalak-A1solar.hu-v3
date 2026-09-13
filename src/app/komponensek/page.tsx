import { BatteryCharging, CircleGauge, Clock, Gauge, Headphones, HousePlug, Maximize2, Network, Plug, ShieldCheck, WalletCards, Wrench, Zap } from "lucide-react";
import type { ReactNode } from "react";

import { ContactForm } from "@/components/ContactForm";
import { BackupLeadForm } from "@/components/page/campaign/BackupLeadForm";
import { LandingHero } from "@/components/page/LandingHero";
import { NotchBanner, NotchHero } from "@/components/page/NotchHero";
import { NotchFormHero } from "@/components/page/NotchFormHero";
import {
  Body,
  BigStats,
  BrandRow,
  Bullets,
  CheckList,
  CompareCards,
  CtaBanner,
  CtaButton,
  DarkFeature,
  Eyebrow,
  FactorGrid,
  FaqList,
  FeatureTilesEqualGraphite,
  FeatureTilesEqualRed,
  FeatureTilesMosaicGraphite,
  FeatureTilesMosaicRed,
  FeatureGrid,
  InfoCallout,
  InfoCard,
  ImageOverlapLeftGraphite,
  ImageOverlapLeftRed,
  ImageOverlapRightGraphite,
  ImageOverlapRightRed,
  NumberedList,
  OfferCallout,
  ProjectMosaic,
  Reveal,
  RowDivider,
  Section,
  StatBanner,
  StatHighlight,
  StepTimeline,
  TagList,
} from "@/components/section/SectionKit";
import { ReferenceGallery } from "@/components/service/ReferenceGallery";
import { SupportWidget } from "@/components/service/SupportWidget";

export const metadata = {
  title: "Komponens katalógus | A1 Solar",
  robots: { index: false, follow: false },
};

const HERO_IMG = "/wp-content/uploads/2025/08/hibrid-napelem-backup-hero.jpg";
const REF_IMAGES = [
  "/wp-content/uploads/2022/08/szuha-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/Esztergom-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/budapest-3-napelem.jpg",
  "/wp-content/uploads/2022/08/Pecel-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/Budapest-2-napelem.jpg",
  "/wp-content/uploads/2022/08/Erd-napelem.jpg",
];

const ITEMS = ["Első pont a listában", "Második pont", "Harmadik, kicsit hosszabb pont a sortöréshez"];

const FEATURE_TILE_ITEMS = [
  {
    icon: <HousePlug size={24} strokeWidth={1.8} />,
    eyebrow: "Komplett megoldás",
    title: "Energia, ami hozzád igazodik",
    text: "A fogyasztási szokásaidra és az ingatlan adottságaira méretezett rendszert tervezünk.",
    href: "#",
    linkLabel: "Megoldások",
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.8} />,
    eyebrow: "Biztonság",
    title: "Megbízható működés",
    text: "Bevált komponensek, szakszerű kivitelezés és átlátható garanciális háttér.",
  },
  {
    icon: <WalletCards size={24} strokeWidth={1.8} />,
    eyebrow: "Megtérülés",
    title: "Kiszámíthatóbb költségek",
    text: "A saját termelés csökkenti a hálózati energiaáraknak való kitettséget.",
  },
  {
    icon: <Headphones size={24} strokeWidth={1.8} />,
    eyebrow: "Támogatás",
    title: "Végig melletted maradunk",
    text: "A felméréstől az üzembe helyezésig egy kézben tartjuk a teljes folyamatot.",
    href: "#",
    linkLabel: "Kapcsolat",
  },
];

const COMPONENTS = [
  "Eyebrow", "Body", "CtaButton", "Bullets", "CheckList", "TagList", "FactorGrid", "FeatureGrid",
  "NumberedList", "StepTimeline", "InfoCard", "CompareCards", "InfoCallout", "BrandRow",
  "FeatureTilesEqualRed", "FeatureTilesEqualGraphite", "FeatureTilesMosaicRed", "FeatureTilesMosaicGraphite",
  "DarkFeature",
  "ProjectMosaic",
  "BigStats",
  "ImageOverlapRightRed", "ImageOverlapLeftRed", "ImageOverlapRightGraphite", "ImageOverlapLeftGraphite",
  "StatHighlight", "StatBanner", "OfferCallout", "CtaBanner", "FaqList", "Reveal", "RowDivider",
  "Section", "SupportWidget", "ContactForm", "BackupLeadForm", "ReferenceGallery",
  "NotchHero", "NotchBanner", "NotchFormHero", "LandingHero",
];

/** Labeled demo wrapper. */
const Demo = ({ name, children, full = false }: { name: string; children: ReactNode; full?: boolean }) => (
  <section id={name} style={{ scrollMarginTop: "100px", marginTop: "56px" }}>
    <div style={{ marginBottom: "16px" }}>
      <code
        style={{ background: "var(--surface-3)", padding: "5px 12px", borderRadius: "8px", fontSize: "13px", color: "var(--brand-dark)", fontWeight: 600, fontFamily: "var(--font-mono)" }}
      >
        {`<${name} />`}
      </code>
    </div>
    <div style={full ? undefined : { maxWidth: "760px" }}>{children}</div>
  </section>
);

/**
 * Component catalogue — every reusable component rendered live with sample data.
 * Not indexed (styleguide / internal reference).
 */
const KomponensekPage = () => (
  <div>
    <div className="container" style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      <Eyebrow>Katalógus</Eyebrow>
      <h1 style={{ fontSize: "34px", fontWeight: 700, color: "var(--ink)", margin: "16px 0 0" }}>Komponens katalógus</h1>
      <p style={{ fontSize: "16px", color: "var(--ink-soft)", margin: "12px 0 0", maxWidth: "680px" }}>
        Az összes újrahasználható komponens élőben, mintaadatokkal. A kliens-komponensek (StepTimeline, FaqList,
        űrlapok) interaktívak.
      </p>

      {/* Index */}
      <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {COMPONENTS.map((c) => (
          <a
            key={c}
            href={`#${c}`}
            style={{ fontSize: "13px", background: "var(--surface-3)", color: "var(--ink)", padding: "6px 12px", borderRadius: "999px", textDecoration: "none" }}
          >
            {c}
          </a>
        ))}
      </div>

      <Demo name="Eyebrow"><Eyebrow>Címke szöveg</Eyebrow></Demo>

      <Demo name="Body"><Body>Ez egy standard bekezdés (16px, #4b5563). Több sornyi kifejtő szöveghez használjuk a szakaszokban.</Body></Demo>

      <Demo name="CtaButton"><CtaButton href="#">Ajánlatot kérek</CtaButton></Demo>

      <Demo name="Bullets"><Bullets items={ITEMS} /></Demo>

      <Demo name="CheckList"><CheckList items={ITEMS} /></Demo>

      <Demo name="TagList"><TagList items={["Csúcsterhelés", "Háromfázisú kialakítás", "Áthidalási idő", "Hálózat állapota"]} /></Demo>

      <Demo name="FactorGrid">
        <FactorGrid
          items={[
            { icon: <Gauge size={20} strokeWidth={1.9} />, label: "Pillanatnyi csúcsterhelés" },
            { icon: <Plug size={20} strokeWidth={1.9} />, label: "Egy- vagy háromfázisú kialakítás" },
            { icon: <Zap size={20} strokeWidth={1.9} />, label: "Nagyobb fogyasztók teljesítménye" },
            { icon: <Clock size={20} strokeWidth={1.9} />, label: "Elvárt áthidalási idő" },
            { icon: <Network size={20} strokeWidth={1.9} />, label: "Elektromos hálózat állapota" },
            { icon: <Maximize2 size={20} strokeWidth={1.9} />, label: "Későbbi bővítés lehetősége" },
          ]}
        />
      </Demo>

      <Demo name="FeatureGrid">
        <FeatureGrid
          items={[
            { title: "5000+ megvalósított rendszer", text: "Több ezer lakossági és vállalati telepítés tapasztalata." },
            { title: "Személyre szabott tervezés", text: "Az ingatlanodhoz illő rendszert tervezzük meg." },
            { title: "Teljes körű szolgáltatás", text: "A felméréstől az üzembe helyezésig." },
            { title: "Országos lefedettség", text: "Szakértőink egész Magyarországon elérhetők." },
          ]}
        />
      </Demo>

      <Demo name="FeatureTilesEqualRed" full>
        <FeatureTilesEqualRed items={FEATURE_TILE_ITEMS} />
      </Demo>

      <Demo name="FeatureTilesEqualGraphite" full>
        <FeatureTilesEqualGraphite items={FEATURE_TILE_ITEMS} />
      </Demo>

      <Demo name="FeatureTilesMosaicRed" full>
        <FeatureTilesMosaicRed items={FEATURE_TILE_ITEMS} />
      </Demo>

      <Demo name="FeatureTilesMosaicGraphite" full>
        <FeatureTilesMosaicGraphite items={FEATURE_TILE_ITEMS} />
      </Demo>

      <Demo name="DarkFeature" full>
        <DarkFeature
          eyebrow="Prémium rendszer"
          title="Intelligens energia, kompromisszumok nélkül"
          intro="A termelést, tárolást és fogyasztást egyetlen összehangolt rendszer kezeli — elegáns technológia a háttérben, egyszerű használat a mindennapokban."
          ctaLabel="Személyes konzultáció"
          ctaHref="#"
          note="Díjmentes műszaki egyeztetés, kötelezettségek nélkül."
          items={[
            {
              icon: <BatteryCharging size={23} strokeWidth={1.8} />,
              title: "Energiatárolás",
              text: "A napközben megtermelt energia este is rendelkezésre áll.",
            },
            {
              icon: <CircleGauge size={23} strokeWidth={1.8} />,
              title: "Okos vezérlés",
              text: "Automatikus optimalizálás az aktuális termelés és fogyasztás alapján.",
            },
            {
              icon: <ShieldCheck size={23} strokeWidth={1.8} />,
              title: "Biztonságos tartalék",
              text: "A fontos fogyasztók áramszünet esetén is működésben maradhatnak.",
            },
            {
              icon: <Wrench size={23} strokeWidth={1.8} />,
              title: "Teljes körű háttér",
              text: "Tervezés, kivitelezés és támogatás tapasztalt szakemberektől.",
            },
          ]}
        />
      </Demo>

      <Demo name="ProjectMosaic" full>
        <ProjectMosaic
          items={[
            {
              image: REF_IMAGES[0],
              imageAlt: "Családi ház napelemes rendszerrel Szuhán",
              location: "Szuha",
              title: "Energiatudatos otthon a Mátra lábánál",
              meta: "10,4 kWp · hibrid rendszer",
              href: "#",
              imagePosition: "center 58%",
            },
            {
              image: REF_IMAGES[1],
              imageAlt: "Napelemes rendszer Esztergomban",
              location: "Esztergom",
              title: "Modern családi ház",
              meta: "8,2 kWp",
              href: "#",
            },
            {
              image: REF_IMAGES[2],
              imageAlt: "Budapesti napelemes referencia",
              location: "Budapest",
              title: "Városi energiafüggetlenség",
              meta: "6,8 kWp · energiatároló",
              href: "#",
            },
            {
              image: REF_IMAGES[3],
              imageAlt: "Napelemes rendszer Pécelen",
              location: "Pécel",
              title: "Tetőre szabott teljesítmény",
              meta: "12,1 kWp",
              href: "#",
            },
            {
              image: REF_IMAGES[4],
              imageAlt: "Budapesti családi ház napelemekkel",
              location: "Budapest",
              title: "Fenntartható otthon hosszú távra",
              meta: "9,6 kWp · intelligens vezérlés",
              href: "#",
            },
          ]}
        />
      </Demo>

      <Demo name="BigStats" full>
        <BigStats
          items={[
            { value: "13 év", label: "szakmai tapasztalat" },
            { value: "2019 óta", label: "stabil A1 Solar működés" },
            { value: "5000+", label: "telepített rendszer" },
            { value: "Országos", label: "kivitelezés" },
            { value: "Stabil", label: "pénzügyileg stabil vállalkozás" },
          ]}
        />
      </Demo>

      <Demo name="NumberedList">
        <NumberedList
          items={[
            { num: "1", title: "Első lépés", text: "Rövid leírás az első lépésről." },
            { num: "2", title: "Második lépés", text: "Rövid leírás a második lépésről." },
            { num: "3", title: "Harmadik lépés", text: "Rövid leírás a harmadik lépésről." },
          ]}
        />
      </Demo>

      <Demo name="StepTimeline">
        <StepTimeline
          items={[
            { num: "1", title: "Ajánlatkérés", text: "Töltsd ki az űrlapot, és add meg az igényeidet." },
            { num: "2", title: "Műszaki egyeztetés", text: "Átbeszéljük az energiafogyasztást és az adottságokat." },
            { num: "3", title: "Felmérés és ajánlat", text: "Helyszíni felmérés, majd részletes ajánlat." },
            { num: "4", title: "Kivitelezés", text: "Telepítés, beállítás, üzembe helyezés." },
          ]}
        />
      </Demo>

      <Demo name="InfoCard">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <InfoCard title="Kártya kép nélkül">
            <Body>Az InfoCard szürke kártya címmel és tetszőleges tartalommal.</Body>
            <CheckList items={["Pont egy", "Pont kettő"]} />
          </InfoCard>
          <InfoCard title="Kártya képpel" image={HERO_IMG} imageAlt="Minta">
            <Body>Opcionális 16:9 kép a kártya tetején.</Body>
          </InfoCard>
        </div>
      </Demo>

      <Demo name="ImageOverlapRightRed" full>
        <ImageOverlapRightRed image={HERO_IMG} imageAlt="Hibrid napelemes rendszer energiatárolóval">
          <Section
            eyebrow="Energiafüggetlenség"
            title="A saját energiád akkor is rendelkezésre áll, amikor szükséged van rá"
            intro="A jobbról belógó szövegdoboz kiemeli a legfontosabb üzenetet anélkül, hogy megtörné a kép vizuális erejét."
          >
            <CtaButton href="#">Részletek</CtaButton>
          </Section>
        </ImageOverlapRightRed>
      </Demo>

      <Demo name="ImageOverlapLeftRed" full>
        <ImageOverlapLeftRed image={REF_IMAGES[0]} imageAlt="A1 Solar napelemes referencia" imagePosition="center 58%">
          <Section
            eyebrow="Megvalósult rendszer"
            title="Tervezéstől az átadásig egy kézben"
            intro="A bal oldali változat tükrözi a kompozíciót, így váltakozó oldalritmushoz is használható."
          >
            <CtaButton href="#">Referenciák</CtaButton>
          </Section>
        </ImageOverlapLeftRed>
      </Demo>

      <Demo name="ImageOverlapRightGraphite" full>
        <ImageOverlapRightGraphite image={HERO_IMG} imageAlt="Hibrid napelemes rendszer energiatárolóval">
          <Section
            eyebrow="Grafit változat"
            title="Nyugodtabb hangsúly, változatlanul erős kompozíció"
            intro="Az arculati grafit CTA és szürke címke visszafogottabb alternatívát ad a piros kiemelések helyett."
          >
            <CtaButton href="#">Részletek</CtaButton>
          </Section>
        </ImageOverlapRightGraphite>
      </Demo>

      <Demo name="ImageOverlapLeftGraphite" full>
        <ImageOverlapLeftGraphite image={REF_IMAGES[0]} imageAlt="A1 Solar napelemes referencia" imagePosition="center 58%">
          <Section
            eyebrow="Grafit változat"
            title="Bal oldali szövegdoboz semleges hangsúlyokkal"
            intro="A tükrözött változat ugyanazokat a grafit és világosszürke arculati tónusokat használja."
          >
            <CtaButton href="#">Referenciák</CtaButton>
          </Section>
        </ImageOverlapLeftGraphite>
      </Demo>

      <Demo name="CompareCards" full>
        <CompareCards
          items={[
            { title: "Alap csomag", subtitle: "Kinek ajánlott.", points: ["Előny egy", "Előny kettő", "Előny három"], footnote: "Rövid lábjegyzet." },
            { title: "Kiemelt csomag", subtitle: "Kinek ajánlott.", points: ["Előny egy", "Előny kettő", "Előny három"], footnote: "Rövid lábjegyzet.", highlighted: true },
          ]}
        />
      </Demo>

      <Demo name="InfoCallout">
        <InfoCallout>Kiemelt „fontos" üzenet — halvány piros doboz, info ikon, erős brand-piros szöveg.</InfoCallout>
      </Demo>

      <Demo name="BrandRow">
        <BrandRow
          items={[
            { name: "Deye", logo: "/wp-content/uploads/brands/deye.png" },
            { name: "FoxESS", logo: "/wp-content/uploads/brands/foxess.png" },
            { name: "Sigenergy", logo: "/wp-content/uploads/brands/sigenergy.svg" },
          ]}
        />
      </Demo>

      <Demo name="StatHighlight">
        <StatHighlight stats={[{ value: "0%", label: "kamat" }, { value: "6 hó", label: "futamidő" }]} note="Rövid megjegyzés a feltételekről." />
      </Demo>

      <Demo name="StatBanner" full>
        <StatBanner
          stats={[{ value: "0%", label: "kamat" }, { value: "6 hó", label: "futamidő" }]}
          body="Piros sunlight kártya nagy statokkal, alatta fehér CTA gomb."
          ctaLabel="Ajánlatot kérek"
          ctaHref="#"
        />
      </Demo>

      <Demo name="OfferCallout" full>
        <OfferCallout
          title="Figyelemfelkeltő cím"
          body="Rövid magyarázó szöveg a piros CTA-kártyán, szaggatott elválasztóval."
          prompt="Bal oldali prompt-szöveg a gomb mellett."
          ctaLabel="Ajánlatot kérek"
          ctaHref="#"
        />
      </Demo>

      <Demo name="CtaBanner" full>
        <CtaBanner eyebrow="Ajánlat" title="Piros CTA banner eyebrow-val" body="Cím + szöveg + gomb, alul." ctaLabel="Kapcsolat" ctaHref="#" />
      </Demo>

      <Demo name="FaqList">
        <FaqList
          items={[
            { q: "Ez egy gyakori kérdés?", a: "Igen — és ez a válasz rá, animált lenyitással." },
            { q: "Működik JS nélkül is?", a: "A landingen a natív variáns igen; itt a React-animált verzió fut." },
          ]}
        />
      </Demo>

      <Demo name="Reveal">
        <Reveal>
          <div style={{ background: "var(--surface-3)", borderRadius: "16px", padding: "24px" }}>
            <Body>Ez a doboz a Reveal wrapperben van — görgetéskor fade + felúszik. (Ha már látszik, lehet, hogy azonnal megjelent.)</Body>
          </div>
        </Reveal>
      </Demo>

      <Demo name="RowDivider"><RowDivider /></Demo>

      <Demo name="Section" full>
        <Section eyebrow="Szakasz" title="Szakasz-cím (30px / 500)" intro="Opcionális bevezető szöveg a cím alatt.">
          <Body>A Section összefogja az eyebrow-t, címet, bevezetőt és a gyerek-tartalmat.</Body>
          <CheckList items={["Beágyazott lista is mehet", "És bármi más"]} />
        </Section>
      </Demo>

      <Demo name="SupportWidget"><div style={{ maxWidth: "360px" }}><SupportWidget /></div></Demo>

      <Demo name="ContactForm"><ContactForm bare heading="Kapcsolatfelvétel" /></Demo>

      <Demo name="BackupLeadForm"><BackupLeadForm /></Demo>

      <Demo name="ReferenceGallery" full><ReferenceGallery images={REF_IMAGES} /></Demo>
    </div>

    {/* Full-width hero components */}
    <div className="container">
      <Demo name="NotchHero" full>
        <NotchHero
          eyebrow="Eyebrow"
          titleLight="Notch hero – világos rész"
          titleStrong="és a vastag rész"
          image={HERO_IMG}
          imageAlt="Minta"
          intro="Az intró a jobb-alsó notch-kivágásban ül."
          ctaLabel="Ajánlatot kérek"
          ctaHref="#"
        />
      </Demo>

      <Demo name="NotchBanner" full>
        <NotchBanner image={HERO_IMG} imageAlt="Minta – tartalom nélküli notch-banner (cikkekhez)" />
      </Demo>

      <Demo name="NotchFormHero" full>
        <NotchFormHero
          eyebrow="Eyebrow"
          titleLight="Form-hero – világos rész,"
          titleStrong="vastag rész"
          image={HERO_IMG}
          imageAlt="Minta"
          intro="Bal-alul intró + garancialista, jobb-alsó notch-ban az űrlap."
          ctaLabel="Ajánlatot kérek"
          ctaHref="#form-hero-demo"
          guaranteesTitle="Amit biztosítunk:"
          guarantees={["Garancia egy", "Garancia kettő", "Garancia három"]}
          formId="form-hero-demo"
          form={<BackupLeadForm hideHeader />}
        />
      </Demo>

      <Demo name="LandingHero" full>
        <LandingHero
          eyebrow="Eyebrow"
          titleLight="Full-bleed landing hero,"
          titleStrong="nagy képre írt cím"
          image={HERO_IMG}
          imageAlt="Minta"
          subtitle="Alcím a nagy cím alatt, sötét gradiens-fátyollal."
          ctaLabel="Ajánlatot kérek"
          ctaHref="#"
        />
      </Demo>
    </div>
  </div>
);

export default KomponensekPage;
