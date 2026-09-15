import { Info } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Shared section building blocks — the reusable equivalents of the eyebrow /
 * heading / body / list / card / CTA patterns that were previously duplicated
 * locally in every page. Use these instead of re-writing inline markup.
 */

/** Brand-tint uppercase pill used above section headings. */
export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{
      background: "var(--section-accent-soft, rgba(194,29,32,0.14))",
      color: "var(--section-accent-strong, var(--brand-dark))",
    }}
  >
    {children}
  </span>
);

/** Dashed separator between stacked sections. */
export const RowDivider = () => <hr style={{ border: 0, borderTop: "1px dashed #ececec", margin: "48px 0" }} />;

/** Standard body paragraph (shared semantic body role / #4b5563). */
export const Body = ({ children }: { children: ReactNode }) => (
  <p className="text-[var(--ink-soft)]" style={{ margin: 0, fontSize: "var(--type-body-copy)", lineHeight: "var(--type-body-leading)" }}>
    {children}
  </p>
);

/** Text-led section using the shared title and body roles. */
export const Typography = ({ id, title, children }: { id?: string; title: string; children: ReactNode }) => (
  <section id={id} className="typography-section">
    <h2>{title}</h2>
    <div className="typography-section__body">{children}</div>
  </section>
);

export type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

/** Section wrapper: optional eyebrow + shared primary title + optional intro + body. */
export const Section = ({ id, eyebrow, title, intro, children }: SectionProps) => (
  <div id={id} style={id ? { scrollMarginTop: "100px" } : undefined}>
    {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
    <h2 className="text-[var(--ink)]" style={{ margin: eyebrow ? "18px 0 0" : 0, fontSize: "var(--type-primary-title)", fontWeight: 500, lineHeight: "var(--type-primary-title-leading)", letterSpacing: "-0.025em" }}>
      {title}
    </h2>
    {intro ? (
      <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "var(--type-body-copy)", lineHeight: "var(--type-body-leading)" }}>
        {intro}
      </p>
    ) : null}
    {children ? <div className="mt-6 flex flex-col gap-5">{children}</div> : null}
  </div>
);

/** Bulleted list with a small brand dot. */
export const Bullets = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span
          aria-hidden="true"
          style={{ flexShrink: 0, width: "8px", height: "8px", borderRadius: "9999px", background: "var(--brand)", marginTop: "9px" }}
        />
        <span className="text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
          {item}
        </span>
      </li>
    ))}
  </ul>
);

/** Red pill CTA — inline background (Tailwind bg-* is transparent on <a> here). */
export const CtaButton = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    className="transition-opacity hover:opacity-90"
    style={{ alignSelf: "flex-start", display: "inline-block", background: "var(--section-accent, var(--brand))", color: "#fff", padding: "13px 26px", borderRadius: "9999px", fontWeight: 500 }}
  >
    {children}
  </a>
);

/** Grey info card with a bold sub-heading (e.g. the two backup solutions). */
export const InfoCard = ({
  title,
  image,
  imageAlt,
  children,
}: {
  title: string;
  image?: string;
  imageAlt?: string;
  children: ReactNode;
}) => (
  <div className="overflow-hidden rounded-[20px]" style={{ background: "var(--surface-3)" }}>
    {image ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt={imageAlt ?? ""}
        style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", display: "block" }}
      />
    ) : null}
    <div className="p-6 md:p-8">
      <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
        {title}
      </h3>
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </div>
  </div>
);

export type NumberedItem = { num: string; title: string; text: string };

