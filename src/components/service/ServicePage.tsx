import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Motion } from "@/components/Motion";
import type { ServicePageData } from "@/components/service/serviceData";
import { SERVICE_NAV } from "@/components/service/serviceData";
import { SITE } from "@/lib/site";

/* The homepage hero shape (rounded left + lower-right notch) as a scalable
   clip-path, reused so the service hero reads as part of the same design. */
const HERO_CLIP_ID = "a1-service-hero-shape";
const GRADIENT = "linear-gradient(to right, #0A141Dcc 0%, rgba(10,20,29,0) 100%)";

const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

const PillCta = ({ href, children }: { href: string; children: string }) => (
  <Link
    href={href}
    className="inline-flex items-center rounded-full transition-opacity hover:opacity-90"
    style={{ background: "var(--brand)", color: "#fff", padding: "12px 24px", fontSize: "15px", fontWeight: 500 }}
  >
    {children}
  </Link>
);

/** Bare divider used between body sections (fills the column width). */
const RowDivider = () => <hr data-animate="line" style={{ border: 0, borderTop: "1px dashed #ececec" }} />;

const ServiceHero = ({ data }: { data: ServicePageData["hero"] }) => (
  <section className="w-full">
    <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
      <defs>
        <clipPath id={HERO_CLIP_ID} clipPathUnits="objectBoundingBox">
          <path
            transform="scale(0.00069735, 0.00175131)"
            d="M1403 0C1420.12 0 1434 13.8792 1434 31V394C1434 410.569 1420.57 424 1404 424H655C598.5 424 590 424 573 441.5C555.915 459.088 534.421 495.166 518.441 521.988C509.471 537.045 502.239 549.186 498.5 553.5C488.1 565.5 468.5 570.167 460 571H30C13.4315 571 0 557.569 0 541V31C0 13.8792 13.8792 0 31 0H1403Z"
          />
        </clipPath>
      </defs>
    </svg>

    {/* Desktop band (≥lg) — shaped photo + headline bottom-left */}
    <div className="container hidden lg:block">
      <div className="relative w-full" style={{ aspectRatio: "1192 / 571" }}>
        <div className="absolute inset-0" style={{ clipPath: `url(#${HERO_CLIP_ID})` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={data.image} alt={data.imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 60%" }} />
          <div className="absolute inset-0" style={{ background: GRADIENT }} />
        </div>
        <div className="hero-copy absolute bottom-0 left-0 z-10 text-white" style={{ padding: "40px", maxWidth: "620px" }}>
          <span
            className="inline-block rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[1px] text-white"
            style={{ background: "rgba(255,255,255,0.2)", marginBottom: "20px" }}
          >
            {data.eyebrow}
          </span>
          <h1 style={{ color: "#fff", fontSize: "42px", fontWeight: 700, lineHeight: 1.15, marginBottom: "24px" }}>{data.title}</h1>
          <PillCta href={data.ctaHref}>{data.ctaLabel}</PillCta>
        </div>
      </div>
    </div>

    {/* Mobile (<lg) — rounded card */}
    <div className="lg:hidden px-4">
      <div className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[24px] p-6 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={data.image} alt={data.imageAlt} className="absolute inset-0" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div className="absolute inset-0" style={{ background: GRADIENT }} />
        <div className="relative z-10">
          <span
            className="inline-block rounded-full text-xs font-medium uppercase tracking-[1px]"
            style={{ background: "rgba(255,255,255,0.2)", padding: "6px 12px" }}
          >
            {data.eyebrow}
          </span>
          <h1 style={{ marginTop: "20px", color: "#fff", fontSize: "27px", fontWeight: 700, lineHeight: 1.2 }}>{data.title}</h1>
          <div className="mt-5">
            <PillCta href={data.ctaHref}>{data.ctaLabel}</PillCta>
          </div>
        </div>
      </div>
    </div>

    {/* Intro paragraph */}
    <div className="container mt-8">
      <p className="max-w-[760px] text-lg text-[var(--ink-soft)]">{data.intro}</p>
    </div>
  </section>
);

const ValueSection = ({ data }: { data: ServicePageData["value"] }) => (
  <section data-animate="up">
    <Eyebrow>{data.eyebrow}</Eyebrow>
    <h2 className="text-[var(--ink)]" style={{ marginTop: "20px", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 500, lineHeight: 1.15 }}>
      {data.title}
    </h2>
    <p className="mt-5 text-[var(--ink-soft)]">{data.body}</p>
  </section>
);

const BenefitsSection = ({ data }: { data: ServicePageData["benefits"] }) => (
  <section>
    <div data-animate="up">
      <h2 className="text-[var(--ink)]" style={{ fontSize: "clamp(24px, 3.6vw, 32px)", fontWeight: 500, lineHeight: 1.2 }}>
        {data.title}
      </h2>
      <p className="mt-5 text-[var(--ink-soft)]">{data.body}</p>
    </div>
    <div
      data-animate="up"
      className="mt-8 flex flex-col items-start gap-5 rounded-[20px] p-7 md:flex-row md:items-center md:justify-between"
      style={{ background: "var(--surface-3)" }}
    >
      <p className="text-[var(--ink)]" style={{ fontWeight: 500, fontSize: "17px" }}>
        {data.note}
      </p>
      <div className="flex-none">
        <PillCta href={data.ctaHref}>{data.ctaLabel}</PillCta>
      </div>
    </div>
  </section>
);

const ProcessSection = ({ data }: { data: ServicePageData["process"] }) => (
  <section>
    <div data-animate="up">
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <h2 className="text-[var(--ink)]" style={{ marginTop: "20px", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 500, lineHeight: 1.15 }}>
        {data.title}
      </h2>
    </div>
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
      {data.steps.map((s, i) => (
        <div
          key={s.num}
          data-animate="up"
          style={{ transitionDelay: `${(i % 2) * 80}ms` }}
          className="flex flex-col rounded-[18px] border border-[var(--line)] bg-white p-6 transition-shadow hover:shadow-[0_18px_40px_rgba(10,14,20,0.06)]"
        >
          <span
            className="grid h-11 w-11 place-items-center rounded-full text-[16px] font-bold"
            style={{ background: "rgba(194,29,32,0.12)", color: "var(--brand)" }}
          >
            {s.num}
          </span>
          <h3 className="mt-4 text-[17px] font-semibold text-[var(--ink)]">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{s.body}</p>
        </div>
      ))}
    </div>
  </section>
);

const OfferBanner = ({ data }: { data: ServicePageData["offer"] }) => (
  <section
    data-animate="up"
    className="flex flex-col items-start gap-6 rounded-[24px] px-8 py-10 text-white md:flex-row md:items-center md:justify-between"
    style={{ background: "linear-gradient(120deg, var(--brand) 0%, var(--brand-dark) 100%)" }}
  >
    <div className="max-w-[560px]">
      <h2 style={{ color: "#fff", fontSize: "clamp(22px, 3.2vw, 30px)", fontWeight: 600, lineHeight: 1.2 }}>{data.title}</h2>
      <p className="mt-3 text-white/85">{data.body}</p>
    </div>
    <Link
      href={data.ctaHref}
      className="inline-flex flex-none items-center rounded-full transition-opacity hover:opacity-90"
      style={{ background: "#fff", color: "var(--brand)", padding: "14px 28px", fontSize: "15px", fontWeight: 600 }}
    >
      {data.ctaLabel}
    </Link>
  </section>
);

const WhySection = ({ data }: { data: ServicePageData["why"] }) => (
  <section>
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div data-animate="up" className="order-first aspect-[4/3] overflow-hidden rounded-[20px] md:order-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img data-fade src={data.image} alt="A1 Solar referencia" className="object-cover" style={{ height: "100%", width: "100%" }} />
      </div>
      <div data-animate="up" style={{ transitionDelay: "120ms" }}>
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 className="text-[var(--ink)]" style={{ marginTop: "20px", fontSize: "clamp(26px, 4vw, 34px)", fontWeight: 500, lineHeight: 1.15 }}>
          {data.title}
        </h2>
        <p className="mt-5 text-[var(--ink-soft)]">{data.body}</p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {data.stats.map((st) => (
            <div key={st.label}>
              <div className="text-[clamp(22px,2.6vw,30px)] font-bold text-[var(--brand)]">{st.value}</div>
              <div className="mt-1 text-xs leading-snug text-[var(--ink-muted)]">{st.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
      {data.reviews.map((r, i) => (
        <figure
          key={r.author}
          data-animate="up"
          style={{ transitionDelay: `${(i % 2) * 80}ms` }}
          className="flex flex-col rounded-[18px] bg-[var(--surface-3)] p-6"
        >
          <div aria-hidden className="text-[15px] tracking-wide text-[#f5b100]">
            ★★★★★
          </div>
          <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">“{r.quote}”</blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-[var(--ink)]">{r.author}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

const ReferencesSection = ({ data }: { data: ServicePageData["references"] }) => (
  <section>
    <div data-animate="up">
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <h2 className="text-[var(--ink)]" style={{ marginTop: "20px", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 500, lineHeight: 1.15 }}>
        {data.title}
      </h2>
    </div>
    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
      {data.images.map((src, i) => (
        <div
          key={src}
          data-animate="up"
          style={{ transitionDelay: `${(i % 3) * 80}ms` }}
          className="group aspect-[4/3] overflow-hidden rounded-[16px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            data-fade
            src={src}
            alt="A1 Solar telepített napelemes rendszer"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  </section>
);

const ContactSection = ({ data }: { data: ServicePageData["contact"] }) => (
  <section id="ajanlatkeres" data-animate="up" className="scroll-mt-[100px]">
    <ContactForm formName="Ajánlatkérő űrlap" heading={data.title} intro={data.intro} />
  </section>
);

const GrantSection = ({ data }: { data: ServicePageData["grant"] }) => (
  <section
    data-animate="up"
    className="grid grid-cols-1 items-center gap-8 rounded-[24px] p-8 md:grid-cols-[1.4fr_1fr]"
    style={{ background: "var(--surface-3)" }}
  >
    <div>
      <h2 className="text-[var(--ink)]" style={{ fontSize: "clamp(22px, 3.2vw, 28px)", fontWeight: 600, lineHeight: 1.2 }}>
        {data.title}
      </h2>
      <p className="mt-4 text-[var(--ink-soft)]">{data.body}</p>
      <p className="mt-4 text-sm text-[var(--ink-muted)]">{data.repPhotoLabel}</p>
    </div>
    <div className="flex items-center gap-4 rounded-[18px] bg-white p-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={data.repPhoto}
        alt={data.repName}
        className="h-20 w-20 flex-none rounded-full object-cover"
        style={{ objectPosition: "50% 20%" }}
      />
      <div>
        <div className="text-base font-semibold text-[var(--ink)]">{data.repName}</div>
        <div className="text-sm text-[var(--ink-muted)]">{data.repRole}</div>
        <a href={`tel:${data.repPhone.replace(/[^\d+]/g, "")}`} className="mt-1 inline-block font-semibold text-[var(--brand)]">
          {data.repPhone}
        </a>
      </div>
    </div>
  </section>
);

/** Sticky sidebar — service navigation (current highlighted) + a lead-capture card. */
const ServiceSidebar = ({ current }: { current: string }) => (
  <div className="flex flex-col gap-6 lg:sticky lg:top-[110px]">
    <nav className="rounded-[20px] border border-[var(--line)] p-6" aria-label="Szolgáltatásaink">
      <div className="text-[13px] font-semibold uppercase tracking-[1px] text-[var(--ink-muted)]">Szolgáltatásaink</div>
      {SERVICE_NAV.map((group) => (
        <div key={group.heading} className="mt-4">
          <div className="text-xs font-semibold uppercase tracking-[1px] text-[var(--brand-dark)]">{group.heading}</div>
          <ul className="mt-2 flex flex-col gap-1">
            {group.links.map((l) => {
              const active = l.href === `/${current}`;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className="flex items-center justify-between rounded-[10px] px-3 py-2 text-sm transition-colors"
                    style={
                      active
                        ? { background: "rgba(194,29,32,0.1)", color: "var(--brand)", fontWeight: 600 }
                        : { color: "var(--ink-soft)" }
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>

    <div className="rounded-[20px] p-6 text-white" style={{ background: "linear-gradient(150deg, var(--brand) 0%, var(--brand-dark) 100%)" }}>
      <h3 style={{ fontSize: "19px", fontWeight: 700, lineHeight: 1.2 }}>Kérj személyre szabott ajánlatot!</h3>
      <p className="mt-2 text-sm text-white/85">Felmérjük az igényeidet, és pár napon belül ajánlatot adunk.</p>
      <Link
        href="#ajanlatkeres"
        className="mt-4 inline-flex items-center rounded-full"
        style={{ background: "#fff", color: "var(--brand)", padding: "11px 22px", fontSize: "14px", fontWeight: 600 }}
      >
        Ajánlatkérés
      </Link>
      <a href={`tel:${SITE.phoneRaw}`} className="mt-4 block text-sm font-semibold text-white">
        {SITE.phoneDisplay}
      </a>
      <div className="text-xs text-white/70">Ügyfélszolgálat: {SITE.supportHours}</div>
    </div>
  </div>
);

/** Native service subpage — hero full-width, then a two-column body + sticky sidebar. */
export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <div className="pb-16 md:pb-24">
      <Motion />
      <ServiceHero data={data.hero} />

      <div className="container mt-[50px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          {/* Main column */}
          <div className="flex min-w-0 flex-col gap-[46px]">
            <ValueSection data={data.value} />
            <RowDivider />
            <BenefitsSection data={data.benefits} />
            <RowDivider />
            <ProcessSection data={data.process} />
            <OfferBanner data={data.offer} />
            <WhySection data={data.why} />
            <RowDivider />
            <ReferencesSection data={data.references} />
            <RowDivider />
            <ContactSection data={data.contact} />
            <GrantSection data={data.grant} />
          </div>

          {/* Sidebar (stretches to row height so the inner card can stick) */}
          <aside>
            <ServiceSidebar current={data.slug} />
          </aside>
        </div>
      </div>
    </div>
  );
}
