import { ContactForm } from "@/components/ContactForm";
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

const HERO_IMAGE =
  "/wp-content/uploads/elementor/thumbs/otthonfelujitasi-tamogatas-1-qxa58qupcs5og0t1bvevvuqi7i2ph1xae8wjqowjmg.png";

/** What this concrete offer bundles together. */
const OFFER_ITEMS: { title: string; text: string }[] = [
  {
    title: "Hibrid inverter",
    text: "Váltson hibrid inverterre, amely – az on-grid inverterekkel ellentétben – akkumulátorral is bővíthető, így valóban energiahatékonyan működik.",
  },
  {
    title: "Akkumulátoros energiatárolás",
    text: "Egészítse ki meglévő napelemes rendszerét akkumulátorral, hogy a nappal megtermelt, fel nem használt energiát éjszaka is kihasználhassa – ahelyett, hogy elveszne.",
  },
  {
    title: "Okosotthon technológia",
    text: "Intelligens eszközökkel az áramfogyasztás az olcsóbb időszakokra időzíthető, a dinamikus elszámolásra optimalizálva otthona energiafelhasználását.",
  },
];

/** Pain points the offer answers, from the extract. */
const PAIN_POINTS: { question: string; answer: string }[] = [
  {
    question: "Szeretné éjszaka is kihasználni a napelemek által megtermelt energiát?",
    answer:
      "Ha a rendszere nem tárolja az energiát, a fel nem használt többlet elvész, miközben továbbra is fizethet a hálózati áramért.",
  },
  {
    question: "Még szaldós elszámolásban van, de már látja, hogy hamarosan vége?",
    answer:
      "A szaldóelszámolás megszűnése után sokan szembesülhetnek azzal, hogy napelemeik önmagukban nem elegendők az optimális megtakarításhoz.",
  },
  {
    question: "Rendszere elavult, és nem tud lépést tartani a fejlődéssel?",
    answer:
      "Az on-grid inverterekhez nem csatlakoztatható akkumulátor, ami korlátozza az energiahatékony működést.",
  },
  {
    question: "Nincs ideje vagy energiája végigjárni a megoldások útvesztőjét?",
    answer:
      "A rengeteg technikai információ és lehetőség könnyen zavaró lehet, ha nincs megfelelő szakmai támogatása.",
  },
];

/** Support scheme conditions — concrete figures from the extract. */
const SUPPORT_CONDITIONS: string[] = [
  "Vissza nem térítendő támogatás: a felújítási költségek 50%-a fedezhető, maximum 3 millió forintig.",
  "Kamattámogatott hitel: legfeljebb 6 millió forintos, az első öt évben fix kamatozású hitel vehető fel.",
  "A támogatás összege az anyagköltség és a vállalkozói díj tekintetében 50-50%-os arányban oszlik meg.",
  "Az igényelhető összeg csökkenthető, ha az igénylő 2021-2022-ben már részesült otthonfelújítási támogatásban – ekkor a különbözet igényelhető.",
];

/** Eligibility criteria, condensed from the extract. */
const ELIGIBILITY: string[] = [
  "Gyermekes családok: legalább egy gyermeket nevelő vagy váró szülő igényelheti, házastársak vagy élettársak közösen, együttes igénylőként.",
  "TB-jogviszony: az igénylő legalább 1 éve rendelkezik társadalombiztosítási jogviszonnyal (max. 30 napos megszakítással), meghatározott kivételekkel.",
  "Tulajdonjog: az igénylő és gyermeke együttesen legalább 50%-os, ingatlan-nyilvántartásba bejegyzett tulajdoni hányaddal rendelkezik.",
  "Lakóhely: az igénylőnek és gyermekének (a magzatot kivéve) lakóhellyel kell rendelkeznie az érintett ingatlanban.",
  "Köztartozás-mentesség: 5000 forintot meghaladó köztartozás nem állhat fenn, vagy azt 14 napon belül rendezni kell.",
  "Lakhatási kötelezettség: a lakásban legalább 5 évig életvitelszerűen kell lakni, indokolt kivételekkel.",
  "Egyszeri igénylés: a támogatás egy alkalommal vehető igénybe.",
];

