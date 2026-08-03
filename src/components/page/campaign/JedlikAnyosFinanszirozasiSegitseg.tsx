import { ContactForm } from "@/components/ContactForm";
import { NotchHero } from "@/components/page/NotchHero";
import { HeroDivider, SidebarLayout } from "@/components/service/SidebarLayout";
import { ServiceTocNav, type TocItem } from "@/components/service/ServiceTocNav";
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

/** Bevezető bekezdések a hero alatt. */
const HERO_INTRO: string[] = [
  "A Jedlik Ányos pályázat nagy lehetőség vállalati energiatárolós projektek kivitelezésére, ugyanakkor jelentős finanszírozási terhet ró a kivitelezőkre, mivel a támogatás kifizetése csak a projekt lezárása után történik.",
  "Az A1 Solar ebben segít: átvállaljuk a finanszírozási terheket, így nem szükséges több tíz vagy százmillió forintot előre biztosítanod az eszközökre és munkálatokra. Neked csak a szakmai kivitelezésre kell összpontosítanod – mi pedig biztosítjuk a pénzügyi hátteret.",
  "Ha van projekted, de a finanszírozás akadályt jelent, segítünk megvalósítani.",
];

/** A gyakorlati folyamat lépései (I–VII). */
type ProcessStep = { num: string; title: string; text: string };

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "I.",
    title: "Te hozod a projektet és az ügyfelet",
    text: "Olyan vállalati ügyfelet, aki Jedlik Ányos pályázatban szeretne energiatárolós fejlesztést megvalósítani.",
  },
  {
    num: "II.",
    title: "Megvizsgáljuk, hogy alkalmas-e az ügyfél a pályázatra",
    text: "Megvizsgáljuk, hogy az ügyfél pályázati és műszaki szempontból alkalmas-e a támogatás igénybevételére.",
  },
  {
    num: "III.",
    title: "Együttműködési megállapodást kötünk a kivitelezésre",
    text: "Ebben rögzítjük a kivitelezési feladatokat, a műszaki tartalmat, a díjazásodat, valamint a fizetési és teljesítési struktúrát.",
  },
  {
    num: "IV.",
    title: "Mi szerződünk az ügyfeleddel",
    text: "Az A1 Solar köt kivitelezési szerződést a megrendelővel.",
  },
  {
    num: "V.",
    title: "Biztosítjuk az energiatárolót és a szükséges eszközöket",
    text: "A projektekhez Sigenergy, FoxESS, Huawei és Deye gyártók termékeit biztosítjuk, és megállapodás szerint a napelemes rendszer további elemeit is biztosítani tudjuk.",
  },
  {
    num: "VI.",
    title: "Mi viseljük az előfinanszírozás terhét",
    text: "A támogatás kifizetéséig az anyagfinanszírozást, a rendszerbeszerzést és a projekt teljes pénzügyi terhét az A1 Solar Kft. vállalja.",
  },
  {
    num: "VII.",
    title: "Elvégzed a kivitelezést",
    text: "A kivitelezés teljes egészében a Te szakmai irányításod és csapatod által történik.",
  },
];

/** Mit végez el a Blyxa Consulting a pályázatírásban. */
const GRANT_TASKS: string[] = [
  "elkészíti a teljes pályázati dokumentációt,",
  "menedzseli a beadást,",
  "kezeli a hiánypótlásokat,",
  "végigkíséri a projektet a kifizetésig.",
];

/** Kézzelfogható pénzügyi előnyök kivitelezőként. */
const BENEFITS: string[] = [
  "Nem kell több tíz- vagy százmillió forintot hónapokra lekötnöd",
  "Nem kell bankhitelt felvenned",
  "Nem nő a céged eladósodottsága",
  "Nem terheli a cash-flowd hosszú ideig",
  "Több projektet tudsz párhuzamosan futtatni",
  "Nem kell lemondanod jó ügyfelekről finanszírozási okból",
  "Kiszámítható pénzügyi háttérrel tudsz dolgozni",
];

/** Kinek ideális ez az együttműködés. */
const IDEAL_FOR: string[] = [
  "Vállalati ügyfélkörrel dolgoznak,",
  "Szeretnének Jedlik-projektekben részt venni,",
  "Rendelkeznek szakmai kivitelezési kapacitással,",
  "Nem szeretnének hónapokig előfinanszírozni,",
  "Nem akarnak banki hitelbe menni csak egy pályázat miatt.",
];

