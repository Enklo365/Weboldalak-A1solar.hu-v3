import Link from "next/link";
import { A1_SERVICE_CARDS } from "@/components/home/serviceCards.data";

const HERO_BG = "/wp-content/uploads/2026/03/otthoni_energiatarolo_program-1.png";
const HERO_MASK = "/wp-content/uploads/2025/07/svg_design-elem.svg";
const CTA_PRIO_MASK = "/wp-content/uploads/2025/07/cta_prio.svg";

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
 * Homepage hero — native reproduction of a1solar.hu using the site's own SVG
 * shapes: the photo panel is masked with `svg_design-elem.svg` (the concave
 * notch at the lower-right), and the three service cards use the site's card
 * shapes (`cta_normal.svg` = rounded rect, `cta_prio.svg` = rounded rect with a
 * top-right notch for the arrow). Headline + CTA anchor bottom-left; the three
 * cards nest into the notch; the company intro sits beneath, on the left.
 */
export function HomeHero() {
  return (
    <section className="mx-auto w-full max-w-[var(--container)] px-4 pt-6 md:pt-8">
      <div className="relative w-full" style={{ aspectRatio: "1434 / 571" }}>
        {/* Masked photo + left-dark gradient */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            WebkitMaskImage: `url(${HERO_MASK})`,
            maskImage: `url(${HERO_MASK})`,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(10,20,29,0.8) 0%, rgba(10,20,29,0) 62%)" }}
          />
        </div>

        {/* Headline content, bottom-left */}
        <div className="absolute bottom-0 left-0 z-10 max-w-[600px] p-7 pb-10 text-white md:p-10">
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

        {/* Service cards nested into the notch, lower-right */}
        <div className="absolute right-0 z-20 grid w-[62%] grid-cols-3 gap-4" style={{ bottom: "-12%" }}>
          {A1_SERVICE_CARDS.map((c, i) => {
            const prio = i === 0;
            return (
              <Link
                key={c.href}
                href={c.href}
                className="group relative flex aspect-[251/254] flex-col justify-between p-6 transition-opacity hover:opacity-95"
                style={
                  prio
                    ? {
                        background: "var(--surface-3)",
                        WebkitMaskImage: `url(${CTA_PRIO_MASK})`,
                        maskImage: `url(${CTA_PRIO_MASK})`,
                        WebkitMaskSize: "100% 100%",
                        maskSize: "100% 100%",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                      }
                    : { background: "var(--surface-3)", borderRadius: "30px" }
                }
              >
                {prio ? (
                  <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)]">
                    <ArrowUpRight />
                  </span>
                ) : null}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.icon} alt="" className="h-16 w-16 object-contain" aria-hidden />
                <div>
                  <h3 className="text-lg font-bold text-[var(--ink)]">{c.title}</h3>
                  <p className="mt-2 text-sm leading-snug text-[var(--ink-soft)]">{c.text}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Company intro beneath, on the left */}
      <p className="mt-[9%] max-w-md text-[var(--ink-soft)]">{HERO.intro}</p>
    </section>
  );
}