/** Eligible works this support can be used for. */
const ELIGIBLE_USES: string[] = [
  "Napelemes rendszer telepítése vagy cseréje",
  "Okosotthon megoldások kialakítása",
  "Fűtési rendszer korszerűsítése",
  "Nyílászárók cseréje",
  "Tetőfelújítás és belső átalakítások",
];

/** How to apply, condensed from the extract. */
const APPLY_STEPS: string[] = [
  "Az igénylést a Magyar Államkincstárnál kell benyújtani a szükséges dokumentumokkal.",
  "A támogatás a felújítási munkálatok befejezése után igényelhető; a kifizetés a benyújtástól számított 30 napon belül történik.",
  "A támogatás kizárólag számlákkal igazolt munkálatokra vonatkozik.",
];

/** Reasons to choose A1 Solar, from the extract. */
const WHY_A1: string[] = [
  "Pályázati ügyintézés",
  "10+ év tapasztalat",
  "Komplex napelemes és okosotthon megoldások",
];

/**
 * "Otthonfelújítási Támogatás ajánlat I." landing — bespoke natív újraépítés az
 * A1 Solar design-nyelvén: konkrét ajánlat (hibrid inverter + energiatárolás +
 * okosotthon), a Vidéki Otthonfelújítási Támogatás feltételei és folyamata,
 * majd erős kapcsolatfelvételi lezárás.
 */
