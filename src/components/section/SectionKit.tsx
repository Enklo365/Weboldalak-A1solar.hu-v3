import type { ReactNode } from "react";

/**
 * Shared section building blocks — the reusable equivalents of the eyebrow /
 * heading / body / list / card / CTA patterns that were previously duplicated
 * locally in every page. Use these instead of re-writing inline markup.
 */

/** Brand-tint uppercase pill used above section headings. */
export const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

/** Dashed separator between stacked sections. */
export const RowDivider = () => <hr style={{ border: 0, borderTop: "1px dashed #ececec", margin: "48px 0" }} />;

/** Standard body paragraph (16px / #4b5563). */
export const Body = ({ children }: { children: ReactNode }) => (
  <p className="text-[var(--ink-soft)]" style={{ margin: 0, fontSize: "16px", lineHeight: 1.75 }}>
    {children}
  </p>
);

export type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

/** Section wrapper: optional eyebrow + 30px/500 heading + optional intro + body. */
export const Section = ({ id, eyebrow, title, intro, children }: SectionProps) => (
  <div id={id} style={id ? { scrollMarginTop: "100px" } : undefined}>
    {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
    <h2 className="text-[var(--ink)]" style={{ margin: eyebrow ? "18px 0 0" : 0, fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}>
      {title}
    </h2>
    {intro ? (
      <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.75 }}>
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
    style={{ alignSelf: "flex-start", display: "inline-block", background: "var(--brand)", color: "#fff", padding: "13px 26px", borderRadius: "9999px", fontWeight: 500 }}
  >
    {children}
  </a>
);

/** Grey info card with a bold sub-heading (e.g. the two backup solutions). */
export const InfoCard = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="rounded-[20px] p-6 md:p-8" style={{ background: "var(--surface-3)" }}>
    <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
      {title}
    </h3>
    <div className="mt-4 flex flex-col gap-4">{children}</div>
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

export type FaqItem = { q: string; a: string };

/** FAQ accordion (native <details>, no client JS). */
export const FaqList = ({ items }: { items: FaqItem[] }) => (
  <div className="flex flex-col gap-3">
    {items.map((f) => (
      <details key={f.q} className="faq-item rounded-[16px] p-5" style={{ background: "var(--surface-3)" }}>
        <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-[var(--ink)]" style={{ listStyle: "none" }}>
          {f.q}
          <span className="faq-plus flex-none text-[var(--brand)]" aria-hidden="true">
            +
          </span>
        </summary>
        <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.7 }}>
          {f.a}
        </p>
      </details>
    ))}
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
