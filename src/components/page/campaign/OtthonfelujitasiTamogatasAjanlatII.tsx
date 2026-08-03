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

/** Inline brand-red check mark for benefit / feature lists. */
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

/** One spec row inside a package card. */
type PackageSpec = { label: string; value: string };

/** A single discounted solar package tier. */
type SolarPackage = {
  name: string;
  price: string;
  specs: PackageSpec[];
};

/** A named group of packages, with an intro line. */
type PackageGroup = { title: string; intro: string; packages: SolarPackage[] };

const PACKAGE_GROUPS: PackageGroup[] = [
  {
    title: "Napelemes csomagok",
    intro: "Klasszikus napelemes rendszerek TIER-1 panelekkel és Huawei inverterrel.",
    packages: [
      {
        name: "5 kWp",
        price: "br. 2 156 000 Ft",
        specs: [
          { label: "Napelem típusa", value: "12 db 410 Wp TIER-1 panel" },
          { label: "Inverter típusa", value: "Huawei SUN2000-5K-MAP0" },
        ],
      },
      {
        name: "8 kWp",
        price: "br. 2 892 000 Ft",
        specs: [
          { label: "Napelem típusa", value: "20 db 410 Wp TIER-1 panel" },
          { label: "Inverter típusa", value: "Huawei SUN2000-8K-MAP0" },
        ],
      },
      {
        name: "10 kWp",
        price: "br. 3 322 000 Ft",
        specs: [
          { label: "Napelem típusa", value: "25 db 410 Wp TIER-1 panel" },
          { label: "Inverter típusa", value: "Huawei SUN2000-10K-MAP0" },
        ],
      },
    ],
  },
  {
    title: "Napelem akkumulátoros tárolóval",
    intro: "Energiatárolással kombinált rendszerek a maximális energiafüggetlenségért.",
    packages: [
      {
        name: "5 kWp – 5 kWh",
        price: "br. 2 983 000 Ft",
        specs: [
          { label: "Napelem típusa", value: "12 db 410 Wp TIER-1 panel" },
          { label: "Inverter típusa", value: "Huawei SUN2000-5K-MAP0" },
          { label: "Akkumulátor típusa", value: "Huawei LUNA2000-5-E0" },
        ],
      },
      {
        name: "8 kWp – 7 kWh",
        price: "br. 4 334 000 Ft",
        specs: [
          { label: "Napelem típusa", value: "20 db 410 Wp TIER-1 panel" },
          { label: "Inverter típusa", value: "Huawei SUN2000-8K-MAP0" },
          { label: "Akkumulátor típusa", value: "Huawei LUNA2000-7-E1" },
        ],
      },
      {
        name: "5 kWp – 10 kWh",
        price: "br. 3 810 000 Ft",
        specs: [
          { label: "Napelem típusa", value: "12 db 410 Wp TIER-1 panel" },
          { label: "Inverter típusa", value: "Huawei SUN2000-5K-MAP0" },
          { label: "Akkumulátor típusa", value: "2 db Huawei LUNA2000-5-E0" },
        ],
      },
      {
        name: "8 kWp – 10 kWh",
        price: "br. 4 546 000 Ft",
        specs: [
          { label: "Napelem típusa", value: "20 db 410 Wp TIER-1 panel" },
          { label: "Inverter típusa", value: "Huawei SUN2000-8K-MAP0" },
          { label: "Akkumulátor típusa", value: "2 db Huawei LUNA2000-5-E0" },
        ],
      },
      {
        name: "10 kWp – 10 kWh",
        price: "br. 5 451 000 Ft",
        specs: [
          { label: "Napelem típusa", value: "25 db 410 Wp TIER-1 panel" },
          { label: "Inverter típusa", value: "Huawei SUN2000-10K-MAP0" },
          { label: "Akkumulátor típusa", value: "2 db Huawei LUNA2000-5-E0" },
        ],
      },
    ],
  },
];

