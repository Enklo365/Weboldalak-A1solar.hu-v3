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
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
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

type Benefit = { title: string; text: string };

/** Mit nyer az ingyenes helyszíni felméréssel? — a kivonat H3 pontjai. */
const SURVEY_BENEFITS: Benefit[] = [
  {
    title: "Pontosabb műszaki tartalmat",
    text: "A helyszíni adottságok alapján készülő rendszerterv megbízhatóbb alapot ad a megfelelő műszaki megoldás kialakításához.",
  },
  {
    title: "Pontosabb képet a lehetőségekről és a költségekről",
    text: "Pontos képet kap arról, hogy a ház elektromos rendszerének adottságai alapján milyen műszaki megoldás alakítható ki, és ez milyen költségekkel valósítható meg, a pályázati szabályok figyelembevételével.",
  },
  {
    title: "Nagyobb pályázati biztonságot",
    text: "A pályázatkompatibilis, megfelelően előkészített műszaki megoldás csökkenti a hibák és a későbbi módosítások kockázatát.",
  },
  {
    title: "Jobb engedélyezhetőséget",
    text: "A kritikus műszaki szempontok már a tervezés elején figyelembe vehetők, így a rendszer engedélyeztetése biztosabb alapokra épülhet.",
  },
];

/** Amit az A1 Solar garantál — a kivonat felsorolása. */
const GUARANTEES: string[] = [
  "10+ év szakmai tapasztalat a megújuló energia piacán",
  "Országos lefedettség, gyors és átlátható ügyintézés",
  "40+ fős szakértői csapat, saját kivitelezéssel",
  "Teljes körű garancia a telepített rendszerekre",
  "Több milliárd forintos árbevétel, stabil vállalati háttér",
];

/**
 * „OEP helyszíni felmérés” igénylő-landing — bespoke natív újraépítés az A1 Solar
 * design-nyelvén: hero + ingyenes helyszíni felmérés jelentősége, mit nyer vele az
 * ügyfél, miért az A1 Solart válassza, és záró igénylő űrlap.
 */
export const OepHelysziniFelmeres = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>Helyszíni felmérés</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>Jóváhagyták a pályázatát? </span>
          <span style={{ fontWeight: 700 }}>Bízza ránk a kivitelezést!</span>
        </h1>
        <p
          className="mx-auto text-[var(--ink-soft)]"
          style={{
            maxWidth: "760px",
            marginTop: "20px",
            fontSize: "clamp(17px, 2.2vw, 20px)",
            lineHeight: 1.7,
          }}
        >
          Az Otthoni Energiatároló Program igazolási szakaszában fontos a megfelelő kivitelező kiválasztása.
          Az A1 Solar ingyenes helyszíni felméréssel segít, hogy rendszere pályázatkompatibilis,
          engedélyezhető és hosszú távon megbízható legyen, miközben időben feltárja az esetleges
          többletköltségeket okozó műszaki tényezőket.
        </p>
        <div className="mt-10">
          <a
            href="#igenyles"
            style={{
              display: "inline-block",
              background: "var(--brand)",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "9999px",
              fontWeight: 500,
            }}
          >
            Ingyenes helyszíni felmérést kérek
          </a>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/wp-content/uploads/2025/07/a1solar_badgek-1024x127.png"
          alt="A1 Solar minősítések"
          loading="lazy"
          className="mx-auto mt-12"
          style={{ maxWidth: "560px", width: "100%" }}
        />
      </div>
    </section>

    {/* MIÉRT FONTOS A HELYSZÍNI FELMÉRÉS */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-[1.1fr_1fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>Helyszíni felmérés</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              A legjobb tervezés a helyszínen kezdődik
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              Egy előzetes ajánlat sokszor csak általános adatokra épül, a pontos tervezéshez viszont
              ismerni kell az ingatlan valós műszaki adottságait. Az A1 Solar ingyenes helyszíni felmérése
              segít meghatározni, milyen energiatároló rendszer illeszkedik az ingatlanhoz és a meglévő
              napelemes rendszerhez. A felmérés során időben kiderülhetnek azok a műszaki tényezők is,
              amelyek később többletköltséget okozhatnának.
            </p>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              Így a szükséges elemek még időben bekerülhetnek a végleges műszaki tartalomba, és csökkenthető
              annak kockázata, hogy a kivitelezés során el nem számolható költségek merüljenek fel.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wp-content/uploads/2025/10/ingyenespadlasszigeteles.png"
            alt="Ingyenes helyszíni felmérés"
            loading="lazy"
            style={{ width: "100%", borderRadius: "20px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>

    {/* ELFOGADOTT PÁLYÁZAT UTÁNI DÖNTÉSEK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-[820px] text-center">
          <Eyebrow>Döntések</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Az elfogadott pályázat után következnek a legfontosabb döntések
          </h2>
          <p className="mt-6 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            A pályázat elfogadása után az egyik legfontosabb feladat a megfelelő műszaki tartalom
            meghatározása. Ez nemcsak a szakmailag megalapozott tervezéshez elengedhetetlen, hanem a
            pályázat további lépéseihez, mivel a napelemes rendszer engedélyeztetése csak a végleges műszaki
            tartalom alapján indítható el.
          </p>
          <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            A nem megfelelő műszaki tervezés a pályázat későbbi lépéseiben is problémát okozhat, többek
            között a műszaki megfelelőség, az engedélyezés, a dokumentáció és az elszámolhatóság területén.
          </p>
        </div>
      </div>
    </section>

    {/* MIT NYER A FELMÉRÉSSEL */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Miért éri meg?</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Mit nyer az ingyenes helyszíni felméréssel?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SURVEY_BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="px-8 py-8"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <div className="flex items-start gap-3">
                <CheckIcon />
                <h3
                  className="text-[var(--ink)]"
                  style={{ margin: 0, fontSize: "clamp(18px, 2.4vw, 22px)", fontWeight: 600, lineHeight: 1.3 }}
                >
                  {benefit.title}
                </h3>
              </div>
              <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MIÉRT VÁLASSZON MINKET */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-[1fr_1.1fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>Cégünkről</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              Miért válasszon minket?
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              Az A1 Solar Kft. több mint egy évtizede foglalkozik napelemes rendszerek és energiatárolási
              megoldások tervezésével és kivitelezésével. Tapasztalatunk lehetővé teszi, hogy ügyfeleink
              számára biztonságos, hosszú távon is megbízható rendszereket kínáljunk.
            </p>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              Az A1 Solart az innováció, a fenntarthatóság és az ügyfélközpontú szemlélet jellemzi. Célunk,
              hogy a napelemes rendszerekhez kapcsolódó energiatárolással valódi, mérhető megtakarítást és
              nagyobb energiafüggetlenséget biztosítsunk a magyar háztartások számára.
            </p>
          </div>

          <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {GUARANTEES.map((guarantee) => (
              <li key={guarantee} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                  {guarantee}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* IGÉNYLÉS */}
    <section id="igenyles" className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Kapcsolatfelvétel</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Munkatársunk 48 órán belül felveszi Önnel a kapcsolatot
          </h2>
        </div>

        <div className="mt-10">
          <ContactForm
            bare
            formName="OEP helyszíni felmérés"
            heading="Kérj ingyenes helyszíni felmérést!"
            intro="Add meg elérhetőségeidet és a címet, kollégánk egyeztet egy időpontot."
            submitLabel="Felmérés kérése"
          />
        </div>
      </div>
    </section>
  </div>
);