/** Numbered "reasons / process steps" cards (badge + title + text). */
export const NumberedList = ({ items }: { items: NumberedItem[] }) => (
  <div className="flex flex-col gap-4">
    {items.map((it) => (
      <div key={it.title} className="flex items-start gap-5 rounded-[20px] px-6 py-6" style={{ background: "var(--surface-3)" }}>
        <span
          className="flex flex-none items-center justify-center"
          style={{ width: "48px", height: "48px", borderRadius: "9999px", background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)", fontSize: "17px", fontWeight: 700 }}
        >
          {it.num}
        </span>
        <div className="min-w-0">
          <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
            {it.title}
          </h3>
          <p className="mt-2 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
            {it.text}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export type Feature = { title: string; text: string };

/** Icon-led benefit cards in a responsive grid (distinct from NumberedList). */
export const FeatureGrid = ({ items }: { items: Feature[] }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {items.map((f) => (
      <div key={f.title} className="rounded-[20px] p-6" style={{ background: "var(--surface-3)" }}>
        <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: "rgba(219,3,48,0.10)" }} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="m5 12.5 4.2 4.2L19 7" stroke="var(--brand)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-[var(--ink)]" style={{ margin: "16px 0 0", fontSize: "18px", fontWeight: 600, lineHeight: 1.3 }}>
          {f.title}
        </h3>
        <p className="mt-2 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
          {f.text}
        </p>
      </div>
    ))}
  </div>
);

/** Small brand-red check icon used by CheckList / CompareCards. */
const CheckIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-none">
    <path d="m5 12.5 4.2 4.2L19 7" stroke="var(--brand)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Compact pill/tag row — for neutral "factors / criteria" lists (not benefits),
 *  so they read differently from the brand check lists. */
export const TagList = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2.5">
    {items.map((t) => (
      <span
        key={t}
        className="inline-flex items-center gap-2 rounded-full"
        style={{ background: "var(--surface-3)", padding: "9px 16px", fontSize: "14px", lineHeight: 1.3, color: "var(--ink)" }}
      >
        <span aria-hidden="true" style={{ flexShrink: 0, width: "6px", height: "6px", borderRadius: "9999px", background: "var(--brand)" }} />
        {t}
      </span>
    ))}
  </div>
);

export type Factor = { icon: ReactNode; label: string };

/** Icon + label grid for neutral "factors we assess" lists — a small brand-tinted
 *  icon circle beside each label (distinct from the benefit check lists). */
export const FactorGridCompact = ({ items, columns = 2 }: { items: Factor[]; columns?: 2 | 3 }) => (
  <div className={`factor-grid factor-grid--${columns}`}>
    {items.map((f) => (
      <div key={f.label} className="flex items-center gap-3.5 rounded-[14px]" style={{ background: "var(--surface-3)", padding: "14px 16px" }}>
        <span
          className="flex flex-none items-center justify-center rounded-full"
          style={{ width: "40px", height: "40px", background: "rgba(219,3,48,0.10)", color: "var(--brand)" }}
          aria-hidden="true"
        >
          {f.icon}
        </span>
        <span style={{ fontSize: "var(--type-body-copy)", lineHeight: 1.35, color: "var(--ink)", fontWeight: 600 }}>{f.label}</span>
      </div>
    ))}
  </div>
);

/** Backwards-compatible name for existing page implementations. */
export const FactorGrid = FactorGridCompact;

/** Checklist — like Bullets but with brand check icons (reads as benefits / requirements). */
export const CheckList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span style={{ marginTop: "1px" }}>
          <CheckIcon size={20} />
        </span>
        <span className="text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
          {item}
        </span>
      </li>
    ))}
  </ul>
);

/** Highlighted "important" callout — pale red box, info icon, strong brand-red text. */
export const InfoCallout = ({ children }: { children: ReactNode }) => (
  <div className="flex items-start gap-4 rounded-[20px] p-5 md:p-6" style={{ background: "rgba(219,3,48,0.06)" }}>
    <span className="flex flex-none items-center justify-center rounded-full" style={{ width: "40px", height: "40px", background: "rgba(219,3,48,0.12)" }}>
      <Info size={20} strokeWidth={2} style={{ color: "var(--brand)" }} />
    </span>
    <div style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--brand-dark)", fontWeight: 500 }}>{children}</div>
  </div>
);

export type CompareCard = {
  title: string;
  subtitle?: string;
  points: string[];
  footnote?: string;
  /** subtle brand tint + border to mark the "bigger" option */
  highlighted?: boolean;
};

/** Two (or more) side-by-side option cards for a decision section. */
export const CompareCards = ({ items }: { items: CompareCard[] }) => (
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
    {items.map((c) => (
      <div
        key={c.title}
        className="flex flex-col rounded-[20px] p-6 md:p-7"
        style={c.highlighted ? { background: "rgba(219,3,48,0.06)" } : { background: "var(--surface-3)" }}
      >
        <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
          {c.title}
        </h3>
        {c.subtitle ? (
          <p className="mt-2 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
            {c.subtitle}
          </p>
        ) : null}
        <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: "24px 0 0" }}>
          {c.points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span style={{ marginTop: "1px" }}>
                <CheckIcon size={19} />
              </span>
              <span className="text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.55 }}>
                {p}
              </span>
            </li>
          ))}
        </ul>
        {c.footnote ? (
          <p className="mt-6 pt-5" style={{ borderTop: "1px dashed rgba(0,0,0,0.10)", fontSize: "14px", lineHeight: 1.55, color: "var(--ink-muted)" }}>
            {c.footnote}
          </p>
        ) : null}
      </div>
    ))}
  </div>
);

