import { ContactForm } from "@/components/ContactForm";

/** Small brand-tint pill used as a section eyebrow. */
const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

/** Inline brand-red check mark for benefit lists. */
const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
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

/** One numbered step in the "how to participate" flow. */
type ParticipationStep = { title: string; description: string };

const PARTICIPATION_STEPS: ParticipationStep[] = [
  {
    title: "Szerződj az A1 Solar-ral",
    description:
      "A szerződéskötési lehetőség megnyílásától számított 30 napon belül köss vállalkozási szerződést az A1 Solar Kft.-vel az OEP keretében.",
  },
  {
    title: "Pozitív támogatói döntés",
    description: "A pályázatban pozitív támogatói döntést kapsz a benyújtott beruházásra.",
  },
  {
    title: "Érvényes támogatói okirat",
    description: "Rendelkezned kell érvényes támogatói okirattal a projekt megvalósításához.",
  },
  {
    title: "Sikeres projektzárás",
    description: "A támogatott projektet sikeresen megvalósítod és hivatalosan lezárod.",
  },
];

/** A single free trip option (Zanzibár / Kína). */
type TripOption = { name: string; highlights: string[] };

const TRIP_OPTIONS: TripOption[] = [
  {
    name: "Zanzibár",
    highlights: ["Pihenő- és szakmai út", "Egy helyi A1 Solar projekthelyszín megtekintésével"],
  },
  {
    name: "Kína",
    highlights: [
      "Inverter- és akkumulátorgyártó üzemlátogatás",
      "Városnézés: Shanghai, Ningbo vagy Dongguan",
    ],
  },
];

const TRIP_INCLUDES: string[] = [
  "Oda-vissza repülőjegy 2 fő részére",
  "Helyi transzferek",
  "4 éjszaka szállás minimum 4 csillagos szállodában",
  "Napi háromszori étkezés",
  "A programban szereplő szakmai és városnéző programok",
  "Utasbiztosítás",
];

const COUPON_USES: string[] = [
  "Nagyobb vagy kiegészítő energiatároló rendszerre",
  "Új napelemes rendszer telepítésére",
  "Meglévő napelemes rendszer bővítésére",
  "Elektromos autó töltő kiépítésére",
  "Villamos hálózati fejlesztésekre és egyéb kapcsolódó megoldásokra",
];

const RULES_POINTS: string[] = [
  "A kupon kizárólag akkor használható fel, ha az ügyfél új vállalkozási szerződést köt az A1 Solar Kft.-vel, és a beruházás teljes bruttó összege meghaladja a 2 000 000 Ft-ot.",
  "A kupon egyszeri alkalommal, egy összegben, egy projekthez használható fel – részfelhasználás nincs, a kupon nem bontható.",
  "A kupon a támogatói okirat hatálybalépésének napjától számított 3 évig érvényes, lejáratát követően automatikusan érvényét veszti.",
  "A nyeremény készpénzre nem váltható, nem átruházható; az adófizetési kötelezettséget a Szervező viseli.",
];

/**
 * "OEP nyereményjáték" landing — bespoke natív újraépítés az A1 Solar
 * design-nyelvén: hero, részvételi lépések, a nyeremények (kupon + álomutazás)
 * bemutatása, feltételek és sorsolás, rövid szabályzat-kivonat és jelentkezési űrlap.
 */
