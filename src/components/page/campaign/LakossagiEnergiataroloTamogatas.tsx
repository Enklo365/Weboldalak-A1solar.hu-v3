import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

/** Small brand-tint pill used as a section eyebrow. */
const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

/** Inline brand-red check mark used across benefit / feature lists. */
const CheckIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <circle cx="12" cy="12" r="12" fill="var(--brand)" />
    <path
      d="M7 12.5l3 3 7-7"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** One inverter / storage package tier from the OEP catalogue. */
type StoragePackage = {
  name: string;
  image: string;
  ownFund: string;
  grant: string;
  backup: string;
  featured?: boolean;
};

const PACKAGES: StoragePackage[] = [
  {
    name: "DEYE csomagok",
    image: "/wp-content/uploads/2026/01/DEYE.png",
    ownFund: "Már 0 Ft önerőtől",
    grant: "2,5 millió Ft",
    backup: "Opcionális backup funkció (ingyenes)",
    featured: true,
  },
  {
    name: "FOX ESS csomagok",
    image: "/wp-content/uploads/2026/01/FOXESS.png",
    ownFund: "Már 0 Ft önerőtől",
    grant: "2,5 millió Ft",
    backup: "Opcionális backup funkció",
  },
  {
    name: "SIGENERGY csomagok",
    image: "/wp-content/uploads/2026/01/SIGENERGY.png",
    ownFund: "Már 130 000 Ft önerőtől",
    grant: "2,5 millió Ft",
    backup: "Opcionális backup funkció",
  },
  {
    name: "HUAWEI csomagok",
    image: "/wp-content/uploads/2026/01/HUAWEI.png",
    ownFund: "Már 835 600 Ft önerőtől",
    grant: "2,5 millió Ft",
    backup: "Opcionális backup funkció",
  },
];

const HERO_BENEFITS: string[] = [
  "10+ év szakmai tapasztalat a megújuló energia piacán",
  "Országos lefedettség, gyors és átlátható ügyintézés",
  "Teljes körű garancia a telepített rendszerekre",
  "Több milliárd forintos árbevétel, stabil vállalati háttér",
];

/** Highlight stats derived directly from the program brief. */
const PROGRAM_STATS: { value: string; label: string }[] = [
  { value: "100 mrd Ft", label: "Program keretösszeg" },
  { value: "2,5 M Ft", label: "Maximális támogatás háztartásonként" },
  { value: "min. 10 kWh", label: "Támogatott tárolókapacitás" },
  { value: "akár 100%", label: "Finanszírozás a piaci árak mellett" },
];

/** Costs coverable from the grant. */
const ELIGIBLE_COSTS: string[] = [
  "Villamosenergia-tároló (akkumulátor) beszerzése",
  "Inverter beszerzése vagy cseréje (kizárólag hibrid inverterrel)",
  "Tároló vezérlését végző eszközök (pl. BMS)",
  "Visszwatt-védelem és beállítás költségei",
  "Tervezési és engedélyezési költségek",
  "Pályázati adminisztráció és kivitelezői közreműködés díja",
  "Mérőhely szabványosítása",
  "Fázisbővítés és csatlakozási alapdíj legfeljebb 3×20 A-ig",
  "Telepítési, kiszállási és szerelési munkadíjak",
  "Biztonsági és villamos mérések, vizsgálatok",
];

/** Who the program is an ideal fit for. */
const AUDIENCE_POINTS: string[] = [
  "Nagykorú, cselekvőképes magánszemélyek magyar adóazonosító jellel.",
  "A beruházás helyszínével megegyező magyarországi állandó lakóhellyel.",
  "A lakóingatlanban (rész)tulajdonjoggal, haszonélvezeti joggal vagy lakáscélú lízingszerződéssel rendelkezők.",
  "Akiknek már van napelemes rendszerük, vagy vállalják annak telepítését a projekt keretében.",
];

/** Eligible property types. */
const PROPERTY_TYPES: string[] = [
  "Családi ház",
  "Jogilag és energetikailag önálló iker- vagy sorház",
  "Legfeljebb 6 lakásos társasház lakása",
];

