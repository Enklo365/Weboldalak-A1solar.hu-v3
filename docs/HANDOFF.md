# A1 Solar v3 – aktuális átadás

Frissítve: 2026-09-17. Ez az egyetlen folyamatosan frissített
állapotfájl; a dátumozott HANDOFF- és QA-fájlok változatlan archívumok.

## Holnapi indulás

Új munkamenetben először az `AGENTS.md`, ezt a fájlt, a tényleges Git/PR
állapotot és a staging futó image-tagjét/OCI revisionjét ellenőrizd. A teljes
korábbi beszélgetést ne dolgozd fel újra. Eltérés esetén mindig a tényleges Git-
és staging-állapot az elsődleges.

## Aktuális állapot

- Fejlesztési ág: `codex/fix-v3-ipari-kapcsolat-cikkek`
- Staging release commit: `8f88e8b5b5985dfb5da47212bd0100f3a0a0dc9f`
- Biztonsági és alkalmazáskód-commit: `3835b25fdf953a63f87a2dec72e9964c5b53d12d`
- Pull request: [#4](https://github.com/Enklo365/Weboldalak-A1solar.hu-v3/pull/4)
- Staging: [https://teszta1solar.homokozo.uk/](https://teszta1solar.homokozo.uk/)
- Staging image: `a1solar-nextjs:v3-8f88e8b`
- Staging OCI revision: `8f88e8b5b5985dfb5da47212bd0100f3a0a0dc9f`
- Staging állapot: `healthy`, read-only, `noindex, nofollow, noarchive`
- `main`: `c3e41bac88e381939720aa09f4309c604852b464`
- Production (`a1solar.hu`, `www.a1solar.hu`): nem módosult.
- A projekt új alapértelmezett munkamódja: kis vizuális változtatás először
  csak helyi preview és célzott QA; staging kizárólag külön „Mehet stagingre”
  utasításra indul.
- A fejlesztési ág fel van pusholva az originre; a staging release közvetlenül
  a fenti release commitból készült.
- A lezáró dokumentációs commit miatt a fejlesztési ág HEAD-je a fenti
  alkalmazáskód-commit dokumentációs leszármazottja lesz; az aktuális SHA-t
  Gitből olvasd ki.

## Ma elkészült

- A teljes kódbázis első körös release- és biztonsági felülvizsgálása
  elkészült. A Next.js `16.3.3` verzióra frissült; a production dependency
  audit eredménye: nincs ismert sérülékenység.
- A kapcsolat API same-origin ellenőrzést, kérésméret-korlátot, IP-alapú rate
  limitet, kötelező szerveroldali hozzájárulás-ellenőrzést, honeypotot és
  fájlszignatúra-ellenőrzést kapott.
- Biztonsági HTTP headerek, CSP, HSTS, JSON-LD escape és az importált legacy
  HTML végrehajtható tartalmainak szűrése került be.
- A build többé nem tölt le Google Fontot: a webhely a meglévő helyi változó
  fontot használja. A Docker build-context titok- és zajszűrt lett.
- A production build 340 statikus oldalt generált. A TypeScript, a diff-check,
  a 35 oldalas v3 validáció, a célzott API-tesztek és a 390/820/1440 px-es
  vizuális QA sikeres.
- A staging image próbakonténerben, majd a dokumentált
  `teszta1solar-staging` Compose-projektben is ellenőrzött. A főoldal, egy v3
  szolgáltatási oldal, a cikklista, a kapcsolat oldal és a font asset `200`;
  a megszüntetett URL `404`, a jóváhagyott átirányítás `301`, az idegen eredetű
  API-kérés `403`. A konténer `healthy`, read-only, az `X-Robots-Tag` értéke
  `noindex, nofollow, noarchive`.

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
- A `Z:\Marketing\A1 weboldal újragondolás` forrásból 474 kép vizuális
  átnézése után 62 releváns projekt-, gyártói, technológiai és csapatfotó
  került kiválasztásra. A forrásfájlok érintetlenek maradtak; a webes másolatok
  legfeljebb 2000×1600 px-es, 80-as minőségű WebP fájlok a
  `public/media/v3/images/` mappában (összesen 17,4 MB).
- Négy saját videó webre optimalizált H.264/AAC MP4 változata készült el a
  `public/media/v3/videos/` mappában: FoxESS G-MAX beüzemelés, két Deye
  termék-/oktatási részlet és egy 90 másodperces Sigenergy bemutató. A négy
  fájl együttes mérete kb. 33 MB; a G-MAX forrás 297 MB-ról 12,4 MB-ra
  csökkent.
- A `src/lib/v3-curated-media.ts` oldal- és szakaszszintű kurátori térképe
  szolgáltatja a képeket, magyar alt szövegeket, fókuszpontokat, videókat és
  poster képeket. A közös v3 hero-k és tartalmi mozaikok már ezt használják;
  a nyers Google-értékelés képernyőképek, magánjellegű képek, duplikátumok és
  hibafotók nem kerültek be.
- A helyi médiafrissítés QA-ja: TypeScript `--noEmit` sikeres, `git diff
  --check` sikeres, mind a 35 v3 útvonal HTTP `200`, friss böngészőbetöltés
  után nincs konzolhiba. A 768, 820 és 1024 px-es hero-elrendezések, valamint
  a Deye, Sigenergy és BESS médiaelemek helyben ellenőrizve lettek.
- A főoldal első három szolgáltatási szakasza megkapta a felhasználó által
  kijelölt lakossági, Huawei energiatárolós és Deye backup fotót; a „Nem
  egyetlen terméket adunk. Rendszert tervezünk.” szakaszban a komplett
  energetikai rendszer ábrája látható. A négy PNG-ből 64–245 KB-os WebP
  változat készült, a szerkesztői KÉP/VIDEÓ helyőrző szövegek és a gyártói
  belsőlink-lista kikerültek, a négy gyártói logócsempe megmaradt.
- A főoldali médiacsere helyi QA-ja: TypeScript `--noEmit` és `git diff
  --check` sikeres, a főoldal HTTP `200`, tiszta újratöltés után nincs
  böngészőkonzol-hiba. A négy célzott szakasz képfájljai és alt szövegei,
  valamint a Deye, Huawei, Sigenergy és FoxESS csempék DOM-szinten is
  ellenőrizve lettek.
- Minden oldalon megjelent a görgetés után látható, jobb alsó „Ugrás az oldal
  tetejére” gomb. A cégünkről oldal mérföldkőszakasza megkapta az A1 Solar
  YouTube-videót, az öt tevékenység 2×2 + teljes szélességű csemperácsba
  került, a szervizszöveg és a hozzá tartozó két kép külön blokk lett, az „A1
  Solar a médiában” gomb középre került.
- A cégünkről oldalon a szerkesztői `KÉP` és `Képcím:` jelölések helyett csak
  a tiszta képcímek láthatók. Bekerült a tömörített csapatépítő-, zanzibári és
  nemzetközi partnerfotó (102–309 KB), valamint a tíz csatolt, valódi Google-
  értékelés a helykitöltők helyére.
- A médiaoldal hét kiemelt cikkének kivonata legfeljebb négy sorban jelenik
  meg. A „Hol jelent meg az A1 Solar?” szakasz új, fehér médiapaneljén 19
  sajtóorgánum helyben tárolt logója és 44 cikklinkje szerepel; a több
  megjelenéssel rendelkező orgánumok címei lenyitható listában érhetők el. A
  korábbi „Összes médiamegjelenés” blokk kikerült.
- A cégünkről oldalon a Google-értékelések szövege legfeljebb 12 soros, a
  „Nemzetközi tapasztalat, stabil magyar háttér” blokk főképe a tömörített
  kenyai napelempark-fotó (kb. 254 KB), az „Ugrás az oldal tetejére” gomb pedig
  a lebegő PDF-gomb fölé került.
- A legutóbbi célzott helyi QA során a média- és cégünkről oldal HTTP `200`
  választ adott, mind a 19 médialogó betöltött, a lenyitható cikklista, a
  négy- és tizenkét soros korlátozás, a kenyai kép és a feljebb helyezett
  görgetőgomb böngészőben is ellenőrizve lett. A TypeScript `--noEmit` és a
  `git diff --check` sikeres.
- A szerviz és garancia oldal első szakasza a szerverről átvett, 192 KB-os
  műszeres szervizfotót és külön folytatásblokkot kapott; a monitoringos
  képhelyőrző szöveg kikerült. A szervizfolyamat a bal oldali lebegő grafit
  képsablont és a meglévő inverter-diagnosztikai fotót használja, a régi
  grafikacím nélkül.
- A „Közvetlen gyártói háttér” alól minden képgaléria kikerült, a stabilitási
  blokk képe helyére a `BrandBadges` minősítési sáv került. A 05–07-es
  szervizbejelentési tartalom egyetlen 05-ös grafit blokkba került, kattintható
  e-mail-címmel és levélküldő gombbal.
- A lakossági napelem + energiatároló oldal hero-képe 40 px-szel feljebb
  fókuszál. Az első szakasz a jobb oldali lebegő grafit képsablont, a
  mezőtárkányi fotót és a külön A1 Solar tervezési folyamatgrafikát használja.
  A 02–04-es, valamint a záró 06-os tartalom teljes szélességű `Section`
  blokkokba került, a négy gyártó pedig linkelt logókártyát kapott.
- Ugyanezen az oldalon 12 valós projektből álló referenciarács készült 14
  fotóval. Minden kártyán megjelenik a helyszín, a napelem teljesítménye és
  darabszáma, az inverter, az akkumulátor, a backup állapota és a projekt
  célja; a fájlnévből nem igazolható adat „Nincs feltüntetve” jelölést kapott.
  A 15 új forrásképből 82-es minőségű, legfeljebb 1800 px-es WebP készült.
- A médiaoldal sajtókapcsolati szakasza fölötti és alatti térköz 20 px-re
  csökkent. A szervizoldalon a „Miben segít…” és a „Közvetlen gyártói háttér”
  szövege teljes szélességű, a stabilitási szöveg és a badge-sáv egyetlen
  világos panelt alkot, a bejelentési cím, e-mail és leírás pedig egységes
  törzsszöveg-méretet használ.
- A lakossági energiatárolós oldal 02–03-as szakasza közös, reszponzív
  kétoszlopos kártyapárt alkot. A gyártói szakasz széles képernyőn a szöveg
  mellett 2×2 linkelt logócsempét jelenít meg. A csatolt Huawei-logó 13 KB-os,
  átlátszó WebP-ként bekerült a gyártói eszközök és a `BrandRow`
  komponenskatalógus-példa közé.
- A meglévő napelem energiatárolós bővítési oldal első tartalmi szakasza teljes
  szélességű lett. A három műszaki út egy közös `FeatureGrid` blokkban jelenik
  meg, a backup rész két egymás melletti csempét és középre igazított gombot
  kapott, a kitöltetlen referenciakártyák helyére pedig három korábbi, valós
  lakossági projektfotó és a hozzájuk tartozó alapadatok kerültek.
- A meglévő rendszer bővítése, a backup és a szigetüzem oldal alján is
  megjelenik a közös `BigStats` és Google-értékelés blokk. A backup- és
  szigetüzem-oldalak kép nélküli tartalmi szakaszai teljes szélességű `Section`
  elrendezést használnak.
- A három oldal célzott helyi QA-ja sikeres: TypeScript `--noEmit`, `git diff
  --check` és mindhárom URL HTTP `200`; a szakaszok, a három referenciafotó, a
  statisztikák és az értékelések böngészőben is ellenőrizve lettek.

- A lakossági, vállalati és ipari v3 oldalak újabb tartalmi és vizuális
  finomításai elkészültek: egységesebb szakasztávolságok, teljes szélességű
  szövegblokkok, kompakt faktor- és folyamatkomponensek, valós lakossági és
  Tompa naperőmű-referenciák, BESS projektblokkok, valamint az egységes
  BigStats, BrandBadges és Google-értékelés sávok kerültek a kijelölt oldalakra.
- A `0d1c622` release validációja 35 egyedi v3 URL-t és 15 megerősített
  redirectet talált; a production build 345 statikus oldalt generált. A
  staging konténer `healthy`, read-only, a főoldal, a három legutóbb módosított
  ipari oldal, a lakossági referenciaoldal, a cikklista és a kijelölt új
  képassetek `200` választ adtak. Az `X-Robots-Tag` változatlanul
  `noindex, nofollow, noarchive`.

## Nyitott ellenőrzés és következő lépés

- A felhasználó a telefonos megjelenést később, kézzel ellenőrzi.
- A teljes 2026-09-15-i vizuális és tartalmi csomag a `0d1c622` commitban van,
  originre pusholva és a `teszta1solar.homokozo.uk` stagingen telepítve.
- A felhasználó az összes új sablont jóváhagyta; azok későbbi natív oldalakba
  szabadon beilleszthetők és tovább finomíthatók.
- A production build 345 oldalt generált. A staging konténer `healthy`,
  read-only; a főoldal, az érintett cég-, média-, szerviz- és lakossági oldalak,
  a cikklista, továbbá reprezentatív új kép-, videó-, logó- és médialogó assetek
  `200` választ adtak. Az `X-Robots-Tag` változatlanul
  `noindex, nofollow, noarchive`.
- A helyi preview szerver a napi etap lezárásakor le lett állítva. Holnap új
  munkamenetben a tényleges Git/staging állapot rövid ellenőrzése után lehet
  folytatni a következő körülhatárolt feladattal.
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
