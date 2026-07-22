/**
 * Data model for the native service subpages (napelem, energiatárolás, …).
 * Copy + imagery lifted faithfully from the a1solar.hu WordPress pages so the
 * rebuild is a native React reproduction, not a mirror. One object per service;
 * `NATIVE_SERVICE_SLUGS` (in the [slug] route) gates which slugs render natively.
 */

export type ServiceStep = { num: string; title: string; body: string };

export type ServicePageData = {
  slug: string;
  hero: {
    eyebrow: string;
    titleLight: string;
    titleStrong: string;
    ctaLabel: string;
    ctaHref: string;
    image: string;
    imageAlt: string;
    intro: string;
  };
  value: { eyebrow: string; title: string; body: string };
  benefits: { title: string; body: string; note: string; ctaLabel: string; ctaHref: string };
  process: { eyebrow: string; title: string; steps: ServiceStep[] };
  offer: { title: string; body: string; ctaLabel: string; ctaHref: string };
  /** "Cégünkről" — body with `emphasize` phrases bolded; reviews come later (Trustindex). */
  why: { eyebrow: string; title: string; body: string; emphasize: string[] };
  references: { eyebrow: string; title: string; images: string[] };
  contact: { title: string; intro: string };
  grant: {
    title: string;
    body: string;
    repName: string;
    repRole: string;
    repPhone: string;
    repPhotoLabel: string;
    repPhoto: string;
    ctaLabel: string;
  };
};

