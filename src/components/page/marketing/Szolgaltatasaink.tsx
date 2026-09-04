import type { ReactNode } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Design-language atoms (match the native homepage + service pages).  */
/* ------------------------------------------------------------------ */

const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

const PillCta = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center rounded-full transition-opacity hover:opacity-90"
    style={{ background: "var(--brand)", color: "#fff", padding: "14px 28px", fontWeight: 500 }}
  >
    {children}
  </Link>
);

/* ------------------------------------------------------------------ */
/* Service catalogue — real native subpages, generic english slugs.    */
/* ------------------------------------------------------------------ */

type ServiceIcon = "panel" | "building" | "battery" | "sparkle" | "wrench" | "grant";

type ServiceCard = {
  slug: string;
  href: string;
  icon: ServiceIcon;
  title: string;
  description: string;
};

const SERVICES: ServiceCard[] = [
  {
    slug: "residential-solar",
    href: "/lakossagi-napelem",
    icon: "panel",
    title: "Lakossági napelem",
    description:
      "Otthonodra szabott napelemes rendszer tervezéstől a kulcsrakész kivitelezésig — az engedélyeztetést és a teljes ügyintézést mi vállaljuk.",
  },
  {
    slug: "commercial-solar",
    href: "/vallalati-napelem",
    icon: "building",
    title: "Vállalati napelem",
    description:
      "Ipari és üzleti méretű naperőművek tervezése és kivitelezése, hogy a vállalkozásod energiaköltségét tartósan a minimumra csökkentsük.",
  },
  {
    slug: "commercial-storage",
    href: "/vallalati-energiatarolas",
    icon: "battery",
    title: "Vállalati energiatárolás",
    description:
      "Ipari energiatároló megoldások, amelyekkel a megtermelt áramot akkor használod fel, amikor a legtöbbet ér — nagyobb önellátás, kisebb hálózati függés.",
  },
  {
    slug: "residential-cleaning",
    href: "/lakossagi-napelem-tisztitas-es-karbantartas",
    icon: "sparkle",
    title: "Lakossági tisztítás és karbantartás",
    description:
      "Rendszeres tisztítás és szakszerű karbantartás, hogy a háztartási rendszered évek múltán is a lehető legtöbb energiát termelje.",
  },
  {
    slug: "commercial-cleaning",
    href: "/vallalati-napelem-tisztitas-es-karbantartas",
    icon: "wrench",
    title: "Vállalati tisztítás és karbantartás",
    description:
      "Nagy felületű ipari napelemparkok professzionális tisztítása és karbantartása a maximális hozam és a hosszú élettartam érdekében.",
  },
  {
    slug: "grants",
    href: "/palyazatok",
    icon: "grant",
    title: "Pályázatok",
    description:
      "Végigkísérünk a pályázati és támogatási lehetőségeken, hogy a lehető legkedvezőbb forrásból valósulhasson meg a beruházásod.",
  },
];

const ServiceGlyph = ({ icon }: { icon: ServiceIcon }) => {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brand)",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (icon) {
    case "panel":
      return (
        <svg {...common}>
          <path d="M4 4h16l1.5 10H2.5L4 4Z" />
          <path d="M12 4v10M2.9 8h18.2M8 4l-1 10M16 4l1 10" />
          <path d="M12 14v6M8 20h8" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
          <path d="M15 21V9h4a1 1 0 0 1 1 1v11" />
          <path d="M7 8h2M7 12h2M7 16h2M18 13h.01M18 17h.01M2 21h20" />
        </svg>
      );
    case "battery":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="16" height="10" rx="2" />
          <path d="M22 10v4" />
          <path d="M11 9.5 9 12.5h3l-2 3" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common}>
          <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
          <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M15 7a4 4 0 0 0-5 5l-6 6 3 3 6-6a4 4 0 0 0 5-5l-2.5 2.5L14 15l-1.5-2.5L15 10 15 7Z" />
        </svg>
      );
    case "grant":
      return (
        <svg {...common}>
          <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2 8 12.7l-4-3.9L9.5 8 12 3Z" />
        </svg>
      );
    default:
      return null;
  }
};

