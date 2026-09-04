import type { ReactNode } from "react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Motion } from "@/components/Motion";
import { ReferenceGallery } from "@/components/service/ReferenceGallery";
import type { ServicePageData } from "@/components/service/serviceData";
import { ServiceTocNav, type TocItem } from "@/components/service/ServiceTocNav";
import { SupportStatusDot } from "@/components/service/SupportStatusDot";
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

/** Container-width dashed divider (same as the homepage). */
const SectionDivider = () => (
  <div className="mx-auto max-w-[var(--container)] px-6 my-[50px]">
    <hr data-animate="line" style={{ border: 0, borderTop: "1px dashed #ececec" }} />
  </div>
);

/** Bare dashed divider that fills the column width (between body sections). */
const RowDivider = () => <hr data-animate="line" style={{ border: 0, borderTop: "1px dashed #ececec" }} />;

/** Render a paragraph, bolding any of the `emphasize` phrases found in it. */
const renderEmphasis = (body: string, phrases: string[]): ReactNode => {
  if (!phrases.length) return body;
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = body.split(new RegExp(`(${escaped.join("|")})`, "g"));
  return parts.map((part, i) =>
    phrases.includes(part) ? (
      <strong key={`${part}-${i}`} className="font-semibold text-[var(--ink)]">
        {part}
      </strong>
    ) : (
      <span key={`t-${i}`}>{part}</span>
    )
  );
};

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

    {/* Desktop band (≥lg) — shaped photo + headline bottom-left + intro in the notch */}
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
          <h1 style={{ color: "#fff", fontSize: "clamp(26px, 2.9vw, 34px)", fontWeight: 300, lineHeight: 1.18, marginBottom: "24px" }}>
            {data.titleLight}
            <br />
            <strong style={{ fontWeight: 700 }}>{data.titleStrong}</strong>
          </h1>
          <PillCta href={data.ctaHref}>{data.ctaLabel}</PillCta>
        </div>
        {/* Intro text vertically centred in the lower-right notch cut-out (the
            image ends at ~74% on the right, so the notch spans 74%–100%). */}
        <div className="absolute z-10 flex items-center" style={{ left: "46%", right: "1.5%", top: "80%", bottom: "1%" }}>
          <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--ink-soft)" }}>{data.intro}</p>
        </div>
      </div>
    </div>

    {/* Mobile (<lg) — rounded card + intro below */}
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
          {/* Mobile heading as <p> so the page keeps ONE semantic h1 (the desktop one). */}
          <p aria-hidden="true" style={{ marginTop: "20px", color: "#fff", fontSize: "clamp(22px, 6.2vw, 26px)", fontWeight: 300, lineHeight: 1.2 }}>
            {data.titleLight} <strong style={{ fontWeight: 700 }}>{data.titleStrong}</strong>
          </p>
          <div className="mt-5">
            <PillCta href={data.ctaHref}>{data.ctaLabel}</PillCta>
          </div>
        </div>
      </div>
      <p className="mt-5 px-1" style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--ink-soft)" }}>
        {data.intro}
      </p>
    </div>
  </section>
);

const ValueSection = ({ data }: { data: NonNullable<ServicePageData["value"]> }) => (
  <section id="value" data-animate="up" className="scroll-mt-[100px]">
    <Eyebrow>{data.eyebrow}</Eyebrow>
    <h2 className="text-[var(--ink)]" style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.15 }}>
      {data.title}
    </h2>
    <p className="mt-6 text-[var(--ink-soft)]">{data.body}</p>
  </section>
);