const lakossagiNapelem: ServicePageData = {
  slug: "lakossagi-napelem",
  hero: {
    eyebrow: "Lakossági napelemes rendszerek",
    titleLight: "Biztosítsd otthonod",
    titleStrong: "energiaellátását!",
    ctaLabel: "Ajánlatkérés",
    ctaHref: "#ajanlatkeres",
    image: "/wp-content/uploads/2025/08/8024.jpg",
    imageAlt: "Család a napelemes családi házuk előtt",
    intro:
      "A személyre szabott igényfelmérés, a gondosan megtervezett rendszer és a 2 év telepítési garancia biztosítják, hogy otthonod hosszú távon is megbízhatóan termelje a saját energiáját. Ha szeretnéd, a pályázati támogatás ügyintézésében is melletted állunk.",
  },
  value: {
    eyebrow: "Optimális megoldás",
    title: "A napelem megtérülő beruházás",
    body:
      "A napelemes rendszer nemcsak hosszú távon csökkenti a villanyszámládat, hanem függetlenebbé is tesz az ingadozó energiaáraktól. Egy jól megtervezett, korszerű rendszerrel kiszámíthatóbbá teheted háztartásod energiaellátását, miközben otthonod értékét is növeled.",
  },
  benefits: {
    title: "Mit nyerhetsz egy napelemes rendszerrel?",
    body:
      "Saját áramtermeléssel kevésbé függsz a jövőbeli áremelkedésektől, miközben akár évi több százezer forintot is megtakaríthatsz a villanyszámlán. A napelemes otthon keresettebb és értékesebb a piacon, ráadásul tiszta, megújuló energiával csökkented a karbonlábnyomodat.",
    note: "A megtérülés kiszámítása sokak számára bonyolult és elbizonytalanító. Kérd kalkulációnkat!",
    ctaLabel: "Kérem a megtérülési kalkulációt",
    ctaHref: "#ajanlatkeres",
  },
  process: {
    eyebrow: "A rendelés menete",
    title: "A napelemes rendszer telepítéséhez vezető út",
    steps: [
      {
        num: "I.",
        title: "Előzetes árajánlat",
        body:
          "Ha kitöltötted az űrlapot, megvizsgáljuk, hogy megéri-e nálad kiépíteni a napelemes rendszert. Ha igen, elkészítünk egy árajánlatot, ami alapján el tudod dönteni, hogy szeretnéd-e.",
      },
      {
        num: "II.",
        title: "Konzultáció és felmérés",
        body:
          "Ha úgy döntöttél, hogy szeretnéd a garanciabajnok napelemes rendszert, egyeztetünk a hitelről, és amennyiben szükséges előzetes helyszíni felmérést tartunk.",
      },
      {
        num: "III.",
        title: "Árajánlat",
        body:
          "Ez után készítjük el a végleges ajánlatot. Az ajánlatunk semmiféle rejtett költséget sem tartalmaz majd, viszont több megoldást kínálunk neked.",
      },
      {
        num: "IV.",
        title: "Szerződéskötés",
        body:
          "Ha mindenben megállapodtunk, és minden kérdésedre választ kaptál, megkötjük a kivitelezési (és ha szeretnéd, a pályázatírási) szerződést is.",
      },
      {
        num: "V.",
        title: "Tervezés",
        body:
          "Most a szakértő csapataink következnek. A mérnökeink elkészítik a terveket, és elkezdjük beszerezni a szükséges (kivitelezési) engedélyeket.",
      },
      {
        num: "VI.",
        title: "Kivitelezés",
        body:
          "Ha minden engedély a kezünkben van, és a pályázatot is (99%, hogy pozitívan) elbírálták, elkezdjük a kivitelezési munkákat.",
      },
      {
        num: "VII.",
        title: "Mérőóra csere",
        body:
          "Ha elkészült a napelemes rendszered, akkor a szolgáltatód lecseréli a mérőórádat egy új ad/vesz órára, amivel nyomon követhető, hogy mennyi áramot fogyasztottál/termeltél.",
      },
      {
        num: "VIII.",
        title: "Termelés",
        body:
          "A jól méretezett rendszer és a megfelelő telepítés garantálja, hogy 0 forint lesz a villanyszámlád, és akár 40 évig független leszel minden szolgáltatótól, sőt még vissza is termelhetsz.",
      },
    ],
  },
  offer: {
    title: "Szeretnéd, ha készítenénk egy személyre szabott ajánlatot?",
    body: "Felmérjük otthonod energiaigényét, és olyan rendszert ajánlunk, ami biztosítja otthonod energiaellátását.",
    ctaLabel: "Ajánlatkérés",
    ctaHref: "#ajanlatkeres",
  },
  why: {
    eyebrow: "Cégünkről",
    title: "Miért válassz minket?",
    body:
      "Több mint 10 éves tapasztalatunkkal és több mint 5000 telepített rendszerrel garantáljuk a megbízhatóságot, a szakértelmet és a biztonságot. Átfogó szolgáltatásaink az első konzultációtól egészen a fenntartásig tartanak.",
    emphasize: [
      "10 éves tapasztalatunkkal",
      "5000 telepített rendszerrel",
      "megbízhatóságot",
      "szakértelmet",
      "biztonságot",
    ],
  },
  references: {
    eyebrow: "Referenciák",
    title: "Tekintsd meg korábbi munkáink",
    images: [
      "/wp-content/uploads/2022/08/szuha-napelem-scaled.jpg",
      "/wp-content/uploads/2022/08/Esztergom-napelem-scaled.jpg",
      "/wp-content/uploads/2022/08/budapest-3-napelem.jpg",
      "/wp-content/uploads/2022/08/Pecel-napelem-scaled.jpg",
      "/wp-content/uploads/2022/08/Budapest-2-napelem.jpg",
      "/wp-content/uploads/2022/08/Erd-napelem.jpg",
      "/wp-content/uploads/2022/08/Paty-napelem-scaled.jpg",
      "/wp-content/uploads/2022/08/siofok-napelem-2-scaled.jpg",
      "/wp-content/uploads/2022/08/Szentendre-Napelem.jpg",
    ],
  },
  contact: {
    title: "Kérd személyre szabott ajánlatunkat!",
    intro:
      "Töltsd ki ajánlatkérő űrlapunkat, és kollégánk felveszi veled a kapcsolatot a megadott elérhetőségeid egyikén. Kérjük, légy elérhető!",
  },
  grant: {
    title: "5000 fő alatti településen élsz?",
    body:
      "A Vidéki Otthonfelújítási Program keretein belül akár 3 millió forint vissza nem térítendő támogatást is szerezhetsz. Keresd értékesítő kollégánkat a részletekért.",
    repName: "Harasztosi Szabolcs",
    repRole: "Értékesítési vezető",
    repPhone: "(+36) 20-334-5849",
    repPhotoLabel: "Értékesítő kollégánk hétköznap 10:00–15:00 között elérhető – fordulj hozzá bizalommal!",
    repPhoto: "/wp-content/uploads/2025/08/Harasztosi_Szabolcs.png",
    ctaLabel: "Beszéljünk a lehetőségeidről!",
  },
};

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "lakossagi-napelem": lakossagiNapelem,
};

/** Sidebar service navigation (grouped), current page highlighted by slug. */
export type ServiceNavGroup = { heading: string; links: { href: string; label: string }[] };
export const SERVICE_NAV: ServiceNavGroup[] = [
  {
    heading: "Lakossági",
    links: [
      { href: "/lakossagi-napelem", label: "Napelem" },
      { href: "/lakossagi-energiatarolo-tamogatas", label: "Energiatárolás" },
      { href: "/lakossagi-napelem-tisztitas-es-karbantartas", label: "Tisztítás & karbantartás" },
    ],
  },
  {
    heading: "Vállalati",
    links: [
      { href: "/vallalati-napelem", label: "Napelem" },
      { href: "/vallalati-energiatarolas", label: "Energiatárolás" },
      { href: "/vallalati-napelem-tisztitas-es-karbantartas", label: "Tisztítás & karbantartás" },
    ],
  },
];
