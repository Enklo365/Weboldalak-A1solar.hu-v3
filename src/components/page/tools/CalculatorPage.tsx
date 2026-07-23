import { ContactForm } from "@/components/ContactForm";
import { SolarCalculator } from "@/components/page/tools/SolarCalculator";

type Segment = "residential" | "commercial";

const COPY = {
  residential: {
    eyebrow: "Lakossági",
    titleLight: "Napelem",
    titleStrong: "kalkulátor",
    lead: "Nullázd le villanyszámládat az A1 Solar napelemes rendszereivel. Mozgasd a csúszkát a jelenlegi havi számládhoz, és nézd meg, mekkora rendszerre van szükséged!",
    formName: "Lakossági napelem kalkulátor",
    formHeading: "Kérd személyre szabott ajánlatunkat!",
    formIntro: "Add meg elérhetőségeidet, és kollégánk pontos, felmérésen alapuló ajánlatot készít otthonodra.",
  },
  commercial: {
    eyebrow: "Vállalati",
    titleLight: "Napelem",
    titleStrong: "kalkulátor",
    lead: "Csökkentsd vagy tüntesd el vállalkozásod villanyszámláját. Állítsd be a céged havi áramköltségét, és lásd, mekkora rendszer illik hozzá – pályázati és hitellehetőségekkel.",
    formName: "Vállalati napelem kalkulátor",
    formHeading: "Kérj céges megtérülési kalkulációt!",
    formIntro: "Add meg elérhetőségeidet, és kollégánk céged fogyasztási profiljára szabott ajánlatot és megtérülési számítást készít.",
  },
} as const;

/** Native calculator landing: split hero, live estimator, lead form. */
const CalculatorPage = ({ segment }: { segment: Segment }) => {
  const c = COPY[segment];
  return (
    <>
      <section className="w-full py-14 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-[720px] text-center">
            <span
              className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
              style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
            >
              {c.eyebrow}
            </span>
            <h1 style={{ marginTop: 16, fontSize: "clamp(30px, 5vw, 46px)", lineHeight: 1.1 }}>
              <span style={{ fontWeight: 300 }}>{c.titleLight} </span>
              <span style={{ fontWeight: 700 }}>{c.titleStrong}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[620px] text-lg text-[var(--ink-soft)]">{c.lead}</p>
          </div>
          <div className="mx-auto mt-10 max-w-[820px]">
            <SolarCalculator segment={segment} />
          </div>
        </div>
      </section>
      <section className="w-full pb-16 md:pb-24">
        <div className="container" style={{ display: "grid", placeItems: "center" }}>
          <ContactForm bare formName={c.formName} heading={c.formHeading} intro={c.formIntro} />
        </div>
      </section>
    </>
  );
};

/** Residential solar calculator page (`/lakossagi-napelem-kalkulator`). */
export const LakossagiKalkulator = () => <CalculatorPage segment="residential" />;

/** Commercial solar calculator page (`/vallalati-napelem-kalkulator`). */
export const VallalatiKalkulator = () => <CalculatorPage segment="commercial" />;