export const OepNyeremenyjatek = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>Nyereményjáték</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>Energiafüggetlenség otthon. </span>
          <span style={{ fontWeight: 700 }}>Élmények a világban.</span>
        </h1>
        <p
          className="mx-auto mt-6 text-[var(--ink-soft)]"
          style={{ maxWidth: "720px", margin: "24px auto 0", fontSize: "clamp(17px, 2.2vw, 20px)", lineHeight: 1.7 }}
        >
          Az Otthoni Energiatároló Programban az A1 Solar Kft.-vel megvalósított projekted után
          100 000 Ft értékű kupont kapsz, és részt veszel egy 2 főre szóló, 5 napos utazás sorsolásán.
        </p>
        <div className="mt-10">
          <a
            href="#reszvetel"
            style={{
              display: "inline-block",
              background: "var(--brand)",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "9999px",
              fontWeight: 500,
            }}
          >
            Vegyél részt a játékban!
          </a>
        </div>
      </div>
    </section>

    {/* HOGYAN VEHETSZ RÉSZT? */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Részvétel</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
          >
            Hogyan vehetsz részt?
          </h2>
          <p className="mx-auto mt-4 text-[var(--ink-soft)]" style={{ maxWidth: "680px", fontSize: "17px", lineHeight: 1.7 }}>
            A kuponra és a nyereményjátékban való részvételre azok az ügyfelek jogosultak, akik
            együttesen megfelelnek az alábbi feltételeknek.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTICIPATION_STEPS.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col px-7 py-8"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <span
                className="flex items-center justify-center"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "9999px",
                  background: "var(--brand)",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                {index + 1}
              </span>
              <h3
                className="text-[var(--ink)]"
                style={{ margin: 0, marginTop: "18px", fontSize: "19px", fontWeight: 600, lineHeight: 1.3 }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* A NYEREMÉNYEK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Nyeremények</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
          >
            Mit kapsz a program végén?
          </h2>
          <p className="mx-auto mt-4 text-[var(--ink-soft)]" style={{ maxWidth: "680px", fontSize: "17px", lineHeight: 1.7 }}>
            A sikeres projektzárás után két extra előny jár automatikusan: egy garantált kupon a
            jövőbeli fejlesztésekhez, valamint részvétel egy exkluzív utazás sorsolásán.
          </p>
        </div>

        {/* KUPON */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-[1.05fr_1fr] md:items-center">
          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "28px" }}>
            <span
              className="inline-block rounded-[30px] px-3 py-1 text-xs font-semibold uppercase tracking-[1px]"
              style={{ background: "var(--brand)", color: "#fff" }}
            >
              Garantált
            </span>
            <h3
              className="text-[var(--ink)]"
              style={{ margin: 0, marginTop: "16px", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, lineHeight: 1.2 }}
            >
              Bruttó 100 000 Ft értékű kupon
            </h3>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              A kupon egy kedvezmény, amit minden, a feltételeknek megfelelő szerződött ügyfelünk
              megkap. Segít továbbfejleszteni a meglévő rendszeredet, amikor eljön az ideje.
            </p>
            <p className="mt-5 text-[var(--ink)]" style={{ margin: "20px 0 0", fontSize: "15px", fontWeight: 600 }}>
              Felhasználható például:
            </p>
            <ul className="mt-4 flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
              {COUPON_USES.map((use) => (
                <li key={use} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                    {use}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wp-content/uploads/2026/01/24233-1.jpg"
            alt="A1 Solar Otthoni Energiatároló Program nyereményjáték"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "28px" }}
          />
        </div>

        {/* UTAZÁS */}
        <div className="mt-8 px-8 py-10 md:px-12" style={{ background: "var(--surface-3)", borderRadius: "28px" }}>
          <div className="text-center">
            <h3
              className="text-[var(--ink)]"
              style={{ margin: 0, fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, lineHeight: 1.2 }}
            >
              5 napos álomutazás 2 fő részére
            </h3>
            <p className="mx-auto mt-3 text-[var(--ink-soft)]" style={{ maxWidth: "620px", fontSize: "16px", lineHeight: 1.7 }}>
              Az alábbi két opció közül szabadon választható:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {TRIP_OPTIONS.map((trip) => (
              <div
                key={trip.name}
                className="px-7 py-8"
                style={{ background: "#fff", borderRadius: "20px", border: "1px solid var(--line)" }}
              >
                <h4 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "22px", fontWeight: 700 }}>
                  {trip.name}
                </h4>
                <ul className="mt-4 flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
                  {trip.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-[var(--ink)]" style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>
              A nyeremény tartalmazza:
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2" style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
              {TRIP_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* FELTÉTELEK ÉS SORSOLÁS */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <Eyebrow>Feltételek</Eyebrow>
            <h3
              className="text-[var(--ink)]"
              style={{ margin: 0, marginTop: "18px", fontSize: "22px", fontWeight: 600, lineHeight: 1.25 }}
            >
              Kik jogosultak a részvételre?
            </h3>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              A részvétel feltétele, hogy az ügyfél a szerződéskötési lehetőség megnyílásától számított
              30 napon belül vállalkozási szerződést kössön az A1 Solar Kft.-vel az OEP keretében,
              pozitív támogatói döntést és érvényes támogatói okiratot szerezzen, majd a projektet
              sikeresen megvalósítsa és hivatalosan lezárja.
            </p>
          </div>

          <div
            className="px-8 py-9"
            style={{ background: "rgba(194,29,32,0.06)", borderRadius: "24px", borderLeft: "4px solid var(--brand)" }}
          >
            <Eyebrow>Sorsolás</Eyebrow>
            <h3
              className="text-[var(--ink)]"
              style={{ margin: 0, marginTop: "18px", fontSize: "22px", fontWeight: 600, lineHeight: 1.25 }}
            >
              Hogyan választjuk ki a nyertest?
            </h3>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              A nyertest véletlenszerű sorsolással választjuk ki a jogosult résztvevők közül. A sorsolás
              a 30 napos szerződéskötési időszak lezárását követő 15 munkanapon belül történik, a Szervező
              által, online véletlenszerű generátor segítségével.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* SZABÁLYZAT-KIVONAT */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="px-8 py-10 md:px-12" style={{ background: "#f6f6f6", borderRadius: "28px" }}>
          <Eyebrow>Szabályzat</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "20px", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 600, lineHeight: 1.2 }}
          >
            A kupon felhasználásáról röviden
          </h2>
          <ul className="mt-6 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: "24px 0 0" }}>
            {RULES_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[var(--ink-soft)]" style={{ marginTop: "24px", fontSize: "15px", lineHeight: 1.6 }}>
            A promóció részletes szabályzata elérhető:{" "}
            <a
              href="https://a1solar.hu/lakossagi-napelemes-rendszerek-tamogatasa-promocios-szabalyzat/"
              style={{ color: "var(--brand)", fontWeight: 600 }}
            >
              a részletes promóciós szabályzat oldalon
            </a>
            .
          </p>
        </div>
      </div>
    </section>

    {/* RÉSZVÉTEL / ŰRLAP */}
    <section id="reszvetel" className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <ContactForm
          bare
          formName="OEP nyereményjáték"
          heading="Vegyél részt a játékban!"
          intro="Töltsd ki az űrlapot a részvételhez – sok sikert!"
          submitLabel="Jelentkezés küldése"
        />
      </div>
    </section>
  </div>
);
