import { ContactForm } from "@/components/ContactForm";

type Position = {
  title: string;
  summary: string;
  location: string;
  tasks: string[];
  requirements?: string[];
  plus?: string[];
  offer?: string[];
};

const POSITIONS: Position[] = [
  {
    title: "Villanyszerelő",
    summary: "Villanyszerelő kollégát keresünk épületvillamossági munkálatok ellátására.",
    location: "Nagykanizsa és környéke, Kaposvár és környéke, Budapest",
    tasks: [
      "Épületvillamossági munkák",
      "Munkavégzés helye: Nagykanizsa és környéke, Kaposvár és környéke, Szekszárd és környéke, Budapest — kérjük, csak olyan jelentkezzen, akinek a helyszín megfelel!",
    ],
    requirements: [
      "Villanyszerelői végzettség és gyakorlat",
      "Csak saját autóval rendelkező jelentkezőt várunk",
      "Igény a tanulásra és fejlődésre",
      "B kategóriás jogosítvány",
    ],
    plus: ["FAM képesítés"],
    offer: [
      "Teljesítmény alapú bérezés",
      "Hosszútávú munkalehetőség",
      "Folyamatos továbbképzés lehetőségét biztosítjuk",
    ],
  },
  {
    title: "Napelem és energiatároló értékesítő",
    summary:
      "Műszaki beállítottságú vagy, és van legalább két év tapasztalatod a megújuló energia iparágban? Csatlakozz hozzánk, és vegyél részt lakossági és céges napelemes rendszerek értékesítésében! Elsősorban a Fox ESS, Deye és a Sigenergy termékeivel dolgozunk a kisebb, és Huawei-el kiegészítve a nagyobb projekteknél. Mind a négy brandnél közvetlen gyártói támogatást élvezünk a projektek tervezése, a kivitelezés és az aftersales során egyaránt.",
    location: "Budapest XXII. kerületi irodánkban, de országosan végezhető.",
    tasks: [
      "Beérkező megkeresések kezelése",
      "Ajánlatkészítés a napelemes és energiatárolós rendszerekre",
      "Helyszíni felmérés, műszaki tanácsadás",
      "Szerződéskötés",
      "Ügyfél és folyamat kezelés CRM rendszerben",
      "Szakmai tanácsadás nyújtása",
      "After sales feladatok ellátása",
    ],
    requirements: [
      "Minimum 2 év értékesítési tapasztalat napelem és megújuló energia iparágban",
      "Önálló munkavégzés Excel, Word, Office email programokban",
      "Műszaki érdeklődés",
      "Egyértelmű, határozott kommunikáció szóban és írásban",
      "Proaktivitás",
      "Jogosítvány és autó",
    ],
    plus: [
      "Villamos területen szerzett végzettség vagy tapasztalat",
      "Kiserőmű értékesítésben szerzett tapasztalat",
      "Műszaki mérnöki diploma vagy technikum",
      "Pályázatok ismerete",
    ],
    offer: [
      "Stabil, magyar tulajdonban lévő vállalkozás",
      "Műszaki, szakmai támogatás a felméréshez és az ajánlat elkészítéséhez",
      "Magas bérezés és felső határ nélküli teljesítmény alapú jutalék",
      "Kényelmes munkaidő és munkarend",
      "Vállalkozói együttműködés / teljes munkaidő / részmunkaidő",
      "Részbeni home office lehetősége",
      "Minőségi termékek értékesítése",
      "On- és offline képzések",
      "Cég által biztosított telefon és laptop",
      "Közvetlen gyártói támogatás a Sigenergy-től, Huawei-től, Fox ESS-től és a Deye-től",
    ],
  },
  {
    title: "Marketing menedzser",
    summary:
      "Most olyan Marketing Managert (generalistát) keresünk, aki képes kézben tartani és működtetni egy teljes marketing rendszert — nem ügynökségi koordinátor, hanem valódi „hands-on” szakember! Ez nem egy szűk PPC vagy social media pozíció — ez egy teljes marketing működtetési szerep, melybe az A1 Solar-on kívül az Energrosso nemzetközi nagykereskedelmi működése is beletartozik.",
    location: "Budapest XXII. kerületi irodánkban, maximum 2 nap home office-al.",
    tasks: [
      "Stratégia & tervezés: éves és kampányszintű marketingtervek készítése és nyomonkövetése",
      "Lakossági és B2B kommunikáció összehangolása",
      "Pályázati kampányok (pl. energiatárolás, támogatások) marketingje",
      "Digitális marketing: Meta Ads, remarketing kampányok kezelése",
      "Landing oldalak, lead formok, konverziós útvonalak kialakítása, kampányok mérése",
      "Tartalom & kommunikáció: weboldal szövegezés irányítása, hírlevelek, edukációs tartalmak, social posztok, termék- és megoldáskommunikáció",
      "Értékesítés támogatása: ajánlatcsomagok, brosúrák, sales anyagok, kampánylogika a sales csapat számára, leadek minőségének javítása",
      "Márkaépítés: az A1 Solar és az Energrosso márka egységes hangjának kialakítása, lakossági és szakmai kommunikáció összehangolása",
      "Koordináció: a teljes marketinges csapat (PPC-s, grafikus, webes, junior generalista, időnként ügynökség) koordinációja",
    ],
    requirements: [
      "Van legalább 3–5 év tapasztalatod marketingben",
      "Tudsz kampányokat tervezni ÉS végre is hajtani",
      "Nem ijedsz meg attól, ha mindent neked kell összefogni",
      "Érted a performance marketinget (nem csak posztolni tudsz)",
      "Szereted az adatokat, konverziókat, számokat",
      "Nem ügynökségi „brief-forwarder” vagy, hanem döntéshozó",
      "Tárgyalási szinten beszélsz angolul",
    ],
    plus: ["Energetika, ingatlan, műszaki vagy B2B tapasztalat"],
    offer: [
      "Valódi döntési jogkör egy erős, növekvő cégben",
      "Nemzetközi szinten is kiemelkedő termékek",
      "Stabil, tőkeerős háttér",
      "Teljes marketing működés felépítésének lehetősége",
      "Versenyképes fizetés",
    ],
  },
  {
    title: "Üzletfejlesztési menedzser (Olasz nyelvtudással)",
    summary:
      "Üzletfejlesztési menedzsert keresünk olasz nyelvtudással, aki segít nekünk a napenergia-nagykereskedelmi (B2B) üzletágunk olaszországi terjeszkedésében. Ha szenvedélyed az üzletépítés és van tapasztalatod a B2B világában, ez a lehetőség Neked szól!",
    location: "Budapest XXII. kerületi irodánkban, de országosan végezhető.",
    tasks: [
      "Új üzleti lehetőségek azonosítása (partnerségek, termékkategóriák, szolgáltatások)",
      "Új partnerek felkutatása és tárgyalások",
      "Piackutatás, versenytársak monitorozása és elemzése",
      "Ipari és piaci trendek összegyűjtése és elemzése, iparági jelentések készítése",
      "Stratégiai ajánlások megfogalmazása új termékek és szolgáltatások létrehozására vagy a meglévők fejlesztésére",
      "Szakmai kiállításokon, rendezvényeken való részvétel",
      "Árajánlatok elkészítése és nyomon követése",
      "Értékesítés kereskedelmi partnereknek",
    ],
    requirements: [
      "Legalább 3 év B2B üzletfejlesztési tapasztalat",
      "Tárgyalóképes olasz nyelvismeret",
      "Műszaki orientáció",
      "Önálló munkavégzés képessége, megbízhatóság",
      "Középfokú végzettség",
      "B kategóriás jogosítvány",
    ],
    plus: ["Tárgyalóképes angol nyelvtudás", "Napenergia ipar ismerete"],
    offer: [
      "Stabil, magyar tulajdonban lévő vállalkozás",
      "Teljes munkaidős foglalkoztatás",
      "Tapasztalt és támogató csapat",
      "Felelősségteljes, autonóm szerepkör",
      "A cég által biztosított autó, telefon és laptop",
      "Versenyképes alapbér + jutalék",
      "Home office lehetősége",
    ],
  },
  {
    title: "Értékesítő",
    summary:
      "Szeretnél egy dinamikusan fejlődő, innovatív csapat tagja lenni? Szenvedélyed az értékesítés és az eredmények? Csatlakozz hozzánk, és fejleszd karriered egy különleges szakterületen! Közel 5000 telepítés és több száz energetikai pályázat tapasztalatát felhasználva egy olyan rendszert alakítottunk ki, ahol ügyfeleink egyetlen helyről kapják meg az összes szolgáltatást. Ennek a csapatnak a bővülő értékesítői/tanácsadói részébe keresünk kollégákat.",
    location: "Budapest XXII. kerületi irodánkban, de országosan végezhető.",
    tasks: [
      "Termékek aktív telefonos értékesítése",
      "Beérkező megkeresések felhívása és kezelése",
      "Szerződéskötéshez szükséges dokumentáció előkészítése",
      "Ügyfél és folyamat kezelés CRM rendszerben",
      "Ügyfelek igényeinek felmérése és tanácsadás nyújtása",
      "Új ügyfelek felkutatása, kapcsolatok építése és ápolása",
    ],
    requirements: [
      "Minimum 2 év értékesítési tapasztalat nagy mennyiségű ügyfél adatbázis kezelésében",
      "Napi feladatok önálló követése és elvégzése",
      "Előírt célok teljesítése, eredményorientáltság",
      "Önálló munkavégzés Excel, Word, Office email programokban",
      "Kommunikatív, meggyőző és ügyfélorientált személyiség",
      "Műszaki érdeklődés",
      "Egyértelmű, határozott kommunikáció szóban és írásban",
      "Proaktivitás",
      "Jogosítvány és autó (nem feltétel)",
    ],
    plus: [
      "Pályázatok ismerete",
      "Racionális, logikus döntéshozatal, átlátható helyzetértékelés, kiváló kommunikációs és tárgyalóképesség",
      "Folyamatépítő gondolkodás, erős szervezőkészség, ad hoc helyzetek megoldása, csapatban is",
    ],
    offer: [
      "Teljes munkaidős állás",
      "Műszaki, szakmai támogatás",
      "Minőségi termék értékesítése",
      "Home office munkavégzés",
      "Alapbér mellett felső határ nélküli, teljesítmény alapú jutalék",
      "Mozgalmas, változatos feladatok egy támogató csapatban",
      "Előrelépési lehetőség, további szakmai fejlődés",
    ],
  },
];

