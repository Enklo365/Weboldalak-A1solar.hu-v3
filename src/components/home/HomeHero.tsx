import Link from "next/link";
import { A1_SERVICE_CARDS } from "@/components/home/serviceCards.data";

const HERO_BG = "/wp-content/uploads/2026/03/otthoni_energiatarolo_program-1.png";
const HERO_VIDEO = "/nativ/hero-loop.mp4";
const HERO_BG_MOBILE = "/wp-content/uploads/2026/03/ChatGPT-Image-2026.-marc.-13.-21_20_16.png";
const CTA_PRIO_MASK = "/wp-content/uploads/2025/07/cta_prio.svg";
const CTA_NORMAL_MASK = "/wp-content/uploads/2025/07/cta_normal.svg";
/* The WP mobile card mask — a rounded rectangle with a step-notch scooped out of
   the top-right corner (where the arrow badge nests). Used with mask-size cover. */
const MOBILE_CARD_MASK = "url(/wp-content/uploads/2025/07/mobile_mask_cta.svg)";

const GRADIENT = "linear-gradient(to right, #0A141Dcc 0%, rgba(10,20,29,0) 100%)";

const HERO = {
  badge: "Otthoni Energiatároló Program",
  titleTop: "Fókuszban",
  titleStrong: "az energiatárolás",
  ctaLabel: "További információ",
  ctaHref: "/lakossagi-energiatarolo-tamogatas",
  intro:
    "Célunk, hogy ügyfeleink egyetlen helyről kapják meg az összes olyan szolgáltatást, amely egy napelemes rendszer kialakításához szükséges.",
};

/** The a1solar 14×14 up-right arrow (exact paths from the WP markup). */
const Arrow14 = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5" aria-hidden>
    <path d="M3.76953 1H13.0003V10.2308" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/**
 * Arrow badge for the "Vállalati" card — exact WP hover: circle #f6f6f6 → red,
 * the dark arrow fades out sliding to +6/+6, the white one fades in from −6/−6.
 */
const CardArrowBadge = ({ className = "right-1.5 top-1.5" }: { className?: string }) => (
  <span className={`absolute z-10 grid h-12 w-12 place-items-center rounded-full bg-[var(--surface-3)] transition-colors duration-300 group-hover:bg-[var(--brand)] ${className}`}>
    <span className="relative block h-3.5 w-3.5">
      <span className="absolute inset-0 text-[var(--ink)] transition-all duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:opacity-0">
        <Arrow14 />
      </span>
      <span className="absolute inset-0 -translate-x-1.5 -translate-y-1.5 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
        <Arrow14 />
      </span>
    </span>
  </span>
);

/** Inner content of a service card (icon + title + text). */
const CardBody = ({ title, text, icon }: { title: string; text: string; icon: string }) => (
  <>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={icon} alt="" className="self-start object-contain" style={{ height: "72px", width: "auto" }} aria-hidden />
    <div>
      <h3 className="text-[var(--ink)]" style={{ fontSize: "25px", fontWeight: 500, lineHeight: 1.2 }}>
        {title}
      </h3>
      <p className="mt-2 text-[14px] leading-snug text-[var(--ink-soft)]">{text}</p>
    </div>
  </>
);

/**
 * Hero photo — the `svg_design-elem` shape (rounded corners on the left +
 * lower-right notch) as a scalable `clip-path`, filled by a real `<img>`.
 *
 * Why a component (not `background-image` + `mask`): a real `<img>` with
 * `object-cover object-bottom` gives a rock-solid, predictable crop, and a
 * `clipPath` in `objectBoundingBox` units scales exactly to the element at any
 * width (no `mask-size` letterbox/stretch quirks, no stray white bands). The
 * path is the exact `svg_design-elem.svg` geometry, transformed into 0–1 space
 * (÷1434 wide, ÷571 tall).
 */
