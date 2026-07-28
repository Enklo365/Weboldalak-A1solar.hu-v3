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

/** One row of the event agenda. */
type ProgramItem = { time: string; title: string; detail?: string; speaker?: string };

const PROGRAM: ProgramItem[] = [
  { time: "08:30–09:00", title: "Regisztráció" },
  {
    time: "09:00–10:00",
    title: "Aktuális pályázatok vállalkozásoknak",
    detail:
      "Tájékoztató a jelenleg elérhető pályázati lehetőségekről: többek között olyan pályázatokról, amelyeken céged sikeresen indulhat, valamint azokról is szó lesz, amelyek napelemes rendszer kivitelezést tartalmaznak.",
    speaker: "Szenyán Endre – A1 Solar Kft. tulajdonosa",
  },
  {
    time: "10:00–10:30",
    title: "Szünet",
    detail:
      "Frissítők, kávé, sós sütemények fogyasztása, valamint kötetlen beszélgetés a többi résztvevővel.",
  },
  {
    time: "10:30–12:00",
    title: "Deye termékbemutató",
    detail: "Deye inverter és akkumulátor termékbemutató.",
    speaker:
      "Ningbo Deye Inverter Technology Co. munkatársai, Nábelek Áron – A1 Solar Kft. vezető mérnök",
  },
  {
    time: "12:00–13:00",
    title: "Ebéd",
    detail:
      "Szendvicsebéd és kötetlen beszélgetések, amely lehetőséget kínál arra, hogy egymással kapcsolatokat építsetek és tapasztalatokat cseréljetek.",
  },
  {
    time: "13:00-tól",
    title: "Workshop, ami eddig még nem volt!",
    detail:
      "Forgószínpadszerű workshopok kisebb csoportokban, ahol lehetőséged lesz minden szakértővel konzultálni és feltenni kérdéseidet.",
  },
];

/** Speakers named in the agenda. */
const SPEAKERS: { name: string; role: string }[] = [
  { name: "Szenyán Endre", role: "A1 Solar Kft. tulajdonosa" },
  { name: "Nábelek Áron", role: "A1 Solar Kft. vezető mérnök" },
  { name: "Farkas Imre", role: "A1 Solar Kft. telepítés vezető" },
  { name: "Varga Csaba", role: "cégvezető" },
  { name: "Ningbo Deye Inverter Technology Co.", role: "munkatársai, Kína" },
];

const REASONS: string[] = [
  "Az iparág szakértői egy helyen osztják meg tudásukat és tapasztalataikat.",
  "Hálózatépítés és tapasztalatcsere a szakma többi résztvevőjével.",
  "Deye inverter és akkumulátor gyakorlati telepítési bemutató, kifejezetten NPP telepítésekre optimalizálva.",
  "Interaktív Enerack/Powerack bemutató – testközelből ismerheted meg a napelemes tartószerkezeteket.",
  "Pályázati tájékoztató, benne olyan lehetőségekkel, amelyeken a céged sikeresen indulhat.",
  "A résztvevők számára ingyenes étel- és italfogyasztást biztosítunk a rendezvény ideje alatt!",
];

/**
 * "Szakmai nap regisztráció" esemény-landing — bespoke natív újraépítés az
 * A1 Solar design-nyelvén: hero az esemény alapadataival, program-idővonal,
 * előadók, a részvétel előnyei, Deye ESS disztribúció és regisztrációs űrlap.
 */