const BENEFITS: string[] = [
  "Stabil, magyar tulajdonban lévő vállalkozás",
  "Teljes munkaidős alkalmazotti státusz",
  "Cég által biztosított telefon, laptop",
  "Home Office lehetőség pozíciótól függően",
  "Versenyképes fizetés",
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
    <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

type DetailListProps = {
  title: string;
  items: string[];
};

const DetailList = ({ title, items }: DetailListProps) => (
  <div>
    <h4 className="text-sm font-semibold uppercase tracking-[0.5px] text-[var(--ink)]" style={{ marginBottom: "12px" }}>
      {title}
    </h4>
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[var(--ink-soft)]">
          <span className="mt-1 shrink-0" style={{ color: "var(--brand)" }} aria-hidden>
            <CheckIcon />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PositionCard = ({ title, summary, location, tasks, requirements, plus, offer }: Position) => (
  <details className="group overflow-hidden rounded-[24px]" style={{ background: "var(--surface-3)" }}>
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-6 md:px-8">
      <div className="min-w-0">
        <h3 className="text-[var(--ink)]" style={{ fontSize: "clamp(19px, 2.4vw, 24px)", fontWeight: 600, lineHeight: 1.25 }}>
          {title}
        </h3>
        <div className="mt-1.5 flex items-center gap-2 text-sm text-[var(--ink-muted)]">
          <span style={{ color: "var(--brand)" }} aria-hidden>
            <PinIcon />
          </span>
          <span className="truncate">{location}</span>
        </div>
      </div>
      <span
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition-transform duration-200 group-open:rotate-45"
        style={{ background: "#fff", color: "var(--brand)" }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </span>
    </summary>

    <div className="px-6 pb-8 md:px-8">
      <p className="max-w-[820px] text-[var(--ink-soft)]" style={{ lineHeight: 1.7 }}>
        {summary}
      </p>

      <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2">
        <DetailList title="Feladatok" items={tasks} />
        {requirements ? <DetailList title="Elvárások" items={requirements} /> : null}
        {plus ? <DetailList title="Előnyt jelent" items={plus} /> : null}
        {offer ? <DetailList title="Amit kínálunk" items={offer} /> : null}
      </div>

      <div
        className="mt-7 flex flex-col items-start gap-4 rounded-[18px] px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
        style={{ background: "#fff" }}
      >
        <div className="text-sm text-[var(--ink-soft)]">
          <span className="font-semibold text-[var(--ink)]">Munkavégzés helye:</span> {location}
          <br />
          Jelentkezés a fenti űrlap kitöltésével, fényképes önéletrajz csatolásával.
        </div>
        <a
          href="#jelentkezes"
          className="shrink-0 whitespace-nowrap transition-opacity hover:opacity-90"
          style={{ background: "var(--brand)", color: "#fff", padding: "12px 26px", borderRadius: "9999px", fontWeight: 500 }}
        >
          Jelentkezem
        </a>
      </div>
    </div>
  </details>
);

/**
 * Native bespoke "Karrier" marketing page — hero with anchor CTA, a benefits
 * ("Miért érdemes csatlakozni hozzánk?") grid, native `<details>` accordion
 * cards for every open position, and the {@link ContactForm} application form.
 */
export const Karrier = () => (
  <>
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-[780px] text-center">
          <span
            className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
            style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
          >
            Karrier
          </span>
          <h1 className="text-[var(--ink)]" style={{ marginTop: "20px", fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.12 }}>
            <span style={{ fontWeight: 300 }}>Csatlakozz </span>
            <span style={{ fontWeight: 700 }}>csapatunkhoz!</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[640px] text-lg text-[var(--ink-soft)]">
            Érj el kimagasló jövedelmet és csatlakozz szerelő vagy irodai csapatunkhoz. Dolgozzunk együtt a zöldebb
            jövőért.
          </p>
          <div className="mt-8">
            <a
              href="#poziciok"
              className="inline-block transition-opacity hover:opacity-90"
              style={{ background: "var(--brand)", color: "#fff", padding: "14px 30px", borderRadius: "9999px", fontWeight: 500 }}
            >
              Nyitott pozíciók megtekintése
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full pb-16 md:pb-24">
      <div className="container">
        <h2
          className="text-center text-[var(--ink)]"
          style={{ fontSize: "clamp(22px, 3.2vw, 34px)", fontWeight: 600, lineHeight: 1.2 }}
        >
          Miért érdemes csatlakozni hozzánk?
        </h2>
        <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-4 rounded-[20px] p-6"
              style={{ background: "var(--surface-3)" }}
            >
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full"
                style={{ background: "#fff", color: "var(--brand)" }}
                aria-hidden
              >
                <CheckIcon />
              </span>
              <span className="font-medium text-[var(--ink)]">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="poziciok" className="w-full pb-16 md:pb-24" style={{ scrollMarginTop: "var(--header-h)" }}>
      <div className="container">
        <div className="mx-auto max-w-[760px] text-center">
          <span
            className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
            style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
          >
            Nyitott pozíciók
          </span>
          <h2 className="text-[var(--ink)]" style={{ marginTop: "16px", fontSize: "clamp(24px, 3.4vw, 38px)", fontWeight: 600, lineHeight: 1.2 }}>
            Csatlakozz csapatunkhoz
          </h2>
          <p className="mx-auto mt-4 text-[var(--ink-soft)]">
            Kattints egy pozícióra a részletekért. A megfelelő álláshoz a lenti űrlapon jelentkezhetsz.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-[980px] flex-col gap-5">
          {POSITIONS.map((position) => (
            <PositionCard key={position.title} {...position} />
          ))}
        </div>
      </div>
    </section>

    <section id="jelentkezes" className="w-full pb-16 md:pb-24" style={{ scrollMarginTop: "var(--header-h)" }}>
      <div className="container">
        <div className="mx-auto max-w-[820px]">
          <h2
            className="text-center text-[var(--ink)]"
            style={{ marginBottom: "24px", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, lineHeight: 1.2 }}
          >
            Jelentkezési űrlap
          </h2>
          <ContactForm
            bare
            formName="Karrier jelentkezés"
            heading="Jelentkezési űrlap"
            intro="Töltsd ki az űrlapot és csatold fényképes önéletrajzod — kollégánk hamarosan jelentkezik. (Az önéletrajzot kérjük e-mailben juttasd el hozzánk, mert az űrlap fájlcsatolást nem támogat.)"
          />
        </div>
      </div>
    </section>
  </>
);
