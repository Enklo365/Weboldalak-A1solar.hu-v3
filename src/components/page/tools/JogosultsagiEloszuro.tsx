import { ContactForm } from "@/components/ContactForm";

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span
      className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full"
      style={{ background: "rgba(22,163,74,0.12)", color: "#16a34a" }}
      aria-hidden
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    <span className="text-[var(--ink-soft)]">{children}</span>
  </li>
);

/** Native eligibility pre-screen page — intro + criteria + lead form. */
export const JogosultsagiEloszuro = () => (
  <>
    <section className="w-full py-14 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-[720px] text-center">
          <span
            className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
            style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
          >
            Jogosultsági előszűrő
          </span>
          <h1 style={{ marginTop: 16, fontSize: "clamp(30px, 5vw, 46px)", lineHeight: 1.1 }}>
            <span style={{ fontWeight: 300 }}>Nézzük meg, </span>
            <span style={{ fontWeight: 700 }}>jogosult vagy-e!</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-lg text-[var(--ink-soft)]">
            Töltsd ki az űrlapot, és kollégánk pár kérdés alapján visszajelez, milyen
            támogatási és finanszírozási lehetőségek érhetők el számodra.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[820px]">
          <div className="rounded-[28px] p-6 md:p-8" style={{ background: "var(--surface-3)" }}>
            <h2 style={{ marginBottom: 16, fontSize: "20px", fontWeight: 500 }}>
              Néhány szempont, amit vizsgálunk
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              <CheckItem>Ingatlan típusa és tulajdonviszonya</CheckItem>
              <CheckItem>Jelenlegi fűtési és áramfogyasztási profil</CheckItem>
              <CheckItem>Tervezett beruházás (napelem, energiatároló, szigetelés)</CheckItem>
              <CheckItem>Elérhető pályázati és hitelkonstrukciók</CheckItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full pb-16 md:pb-24">
      <div className="container" style={{ display: "grid", placeItems: "center" }}>
        <ContactForm
          bare
          formName="Jogosultsági előszűrő"
          heading="Indítsuk el az előszűrést!"
          intro="Add meg elérhetőségeidet és néhány alapadatot – kollégánk hamarosan visszajelez a lehetőségeidről."
          submitLabel="Előszűrés indítása"
        />
      </div>
    </section>
  </>
);
