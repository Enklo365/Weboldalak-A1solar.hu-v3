# A1 Solar v3 – aktuális átadás

Frissítve: 2026-09-13. Ez az egyetlen folyamatosan frissített
állapotfájl; a dátumozott HANDOFF- és QA-fájlok változatlan archívumok.

## Holnapi indulás

Új munkamenetben először az `AGENTS.md`, ezt a fájlt, a tényleges Git/PR
állapotot és a staging futó image-tagjét/OCI revisionjét ellenőrizd. A teljes
korábbi beszélgetést ne dolgozd fel újra. Eltérés esetén mindig a tényleges Git-
és staging-állapot az elsődleges.

## Aktuális állapot

- Fejlesztési ág: `codex/feature-workflow-streamlining`
- Utolsó alkalmazáskód-commit: `ddd766393a3f62d83e4ebb491cfec476676368bf`
- Staging: [https://teszta1solar.homokozo.uk/](https://teszta1solar.homokozo.uk/)
- Staging image: `a1solar-nextjs:v3-ddd7663`
- Staging OCI revision: `ddd766393a3f62d83e4ebb491cfec476676368bf`
- Staging állapot: `healthy`, read-only, `noindex, nofollow, noarchive`
- `main`: `c3e41bac88e381939720aa09f4309c604852b464`
- Production (`a1solar.hu`, `www.a1solar.hu`): nem módosult.
- A projekt új alapértelmezett munkamódja: kis vizuális változtatás először
  csak helyi preview és célzott QA; staging kizárólag külön „Mehet stagingre”
  utasításra indul.
- A lezáró dokumentációs commit miatt a fejlesztési ág HEAD-je a fenti alkalmazáskód
  commit dokumentációs leszármazottja lesz; az aktuális SHA-t Gitből olvasd ki.

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

## Nyitott ellenőrzés és következő lépés

- A felhasználó a telefonos megjelenést később, kézzel ellenőrzi.
- További módosítás csak új felhasználói utasításra indulhat.
- A változatlan nagy médiacsomag staging feltöltésének gyorsítását külön
  feladatban először csak elemezni kell, 2–3 KISS megoldási lehetőséggel;
  implementációra ez önmagában nem ad engedélyt.
- Merge és production deploy nincs jóváhagyva.

## Hatékony folytatás

Egy feladat egy körülhatárolt módosítás legyen. Kis vizuális kérésnél helyi
preview és célzott nézetellenőrzés után állj meg, és jelezd, hogy még nem történt
build, commit, push vagy staging. Build, commit/push és staging release csak a
külön jóváhagyott munkacsomagnál induljon. A QA legyen változásarányos; teljes
log vagy ismételt ellenőrzés csak konkrét hiba vagy bizonytalanság esetén kell.
A részletes szabályok az `AGENTS.md` „Hatékony munkamód” részében találhatók.