const HERO_CLIP_ID = "a1-hero-shape";
const HeroPhoto = () => (
  <>
    <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
      <defs>
        <clipPath id={HERO_CLIP_ID} clipPathUnits="objectBoundingBox">
          <path
            transform="scale(0.00069735, 0.00175131)"
            d="M1403 0C1420.12 0 1434 13.8792 1434 31V394C1434 410.569 1420.57 424 1404 424H655C598.5 424 590 424 573 441.5C555.915 459.088 534.421 495.166 518.441 521.988C509.471 537.045 502.239 549.186 498.5 553.5C488.1 565.5 468.5 570.167 460 571H30C13.4315 571 0 557.569 0 541V31C0 13.8792 13.8792 0 31 0H1403Z"
          />
        </clipPath>
      </defs>
    </svg>
    <div className="absolute inset-0" style={{ clipPath: `url(#${HERO_CLIP_ID})` }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={HERO_BG}
        aria-hidden
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 100%" }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: GRADIENT }} />
    </div>
  </>
);

/**
 * Homepage hero — native reproduction of the a1solar.hu WordPress hero.
 *
 * Desktop (≥lg): a max-1290px band (aspect-ratio 1290/571) with the shaped
 * `HeroPhoto`, left-dark gradient, headline bottom-left, and the three service
 * cards nesting into the notch.
 *
 * Mobile (<lg): the `.hero-masked` block — a 300px clip-path banner with the
 * mobile artwork, then the three cards stacked beneath.
 */
export function HomeHero() {
  return (
    // Flush to the header (no top gap) — the hero mask fills from y=0.
    <section className="w-full">
      {/* ── Desktop hero (≥lg) ─────────────────────────────────────────── */}
      {/* aspect-ratio (not a fixed 571px height) keeps the photo crop identical
          at every width — otherwise narrow viewports crop less off the top and
          the image's sky shows as empty space above the subject. */}
      <div className="container hidden lg:block">
        <div className="relative w-full" style={{ aspectRatio: "1192 / 571" }}>
        {/* Shaped photo (clip-path + real <img>) */}
        <HeroPhoto />

        {/* Headline content, bottom-left — equal inset from the bottom and the
            left of the hero shape (40px / 40px). */}
        <div className="hero-copy absolute bottom-0 left-0 z-10 text-white" style={{ padding: "40px", maxWidth: "600px" }}>
          <span
            className="inline-block rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[1px] text-white"
            style={{ background: "rgba(255,255,255,0.2)", marginBottom: "20px" }}
          >
            {HERO.badge}
          </span>
          <h1 style={{ color: "#fff", fontSize: "42px", fontWeight: 300, lineHeight: 1.2, marginBottom: "20px" }}>
            {HERO.titleTop}
            <br />
            <strong style={{ fontWeight: 700 }}>{HERO.titleStrong}</strong>
          </h1>
          <Link
            href={HERO.ctaHref}
            className="inline-flex items-center rounded-full transition-opacity hover:opacity-90"
            style={{ background: "#db0330", color: "#fff", padding: "10px 20px", fontSize: "16px", fontWeight: 400 }}
          >
            {HERO.ctaLabel}
          </Link>
        </div>

        {/* Service cards nested into the notch */}
        <div className="absolute z-20 grid grid-cols-3" style={{ left: "40.8%", right: "0", top: "77.2%", gap: "20px" }}>
          {A1_SERVICE_CARDS.map((c, i) => {
            const prio = i === 0;
            return (
              <Link key={c.href} href={c.href} className="group relative block aspect-[1/1.12] transition-opacity hover:opacity-95">
                <div
                  className="absolute inset-0"
                  style={{
                    background: "var(--surface-3)",
                    WebkitMaskImage: `url(${prio ? CTA_PRIO_MASK : CTA_NORMAL_MASK})`,
                    maskImage: `url(${prio ? CTA_PRIO_MASK : CTA_NORMAL_MASK})`,
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                  }}
                />
                {prio ? <CardArrowBadge /> : null}
                <div className="absolute inset-0 flex flex-col justify-center gap-5 p-5">
                  <CardBody title={c.title} text={c.text} icon={c.icon} />
                </div>
              </Link>
            );
          })}
        </div>
        </div>
      </div>

      {/* ── Mobile hero (<lg) ──────────────────────────────────────────── */}
      <div className="lg:hidden">
        {/* Rounded hero card with the looped video (matches the desktop). */}
        <div className="px-4">
          <div className="relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[24px] p-6 text-white">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={HERO_BG_MOBILE}
              aria-hidden
              className="absolute inset-0"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
            <div className="absolute inset-0" style={{ background: GRADIENT }} />
            <div className="relative z-10">
              <span
                className="inline-block rounded-full text-xs font-medium uppercase tracking-[1px]"
                style={{ background: "rgba(255,255,255,0.2)", padding: "6px 12px" }}
              >
                {HERO.badge}
              </span>
              <h1 style={{ marginTop: "22px", color: "#fff", fontSize: "28px", fontWeight: 300, lineHeight: 1.2 }}>
                {HERO.titleTop}
                <br />
                <strong style={{ fontWeight: 700 }}>{HERO.titleStrong}</strong>
              </h1>
            </div>
            <Link
              href={HERO.ctaHref}
              className="relative z-10 mt-4 self-start rounded-full text-sm font-normal"
              style={{ background: "#db0330", color: "#fff", padding: "10px 22px" }}
            >
              {HERO.ctaLabel}
            </Link>
          </div>
        </div>

        {/* Cards stacked beneath on mobile — notched top-right corner (the arrow
            badge nests into a scooped-out corner, echoing the desktop cards). */}
        <div className="mt-6 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3">
          {A1_SERVICE_CARDS.map((c) => (
            <Link key={c.href} href={c.href} className="group relative block aspect-[365/254] transition-opacity hover:opacity-95">
              <div
                className="absolute inset-0"
                style={{
                  background: "var(--surface-3)",
                  WebkitMaskImage: MOBILE_CARD_MASK,
                  maskImage: MOBILE_CARD_MASK,
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              />
              {/* Icon — top-left */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.icon} alt="" className="absolute left-5 top-4 object-contain" style={{ height: "76px", width: "auto" }} aria-hidden />
              {/* Arrow badge — nested in the top-right notch */}
              <CardArrowBadge className="right-5 top-1.5" />
              {/* Text — bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-[var(--ink)]" style={{ fontSize: "24px", fontWeight: 500, lineHeight: 1.2 }}>
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-[var(--ink-soft)]">{c.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Company intro — aligned to the hero image's left edge (~10px) and, on
          desktop, vertically centred in the band-bottom → cards-bottom gap
          (the cards overhang the hero mask by ~106px). */}
      <div className="container flex items-center lg:min-h-[118px]">
        <p className="mt-10 max-w-md text-[var(--ink-soft)] lg:mt-0">{HERO.intro}</p>
      </div>
    </section>
  );
}
