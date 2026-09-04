import type { LucideIcon } from "lucide-react";
import { Gift, Info, Plane } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

import { OepHeroForm } from "@/components/page/campaign/OepHeroForm";
import { OepVideoPlaylist } from "@/components/page/campaign/OepVideoPlaylist";
import { ServiceTocNav } from "@/components/service/ServiceTocNav";
import { SupportStatusDot } from "@/components/service/SupportStatusDot";
import { SITE } from "@/lib/site";

/** Sidebar in-page navigation for the OEP subpage (mirrors the service pages). */
const OEP_TOC = [
  { id: "kivitelezes", label: "Kivitelezés" },
  { id: "csomagok", label: "Csomagajánlatok" },
  { id: "extra-elonyok", label: "Extra előnyök" },
  { id: "videotar", label: "Videótár" },
  { id: "kinek-ajanlott", label: "Kinek ajánlott?" },
  { id: "tamogatas-merteke", label: "Támogatás mértéke" },
  { id: "jelentkezes-folyamat", label: "Jelentkezés" },
  { id: "miert-minket", label: "Miért minket?" },
];

/** Customer-service sidebar widget (mirrors the service subpages). */
const SupportWidget = () => (
  <div className="rounded-[20px] p-6" style={{ background: "var(--surface-3)" }}>
    <h3 style={{ fontSize: "20px", fontWeight: 500, lineHeight: 1.25, color: "var(--ink)" }}>Beszéljünk a lehetőségeidről!</h3>
    <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      Ügyfélszolgálatunk hétköznap {SITE.supportHours} között elérhető – fordulj hozzánk bizalommal!
    </p>
    <div className="mt-6 flex items-center gap-4">
      <span className="grid h-14 w-14 flex-none place-items-center rounded-full" style={{ background: "#fff", color: "var(--brand)" }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 12a8 8 0 0 1 16 0M4 12v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 1Zm16 0v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M18 17v.5a3 3 0 0 1-3 3h-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </span>
      <div>
        <div className="text-sm font-semibold text-[var(--ink)]">Ügyfélszolgálat</div>
        <a href={`tel:${SITE.phoneRaw}`} className="mt-0.5 flex items-center gap-2 font-semibold text-[var(--ink)]">
          <SupportStatusDot />
          {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  </div>
);

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
  id?: string;
};

const Section = ({ eyebrow, title, intro, children, id }: SectionProps) => (
  <div id={id} style={{ scrollMarginTop: "100px" }}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="text-[var(--ink)]" style={{ marginTop: "18px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}>
      {title}
    </h2>
    {intro !== undefined ? (
      <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.75 }}>
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

/** Highlighted "important" callout — pale red box, info icon, strong brand-red text. */
const InfoCallout = ({ children }: { children: ReactNode }) => (
  <div className="my-4 flex items-start gap-4 rounded-[20px] p-5 md:p-6" style={{ background: "rgba(219,3,48,0.06)" }}>
    <span
      className="flex flex-none items-center justify-center rounded-full"
      style={{ width: "40px", height: "40px", background: "rgba(219,3,48,0.12)" }}
    >
      <Info size={20} strokeWidth={2} style={{ color: "var(--brand)" }} />
    </span>
    <div style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--brand-dark)", fontWeight: 500 }}>{children}</div>
  </div>
);

/** Red-tinted notice box (exclusions) — pink background, brand-dark text + red bullets. */
const NoticeBox = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-[20px] p-6 md:p-8" style={{ background: "rgba(219,3,48,0.06)", border: "1px solid rgba(219,3,48,0.18)" }}>
    <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.7, fontWeight: 500, color: "var(--brand-dark)" }}>{title}</p>
    <ul className="mt-4 flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            style={{ flexShrink: 0, width: "7px", height: "7px", borderRadius: "9999px", background: "var(--brand)", marginTop: "9px" }}
          />
          <span style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--brand-dark)" }}>{item}</span>
        </li>
      ))}
    </ul>
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

