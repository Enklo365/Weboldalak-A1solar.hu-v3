import Link from "next/link";
import { ABOUT, ARTICLES, ZANZIBAR } from "@/components/home/homeSections.data";

/** Small tint pill used as the section eyebrow (a1solar `.elementor-button` style). */
const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

/** a1solar CTA: a 44px brand-red circle with a chevron + a label beside it. */
const CircleCta = ({ href, children }: { href: string; children: string }) => (
  <Link href={href} className="group inline-flex items-center gap-3">
    <span
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-white transition-transform group-hover:scale-105"
      style={{ background: "var(--brand)" }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-5 w-5" aria-hidden>
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    <span className="font-semibold text-[var(--ink)]">{children}</span>
  </Link>
);

/** "Cégünkről — A jövőre optimalizálva" — autoplay video left, text right. */
export function HomeAbout() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto grid max-w-[var(--container)] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-[20px] bg-[var(--surface-3)]">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden
          >
            <source src={ABOUT.video} type="video/mp4" />
          </video>
        </div>
        <div className="max-w-[600px]">
          <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
          <h2
            className="mt-4 text-[var(--ink)]"
            style={{ fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 500, lineHeight: 1.15 }}
          >
            {ABOUT.title}
          </h2>
          {ABOUT.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 text-[var(--ink-soft)]">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <CircleCta href={ABOUT.ctaHref}>{ABOUT.ctaLabel}</CircleCta>
          </div>
        </div>
      </div>
    </section>
  );
}

/** "Zanzibár" — two-column: text left, photo right. */
export function HomeZanzibar() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto grid max-w-[var(--container)] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-[600px]">
          <Eyebrow>{ZANZIBAR.eyebrow}</Eyebrow>
          <h2
            className="mt-4 text-[var(--ink)]"
            style={{ fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 500, lineHeight: 1.15 }}
          >
            {ZANZIBAR.title}
          </h2>
          {ZANZIBAR.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-4 text-[var(--ink-soft)]">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <CircleCta href={ZANZIBAR.ctaHref}>{ZANZIBAR.ctaLabel}</CircleCta>
          </div>
        </div>
        <div className="overflow-hidden rounded-[20px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ZANZIBAR.photo}
            alt="A1 Solar Zanzibár – napelemes rendszer átadása"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/** "Tudástár — Legfrissebb cikkeink" — three article cards. */
export function HomeArticles() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-[var(--container)] px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start md:gap-16">
          <div>
            <Eyebrow>{ARTICLES.eyebrow}</Eyebrow>
            <h2
              className="mt-4 text-[var(--ink)]"
              style={{ fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 500, lineHeight: 1.15 }}
            >
              {ARTICLES.title}
            </h2>
          </div>
          <p className="text-[var(--ink-soft)] md:pt-2">{ARTICLES.sub}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
          {ARTICLES.items.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group flex flex-col overflow-hidden rounded-[20px] bg-white transition-shadow hover:shadow-lg"
              style={{ border: "1px solid var(--line)" }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className="absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.5px] text-white"
                  style={{ background: "var(--brand)" }}
                >
                  {ARTICLES.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug text-[var(--ink)]">{a.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-dark)]">
                  Tovább olvasom
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
