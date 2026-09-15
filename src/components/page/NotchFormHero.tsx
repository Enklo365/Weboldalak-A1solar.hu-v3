import type { ReactNode } from "react";

const HERO_NOTCH_ID = "notch-form-hero-shape";
const HERO_GRADIENT = "linear-gradient(to right, #0A141Dcc 0%, rgba(10,20,29,0) 100%)";
const NOTCH_PATH =
  "M1403 0C1420.12 0 1434 13.8792 1434 31V394C1434 410.569 1420.57 424 1404 424H655C598.5 424 590 424 573 441.5C555.915 459.088 534.421 495.166 518.441 521.988C509.471 537.045 502.239 549.186 498.5 553.5C488.1 565.5 468.5 570.167 460 571H30C13.4315 571 0 557.569 0 541V31C0 13.8792 13.8792 0 31 0H1403Z";

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="12" fill="var(--brand)" />
    <path d="M7 12.5l3 3 7-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export type NotchFormHeroProps = {
  eyebrow: string;
  titleLight?: string;
  titleStrong: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  ctaLabel: string;
  ctaHref: string;
  intro: string;
  guaranteesTitle: string;
  guarantees: string[];
  /** optional trust-badge strip image shown below the guarantee checklist */
  badges?: string;
  /** anchor id for the form block (mobile CTA / TOC target) */
  formId: string;
  /** the form card (e.g. a ContactForm) seated in the lower-right notch */
  form: ReactNode;
};

/**
 * Form hero (matches the OEP subpage): a wide notch-cut photo with the eyebrow +
 * title + CTA bottom-left, the lead intro + guarantee checklist below-left, and a
 * form card seated in the lower-right notch cut-out (overhanging below the image).
 * Mobile stacks: image card → intro/guarantees → form.
 */
export const NotchFormHero = ({
  eyebrow,
  titleLight,
  titleStrong,
  image,
  imageAlt,
  imagePosition = "50% 50%",
  ctaLabel,
  ctaHref,
  intro,
  guaranteesTitle,
  guarantees,
  badges,
  formId,
  form,
}: NotchFormHeroProps) => (
  <section className="w-full pb-16 lg:pb-24">
    <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
      <defs>
        <clipPath id={HERO_NOTCH_ID} clipPathUnits="objectBoundingBox">
          <path transform="scale(0.00069735, 0.00175131)" d={NOTCH_PATH} />
        </clipPath>
      </defs>
    </svg>

    <div className="container">
      <div className="relative">
        {/* DESKTOP — shaped photo with the notch, headline + CTA bottom-left */}
        <div className="relative hidden w-full lg:block" style={{ aspectRatio: "1192 / 520" }}>
          <div className="absolute inset-0" style={{ clipPath: `url(#${HERO_NOTCH_ID})` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: imagePosition }} />
            <div className="absolute inset-0" style={{ background: HERO_GRADIENT }} />
          </div>
          <div className="absolute bottom-0 left-0 z-10 text-white" style={{ padding: "40px", maxWidth: "560px" }}>
            <span
              className="inline-block rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[1px] text-white"
              style={{ background: "rgba(255,255,255,0.2)", marginBottom: "20px" }}
            >
              {eyebrow}
            </span>
            <h1 style={{ color: "#fff", fontSize: "var(--type-primary-title)", fontWeight: 300, lineHeight: "var(--type-primary-title-leading)", letterSpacing: "-0.025em", marginBottom: "24px" }}>
              {titleLight ? (
                <>
                  {titleLight}
                  <br />
                </>
              ) : null}
              <strong style={{ fontWeight: 700 }}>{titleStrong}</strong>
            </h1>
            <a
              href={ctaHref}
              className="inline-flex items-center rounded-full transition-opacity hover:opacity-90"
              style={{ background: "var(--brand)", color: "#fff", padding: "12px 24px", fontSize: "15px", fontWeight: 500 }}
            >
              {ctaLabel}
            </a>
          </div>
        </div>

        {/* MOBILE — rounded card with the headline */}
        <div className="relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[24px] p-6 text-white lg:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} className="absolute inset-0" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: imagePosition }} />
          <div className="absolute inset-0" style={{ background: HERO_GRADIENT }} />
          <div className="relative z-10">
            <span className="inline-block rounded-full text-xs font-medium uppercase tracking-[1px]" style={{ background: "rgba(255,255,255,0.2)", padding: "6px 12px" }}>
              {eyebrow}
            </span>
            <h1 style={{ marginTop: "20px", color: "#fff", fontSize: "var(--type-primary-title)", fontWeight: 300, lineHeight: "var(--type-primary-title-leading)", letterSpacing: "-0.025em" }}>
              {titleLight ? <>{titleLight} </> : null}
              <strong style={{ fontWeight: 700 }}>{titleStrong}</strong>
            </h1>
            <div className="mt-5">
              <a
                href={ctaHref}
                className="inline-flex items-center rounded-full transition-opacity hover:opacity-90"
                style={{ background: "var(--brand)", color: "#fff", padding: "12px 24px", fontSize: "15px", fontWeight: 500 }}
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>

        {/* BELOW-HERO — desktop: 2-col grid (intro/guarantees/badges left, form seated
            in the notch right). The left column stretches to the row height so the
            badge strip bottom-aligns with the form. Mobile: simple stack. */}
        <div className="mt-8 flex flex-col gap-10 lg:mt-0 lg:grid lg:grid-cols-[46%_1fr] lg:gap-[3%] lg:items-start">
          <div className="flex flex-col lg:pt-6">
            <p className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.75 }}>
              {intro}
            </p>
            <p className="text-[var(--ink)]" style={{ margin: "24px 0 16px", fontSize: "16px", fontWeight: 700 }}>
              {guaranteesTitle}
            </p>
            <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {guarantees.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {badges ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={badges}
                alt="A1 Solar díjak és elismerések"
                style={{ marginTop: "16px", width: "100%", height: "auto", display: "block" }}
              />
            ) : null}
          </div>

          <div id={formId} className="lg:relative lg:z-20 lg:-mt-[104px]" style={{ scrollMarginTop: "var(--header-h)" }}>
            {form}
          </div>
        </div>
      </div>
    </div>
  </section>
);
