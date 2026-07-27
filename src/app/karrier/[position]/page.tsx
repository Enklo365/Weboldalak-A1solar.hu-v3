import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { getKarrierPosition, KARRIER_POSITIONS } from "@/components/page/marketing/karrierData";

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

const DetailList = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h2 className="text-sm font-semibold uppercase tracking-[0.5px] text-[var(--ink)]" style={{ marginBottom: "14px" }}>
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

  return (
    <article>
      {/* Header band */}
      <div className="w-full py-12 md:py-16" style={{ background: "var(--surface-3)" }}>
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-[var(--ink-muted)]" aria-label="Morzsamenü">
            <Link href="/" className="hover:text-[var(--brand)]">
              Kezdőlap
            </Link>
            <span>/</span>
            <Link href="/karrier" className="hover:text-[var(--brand)]">
              Karrier
            </Link>
            <span>/</span>
            <span className="text-[var(--ink-soft)]">{pos.title}</span>
          </nav>
          <span
            className="mt-6 inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
            style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
          >
            Nyitott pozíció
          </span>
          <h1 className="text-[var(--ink)]" style={{ marginTop: "16px", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, lineHeight: 1.15 }}>
            {pos.title}
          </h1>
        </div>
      </div>

      {/* Body */}
      <section className="w-full py-14 md:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <p className="max-w-[820px] text-lg text-[var(--ink-soft)]" style={{ lineHeight: 1.7 }}>
                {pos.summary}
              </p>

              <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
                <DetailList title="Feladatok" items={pos.tasks} />
                {pos.requirements ? <DetailList title="Elvárások" items={pos.requirements} /> : null}
                {pos.plus ? <DetailList title="Előnyt jelent" items={pos.plus} /> : null}
                {pos.offer ? <DetailList title="Amit kínálunk" items={pos.offer} /> : null}
              </div>

              <div className="mt-10 rounded-[18px] p-6" style={{ background: "var(--surface-3)" }}>
                <span className="font-semibold text-[var(--ink)]">Munkavégzés helye:</span>{" "}
                <span className="text-[var(--ink-soft)]">{pos.location}</span>
                <p className="mt-2 text-sm text-[var(--ink-muted)]">
                  Jelentkezés az űrlap kitöltésével, fényképes önéletrajz csatolásával.
                </p>
              </div>
            </div>

            {/* Application form */}
            <aside id="jelentkezes" style={{ scrollMarginTop: "var(--header-h)" }}>
              <div className="lg:sticky lg:top-[110px]">
                <ContactForm
                  bare
                  formName={`Karrier jelentkezés – ${pos.title}`}
                  heading="Jelentkezz erre a pozícióra!"
                  intro="Töltsd ki az űrlapot — kollégánk hamarosan jelentkezik. (Az önéletrajzot kérjük e-mailben juttasd el hozzánk, mert az űrlap fájlcsatolást nem támogat.)"
                />
              </div>
            </aside>
          </div>

          <div className="mt-14">
            <Link href="/karrier" className="text-[var(--brand)] hover:underline">
              ← Vissza az összes pozícióhoz
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
