import Link from "next/link";

export type LandingHeroProps = {
  eyebrow: string;
  titleLight?: string;
  titleStrong: string;
  image: string;
  imageAlt: string;
  /** Short supporting line under the headline. */
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** object-position for the hero photo (default "50% 50%"). */
  imagePosition?: string;
};

/**
 * Full-bleed campaign hero for landing pages — a single rounded photo that fills
 * the width, a dark left-to-right + bottom scrim for legibility, and a LARGE
 * headline (with the brand eyebrow pill + red CTA) overlaid bottom-left. Distinct
 * from the shared NotchHero (subpage style) so a landing reads as a dedicated
 * campaign page rather than another subpage.
 */
export const LandingHero = ({
  eyebrow,
  titleLight,
  titleStrong,
  image,
  imageAlt,
  subtitle,
  ctaLabel,
  ctaHref,
  imagePosition = "50% 50%",
}: LandingHeroProps) => (
  <section className="w-full">
    <div className="container">
      <div
        className="relative w-full overflow-hidden"
        style={{ borderRadius: "24px", minHeight: "clamp(440px, 44vw, 620px)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: imagePosition }}
        />
        {/* Legibility scrim: darkens the left column and the bottom band. */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "linear-gradient(90deg, rgba(10,20,29,0.92) 0%, rgba(10,20,29,0.62) 38%, rgba(10,20,29,0) 68%)",
              "linear-gradient(0deg, rgba(10,20,29,0.80) 0%, rgba(10,20,29,0) 46%)",
            ].join(", "),
          }}
        />

        <div
          className="absolute bottom-0 left-0 z-10 flex flex-col items-start text-white"
          style={{ padding: "clamp(28px, 4vw, 56px)", maxWidth: "780px" }}
        >
          <span
            className="inline-block rounded-full uppercase tracking-[1.5px]"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(4px)",
              padding: "8px 16px",
              fontSize: "12px",
              fontWeight: 600,
              marginBottom: "22px",
            }}
          >
            {eyebrow}
          </span>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(30px, 4.4vw, 56px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              margin: 0,
              textShadow: "0 2px 24px rgba(0,0,0,0.35)",
            }}
          >
            {titleLight ? (
              <>
                {titleLight}
                <br />
              </>
            ) : null}
            <strong style={{ fontWeight: 700 }}>{titleStrong}</strong>
          </h1>
          {subtitle ? (
            <p
              style={{
                marginTop: "20px",
                maxWidth: "560px",
                fontSize: "clamp(15px, 1.4vw, 18px)",
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.88)",
              }}
            >
              {subtitle}
            </p>
          ) : null}
          {ctaLabel && ctaHref ? (
            <Link
              href={ctaHref}
              className="mt-8 inline-flex items-center rounded-full transition-opacity hover:opacity-90"
              style={{ background: "var(--brand)", color: "#fff", padding: "15px 30px", fontSize: "16px", fontWeight: 600 }}
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  </section>
);