/** In-page navigáció a fő szakaszokhoz. */
const TOC: TocItem[] = [
  { id: "problema", label: "A probléma" },
  { id: "megoldas", label: "A megoldás" },
  { id: "hogyan-mukodik", label: "Hogyan működik" },
  { id: "palyazatiras", label: "Pályázatírás" },
  { id: "miert-eri-meg", label: "Miért éri meg" },
  { id: "kinek-szol", label: "Kinek szól" },
  { id: "ajanlatkeres", label: "Kapcsolat" },
];

/** Vékony szaggatott elválasztó a fő szakaszok között. */
const SectionDivider = () => (
  <hr className="my-10" style={{ border: 0, borderTop: "1px dashed #ececec" }} />
);

/**
 * "Jedlik Ányos finanszírozási segítség" landing — az A1 Solar megosztott
 * sidebar + notch-hero elrendezésébe rendezve: notch-hero, a finanszírozási
 * probléma és megoldás bemutatása, a gyakorlati folyamat lépései kártyákban,
 * a pályázatírás, a kivitelezői előnyök, a célközönség és a
 * kapcsolatfelvételi űrlap, mellette ragadós navigáció + ügyfélszolgálat.
 */
export const JedlikAnyosFinanszirozasiSegitseg = () => (
  <div className="pb-6 md:pb-8">
    <NotchHero
      eyebrow="Jedlik Ányos Finanszírozás"
      titleLight="Jedlik Ányos"
      titleStrong="finanszírozási segítség"
      image="/wp-content/uploads/2025/06/jedlik-anyos-energetikai-program-2-1.png"
      imageAlt="Jedlik Ányos energetikai program"
      intro={HERO_INTRO[0]}
      ctaLabel="Kérek konzultációt"
      ctaHref="#ajanlatkeres"
    />

    <HeroDivider />

    <SidebarLayout
      sidebar={
        <>
          <ServiceTocNav items={TOC} />
          <SupportWidget />
        </>
      }
    >
      {/* BEVEZETŐ */}
      <div className="flex flex-col gap-4">
        {HERO_INTRO.slice(1).map((paragraph) => (
          <p
            key={paragraph}
            className="text-[var(--ink-soft)]"
            style={{ margin: 0, fontSize: "16px", lineHeight: 1.75 }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <SectionDivider />

      {/* A PROBLÉMA */}
      <section id="problema" style={{ scrollMarginTop: "100px" }}>
        <div
          className="grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-[1fr_1.05fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>A probléma</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              A finanszírozás jelenti a legnagyobb akadályt
            </h2>
            <blockquote
              className="mt-6"
              style={{
                margin: "24px 0 0",
                padding: "16px 20px",
                borderLeft: "4px solid var(--brand)",
                background: "#fff",
                borderRadius: "14px",
                color: "var(--ink-soft)",
                fontSize: "15px",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              Pályázati felhívás: „12.3. Kifizetési kérelmek – A 100.000.000 Ft, azaz százmillió forint
              alatti támogatási összegű projektek esetében kifizetési kérelem kizárólag záró kifizetési
              kérelem keretében nyújtható be.”
            </blockquote>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <p className="text-[var(--ink-soft)]" style={{ margin: 0, fontSize: "16px", lineHeight: 1.7 }}>
              A Jedlik Ányos pályázat esetében a kivitelezőnek a támogatási összeg mintegy 70 százalékát
              előre kell finanszíroznia, miközben a támogatás csak a projekt lezárását követően érkezik
              meg, akár hónapokkal vagy egy évnél is hosszabb idő múlva. A banki hitel gyakran drága,
              lassú, vagy nem elérhető, ami a gyakorlatban azt eredményezi, hogy a kivitelező kevesebb
              projektet tud vállalni, nő a likviditási kockázat, és a finanszírozás jelentős
              költségtöbbletet terhel a projektre.
            </p>
            <p className="text-[var(--ink)]" style={{ margin: 0, fontSize: "16px", lineHeight: 1.7, fontWeight: 600 }}>
              Mi azért dolgozunk, hogy ez ne legyen akadály. Segítünk, hogy ne kelljen likviditási
              kockázat miatt nemet mondanod egyetlen projektre sem.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* A MEGOLDÁS */}
      <section id="megoldas" style={{ scrollMarginTop: "100px" }}>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
          <div>
            <Eyebrow>A megoldás</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              Az A1 Solar megoldása
            </h2>
            <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.75 }}>
              Az A1 Solar átvállalja a Jedlik-projektek finanszírozási terhét, miközben te maradsz a
              kivitelező, a munkát a saját áradon végzed, és ugyanúgy megkapod a díjad, mintha saját
              forrásból finanszíroznád a projektet. Nem kell hitelt felvenned, és nem te viseled a
              hónapokig tartó likviditási kockázatot.
            </p>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.75 }}>
              A modell célja egyszerű: te a kivitelezésre és az ügyfélkapcsolatokra fókuszálhatsz, míg a
              finanszírozási kockázatot mi kezeljük.
            </p>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/2025/06/jedlik-anyos-energetikai-program-2-1.png"
              alt="Jedlik Ányos energetikai program"
              loading="lazy"
              style={{ width: "100%", height: "auto", borderRadius: "24px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* HOGYAN MŰKÖDIK */}
      <section id="hogyan-mukodik" style={{ scrollMarginTop: "100px" }}>
        <div className="text-center">
          <Eyebrow>Hogyan működik?</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Hogyan működik a gyakorlatban?
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            Te hozod a projektet és az ügyfelet. Mi átvizsgáljuk a pályázati és műszaki feltételeket, majd
            megállapodást kötünk a kivitelezésről. A szükséges eszközöket és az energiatároló rendszert mi
            biztosítjuk, és mi vállaljuk az előfinanszírozást a támogatás kifizetéséig. A kivitelezést
            továbbra is a te csapatod végzi, a szakmai felügyelet pedig a te kezedben marad.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className="flex flex-col px-7 py-8"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <span
                aria-hidden="true"
                style={{ color: "var(--brand)", fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, lineHeight: 1 }}
              >
                {step.num}
              </span>
              <h3
                className="text-[var(--ink)]"
                style={{ margin: 0, marginTop: "16px", fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* PÁLYÁZATÍRÁS */}
      <section id="palyazatiras" style={{ scrollMarginTop: "100px" }}>
        <div
          className="grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-[1fr_1fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>Pályázatírás</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              Mi történik a pályázatírással és projektmenedzsmenttel?
            </h2>
            <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              A Jedlik Ányos pályázat adminisztratív és szakmai szempontból is összetett. Ezért a kapcsolt
              vállalkozásunk, a Blyxa Consulting Kft. – amelynek fő profilja energetikai pályázatok írása
              és menedzselése – igény esetén:
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {GRANT_TASKS.map((task) => (
                <li key={task} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {task}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[var(--ink)]" style={{ margin: "24px 0 0", fontSize: "15px", lineHeight: 1.7 }}>
              A pályázatírás és projektmenedzsment nem kötelező része az együttműködésnek. Ha saját
              pályázatíróval dolgozol, akkor is gond nélkül tudjuk megvalósítani a projektet.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* MIÉRT ÉRI MEG? */}
      <section id="miert-eri-meg" style={{ scrollMarginTop: "100px" }}>
        <div className="text-center">
          <Eyebrow>Miért éri meg?</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Mit nyersz ezzel kivitelezőként?
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            Az együttműködés kézzelfogható pénzügyi előnyöket biztosít a kivitelezők számára:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 px-6 py-5"
              style={{ background: "var(--surface-3)", borderRadius: "18px" }}
            >
              <CheckIcon />
              <span className="text-[var(--ink)]" style={{ fontSize: "16px", lineHeight: 1.5 }}>
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* KINEK SZÓL? */}
      <section id="kinek-szol" style={{ scrollMarginTop: "100px" }}>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/2025/11/9846255.jpg"
              alt="Kivitelezői együttműködés"
              loading="lazy"
              style={{ width: "100%", height: "auto", borderRadius: "24px", objectFit: "cover" }}
            />
          </div>
          <div>
            <Eyebrow>Kinek szól ez az ajánlat?</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              Kinek ideális ez az együttműködés
            </h2>
            <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Az alábbi kivitelezők számára jelent valódi megoldást és könnyebbséget a finanszírozás terén:
            </p>
            <ul className="mt-6 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {IDEAL_FOR.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[var(--ink)]" style={{ margin: "24px 0 0", fontSize: "16px", lineHeight: 1.7, fontWeight: 600 }}>
              A modell vállalati energiatárolós rendszerekre, valamint hibrid, napelemes és akkumulátoros
              projektekre egyaránt alkalmazható.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CÉGÜNKRŐL */}
      <div
        className="px-8 py-12 text-center md:px-16 md:py-16"
        style={{ background: "var(--hero-dark)", borderRadius: "28px" }}
      >
        <span
          className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
          style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}
        >
          Cégünkről
        </span>
        <h2 style={{ marginTop: "22px", color: "#fff", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}>
          Miért válassz minket?
        </h2>
        <p
          className="mx-auto mt-5 max-w-[880px]"
          style={{ color: "rgba(255,255,255,0.82)", fontSize: "16px", lineHeight: 1.8 }}
        >
          Cégünk több éves tapasztalattal rendelkezik vállalati és ipari energiarendszerek területén,
          amelyet stabil beszállítói kapcsolatok és több gyártóval fenntartott aktív disztribúciós
          háttér támogat. Saját finanszírozási modellünknek köszönhetően a projektek pénzügyi
          kockázatát is kezelni tudjuk, miközben kapcsolt pályázatíró és projektmenedzsment cégünk a
          teljes adminisztratív hátteret biztosítja. Gyakorlatban működő Jedlik-projektekkel és
          bizonyított referenciákkal garantáljuk a megbízhatóságot és a szakmai biztonságot a teljes
          megvalósítási folyamat során.
        </p>
      </div>

      <SectionDivider />

      {/* SZEMÉLYES KONZULTÁCIÓ */}
      <div
        className="grid grid-cols-1 items-center gap-8 px-8 py-10 sm:grid-cols-[auto_1fr] md:gap-12 md:px-12 md:py-12"
        style={{ background: "var(--surface-3)", borderRadius: "28px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/wp-content/uploads/2025/11/szenyan-endre.png"
          alt="Szenyán Endre – társtulajdonos"
          loading="lazy"
          style={{ width: "160px", height: "160px", borderRadius: "9999px", objectFit: "cover" }}
        />
        <div>
          <Eyebrow>Személyes konzultáció</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "18px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Kérdésed maradt? Beszéljünk a lehetőségeidről!
          </h2>
          <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            Értékesítő kollégánk hétköznap 10:00–15:00 között elérhető – fordulj hozzá bizalommal!
          </p>
          <div className="mt-5">
            <p className="text-[var(--ink)]" style={{ margin: 0, fontSize: "16px", fontWeight: 700 }}>
              Szenyán Endre
            </p>
            <p className="text-[var(--ink-muted)]" style={{ margin: 0, marginTop: "2px", fontSize: "14px" }}>
              Társtulajdonos
            </p>
            <a
              href="tel:+36203516383"
              style={{ display: "inline-block", marginTop: "12px", color: "var(--brand)", fontSize: "18px", fontWeight: 700 }}
            >
              (+36) 20-351-6383
            </a>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* AJÁNLATKÉRÉS */}
      <section id="ajanlatkeres" style={{ scrollMarginTop: "100px" }}>
        <div className="text-center">
          <Eyebrow>Kapcsolatfelvétel</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Ne hagyd ki ezt a lehetőséget!
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            Töltsd ki az alábbi űrlapot, és kollégánk rövid időn belül felveszi veled a kapcsolatot.
            Szívesen egyeztetünk konkrét projektről, vagy akár általánosságban az együttműködés
            feltételeiről is. A beszélgetés teljesen bizalmas.
          </p>
          <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px" }}>
            Vagy hívj minket most:{" "}
            <a href={`tel:${SITE.phoneRaw}`} style={{ color: "var(--brand)", fontWeight: 700 }}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="mt-10">
          <ContactForm
            bare
            formName="Jedlik Ányos finanszírozás"
            heading="Kérd finanszírozási tanácsadásunkat!"
            intro="Töltsd ki az űrlapot, és kollégánk segít megtalálni a megfelelő finanszírozást."
          />
        </div>
      </section>
    </SidebarLayout>
  </div>
);
