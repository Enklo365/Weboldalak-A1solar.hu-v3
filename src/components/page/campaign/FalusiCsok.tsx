import { ContactForm } from "@/components/ContactForm";

/** Small brand-tint pill used as a section eyebrow. */
const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

/** Inline brand-red check mark for the benefit lists. */
const CheckIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <circle cx="12" cy="12" r="12" fill="var(--brand)" />
    <path
      d="M7 12.5l3 3 7-7"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HERO_BENEFITS: string[] = [
  "Napelemes rendszer",
  "Okosotthon rendszer",
  "Energiatároló",
  "Hőszivattyú",
  "Akár ügyintézéssel is!",
];

/**
 * "Falusi CSOK" támogatás-landing — bespoke natív újraépítés az A1 Solar
 * design-nyelvén: hero a támogatással felszerelhető technológiák pipás
 * listájával, rövid „hogyan segítünk” szekció és kapcsolatfelvételi űrlap.
 */
export const FalusiCsok = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>Támogatás</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>Falusi CSOK </span>
          <span style={{ fontWeight: 700 }}>2024</span>
        </h1>
        <p
          className="mx-auto mt-6 text-[var(--ink-soft)]"
          style={{ maxWidth: "680px", marginTop: "20px", fontSize: "clamp(17px, 2.2vw, 20px)", lineHeight: 1.7 }}
        >
          Tervezz okosan, élj korszerűen! A Falusi CSOK lehetőséget nyújt, hogy otthonod a legmodernebb
          technológiákkal szereld fel. Használd ki a támogatást, és tedd otthonodat energiatakarékossá!
        </p>
        <ul
          className="mx-auto flex max-w-[560px] flex-col gap-4 text-left"
          style={{ listStyle: "none", padding: 0, margin: "36px auto 0" }}
        >
          {HERO_BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-[var(--ink)]" style={{ fontSize: "clamp(16px, 2vw, 19px)" }}>
                {benefit}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <a
            href="#ajanlatkeres"
            style={{
              display: "inline-block",
              background: "var(--brand)",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "9999px",
              fontWeight: 500,
            }}
          >
            További információ
          </a>
        </div>
      </div>
    </section>

    {/* HOGYAN SEGÍTÜNK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-[1fr_1.1fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>Korszerű otthon</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              Tedd otthonodat energiatakarékossá!
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              A Falusi CSOK lehetőséget nyújt, hogy otthonod a legmodernebb technológiákkal szereld fel.
              Segítünk kiválasztani és összehangolni a támogatással megvalósítható korszerűsítéseket — akár
              a teljes ügyintézéssel is.
            </p>
          </div>

          <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {HERO_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* AJÁNLATKÉRÉS */}
    <section id="ajanlatkeres" className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Kapcsolatfelvétel</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Munkatársunk 24 órán belül felveszi Veled a kapcsolatot!
          </h2>
        </div>

        <div className="mt-10">
          <ContactForm
            bare
            formName="Falusi CSOK"
            heading="Kérd ingyenes tájékoztatásunkat!"
            intro="Töltsd ki az űrlapot, és kollégánk segít a Falusi CSOK és a napelemes beruházás összehangolásában."
          />
        </div>
      </div>
    </section>
  </div>
);
