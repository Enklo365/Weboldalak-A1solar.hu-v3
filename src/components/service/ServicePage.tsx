import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Motion } from "@/components/Motion";
import type { ServicePageData } from "@/components/service/serviceData";

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

const SectionDivider = () => (
  <div className="mx-auto max-w-[var(--container)] px-6 my-[50px]">
    <hr data-animate="line" style={{ border: 0, borderTop: "1px dashed #ececec" }} />
  </div>
);

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
    <div className="container mt-10">
      <p className="max-w-[760px] text-lg text-[var(--ink-soft)]">{data.intro}</p>
    </div>
  </section>
);

const ValueSection = ({ data }: { data: ServicePageData["value"] }) => (
  <section className="w-full">
    <div data-animate="up" className="mx-auto max-w-[820px] px-6 text-center">
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <h2 className="text-[var(--ink)]" style={{ marginTop: "24px", fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 500, lineHeight: 1.15 }}>
        {data.title}
      </h2>
      <p className="mt-5 text-[var(--ink-soft)]">{data.body}</p>
    </div>
  </section>
);

const BenefitsSection = ({ data }: { data: ServicePageData["benefits"] }) => (
  <section className="w-full">
    <div className="mx-auto max-w-[var(--container)] px-6">
      <div data-animate="up" className="mx-auto max-w-[820px] text-center">
        <h2 className="text-[var(--ink)]" style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 500, lineHeight: 1.2 }}>
          {data.title}
        </h2>
        <p className="mt-5 text-[var(--ink-soft)]">{data.body}</p>
      </div>
      <div
        data-animate="up"
        className="mx-auto mt-10 flex max-w-[900px] flex-col items-center gap-5 rounded-[20px] p-8 text-center md:flex-row md:justify-between md:text-left"
        style={{ background: "var(--surface-3)" }}
      >
        <p className="text-[var(--ink)]" style={{ fontWeight: 500, fontSize: "17px" }}>
          {data.note}
        </p>
        <div className="flex-none">
          <PillCta href={data.ctaHref}>{data.ctaLabel}</PillCta>
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = ({ data }: { data: ServicePageData["process"] }) => (
  <section className="w-full">
    <div className="mx-auto max-w-[var(--container)] px-6">
      <div data-animate="up" className="text-center">
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 className="text-[var(--ink)]" style={{ marginTop: "24px", fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 500, lineHeight: 1.15 }}>
          {data.title}
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.steps.map((s, i) => (
          <div
            key={s.num}
            data-animate="up"
            style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            className="flex flex-col rounded-[18px] border border-[var(--line)] bg-white p-6 transition-shadow hover:shadow-[0_18px_40px_rgba(10,14,20,0.06)]"
          >
            <span
              className="grid h-12 w-12 place-items-center rounded-full text-[17px] font-bold"
              style={{ background: "rgba(194,29,32,0.12)", color: "var(--brand)" }}
            >
              {s.num}
            </span>
            <h3 className="mt-5 text-[17px] font-semibold text-[var(--ink)]">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OfferBanner = ({ data }: { data: ServicePageData["offer"] }) => (
  <section className="w-full">
    <div className="mx-auto max-w-[var(--container)] px-6">
      <div
        data-animate="up"
        className="flex flex-col items-center gap-6 rounded-[24px] px-8 py-12 text-center text-white md:flex-row md:justify-between md:text-left"
        style={{ background: "linear-gradient(120deg, var(--brand) 0%, var(--brand-dark) 100%)" }}
      >
        <div className="max-w-[640px]">
          <h2 style={{ color: "#fff", fontSize: "clamp(24px, 3.6vw, 32px)", fontWeight: 600, lineHeight: 1.2 }}>{data.title}</h2>
          <p className="mt-3 text-white/85">{data.body}</p>
        </div>
        <Link
          href={data.ctaHref}
          className="inline-flex flex-none items-center rounded-full bg-white transition-opacity hover:opacity-90"
          style={{ color: "var(--brand)", padding: "14px 28px", fontSize: "15px", fontWeight: 600 }}
        >
          {data.ctaLabel}
        </Link>
      </div>
    </div>
  </section>
);

const WhySection = ({ data }: { data: ServicePageData["why"] }) => (
  <section className="w-full">
    <div className="mx-auto max-w-[var(--container)] px-6">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div data-animate="up" className="order-first aspect-[4/3] overflow-hidden rounded-[20px] lg:order-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img data-fade src={data.image} alt="A1 Solar referencia" className="object-cover" style={{ height: "100%", width: "100%" }} />
        </div>
        <div data-animate="up" style={{ transitionDelay: "120ms" }} className="max-w-[600px]">
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 className="text-[var(--ink)]" style={{ marginTop: "24px", fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 500, lineHeight: 1.15 }}>
            {data.title}
          </h2>
          <p className="mt-5 text-[var(--ink-soft)]">{data.body}</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {data.stats.map((st) => (
              <div key={st.label}>
                <div className="text-[clamp(24px,3vw,32px)] font-bold text-[var(--brand)]">{st.value}</div>
                <div className="mt-1 text-xs leading-snug text-[var(--ink-muted)]">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.reviews.map((r, i) => (
          <figure
            key={r.author}
            data-animate="up"
            style={{ transitionDelay: `${(i % 4) * 80}ms` }}
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
    </div>
  </section>
);

const ReferencesSection = ({ data }: { data: ServicePageData["references"] }) => (
  <section className="w-full">
    <div className="mx-auto max-w-[var(--container)] px-6">
      <div data-animate="up" className="text-center">
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 className="text-[var(--ink)]" style={{ marginTop: "24px", fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 500, lineHeight: 1.15 }}>
          {data.title}
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
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
    </div>
  </section>
);

const ContactSection = ({ data }: { data: ServicePageData["contact"] }) => (
  <section id="ajanlatkeres" className="w-full scroll-mt-[100px]">
    <div className="mx-auto max-w-[var(--container)] px-6">
      <div data-animate="up" className="mx-auto flex max-w-[640px] flex-col items-center">
        <ContactForm formName="Ajánlatkérő űrlap" heading={data.title} intro={data.intro} />
      </div>
    </div>
  </section>
);

const GrantSection = ({ data }: { data: ServicePageData["grant"] }) => (
  <section className="w-full">
    <div className="mx-auto max-w-[var(--container)] px-6">
      <div
        data-animate="up"
        className="grid grid-cols-1 items-center gap-8 rounded-[24px] p-8 md:grid-cols-[1.4fr_1fr] md:p-10"
        style={{ background: "var(--surface-3)" }}
      >
        <div>
          <h2 className="text-[var(--ink)]" style={{ fontSize: "clamp(22px, 3.4vw, 30px)", fontWeight: 600, lineHeight: 1.2 }}>
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
      </div>
    </div>
  </section>
);

/** Native service subpage — reproduces the a1solar.hu service layout in the design system. */
export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <div className="pb-16 md:pb-24">
      <Motion />
      <ServiceHero data={data.hero} />
      <SectionDivider />
      <ValueSection data={data.value} />
      <SectionDivider />
      <BenefitsSection data={data.benefits} />
      <SectionDivider />
      <ProcessSection data={data.process} />
      <div className="mt-16" />
      <OfferBanner data={data.offer} />
      <SectionDivider />
      <WhySection data={data.why} />
      <SectionDivider />
      <ReferencesSection data={data.references} />
      <SectionDivider />
      <ContactSection data={data.contact} />
      <div className="mt-16" />
      <GrantSection data={data.grant} />
    </div>
  );
}
