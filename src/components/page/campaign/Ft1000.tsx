import Link from "next/link";
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

/** Statisztika-sáv — az FT1000 elismeréshez kapcsolódó valós számok. */
const STATS: { value: string; label: string }[] = [
  { value: "4000+", label: "Elégedett ügyfél" },
  { value: "12.", label: "Európában a leggyorsabban növekvők között" },
  { value: "~7000%", label: "Árbevétel-növekedés" },
  { value: "1.", label: "Magyarországon a listán" },
];

/** Cégbemutató — "A jövőre optimalizálva" szekció bekezdései a valós tartalomból. */
const COMPANY_STORY: string[] = [
  "Az A1 Solar Kft. az innováció, az energia és a fenntarthatóság harmóniáját tükrözi vállalati kultúrájában, melynek középpontjában az ügyfelek elégedettsége és a megújuló energia áll. Több mint tíz éves tapasztalatunk és szakértelmünk révén mára Magyarország egyik vezető energetikai vállalatává váltunk, széleskörű szolgáltatásainkkal pedig személyre szabott megoldásokat nyújtunk ügyfeleink számára.",
  "Tevékenységeink között szerepel a napelemes rendszerek tervezése és kivitelezése, a nagykereskedelmi tevékenység, a napelemes franchise hálózat kiépítése, az oktatás, a pályázatírás, valamint az okosotthon technológia bevezetése. Ennek eredményeként garantáljuk, hogy ügyfeleink minden szükséges szolgáltatást elérhetnek az energiahatékony megoldások terén.",
];

/** Nemzetközi jelenlét — jelenlegi és tervezett terjeszkedési célországok. */
const COUNTRIES: { name: string; status: string }[] = [
  { name: "Magyarország", status: "Jelen vagyunk" },
  { name: "Ausztria", status: "Jelen vagyunk" },
  { name: "Románia", status: "Jelen vagyunk" },
  { name: "Horvátország", status: "Ősztől" },
  { name: "Szerbia", status: "Ősztől" },
  { name: "Ciprus", status: "Tervezett" },
  { name: "Olaszország", status: "Tervezett" },
];

/**
 * "FT1000" kampányoldal — az A1 Solar Financial Times FT1000 elismerésének
 * bespoke natív bemutatója: hero, díj-kiemelés, statisztika-sáv, cégbemutató,
 * nemzetközi jelenlét, céges szolgáltatás-teaser és záró CTA szekciókkal.
 */
