import Link from "next/link";
import { CompactLegalHero } from "@/components/page/TextPage";

/** Native "OEP szigetelés" placeholder page — coming-soon hero + contact CTA. */
export const Oepszigeteles = () => (
  <div className="pb-6 md:pb-8">
    <CompactLegalHero
      eyebrow="Otthoni Energiatároló Program"
      title="OEP szigetelés"
      intro="Ez az oldal hamarosan elérhető lesz. Addig is kollégáink készséggel állnak rendelkezésedre az Otthoni Energiatároló Programmal és a szigeteléssel kapcsolatban."
    />
    <section className="w-full">
      <div className="container text-page__layout text-center">
        <Link
          href="/kapcsolat"
          className="inline-flex items-center rounded-full transition-opacity hover:opacity-90"
          style={{ background: "var(--brand)", color: "#fff", padding: "14px 28px", fontSize: "15px", fontWeight: 500 }}
        >
          Kapcsolatfelvétel
        </Link>
      </div>
    </section>
  </div>
);
