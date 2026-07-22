import Link from "next/link";
import { A1_SERVICE_CARDS } from "@/components/home/serviceCards.data";

const HERO_BG = "/wp-content/uploads/2026/03/otthoni_energiatarolo_program-1.png";
const HERO = {
  badge: "Otthoni Energiatároló Program",
  titleTop: "Fókuszban",
  titleStrong: "az energiatárolás",
  ctaLabel: "További információ",
  ctaHref: "/lakossagi-energiatarolo-tamogatas",
  intro:
    "Célunk, hogy ügyfeleink egyetlen helyről kapják meg az összes olyan szolgáltatást, amely egy napelemes rendszer kialakításához szükséges.",
};

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden>
    <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Homepage hero — native reproduction of a1solar.hu: a full-width photo banner
 * (571px, positioned bottom) with a left-dark gradient, the programme badge,
 * two-weight headline and CTA anchored bottom-left; the three service cards
 * nest into the banner's lower-right, and the company intro sits beneath left.
 */
export function HomeHero() {
  return (
    <section className="mx-auto w-full max-w-[var(--container)] px-4 pt-6 md:pt-8">
      <div className="relative">
        {/* Full-width photo banner */}
        <div
          className="relative flex min-h-[440px] items-end overflow-hidden rounded-[26px] p-7 text-white md:h-[571px] md:p-10"
          style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "bottom" }}
        >
          <div
            className="absolute inset-0 z-[1]"
            style={{ background: "linear-gradient(to right, rgba(10,20,29,0.8) 0%, rgba(10,20,29,0) 62%)" }}
          />
          <div className="relative z-[2] max-w-[600px] pb-6">
            <span className="inline-block rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">
              {HERO.badge}
            </span>
            <h1 className="mt-5 text-[2rem] leading-[1.2] font-light md:text-[42px]" style={{ color: "#fff" }}>
              {HERO.titleTop}
              <br />
              <strong className="font-bold">{HERO.titleStrong}</strong>
            </h1>
            <Link
              href={HERO.ctaHref}
              className="mt-6 inline-flex items-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors"
              style={{ background: "var(--brand)", color: "#fff" }}
            >
              {HERO.ctaLabel}
            </Link>
          </div>
        </div>

        {/* Service cards — separate grey panels nested into the banner's lower-right */}
        <div className="relative z-[3] -mt-10 ml-auto grid grid-cols-1 gap-4 sm:grid-cols-3 md:absolute md:-bottom-10 md:right-0 md:-mt-0 md:w-[62%]">
          {A1_SERVICE_CARDS.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative flex flex-col justify-between rounded-[20px] p-6 transition-shadow hover:shadow-[0_12px_34px_rgba(0,0,0,0.08)]"
              style={{ background: "var(--surface-3)" }}
            >
              {i === 0 ? (
                <span className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)]">
                  <ArrowUpRight />
                </span>
              ) : null}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.icon} alt="" className="h-16 w-16 object-contain" aria-hidden />
              <div className="mt-5">
                <h3 className="text-xl font-bold text-[var(--ink)]">{c.title}</h3>
                <p className="mt-2 text-sm leading-snug text-[var(--ink-soft)]">{c.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Company intro beneath, on the left */}
      <p className="mt-8 max-w-lg text-[var(--ink-soft)] md:mt-24 lg:max-w-md">{HERO.intro}</p>
    </section>
  );
}