const ServiceCardBlock = ({ card }: { card: ServiceCard }) => (
  <div
    className="flex flex-col rounded-[24px] p-8"
    style={{ background: "var(--surface-3)" }}
  >
    <span
      className="mb-5 inline-flex items-center justify-center rounded-full"
      style={{ width: 58, height: 58, background: "#fff" }}
    >
      <ServiceGlyph icon={card.icon} />
    </span>
    <h3 className="text-[20px]" style={{ fontWeight: 600, color: "var(--ink)", margin: 0 }}>
      {card.title}
    </h3>
    <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
      {card.description}
    </p>
    <Link
      href={card.href}
      className="mt-6 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
      style={{ color: "var(--brand-dark)", fontWeight: 600 }}
    >
      Részletek
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  </div>
);

/* ------------------------------------------------------------------ */
/* Highlight band (image + copy + CTA), alternating image side.        */
/* ------------------------------------------------------------------ */

type HighlightBand = {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
};

const HIGHLIGHTS: HighlightBand[] = [
  {
    eyebrow: "Lakosság",
    title: "Lakossági villanyszámla nullázás",
    body:
      "Vedd igénybe Te is az ingyenes tanácsadást és helyszíni felmérést, hogy valóban személyre szabott árajánlatot készítsünk neked.",
    ctaLabel: "Otthonom villanyszámláját szeretném nullázni",
    ctaHref: "/lakossagi-napelem",
    image: "/wp-content/uploads/2022/09/lakossagi-villanyszamla-nullazas.png",
    imageAlt: "Lakossági villanyszámla nullázás napelemmel",
    imageLeft: true,
  },
  {
    eyebrow: "Vállalati",
    title: "Vállalati költségoptimalizálás",
    body:
      "Számos pályázati és hitel támogatás áll rendelkezésre, ha vállalkozásod villanyszámláját szeretnéd csökkenteni vagy teljesen eltüntetni.",
    ctaLabel: "Vállalkozásom villanyszámláját szeretném nullázni",
    ctaHref: "/vallalati-napelem",
    image: "/wp-content/uploads/2022/09/vallalati-koltsegoptimalizalas.png",
    imageAlt: "Vállalati költségoptimalizálás napelemmel",
    imageLeft: false,
  },
];

