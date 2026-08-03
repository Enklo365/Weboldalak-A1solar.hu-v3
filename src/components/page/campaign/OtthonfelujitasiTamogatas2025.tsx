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

/** Inline brand-red check mark for benefit / list rows. */
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

/** Key facts about the grant and the loan conditions. */
const GRANT_TERMS: string[] = [
  "Vissza nem térítendő támogatás: a felújítási költségek 50%-a fedezhető, maximum 3 millió forintig.",
  "Kamattámogatott hitel: legfeljebb 6 millió forintos, az első öt évben fix kamatozású hitel vehető fel.",
  "A támogatás összege az anyagköltség és a vállalkozói díj tekintetében 50-50%-os arányban oszlik meg.",
  "Ha az igénylő 2021-2022-ben már részesült otthonfelújítási támogatásban, a különbözetet igényelheti.",
];

/** Eligibility conditions for the grant. */
type Eligibility = { title: string; text: string };

const ELIGIBILITY: Eligibility[] = [
  {
    title: "Gyermekes családok",
    text: "Legalább egy gyermeket nevelő vagy váró szülő igényelheti, házastársak vagy élettársak esetén közösen, együttes igénylőként.",
  },
  {
    title: "Nyugdíjasok",
    text: "Öregségi, özvegyi nyugdíjban, korhatár előtti ellátásban vagy más nyugdíjszerű ellátásban részesülők, akik 5000 fő alatti településen élnek.",
  },
  {
    title: "TB-jogviszony",
    text: "Az egyik igénylő legalább 1 éve rendelkezik társadalombiztosítási jogviszonnyal, maximum 30 napos megszakítással (tanulmány, GYED, kiegészítő tevékenység kivétel).",
  },
  {
    title: "Tulajdonjog",
    text: "Az igénylő és gyermeke együttesen legalább 50%-os tulajdoni hányaddal rendelkezik az érintett, ingatlan-nyilvántartásba bejegyzett ingatlanban.",
  },
  {
    title: "Lakóhely",
    text: "Az igénylőnek és gyermekének (a magzatot kivéve) lakóhellyel kell rendelkeznie az érintett ingatlanban.",
  },
  {
    title: "Köztartozás-mentesség",
    text: "Az igénylő nem rendelkezhet 5000 forintot meghaladó köztartozással, vagy azt 14 napon belül rendeznie kell.",
  },
  {
    title: "Lakhatási kötelezettség",
    text: "Az érintett lakásban legalább 5 évig életvitelszerűen kell lakni, kivéve bizonyos indokolt eseteket.",
  },
  {
    title: "Egyszeri igénylés",
    text: "A támogatás egy alkalommal vehető igénybe; ugyanarra a lakásra másik tulajdonos újra igényelheti, ha nem közeli hozzátartozó.",
  },
];

/** Eligible use cases for the grant. */
const USE_CASES: string[] = [
  "Napelemes rendszer telepítése vagy cseréje",
  "Okosotthon megoldások kialakítása",
  "Fűtési rendszer korszerűsítése",
  "Nyílászárók cseréje",
  "Tetőfelújítás és belső átalakítások",
];

/** Amount and conditions of the grant. */
const AMOUNT_CONDITIONS: string[] = [
  "Támogatás összege: a felújítási költségek 50%-a, de legfeljebb 3 millió forint vissza nem térítendő támogatás.",
  "Önerő: a támogatás utófinanszírozású, a teljes költséget előre ki kell fizetni, a számlák benyújtása után igényelhető vissza.",
  "Tulajdonjog: az igénylőnek legalább 50%-os tulajdoni hányaddal kell rendelkeznie a felújítandó ingatlanban.",
  "Lakóhely: az igénylő vállalja, hogy a támogatott ingatlanban legalább 5 évig életvitelszerűen fog élni.",
  "Köztartozás-mentesség: az igénylő nem rendelkezhet 5000 forintot meghaladó köztartozással.",
];

/** One step of the application process. */
type ProcessStep = { number: string; title: string; text: string };

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "I",
    title: "Előkészületek",
    text: "Felújítási terv készítése és a szükséges anyagi források biztosítása.",
  },
  {
    number: "II",
    title: "Kivitelezés",
    text: "A felújítási munkálatok elvégzése és a számlák gyűjtése.",
  },
  {
    number: "III",
    title: "Igénylés benyújtása",
    text: "A munkálatok befejezése után a szükséges dokumentumok benyújtása a Magyar Államkincstárhoz.",
  },
  {
    number: "IV",
    title: "Támogatás kifizetése",
    text: "A benyújtott dokumentumok ellenőrzése után a támogatás összege utólag kerül kifizetésre.",
  },
];

/** One package tier within a package group. */
type SolarPackage = { power: string; content: string[]; price: string };