const SUPPORT_TERMS: string[] = [
  "Vissza nem térítendő támogatás: a felújítási költségek 50%-a fedezhető, maximum 3 millió forintig.",
  "Kamattámogatott hitel: legfeljebb 6 millió forintos, az első öt évben fix kamatozású hitel vehető fel.",
  "A támogatás összegének megoszlása az anyagköltség és a vállalkozói díj tekintetében 50-50%-os arányban történik.",
  "Az igényelhető összeg csökkenthető, ha az igénylő 2021-2022-ben már részesült otthonfelújítási támogatásban – ekkor a különbözet igényelhető.",
];

const USE_CASES: string[] = [
  "Napelemes rendszer telepítésére vagy cseréjére",
  "Okosotthon megoldások kialakítására",
  "Fűtési rendszer korszerűsítésére",
  "Nyílászárók cseréjére",
  "Tetőfelújításra és belső átalakításokra",
];

const PROCESS_STEPS: { step: string; text: string }[] = [
  {
    step: "1",
    text: "Az igénylést a Magyar Államkincstárnál kell benyújtani a szükséges dokumentumokkal.",
  },
  {
    step: "2",
    text: "A támogatás a felújítási munkálatok befejezése után igényelhető, a kifizetés a benyújtástól számított 30 napon belül történik.",
  },
  {
    step: "3",
    text: "A támogatás kizárólag számlákkal igazolt munkálatokra vonatkozik.",
  },
];

const COMPANY_POINTS: string[] = [
  "Teljes körű pályázati ügyintézés",
  "10+ év tapasztalat",
  "Komplex napelemes és okosotthon megoldások",
];

/**
 * "Otthonfelújítási Támogatás ajánlat II." kampány-landing — bespoke natív
 * újraépítés az A1 Solar design-nyelvén: hero, konkrét csomagajánlatok, a
 * Vidéki Otthonfelújítási Támogatás 2025 feltételei, folyamat és ajánlatkérő űrlap.
 */