const BenefitsSection = ({ data }: { data: NonNullable<ServicePageData["benefits"]> }) => (
  <section>
    <div data-animate="up">
      <h2 className="text-[var(--ink)]" style={{ fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}>
        {data.title}
      </h2>
      <p className="mt-6 text-[var(--ink-soft)]">{data.body}</p>
    </div>
    <div
      data-animate="up"
      className="mt-8 flex flex-col items-start gap-6 rounded-[20px] p-8 md:flex-row md:items-center md:justify-between md:gap-10"
      style={{ background: "var(--surface-3)" }}
    >
      <p className="text-[var(--ink)]" style={{ fontWeight: 500, fontSize: "16px", lineHeight: 1.5 }}>
        {data.note}
      </p>
      <div className="flex-none">
        <PillCta href={data.ctaHref}>{data.ctaLabel}</PillCta>
      </div>
    </div>
  </section>
);

const ProcessSection = ({ data }: { data: NonNullable<ServicePageData["process"]> }) => (
  <section id="process" className="scroll-mt-[100px]">
    <div data-animate="up">
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <h2 className="text-[var(--ink)]" style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.15 }}>
        {data.title}
      </h2>
    </div>
    <div className="mt-10 flex flex-col gap-4">
      {data.steps.map((s, i) => (
        <div key={s.num} data-animate="up" style={{ transitionDelay: `${(i % 3) * 70}ms` }} className="step">
          <div className="step-card">
            <h3 className="text-[17px] font-semibold text-[var(--ink)]">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{s.body}</p>
          </div>
          <span className="step-badge">{s.num}</span>
        </div>
      ))}
    </div>
  </section>
);

const OfferBanner = ({ data }: { data: NonNullable<ServicePageData["offer"]> }) => (
  <section
    data-animate="up"
    className="relative overflow-hidden rounded-[24px] px-9 py-12 text-white"
    style={{
      /* On-brand static "sunlight" graphic: a soft glow + faint radiating rings
         from the top-right (solar/energy), with a darker bottom-left for text. */
      background: [
        "radial-gradient(80% 70% at 102% -12%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 52%)",
        "repeating-radial-gradient(circle at 100% 0%, rgba(255,255,255,0) 0 62px, rgba(255,255,255,0.04) 62px 64px)",
        "radial-gradient(95% 115% at -8% 116%, rgba(74,4,14,0.5) 0%, rgba(74,4,14,0) 55%)",
        "var(--brand)",
      ].join(", "),
    }}
  >
    <div className="relative z-10">
      <h2 className="max-w-[620px]" style={{ color: "#fff", fontSize: "clamp(22px, 3.2vw, 30px)", fontWeight: 600, lineHeight: 1.25 }}>
        {data.title}
      </h2>
      <p className="mt-4 max-w-[620px] text-white/85">{data.body}</p>
      <Link
        href={data.ctaHref}
        className="mt-9 inline-flex items-center rounded-full transition-opacity hover:opacity-90"
        style={{ background: "#fff", color: "var(--brand)", padding: "14px 28px", fontSize: "15px", fontWeight: 600 }}
      >
        {data.ctaLabel}
      </Link>
    </div>
  </section>
);

const WhySection = ({ data }: { data: NonNullable<ServicePageData["why"]> }) => (
  <section id="cegunkrol" className="scroll-mt-[100px]">
    <div data-animate="up">
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <h2 className="text-[var(--ink)]" style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.15 }}>
        {data.title}
      </h2>
      <p className="mt-6 max-w-[760px] text-[var(--ink-soft)]">{renderEmphasis(data.body, data.emphasize)}</p>
    </div>
    {/* Reviews placeholder — Google reviews go here later via Trustindex. */}
    <div
      data-animate="up"
      className="mt-8 flex min-h-[180px] flex-col items-center justify-center gap-2 rounded-[20px] p-8 text-center"
      style={{ background: "var(--surface-3)" }}
    >
      <div aria-hidden className="text-lg tracking-wide text-[#f5b100]">
        ★★★★★
      </div>
      <p className="text-sm text-[var(--ink-muted)]">Ügyfeleink Google-értékelései hamarosan itt jelennek meg.</p>
    </div>
  </section>
);

const ReferencesSection = ({ data }: { data: NonNullable<ServicePageData["references"]> }) => (
  <section id="referenciak" className="scroll-mt-[100px]">
    <div data-animate="up">
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <h2 className="text-[var(--ink)]" style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.15 }}>
        {data.title}
      </h2>
    </div>
    <ReferenceGallery images={data.images} />
  </section>
);

const ContactSection = ({ data }: { data: ServicePageData["contact"] }) => (
  <section id="ajanlatkeres" data-animate="up" className="scroll-mt-[100px]">
    <div className="mb-6">
      <Eyebrow>Ajánlatkérés</Eyebrow>
    </div>
    <ContactForm bare formName="Ajánlatkérő űrlap" heading={data.title} intro={data.intro} />
  </section>
);