/** Application timeline steps. */
type TimelineStep = {
  no: string;
  title: string;
  period: string;
  text: string;
};

const TIMELINE: TimelineStep[] = [
  {
    no: "01",
    title: "Felhívás megjelenése",
    period: "2026. január 15.",
    text: "A pályázati felhívás publikálása, amellyel elindul a program.",
  },
  {
    no: "02",
    title: "1. ütem – benyújtás",
    period: "2026. február 2. 10:00 – legkésőbb március 15. 17:00",
    text: "A pályázati űrlap kitöltése és benyújtása az nffku.hu portálon, KAÜ-azonosítással (Ügyfélkapu+ vagy DÁP).",
  },
  {
    no: "03",
    title: "2. ütem – igazolás és döntés",
    period: "2026. március 16. 10:00 – legkésőbb szeptember 30.",
    text: "A jogosultság igazolása, a projekt műszaki tartalmának bemutatása, a vállalkozási szerződés megkötése és a dokumentumok benyújtása. A 2. ütem csak az 1. ütem lezárása és a döntés után, a jogosult pályázók számára nyílik meg.",
  },
  {
    no: "04",
    title: "Fenntartási időszak",
    period: "3 év",
    text: "A fenntartási időszak a záró elszámolás elfogadásának napjától kezdődik – nem a kivitelezés befejezésétől vagy a szolgáltatói átvételtől.",
  },
];

