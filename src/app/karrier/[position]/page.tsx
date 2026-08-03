import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KarrierApplyForm } from "@/components/page/marketing/KarrierApplyForm";
import {
  getKarrierPosition,
  KARRIER_HERO_IMAGE,
  KARRIER_POSITIONS,
} from "@/components/page/marketing/karrierData";
import { NotchHero } from "@/components/page/NotchHero";
import { ServiceTocNav } from "@/components/service/ServiceTocNav";
import { SupportWidget } from "@/components/service/SupportWidget";

type Params = { position: string };

export function generateStaticParams(): Params[] {
  return KARRIER_POSITIONS.map((p) => ({ position: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { position } = await params;
  const pos = getKarrierPosition(position);
  if (!pos) return {};
  return {
    title: `${pos.title} – Karrier | A1 Solar`,
    description: pos.teaser,
    alternates: { canonical: `/karrier/${pos.slug}` },
    openGraph: { title: `${pos.title} – Karrier`, description: pos.teaser },
  };
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
    <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DetailCard = ({ id, title, items }: { id: string; title: string; items: string[] }) => (
  <div id={id} className="rounded-[20px] p-6 md:p-8" style={{ background: "var(--surface-3)", scrollMarginTop: "100px" }}>
    <h2 className="text-sm font-semibold uppercase tracking-[0.5px] text-[var(--ink)]" style={{ marginBottom: "16px" }}>
      {title}
    </h2>
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[var(--ink-soft)]">
          <span className="mt-0.5 shrink-0" style={{ color: "var(--brand)" }} aria-hidden>
            <CheckIcon />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default async function KarrierPositionPage({ params }: { params: Promise<Params> }) {
  const { position } = await params;
  const pos = getKarrierPosition(position);
  if (!pos) notFound();

  const toc = [
    { id: "feladatok", label: "Feladatok" },
    ...(pos.requirements ? [{ id: "elvarasok", label: "Elvárások" }] : []),
    ...(pos.plus ? [{ id: "elonyt-jelent", label: "Előnyt jelent" }] : []),
    ...(pos.offer ? [{ id: "amit-kinalunk", label: "Amit kínálunk" }] : []),
    { id: "jelentkezes", label: "Jelentkezés" },
  ];

  return (
    <article>
      <NotchHero
        eyebrow="Nyitott pozíció"
        titleStrong={pos.title}
        image={KARRIER_HERO_IMAGE}
        imageAlt={`${pos.title} – A1 Solar karrier`}
        intro={pos.summary}
        ctaLabel="Jelentkezem"
        ctaHref="#jelentkezes"
      />

      <div className="container">
        <hr className="my-12 md:my-16" style={{ border: 0, borderTop: "1px dashed #ececec" }} />
      </div>

      <section className="w-full pb-0">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-0">
            {/* Main — detail cards + application form */}
            <div className="lg:pr-10">
              <div className="flex flex-col gap-6">
                <DetailCard id="feladatok" title="Feladatok" items={pos.tasks} />
                {pos.requirements ? <DetailCard id="elvarasok" title="Elvárások" items={pos.requirements} /> : null}
                {pos.plus ? <DetailCard id="elonyt-jelent" title="Előnyt jelent" items={pos.plus} /> : null}
                {pos.offer ? <DetailCard id="amit-kinalunk" title="Amit kínálunk" items={pos.offer} /> : null}
              </div>

              <div className="mt-6 rounded-[20px] p-6 md:p-8" style={{ background: "var(--surface-3)" }}>
                <span className="font-semibold text-[var(--ink)]">Munkavégzés helye:</span>{" "}
                <span className="text-[var(--ink-soft)]">{pos.location}</span>
              </div>

              <div id="jelentkezes" className="mt-10" style={{ scrollMarginTop: "100px" }}>
                <KarrierApplyForm positionTitle={pos.title} />
              </div>
            </div>

            {/* Sidebar — in-page navigation + customer-service widget */}
            <aside className="lg:border-l lg:border-dashed lg:border-[#ececec] lg:pl-10">
              <div className="flex flex-col gap-6 lg:sticky lg:top-[110px]">
                <ServiceTocNav items={toc} />
                <SupportWidget />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
}
