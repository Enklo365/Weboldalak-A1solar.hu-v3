const HERO_CLIP_ID = "a1-cegunkrol-hero-shape";
/* Same looped hero video as the homepage. */
const HERO_VIDEO = "/nativ/hero-loop.mp4";
const HERO_POSTER = "/wp-content/uploads/2026/03/otthoni_energiatarolo_program-1.png";
const AWARD_IMAGE = "/wp-content/uploads/2026/06/2025.11.27.-Uzleti-Etikai-Dij-159-1-scaled.jpg";
const GRADIENT = "linear-gradient(to right, #0A141Dcc 0%, rgba(10,20,29,0) 100%)";

const STORY = [
  "Az A1 Solar Kft. az innováció, az energia és a fenntarthatóság harmóniáját tükrözi vállalati kultúrájában, melynek középpontjában az ügyfelek elégedettsége és a megújuló energia áll.",
  "Több mint tíz éves tapasztalatunk és szakértelmünk révén mára Magyarország egyik vezető energetikai vállalatává váltunk, széleskörű szolgáltatásainkkal pedig személyre szabott megoldásokat nyújtunk ügyfeleink számára.",
  "Tevékenységeink között szerepel a napelemes rendszerek tervezése és kivitelezése, energiatárolás, a napelemes franchise hálózat kiépítése, az oktatás, a pályázatírás. Ennek eredményeként garantáljuk, hogy ügyfeleink minden szükséges szolgáltatást elérhetnek az energiahatékony megoldások terén.",
];

const HeroCopy = () => (
  <>
    <span
      className="inline-block rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[1px] text-white"
      style={{ background: "rgba(255,255,255,0.2)" }}
    >
      Cégünkről
    </span>
    <h1 style={{ marginTop: "20px", color: "#fff", fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 300, lineHeight: 1.2 }}>
      A jövőre
      <br />
      <strong style={{ fontWeight: 700 }}>Optimalizálva</strong>
    </h1>
  </>
);

/**
 * "Cégünkről" page — homepage-style notch hero (video background) followed by a
 * simple two-column story: company history on the left, the Business Ethics
 * Award photo on the right.
 */
export const Cegunkrol = () => (
  <>
    <section className="w-full">
      <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
        <defs>
          <clipPath id={HERO_CLIP_ID} clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.00069735, 0.00175131)"
              d="M1403 0C1420.12 0 1434 13.8792 1434 31V394C1434 410.569 1420.57 424 1404 424H1305C1248.5 424 1240 424 1223 441.5C1205.915 459.088 1184.421 495.166 1168.441 521.988C1159.471 537.045 1152.239 549.186 1148.5 553.5C1138.1 565.5 1118.5 570.167 1110 571H30C13.4315 571 0 557.569 0 541V31C0 13.8792 13.8792 0 31 0H1403Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Desktop (≥lg) — shaped video hero, same band size as the homepage hero. */}
      <div className="container hidden lg:block">
        <div className="relative w-full" style={{ aspectRatio: "1192 / 571" }}>
          <div className="absolute inset-0" style={{ clipPath: `url(#${HERO_CLIP_ID})` }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={HERO_POSTER}
              aria-hidden
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 100%" }}
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
            <div className="absolute inset-0" style={{ background: GRADIENT }} />
          </div>
          <div className="absolute bottom-0 left-0 z-10" style={{ padding: "40px" }}>
            <HeroCopy />
          </div>
        </div>
      </div>

      {/* Mobile (<lg) — rounded video card */}
      <div className="lg:hidden px-4">
        <div className="relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[24px] p-6">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
            className="absolute inset-0"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: GRADIENT }} />
          <div className="relative z-10">
            <HeroCopy />
          </div>
        </div>
      </div>
    </section>

    {/* Story — left copy, right award photo. Bottom gap tuned to equal the
        hero→section top gap: the global footer margin-top (80px) already
        supplies most of it, so we add pb-4 on desktop and pull -mb-4 on mobile. */}
    <section className="w-full pt-16 pb-0 -mb-4 md:mb-0 md:pb-4 md:pt-24">
      <div className="container">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span
              className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
              style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
            >
              Cégünkről
            </span>
            <h2 style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.15 }}>
              Az A1 solar Kft. története
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              {STORY.map((p) => (
                <p key={p.slice(0, 24)} className="text-base leading-relaxed text-[var(--ink-soft)]">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="order-first overflow-hidden rounded-[24px] aspect-[4/3] lg:order-none lg:aspect-auto" style={{ background: "var(--surface-3)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={AWARD_IMAGE}
              alt="Az A1 Solar az Üzleti Etikai Díj 2025 díjátadóján"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  </>
);
