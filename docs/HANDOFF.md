# A1 Solar v3 – aktuális fejlesztési átadás

Frissítve: 2026-09-12. Ez az egyetlen folyamatosan frissített állapotfájl. A
dátumozott HANDOFF- és QA-dokumentumok változatlan történeti naplók.

## Elsődleges források

Eltérés esetén az információk elsőbbségi sorrendje:

1. tényleges helyi és távoli Git-, illetve GitHub PR-állapot;
2. a staging futó konténerének meglévő image-tagje és OCI revision címkéje;
3. ez az aktuális handoff;
4. dátumozott történeti handoffok és QA-jegyzőkönyvek.

Az állapot azonosításához nem kell új verzióendpointot vagy más technikai
rendszert építeni, ha a meglévő konténeradatok egyértelműek.

## Ellenőrzött valós állapot

Az ellenőrzés időpontja: 2026-09-12.

- Aktuális helyi ág: `codex/feature-site-v3`
- Helyi HEAD: `feb6c93dfeda89ed8d45f766b05144705ed83e62`
- Távoli feature ág: `origin/codex/feature-site-v3`, ugyanazon a
  `feb6c93dfeda89ed8d45f766b05144705ed83e62` commiton
- Helyi és távoli `main`: `c3e41bac88e381939720aa09f4309c604852b464`
- Pull Request: [#1](https://github.com/Enklo365/Weboldalak-A1solar.hu-v3/pull/1),
  nyitott, Ready for review (`draft: false`), nincs merge-ölve
- PR head: `codex/feature-site-v3` @
  `feb6c93dfeda89ed8d45f766b05144705ed83e62`
- PR base: `main` @ `c3e41bac88e381939720aa09f4309c604852b464`
- A repositoryban nincs konfigurált GitHub Actions workflow; ez önmagában nem
  változtat a jelenlegi dokumentációs feladat hatókörén.
- A fenti SHA az ellenőrzött alkalmazáskód állapota a dokumentáció rendezése
  előtt. A dokumentációs commit nem módosít alkalmazáskódot; az aktuális ág- és
  PR-headet minden folytatáskor a Git/GitHub tényleges állapotából kell lekérni.

## Staging

- URL: [https://teszta1solar.homokozo.uk/](https://teszta1solar.homokozo.uk/)
- Futó konténer: `teszta1solar-staging-app-1`
- Image: `a1solar-nextjs:v3-1b7c07c`
- OCI revision: `1b7c07c9c69d2b5f6d7e8e88ec5e650ce7f105a3`
- Image ID: `sha256:42ca2bb49afb3e30aab930eb4df981fb1362c196bfee6f0b3b31922b37def2de`
- Állapot az ellenőrzéskor: `healthy`, read-only root filesystem

A staging commit a feature ág HEAD-jének őse, de nem azonos vele. A stagingen
tehát a korábban QA-zott `1b7c07c…` fut; a PR és a távoli feature ág két későbbi
commitot is tartalmaz (`513da96…`, `feb6c93…`). A staginget ez a dokumentációs
munka nem változtatja meg.

## Production

A production kizárólag:

- [https://a1solar.hu/](https://a1solar.hu/)
- [https://www.a1solar.hu/](https://www.a1solar.hu/)

A `.homokozo.uk` cím mindig staging. A staging és a production állapotát külön
kell kezelni. A jelenlegi munkában production módosítás, merge vagy deploy nem
történik. A `main` merge-ből nem szabad automatikus production deployra
következtetni; ezt csak a tényleges deployment-konfiguráció igazolhatja.

## Kötelező munkafolyamat

Fejlesztési ág → staging → technikai és vizuális ellenőrzés → emberi jóváhagyás
→ `main` → külön jóváhagyott production deploy.

- A staging az elsődleges ellenőrzési környezet.
- A production módosítása mindig külön, egyértelmű emberi jóváhagyást igényel.
- A külső WebbyStep fejlesztő jóváhagyása és a neki írt e-mail nem része a
  fejlesztési folyamatnak.
- Először a meglévő közös komponensekből kell megoldást keresni.
- Valóban szükséges új reusable komponenst röviden javasolni kell a
  felhasználónak, majd meg kell várni a döntését.
- Egyszer használatos workaround, indokolatlan CMS, page builder, layout engine
  vagy más általános rendszer nem készül.
- Vizuális módosításkor meglévő szöveg vagy tartalom külön utasítás nélkül nem
  törölhető.
- Közös vagy globális komponens hatását több reprezentatív oldalon és több
  viewporton kell ellenőrizni.
- A technikai működés és a vizuális minőség egyaránt követelmény.

## Jelenlegi fejlesztési fókusz

A technikai alap nagy része elkészült. A következő fő szakasz:

1. az új oldal vizuális minőségének javítása;
2. a régi WordPress oldalhoz képest legalább azonos vagy jobb megjelenés;
3. a 35 új oldal tartalmi és vizuális finomítása;
4. képek, videók, referenciák és más hiányzó tartalmak fokozatos behelyezése;
5. később az Avora bekötése;
6. végül a WordPress kontrollált leváltása.

Új infrastruktúra vagy framework építése nem aktuális cél. KISS az alapelv.

## Következő döntési pont

A dokumentáció rendezése után meg kell állni. A staging, a `main` és production
változatlan marad; további fejlesztés vagy telepítés csak új felhasználói
utasításra indulhat.