export type Brand = { name: string; logo?: string };

/** Row of partner-manufacturer cards — brand logo when available, styled text otherwise. */
export const BrandRow = ({ items }: { items: Brand[] }) => (
  <div className="flex flex-wrap items-center gap-3">
    {items.map((b) => (
      <span
        key={b.name}
        className="inline-flex items-center justify-center rounded-[14px]"
        style={{ background: "var(--surface-3)", padding: "16px 26px", minHeight: "64px" }}
      >
        {b.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={b.logo} alt={b.name} style={{ height: "30px", width: "auto", display: "block" }} />
        ) : (
          <span style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "0.3px", color: "var(--ink)" }}>{b.name}</span>
        )}
      </span>
    ))}
  </div>
);

export type Stat = { value: string; label: string };

/** Bold stat highlight strip (e.g. financing "0% / 6 hó"). */
export const StatHighlight = ({ stats, note }: { stats: Stat[]; note?: string }) => (
  <div className="rounded-[20px] p-6 md:p-8" style={{ background: "rgba(219,3,48,0.05)", border: "1px solid rgba(219,3,48,0.16)" }}>
    <div className="flex flex-wrap gap-8 md:gap-12">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col">
          <span style={{ fontSize: "clamp(34px, 4vw, 46px)", fontWeight: 700, lineHeight: 1, color: "var(--brand)" }}>{s.value}</span>
          <span className="mt-2" style={{ fontSize: "14px", fontWeight: 500, color: "var(--ink-soft)" }}>{s.label}</span>
        </div>
      ))}
    </div>
    {note ? (
      <p className="mt-5" style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--ink-muted)" }}>
        {note}
      </p>
    ) : null}
  </div>
);

// Re-exported components keep the section kit as the single import surface.
export { FaqList, type FaqItem } from "./FaqList";
export { BrandBadges, type BrandBadgesProps } from "./BrandBadges";
export { BIG_STATS_ITEMS, BigStats, type BigStatItem, type BigStatsProps } from "./BigStats";
export { DarkFeature, type DarkFeatureItem, type DarkFeatureProps } from "./DarkFeature";
export { ProjectMosaic, type ProjectMosaicItem, type ProjectMosaicProps } from "./ProjectMosaic";
export { StatementSection, type StatementSectionProps } from "./StatementSection";
export {
  FeatureTiles,
  FeatureTilesEqualGraphite,
  FeatureTilesEqualRed,
  FeatureTilesMosaicGraphite,
  FeatureTilesMosaicRed,
  type FeatureTileItem,
  type FeatureTilesProps,
  type FeatureTilesVariantProps,
} from "./FeatureTiles";
export {
  ImageOverlap,
  ImageOverlapLeftFloatingGraphite,
  ImageOverlapLeftGraphite,
  ImageOverlapLeftRed,
  ImageOverlapRightGraphite,
  ImageOverlapRightFloatingGraphite,
  ImageOverlapRightRed,
  type ImageOverlapProps,
  type ImageOverlapVariantProps,
} from "./ImageOverlap";
export { Reveal } from "./Reveal";
export { StepTimeline, type Step } from "./StepTimeline";

const SUNLIGHT_BG = [
  "radial-gradient(80% 70% at 102% -12%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 52%)",
  "repeating-radial-gradient(circle at 100% 0%, rgba(255,255,255,0) 0 62px, rgba(255,255,255,0.04) 62px 64px)",
  "radial-gradient(95% 115% at -8% 116%, rgba(74,4,14,0.5) 0%, rgba(74,4,14,0) 55%)",
  "var(--brand)",
].join(", ");

