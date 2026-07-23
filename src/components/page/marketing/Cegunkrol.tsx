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

/** A1 Solar Kft. története — a történet 3 bekezdése a valós tartalomból. */
const STORY: string[] = [
  "Az A1 Solar Kft. az innováció, az energia és a fenntarthatóság harmóniáját tükrözi vállalati kultúrájában, melynek középpontjában az ügyfelek elégedettsége és a megújuló energia áll.",
  "Több mint tíz éves tapasztalatunk és szakértelmünk révén mára Magyarország egyik vezető energetikai vállalatává váltunk, széleskörű szolgáltatásainkkal pedig személyre szabott megoldásokat nyújtunk ügyfeleink számára.",
  "Tevékenységeink között szerepel a napelemes rendszerek tervezése és kivitelezése, energiatárolás, a napelemes franchise hálózat kiépítése, az oktatás és a pályázatírás. Ennek eredményeként garantáljuk, hogy ügyfeleink minden szükséges szolgáltatást elérhetnek az energiahatékony megoldások terén.",
];

/** Statisztika-sáv — a projektből ismert valós számokból. */
const STATS: { value: string; label: string }[] = [
  { value: "10+", label: "év tapasztalat az energetikában" },
  { value: "5000+", label: "telepített napelemes rendszer" },
  { value: "26.000+", label: "telepített napelem panel" },
  { value: "#1", label: "Magyarország egyik vezető energetikai vállalata" },
];

/** Értékeink — a történet-bekezdésekből levezetve. */
const VALUES: { title: string; text: string }[] = [
  {
    title: "Ügyfélközpontúság",
    text: "Minden döntésünk középpontjában az ügyfeleink elégedettsége és a személyre szabott megoldások állnak.",
  },
  {
    title: "Megújuló energia",
    text: "Elkötelezettek vagyunk a napenergia és a fenntartható, tiszta energiaforrások terjesztése mellett.",
  },
  {
    title: "Szakértelem",
    text: "Több mint tíz év tapasztalattal tervezünk és kivitelezünk megbízható, hatékony rendszereket.",
  },
  {
    title: "Innováció",
    text: "Az energiatárolástól az oktatáson át a franchise hálózatig folyamatosan bővítjük szolgáltatásainkat.",
  },
];

/**
 * "Cégünkről" marketing oldal — bespoke natív újraépítés az A1 Solar
 * design-nyelvén: hero, cégtörténet, statisztika-sáv, elismerés, értékeink és
 * záró CTA szekciókkal.
 */
export const Cegunkrol = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>Cégünkről</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>A jövőre </span>
          <span style={{ fontWeight: 700 }}>Optimalizálva</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[680px] text-[var(--ink-soft)]" style={{ fontSize: "clamp(16px, 2vw, 19px)" }}>
          Az innováció, az energia és a fenntarthatóság találkozása — ismerd meg az A1 Solar Kft.
          történetét, értékeit és azt, ami Magyarország egyik vezető energetikai vállalatává tett minket.
        </p>
      </div>
    </section>

    {/* CÉGTÖRTÉNET */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-[820px]">
          <Eyebrow>A történetünk</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "24px", fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 600, lineHeight: 1.15 }}
          >
            Az A1 Solar Kft. története
          </h2>
          {STORY.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              {p}
            </p>
          ))}
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

    {/* ÜZLETI ETIKAI DÍJ — ELISMERÉS */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 items-center gap-8 overflow-hidden lg:grid-cols-2 lg:gap-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div className="h-[280px] w-full md:h-[380px] lg:h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/2026/06/2025.11.27.-Uzleti-Etikai-Dij-159-1-768x512.jpg"
              alt="A1 Solar — Üzleti Etikai Díj átadó ünnepség"
              loading="lazy"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="px-8 pb-10 lg:px-4 lg:py-12 lg:pr-12">
            <Eyebrow>Elismerés</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "24px", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 600, lineHeight: 1.2 }}
            >
              Üzleti Etikai Díj
            </h2>
            <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              Munkánk minőségét és értékrendünket külső elismerés is visszaigazolja: az Üzleti Etikai Díj
              a felelős, átlátható és ügyfélközpontú működésünk elismerése — az a mérce, amelyhez nap mint
              nap tartjuk magunkat a megújuló energia szolgálatában.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ÉRTÉKEINK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-[720px] text-center">
          <Eyebrow>Értékeink</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "24px", fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 600, lineHeight: 1.15 }}
          >
            Amiben hiszünk
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="px-7 py-8"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "19px", fontWeight: 600 }}>
                {v.title}
              </h3>
              <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                {v.text}
              </p>
            </div>
          ))}
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
          <h2
            style={{ margin: 0, color: "#fff", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Kérj személyre szabott ajánlatot!
          </h2>
          <p className="max-w-[620px]" style={{ margin: 0, color: "rgba(255,255,255,0.9)", fontSize: "17px", lineHeight: 1.6 }}>
            Beszéljük át energetikai céljaidat, és állítsunk össze egy megoldást, ami tényleg a te
            igényeidre van optimalizálva.
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
              Ajánlatkérés
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              style={{ color: "#fff", fontWeight: 600, fontSize: "18px" }}
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);
