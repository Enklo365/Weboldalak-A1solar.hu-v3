# A1 Solar v3 – aktuális átadás

Frissítve: 2026-09-14. Ez az egyetlen folyamatosan frissített
állapotfájl; a dátumozott HANDOFF- és QA-fájlok változatlan archívumok.

## Holnapi indulás

Új munkamenetben először az `AGENTS.md`, ezt a fájlt, a tényleges Git/PR
állapotot és a staging futó image-tagjét/OCI revisionjét ellenőrizd. A teljes
korábbi beszélgetést ne dolgozd fel újra. Eltérés esetén mindig a tényleges Git-
és staging-állapot az elsődleges.

## Aktuális állapot

- Fejlesztési ág: `codex/feature-v3-visual-refactor`
- Utolsó alkalmazáskód-commit: `2cfd8eef59672cffcbdee3810b28ea21099748d8`
- Staging: [https://teszta1solar.homokozo.uk/](https://teszta1solar.homokozo.uk/)
- Staging image: `a1solar-nextjs:v3-2cfd8ee`
- Staging OCI revision: `2cfd8eef59672cffcbdee3810b28ea21099748d8`
- Staging állapot: `healthy`, read-only, `noindex, nofollow, noarchive`
- `main`: `c3e41bac88e381939720aa09f4309c604852b464`
- Production (`a1solar.hu`, `www.a1solar.hu`): nem módosult.
- A projekt új alapértelmezett munkamódja: kis vizuális változtatás először
  csak helyi preview és célzott QA; staging kizárólag külön „Mehet stagingre”
  utasításra indul.
- A Draft PR #1 ága (`codex/feature-site-v3`) és az önálló
  `codex/feature-image-overlap` ág is tartalmazza a jóváhagyott sabloncommitot.
- A `codex/feature-v3-visual-refactor` ág fel van pusholva az originre; a mostani
  staging release közvetlenül ennek az alkalmazáskód-commitjából készült.
- A lezáró dokumentációs commit miatt a fejlesztési ág HEAD-je a fenti
  alkalmazáskód-commit dokumentációs leszármazottja lesz; az aktuális SHA-t
  Gitből olvasd ki.

## Ma elkészült

- Az elfogadott, 1290 px-es kép- és videóképes hero közös sablon lett, és mind a
  további 34 v3 oldal használja.
- A főoldali bevezető teljes tartalmi szélességet kapott.
- A szakmai tapasztalatot összegző sor egysoros, kiemelt sáv lett.
- A 02-es főoldali szakasz kép–szöveg sorrendje és a további tik-tak ritmus
  helyreállt.
- A 07-es szakasz teljes szélességű, középre rendezett lett.
- A záró szakasz és a footer közötti fölösleges tér csökkent.
- A főoldalon elfogadott záró szakasz–footer térköz minden v3 aloldalra
  egységesen kiterjed; a listázó kártyák belső térköze változatlan maradt.
- Production build, asztali vizuális QA, valamint mobil/tablet technikai
  túlcsordulás-ellenőrzés sikeres.
- A footer-térközt 390, 820 és 1440 px szélességen a főoldalon, hosszú
  szolgáltatási oldalon, technológiai oldalon és a cikklistán ellenőriztük.
- Elkészült és a közös `SectionKit` exportjain keresztül újrahasználható az
  `ImageOverlap` négy sablonja: jobb/bal elrendezés, piros/grafit tónus.
- Elkészült a `FeatureTiles` négy sablonja: Equal/Mosaic elrendezés,
  piros/grafit tónus.
- Elkészült a grafit `DarkFeature`, az ötképes `ProjectMosaic` és a minimalista
  grafit `BigStats` sablon.
- Az összes új sablon élő mintával szerepel a `/komponensek/` katalógusban.
- A sabloncsomag production buildje sikeres volt: 346 statikus útvonal.
- Helyi reszponzív QA készült 390, 768, 820, 1024 és 1440 px-en; túlcsordulás
  nem volt. A staging konténer `healthy`, read-only, a katalógusban mind az öt
  új sabloncsalád ellenőrzötten jelen van.
- A 35 v3 tartalmi oldal kizárólag vizuális refaktort kapott a közös
  `FramedHero`, `ImageOverlap`, `FeatureTiles`, `DarkFeature`, `ProjectMosaic`,
  `StatementSection` és `SectionKit` elemekkel; a copy deck és a generált
  tartalom ellenőrzőösszege változatlan maradt.
- Az `Az oldalon` oldalsáv minden v3 aloldalról lekerült, a hosszú
  képátfedéses szövegek teljes szélességű folytatódobozt kapnak, a páratlan
  csemperácsok üres helyét pedig az A1 Solar minősítési badge tölti ki.
- A `BigStats` kizárólag a jóváhagyott öt állandó vállalati állítást jeleníti
  meg; oldalankénti automatikus szövegkivonás nincs.
- A fejléc, lábléc, cookie-panel, favicon és strukturált adatok a hivatalos
  design-system SVG logót, LogoMark favicont és az eredeti minősítési SVG-t
  használják.
- A hat kiemelt jogi/OEP oldal oldalsáv nélküli, teljes konténerszélességű
  tartalmat és külön kompakt hero-fejlécet használ (300 px desktop, 230 px
  mobil).
- A globális tipográfia, a hero alatti teljes szélességű sorkizárt
  bevezetők, a bekezdések sortörései és az egymást követő szakaszok
  távolságai egységesek lettek. A `BigStats`-on kívüli régi, csőjellel
  tagolt statisztikasorok kikerültek.
- A katalógusban külön, egyértelmű néven szerepelnek a lebegő jobb/bal
  oldali `ImageOverlap` változatok, a kompakt faktorrács és a nagy
  `FeatureGrid`; a `BigStats` a jóváhagyott, egységes tipográfiájú ötös
  sablonként is elérhető.
- A főoldal megkapta a jóváhagyott `FeatureTilesEqualRed` tartalmat, a
  világosabb grafit `DarkFeature` gyártói logókat, valamint a kattintással
  lapozható Google-értékelés helyőrző szakaszt.
- A cégünkről oldal teljes szélességű, sorkizárt tartalmi blokkokat,
  frissített `StepTimeline` mérföldköveket, világosabb `DarkFeature`
  szakaszt, videóhelyet, gyártói médiablokkot és Google-sávot kapott.
- A médiaoldalon a kiemelt megjelenések `FeatureTilesEqualRed`, a szakmai
  témák a nagy `FeatureGrid` sablont használják; a felesleges további
  szakasz kikerült, a hét megjelenést kattintható `FaqList` foglalja össze.
- A karrieroldal egyetlen, horgonyokkal címezhető oldallá alakult: a
  szakterületek háromoszlopos `FactorGrid`, a pozíciók
  `FeatureTilesEqualGraphite` megjelenítést kaptak, a három korábbi URL
  tartós átirányítással a megfelelő horgonyra vezet.
- A `2cfd8ee` release production buildje sikeres volt: 345 statikusan
  generált oldal. A tartalom- és URL-validáció eredménye:
  `35` oldal, `35` egyedi URL, `15` megerősített redirect.
- A staging smoke tesztben a főoldal, a karrier-, média-, cikk- és
  komponenskatalógus oldal `200` választ adott; a régi villanyszerelő URL
  `308` válasszal a `#villanyszerelo` horgonyra vezet. A konténer `healthy`,
  read-only, az `X-Robots-Tag` pedig `noindex, nofollow, noarchive`.

## Nyitott ellenőrzés és következő lépés

- A felhasználó a telefonos megjelenést később, kézzel ellenőrzi.
- A felhasználó az összes új sablont jóváhagyta; azok későbbi natív oldalakba
  szabadon beilleszthetők és tovább finomíthatók.
- Következő lépésként a felhasználó a stagingen ellenőrizheti a 35 refaktorált
  oldalt, a `/komponensek/` katalógust, az összevont karrieroldalt, a
  médiaoldalt és a kompakt jogi oldalfejléceket.
- A változatlan nagy médiacsomag staging feltöltésének gyorsítását külön
  feladatban először csak elemezni kell, 2–3 KISS megoldási lehetőséggel;
  implementációra ez önmagában nem ad engedélyt.
- Merge és production deploy nincs jóváhagyva; a valódi `.hu` production
  környezet változatlan.

## Hatékony folytatás

Egy feladat egy körülhatárolt módosítás legyen. Kis vizuális kérésnél helyi
preview és célzott nézetellenőrzés után állj meg, és jelezd, hogy még nem történt
build, commit, push vagy staging. Build, commit/push és staging release csak a
külön jóváhagyott munkacsomagnál induljon. A QA legyen változásarányos; teljes
log vagy ismételt ellenőrzés csak konkrét hiba vagy bizonytalanság esetén kell.
A részletes szabályok az `AGENTS.md` „Hatékony munkamód” részében találhatók.
