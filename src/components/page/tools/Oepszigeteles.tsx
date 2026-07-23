import Link from "next/link";

/** Native "OEP szigetelés" placeholder page — coming-soon hero + contact CTA. */
export const Oepszigeteles = () => (
  <section className="w-full py-20 md:py-28">
    <div className="container">
      <div className="mx-auto max-w-[640px] text-center">
        <span
          className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
          style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
        >
          Otthoni Energiatároló Program
        </span>
        <h1 style={{ marginTop: 16, fontSize: "clamp(30px, 5vw, 46px)", lineHeight: 1.1, fontWeight: 600 }}>
          OEP szigetelés
        </h1>
        <p className="mx-auto mt-5 max-w-[520px] text-lg text-[var(--ink-soft)]">
          Ez az oldal hamarosan elérhető lesz. Addig is kollégáink készséggel állnak
          rendelkezésedre az Otthoni Energiatároló Programmal és a szigeteléssel kapcsolatban.
        </p>
        <Link
          href="/kapcsolat"
          className="mt-8 inline-flex items-center rounded-full transition-opacity hover:opacity-90"
          style={{ background: "var(--brand)", color: "#fff", padding: "14px 28px", fontSize: "15px", fontWeight: 500 }}
        >
          Kapcsolatfelvétel
        </Link>
      </div>
    </div>
  </section>
);