/** A named group of package tiers. */
type PackageGroup = { title: string; packages: SolarPackage[] };

const PACKAGE_GROUPS: PackageGroup[] = [
  {
    title: "Napelemes csomagok",
    packages: [
      {
        power: "5 kWp",
        content: ["Napelem: 12 db 410 Wp TIER-1 panel", "Inverter: Huawei SUN2000-5K-MAP0"],
        price: "2 156 000 Ft",
      },
      {
        power: "8 kWp",
        content: ["Napelem: 20 db 410 Wp TIER-1 panel", "Inverter: Huawei SUN2000-8K-MAP0"],
        price: "2 892 000 Ft",
      },
      {
        power: "10 kWp",
        content: ["Napelem: 25 db 410 Wp TIER-1 panel", "Inverter: Huawei SUN2000-10K-MAP0"],
        price: "3 322 000 Ft",
      },
    ],
  },
  {
    title: "Napelem energiatárolással",
    packages: [
      {
        power: "5 kWp – 5 kWh",
        content: [
          "Napelem: 12 db 410 Wp TIER-1 panel",
          "Inverter: Huawei SUN2000-5K-MAP0",
          "Akkumulátor: Huawei LUNA2000-5-E0",
        ],
        price: "2 983 000 Ft",
      },
      {
        power: "8 kWp – 7 kWh",
        content: [
          "Napelem: 20 db 410 Wp TIER-1 panel",
          "Inverter: Huawei SUN2000-8K-MAP0",
          "Akkumulátor: Huawei LUNA2000-7-E1",
        ],
        price: "4 334 000 Ft",
      },
    ],
  },
  {
    title: "Napelem nagyobb tárolókapacitással",
    packages: [
      {
        power: "5 kWp – 10 kWh",
        content: [
          "Napelem: 12 db 410 Wp TIER-1 panel",
          "Inverter: Huawei SUN2000-5K-MAP0",
          "Akkumulátor: 2 db Huawei LUNA2000-5-E0",
        ],
        price: "3 810 000 Ft",
      },
      {
        power: "8 kWp – 10 kWh",
        content: [
          "Napelem: 20 db 410 Wp TIER-1 panel",
          "Inverter: Huawei SUN2000-8K-MAP0",
          "Akkumulátor: 2 db Huawei LUNA2000-5-E0",
        ],
        price: "4 546 000 Ft",
      },
      {
        power: "10 kWp – 10 kWh",
        content: [
          "Napelem: 25 db 410 Wp TIER-1 panel",
          "Inverter: Huawei SUN2000-10K-MAP0",
          "Akkumulátor: 2 db Huawei LUNA2000-5-E0",
        ],
        price: "5 451 000 Ft",
      },
    ],
  },
];

/** Frequently asked questions, faithful to the grant summary. */
type Faq = { question: string; answer: string };

const FAQ: Faq[] = [
  {
    question: "Mekkora támogatás igényelhető?",
    answer:
      "A felújítási költségek 50%-a, de legfeljebb 3 millió forint vissza nem térítendő támogatás igényelhető. Emellett legfeljebb 6 millió forintos, az első öt évben fix kamatozású kamattámogatott hitel is felvehető.",
  },
  {
    question: "Milyen településeken vehető igénybe?",
    answer:
      "A támogatás kizárólag az 5000 fő alatti településeken lévő ingatlanokra vehető igénybe.",
  },
  {
    question: "Nyugdíjasként jogosult vagyok a támogatásra?",
    answer:
      "Igen. 2025-től azok is jogosultak, akik öregségi, özvegyi nyugdíjban, korhatár előtti ellátásban vagy más nyugdíjszerű ellátásban részesülnek, és 5000 fő alatti településen élnek.",
  },
  {
    question: "Kell-e önerő a felújításhoz?",
    answer:
      "Igen, a támogatás utófinanszírozású: a teljes felújítási költséget előre ki kell fizetni, majd a számlák benyújtása után igényelhető vissza a támogatás összege.",
  },
  {
    question: "Mi történik, ha korábban már kaptam otthonfelújítási támogatást?",
    answer:
      "Ha az igénylő 2021-2022-ben már részesült otthonfelújítási támogatásban, az igényelhető összeg csökkenhet – ebben az esetben a különbözet igényelhető.",
  },
  {
    question: "Mennyi ideig kell az ingatlanban laknom?",
    answer:
      "Az érintett lakásban legalább 5 évig életvitelszerűen kell lakni, kivéve bizonyos indokolt eseteket (pl. szolgálati lakás, egészségügyi kezelés, munkavállalás).",
  },
];

