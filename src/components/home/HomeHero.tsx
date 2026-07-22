import Link from "next/link";
import { A1_SERVICE_CARDS } from "@/components/home/serviceCards.data";

const HERO_BG = "/wp-content/uploads/2026/03/otthoni_energiatarolo_program-1.png";
const HERO = {
  badge: "Otthoni Energiatároló Program",
  titleTop: "Fókuszban",
  titleBottom: "az energiatárolás",
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
 * Homepage hero — native reproduction of the a1solar.hu Elementor hero:
 * a rounded photo panel (energy-storage lifestyle image) carrying the
 * programme badge, two-weight headline and CTA, with the three service cards
 * nested into its lower-right, and the company intro line beneath on the left.
 */
export function HomeHero() {
  return (
    <section className="mx-auto w-full max-w-[var(--container)] px-4 pt-6 md:pt-8">
      <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1.35fr_1fr]">
        {/* Photo panel with headline overlay */}
        <div className="relative overflow-hidden rounded-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_BG} alt="Otthoni energiatároló rendszer" className="h-[420px] w-full object-cover md:h-[560px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/5" />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
            <span className="inline-block rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ink)] backdrop-blur">
              {HERO.badge}
            </span>
            <h1 className="mt-5 text-[2.6rem] leading-[1.05] md:text-[3.6rem]" style={{ color: "#fff" }}>
              <span className="block font-light">{HERO.titleTop}</span>
              <span className="block font-bold">{HERO.titleBottom}</span>
            </h1>
            <Link
              href={HERO.ctaHref}
              className="mt-7 inline-flex items-center rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-dark)]"
            >
              {HERO.ctaLabel}
            </Link>
          </div>
        </div>

        {/* Service cards nested to the right */}
        <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
          {A1_SERVICE_CARDS.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative flex flex-col justify-between rounded-2xl bg-[var(--surface-3)] p-5 transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              {i === 0 ? (
                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)]">
                  <ArrowUpRight />
                </span>
              ) : null}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.icon} alt="" className="h-16 w-16 object-contain" aria-hidden />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[var(--ink)]">{c.title}</h3>
                <p className="mt-1 text-sm leading-snug text-[var(--ink-soft)]">{c.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-8 max-w-xl text-[var(--ink-soft)]">{HERO.intro}</p>
    </section>
  );
}
