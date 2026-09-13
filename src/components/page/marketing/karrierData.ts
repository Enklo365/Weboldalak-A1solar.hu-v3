/** Shared career hero image. */
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

/** Open positions rendered as linked sections on the consolidated career page. */
export const KARRIER_POSITIONS: KarrierPosition[] = [
  {
    slug: "napelem-energiatarolo-ertekesito",
    title: "Napelem és energiatároló értékesítő",
    teaser: "Lakossági és céges rendszerek értékesítése, közvetlen gyártói támogatással.",
    summary:
      "Legalább kétéves megújuló energetikai tapasztalattal keresünk értékesítőt lakossági és céges napelemes rendszerekhez – Fox ESS, Deye, Sigenergy és Huawei termékekkel, közvetlen gyártói támogatással.",
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
    slug: "villanyszerelo",
    title: "Villanyszerelő",
    teaser: "Épületvillamossági munkák — csatlakozz szerelő csapatunkhoz.",
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
];

/** Benefits shown in the "Miért érdemes csatlakozni hozzánk?" grid. */
export const KARRIER_BENEFITS: string[] = [
  "Stabil, magyar tulajdonban lévő vállalkozás",
  "Teljes munkaidős alkalmazotti státusz",
  "Cég által biztosított telefon, laptop",
  "Home Office lehetőség pozíciótól függően",
  "Versenyképes fizetés",
];

/** Look up a single position by its legacy slug or in-page anchor. */
export const getKarrierPosition = (slug: string): KarrierPosition | undefined =>
  KARRIER_POSITIONS.find((p) => p.slug === slug);