/** Payout phases. */
const PAYOUTS: { no: string; title: string; amount: string; text: string }[] = [
  {
    no: "1",
    title: "Előleg",
    amount: "1 000 000 Ft",
    text: "A pozitív támogatói döntést követően a Támogató 1 000 000 Ft előleget folyósít, amelyet a pályázó a kivitelező részére fizet meg a vállalkozási szerződés szerint.",
  },
  {
    no: "2",
    title: "Részszámla",
    amount: "Önerő rendezése",
    text: "A kivitelezés előrehaladásával a pályázó a részszámla alapján teljesíti a támogatási összeg és az esetleges önerő arányos részét. 2,5 millió Ft feletti összköltségnél az önerő rendelkezésre állását igazolni kell.",
  },
  {
    no: "3",
    title: "Végszámla",
    amount: "Legfeljebb 1 500 000 Ft",
    text: "A beruházás készre jelentése után a Támogató a végszámla alapján, de legfeljebb 1 500 000 Ft összegben folyósítja a fennmaradó támogatási részt.",
  },
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

/** Extra loyalty perks. */
const PERKS: { title: string; text: string }[] = [
  {
    title: "100 000 Ft értékű fejlesztési kupon",
    text: "Minden velünk sikeresen megvalósított projekt után bruttó 100 000 Ft értékű kupont adunk, amit későbbi napelemes vagy energiatárolási fejlesztésekhez használhatsz fel az A1 Solar Kft.-nél.",
  },
  {
    title: "Álomutazás sorsolás – 2 fő részére",
    text: "Ha 2026. április 30-ig szerződsz velünk és Támogatói Okiratot kapsz, automatikusan részt veszel a sorsoláson. A nyertes egy 2 személyes, 5 napos álomutazást választhat: Zanzibár szigetére vagy Kínába.",
  },
];

/** Why choose A1 Solar. */
const GUARANTEES: string[] = [
  "10+ év szakmai tapasztalat a megújuló energia piacán",
  "Országos lefedettség, gyors és átlátható ügyintézés",
  "40+ fős szakértői csapat, saját kivitelezéssel",
  "Teljes körű garancia a telepített rendszerekre",
  "Több milliárd forintos árbevétel, stabil vállalati háttér",
];

/** FAQ items rendered as native details/summary accordions. */
const FAQ: { q: string; a: string }[] = [
  {
    q: "Hogyan történik a pályázatok elbírálása?",
    a: "A támogatási kérelmek elbírálása meghatározott preferenciarendszer alapján, több lépcsőben történik. Az első prioritási csoportba tartoznak azok, akik már kikerültek az éves szaldóelszámolásból, legkésőbb 2030. december 31-ig kikerülnek abból, vagy állami támogatás nélkül, önerőből telepítettek napelemes rendszert és jelenleg bruttó elszámolás alá tartoznak. A második csoportban azok, akik 5000 fő alatti településen rendelkeznek bejelentett állandó lakóhellyel. A sorrendet a település lélekszáma és a pályázat beadásának időpontja határozza meg.",
  },
  {
    q: "Milyen műszaki feltételeknek kell megfelelni?",
    a: "Az akkumulátoros energiatároló névleges kapacitása legalább 10 kWh legyen (legfeljebb 10%-os eltérés lefelé engedélyezett), felső korlát nincs. A tároló kizárólag a napelemes rendszer egyenáramú (DC) oldalához, közös hibrid inverterre csatlakoztatható; AC oldali csatlakozás nem támogatható. A névleges feszültség legalább 100 V. Új rendszer telepítésekor az inverter maximális névleges teljesítménye 5 kW, a paneloldali teljesítmény legfeljebb 6 kWp. A támogatás csak elosztóhálózathoz csatlakozó rendszerekre vehető igénybe, a szigetüzem nem támogatható.",
  },
  {
    q: "Mennyi idő áll rendelkezésre a megvalósításra?",
    a: "A beruházást a Támogatói okirat hatályba lépésétől számított legfeljebb 24 hónapon belül kell megvalósítani, ami elegendő időt biztosít a tervezésre, engedélyezésre és kivitelezésre.",
  },
  {
    q: "Mire figyeljen akkumulátor választáskor?",
    a: "A lakossági energiatárolók piacán jelentős a kínálatbővülés, sok új gyártóval. Az ismeretlen eredetű vagy nem megfelelően minősített akkumulátorok komoly műszaki és biztonsági kockázatot jelenthetnek, ezért kizárólag bevizsgált, megbízható gyártók által kínált energiatárolók alkalmazása javasolt.",
  },
  {
    q: "Mire kell figyelni a megvalósítás helyszínén?",
    a: "A projekt helyszínén gazdasági tevékenység nem folytatható, még kiegészítő jelleggel sem. Fontos változás azonban, hogy az adminisztratív székhely már elfogadható: önmagában nem kizáró ok, ha az ingatlan csupán adminisztratív jelleggel van székhelyként bejelentve, feltéve, hogy nyilatkozattal igazolható, hogy a gazdasági tevékenység ténylegesen nem az ingatlanban történik.",
  },
];

/**
 * "Lakossági energiatároló támogatás" (Otthoni Energiatároló Program) kampány-landing —
 * bespoke natív újraépítés az A1 Solar design-nyelvén: hero, program-részletek,
 * jogosultság, csomagajánlatok, folyamat, kifizetés, webinárium, extra előnyök,
 * GYIK akkordeon és záró ajánlatkérő űrlap.
 */
export const LakossagiEnergiataroloTamogatas = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Eyebrow>Otthoni Energiatároló Program · 100 milliárd Ft keret</Eyebrow>
            <h1
              className="text-[var(--ink)]"
              style={{ marginTop: "26px", fontSize: "clamp(36px, 6vw, 66px)", lineHeight: 1.08 }}
            >
              <span style={{ fontWeight: 300 }}>Bízd ránk </span>
              <span style={{ fontWeight: 700 }}>a kivitelezést!</span>
            </h1>
            <p
              className="text-[var(--ink-soft)]"
              style={{ marginTop: "22px", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, maxWidth: "560px" }}
            >
              Az Otthoni Energiatároló Program keretében segítünk a pályázati adminisztrációban, a
              rendszer kiválasztásában, tervezésében és kivitelezésében, hogy otthonod számára
              megbízható, hosszú távú megoldás valósuljon meg.
            </p>
            <ul
              className="flex flex-col gap-4"
              style={{ listStyle: "none", padding: 0, margin: "28px 0 0", maxWidth: "560px" }}
            >
              {HERO_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink)]" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href="#ajanlatkeres"
                style={{
                  display: "inline-block",
                  background: "var(--brand)",
                  color: "#fff",
                  padding: "16px 34px",
                  borderRadius: "9999px",
                  fontWeight: 500,
                }}
              >
                Kérd ingyenes kalkulációnkat!
              </a>
            </div>
          </div>

          <div style={{ borderRadius: "28px", overflow: "hidden", background: "var(--surface-3)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/2025/12/Uj-lakossagi-energiatarolos-tamogatasi-program-indul-1024x667.png"
              alt="Új lakossági energiatárolós támogatási program indul"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* STATISZTIKA-SÁV */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {PROGRAM_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-6 py-10 text-center"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <span
                style={{ color: "var(--brand)", fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 700, lineHeight: 1 }}
              >
                {stat.value}
              </span>
              <span className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "14px", lineHeight: 1.4 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TÁMOGATÁSI RÉSZLETEK — a program bemutatása */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Támogatási részletek</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.18, maxWidth: "820px" }}
          >
            Akár 2,5 millió Ft támogatás energiatárolóra
          </h2>
        </div>

        <div className="mx-auto mt-10 flex flex-col gap-5" style={{ maxWidth: "860px" }}>
          <p className="text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.75 }}>
            A lakossági energiatároló támogatási program 100 milliárd forintos keretösszeggel indul, és
            háztartásonként legfeljebb 2,5 millió forint vissza nem térítendő támogatást biztosít
            akkumulátoros energiatároló rendszer telepítésére. A támogatás elsősorban legalább 10 kWh
            kapacitású lakossági energiatárolók létesítésére vehető igénybe. A jelenlegi piaci árak
            mellett a támogatás akár 100%-os finanszírozást is jelenthet.
          </p>
          <p className="text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.75 }}>
            Az elbírálás során előnyt élveznek azok a háztartások, amelyek már kikerültek, vagy 2030-ig
            kikerülnek az éves szaldóelszámolásból, valamint azok a pályázók, akik 5000 fő alatti
            településen rendelkeznek bejelentett állandó lakóhellyel. A támogatás feltétele meglévő, vagy
            a projekt keretében vállaltan telepítésre kerülő napelemes rendszer megléte.
          </p>
          <p className="text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.75 }}>
            A konstrukció célja, hogy a családok a napközben megtermelt villamos energiát minél nagyobb
            arányban saját otthonukban használják fel, ezáltal csökkentve a villanyszámlát, növelve az
            energiafüggetlenséget, valamint mérsékelve a villamosenergia-hálózat terhelését.
          </p>
        </div>
      </div>
    </section>

    {/* KINEK AJÁNLOTT */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Kinek ajánlott?</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.18, maxWidth: "820px" }}
          >
            Kiknek jelent ideális megoldást a program?
          </h2>
          <p
            className="mx-auto mt-5 text-[var(--ink-soft)]"
            style={{ fontSize: "17px", lineHeight: 1.7, maxWidth: "820px" }}
          >
            A támogatás elsősorban azoknak a háztartásoknak kínál valódi előnyt, amelyek már kikerültek
            az éves szaldóelszámolásból, vagy legkésőbb 2030. december 31-ig átkerülnek abból – ez
            leggyakrabban a 2015 előtt telepített rendszereknél fordul elő. Emellett elérhető azok
            számára is, akik önerőből létesítettek napelemes rendszert, és jelenleg bruttó elszámolásban
            vannak.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "22px", fontWeight: 600 }}>
              Ki nyújthatja be a pályázatot?
            </h3>
            <ul className="mt-6 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {AUDIENCE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "22px", fontWeight: 600 }}>
              Hol valósítható meg?
            </h3>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              A beruházás kizárólag lakhatási célú ingatlanon valósítható meg:
            </p>
            <ul className="mt-5 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {PROPERTY_TYPES.map((type) => (
                <li key={type} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {type}
                  </span>
                </li>
              ))}
            </ul>
            <p
              className="mt-6 text-[var(--ink-muted)]"
              style={{ fontSize: "14px", lineHeight: 1.6 }}
            >
              Fontos változás: adminisztratív székhely már elfogadható, ha nyilatkozattal igazolható, hogy
              a gazdasági tevékenység ténylegesen nem az ingatlanban történik.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* A TÁMOGATÁS MÉRTÉKE — elszámolható költségek */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-[0.95fr_1.05fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>A támogatás mértéke</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
            >
              Mekkora támogatás igényelhető, és mire használható fel?
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              A sikeres pályázók legfeljebb 2 500 000 Ft vissza nem térítendő támogatásban részesülhetnek,
              amely az akkumulátoros energiatároló rendszer beszerzéséhez és telepítéséhez kapcsolódó
              költségek széles körét fedezheti. Ha a beruházás összköltsége meghaladja a támogatási
              összeget, a különbözet önerőből finanszírozandó.
            </p>
            <p className="mt-4 text-[var(--ink-muted)]" style={{ fontSize: "14px", lineHeight: 1.65 }}>
              A felhívás megjelenése előtt felmerült költségek nem számolhatók el, és a lakóingatlan teljes
              elektromos hálózatának korszerűsítése sem minősül elszámolható költségnek.
            </p>
          </div>

          <div>
            <p
              className="text-[var(--ink)]"
              style={{ margin: 0, fontSize: "15px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}
            >
              Elszámolható költségek a támogatás terhére
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {ELIGIBLE_COSTS.map((cost) => (
                <li key={cost} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "14px", lineHeight: 1.5 }}>
                    {cost}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CSOMAGOK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Csomagok</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.18, maxWidth: "820px" }}
          >
            Csomagajánlataink
          </h2>
          <p
            className="mx-auto mt-5 text-[var(--ink-soft)]"
            style={{ fontSize: "17px", lineHeight: 1.7, maxWidth: "860px" }}
          >
            Az alábbi csomagajánlatokat kifejezetten az Otthoni Energiatároló Program feltételeihez
            igazítva állítottuk össze. A csomagok tartalmazzák a teljes körű tervezést és
            engedélyeztetést, a pályázatírást és projektmenedzsmentet, valamint – a program aktuális
            feltételei mellett – az ingyenes padlásfödém szigetelést is.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className="flex flex-col overflow-hidden"
              style={{
                background: "var(--surface-3)",
                borderRadius: "24px",
                border: Boolean(pkg.featured) ? "2px solid var(--brand)" : "2px solid transparent",
              }}
            >
              <div style={{ height: "180px", background: "#fff", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="flex flex-1 flex-col px-6 py-7">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 700 }}>
                    {pkg.name}
                  </h3>
                  {Boolean(pkg.featured) ? (
                    <span
                      className="rounded-[30px] px-3 py-1 text-xs font-semibold uppercase tracking-[1px]"
                      style={{ background: "var(--brand)", color: "#fff" }}
                    >
                      Ajánlott
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 text-[var(--ink-muted)]" style={{ margin: "16px 0 0", fontSize: "13px" }}>
                  Önerő
                </p>
                <p className="text-[var(--ink)]" style={{ margin: "2px 0 0", fontSize: "20px", fontWeight: 700 }}>
                  {pkg.ownFund}
                </p>

                <div
                  className="mt-4 flex items-center justify-between py-3"
                  style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
                >
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "14px" }}>
                    Támogatás
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "var(--brand)" }}>{pkg.grant}</span>
                </div>

                <p className="mt-4 flex-1 text-[var(--ink-soft)]" style={{ fontSize: "14px", lineHeight: 1.55 }}>
                  {pkg.backup}
                </p>

                <div className="mt-6">
                  <a
                    href="#ajanlatkeres"
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: "var(--brand)",
                      color: "#fff",
                      padding: "12px 20px",
                      borderRadius: "9999px",
                      fontWeight: 500,
                    }}
                  >
                    Érdekel a csomag
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 md:flex-row md:justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wp-content/uploads/2025/10/ingyenespadlasszigeteles.png"
            alt="Ingyenes padlásfödém szigetelés"
            loading="lazy"
            style={{ height: "88px", width: "auto", objectFit: "contain" }}
          />
          <p
            className="text-center text-[var(--ink-soft)] md:text-left"
            style={{ fontSize: "16px", lineHeight: 1.6, maxWidth: "460px" }}
          >
            Kattints a további csomagajánlataink gombra, és nézd meg a teljes kínálatot.
          </p>
          <a
            href="#ajanlatkeres"
            style={{
              display: "inline-block",
              background: "var(--brand)",
              color: "#fff",
              padding: "14px 30px",
              borderRadius: "9999px",
              fontWeight: 500,
            }}
          >
            További csomagajánlataink
          </a>
        </div>
      </div>
    </section>

    {/* FOLYAMAT — jelentkezés és ütemezés */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Jelentkezési folyamat</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.18, maxWidth: "820px" }}
          >
            Mikor és hogyan lehet jelentkezni?
          </h2>
          <p
            className="mx-auto mt-5 text-[var(--ink-soft)]"
            style={{ fontSize: "17px", lineHeight: 1.7, maxWidth: "820px" }}
          >
            A pályázatok kizárólag elektronikus úton nyújthatók be a pályázati portálon keresztül, KAÜ-azonosítással
            (Ügyfélkapu+ vagy Digitális Állampolgár). A folyamat két, egymásra épülő ütemből áll.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TIMELINE.map((step) => (
            <div
              key={step.no}
              className="flex gap-5 px-8 py-8"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <span
                className="flex items-center justify-center"
                style={{
                  flexShrink: 0,
                  width: "52px",
                  height: "52px",
                  borderRadius: "9999px",
                  background: "var(--brand)",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                {step.no}
              </span>
              <div>
                <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "19px", fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p style={{ margin: "6px 0 0", fontSize: "14px", fontWeight: 600, color: "var(--brand)" }}>
                  {step.period}
                </p>
                <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* KIFIZETÉS */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Kifizetések</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.18, maxWidth: "820px" }}
          >
            Hogyan történik a támogatás kifizetése?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PAYOUTS.map((phase) => (
            <div
              key={phase.no}
              className="flex flex-col px-8 py-8"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <span
                className="flex items-center justify-center"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "9999px",
                  background: "rgba(194,29,32,0.14)",
                  color: "var(--brand-dark)",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                {phase.no}
              </span>
              <h3 className="text-[var(--ink)]" style={{ margin: "18px 0 0", fontSize: "20px", fontWeight: 600 }}>
                {phase.title}
              </h3>
              <p style={{ margin: "4px 0 0", fontSize: "22px", fontWeight: 700, color: "var(--brand)" }}>
                {phase.amount}
              </p>
              <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
                {phase.text}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mx-auto mt-8 text-center text-[var(--ink-muted)]"
          style={{ fontSize: "14px", lineHeight: 1.6, maxWidth: "760px" }}
        >
          Amennyiben a beruházás teljes költsége meghaladja a támogatás maximális összegét, a különbözetet
          a pályázó önerőként köteles megfizetni a kivitelező részére. Az önerő rendelkezésre állása a
          támogatói okirat kiállításának és a kifizetések teljesítésének feltétele.
        </p>
      </div>
    </section>

    {/* WEBINÁRIUM */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Webinárium</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.18, maxWidth: "820px" }}
          >
            Otthoni Energiatároló Program webinárium
          </h2>
          <p
            className="mx-auto mt-5 text-[var(--ink-soft)]"
            style={{ fontSize: "17px", lineHeight: 1.7, maxWidth: "820px" }}
          >
            Online webináriumot tartunk, ahol a 2. szakasz benyújtási folyamatát, a szükséges
            tudnivalókat, valamint a következő lépéseket vesszük végig részletesen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {WEBINARS.map((webinar) => (
            <div
              key={webinar.title}
              className="flex flex-col px-8 py-9"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <span
                className="inline-block rounded-[30px] px-3 py-1 text-xs font-semibold uppercase tracking-[1px]"
                style={{ background: "var(--brand)", color: "#fff", alignSelf: "flex-start" }}
              >
                {webinar.badge}
              </span>
              <h3 className="text-[var(--ink)]" style={{ margin: "18px 0 0", fontSize: "22px", fontWeight: 600 }}>
                {webinar.title}
              </h3>
              <p className="mt-4 flex-1 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                {webinar.text}
              </p>
              <div className="mt-6">
                <a
                  href="#ajanlatkeres"
                  style={{
                    display: "inline-block",
                    background: "var(--brand)",
                    color: "#fff",
                    padding: "12px 28px",
                    borderRadius: "9999px",
                    fontWeight: 500,
                  }}
                >
                  Jelentkezem
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* EXTRA ELŐNYÖK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Extra előnyök</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.18, maxWidth: "820px" }}
          >
            A pályázat és a kivitelezés nálunk csak a kezdet
          </h2>
          <p className="mx-auto mt-5 text-[var(--ink-soft)]" style={{ fontSize: "17px", maxWidth: "620px" }}>
            Extra előnyök, amiket máshol nem kapsz meg.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PERKS.map((perk) => (
            <div
              key={perk.title}
              className="flex flex-col px-8 py-9"
              style={{
                background: "rgba(194,29,32,0.06)",
                borderRadius: "24px",
                borderLeft: "4px solid var(--brand)",
              }}
            >
              <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "22px", fontWeight: 600, lineHeight: 1.25 }}>
                {perk.title}
              </h3>
              <p className="mt-4 flex-1 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                {perk.text}
              </p>
              <p className="mt-5 text-[var(--ink-muted)]" style={{ margin: "20px 0 0", fontSize: "13px" }}>
                Szabályzat: promóciós szabályzat
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MŰSZAKI + IDŐKERET rövid kiemelés */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>
              Legalább 10 kWh kapacitás
            </h3>
            <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
              Az energiatároló kizárólag a napelemes rendszer DC oldalához, közös hibrid inverterre
              csatlakoztatható. Az AC oldali csatlakozás nem támogatható.
            </p>
          </div>
          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>
              24 hónap a megvalósításra
            </h3>
            <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
              A beruházást a Támogatói okirat hatályba lépésétől számított legfeljebb 24 hónapon belül kell
              megvalósítani.
            </p>
          </div>
          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>
              Csak megbízható gyártók
            </h3>
            <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
              Az energiatárolók esetében a biztonság és a hosszú távú megbízhatóság kiemelt szempont –
              kizárólag bevizsgált gyártók megoldásaival dolgozunk.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* MIÉRT VÁLASSZON MINKET */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-[1fr_1.1fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>Cégünkről</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
            >
              Miért válasszon minket?
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              Az A1 Solar Kft. több mint egy évtizede foglalkozik napelemes rendszerek és energiatárolási
              megoldások tervezésével és kivitelezésével. Tapasztalatunk lehetővé teszi, hogy ügyfeleink
              számára biztonságos, hosszú távon is megbízható rendszereket kínáljunk.
            </p>
          </div>

          <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {GUARANTEES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* GYIK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Gyakori kérdések</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.18, maxWidth: "820px" }}
          >
            Kérdésed maradt?
          </h2>
        </div>

        <div className="mx-auto mt-10 flex flex-col gap-4" style={{ maxWidth: "880px" }}>
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="px-7 py-5"
              style={{ background: "var(--surface-3)", borderRadius: "20px" }}
            >
              <summary
                className="flex cursor-pointer items-center justify-between text-[var(--ink)]"
                style={{ fontSize: "18px", fontWeight: 600, listStyle: "none" }}
              >
                {item.q}
              </summary>
              <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* AJÁNLATKÉRÉS */}
    <section id="ajanlatkeres" className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Kapcsolatfelvétel</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.18, maxWidth: "820px" }}
          >
            Indítsd el velünk a kivitelezést!
          </h2>
          <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px" }}>
            Ügyfélszolgálatunk hétköznap {SITE.supportHours} között elérhető:{" "}
            <a href={`tel:${SITE.phoneRaw}`} style={{ color: "var(--brand)", fontWeight: 700 }}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="mt-10">
          <ContactForm
            bare
            formName="Lakossági energiatároló támogatás"
            heading="Kérd ingyenes kalkulációnkat!"
            intro="Töltsd ki az űrlapot, és kollégánk segít kihasználni az Otthoni Energiatároló Program támogatását."
          />
        </div>
      </div>
    </section>
  </div>
);
