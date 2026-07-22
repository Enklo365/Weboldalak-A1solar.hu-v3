import Link from "next/link";
import { A1_SERVICE_CARDS } from "@/components/home/serviceCards.data";

const HERO_BG = "/wp-content/uploads/2026/03/otthoni_energiatarolo_program-1.png";
const HERO_BG_MOBILE = "/wp-content/uploads/2026/03/ChatGPT-Image-2026.-marc.-13.-21_20_16.png";
const HERO_MASK = "/wp-content/uploads/2025/07/svg_design-elem.svg";
const CTA_PRIO_MASK = "/wp-content/uploads/2025/07/cta_prio.svg";
const CTA_NORMAL_MASK = "/wp-content/uploads/2025/07/cta_normal.svg";

const GRADIENT = "linear-gradient(to right, #0A141Dcc 0%, rgba(10,20,29,0) 100%)";

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

/** Inner content of a service card (icon + title + text). */
const CardBody = ({ title, text, icon }: { title: string; text: string; icon: string }) => (
  <>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={icon} alt="" className="h-14 w-14 object-contain" aria-hidden />
    <div>
      <h3 className="text-[26px] font-medium leading-[1.15] text-[var(--ink)]">{title}</h3>
      <p className="mt-2 text-[15px] leading-snug text-[var(--ink-soft)]">{text}</p>
    </div>
  </>
);

/**
 * Homepage hero — native reproduction of the a1solar.hu WordPress hero.
 *
 * Desktop (≥lg): the exact `.hero-bg-desktop` block — a 1290×571 band, photo
 * `cover` / bottom, left-dark gradient, headline bottom-left (40px padding +
 * 30px extra bottom, 600px max). The rounded corners + lower-right notch come
 * from the site's `svg_design-elem.svg` mask (as the live Elementor widget
 * applies it), and the three 230×230 service cards nest into the notch.
 *
 * Mobile (<lg): the `.hero-masked` block — a 300px clip-path banner with the
 * mobile artwork, then the three cards stacked beneath.
 */
export function HomeHero() {
  return (
    <section className="w-full pt-6 md:pt-8">
      {/* ── Desktop hero (≥lg) ─────────────────────────────────────────── */}
      <div className="relative mx-auto hidden w-full lg:block" style={{ maxWidth: "1290px", height: "571px" }}>
        {/* Masked photo + gradient */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
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
          <div className="absolute inset-0" style={{ background: GRADIENT }} />
        </div>

        {/* Headline content, bottom-left */}
        <div className="absolute bottom-0 left-0 z-10 text-white" style={{ padding: "40px 40px 70px", maxWidth: "600px" }}>
          <span
            className="inline-block rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[1px] text-white"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            {HERO.badge}
          </span>
          <h1 className="mt-5 mb-5 text-[42px] font-light leading-[1.2]" style={{ color: "#fff" }}>
            {HERO.titleTop}
            <br />
            <strong className="font-bold">{HERO.titleStrong}</strong>
          </h1>
          <Link
            href={HERO.ctaHref}
            className="inline-flex items-center rounded-full text-base font-normal transition-opacity hover:opacity-90"
            style={{ background: "#db0330", color: "#fff", padding: "10px 20px" }}
          >
            {HERO.ctaLabel}
          </Link>
        </div>

        {/* Service cards nested into the notch */}
        <div className="absolute z-20 grid grid-cols-3" style={{ left: "40.8%", right: "0.8%", top: "77.2%", gap: "20px" }}>
          {A1_SERVICE_CARDS.map((c, i) => {
            const prio = i === 0;
            return (
              <Link key={c.href} href={c.href} className="group relative block aspect-square transition-opacity hover:opacity-95">
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
                {prio ? (
                  <span className="absolute right-1 top-1 z-10 grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)]">
                    <ArrowUpRight />
                  </span>
                ) : null}
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <CardBody title={c.title} text={c.text} icon={c.icon} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Mobile hero (<lg) ──────────────────────────────────────────── */}
      <div className="lg:hidden">
        <div
          className="relative flex flex-col justify-end p-5 text-white"
          style={{
            height: "300px",
            backgroundImage: `url(${HERO_BG_MOBILE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 85% 100%, 0 100%)",
          }}
        >
          <div className="absolute inset-0" style={{ background: GRADIENT }} />
          <div className="relative z-10">
            <span className="text-xs uppercase" style={{ background: "rgba(0,0,0,0.3)", padding: "4px 8px", borderRadius: "8px" }}>
              {HERO.badge}
            </span>
            <h1 className="mt-2.5 text-[25px] font-light leading-tight" style={{ color: "#fff" }}>
              {HERO.titleTop}
              <br />
              <strong className="font-bold">{HERO.titleStrong}</strong>
            </h1>
          </div>
          <Link
            href={HERO.ctaHref}
            className="relative z-10 mt-4 self-start rounded-full text-sm font-normal"
            style={{ background: "#db0330", color: "#fff", padding: "8px 20px" }}
          >
            {HERO.ctaLabel}
          </Link>
        </div>

        {/* Cards stacked beneath on mobile */}
        <div className="mt-8 grid grid-cols-1 gap-4 px-4 sm:grid-cols-3">
          {A1_SERVICE_CARDS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="flex items-center gap-4 rounded-[20px] p-5 transition-opacity hover:opacity-95 sm:flex-col sm:items-start sm:gap-0 sm:aspect-square sm:justify-between"
              style={{ background: "var(--surface-3)" }}
            >
              <CardBody title={c.title} text={c.text} icon={c.icon} />
            </Link>
          ))}
        </div>
      </div>

      {/* Company intro beneath (both) */}
      <div className="mx-auto w-full max-w-[var(--container)] px-4">
        <p className="mt-10 max-w-md text-[var(--ink-soft)] lg:mt-14">{HERO.intro}</p>
      </div>
    </section>
  );
}