const GrantSection = ({ data }: { data: NonNullable<ServicePageData["grant"]> }) => (
  <section
    data-animate="up"
    className="grid grid-cols-1 items-center gap-8 rounded-[24px] p-8 md:grid-cols-[1.5fr_1fr] md:p-10"
    style={{ background: "var(--surface-3)" }}
  >
    <div>
      <h2 className="text-[var(--ink)]" style={{ fontSize: "clamp(22px, 3.2vw, 28px)", fontWeight: 600, lineHeight: 1.25 }}>
        {data.title}
      </h2>
      <p className="mt-4 text-[var(--ink-soft)]">{data.body}</p>
      <p className="mt-4 text-sm text-[var(--ink-muted)]">{data.repPhotoLabel}</p>
    </div>
    <div className="flex items-center gap-4">
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

/** Customer-service card in the sidebar (bg #f6f6f6, no border). */
const SupportWidget = () => (
  <div className="rounded-[20px] p-6" style={{ background: "var(--surface-3)" }}>
    <h3 style={{ fontSize: "20px", fontWeight: 500, lineHeight: 1.25, color: "var(--ink)" }}>Beszéljünk a lehetőségeidről!</h3>
    <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      Ügyfélszolgálatunk hétköznap {SITE.supportHours} között elérhető – fordulj hozzánk bizalommal!
    </p>
    <div className="mt-6 flex items-center gap-4">
      <span className="grid h-14 w-14 flex-none place-items-center rounded-full" style={{ background: "#fff", color: "var(--brand)" }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 12a8 8 0 0 1 16 0M4 12v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 1Zm16 0v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M18 17v.5a3 3 0 0 1-3 3h-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </span>
      <div>
        <div className="text-sm font-semibold text-[var(--ink)]">Ügyfélszolgálat</div>
        <a href={`tel:${SITE.phoneRaw}`} className="mt-0.5 flex items-center gap-2 font-semibold text-[var(--ink)]">
          <SupportStatusDot />
          {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  </div>
);

/** Native service subpage — hero full-width, then a two-column body + sticky sidebar. */
export function ServicePage({ data }: { data: ServicePageData }) {
  // Assemble the body from whichever sections the page actually has, with a
  // dashed RowDivider between consecutive content sections. The offer banner
  // and grant card intentionally have no divider before them (they cap a run).
  const toc: TocItem[] = [];
  const body: ReactNode[] = [];
  const divide = () => {
    if (body.length) body.push(<RowDivider key={`div-${body.length}`} />);
  };

  if (data.value) {
    toc.push({ id: "value", label: data.value.eyebrow });
    divide();
    body.push(<ValueSection key="value" data={data.value} />);
  }
  if (data.benefits) {
    divide();
    body.push(<BenefitsSection key="benefits" data={data.benefits} />);
  }
  if (data.process) {
    toc.push({ id: "process", label: data.process.eyebrow });
    divide();
    body.push(<ProcessSection key="process" data={data.process} />);
  }
  if (data.offer) body.push(<OfferBanner key="offer" data={data.offer} />);
  if (data.why) {
    toc.push({ id: "cegunkrol", label: data.why.eyebrow });
    divide();
    body.push(<WhySection key="why" data={data.why} />);
  }
  if (data.references) {
    toc.push({ id: "referenciak", label: data.references.eyebrow });
    divide();
    body.push(<ReferencesSection key="references" data={data.references} />);
  }
  toc.push({ id: "ajanlatkeres", label: "Ajánlatkérés" });
  divide();
  body.push(<ContactSection key="contact" data={data.contact} />);
  if (data.grant) body.push(<GrantSection key="grant" data={data.grant} />);

  return (
    <div className="pb-6 md:pb-8">
      <Motion />
      <ServiceHero data={data.hero} />

      <SectionDivider />

      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-x-0">
          {/* Main column */}
          <div className="flex min-w-0 flex-col gap-[46px] lg:pr-10">{body}</div>

          {/* Sidebar — vertical dashed divider on its left (desktop); on tablets
              the widgets sit side by side instead of stretching full width. */}
          <aside className="lg:border-l lg:border-dashed lg:border-[#ececec] lg:pl-10">
            <div className="grid gap-6 md:grid-cols-2 md:items-start lg:grid-cols-1 lg:sticky lg:top-[110px]">
              <ServiceTocNav items={toc} />
              <SupportWidget />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
