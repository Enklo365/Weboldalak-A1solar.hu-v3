import { NotchHero } from "@/components/page/NotchHero";
import { ContactForm } from "@/components/ContactForm";
import { HeroDivider, SidebarLayout } from "@/components/service/SidebarLayout";
import { ServiceTocNav } from "@/components/service/ServiceTocNav";
import { SupportWidget } from "@/components/service/SupportWidget";
import { SITE } from "@/lib/site";

/** Small brand-tint pill used as a section eyebrow. */
const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

/** Inline brand-red check mark for benefit lists. */
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

/** Dashed row separator between the stacked main-column sections. */
const RowDivider = () => <hr style={{ border: 0, borderTop: "1px dashed #ececec", margin: "48px 0" }} />;

/** In-page navigation for the sidebar (mirrors the service subpages). */
const TOC: { id: string; label: string }[] = [
  { id: "a-programrol", label: "A programról" },
  { id: "palyazok-kore", label: "Pályázók köre" },
  { id: "mire-hasznalhato", label: "Mire használható fel?" },
  { id: "tamogatasi-intenzitas", label: "Támogatási intenzitás" },
  { id: "folyamat", label: "Folyamat" },
  { id: "miert-minket", label: "Miért válassz minket?" },
  { id: "ajanlatkeres", label: "Kapcsolat" },
];

/** Applicants who may take part in the programme. */
const APPLICANTS: string[] = [
  "Mikro-, kis-, középvállalkozások és nagyvállalatok",
  "Magyarországi székhellyel vagy fiókteleppel rendelkező jogi személyek",
  "Akik rendelkeznek legalább 1 lezárt üzleti évvel",
  "Akik saját telephelyen, fióktelepen vagy hosszú távon használt helyszínen valósítják meg a beruházást",
];

/** Optional (selectable) elements the support can be used for. */
const OPTIONAL_USES: string[] = [
  "Napelemes rendszer telepítése",
  "Szélgenerátor",
  "Projektelőkészítés, tervezés, engedélyezés",
  "Vezérlőrendszerek, mérőhely korszerűsítés",
  "Kapcsolódó építési és műszaki tevékenységek",
];

/** Support intensity per company size. */
type IntensityRow = { size: string; intensity: string };

const INTENSITY_ROWS: IntensityRow[] = [
  { size: "Mikro- és kisvállalkozás", intensity: "50%" },
  { size: "Középvállalkozás", intensity: "40%" },
  { size: "Nagyvállalat", intensity: "30%" },
];

/** Five reasons to install energy storage alongside solar. */
type Reason = { number: string; title: string; text: string };

const REASONS: Reason[] = [
  {
    number: "I.",
    title: "Saját fogyasztás maximalizálása",
    text: "Az energiát akkor is felhasználhatja a cég, amikor nem süt a nap – ezáltal csökken a hálózatról vásárolt áram mennyisége.",
  },
  {
    number: "II.",
    title: "Ha visszwattos a meglévő rendszered",
    text: "Nem vész el az energiatermelés lehetősége, amikor többet termelne a napelemes rendszer, mint amekkora a pillanatnyi felhasználás.",
  },
  {
    number: "III.",
    title: "Energiaköltség-csökkentés",
    text: "Csúcsidei hálózati energia kiváltásával (pl. vezérelt tárolás és kisütés) mérsékelhetők a drágább tarifák.",
  },
  {
    number: "IV.",
    title: "Gyors megtérülés",
    text: "Már önerős beruházásként is 3-4 éves megtérülési idők érhetők el, támogatással pedig akár éven belül is térülhet.",
  },
  {
    number: "V.",
    title: "Későbbi villamosenergia-piaci nyitás előnyei",
    text: "A rugalmas energiahasználat révén akár árampiaci szereplőként is működhet a vállalkozás (pl. időalapú kisütés, aggregátorprogramok).",
  },
];

/** Steps of the application process. */
type ProcessStep = { number: string; text: string };

const PROCESS_STEPS: ProcessStep[] = [
  { number: "01", text: "Töltsd ki a kapcsolatfelvételi űrlapunkat – pár perc az egész." },
  {
    number: "02",
    text: "Szakértőink felveszik veled a kapcsolatot, és egyeztetnek a céged műszaki lehetőségeiről, terveiről.",
  },
  { number: "03", text: "Elkészítjük a szükséges műszaki dokumentációt és ajánlatot a kivitelezésre." },
  { number: "04", text: "Mi intézzük a dokumentációt is – partnercégünk tapasztalt pályázatíró csapatával." },
  {
    number: "05",
    text: "A projekt kivitelezését az A1 Solar bonyolítja le, így minden egy kézben marad – egyszerűen, gördülékenyen.",
  },
];

/**
 * "Jedlik Ányos Energetikai Program" pályázati landing — a megosztott
 * sidebar + notch-hero elrendezésben (a szolgáltatás-aloldalak és az OEP oldal
 * mintájára): notch-kivágásos hero, majd a fő oszlopban a tartalmi szekciók
 * (program bemutatása, pályázói kör, felhasználható tevékenységek, támogatási
 * intenzitás, indokok, folyamat, cégünkről, kapcsolatfelvételi űrlap), oldalt
 * pedig a sticky navigáció + ügyfélszolgálat.
 */