export type StatBannerProps = {
  stats: Stat[];
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

/** Red "sunlight" highlight with big white stats + short copy + white CTA — for
 *  a punchy on-brand block (e.g. the financing "0% / 6 hó"). */
export const StatBanner = ({ stats, body, ctaLabel, ctaHref }: StatBannerProps) => (
  <div className="relative overflow-hidden rounded-[24px] px-8 py-10 text-white md:px-11 md:py-11" style={{ background: SUNLIGHT_BG }}>
    <div className="relative z-10">
      <div className="flex flex-wrap gap-x-12 gap-y-6">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <span style={{ fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 700, lineHeight: 1, color: "#fff" }}>{s.value}</span>
            <span className="mt-2" style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>{s.label}</span>
          </div>
        ))}
      </div>
      {body ? (
        <p className="mt-7 max-w-[620px]" style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px", lineHeight: 1.65 }}>
          {body}
        </p>
      ) : null}
      {ctaLabel && ctaHref ? (
        <a
          href={ctaHref}
          className="mt-8 inline-flex items-center rounded-full transition-opacity hover:opacity-90"
          style={{ background: "#fff", color: "var(--brand)", padding: "14px 28px", fontSize: "15px", fontWeight: 600 }}
        >
          {ctaLabel}
        </a>
      ) : null}
    </div>
  </div>
);

export type OfferCalloutProps = {
  title: string;
  body: string;
  /** Prompt line shown bottom-left, next to the white CTA button. */
  prompt: string;
  ctaLabel: string;
  ctaHref: string;
};

/** Red "sunlight" callout: title + body, a dashed rule, then a bottom row with a
 *  prompt line (left) and a white pill CTA (right). Stacks on mobile. */
export const OfferCallout = ({ title, body, prompt, ctaLabel, ctaHref }: OfferCalloutProps) => (
  <div className="relative overflow-hidden rounded-[24px] px-8 py-10 text-white md:px-11 md:py-11" style={{ background: SUNLIGHT_BG }}>
    <div className="relative z-10">
      <h3 style={{ margin: 0, color: "#fff", fontSize: "clamp(20px, 2.6vw, 26px)", fontWeight: 700, lineHeight: 1.25 }}>{title}</h3>
      <p className="mt-4 max-w-[760px]" style={{ color: "rgba(255,255,255,0.9)", fontSize: "16px", lineHeight: 1.7 }}>
        {body}
      </p>
      <hr style={{ border: 0, borderTop: "1px dashed rgba(255,255,255,0.35)", margin: "28px 0" }} />
      <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-[520px]" style={{ margin: 0, color: "rgba(255,255,255,0.92)", fontSize: "16px", lineHeight: 1.6 }}>
          {prompt}
        </p>
        <a
          href={ctaHref}
          className="inline-flex flex-none items-center rounded-full transition-opacity hover:opacity-90"
          style={{ background: "#fff", color: "var(--brand)", padding: "14px 28px", fontSize: "15px", fontWeight: 600 }}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  </div>
);

export type CtaBannerProps = {
  eyebrow?: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

/** Red "sunlight" CTA banner (matches the service-page OfferBanner). */
export const CtaBanner = ({ eyebrow, title, body, ctaLabel, ctaHref }: CtaBannerProps) => (
  <div
    className="relative overflow-hidden rounded-[24px] px-9 py-12 text-white md:px-12 md:py-14"
    style={{
      background: [
        "radial-gradient(80% 70% at 102% -12%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 52%)",
        "repeating-radial-gradient(circle at 100% 0%, rgba(255,255,255,0) 0 62px, rgba(255,255,255,0.04) 62px 64px)",
        "radial-gradient(95% 115% at -8% 116%, rgba(74,4,14,0.5) 0%, rgba(74,4,14,0) 55%)",
        "var(--brand)",
      ].join(", "),
    }}
  >
    <div className="relative z-10">
      {eyebrow ? (
        <span
          className="inline-block rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[1px]"
          style={{ background: "rgba(255,255,255,0.2)", marginBottom: "20px" }}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className="max-w-[620px]" style={{ color: "#fff", fontSize: "clamp(22px, 3.2vw, 30px)", fontWeight: 600, lineHeight: 1.25 }}>
        {title}
      </h2>
      <p className="mt-4 max-w-[620px] text-white/85">{body}</p>
      <a
        href={ctaHref}
        className="mt-9 inline-flex items-center rounded-full transition-opacity hover:opacity-90"
        style={{ background: "#fff", color: "var(--brand)", padding: "14px 28px", fontSize: "15px", fontWeight: 600 }}
      >
        {ctaLabel}
      </a>
    </div>
  </div>
);
