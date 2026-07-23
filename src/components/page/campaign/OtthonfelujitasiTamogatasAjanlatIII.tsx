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

/** A titled block of bullet points from the campaign copy. */
type InfoBlock = { title: string; intro?: string; items: string[] };

const CONDITIONS: InfoBlock = {
  title: "Az otthonfelújítási támogatás és a hitel feltételei",
  items: [
    "Vissza nem térítendő támogatás: a felújítási költségek 50%-a fedezhető, maximum 3 millió forintig.",
    "Kamattámogatott hitel: legfeljebb 6 millió forintos, az első öt évben fix kamatozású hitel vehető fel.",
    "A támogatás összegének megoszlása az anyagköltség és a vállalkozói díj tekintetében 50-50%-os arányban történik.",
    "Az igényelhető támogatás összege csökkenthető, ha az igénylő korábban, 2021-2022-ben már részesült otthonfelújítási támogatásban. Ebben az esetben a különbözetet igényelheti.",
  ],
};

const ELIGIBILITY: InfoBlock = {
  title: "Ki igényelheti az otthonfelújítási támogatást?",
  intro: "Az otthonfelújítási támogatást a következő feltételek teljesülése esetén lehet igénybe venni:",
  items: [
    "Gyermekes családok: a támogatást legalább egy gyermeket nevelő vagy váró szülő igényelheti, házastársak vagy élettársak esetén közösen, együttes igénylőként.",
    "TB-jogviszony: az igénylő legalább 1 éve rendelkezik társadalombiztosítási jogviszonnyal Magyarországon vagy külföldön, maximum 30 napos megszakítással.",
    "Tulajdonjog: az igénylő és gyermeke együttesen legalább 50%-os tulajdoni hányaddal rendelkezik az érintett ingatlanban.",
    "Lakóhely: az igénylőnek és a gyermekének (a magzatot kivéve) lakóhellyel kell rendelkeznie az érintett ingatlanban.",
    "Köztartozás-mentesség: az igénylő nem rendelkezhet 5000 forintot meghaladó köztartozással, vagy azt 14 napon belül rendeznie kell.",
    "Lakhatási kötelezettség: az érintett lakásban legalább 5 évig életvitelszerűen kell lakni, kivéve bizonyos indokolt eseteket.",
    "Egyszeri igénylés: a támogatás egy alkalommal vehető igénybe.",
  ],
};

const USAGE: InfoBlock = {
  title: "Mire használhatja a támogatást?",
  intro: "A támogatás széles körben felhasználható, például:",
  items: [
    "Napelemes rendszer telepítésére vagy cseréjére,",
    "Okosotthon megoldások kialakítására,",
    "Fűtési rendszer korszerűsítésére,",
    "Nyílászárók cseréjére,",
    "Tetőfelújításra és belső átalakításokra.",
  ],
};

const HOW_TO_APPLY: InfoBlock = {
  title: "Hogyan lehet igényelni?",
  items: [
    "Az igénylést a Magyar Államkincstárnál kell benyújtani a szükséges dokumentumokkal.",
    "A támogatás a felújítási munkálatok befejezése után igényelhető, a kifizetés a benyújtástól számított 30 napon belül történik.",
    "A támogatás kizárólag számlákkal igazolt munkálatokra vonatkozik.",
  ],
};

const REASONS: string[] = [
  "Pályázati ügyintézés",
  "10+ év tapasztalat",
  "Komplex napelemes és okosotthon megoldások",
];

/**
 * "Otthonfelújítási Támogatás ajánlat III." kampány-landing — bespoke natív
 * újraépítés az A1 Solar design-nyelvén: hero, a 2025-ös támogatás részletei,
 * felhasználási körök, folyamat és záró ajánlatkérő űrlap.
 */
