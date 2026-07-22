import Link from "next/link";
import { ABOUT, ARTICLES, ZANZIBAR } from "@/components/home/homeSections.data";

/** Dashed section separator (container-width) with 50px breathing above/below. */
export const SectionDivider = () => (
  <div className="mx-auto max-w-[var(--container)] px-6 my-[50px]">
    <hr data-animate="line" style={{ border: 0, borderTop: "1px dashed #ececec" }} />
  </div>
);

/** Small tint pill used as the section eyebrow (a1solar `.elementor-button` style). */
const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

/**
 * a1solar animated CTA — a brand-red circle that grows into a full pill button
 * on hover, the arrow sliding right and the label turning white. Pure CSS
 * (classes defined in globals.css under `.learn-more`).
 */
const LearnMore = ({ href, children }: { href: string; children: string }) => (
  <div className="extra-button-container flex">
    <Link href={href} className="learn-more">
      <span className="circle" aria-hidden>
        <span className="extra-icon arrow" />
      </span>
      <span className="extra-button-text">{children}</span>
    </Link>
  </div>
);

/**
 * Compact, non-anchor variant of {@link LearnMore} for use inside a card that is
 * itself a link (nested anchors are invalid). It animates on the parent card's
 * `group` hover rather than its own.
 */
const ReadMore = ({ children }: { children: string }) => (
  <span className="learn-more is-compact mt-5">
    <span className="circle" aria-hidden>
      <span className="extra-icon arrow" />
    </span>
    <span className="extra-button-text">{children}</span>
  </span>
);

/** "Cégünkről — A jövőre optimalizálva" — autoplay video left, text right. */
export function HomeAbout() {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-[var(--container)] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div data-animate="up" className="aspect-[4/3] overflow-hidden rounded-[20px] bg-[var(--surface-3)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          >
            <source src={ABOUT.video} type="video/mp4" />
          </video>
        </div>
        <div data-animate="up" style={{ transitionDelay: "120ms" }} className="max-w-[600px]">
          <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "32px", fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 500, lineHeight: 1.15 }}
          >
            {ABOUT.title}
          </h2>
          {ABOUT.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 text-[var(--ink-soft)]">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <LearnMore href={ABOUT.ctaHref}>{ABOUT.ctaLabel}</LearnMore>
          </div>
        </div>
      </div>
    </section>
  );
}

/** "Zanzibár" — two-column: text left, photo right. */
export function HomeZanzibar() {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-[var(--container)] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div data-animate="up" className="max-w-[600px]">
          <Eyebrow>{ZANZIBAR.eyebrow}</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "32px", fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 500, lineHeight: 1.15, whiteSpace: "pre-line" }}
          >
            {ZANZIBAR.title}
          </h2>
          {ZANZIBAR.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 text-[var(--ink-soft)]">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <LearnMore href={ZANZIBAR.ctaHref}>{ZANZIBAR.ctaLabel}</LearnMore>
          </div>
        </div>
        <div data-animate="up" style={{ transitionDelay: "120ms" }} className="order-first aspect-[4/3] overflow-hidden rounded-[20px] lg:order-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            data-fade
            src={ZANZIBAR.photo}
            alt="A1 Solar Zanzibár – napelemes rendszer átadása"
            className="object-cover"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}

/** "Tudástár — Legfrissebb cikkeink" — three article cards. */
export function HomeArticles() {
  return (
    <section className="w-full pb-16 md:pb-24">
      <div className="mx-auto max-w-[var(--container)] px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start md:gap-16">
          <div data-animate="up">
            <Eyebrow>{ARTICLES.eyebrow}</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "32px", fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 500, lineHeight: 1.15 }}
            >
              {ARTICLES.title}
            </h2>
          </div>
          <p className="text-[var(--ink-soft)] md:pt-2">{ARTICLES.sub}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
          {ARTICLES.items.map((a, i) => (
            <Link
              key={a.href}
              href={a.href}
              data-animate="up"
              style={{ transitionDelay: `${i * 90}ms` }}
              className="group flex flex-col overflow-hidden rounded-[20px] bg-white"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-fade
                  src={a.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="notch-badge">
                  <span className="notch-badge-pill">{ARTICLES.category}</span>
                </span>
              </div>
              <div className="flex flex-1 flex-col bg-[var(--surface-3)] p-6">
                <h3 className="text-lg font-semibold leading-snug text-[var(--ink)]">{a.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">{a.excerpt}</p>
                <ReadMore>Tovább olvasom</ReadMore>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