export const OtthonfelujitasiTamogatasAjanlatII = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>Ajánlat</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>Csökkentse rezsijét </span>
          <span style={{ fontWeight: 700 }}>napelemmel!</span>
        </h1>
        <p
          className="mx-auto mt-8 text-[var(--ink-soft)]"
          style={{ maxWidth: "760px", marginTop: "26px", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7 }}
        >
          A Vidéki Otthonfelújítási Támogatás 2025 segítségével most kedvezményesen telepíthet
          napelemes rendszert akkumulátoros kiegészítéssel és okosotthon technológiával. Készüljön
          fel az elszámolási rendszer közelgő változásaira, és éljen a legjobb feltételekkel!
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#ajanlatkeres"
            style={{
              display: "inline-block",
              background: "var(--brand)",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "9999px",
              fontWeight: 500,
            }}
          >
            További információ
          </a>
          <a
            href={`tel:${SITE.phoneRaw}`}
            style={{ color: "var(--brand)", fontWeight: 700, fontSize: "18px" }}
          >
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>

    {/* ENERGIAFÜGGETLENSÉG */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-[1.1fr_1fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <h2
              className="text-[var(--ink)]"
              style={{ margin: 0, fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              Hónapról hónapra egyre drágább a villanyszámla?
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              A villamosenergia ára folyamatosan emelkedik, ami jelentős terhet róhat a
              háztartásokra. Az energiafüggetlenség azt jelenti, hogy saját napelemes rendszerrel
              részben vagy teljesen leválhat a hálózatról, így kevésbé lesz kiszolgáltatva az
              árváltozásoknak. Ez nem csupán hosszú távú megtakarítást eredményez, hanem biztonságot
              és stabilitást is nyújt.
            </p>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              Ma már elérhető megoldásokkal bárki élvezheti az energiafüggetlenség előnyeit, így ez
              nem luxus, hanem okos döntés a jövő érdekében.
            </p>
            <div className="mt-6">
              <a
                href="#ajanlatkeres"
                style={{
                  display: "inline-block",
                  background: "var(--brand)",
                  color: "#fff",
                  padding: "12px 26px",
                  borderRadius: "9999px",
                  fontWeight: 500,
                }}
              >
                Kérjen ingyenes helyszíni felmérést!
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wp-content/uploads/2025/01/otthonfelujitasi-tamogatas-1.png"
            alt="Otthonfelújítási támogatás napelemes rendszerhez"
            loading="lazy"
            style={{ width: "100%", height: "auto", borderRadius: "20px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>

    {/* CSOMAGAJÁNLATOK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Csomagajánlatok</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Kedvezményes csomagajánlataink a vidéki otthonfelújítási támogatáshoz
          </h2>
          <p
            className="mx-auto mt-4 text-[var(--ink-muted)]"
            style={{ maxWidth: "760px", fontSize: "16px", lineHeight: 1.6 }}
          >
            Csomagajánlataink tájékoztató jellegűek, a végleges ár meghatározásához kérjen személyes
            konzultációt és ingyenes helyszíni felmérést.
          </p>
        </div>

        {PACKAGE_GROUPS.map((group) => (
          <div key={group.title} className="mt-14">
            <h3
              className="text-[var(--ink)]"
              style={{ margin: 0, fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 600 }}
            >
              {group.title}
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]" style={{ fontSize: "16px" }}>
              {group.intro}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="flex flex-col px-7 py-8"
                  style={{ background: "var(--surface-3)", borderRadius: "24px" }}
                >
                  <h4
                    className="text-[var(--ink)]"
                    style={{ margin: 0, fontSize: "24px", fontWeight: 700 }}
                  >
                    {pkg.name}
                  </h4>

                  <dl className="mt-5 flex flex-col" style={{ margin: 0 }}>
                    {pkg.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex flex-col gap-1 py-3"
                        style={{ borderTop: "1px solid var(--line)" }}
                      >
                        <dt className="text-[var(--ink-muted)]" style={{ fontSize: "13px" }}>
                          {spec.label}
                        </dt>
                        <dd
                          className="text-[var(--ink)]"
                          style={{ margin: 0, fontSize: "15px", fontWeight: 600 }}
                        >
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 flex-1">
                    <p className="text-[var(--ink-muted)]" style={{ margin: 0, fontSize: "13px" }}>
                      Bruttó csomagár
                    </p>
                    <p
                      className="text-[var(--ink)]"
                      style={{ margin: 0, marginTop: "2px", fontSize: "26px", fontWeight: 700 }}
                    >
                      {pkg.price}
                    </p>
                  </div>

                  <div className="mt-6">
                    <a
                      href="#ajanlatkeres"
                      style={{
                        display: "inline-block",
                        background: "var(--brand)",
                        color: "#fff",
                        padding: "12px 26px",
                        borderRadius: "9999px",
                        fontWeight: 500,
                      }}
                    >
                      Ajánlatkérés
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* MEGOLDÁS */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="px-8 py-12 text-center md:px-12 md:py-14"
          style={{ background: "rgba(194,29,32,0.06)", borderRadius: "28px" }}
        >
          <Eyebrow>Van megoldás!</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{
              maxWidth: "820px",
              marginTop: "22px",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 600,
              lineHeight: 1.25,
            }}
          >
            Szakértőink gondoskodnak a tervezéstől a pályázati anyagok összeállításán át a
            telepítésig
          </h2>
          <p
            className="mx-auto mt-4 text-[var(--ink-soft)]"
            style={{ maxWidth: "760px", fontSize: "17px", lineHeight: 1.7 }}
          >
            Beleértve az akkumulátoros és okosotthon megoldásokat is, hogy otthona fenntarthatóbb,
            költséghatékonyabb és jövőálló legyen. Ingyenes helyszíni felmérés és személyes
            konzultáció, teljes körű ügyintézéssel!
          </p>
          <div className="mt-8">
            <a
              href="#ajanlatkeres"
              style={{
                display: "inline-block",
                background: "var(--brand)",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "9999px",
                fontWeight: 500,
              }}
            >
              Ingyenes helyszíni felmérést kérek!
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* TÁMOGATÁS – INFORMÁCIÓK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Információk</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Összeszedtünk mindent, amit a támogatásról tudni érdemes
          </h2>
          <p
            className="mx-auto mt-4 text-[var(--ink-soft)]"
            style={{ maxWidth: "820px", fontSize: "17px", lineHeight: 1.7 }}
          >
            A Vidéki Otthonfelújítási Támogatás 2025. január 1-jétől elérhető állami program, amelynek
            célja a kistelepüléseken élő családok lakhatási körülményeinek javítása. A támogatás
            vissza nem térítendő lakáscélú állami támogatásként és otthonfelújítási kölcsön formájában
            igényelhető.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3
              className="text-[var(--ink)]"
              style={{ margin: 0, fontSize: "22px", fontWeight: 600, lineHeight: 1.25 }}
            >
              A támogatás és a hitel feltételei
            </h3>
            <ul className="mt-5 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {SUPPORT_TERMS.map((term) => (
                <li key={term} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {term}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3
              className="text-[var(--ink)]"
              style={{ margin: 0, fontSize: "22px", fontWeight: 600, lineHeight: 1.25 }}
            >
              Mire használhatja a támogatást?
            </h3>
            <ul className="mt-5 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {USE_CASES.map((useCase) => (
                <li key={useCase} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {useCase}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* FOLYAMAT */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Igénylés</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Hogyan lehet igényelni?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="flex flex-col px-8 py-9"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <span
                className="flex items-center justify-center"
                style={{
                  width: "48px",
                  height: "48px",
                  background: "var(--brand)",
                  color: "#fff",
                  borderRadius: "9999px",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                {item.step}
              </span>
              <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CÉGÜNKRŐL */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-[1fr_1.1fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>Cégünkről</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              Miért válassza az A1 Solart?
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              Cégünk teljes körű támogatást nyújt a pályázati ügyintézésben, beleértve a szükséges
              dokumentumok előkészítését és benyújtását. Több mint 10 éves tapasztalatunkkal és több
              mint 4000 telepített rendszerrel garantáljuk a megbízhatóságot, a szakértelmet és a
              biztonságot.
            </p>
            <ul className="mt-6 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {COMPANY_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink)]" style={{ fontSize: "16px", fontWeight: 500 }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="flex flex-col items-center justify-center px-8 py-12 text-center"
            style={{ background: "#fff", borderRadius: "24px" }}
          >
            <span
              style={{ color: "var(--brand)", fontSize: "clamp(48px, 8vw, 72px)", fontWeight: 700, lineHeight: 1 }}
            >
              4000+
            </span>
            <span className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "18px" }}>
              Elégedett ügyfél
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* AJÁNLATKÉRÉS */}
    <section id="ajanlatkeres" className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Kapcsolatfelvétel</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Ne hagyja ki ezt a lehetőséget!
          </h2>
          <p
            className="mx-auto mt-4 text-[var(--ink-soft)]"
            style={{ maxWidth: "760px", fontSize: "17px", lineHeight: 1.7 }}
          >
            Kombinálja az energiatárolást, az okosotthon technológiát és a napelemes rendszert az A1
            Solar szakértelmével. Vegye fel velünk a kapcsolatot, és kérjen ingyenes helyszíni
            felmérést! Vagy hívjon minket:{" "}
            <a href={`tel:${SITE.phoneRaw}`} style={{ color: "var(--brand)", fontWeight: 700 }}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="mt-10">
          <ContactForm
            bare
            formName="Otthonfelújítási Támogatás ajánlat II."
            heading="Kérem ezt az ajánlatot!"
            intro="Töltsd ki az űrlapot, és kollégánk egyeztet veled a részletekről."
          />
        </div>
      </div>
    </section>
  </div>
);