const PackageCard = ({ brand, image, ownFund, grant, backup }: StoragePackage) => (
  <div className="flex flex-col rounded-[20px] p-3" style={{ background: "#fff", border: "1px solid var(--line)" }}>
    <div style={{ height: "128px", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={brand} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
    </div>
    <h3 className="text-[var(--ink)]" style={{ margin: "12px 0 0", fontSize: "15px", fontWeight: 700, textTransform: "uppercase" }}>
      {brand}
    </h3>
    <div className="mt-3 flex flex-col gap-2">
      <span className="rounded-[10px] px-2 py-2 text-center text-[var(--ink)]" style={{ background: "var(--surface-3)", fontSize: "12px", whiteSpace: "nowrap" }}>
        {ownFund}
      </span>
      <span className="rounded-[10px] px-2 py-2 text-center text-[var(--ink)]" style={{ background: "var(--surface-3)", fontSize: "12px", whiteSpace: "nowrap" }}>
        Támogatás: <strong style={{ fontWeight: 700 }}>{grant}</strong>
      </span>
    </div>
    <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "13px", lineHeight: 1.5 }}>
      {backup}
    </p>
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




/** Extra loyalty perks — icon-box cards (Lucide icons), matching the old page. */
const PERKS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "100 000 Ft értékű fejlesztési kupon",
    text: "Minden velünk sikeresen megvalósított projekt után bruttó 100 000 Ft értékű kupont adunk, amit későbbi napelemes vagy energiatárolási fejlesztésekhez használhatsz fel az A1 Solar Kft.-nél.",
    icon: Gift,
  },
  {
    title: "Álomutazás sorsolás – 2 fő részére",
    text: "Ha 2026. április 30-ig szerződsz velünk és Támogatói Okiratot kapsz, automatikusan részt veszel a sorsoláson. A nyertes egy 2 személyes, 5 napos álomutazást választhat: Zanzibár szigetére vagy Kínába.",
    icon: Plane,
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
    <section className="w-full">
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
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/wp-content/uploads/2026/03/otthoni_energiatarolo_program-1.png"
                aria-hidden="true"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%" }}
              >
                <source src="/nativ/hero-loop.mp4" type="video/mp4" />
              </video>
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
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/wp-content/uploads/2026/03/otthoni_energiatarolo_program-1.png"
              aria-hidden="true"
              className="absolute inset-0"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%" }}
            >
              <source src="/nativ/hero-loop.mp4" type="video/mp4" />
            </video>
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
            <p className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.75 }}>
              Az Otthoni Energiatároló Program keretében segítünk a pályázati adminisztrációban, a rendszer
              kiválasztásában, tervezésében és kivitelezésében, hogy otthonod számára megbízható, hosszú távú megoldás
              valósuljon meg.
            </p>
            <p className="text-[var(--ink)]" style={{ margin: "24px 0 16px", fontSize: "16px", fontWeight: 700 }}>
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
            className="mt-8 lg:absolute lg:left-[49%] lg:right-0 lg:top-[79%] lg:z-20 lg:mt-0"
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

    {/* TARTALOM — main tartalom + sticky ügyfélszolgálat-sidebar (a footerig) */}
    <section className="w-full pb-0">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-0">
          <div className="min-w-0 lg:pr-10">
            {/* KIVITELEZŐ-PARTNER */}
            <Section
              id="kivitelezes"
              eyebrow="Kivitelezés"
              title="Válassza az A1 Solar Kft.-t megbízható kivitelező partnerként"
              intro="Regisztrált kivitelezőként nemcsak az ajánlatkéréstől a megvalósításig kísérjük végig, hanem az energiatároló rendszer teljes élettartama alatt partnerei maradunk – a pályázat lezárása után sem engedjük el a kezét."
            >
              <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
                {/* Bal kártya — döntés előtt */}
                <div className="flex flex-col rounded-[24px] p-8" style={{ background: "var(--surface-3)" }}>
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-full" style={{ background: "#fff", color: "var(--brand)" }} aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8L14 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M8.5 13h7M8.5 16.5h4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span
                      className="rounded-[30px] px-3 py-1.5 text-xs font-semibold uppercase tracking-[1px]"
                      style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
                    >
                      Döntés előtt
                    </span>
                  </div>
                  <h3 className="text-[var(--ink)]" style={{ margin: "20px 0 0", fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
                    Benyújtotta a pályázatát és döntésre vár?
                  </h3>
                  <p className="text-[var(--ink-soft)]" style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: 1.6 }}>
                    Kérjen előzetes árajánlatot, hogy pozitív elbírálás esetén gyorsan tudjon dönteni. Ellenőrizze azt is,
                    hogy az A1 Solar Kft. szerepel a hivatalos, regisztrált kivitelezők között.
                  </p>
                  <div className="mt-auto flex flex-col items-start gap-4 pt-7">
                    <a
                      href="#jelentkezes"
                      style={{ display: "inline-block", background: "var(--brand)", color: "#fff", padding: "13px 26px", borderRadius: "9999px", fontWeight: 600 }}
                    >
                      Előzetes árajánlat kérése
                    </a>
                    <a
                      href="https://otthonienergiatarolo.neuzrt.hu/regisztralt-vallalkozasok"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                      style={{ color: "var(--brand)", fontWeight: 600, fontSize: "15px" }}
                    >
                      Megnézem a hivatalos kivitelezői listát
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Jobb kártya — pályázat elfogadva */}
                <div className="flex flex-col rounded-[24px] p-8" style={{ background: "var(--surface-3)" }}>
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-full" style={{ background: "#fff", color: "#16a34a" }} aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                        <path d="m8.5 12 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span
                      className="rounded-[30px] px-3 py-1.5 text-xs font-semibold uppercase tracking-[1px]"
                      style={{ background: "rgba(22,163,74,0.12)", color: "#16a34a" }}
                    >
                      Pályázat elfogadva
                    </span>
                  </div>
                  <h3 className="text-[var(--ink)]" style={{ margin: "20px 0 0", fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
                    Elfogadták a pályázatát?
                  </h3>
                  <p className="text-[var(--ink-soft)]" style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: 1.6 }}>
                    <strong style={{ fontWeight: 700, color: "var(--ink)" }}>Jelölje kivitelezőnek</strong> az{" "}
                    <span style={{ color: "var(--brand)", fontWeight: 700 }}>A1 Solar Kft.-t</span>, és kérjen ajánlatot a
                    pályázati felületen – a műszaki tartalmat és az{" "}
                    <span style={{ color: "var(--brand)", fontWeight: 700 }}>árajánlatot ingyen elkészítjük</span>.
                  </p>
                </div>
              </div>
            </Section>

            <RowDivider />

            {/* CSOMAGAJÁNLATOK — márkánként */}
            <Section
              id="csomagok"
              eyebrow="Csomagok"
              title="Csomagajánlataink"
              intro="Az alábbi csomagajánlatokat kifejezetten az Otthoni Energiatároló Program feltételeihez igazítva állítottuk össze. A csomagok tartalmazzák a teljes körű tervezést és engedélyeztetést, a pályázatírást és projektmenedzsmentet, valamint – a program aktuális feltételei mellett – az ingyenes padlásfödém szigetelést is."
            >
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {PACKAGES.map((pkg) => (
                  <PackageCard key={pkg.brand} {...pkg} />
                ))}
              </div>
              <div
                className="mt-8 flex flex-col items-start gap-5 rounded-[20px] px-7 py-7 md:flex-row md:items-center md:justify-between"
                style={{ background: "var(--brand)" }}
              >
                <div>
                  <p style={{ margin: 0, color: "#fff", fontSize: "20px", fontWeight: 700, lineHeight: 1.3 }}>
                    Otthoni Energiatároló Program csomagajánlatok
                  </p>
                  <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>
                    Kattintson a további csomagajánlataink gombra.
                  </p>
                </div>
                <a
                  href="#jelentkezes"
                  className="flex-none"
                  style={{ display: "inline-block", background: "#fff", color: "var(--brand)", padding: "13px 28px", borderRadius: "9999px", fontWeight: 600, whiteSpace: "nowrap" }}
                >
                  További csomagajánlataink
                </a>
              </div>
            </Section>

            <RowDivider />

            {/* EXTRA ELŐNYÖK */}
            <Section
              id="extra-elonyok"
              eyebrow="Extra előnyök"
              title="A pályázat és a kivitelezés nálunk csak a kezdet"
              intro="Extra előnyök, amiket máshol nem kapsz meg."
            >
              <div className="flex flex-col gap-6">
                {PERKS.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div
                      key={perk.title}
                      className="rounded-[20px] p-6 md:p-7"
                      style={{ background: "#fff", border: "1px solid var(--line)" }}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="flex flex-none items-center justify-center rounded-full"
                          style={{ width: "48px", height: "48px", background: "rgba(219,3,48,0.10)" }}
                        >
                          <Icon size={22} strokeWidth={1.75} style={{ color: "var(--brand)" }} />
                        </span>
                        <h3
                          className="text-[var(--ink)]"
                          style={{ margin: 0, fontSize: "15px", fontWeight: 700, lineHeight: 1.3, textTransform: "uppercase", letterSpacing: "0.3px" }}
                        >
                          {perk.title}
                        </h3>
                      </div>
                      <div style={{ height: "1px", background: "var(--line)", margin: "20px 0" }} />
                      <p className="text-[var(--ink-soft)]" style={{ margin: 0, fontSize: "15px", lineHeight: 1.75 }}>
                        {perk.text}
                      </p>
                      <div className="mt-6 flex items-center justify-between gap-4">
                        <span className="text-[var(--ink-muted)]" style={{ fontSize: "13px" }}>
                          Szabályzat: promóciós szabályzat
                        </span>
                        <a
                          href="/lakossagi-napelemes-rendszerek-tamogatasa-promocios-szabalyzat"
                          className="flex-none font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--brand)]"
                          style={{ fontSize: "13px" }}
                        >
                          További információ
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Section>

            <RowDivider />

            {/* VIDEÓTÁR — beágyazott YouTube lejátszási lista */}
            <Section
              id="videotar"
              eyebrow="Videótár"
              title="Nézd meg a programról szóló videóinkat"
              intro="Termékbemutatók, webináriumok és pályázati útmutatók egy helyen."
            >
              <OepVideoPlaylist />
              <div className="mt-5">
                <a
                  href="https://www.youtube.com/playlist?list=PLq0O3JGSosnaGtyIHSxpuC6c_BKALmMBf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--brand)] hover:underline"
                  style={{ fontSize: "14px" }}
                >
                  Teljes lejátszási lista megtekintése a YouTube-on →
                </a>
              </div>
            </Section>

            <RowDivider />

            {/* TERMÉKSZEKCIÓ — támogatási részletek */}
            <Section eyebrow="Támogatási részletek" title="Akár 2,5 millió Ft támogatás energiatárolóra">
              <p className="text-[var(--ink-soft)]" style={{ margin: 0, fontSize: "16px", lineHeight: 1.75 }}>
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
              <div className="mt-6" style={{ borderRadius: "20px", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/wp-content/uploads/2025/12/Uj-lakossagi-energiatarolos-tamogatasi-program-indul-1024x667.png"
                  alt="Új lakossági energiatárolós támogatási program indul"
                  loading="lazy"
                  style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
                />
              </div>
              <div
                className="mt-6 flex flex-col items-start gap-5 rounded-[20px] px-7 py-7 md:flex-row md:items-center md:justify-between"
                style={{ background: "var(--brand)" }}
              >
                <div>
                  <p style={{ margin: 0, color: "#fff", fontSize: "20px", fontWeight: 700, lineHeight: 1.3 }}>
                    Indítsd el velünk a kivitelezést!
                  </p>
                  <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,0.9)", fontSize: "15px" }}>
                    Töltsd ki az űrlapot, és segítünk a megfelelő rendszer megvalósításában.
                  </p>
                </div>
                <a
                  href="#jelentkezes"
                  className="flex-none"
                  style={{ display: "inline-block", background: "#fff", color: "var(--brand)", padding: "13px 28px", borderRadius: "9999px", fontWeight: 600, whiteSpace: "nowrap" }}
                >
                  Kapcsolatfelvétel
                </a>
              </div>
            </Section>

            <RowDivider />

            {/* TÁJÉKOZTATÓ SZEKCIÓK — kifejtve (nem akkordeon) */}
            <Section
              id="kinek-ajanlott"
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
              <p className="text-[var(--brand)]" style={{ margin: "28px 0 12px", fontSize: "16px", fontWeight: 700 }}>
                Fontos változás: adminisztratív székhely már elfogadható.
              </p>
              <Body>
                Önmagában nem kizáró ok, ha az ingatlan csupán adminisztratív jelleggel van bejelentve székhelyként (vagy
                telephelyként/fióktelepként), például az alábbi szervezeti formák esetén:
              </Body>
              <Bullets items={ADMIN_ORG_FORMS} />
              <Body>
                Ennek feltétele, hogy nyilatkozattal igazolható legyen, hogy a gazdasági tevékenység ténylegesen nem az
                ingatlanban történik.
              </Body>
              <div className="mt-7">
                <NoticeBox
                  title="A támogatás nem vehető igénybe azon pályázók esetében, akiknél az alábbi feltételek bármelyike fennáll:"
                  items={EXCLUSIONS}
                />
              </div>
            </Section>

            <RowDivider />

            <Section
              id="tamogatas-merteke"
              eyebrow="A támogatás mértéke"
              title="Mekkora támogatás igényelhető, és mire használható fel?"
              intro="A sikeres pályázók legfeljebb 2 500 000 Ft vissza nem térítendő támogatásban részesülhetnek, amely az akkumulátoros energiatároló rendszer beszerzéséhez és telepítéséhez kapcsolódó költségek széles körét fedezheti. Amennyiben a beruházás összköltsége meghaladja a támogatási összeget, a különbözet önerőből finanszírozandó."
            >
              <SubHead>1. Elszámolható költségek a támogatás terhére</SubHead>
              <Bullets items={ELIGIBLE_COSTS} />
              <InfoCallout>
                <strong>Fontos megjegyezni</strong>, hogy a felhívás megjelenése előtt felmerült költségek nem
                számolhatók el, továbbá a lakóingatlan teljes elektromos hálózatának korszerűsítése sem minősül
                elszámolható költségnek.
              </InfoCallout>
              <SubHead>2. Önállóan is támogatható elemek</SubHead>
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
              id="jelentkezes-folyamat"
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
              <InfoCallout>
                <strong>Fontos:</strong> a 2. ütem nem indul el automatikusan 2026. március 16-án – az csak az 1. ütem
                lezárását és a döntést követően, a jogosult pályázók számára nyílik meg. Az igazolási szakasz kezdete a
                pályázati szakasz lezárását követően kerül meghatározásra, és legkésőbb 2026. szeptember 30-ig tart.
              </InfoCallout>
              <Body>
                A Felhívásban elvárt szaldó elszámolás igazolásához nem az elosztói engedélyes által újonnan kibocsátott
                igazolás szükséges, hanem a Támogató (NEÜ Zrt.) végzi el az igazolást a megadott POD szám és felhasználási
                hely alapján.
              </Body>
              <Body>
                A fenntartási időszak 3 év, amely a záró elszámolás elfogadásának napjától kezdődik – nem a kivitelezés
                befejezésétől és nem a szolgáltatói átvétel időpontjától számítódik.
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
              <div className="flex flex-col gap-4">
                {PAYOUTS.map((phase) => (
                  <div
                    key={phase.no}
                    className="flex items-start gap-5 px-6 py-6 md:px-7"
                    style={{ background: "var(--surface-3)", borderRadius: "20px" }}
                  >
                    <span
                      className="flex flex-none items-center justify-center"
                      style={{ width: "44px", height: "44px", borderRadius: "9999px", background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)", fontSize: "18px", fontWeight: 700 }}
                    >
                      {phase.no}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>
                          {phase.title}
                        </h3>
                        <p style={{ margin: 0, fontSize: "20px", fontWeight: 700, color: "var(--brand)", whiteSpace: "nowrap" }}>
                          {phase.amount}
                        </p>
                      </div>
                      <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.7 }}>
                        {phase.text}
                      </p>
                    </div>
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
              <InfoCallout>
                <strong>Fontos kiegészítés:</strong> a támogatás kizárólag{" "}
                <strong>elosztóhálózathoz csatlakozó rendszerekre</strong> vehető igénybe. A{" "}
                <strong>szigetüzemű működés nem támogatható</strong>, ugyanakkor a rendszer működhet visszatáplálás-mentes
                (visszwattos) üzemmódban, azaz a közcélú hálózat felé aktív teljesítményt nem táplál be.
              </InfoCallout>
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
              <InfoCallout>
                Az ismeretlen eredetű vagy nem megfelelően minősített akkumulátorok használata komoly műszaki és
                biztonsági kockázatot jelenthet, ezért kizárólag{" "}
                <strong>bevizsgált, megbízható gyártók által kínált energiatárolók</strong> alkalmazása javasolt.
              </InfoCallout>
            </Section>

            <RowDivider />

            <Section
              id="miert-minket"
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

            <RowDivider />

            {/* ZÁRÓ ŰRLAP — a main oszlopon belül, a sidebaros elrendezésben */}
            <div className="pt-2">
              <OepHeroForm />
            </div>
          </div>

          {/* SIDEBAR — felül navigáció, alul ügyfélszolgálat (a webináriumtól a footerig) */}
          <aside className="lg:border-l lg:border-dashed lg:border-[#ececec] lg:pl-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-start lg:grid-cols-1 lg:sticky lg:top-[110px]">
              <ServiceTocNav items={OEP_TOC} />
              <SupportWidget />
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
);
