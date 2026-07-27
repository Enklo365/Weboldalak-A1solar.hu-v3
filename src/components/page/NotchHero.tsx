import Link from "next/link";

const HERO_CLIP_ID = "a1-notch-hero-shape";
const GRADIENT = "linear-gradient(to right, #0A141Dcc 0%, rgba(10,20,29,0) 100%)";

export type NotchHeroProps = {
  eyebrow: string;
  titleLight: string;
  titleStrong: string;
  image: string;
  imageAlt: string;
  intro: string;
  ctaLabel?: string;
  ctaHref?: string;
};

/**
 * The shared subpage hero — the homepage/service "svg_design-elem" shape (rounded
 * left + lower-right notch) filled by a photo, with the headline bottom-left and
 * the intro paragraph seated in the lower-right notch cut-out. Reused across the
 * service subpages and the career page so they read as one design.
 */
export const NotchHero = ({ eyebrow, titleLight, titleStrong, image, imageAlt, intro, ctaLabel, ctaHref }: NotchHeroProps) => (
  <section className="w-full">
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

    {/* Desktop band (≥lg) — shaped photo + headline bottom-left + intro in the notch */}
    <div className="container hidden lg:block">
      <div className="relative w-full" style={{ aspectRatio: "1192 / 571" }}>
        <div className="absolute inset-0" style={{ clipPath: `url(#${HERO_CLIP_ID})` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 55%" }} />
          <div className="absolute inset-0" style={{ background: GRADIENT }} />
        </div>
        <div className="absolute bottom-0 left-0 z-10 text-white" style={{ padding: "40px", maxWidth: "620px" }}>
          <span
            className="inline-block rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[1px] text-white"
            style={{ background: "rgba(255,255,255,0.2)", marginBottom: "20px" }}
          >
            {eyebrow}
          </span>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 300, lineHeight: 1.18, marginBottom: "24px" }}>
            {titleLight}
            <br />
            <strong style={{ fontWeight: 700 }}>{titleStrong}</strong>
          </h1>
          {ctaLabel && ctaHref ? (
            <Link
              href={ctaHref}
              className="inline-flex items-center rounded-full transition-opacity hover:opacity-90"
              style={{ background: "var(--brand)", color: "#fff", padding: "12px 24px", fontSize: "15px", fontWeight: 500 }}
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
        {/* Intro text seated in the lower-right notch cut-out. */}
        <div className="absolute z-10 flex items-center" style={{ left: "46%", right: "1.5%", top: "80%", bottom: "1%" }}>
          <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--ink-soft)" }}>{intro}</p>
        </div>
      </div>
    </div>

    {/* Mobile (<lg) — rounded card + intro below */}
    <div className="lg:hidden px-4">
      <div className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[24px] p-6 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} className="absolute inset-0" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div className="absolute inset-0" style={{ background: GRADIENT }} />
        <div className="relative z-10">
          <span
            className="inline-block rounded-full text-xs font-medium uppercase tracking-[1px]"
            style={{ background: "rgba(255,255,255,0.2)", padding: "6px 12px" }}
          >
            {eyebrow}
          </span>
          <h1 style={{ marginTop: "20px", color: "#fff", fontSize: "clamp(22px, 6.2vw, 28px)", fontWeight: 300, lineHeight: 1.2 }}>
            {titleLight} <strong style={{ fontWeight: 700 }}>{titleStrong}</strong>
          </h1>
          {ctaLabel && ctaHref ? (
            <div className="mt-5">
              <Link
                href={ctaHref}
                className="inline-flex items-center rounded-full transition-opacity hover:opacity-90"
                style={{ background: "var(--brand)", color: "#fff", padding: "12px 24px", fontSize: "15px", fontWeight: 500 }}
              >
                {ctaLabel}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
      <p className="mt-5 px-1" style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--ink-soft)" }}>
        {intro}
      </p>
    </div>
  </section>
);