const HighlightBandBlock = ({ band }: { band: HighlightBand }) => (
  <div className="grid items-center gap-10 lg:grid-cols-2">
    <div className={band.imageLeft ? "lg:order-1" : "lg:order-2"}>
      <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-[28px] lg:max-w-none" style={{ aspectRatio: "16 / 11" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={band.image}
          alt={band.imageAlt}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
    <div className={band.imageLeft ? "lg:order-2" : "lg:order-1"}>
      <Eyebrow>{band.eyebrow}</Eyebrow>
      <h2
        className="text-[clamp(1.6rem,3vw,2.3rem)]"
        style={{ fontWeight: 600, color: "var(--ink)", marginTop: 18, marginBottom: 0 }}
      >
        {band.title}
      </h2>
      <p className="mt-4 text-[17px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
        {band.body}
      </p>
      <div className="mt-7">
        <PillCta href={band.ctaHref}>{band.ctaLabel}</PillCta>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

/**
 * "Szolgáltatásaink" — bespoke native marketing page for A1 Solar.
 * Hero, complex-service intro with a big stat, a service catalogue grid
 * linking to the real native subpages, two highlight bands, closing CTA.
 */
export const Szolgaltatasaink = () => (
  <>
    {/* HERO */}
    <section className="w-full py-16 md:py-24" style={{ background: "var(--surface-3)" }}>
      <div className="container text-center">
        <Eyebrow>Szolgáltatásaink</Eyebrow>
        <h1
          className="mx-auto max-w-[900px] text-[clamp(2rem,5vw,3.4rem)] leading-tight"
          style={{ marginTop: 22, marginBottom: 0, color: "var(--ink)" }}
        >
          <span style={{ fontWeight: 300 }}>Tekintsd meg </span>
          <span style={{ fontWeight: 700 }}>szolgáltatásainkat</span>
        </h1>
      </div>
    </section>

    {/* COMPLEX SERVICE + STAT */}
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>Komplex szolgáltatás</Eyebrow>
            <h2
              className="text-[clamp(1.7rem,3.2vw,2.5rem)]"
              style={{ fontWeight: 600, color: "var(--ink)", marginTop: 18, marginBottom: 0 }}
            >
              Komplex szolgáltatást kínálunk
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              Akár pályázati forrásról, önerős beruházásról vagy hitelről van szó, nálunk megtalálod
              a megfelelő termékeket a napelemes rendszeredhez, és biztosítjuk a tervezést,
              engedélyeztetést, ügyintézést, valamint a kivitelezést egész Magyarország területén.
              Közel 2.000 sikeres telepítéssel és gyors reagálású ügyfélszolgálattal garantáljuk a
              villanyszámla nullázását.
            </p>
          </div>
          <div
            className="flex flex-col items-center justify-center rounded-[28px] px-8 py-14 text-center"
            style={{ background: "var(--brand)", color: "#fff" }}
          >
            <span className="text-[clamp(2.6rem,6vw,4rem)] leading-none" style={{ fontWeight: 700 }}>
              26.000+
            </span>
            <span className="mt-3 text-lg" style={{ opacity: 0.92 }}>
              Telepített panel
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* SERVICE CATALOGUE GRID */}
    <section className="w-full py-16 md:py-24" style={{ background: "var(--surface-3)" }}>
      <div className="container">
        <div className="mx-auto max-w-[720px] text-center">
          <Eyebrow>Amiben segítünk</Eyebrow>
          <h2
            className="text-[clamp(1.7rem,3.2vw,2.5rem)]"
            style={{ fontWeight: 600, color: "var(--ink)", marginTop: 18, marginBottom: 0 }}
          >
            Fedezd fel szolgáltatásaink teljes körét
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            A tervezéstől a karbantartásig — minden lépésben melletted állunk, hogy a napelemes
            beruházásod a lehető legtöbbet hozza.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((card) => (
            <ServiceCardBlock key={card.slug} card={card} />
          ))}
        </div>
      </div>
    </section>

    {/* HIGHLIGHT BANDS */}
    <section className="w-full py-16 md:py-24">
      <div className="container flex flex-col gap-20 md:gap-28">
        {HIGHLIGHTS.map((band) => (
          <HighlightBandBlock key={band.title} band={band} />
        ))}
      </div>
    </section>

    {/* CLOSING CTA */}
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <div
          className="flex flex-col items-center gap-6 rounded-[28px] px-8 py-16 text-center"
          style={{ background: "var(--brand)", color: "#fff" }}
        >
          <h2
            className="max-w-[760px] text-[clamp(1.6rem,3vw,2.4rem)]"
            style={{ fontWeight: 600, margin: 0 }}
          >
            Nem tudod, melyik megoldás való neked?
          </h2>
          <p className="max-w-[620px] text-[17px] leading-relaxed" style={{ opacity: 0.92 }}>
            Kérj ingyenes tanácsadást és helyszíni felmérést — szakértőink segítenek megtalálni a
            hozzád illő napelemes megoldást.
          </p>
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/kapcsolat"
              className="inline-flex items-center justify-center rounded-full transition-opacity hover:opacity-90"
              style={{ background: "#fff", color: "var(--brand)", padding: "14px 28px", fontWeight: 600 }}
            >
              Kapcsolatfelvétel
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-full transition-opacity hover:opacity-90"
              style={{ border: "1.5px solid rgba(255,255,255,0.6)", color: "#fff", padding: "14px 28px", fontWeight: 500 }}
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);