export const Ft1000 = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>Cégünkről</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>Magyarország leggyorsabban </span>
          <span style={{ fontWeight: 700 }}>növekvő energetikai vállalata</span>
        </h1>
        <p
          className="mx-auto mt-6 max-w-[680px] text-[var(--ink-soft)]"
          style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.6 }}
        >
          Fenntartható energetikai megoldások lakossági és céges ügyfeleknek, tervezéstől a
          kivitelezésig – egy kézből.
        </p>
      </div>
    </section>

    {/* FT1000 DÍJ-KIEMELÉS */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 items-center gap-8 overflow-hidden lg:grid-cols-2 lg:gap-14"
          style={{ background: "var(--brand)", borderRadius: "28px" }}
        >
          <div className="flex items-center justify-center px-8 pt-12 lg:px-12 lg:py-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/2025/03/FT_EU_FGC2025_Logo_RGB_White-1024x271.png"
              alt="Financial Times FT1000 — Europe's Fastest Growing Companies 2025"
              loading="lazy"
              style={{ height: "auto", width: "100%", maxWidth: "440px", objectFit: "contain" }}
            />
          </div>
          <div className="px-8 pb-12 lg:px-4 lg:py-14 lg:pr-12">
            <span
              className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
              style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}
            >
              Financial Times
            </span>
            <h2
              style={{
                marginTop: "24px",
                color: "#fff",
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Az A1 Solar Európa 12. leggyorsabban növekvő vállalata lett!
            </h2>
            <p className="mt-5" style={{ color: "rgba(255,255,255,0.92)", fontSize: "17px", lineHeight: 1.7 }}>
              Nagy büszkeség számunkra, hogy az A1 Solar Kft. a Financial Times FT1000 listáján
              Európa 12. leggyorsabban növekvő vállalata lett, közel 7000%-os növekedéssel,
              Magyarországon pedig az első helyet szerezte meg!
            </p>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.92)", fontSize: "17px", lineHeight: 1.7 }}>
              A Financial Times és a Statista minden évben összeállítja az FT1000: Europe’s Fastest
              Growing Companies rangsort, amely Európa ezer legdinamikusabban növekvő vállalatát
              tartalmazza. A lista az árbevétel növekedése alapján rangsorol, és csak azok a cégek
              kerülhetnek fel, amelyek kiemelkedő fejlődést mutattak az elmúlt években.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* STATISZTIKA-SÁV */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-start justify-center px-7 py-9"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <span style={{ color: "var(--brand)", fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 700, lineHeight: 1 }}>
                {s.value}
              </span>
              <span className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.5 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CÉGBEMUTATÓ — A JÖVŐRE OPTIMALIZÁLVA */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Cégünkről</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "24px", fontSize: "clamp(28px, 4.5vw, 40px)", lineHeight: 1.15 }}
            >
              <span style={{ fontWeight: 300 }}>A jövőre </span>
              <span style={{ fontWeight: 700 }}>optimalizálva</span>
            </h2>
          </div>
          <div>
            {COMPANY_STORY.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="text-[var(--ink-soft)] first:mt-0"
                style={{ marginTop: "20px", fontSize: "17px", lineHeight: 1.7 }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* NEMZETKÖZI JELENLÉT */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-[760px] text-center">
          <Eyebrow>Terjeszkedés</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "24px", fontSize: "clamp(28px, 4.5vw, 40px)", lineHeight: 1.15 }}
          >
            <span style={{ fontWeight: 300 }}>Nemzetközi </span>
            <span style={{ fontWeight: 700 }}>jelenlétünk</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            Magyarországon kívül Ausztriában és Romániában is jelen vagyunk kivitelezői
            tevékenységünkkel. Kereskedelmi területen eltérő márkanév alatt működünk a fent említett
            országokban, és ősszel Horvátországban és Szerbiában is bővítjük jelenlétünket. A jövőben
            Ciprust és Olaszországot is potenciális terjeszkedési célpontként tartjuk számon.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {COUNTRIES.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-start px-6 py-5"
              style={{ background: "var(--surface-3)", borderRadius: "20px", minWidth: "160px" }}
            >
              <span className="text-[var(--ink)]" style={{ fontSize: "18px", fontWeight: 600 }}>
                {c.name}
              </span>
              <span
                className="mt-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.5px]"
                style={{ background: "rgba(194,29,32,0.12)", color: "var(--brand-dark)" }}
              >
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CÉGES SZOLGÁLTATÁS-TEASER */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 items-center gap-8 overflow-hidden lg:grid-cols-2 lg:gap-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div className="h-[280px] w-full md:h-[380px] lg:h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/elementor/thumbs/210363746_m_normal_none-qg50ctk0lpejyofwuzvuf3inhbj7tcwiokd57m34go.jpg"
              alt="A1 Solar — napelemes erőmű vállalatoknak"
              loading="lazy"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="px-8 pb-10 lg:px-4 lg:py-12 lg:pr-12">
            <Eyebrow>Szolgáltatásaink</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "24px", fontSize: "clamp(24px, 3.5vw, 34px)", lineHeight: 1.2 }}
            >
              <span style={{ fontWeight: 300 }}>A nap energiája </span>
              <span style={{ fontWeight: 700 }}>cégeknek</span>
            </h2>
            <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              A vállalkozásoknak, kis- és nagyüzemeknek, gazdasági szereplőknek és ipari
              nagyfogyasztóknak továbbra is megéri napelemes erőművet építeni. Egy 150-250 kWp
              rendszer akár már 3 év alatt visszahozhatja az árát, miközben optimalizálhatók a céges
              költségek.
            </p>
            <div className="mt-7">
              <Link
                href="/vallalati-napelem"
                style={{
                  background: "var(--brand)",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "9999px",
                  fontWeight: 500,
                }}
              >
                Vállalati napelem
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ZÁRÓ CTA */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="flex flex-col items-center gap-6 px-8 py-14 text-center md:px-16"
          style={{ background: "var(--brand)", borderRadius: "28px" }}
        >
          <h2 style={{ margin: 0, color: "#fff", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, lineHeight: 1.2 }}>
            Csatlakozz elégedett ügyfeleinkhez!
          </h2>
          <p
            className="max-w-[620px]"
            style={{ margin: 0, color: "rgba(255,255,255,0.9)", fontSize: "17px", lineHeight: 1.6 }}
          >
            Több mint 4000 elégedett ügyfél választotta már az A1 Solart. Beszéljük át energetikai
            céljaidat, és állítsunk össze egy megoldást, ami a te igényeidre van optimalizálva.
          </p>
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/kapcsolat"
              style={{
                background: "#fff",
                color: "var(--brand)",
                padding: "14px 32px",
                borderRadius: "9999px",
                fontWeight: 600,
              }}
            >
              Kapcsolatfelvétel
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} style={{ color: "#fff", fontWeight: 600, fontSize: "18px" }}>
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);