export const OtthonfelujitasiTamogatasAjanlatI = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
          <div>
            <Eyebrow>Ajánlat</Eyebrow>
            <h1
              className="text-[var(--ink)]"
              style={{ marginTop: "24px", fontSize: "clamp(32px, 5.4vw, 58px)", lineHeight: 1.1 }}
            >
              <span style={{ fontWeight: 300 }}>Búcsúzzon el a </span>
              <span style={{ fontWeight: 700 }}>magas energiaszámláktól!</span>
            </h1>
            <p className="mt-6 text-[var(--ink-soft)]" style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7 }}>
              Váltson hibrid inverterre, egészítse ki meglévő napelemes rendszerét akkumulátorral és
              okosotthon technológiával, hogy biztosítsa otthona energiafüggetlenségét! Ráadásul a
              Vidéki Otthonfelújítási Támogatás igénybevételével még kedvezőbb feltételekkel valósíthatja
              meg a fejlesztéseket.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
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
                Kérem ezt az ajánlatot!
              </a>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="text-[var(--ink)]"
                style={{ fontWeight: 600, fontSize: "17px" }}
              >
                Vagy hívjon: {SITE.phoneDisplay}
              </a>
            </div>
          </div>

          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Otthonfelújítási támogatás – napelem, energiatárolás és okosotthon"
              loading="lazy"
              style={{ width: "100%", height: "auto", borderRadius: "28px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* AZ AJÁNLAT TARTALMA */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Az ajánlat</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Mit tartalmaz a csomag?
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            Segítünk, hogy meglévő napelemes rendszerét a dinamikus elszámolásra optimalizálja –
            egyszerűen, érthetően és hatékonyan.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {OFFER_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col px-8 py-9"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <h3
                className="text-[var(--ink)]"
                style={{ margin: 0, fontSize: "21px", fontWeight: 700, lineHeight: 1.25 }}
              >
                {item.title}
              </h3>
              <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MIÉRT ÉRDEMES MOST? */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Információk</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{
              marginTop: "22px",
              maxWidth: "820px",
              fontSize: "clamp(24px, 3.6vw, 38px)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            A dinamikus elszámolásra való áttérés miatt itt a legjobb időpont, hogy korszerűsítse
            meglévő rendszerét.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PAIN_POINTS.map((point) => (
            <div
              key={point.question}
              className="px-8 py-8"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <h3
                className="text-[var(--ink)]"
                style={{ margin: 0, fontSize: "19px", fontWeight: 600, lineHeight: 1.35 }}
              >
                {point.question}
              </h3>
              <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                {point.answer}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 px-8 py-10 text-center md:px-12"
          style={{ background: "rgba(194,29,32,0.06)", borderRadius: "28px", borderLeft: "4px solid var(--brand)" }}
        >
          <h3
            className="text-[var(--ink)]"
            style={{ margin: 0, fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700 }}
          >
            Ne aggódjon, van kiút!
          </h3>
          <p className="mx-auto mt-4 max-w-[760px] text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            Segítünk, hogy meglévő napelemes rendszerét a dinamikus elszámolásra optimalizálja, hibrid
            inverterrel, akkumulátorral és okosotthon technológiával. A Vidéki Otthonfelújítási Támogatás
            igénybevételével még kedvezőbb feltételekkel valósíthatja meg fejlesztéseit.
          </p>
          <div className="mt-8">
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
              Kérjen ingyenes helyszíni felmérést!
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* A TÁMOGATÁSRÓL */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>A támogatás</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{
              marginTop: "22px",
              maxWidth: "760px",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Összeszedtünk mindent, amit a támogatásról tudni érdemes
          </h2>
          <p className="mx-auto mt-5 max-w-[820px] text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            A Vidéki Otthonfelújítási Támogatás 2025. január 1-jétől elérhető állami program, amelynek
            célja a kistelepüléseken élő családok lakhatási körülményeinek javítása és a vidéki
            lakásállomány megújulása. A támogatás vissza nem térítendő lakáscélú állami támogatásként és
            otthonfelújítási kölcsön formájában igényelhető.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 700 }}>
              A támogatás és a hitel feltételei
            </h3>
            <ul className="mt-6 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {SUPPORT_CONDITIONS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 700 }}>
              Ki igényelheti a támogatást?
            </h3>
            <ul className="mt-6 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {ELIGIBILITY.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 700 }}>
              Mire használhatja a támogatást?
            </h3>
            <ul className="mt-6 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {ELIGIBLE_USES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 700 }}>
              Hogyan lehet igényelni?
            </h3>
            <ul className="mt-6 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {APPLY_STEPS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* MIÉRT AZ A1 SOLAR? */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 items-center gap-10 px-8 py-12 md:grid-cols-[1fr_1fr] md:gap-14 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>Cégünkről</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              <span style={{ fontWeight: 300 }}>Miért válassza </span>
              <span style={{ fontWeight: 700 }}>az A1 Solart?</span>
            </h2>
            <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              Cégünk teljes körű támogatást nyújt a pályázati ügyintézésben, a szükséges dokumentumok
              előkészítésétől azok benyújtásáig. Szakértelmünk révén hatékonyan ötvözzük a napelemes
              rendszereket az intelligens eszközökkel, hogy energiafogyasztását optimalizáljuk.
            </p>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              Több mint 10 éves tapasztalatunkkal és több mint 4000 telepített rendszerrel garantáljuk a
              megbízhatóságot, a szakértelmet és a biztonságot – az első konzultációtól egészen a
              fenntartásig.
            </p>
            <ul className="mt-7 flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {WHY_A1.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink)]" style={{ fontSize: "16px", fontWeight: 500 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span style={{ color: "var(--brand)", fontSize: "clamp(48px, 8vw, 84px)", fontWeight: 700, lineHeight: 1 }}>
              4000+
            </span>
            <span className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "18px" }}>
              Elégedett ügyfél
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* +1 OK: DINAMIKUS ELSZÁMOLÁS */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>+1 ok, amiért érdemes pályázni</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{
              marginTop: "22px",
              maxWidth: "760px",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Dinamikus elszámolás – napszakokhoz igazodva
          </h2>
          <p className="mx-auto mt-5 max-w-[820px] text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            Az otthonfelújítási támogatás lehetőséget ad arra, hogy otthona előnyére fordítsa a dinamikus
            elszámolást. Napelemes rendszerekkel és okosotthon megoldásokkal az áramfogyasztás az olcsóbb
            időszakokra időzíthető, ezzel csökkentve a rezsiköltségeket és növelve az energiahatékonyságot.
          </p>
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
            Ne hagyja ki ezt a lehetőséget!
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            Kombinálja az energiatárolást, az okosotthon technológiát és a napelemes rendszert az A1 Solar
            szakértelmével. Vegye fel velünk a kapcsolatot, és kérjen ingyenes helyszíni felmérést!
          </p>
          <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px" }}>
            Vagy hívjon most:{" "}
            <a href={`tel:${SITE.phoneRaw}`} style={{ color: "var(--brand)", fontWeight: 700 }}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="mt-10">
          <ContactForm
            bare
            formName="Otthonfelújítási Támogatás ajánlat I."
            heading="Kérem ezt az ajánlatot!"
            intro="Töltsd ki az űrlapot, és kollégánk egyeztet veled a részletekről."
          />
        </div>
      </div>
    </section>
  </div>
);
