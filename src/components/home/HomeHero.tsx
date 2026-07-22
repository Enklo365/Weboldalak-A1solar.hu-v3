import Link from "next/link";
import { A1_SERVICE_CARDS } from "@/components/home/serviceCards.data";

const HERO_BG = "/wp-content/uploads/2026/03/otthoni_energiatarolo_program-1.png";
const HERO_MASK = "/wp-content/uploads/2025/07/svg_design-elem.svg";
const CTA_PRIO_MASK = "/wp-content/uploads/2025/07/cta_prio.svg";
const CTA_NORMAL_MASK = "/wp-content/uploads/2025/07/cta_normal.svg";

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
 * Homepage hero — native reproduction of a1solar.hu, matching the mirror's exact
 * geometry: a max-1290px-wide, 571px-tall band centred in the page, masked with
 * `svg_design-elem.svg` (mask-size `contain`, centred) which gives the rounded
 * corners + the lower-right notch. The photo fills it (`cover`, `50% 100%`) under
 * a left-dark gradient. Headline + CTA sit bottom-left (40px padding, 600px max);
 * three 230×230 cards nest into the notch (card 1 uses `cta_prio.svg` + arrow,
 * cards 2–3 use `cta_normal.svg`). The company intro sits beneath, on the left.
 */
export function HomeHero() {
  return (
    <section className="w-full pt-6 md:pt-8">
      {/* Hero band: max 1290px, 571px tall, masked (contain, centred) */}
      <div className="relative mx-auto w-full" style={{ maxWidth: "1290px", height: "571px" }}>
        {/* Masked photo + left-dark gradient */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 100%",
            WebkitMaskImage: `url(${HERO_MASK})`,
            maskImage: `url(${HERO_MASK})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskPosition: "50% 50%",
            maskPosition: "50% 50%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(10,20,29,0.8) 0%, rgba(10,20,29,0) 100%)" }}
          />
        </div>

        {/* Headline content, bottom-left (40px padding, 600px max) */}
        <div className="absolute bottom-0 left-0 z-10 text-white" style={{ padding: "40px", maxWidth: "600px" }}>
          <span
            className="inline-block rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[1px] text-white"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            {HERO.badge}
          </span>
          <h1 className="mt-5 mb-5 text-[32px] leading-[1.2] font-light md:text-[42px]" style={{ color: "#fff" }}>
            {HERO.titleTop}
            <br />
            <strong className="font-bold">{HERO.titleStrong}</strong>
          </h1>
          <Link
            href={HERO.ctaHref}
            className="inline-flex items-center rounded-full text-base font-normal transition-opacity hover:opacity-90"
            style={{ background: "var(--brand)", color: "#fff", padding: "10px 20px" }}
          >
            {HERO.ctaLabel}
          </Link>
        </div>

        {/* Service cards nested into the notch (bottom-right) */}
        <div
          className="absolute z-20 grid grid-cols-3"
          style={{ left: "40.8%", right: "0.8%", top: "77.2%", gap: "20px" }}
        >
          {A1_SERVICE_CARDS.map((c, i) => {
            const prio = i === 0;
            return (
              <Link
                key={c.href}
                href={c.href}
                className="group relative block aspect-square transition-opacity hover:opacity-95"
              >
                {/* Masked grey shape (cta_prio = notch for the arrow, cta_normal = rounded rect) */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "var(--surface-3)",
                    WebkitMaskImage: `url(${prio ? CTA_PRIO_MASK : CTA_NORMAL_MASK})`,
                    maskImage: `url(${prio ? CTA_PRIO_MASK : CTA_NORMAL_MASK})`,
                    WebkitMaskSize: "100% 100%",
                    maskSize: "100% 100%",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                  }}
                />
                {/* Arrow badge sitting in the notch (prio card only) */}
                {prio ? (
                  <span className="absolute right-1 top-1 z-10 grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)]">
                    <ArrowUpRight />
                  </span>
                ) : null}
                {/* Content on top of the shape (not masked) */}
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.icon} alt="" className="h-14 w-14 object-contain" aria-hidden />
                  <div>
                    <h3 className="text-[26px] font-medium leading-[1.15] text-[var(--ink)]">{c.title}</h3>
                    <p className="mt-2 text-[15px] leading-snug text-[var(--ink-soft)]">{c.text}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Company intro beneath, on the left */}
      <div className="mx-auto w-full max-w-[var(--container)] px-4">
        <p className="mt-14 max-w-md text-[var(--ink-soft)]">{HERO.intro}</p>
      </div>
    </section>
  );
}