export const JedlikAnyosEnergetikaiProgram = () => {
  const sidebar = (
    <>
      <ServiceTocNav items={TOC} />
      <SupportWidget />
    </>
  );

  return (
    <div className="w-full">
      <NotchHero
        eyebrow="Jedlik Ányos Program"
        titleLight="Jedlik Ányos"
        titleStrong="Energetikai Program"
        image="/wp-content/uploads/2025/06/jedlik-anyos-energetikai-program-2-1.png"
        imageAlt="Jedlik Ányos Energetikai Program"
        intro="Akár 1 milliárd forint vissza nem térítendő támogatás cégednek – a felhívás alapján 30–50%-os támogatási intenzitással energiatároló és megújuló energiát termelő rendszerek telepítésére."
        ctaLabel="Ingyenes konzultáció"
        ctaHref="#ajanlatkeres"
      />

      <HeroDivider />

      <SidebarLayout sidebar={sidebar}>
        {/* A PROGRAM BEMUTATÁSA */}
        <section id="a-programrol" style={{ scrollMarginTop: "100px" }}>
          <div
            className="grid grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-[1.1fr_1fr] md:gap-12 md:px-12 md:py-14"
            style={{ background: "var(--surface-3)", borderRadius: "28px" }}
          >
            <div>
              <Eyebrow>A programról</Eyebrow>
              <h2
                className="text-[var(--ink)]"
                style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
              >
                Akár 1 milliárd forint támogatás cégednek
              </h2>
              <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                Összefoglaltuk a legfontosabb tudnivalókat: kik pályázhatnak, mire igényelhető forrás,
                mekkora összegre, és hogyan segít az A1 Solar a teljes megvalósításban – az
                előminősítéstől a kivitelezésig.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/2025/06/jedlik-anyos-energetikai-program-2-1.png"
              alt="Jedlik Ányos Energetikai Program"
              loading="lazy"
              style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "20px" }}
            />
          </div>
        </section>

        <RowDivider />

        {/* KIRE VONATKOZIK */}
        <section id="palyazok-kore" style={{ scrollMarginTop: "100px" }}>
          <Eyebrow>Pályázók köre</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Kinek szól a Jedlik Ányos Energetikai Program?
          </h2>
          <ul
            className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2"
            style={{ listStyle: "none", padding: 0, margin: "32px 0 0" }}
          >
            {APPLICANTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 px-6 py-6"
                style={{ background: "var(--surface-3)", borderRadius: "20px" }}
              >
                <CheckIcon />
                <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <RowDivider />

        {/* MIRE FORDÍTHATÓ */}
        <section id="mire-hasznalhato" style={{ scrollMarginTop: "100px" }}>
          <Eyebrow>Támogatható tevékenységek</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Mire használható fel?
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[1fr_1.4fr]">
            <div
              className="px-8 py-9"
              style={{
                background: "rgba(194,29,32,0.06)",
                borderRadius: "24px",
                borderLeft: "4px solid var(--brand)",
              }}
            >
              <span
                className="inline-block rounded-[30px] px-3 py-1 text-xs font-semibold uppercase tracking-[1px]"
                style={{ background: "var(--brand)", color: "#fff" }}
              >
                Kötelező elem
              </span>
              <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                A támogatás kötelező elemeként energiatároló egységek/létesítmény beszerzése (villamos-,
                vagy hőenergia) szükséges.
              </p>
            </div>

            <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
              <h3
                className="text-[var(--ink)]"
                style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}
              >
                Választható elemek
              </h3>
              <ul className="mt-5 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: "20px 0 0" }}>
                {OPTIONAL_USES.map((use) => (
                  <li key={use} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.5 }}>
                      {use}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <RowDivider />

        {/* TÁMOGATÁS ÖSSZEGE ÉS MÉRTÉKE */}
        <section id="tamogatasi-intenzitas" style={{ scrollMarginTop: "100px" }}>
          <Eyebrow>Támogatási intenzitás</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            A támogatás összege és mértéke
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div
              className="flex flex-col justify-center px-8 py-10"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <p className="text-[var(--ink-muted)]" style={{ margin: 0, fontSize: "14px" }}>
                Igényelhető támogatás összege
              </p>
              <p
                className="text-[var(--ink)]"
                style={{ margin: 0, marginTop: "6px", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700 }}
              >
                Min. 10 millió Ft – Max. 1 milliárd Ft
              </p>
              <p className="mt-4 text-[var(--ink-soft)]" style={{ marginTop: "16px", fontSize: "16px", lineHeight: 1.6 }}>
                Előleg is kérhető, a támogatás akár 30%-ának mértékéig!
              </p>
            </div>

            <div className="px-8 py-8" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
              <div
                className="flex items-center justify-between py-3"
                style={{ borderBottom: "2px solid var(--line)" }}
              >
                <span className="text-[var(--ink-muted)]" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Vállalatméret
                </span>
                <span className="text-[var(--ink-muted)]" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Támogatási intenzitás
                </span>
              </div>
              {INTENSITY_ROWS.map((row) => (
                <div
                  key={row.size}
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: "1px solid var(--line)" }}
                >
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px" }}>
                    {row.size}
                  </span>
                  <span style={{ color: "var(--brand)", fontSize: "22px", fontWeight: 700 }}>
                    {row.intensity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RowDivider />

        {/* MIÉRT ÉRI MEG */}
        <section id="miert-eri-meg" style={{ scrollMarginTop: "100px" }}>
          <Eyebrow>Miért éri meg?</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            5 ok, amiért megéri energiatárolót telepíteni
          </h2>
          <p className="mt-4 text-[var(--ink-soft)]" style={{ maxWidth: "680px", fontSize: "16px", lineHeight: 1.6 }}>
            Az energiatároló rendszerek a napelemes beruházások hatékonyságát és megtérülését
            jelentősen növelik.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((reason) => (
              <div
                key={reason.number}
                className="flex flex-col px-7 py-8"
                style={{ background: "var(--surface-3)", borderRadius: "24px" }}
              >
                <span style={{ color: "var(--brand)", fontSize: "28px", fontWeight: 700, lineHeight: 1 }}>
                  {reason.number}
                </span>
                <h3
                  className="text-[var(--ink)]"
                  style={{ margin: 0, marginTop: "14px", fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}
                >
                  {reason.title}
                </h3>
                <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <RowDivider />

        {/* FOLYAMAT */}
        <section id="folyamat" style={{ scrollMarginTop: "100px" }}>
          <Eyebrow>Folyamat</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Hogyan pályázhatsz?
          </h2>
          <p className="mt-4 text-[var(--ink-soft)]" style={{ maxWidth: "680px", fontSize: "16px", lineHeight: 1.6 }}>
            Nem vagy egyedül a folyamatban – mi végigkísérünk! Így zajlik a pályázás menete:
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="flex flex-col px-7 py-8"
                style={{ background: "var(--surface-3)", borderRadius: "24px" }}
              >
                <span
                  className="flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "9999px",
                    background: "var(--brand)",
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  {step.number}
                </span>
                <p className="mt-5 text-[var(--ink-soft)]" style={{ marginTop: "20px", fontSize: "16px", lineHeight: 1.6 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <RowDivider />

        {/* MIÉRT MINKET */}
        <section id="miert-minket" style={{ scrollMarginTop: "100px" }}>
          <div
            className="px-8 py-12 md:px-12 md:py-14"
            style={{ background: "var(--surface-3)", borderRadius: "28px" }}
          >
            <Eyebrow>Cégünkről</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              Miért válassz minket?
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5">
              <p className="text-[var(--ink-soft)]" style={{ margin: 0, fontSize: "16px", lineHeight: 1.7 }}>
                Cégünk teljes körű támogatást nyújt a pályázati ügyintézésben, beleértve a szükséges
                dokumentumok előkészítését és benyújtását. Szakértelmünk révén hatékonyan ötvözzük a
                napelemes rendszereket az intelligens eszközökkel, hogy energiafogyasztását optimalizáljuk.
              </p>
              <p className="text-[var(--ink-soft)]" style={{ margin: 0, fontSize: "16px", lineHeight: 1.7 }}>
                Több mint 10 éves tapasztalatunkkal és több mint 5000 telepített rendszerrel garantáljuk
                a megbízhatóságot, a szakértelmet és a biztonságot. Átfogó szolgáltatásaink az első
                konzultációtól egészen a fenntartásig tartanak.
              </p>
            </div>
          </div>
        </section>

        <RowDivider />

        {/* KAPCSOLATFELVÉTEL */}
        <section id="ajanlatkeres" style={{ scrollMarginTop: "100px" }}>
          <Eyebrow>Kapcsolatfelvétel</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Ne hagyd ki ezt a lehetőséget!
          </h2>
          <p className="mt-4 text-[var(--ink-soft)]" style={{ maxWidth: "760px", fontSize: "16px", lineHeight: 1.7 }}>
            A Jedlik Ányos Energetikai Program segítségével vállalkozásod akár 50%-os vissza nem
            térítendő támogatást kaphat energiatároló és megújuló energiát hasznosító rendszerek
            telepítésére. Töltsd ki az alábbi űrlapot és foglald le az első konzultációt, hogy az
            elsők között élhess a lehetőségekkel!
          </p>
          <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px" }}>
            Vagy hívjon minket most:{" "}
            <a href={`tel:${SITE.phoneRaw}`} style={{ color: "var(--brand)", fontWeight: 700 }}>
              {SITE.phoneDisplay}
            </a>
          </p>

          <div className="mt-8">
            <ContactForm
              bare
              formName="Jedlik Ányos Energetikai Program"
              heading="Kérd pályázati kalkulációnkat!"
              intro="Töltsd ki az űrlapot, és kollégánk segít a pályázat teljes ügyintézésében."
            />
          </div>
        </section>
      </SidebarLayout>
    </div>
  );
};
