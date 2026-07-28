import type { CSSProperties, ReactNode } from "react";

import { OepHeroForm } from "@/components/page/campaign/OepHeroForm";
import { SITE } from "@/lib/site";

/** Shared clip-path geometry (matches NotchHero) for the hero photo. */
const HERO_NOTCH_ID = "oep-hero-notch-shape";
const HERO_GRADIENT = "linear-gradient(to right, #0A141Dcc 0%, rgba(10,20,29,0) 100%)";

/** Small brand-tint pill used as a section eyebrow. */
const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

/** Inline check mark used across benefit lists. `light` renders it for red backgrounds. */
const CheckIcon = ({ light = false }: { light?: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="12" fill={light ? "#fff" : "var(--brand)"} />
    <path
      d="M7 12.5l3 3 7-7"
      stroke={light ? "var(--brand)" : "#fff"}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Dashed row separator between the stacked main-column sections. */
const RowDivider = () => <hr style={{ border: 0, borderTop: "1px dashed #ececec", margin: "48px 0" }} />;

/** In-column content block: eyebrow + 30px heading + optional intro + children. */
type SectionProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

const Section = ({ eyebrow, title, intro, children }: SectionProps) => (
  <div>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="text-[var(--ink)]" style={{ marginTop: "18px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}>
      {title}
    </h2>
    {intro !== undefined ? (
      <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.75 }}>
        {intro}
      </p>
    ) : null}
    {children !== undefined ? <div className="mt-8">{children}</div> : null}
  </div>
);

/** Bold uppercase sub-label inside an info block. */
const SubHead = ({ children }: { children: ReactNode }) => (
  <p className="text-[var(--ink)]" style={{ margin: "28px 0 12px", fontSize: "16px", fontWeight: 700 }}>
    {children}
  </p>
);

/** Body paragraph inside an info block. */
const Body = ({ children }: { children: ReactNode }) => (
  <p className="text-[var(--ink-soft)]" style={{ margin: "0 0 14px", fontSize: "16px", lineHeight: 1.75 }}>
    {children}
  </p>
);

/** Bulleted list with a small brand dot. */
const Bullets = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: "0 0 14px" }}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span
          aria-hidden="true"
          style={{ flexShrink: 0, width: "8px", height: "8px", borderRadius: "9999px", background: "var(--brand)", marginTop: "9px" }}
        />
        <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
          {item}
        </span>
      </li>
    ))}
  </ul>
);

/** One highlight stat from the program brief. */
const Stat = ({ value, label }: { value: string; label: string }) => (
  <div
    className="flex flex-col items-center justify-center px-4 py-8 text-center"
    style={{ background: "var(--surface-3)", borderRadius: "20px" }}
  >
    <span style={{ color: "var(--brand)", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, lineHeight: 1 }}>{value}</span>
    <span className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "13px", lineHeight: 1.4 }}>
      {label}
    </span>
  </div>
);

/** One inverter / storage package tier from the OEP catalogue. */
type StoragePackage = {
  brand: string;
  image: string;
  ownFund: string;
  grant: string;
  backup: string;
  featured?: boolean;
};