export const OtthonfelujitasiTamogatasAjanlatIII = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>Otthonfelújítási támogatás 2025</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>Használd ki </span>
          <span style={{ fontWeight: 700 }}>a lehetőséget!</span>
        </h1>
        <p
          className="mx-auto mt-8 text-[var(--ink-soft)]"
          style={{ maxWidth: "720px", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7 }}
        >
          Alakítsd az otthonod fogyasztását okosotthonnal arra az időszakra, amikor a napelemek termelnek
          vagy amikor a legkevesebbet fizetsz az áramért, majd mindezt kombináld a 2025-ben induló új
          Otthonfelújítási támogatással és az A1 Solar szakértelmével.
        </p>
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
        <div className="mt-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wp-content/uploads/elementor/thumbs/otthonfelujitasi-tamogatas-1-qxa58qupcs5og0t1bvevvuqi7i2ph1xae8wjqowjmg.png"
            alt="Otthonfelújítási támogatás 2025"
            loading="lazy"
            style={{ height: "auto", maxWidth: "100%", borderRadius: "24px", margin: "0 auto" }}
          />
        </div>
      </div>
    </section>

    {/* INFORMÁCIÓK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Információk</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 600, lineHeight: 1.2 }}
          >
            Összeszedtünk mindent, amit a támogatásról tudni érdemes...
          </h2>
          <p
            className="mx-auto mt-6 text-[var(--ink-soft)]"
            style={{ maxWidth: "860px", fontSize: "17px", lineHeight: 1.7 }}
          >
            A Vidéki Otthonfelújítási Támogatás 2025. január 1-jétől elérhető állami program, amelynek célja
            a kistelepüléseken élő családok lakhatási körülményeinek javítása, a vidéki lakásállomány
            megújulásának elősegítése és az építőipari ágazat tisztább működésének támogatása. A támogatás
            vissza nem térítendő lakáscélú állami támogatásként és otthonfelújítási kölcsön formájában
            igényelhető.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[CONDITIONS, ELIGIBILITY, USAGE, HOW_TO_APPLY].map((block) => (
            <div
              key={block.title}
              className="px-8 py-9"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <h4
                className="text-[var(--ink)]"
                style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}
              >
                {block.title}
              </h4>
              {block.intro ? (
                <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                  {block.intro}
                </p>
              ) : null}
              <ul className="mt-4 flex flex-col gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* STATISZTIKA + CÉGÜNKRŐL */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div className="text-center md:text-left">
            <span
              style={{ color: "var(--brand)", fontSize: "clamp(44px, 7vw, 72px)", fontWeight: 700, lineHeight: 1 }}
            >
              4000+
            </span>
            <p className="mt-2 text-[var(--ink-soft)]" style={{ fontSize: "17px", fontWeight: 500 }}>
              Elégedett ügyfél
            </p>
          </div>

          <div>
            <Eyebrow>Cégünkről</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "18px", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 600, lineHeight: 1.2 }}
            >
              Miért válassza az A1 Solart?
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Cégünk teljes körű támogatást nyújt a pályázati ügyintézésben, beleértve a szükséges dokumentumok
              előkészítését és benyújtását. Szakértelmünk révén hatékonyan ötvözzük a napelemes rendszereket az
              intelligens eszközökkel, hogy energiafogyasztását optimalizáljuk. Több mint 10 éves tapasztalatunk
              biztosítja a megbízhatóságot, a szakértelmet és a biztonságot. Átfogó szolgáltatásaink az első
              konzultációtól egészen a fenntartásig tartanak.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {REASONS.map((reason) => (
                <span
                  key={reason}
                  className="inline-block rounded-[30px] px-4 py-2 text-sm font-medium"
                  style={{ background: "#fff", color: "var(--ink)", border: "1px solid var(--line)" }}
                >
                  {reason}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* DINAMIKUS ELSZÁMOLÁS */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 text-center md:pb-24">
        <Eyebrow>+1 ok, amiért érdemes pályázni</Eyebrow>
        <h2
          className="text-[var(--ink)]"
          style={{ marginTop: "22px", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 600, lineHeight: 1.2 }}
        >
          Dinamikus elszámolás napszakokhoz igazodva
        </h2>
        <p
          className="mx-auto mt-6 text-[var(--ink-soft)]"
          style={{ maxWidth: "820px", fontSize: "17px", lineHeight: 1.7 }}
        >
          Az otthonfelújítási támogatás lehetőséget ad arra, hogy otthona előnyére fordítsa a dinamikus
          elszámolást. Napelemes rendszerekkel és okosotthon megoldásokkal az áramfogyasztás az olcsóbb
          időszakokra időzíthető, ezzel csökkentve a rezsiköltségeket és növelve az energiahatékonyságot.
        </p>
        <p
          className="mx-auto mt-4 text-[var(--ink-soft)]"
          style={{ maxWidth: "820px", fontSize: "17px", lineHeight: 1.7 }}
        >
          Hallgassa meg a dinamikus elszámolásról készült podcastunkat, amelyben bemutatjuk, hogy jelenleg
          milyen információk állnak rendelkezésünkre az új elszámolási módról.
        </p>
        <div className="mt-8">
          <a
            href="https://www.youtube.com/watch?v=SVGZDzaTbsA"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              background: "var(--brand)",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "9999px",
              fontWeight: 500,
            }}
          >
            Podcast megtekintése
          </a>
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
            style={{ marginTop: "22px", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 600, lineHeight: 1.2 }}
          >
            Ne hagyja ki ezt a lehetőséget!
          </h2>
          <p
            className="mx-auto mt-4 text-[var(--ink-soft)]"
            style={{ maxWidth: "760px", fontSize: "17px", lineHeight: 1.7 }}
          >
            Vezérelje otthonát akkor, amikor Önnek a legkedvezőbb az áramvételezés! Kombinálja az okosotthon
            technológiát és a napelemes rendszert az A1 Solar szakértelmével. Vegye fel velünk a kapcsolatot,
            és foglalja le az első konzultációt!
          </p>
          <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px" }}>
            Vagy hívjon minket most:{" "}
            <a href={`tel:${SITE.phoneRaw}`} style={{ color: "var(--brand)", fontWeight: 700 }}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="mt-10">
          <ContactForm
            bare
            formName="Otthonfelújítási Támogatás ajánlat III."
            heading="Kérem ezt az ajánlatot!"
            intro="Töltsd ki az űrlapot, és kollégánk egyeztet veled a részletekről."
          />
        </div>
      </div>
    </section>
  </div>
);
