/** Shared career hero image (used on /karrier and every position subpage). */
export const KARRIER_HERO_IMAGE = "/wp-content/uploads/2023/11/210363746_m_normal_none.jpg";

export type KarrierPosition = {
  slug: string;
  title: string;
  teaser: string;
  summary: string;
  location: string;
  tasks: string[];
  requirements?: string[];
  plus?: string[];
  offer?: string[];
};

/** Open positions — each rendered as a card on /karrier and its own /karrier/<slug> subpage. */
export const KARRIER_POSITIONS: KarrierPosition[] = [
  {
    slug: "villanyszerelo",
    title: "Villanyszerelő",
    teaser: "Épületvillamossági munkák — csatlakozz szerelő csapatunkhoz.",
    summary:
      "Épületvillamossági munkákra keresünk gyakorlott villanyszerelő kollégát Nagykanizsa, Kaposvár, Szekszárd és Budapest térségében.",
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
    slug: "napelem-energiatarolo-ertekesito",
    title: "Napelem és energiatároló értékesítő",
    teaser: "Lakossági és céges rendszerek értékesítése, közvetlen gyártói támogatással.",
    summary:
      "Legalább kétéves megújuló energetikai tapasztalattal keresünk értékesítőt lakossági és céges napelemes, energiatárolós rendszerekhez.",
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
    slug: "marketing-menedzser",
    title: "Marketing menedzser",
    teaser: "Teljes marketing rendszer működtetése — valódi „hands-on” generalista szerep.",
    summary:
      "Hands-on marketing generalistát keresünk, aki egy teljes marketing rendszert épít és működtet az A1 Solar és az Energrosso számára.",
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
    slug: "uzletfejlesztesi-menedzser",
    title: "Üzletfejlesztési menedzser (Olasz nyelvtudással)",
    teaser: "B2B nagykereskedelmi terjeszkedés Olaszországban — olasz nyelvtudással.",
    summary:
      "Olasz nyelvtudással keresünk üzletfejlesztési menedzsert a napenergia-nagykereskedelmi (B2B) üzletágunk olaszországi terjeszkedéséhez.",
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
    slug: "ertekesito",
    title: "Értékesítő",
    teaser: "Telefonos értékesítés és tanácsadás egy dinamikusan fejlődő csapatban.",
    summary:
      "Telefonos értékesítőt keresünk egy dinamikus csapatba, ahol ügyfeleink egyetlen helyről kapják meg a teljes napelemes szolgáltatást.",
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

/** Benefits shown in the "Miért érdemes csatlakozni hozzánk?" grid. */
export const KARRIER_BENEFITS: string[] = [
  "Stabil, magyar tulajdonban lévő vállalkozás",
  "Teljes munkaidős alkalmazotti státusz",
  "Cég által biztosított telefon, laptop",
  "Home Office lehetőség pozíciótól függően",
  "Versenyképes fizetés",
];

/** Look up a single position by its subpage slug. */
export const getKarrierPosition = (slug: string): KarrierPosition | undefined =>
  KARRIER_POSITIONS.find((p) => p.slug === slug);