const PackageCard = ({ brand, image, ownFund, grant, backup, featured = false }: StoragePackage) => (
  <div
    className="flex flex-col overflow-hidden"
    style={{ background: "#fff", borderRadius: "20px", border: featured ? "2px solid var(--brand)" : "2px solid var(--line)" }}
  >
    <div style={{ height: "150px", background: "#fff", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={brand} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    </div>
    <div className="flex flex-1 flex-col px-6 py-6">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>
          {brand}
        </h3>
        {featured ? (
          <span
            className="rounded-[30px] px-3 py-1 text-xs font-semibold uppercase tracking-[1px]"
            style={{ background: "var(--brand)", color: "#fff" }}
          >
            Ajánlott
          </span>
        ) : null}
      </div>

      <p className="text-[var(--ink-muted)]" style={{ margin: "16px 0 0", fontSize: "13px" }}>
        Önerő
      </p>
      <p className="text-[var(--ink)]" style={{ margin: "2px 0 0", fontSize: "18px", fontWeight: 700 }}>
        {ownFund}
      </p>

      <div
        className="mt-4 flex items-center justify-between py-3"
        style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
      >
        <span className="text-[var(--ink-soft)]" style={{ fontSize: "14px" }}>
          Támogatás
        </span>
        <span style={{ fontSize: "16px", fontWeight: 700, color: "var(--brand)" }}>{grant}</span>
      </div>

      <p className="mt-4 flex-1 text-[var(--ink-soft)]" style={{ fontSize: "14px", lineHeight: 1.55 }}>
        {backup}
      </p>

      <div className="mt-6">
        <a
          href="#jelentkezes"
          style={{ display: "block", textAlign: "center", background: "var(--brand)", color: "#fff", padding: "11px 20px", borderRadius: "9999px", fontWeight: 500 }}
        >
          Érdekel a csomag
        </a>
      </div>
    </div>
  </div>
);

const PACKAGES: StoragePackage[] = [
  {
    brand: "DEYE csomagok",
    image: "/wp-content/uploads/2026/01/DEYE.png",
    ownFund: "Már 0 Ft önerőtől",
    grant: "2,5 millió Ft",
    backup: "Opcionális backup funkció (ingyenes)",
    featured: true,
  },
  {
    brand: "FOX ESS csomagok",
    image: "/wp-content/uploads/2026/01/FOXESS.png",
    ownFund: "Már 0 Ft önerőtől",
    grant: "2,5 millió Ft",
    backup: "Opcionális backup funkció",
  },
  {
    brand: "SIGENERGY csomagok",
    image: "/wp-content/uploads/2026/01/SIGENERGY.png",
    ownFund: "Már 130 000 Ft önerőtől",
    grant: "2,5 millió Ft",
    backup: "Opcionális backup funkció",
  },
  {
    brand: "HUAWEI csomagok",
    image: "/wp-content/uploads/2026/01/HUAWEI.png",
    ownFund: "Már 835 600 Ft önerőtől",
    grant: "2,5 millió Ft",
    backup: "Opcionális backup funkció",
  },
];

/** Highlight stats derived directly from the program brief. */
const PROGRAM_STATS: { value: string; label: string }[] = [
  { value: "100 mrd Ft", label: "Program keretösszeg" },
  { value: "2,5 M Ft", label: "Maximális támogatás háztartásonként" },
  { value: "min. 10 kWh", label: "Támogatott tárolókapacitás" },
  { value: "24 hónap", label: "A megvalósításra rendelkezésre álló idő" },
];

/** Two webinar tracks. */
const WEBINARS: { badge: string; title: string; text: string }[] = [
  {
    badge: "Műszaki",
    title: "Műszaki webinárium",
    text: "Inverter- és energiatároló csomagok bemutatása (Fox ESS, Sigenergy, Deye, Huawei), valamint műszaki kérdések megválaszolása.",
  },
  {
    badge: "Pályázati",
    title: "Pályázati webinárium",
    text: "Bemutatjuk az igazolási szakasz teendőit, a szükséges adatokat, és kérdezz-felelekre is lesz lehetőség.",
  },
];

/** Contractor-partner mini cards. */
const PARTNER_STEPS: { title: string; text: string; cta: string }[] = [
  {
    title: "Benyújtotta a pályázatát és döntésre vár?",
    text: "Kérjen előzetes árajánlatot, hogy pozitív elbírálás esetén gyorsan tudjon dönteni.",
    cta: "Előzetes árajánlat kérése",
  },
  {
    title: "Nézze meg a regisztrált kivitelezők listáját!",
    text: "Ellenőrizze, hogy az A1 Solar Kft. szerepel a hivatalos, regisztrált kivitelezők között.",
    cta: "Kérek tájékoztatást",
  },
  {
    title: "Elfogadták a pályázatát?",
    text: "Jelölje kivitelezőnek az A1 Solar Kft.-t, és kérjen ajánlatot a pályázati felületen – a műszaki tartalmat és az árajánlatot ingyen elkészítjük.",
    cta: "Kérek ajánlatot",
  },
];

/** Extra loyalty perks. */
const PERKS: { title: string; text: string; image: string }[] = [
  {
    title: "100 000 Ft értékű fejlesztési kupon",
    text: "Minden velünk sikeresen megvalósított projekt után bruttó 100 000 Ft értékű kupont adunk, amit későbbi napelemes vagy energiatárolási fejlesztésekhez használhatsz fel az A1 Solar Kft.-nél.",
    image: "/wp-content/uploads/2025/10/ingyenespadlasszigeteles.png",
  },
  {
    title: "Álomutazás sorsolás – 2 fő részére",
    text: "Ha 2026. április 30-ig szerződsz velünk és Támogatói Okiratot kapsz, automatikusan részt veszel a sorsoláson. A nyertes egy 2 személyes, 5 napos álomutazást választhat: Zanzibár szigetére vagy Kínába.",
    image: "/wp-content/uploads/2025/12/Uj-lakossagi-energiatarolos-tamogatasi-program-indul-1024x667.png",
  },
];

const GUARANTEES: string[] = [
  "10+ év szakmai tapasztalat a megújuló energia piacán",
  "Országos lefedettség, gyors és átlátható ügyintézés",
  "40+ fős szakértői csapat, saját kivitelezéssel",
  "Teljes körű garancia a telepített rendszerekre",
  "Több milliárd forintos árbevétel, stabil vállalati háttér",
];

/** The four garanciapontok shown under the hero photo. */
const HERO_GUARANTEES: string[] = [
  "10+ év szakmai tapasztalat a megújuló energia piacán",
  "Országos lefedettség, gyors és átlátható ügyintézés",
  "Teljes körű garancia a telepített rendszerekre",
  "Több milliárd forintos árbevétel, stabil vállalati háttér",
];

/** Costs coverable from the grant. */
const ELIGIBLE_COSTS: string[] = [
  "Villamosenergia-tároló (akkumulátor) beszerzése",
  "Inverter beszerzése vagy cseréje (kizárólag hibrid inverter alkalmazásával)",
  "Tároló vezérlését végző eszközök (pl. BMS)",
  "Visszwatt-védelem és beállítás költségei",
  "Tervezési és engedélyezési költségek",
  "Pályázati adminisztráció és kivitelezői közreműködés díja",
  "Mérőhely szabványosítása",
  "Fázisbővítés és csatlakozási alapdíj legfeljebb 3×20 A-ig",
  "Telepítési, kiszállási és szerelési munkadíjak",
  "Szükséges biztonsági és villamos mérések, vizsgálatok (pl. érintésvédelmi és villamosbiztonsági felülvizsgálat)",
];

const STANDALONE_ELIGIBLE: string[] = [
  "Villamosenergia-tároló rendszer (minimum 10 kWh névleges kapacitással)",
  "Inverter (meglévő rendszer esetén csere, új rendszer esetén új telepítés)",
  "Napelem panelek beszerzése – kizárólag új, teljes rendszer létesítése esetén",
];

const ELIGIBLE_APPLICANTS: string[] = [
  "Magyar adóazonosító jellel rendelkeznek,",
  "a beruházás helyszínével megegyező magyarországi állandó lakóhellyel bírnak,",
  "a beruházással érintett lakóingatlanban (rész)tulajdonjoggal, haszonélvezeti joggal vagy lakáscélú lízingszerződéssel rendelkeznek,",
  "már meglévő napelemes rendszerük van, vagy vállalják annak telepítését a projekt keretében,",
  "valamint olyan természetes személy, aki 551, 552, 555 GFO kódú egyházi jogi személy tulajdonában lévő, lakhatási célú lakóingatlanban életvitelszerűen lakik, és az egyházi jogi személy tulajdonosi hozzájáruló nyilatkozatot ad.",
];

const PROPERTY_TYPES: string[] = [
  "Családi házon,",
  "jogilag és energetikailag önálló iker- vagy sorházon,",
  "illetve legfeljebb 6 lakásos társasház lakásán.",
];

const ADMIN_ORG_FORMS: string[] = [
  "egyéni vállalkozás vagy egyéni cég",
  "közkereseti társaság (Kkt.) vagy betéti társaság (Bt.)",
  "korlátolt felelősségű társaság (Kft.) vagy részvénytársaság (Zrt.)",
  "egyesület vagy nonprofit szervezet",
];

const EXCLUSIONS: string[] = [
  "aki a Napenergia Plusz Program keretében a beruházás helyszínére vonatkozóan a felhívás megjelenésének napján már érvényes támogatói okirattal rendelkezik;",
  "aki az RRF-6.2.1-2021 azonosítószámú pályázati felhívás, illetve a Vidéki Otthonfelújítási Program támogatott projektje keretében már energiatárolót létesített;",
  "aki a pályázat elbírálási eljárásában döntés-előkészítőként vagy döntéshozóként közreműködik, illetve az ilyen személlyel közös háztartásban élő hozzátartozó;",
  "aki az államháztartásról szóló 2011. évi CXCV. törvény 48/B. § (1) bekezdés b) pontja szerinti személy, vagy akivel közös háztartásban ilyen tisztséget betöltő személy él;",
  "akinek 60 napot meghaladó köztartozása áll fenn;",
  "aki nem természetes személy;",
  "aki nem rendelkezik magyar adóazonosító jellel;",
  "aki kiskorú természetes személy;",
  "aki a támogatói okiratban vállalt kötelezettségeit neki felróható okból nem teljesítette, kivéve vis maior esetét;",
  "akinek meg nem fizetett köztartozása van – ebben az esetben a köztartozás rendezéséig a támogatás nem illeti meg, illetve visszatartásra kerül;",
  "aki a pályázati szakaszban tett nyilatkozatok tartalmát az igazolási szakaszban nem tudja hitelt érdemlően és maradéktalanul alátámasztani.",
];

const KAU_METHODS: string[] = ["Ügyfélkapu+, vagy", "Digitális Állampolgár (DÁP) azonosítás."];

const PRIORITY_1: string[] = [
  "amelyek már kikerültek az éves szaldóelszámolásból, vagy",
  "amelyek legkésőbb 2030. december 31-ig kikerülnek az éves szaldóelszámolásból,",
  "valamint azok a pályázók is ide tartoznak, akik állami támogatás nélkül, önerőből telepítettek napelemes rendszert, és jelenleg bruttó elszámolás alá tartoznak.",
];

const TECH_STORAGE: string[] = [
  "Az akkumulátoros energiatároló rendszer névleges kapacitásának legalább 10 kWh-nak kell lennie.",
  "A műszaki specifikációk figyelembevételével legfeljebb 10%-os eltérés engedélyezett lefelé.",
  "Az energiatároló maximális kapacitására felső korlát nincs, az a háztartás energiaigényéhez igazítható.",
  "Az energiatároló kizárólag a napelemes rendszer egyenáramú (DC) oldalához csatlakoztatható, azaz a napelemes rendszer és az akkumulátoros tároló egy közös hibrid inverter DC oldalára kell, hogy kapcsolódjon.",
  "AC oldali (váltakozó áramú) energiatároló csatlakoztatása nem támogatható.",
  "Az inverterhez csatlakozó akkumulátoros energiatároló rendszer névleges feszültsége legalább 100 V legyen; ennél alacsonyabb feszültség esetén a tárolónak az alkalmazott inverter gyártójának saját termékének kell lennie.",
];

/** Payout phases. */
const PAYOUTS: { no: string; title: string; amount: string; text: string }[] = [
  {
    no: "1",
    title: "Előleg",
    amount: "1 000 000 Ft",
    text: "A pozitív támogatói döntést követően a Támogató 1 000 000 Ft előleget folyósít a pályázó magánszemély részére. Ezt az összeget a pályázó a kivitelező részére fizeti meg, a vállalkozási szerződésben rögzített feltételek szerint.",
  },
  {
    no: "2",
    title: "Részszámla",
    amount: "Önerő rendezése",
    text: "A kivitelezés előrehaladásával a pályázó a kivitelező által kiállított részszámla alapján teljesíti a támogatási összeg és az esetlegesen fennálló önerő arányos részét. 2 500 000 Ft feletti összköltségnél az önerő rendelkezésre állását és megfizetését igazolni kell.",
  },
  {
    no: "3",
    title: "Végszámla",
    amount: "Legfeljebb 1 500 000 Ft",
    text: "A beruházás teljes körű befejezése és készre jelentése után a Támogató a végszámla alapján, de legfeljebb 1 500 000 Ft összegben folyósítja a fennmaradó támogatási részt. A pályázó ezt követően rendezi a kivitelező felé a végszámlát.",
  },
];

/** Shared red pill CTA to the sidebar application form. */
const heroPillStyle: CSSProperties = {
  display: "inline-block",
  background: "var(--brand)",
  color: "#fff",
  padding: "14px 30px",
  borderRadius: "9999px",
  fontWeight: 500,
};

/**
 * "Lakossági energiatároló támogatás" (Otthoni Energiatároló Program) kampány-landing.
 * Hero: teljes szélességű, notch-kivágásos alakított kép (ServiceHero-mintára); a bal-alsó
 * sarokban az eyebrow + cím + CTA, a jobb-alsó notch-kivágásba pedig a jelentkezési FORM
 * van ültetve (desktopon abszolút, a kép alá lógva), a kép alatt balra az intro +
 * garanciapontok. Mobilon egyszerű stack: kártya-kép, intro/garanciák, majd a form.
 * A hero alatt minden tartalmi szekció (statisztika, webinárium, kivitelező-partner,
 * csomagajánlatok, extra előnyök, termékszekció, tájékoztató szekciók, ügyfélszolgálat)
 * teljes szélességben, egymás alatt.
 */
export const LakossagiEnergiataroloTamogatas = () => (
  <div className="w-full">
    {/* HERO — notch-os kép, a jelentkezési űrlap a jobb-alsó notch-kivágásba ültetve */}
    <section className="w-full pt-8 md:pt-12">
      <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
        <defs>
          <clipPath id={HERO_NOTCH_ID} clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.00069735, 0.00175131)"
              d="M1403 0C1420.12 0 1434 13.8792 1434 31V394C1434 410.569 1420.57 424 1404 424H655C598.5 424 590 424 573 441.5C555.915 459.088 534.421 495.166 518.441 521.988C509.471 537.045 502.239 549.186 498.5 553.5C488.1 565.5 468.5 570.167 460 571H30C13.4315 571 0 557.569 0 541V31C0 13.8792 13.8792 0 31 0H1403Z"
            />
          </clipPath>
        </defs>
      </svg>

      <div className="container">
        {/*
          A relatív konténer magassága DESKTOP-on pontosan a kép magassága (csak a
          desktop kép van flow-ban), így a form `top: 52%`-a a KÉP magasságához
          igazodik. Az intro és a form abszolút, a kép alá lógnak; a következő
          szekciótól a testvér térkitöltő tartja a távolságot.
        */}
        <div className="relative">
          {/* DESKTOP — teljes szélességű alakított kép notch-csal */}
          <div className="relative hidden w-full lg:block" style={{ aspectRatio: "1192 / 520" }}>
            <div className="absolute inset-0" style={{ clipPath: `url(#${HERO_NOTCH_ID})` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/wp-content/uploads/2023/11/210363746_m_normal_none.jpg"
                alt="Napelem telepítés a tetőn"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 55%" }}
              />
              <div className="absolute inset-0" style={{ background: HERO_GRADIENT }} />
            </div>
            <div className="absolute bottom-0 left-0 z-10 text-white" style={{ padding: "40px", maxWidth: "560px" }}>
              <span
                className="inline-block rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[1px] text-white"
                style={{ background: "rgba(255,255,255,0.2)", marginBottom: "20px" }}
              >
                Otthoni Energiatároló Program
              </span>
              <h1 style={{ color: "#fff", fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 300, lineHeight: 1.18, marginBottom: "24px" }}>
                Bízd ránk
                <br />
                <strong style={{ fontWeight: 700 }}>a kivitelezést!</strong>
              </h1>
              <a href="#jelentkezes" style={{ ...heroPillStyle, padding: "12px 24px", fontSize: "15px" }}>
                További információ
              </a>
            </div>
          </div>

          {/* MOBIL — lekerekített kártya a címmel (nincs notch-pozicionálás) */}
          <div className="relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[24px] p-6 text-white lg:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/2023/11/210363746_m_normal_none.jpg"
              alt="Napelem telepítés a tetőn"
              className="absolute inset-0"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 55%" }}
            />
            <div className="absolute inset-0" style={{ background: HERO_GRADIENT }} />
            <div className="relative z-10">
              <span
                className="inline-block rounded-full text-xs font-medium uppercase tracking-[1px]"
                style={{ background: "rgba(255,255,255,0.2)", padding: "6px 12px" }}
              >
                Otthoni Energiatároló Program
              </span>
              <h1 style={{ marginTop: "20px", color: "#fff", fontSize: "clamp(24px, 6.2vw, 30px)", fontWeight: 300, lineHeight: 1.2 }}>
                Bízd ránk <strong style={{ fontWeight: 700 }}>a kivitelezést!</strong>
              </h1>
              <div className="mt-5">
                <a href="#jelentkezes" style={{ ...heroPillStyle, padding: "12px 24px", fontSize: "15px" }}>
                  További információ
                </a>
              </div>
            </div>
          </div>

          {/* INTRO + garanciák — mobil: kép alatt, teljes szélességben; desktop: a kép alatt balra (46%) */}
          <div className="mt-8 lg:absolute lg:left-0 lg:top-full lg:mt-6 lg:w-[46%]">
            <p className="text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.75 }}>
              Az Otthoni Energiatároló Program keretében segítünk a pályázati adminisztrációban, a rendszer
              kiválasztásában, tervezésében és kivitelezésében, hogy otthonod számára megbízható, hosszú távú megoldás
              valósuljon meg.
            </p>
            <p className="text-[var(--ink)]" style={{ margin: "24px 0 16px", fontSize: "17px", fontWeight: 700 }}>
              Amit az A1 Solar garantál:
            </p>
            <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {HERO_GUARANTEES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* JELENTKEZÉSI FORM — mobil: kép/intro alatt flow-ban; desktop: a jobb-alsó notch-kivágásba ültetve, a kép alá lógva */}
          <div
            id="jelentkezes"
            className="mt-8 lg:absolute lg:left-[47%] lg:right-0 lg:top-[74%] lg:z-20 lg:mt-0"
            style={{ scrollMarginTop: "var(--header-h)" }}
          >
            <OepHeroForm />
          </div>

          {/* DESKTOP térkitöltő: helyet hagy a képen túllógó intronak/formnak, hogy ne érjen a következő szekcióra.
              (A relatív konténeren KÍVÜL, testvérként — így nem növeli a konténer magasságát, a form top:52%-a marad a képhez kötve.) */}
        </div>
        <div aria-hidden className="hidden lg:block" style={{ height: "400px" }} />
      </div>
    </section>

    <div className="container">
      <hr className="my-12 md:my-16" style={{ border: 0, borderTop: "1px dashed #ececec" }} />
    </div>

    {/* TARTALOM — teljes szélességű szekciók egymás alatt */}
    <section className="w-full pb-0">
      <div className="container">
        {/* STATISZTIKA-SÁV */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PROGRAM_STATS.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        <RowDivider />

        {/* WEBINÁRIUM */}
        <Section
          eyebrow="Webinárium"
          title="Otthoni Energiatároló Program webinárium"
          intro="Az Otthoni Energiatároló Program kapcsán online webináriumot tartunk, ahol a 2. szakasz benyújtási folyamatát, a szükséges tudnivalókat, valamint a következő lépéseket vesszük végig részletesen."
        >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {WEBINARS.map((webinar) => (
                  <div key={webinar.title} className="flex flex-col px-7 py-8" style={{ background: "var(--surface-3)", borderRadius: "20px" }}>
                    <span
                      className="inline-block rounded-[30px] px-3 py-1 text-xs font-semibold uppercase tracking-[1px]"
                      style={{ background: "var(--brand)", color: "#fff", alignSelf: "flex-start" }}
                    >
                      {webinar.badge}
                    </span>
                    <h3 className="text-[var(--ink)]" style={{ margin: "18px 0 0", fontSize: "20px", fontWeight: 600 }}>
                      {webinar.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.7 }}>
                      {webinar.text}
                    </p>
                    <div className="mt-6">
                      <a href="#jelentkezes" style={{ ...heroPillStyle, padding: "12px 24px" }}>
                        Jelentkezem
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <RowDivider />

            {/* KIVITELEZŐ-PARTNER */}
            <Section
              eyebrow="Kivitelezés"
              title="Válassza az A1 Solar Kft.-t megbízható kivitelező partnerként"
              intro="Regisztrált kivitelezőként nemcsak az ajánlatkéréstől a megvalósításig kísérjük végig, hanem az energiatároló rendszer teljes élettartama alatt partnerei maradunk – a pályázat lezárása után sem engedjük el a kezét."
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PARTNER_STEPS.map((step) => (
                  <div key={step.title} className="flex flex-col px-7 py-8" style={{ background: "var(--surface-3)", borderRadius: "20px" }}>
                    <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "18px", fontWeight: 600, lineHeight: 1.3 }}>
                      {step.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
                      {step.text}
                    </p>
                    <div className="mt-6">
                      <a href="#jelentkezes" style={{ ...heroPillStyle, padding: "12px 24px" }}>
                        {step.cta}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <RowDivider />

            {/* CSOMAGAJÁNLATOK — márkánként */}
            <Section
              eyebrow="Csomagok"
              title="Csomagajánlataink"
              intro="Az alábbi csomagajánlatokat kifejezetten az Otthoni Energiatároló Program feltételeihez igazítva állítottuk össze. A csomagok tartalmazzák a teljes körű tervezést és engedélyeztetést, a pályázatírást és projektmenedzsmentet, valamint – a program aktuális feltételei mellett – az ingyenes padlásfödém szigetelést is."
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {PACKAGES.map((pkg) => (
                  <PackageCard key={pkg.brand} {...pkg} />
                ))}
              </div>
              <div className="mt-10">
                <p className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                  Kattintson a további csomagajánlataink gombra, és nézze meg a teljes kínálatot.
                </p>
                <div className="mt-6">
                  <a href="#jelentkezes" style={heroPillStyle}>
                    További csomagajánlataink
                  </a>
                </div>
              </div>
            </Section>

            <RowDivider />

            {/* EXTRA ELŐNYÖK */}
            <Section
              eyebrow="Extra előnyök"
              title="A pályázat és a kivitelezés nálunk csak a kezdet"
              intro="Extra előnyök, amiket máshol nem kapsz meg."
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {PERKS.map((perk) => (
                  <div key={perk.title} className="flex flex-col overflow-hidden" style={{ background: "var(--surface-3)", borderRadius: "20px" }}>
                    <div style={{ height: "180px", overflow: "hidden", background: "#fff" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={perk.image} alt={perk.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    <div className="flex flex-1 flex-col px-7 py-7">
                      <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.25 }}>
                        {perk.title}
                      </h3>
                      <p className="mt-4 flex-1 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.7 }}>
                        {perk.text}
                      </p>
                      <p className="text-[var(--ink-muted)]" style={{ margin: "20px 0 0", fontSize: "13px" }}>
                        Szabályzat: promóciós szabályzat
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <RowDivider />

            {/* TERMÉKSZEKCIÓ — támogatási részletek */}
            <Section eyebrow="Támogatási részletek" title="Akár 2,5 millió Ft támogatás energiatárolóra">
              <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/wp-content/uploads/2025/12/Uj-lakossagi-energiatarolos-tamogatasi-program-indul-1024x667.png"
                  alt="Új lakossági energiatárolós támogatási program indul"
                  loading="lazy"
                  style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
                />
              </div>
              <p className="mt-6 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.75 }}>
                A lakossági energiatároló támogatási program 100 milliárd forintos keretösszeggel indul, és háztartásonként
                legfeljebb 2,5 millió forint vissza nem térítendő támogatást biztosít akkumulátoros energiatároló rendszer
                telepítésére. A támogatás elsősorban legalább 10 kWh kapacitású lakossági energiatárolók létesítésére vehető
                igénybe. A jelenlegi piaci árak mellett a támogatás akár 100%-os finanszírozást is jelenthet.
              </p>
              <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.75 }}>
                A konstrukció célja, hogy a családok a napközben megtermelt villamos energiát minél nagyobb arányban saját
                otthonukban használják fel, ezáltal csökkentve a villanyszámlát, növelve az energiafüggetlenséget, valamint
                mérsékelve a villamosenergia-hálózat terhelését.
              </p>
              <div className="mt-8">
                <a href="#jelentkezes" style={heroPillStyle}>
                  Indítsd el velünk a kivitelezést!
                </a>
              </div>
            </Section>

            <RowDivider />

            {/* TÁJÉKOZTATÓ SZEKCIÓK — kifejtve (nem akkordeon) */}
            <Section
              eyebrow="Kinek ajánlott?"
              title="Kiknek jelent ideális megoldást a program?"
              intro="A támogatás elsősorban azoknak a háztartásoknak kínál valódi előnyt, amelyek már kikerültek az éves szaldóelszámolásból, vagy legkésőbb 2030. december 31-ig átkerülnek abból. Ez leggyakrabban a 2015 előtt, illetve a közvetlenül azt követő években telepített rendszerek esetében fordul elő. Emellett a pályázat azok számára is elérhető, akik állami támogatás nélkül, önerőből létesítettek napelemes rendszert, és jelenleg bruttó elszámolásban vannak."
            >
              <SubHead>A pályázatot nagykorú, cselekvőképes magánszemélyek nyújthatják be, akik:</SubHead>
              <Bullets items={ELIGIBLE_APPLICANTS} />
              <SubHead>A beruházás kizárólag lakhatási célú ingatlanon valósítható meg, így:</SubHead>
              <Bullets items={PROPERTY_TYPES} />
              <SubHead>Mire kell figyelni a megvalósítás helyszínén?</SubHead>
              <Body>
                A projekt megvalósításának helyszínén gazdasági tevékenység nem folytatható, még kiegészítő jelleggel sem.
                Gazdasági tevékenységnek minősül, ha az ingatlanban tényleges üzleti működés zajlik – például termelés,
                szolgáltatásnyújtás vagy ügyfélfogadás.
              </Body>
              <Body>
                Fontos változás: adminisztratív székhely már elfogadható. Önmagában nem kizáró ok, ha az ingatlan csupán
                adminisztratív jelleggel van bejelentve székhelyként (vagy telephelyként/fióktelepként), például az alábbi
                szervezeti formák esetén:
              </Body>
              <Bullets items={ADMIN_ORG_FORMS} />
              <Body>
                Ennek feltétele, hogy nyilatkozattal igazolható legyen, hogy a gazdasági tevékenység ténylegesen nem az
                ingatlanban történik.
              </Body>
              <SubHead>A támogatás nem vehető igénybe azon pályázók esetében, akiknél az alábbi feltételek bármelyike fennáll:</SubHead>
              <Bullets items={EXCLUSIONS} />
            </Section>

            <RowDivider />

            <Section
              eyebrow="A támogatás mértéke"
              title="Mekkora támogatás igényelhető, és mire használható fel?"
              intro="A sikeres pályázók legfeljebb 2 500 000 Ft vissza nem térítendő támogatásban részesülhetnek, amely az akkumulátoros energiatároló rendszer beszerzéséhez és telepítéséhez kapcsolódó költségek széles körét fedezheti. Amennyiben a beruházás összköltsége meghaladja a támogatási összeget, a különbözet önerőből finanszírozandó."
            >
              <SubHead>Elszámolható költségek a támogatás terhére:</SubHead>
              <Bullets items={ELIGIBLE_COSTS} />
              <Body>
                Fontos megjegyezni, hogy a felhívás megjelenése előtt felmerült költségek nem számolhatók el, továbbá a
                lakóingatlan teljes elektromos hálózatának korszerűsítése sem minősül elszámolható költségnek.
              </Body>
              <SubHead>Önállóan is támogatható elemek:</SubHead>
              <Bullets items={STANDALONE_ELIGIBLE} />
              <Body>
                Meglévő napelemes rendszer fejlesztésekor paneloldali bővítés nem támogatható, akkor sem, ha inverter- vagy
                energiatároló-csere történik. Bizonyos tevékenységek – így különösen a pályázati adminisztráció, a mérőhely
                szabványosítása, a fázisbővítés, valamint a tervezési és engedélyezési feladatok – önállóan nem támogathatók,
                azonban elszámolhatók a támogatás terhére, amennyiben szervesen kapcsolódnak az akkumulátoros energiatároló
                rendszer telepítéséhez.
              </Body>
            </Section>

            <RowDivider />

            <Section
              eyebrow="Jelentkezési folyamat"
              title="Mikor és hogyan lehet jelentkezni?"
              intro="Az Otthoni Energiatároló Programra a pályázatok kizárólag elektronikus úton nyújthatók be az nffku.hu pályázati portálon keresztül. A pályázat benyújtásához KAÜ-azonosítás szükséges, amely az alábbi módokon történhet:"
            >
              <Bullets items={KAU_METHODS} />
              <Body>
                Amennyiben a pályázó nem kíván saját KAÜ-azonosítással eljárni, lehetőség van arra is, hogy a pályázatot
                meghatalmazott személy (például kivitelező vagy pályázati közreműködő) nyújtsa be a nevében, megfelelő
                meghatalmazás birtokában. A pályázati felület közérthető és strukturált; az első – pályázati – szakasz során
                kizárólag az alapvető jogosultsági feltételek és nyilatkozatok megadása szükséges.
              </Body>
              <SubHead>A program ütemezése:</SubHead>
              <Bullets
                items={[
                  "Felhívás megjelenése: 2026. január 15.",
                  "1. ütem – a pályázati űrlap kitöltése és benyújtása: 2026. február 2. (hétfő) 10:00 órától a felfüggesztő vagy lezáró közlemény megjelenéséig, de legkésőbb 2026. március 15. (vasárnap) 17:00 óráig.",
                  "2. ütem – jogosultság igazolása, a projekt műszaki és szakmai tartalmának bemutatása, a vállalkozási szerződés megkötése és a dokumentumok benyújtása: 2026. március 16. (hétfő) 10:00 órától és legkésőbb 2026. szeptember 30-ig.",
                ]}
              />
              <Body>
                Fontos: a 2. ütem nem indul el automatikusan 2026. március 16-án – az csak az 1. ütem lezárását és a döntést
                követően, a jogosult pályázók számára nyílik meg. A fenntartási időszak 3 év, amely a záró elszámolás
                elfogadásának napjától kezdődik – nem a kivitelezés befejezésétől és nem a szolgáltatói átvétel időpontjától
                számítódik.
              </Body>
            </Section>

            <RowDivider />

            <Section
              eyebrow="Elbírálás"
              title="Hogyan történik a pályázatok elbírálása?"
              intro="Az Otthoni Energiatároló Programra minden olyan nagykorú magánszemély pályázhat, aki már rendelkezik napelemes rendszerrel, vagy a projekt keretében vállalja annak telepítését. A támogatási kérelmek elbírálása meghatározott preferenciarendszer alapján, több lépcsőben történik."
            >
              <SubHead>Első prioritási csoport – elsőként azok a háztartások részesülnek előnyben:</SubHead>
              <Bullets items={PRIORITY_1} />
              <SubHead>Második prioritási csoport:</SubHead>
              <Bullets items={["akik 5000 fő alatti településen rendelkeznek bejelentett állandó lakóhellyel."]} />
              <SubHead>Hogyan alakul ki a sorrend?</SubHead>
              <Bullets
                items={[
                  "Az első prioritási csoporton belül: településméret – a kisebb lélekszámú települések előnyt élveznek; azonos településméret esetén a korábbi beadás élvez előnyt.",
                  "A második prioritási csoportban kizárólag a pályázat beadásának időpontja határozza meg a sorrendet.",
                  "Minden további pályázó esetében ismét a település lélekszáma, majd a pályázat beadásának időpontja számít.",
                ]}
              />
            </Section>

            <RowDivider />

            <Section eyebrow="Kifizetések" title="Hogyan történik a támogatás kifizetése?">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PAYOUTS.map((phase) => (
                  <div key={phase.no} className="flex flex-col px-7 py-7" style={{ background: "var(--surface-3)", borderRadius: "20px" }}>
                    <span
                      className="flex items-center justify-center"
                      style={{ width: "44px", height: "44px", borderRadius: "9999px", background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)", fontSize: "18px", fontWeight: 700 }}
                    >
                      {phase.no}
                    </span>
                    <h3 className="text-[var(--ink)]" style={{ margin: "18px 0 0", fontSize: "19px", fontWeight: 600 }}>
                      {phase.title}
                    </h3>
                    <p style={{ margin: "4px 0 0", fontSize: "20px", fontWeight: 700, color: "var(--brand)" }}>{phase.amount}</p>
                    <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "14px", lineHeight: 1.65 }}>
                      {phase.text}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.75 }}>
                Amennyiben a beruházás teljes költsége meghaladja a támogatás maximális összegét, a különbözetet a pályázó
                önerőként köteles megfizetni a kivitelező részére. Az önerő rendelkezésre állása a támogatói okirat
                kiállításának, illetve a kifizetések teljesítésének feltétele.
              </p>
            </Section>

            <RowDivider />

            <Section
              eyebrow="Műszaki feltételek"
              title="Milyen műszaki feltételeknek kell megfelelni?"
              intro="A támogatás kizárólag olyan beruházások esetén vehető igénybe, amelyek maradéktalanul megfelelnek a pályázati felhívásban rögzített műszaki követelményeknek."
            >
              <SubHead>1. Energiatároló rendszerre vonatkozó követelmények:</SubHead>
              <Bullets items={TECH_STORAGE} />
              <SubHead>2. Inverterre vonatkozó szabályok:</SubHead>
              <Bullets
                items={[
                  "Meglévő rendszer esetén, ha invertercsere szükséges: az inverter maximális teljesítménye a csatlakozási szerződésben (POD) szereplő értékkel egyezhet meg, és legfeljebb 1 kW-tal növelhető. Ilyen csere esetén sem szűnik meg a szaldós elszámolás.",
                  "Meglévő rendszer fejlesztése esetén a napelem panelek bővítése nem támogatható, akkor sem, ha inverter- vagy energiatároló-csere történik.",
                  "Új rendszer telepítésekor az inverter maximális névleges teljesítménye 5 kW lehet, a napelem panelek összteljesítménye pedig legfeljebb az inverter névleges teljesítményének 120%-a, vagyis legfeljebb 6 kWp.",
                ]}
              />
              <Body>
                A támogatás kizárólag elosztóhálózathoz csatlakozó rendszerekre vehető igénybe. A szigetüzemű működés nem
                támogatható, ugyanakkor a rendszer működhet visszatáplálás-mentes (visszwattos) üzemmódban, azaz a közcélú
                hálózat felé aktív teljesítményt nem táplál be.
              </Body>
            </Section>

            <RowDivider />

            <Section eyebrow="Megvalósítás" title="Mennyi idő áll rendelkezésre a megvalósításra?">
              <Body>
                A beruházást a Támogatói okirat hatályba lépésétől számított legfeljebb 24 hónapon belül kell megvalósítani,
                amely elegendő időt biztosít a tervezésre, engedélyezésre és kivitelezésre.
              </Body>
            </Section>

            <RowDivider />

            <Section eyebrow="Tudnivaló" title="Mire figyeljen akkumulátor választáskor?">
              <Body>
                A lakossági energiatárolók piacán jelenleg jelentős kínálatbővülés tapasztalható – részben az elektromos
                autóipar lassulásának következtében –, ami számos új gyártó megjelenését hozta magával. Bár ezek között sok
                kedvező árú megoldás található, az energiatárolók esetében a biztonság és a hosszú távú megbízhatóság kiemelt
                szempont.
              </Body>
              <Body>
                Az ismeretlen eredetű vagy nem megfelelően minősített akkumulátorok használata komoly műszaki és biztonsági
                kockázatot jelenthet, ezért kizárólag bevizsgált, megbízható gyártók által kínált energiatárolók alkalmazása
                javasolt.
              </Body>
            </Section>

            <RowDivider />

            <Section
              eyebrow="Cégünkről"
              title="Miért válasszon minket?"
              intro="Az A1 Solar Kft. több mint egy évtizede foglalkozik napelemes rendszerek és energiatárolási megoldások tervezésével és kivitelezésével. Tapasztalatunk lehetővé teszi, hogy ügyfeleink számára biztonságos, hosszú távon is megbízható rendszereket kínáljunk."
            >
              <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: "0 0 8px" }}>
                {GUARANTEES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Body>
                Az A1 Solart az innováció, a fenntarthatóság és az ügyfélközpontú szemlélet jellemzi. Célunk, hogy a napelemes
                rendszerekhez kapcsolódó energiatárolással valódi, mérhető megtakarítást és nagyobb energiafüggetlenséget
                biztosítsunk a magyar háztartások számára.
              </Body>
            </Section>
      </div>
    </section>

    <div className="container">
      <hr className="my-12 md:my-16" style={{ border: 0, borderTop: "1px dashed #ececec" }} />
    </div>

    {/* ÜGYFÉLSZOLGÁLAT — teljes szélességű záró blokk */}
    <section className="w-full pb-4">
      <div className="container">
        <div
          className="flex flex-col items-start justify-between gap-6 px-8 py-8 md:flex-row md:items-center"
          style={{ background: "var(--surface-3)", borderRadius: "20px" }}
        >
          <div>
            <p className="text-[var(--ink)]" style={{ margin: 0, fontSize: "22px", fontWeight: 700 }}>
              Beszéljünk a lehetőségeidről!
            </p>
            <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Ügyfélszolgálatunk hétköznap {SITE.supportHours} között elérhető – fordulj hozzá bizalommal!
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-[var(--ink-muted)]" style={{ margin: "0 0 4px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Ügyfélszolgálat
            </p>
            <a href={`tel:${SITE.phoneRaw}`} style={{ color: "var(--brand)", fontSize: "26px", fontWeight: 700 }}>
              {SITE.phoneDisplay}
            </a>
            <div className="mt-5">
              <a href="#jelentkezes" style={heroPillStyle}>
                Jelentkezem
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