/**
 * "Otthonfelújítási Támogatás 2025" bespoke natív landing az A1 Solar
 * design-nyelvén: hero, feltételek, jogosultság, felhasználás, a támogatás
 * mértéke, folyamat-lépések, kedvezményes csomagajánlatok, GYIK és
 * kapcsolatfelvételi űrlap.
 */
export const OtthonfelujitasiTamogatas2025 = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
          <div>
            <Eyebrow>Otthonfelújítási támogatás 2025</Eyebrow>
            <h1
              className="text-[var(--ink)]"
              style={{ marginTop: "24px", fontSize: "clamp(34px, 6vw, 60px)", lineHeight: 1.1 }}
            >
              <span style={{ fontWeight: 300 }}>Energetikai korszerűsítés </span>
              <span style={{ fontWeight: 700 }}>támogatással!</span>
            </h1>
            <p
              className="text-[var(--ink-soft)]"
              style={{ marginTop: "22px", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.7 }}
            >
              Akár 3 millió forint vissza nem térítendő támogatás vidéki otthonok energetikai
              korszerűsítésére, beleértve napelemes rendszerek telepítését, energiatárolást,
              hőszivattyút és okosotthon megoldásokat. Mostantól nyugdíjasok is jogosultak a
              támogatásra!
            </p>
            <div className="mt-9">
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
            </div>
          </div>

          <div
            className="overflow-hidden"
            style={{ borderRadius: "28px", minHeight: "320px", background: "var(--surface-3)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/2025/08/7854.jpg"
              alt="Energetikai korszerűsítés napelemmel egy vidéki otthonon"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* MIÉRT ÉRI MEG / A TÁMOGATÁS ÉS A HITEL FELTÉTELEI */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Információk</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Vidéki Otthonfelújítási Program – akár 3 millió forint családoknak és nyugdíjasoknak
          </h2>
          <p
            className="mx-auto mt-5 text-[var(--ink-soft)]"
            style={{ maxWidth: "820px", fontSize: "16px", lineHeight: 1.7 }}
          >
            A Vidéki Otthonfelújítási Támogatás 2025. január 1-jétől elérhető állami program, amely a
            kistelepüléseken élő családok lakhatási körülményeinek javítását és a vidéki lakásállomány
            megújulását segíti. Vissza nem térítendő lakáscélú állami támogatásként és otthonfelújítási
            kölcsön formájában is igényelhető.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {GRANT_TERMS.map((term) => (
            <div
              key={term}
              className="flex items-start gap-4 px-7 py-7"
              style={{ background: "var(--surface-3)", borderRadius: "20px" }}
            >
              <CheckIcon />
              <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                {term}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* KI IGÉNYELHETI */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Jogosultság</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Ki igényelheti az otthonfelújítási támogatást?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ELIGIBILITY.map((item) => (
            <div
              key={item.title}
              className="flex flex-col px-6 py-7"
              style={{ background: "var(--surface-3)", borderRadius: "20px" }}
            >
              <h3
                className="text-[var(--ink)]"
                style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MIRE FORDÍTHATÓ */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-[0.95fr_1.05fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>Felhasználás</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              Mire használható a támogatás?
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              A támogatás széles körben felhasználható az otthon energetikai korszerűsítésére – többek
              között az alábbi munkálatokra:
            </p>
          </div>

          <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {USE_CASES.map((useCase) => (
              <li key={useCase} className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-[var(--ink)]" style={{ fontSize: "16px" }}>
                  {useCase}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* A TÁMOGATÁS MÉRTÉKE ÉS FELTÉTELEI */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Feltételek</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            A támogatás mértéke és feltételei
          </h2>
        </div>

        <ul
          className="mx-auto mt-12 flex max-w-[900px] flex-col gap-4"
          style={{ listStyle: "none", padding: 0, margin: "48px auto 0" }}
        >
          {AMOUNT_CONDITIONS.map((condition) => (
            <li
              key={condition}
              className="flex items-start gap-4 px-7 py-6"
              style={{ background: "var(--surface-3)", borderRadius: "18px" }}
            >
              <CheckIcon />
              <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                {condition}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="mx-auto mt-8 flex max-w-[900px] items-start gap-4 px-7 py-6"
          style={{
            background: "rgba(194,29,32,0.06)",
            borderRadius: "18px",
            borderLeft: "4px solid var(--brand)",
          }}
        >
          <span
            className="inline-block rounded-[30px] px-3 py-1 text-xs font-semibold uppercase tracking-[1px]"
            style={{ background: "var(--brand)", color: "#fff", flexShrink: 0 }}
          >
            Fontos
          </span>
          <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
            A program keretösszege korlátozott, ezért érdemes minél előbb benyújtani az igénylést. A
            részletes feltételekről a Magyar Államkincstár hivatalos oldalán található bővebb információ.
          </span>
        </div>
      </div>
    </section>

    {/* A FOLYAMAT LÉPÉSEI */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>A folyamat</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Hogyan lehet igényelni?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col px-7 py-8"
              style={{ background: "var(--surface-3)", borderRadius: "20px" }}
            >
              <span
                className="flex items-center justify-center"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "9999px",
                  background: "var(--brand)",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                {step.number}
              </span>
              <h3
                className="text-[var(--ink)]"
                style={{ marginTop: "20px", marginBottom: 0, fontSize: "20px", fontWeight: 700 }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                {step.text}
              </p>
            </div>
          ))}
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
            className="mx-auto mt-5 text-[var(--ink-soft)]"
            style={{ maxWidth: "760px", fontSize: "16px", lineHeight: 1.7 }}
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

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.packages.map((pkg) => (
                <div
                  key={`${group.title}-${pkg.power}`}
                  className="flex flex-col px-7 py-8"
                  style={{ background: "var(--surface-3)", borderRadius: "24px" }}
                >
                  <p className="text-[var(--ink-muted)]" style={{ margin: 0, fontSize: "13px" }}>
                    Teljesítmény
                  </p>
                  <h4
                    className="text-[var(--ink)]"
                    style={{ margin: 0, marginTop: "2px", fontSize: "24px", fontWeight: 700 }}
                  >
                    {pkg.power}
                  </h4>

                  <ul
                    className="mt-5 flex flex-1 flex-col gap-2.5"
                    style={{ listStyle: "none", padding: 0, margin: "20px 0 0" }}
                  >
                    {pkg.content.map((line) => (
                      <li key={line} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-[var(--ink-soft)]" style={{ fontSize: "14px", lineHeight: 1.5 }}>
                          {line}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6" style={{ borderTop: "1px solid var(--line)", paddingTop: "16px" }}>
                    <p className="text-[var(--ink-muted)]" style={{ margin: 0, fontSize: "13px" }}>
                      Bruttó ár
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
                      Érdekel a csomag
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* GYIK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Gyakori kérdések</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Kérdésed van?
          </h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-[860px] flex-col gap-4">
          {FAQ.map((item) => (
            <details
              key={item.question}
              className="px-7 py-5"
              style={{ background: "var(--surface-3)", borderRadius: "18px" }}
            >
              <summary
                className="text-[var(--ink)]"
                style={{ cursor: "pointer", fontSize: "18px", fontWeight: 600, listStyle: "none" }}
              >
                {item.question}
              </summary>
              <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        {/* KAPCSOLATTARTÓ */}
        <div
          className="mx-auto mt-12 flex max-w-[860px] flex-col items-center gap-6 px-8 py-9 text-center sm:flex-row sm:text-left"
          style={{ background: "var(--surface-3)", borderRadius: "24px" }}
        >
          <div
            className="overflow-hidden"
            style={{ width: "96px", height: "96px", borderRadius: "9999px", flexShrink: 0, background: "var(--line)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/2025/08/Harasztosi_Szabolcs.png"
              alt="Harasztosi Szabolcs, értékesítési vezető"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div>
            <p className="text-[var(--ink-muted)]" style={{ margin: 0, fontSize: "14px" }}>
              Értékesítő kollégánk hétköznap 10:00–15:00 között elérhető – fordulj hozzá bizalommal!
            </p>
            <p className="text-[var(--ink)]" style={{ margin: "8px 0 0", fontSize: "20px", fontWeight: 700 }}>
              Harasztosi Szabolcs
            </p>
            <p className="text-[var(--ink-soft)]" style={{ margin: "2px 0 0", fontSize: "15px" }}>
              Értékesítési vezető
            </p>
            <a
              href="tel:+36203345849"
              style={{ display: "inline-block", marginTop: "8px", color: "var(--brand)", fontWeight: 700, fontSize: "16px" }}
            >
              (+36) 20-334-5849
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* KAPCSOLATFELVÉTEL */}
    <section id="ajanlatkeres" className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Kapcsolatfelvétel</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Ne hagyd ki ezt a lehetőséget!
          </h2>
          <p className="mx-auto mt-4 text-[var(--ink-soft)]" style={{ maxWidth: "720px", fontSize: "16px" }}>
            Vedd fel velünk a kapcsolatot, és foglald le az első konzultációt, hogy 2025-ben elsőként
            élhess a lehetőségekkel! Vagy hívj minket most:{" "}
            <a href={`tel:${SITE.phoneRaw}`} style={{ color: "var(--brand)", fontWeight: 700 }}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="mt-10">
          <ContactForm
            bare
            formName="Otthonfelújítási Támogatás 2025"
            heading="Kérd ingyenes kalkulációnkat!"
            intro="Töltsd ki az űrlapot, és kollégánk segít kihasználni a támogatást."
          />
        </div>
      </div>
    </section>
  </div>
);