export const SzakmaiNapRegisztracio = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>Szakmai nap</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>II. A1 Solar </span>
          <span style={{ fontWeight: 700 }}>szakmai nap</span>
        </h1>
        <p
          className="mx-auto mt-6 text-[var(--ink-soft)]"
          style={{ maxWidth: "680px", marginTop: "24px", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7 }}
        >
          A Deye és a Powerack támogatásával! Csatlakozz az iparág szakértőihez egy napra,
          ahol a tanulás mellett hálózatépítésről és tapasztalatcseréről is szó lesz.
        </p>

        <div className="mx-auto mt-10 grid max-w-[760px] grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="px-6 py-6" style={{ background: "var(--surface-3)", borderRadius: "20px" }}>
            <p className="text-[var(--ink-muted)]" style={{ margin: 0, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Időpont
            </p>
            <p className="text-[var(--ink)]" style={{ margin: 0, marginTop: "6px", fontSize: "16px", fontWeight: 600 }}>
              2024.06.18. · 08:30–14:00
            </p>
          </div>
          <div className="px-6 py-6" style={{ background: "var(--surface-3)", borderRadius: "20px" }}>
            <p className="text-[var(--ink-muted)]" style={{ margin: 0, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Helyszín
            </p>
            <p className="text-[var(--ink)]" style={{ margin: 0, marginTop: "6px", fontSize: "16px", fontWeight: 600 }}>
              1133 Budapest, Váci út 92. (Rail Konferenciaterem)
            </p>
          </div>
          <div className="px-6 py-6" style={{ background: "var(--surface-3)", borderRadius: "20px" }}>
            <p className="text-[var(--ink-muted)]" style={{ margin: 0, fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Részvétel
            </p>
            <p className="text-[var(--ink)]" style={{ margin: 0, marginTop: "6px", fontSize: "16px", fontWeight: 600 }}>
              Ingyenes, de regisztrációhoz kötött!
            </p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#regisztracio"
            style={{
              display: "inline-block",
              background: "var(--brand)",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "9999px",
              fontWeight: 500,
            }}
          >
            Regisztrálok a szakmai napra
          </a>
        </div>
      </div>
    </section>

    {/* MIRŐL LESZ SZÓ / PROGRAM */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Program</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
          >
            Készülj fel az év legfontosabb szakmai eseményére!
          </h2>
          <p
            className="mx-auto mt-4 text-[var(--ink-soft)]"
            style={{ maxWidth: "760px", fontSize: "17px", lineHeight: 1.7 }}
          >
            Vendégeink a Ningbo Deye Inverter Technology Co., Ltd. munkatársai Kínából, akik
            gyakorlati bemutatóval készülnek invertereik és akkumulátoraik telepítése kapcsán,
            kifejezetten az NPP telepítésekre optimalizálva. Interaktív Enerack/Powerack
            bemutatónkon testközelből ismerheted meg a napelemes tartószerkezeteket.
          </p>
        </div>

        <ol className="mt-12 flex flex-col gap-5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {PROGRAM.map((item) => (
            <li
              key={item.time}
              className="grid grid-cols-1 gap-4 px-7 py-7 sm:grid-cols-[160px_1fr]"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <div
                className="flex items-start"
                style={{ color: "var(--brand)", fontSize: "18px", fontWeight: 700 }}
              >
                {item.time}
              </div>
              <div>
                <h3
                  className="text-[var(--ink)]"
                  style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}
                >
                  {item.title}
                </h3>
                {item.detail !== undefined ? (
                  <p className="mt-2 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {item.detail}
                  </p>
                ) : null}
                {item.speaker !== undefined ? (
                  <p
                    className="mt-3 text-[var(--ink-muted)]"
                    style={{ margin: "12px 0 0", fontSize: "14px", fontWeight: 500 }}
                  >
                    {item.speaker}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* ELŐADÓK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Előadók</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
          >
            Kik osztják meg veled a tudásukat?
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.name}
              className="px-7 py-7"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <h3
                className="text-[var(--ink)]"
                style={{ margin: 0, fontSize: "19px", fontWeight: 700, lineHeight: 1.3 }}
              >
                {speaker.name}
              </h3>
              <p className="mt-2 text-[var(--ink-soft)]" style={{ fontSize: "15px" }}>
                {speaker.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MIÉRT ÉRDEMES RÉSZT VENNI */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-[1fr_1.1fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>Miért érdemes?</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
            >
              Ne hagyd ki az év szakmai eseményét!
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              A szakmai nap nemcsak a tanulásról, hanem hálózatépítésről és tapasztalatcseréről is
              szól. Íme, amit egy nap alatt megkapsz:
            </p>
          </div>

          <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* DISZTRIBÚCIÓ */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
          <div>
            <Eyebrow>Disztribúció</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
            >
              <span style={{ fontWeight: 300 }}>Hivatalos DEYE ESS </span>
              <span style={{ fontWeight: 700 }}>disztribútorok lettünk!</span>
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              A Deye ESS termékek hivatalos disztribúciós partnerei lettünk Magyarországon és
              Ausztriában. A Ningbo Deye Inverter Technology Co., Ltd. a napenergia-ipar egyik
              innovatív vezetője, amely magas minőségű invertereket és energiatároló rendszereket
              kínál, elősegítve a tiszta és megújuló energiaforrások széles körű elterjedését.
            </p>
          </div>

          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/elementor/thumbs/储能授权证书_李真委_A1_Smart_System_Kft_Hungary_and_Austria匈牙利和奥地利-2_page-0001-qmczvrgvutaocjcyive6hdn4u45qipk98j4ou8fb9o.jpg"
              alt="Deye ESS disztribútori tanúsítvány – A1 Solar Kft."
              loading="lazy"
              style={{ height: "auto", maxWidth: "100%", width: "360px", borderRadius: "20px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* REGISZTRÁCIÓ */}
    <section id="regisztracio" className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="mt-2">
          <ContactForm
            bare
            formName="Szakmai nap regisztráció"
            heading="Regisztrálj a szakmai napra!"
            intro="Töltsd ki az űrlapot, és megerősítjük a részvételedet."
          />
        </div>
      </div>
    </section>
  </div>
);
