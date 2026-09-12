# A1 Solar v3 – 8 fejlesztési szakasz

> Állapot 2026-09-12: az 1–8. szakasz és a blokkoló vizuális QA-javítások
> stagingig elkészültek. A stagingen futó kódrevision
> `1b7c07c9c69d2b5f6d7e8e88ec5e650ce7f105a3`.
> Merge és production deploy nem történt. A részletes folytatási állapot:
> [HANDOFF-2026-09-12.md](HANDOFF-2026-09-12.md).

## 1. Repository-alapozás

- A teljes örökség, minden ág és tag egyszeri átvitele az új v3 repositoryba.
- Az átvett `main` megjelölése a `legacy-import-2026-09-11` immutable taggel.
- Minden további munka külön `codex/feature-*` ágon.

## 2. Éles alapállapot mentése

- A jelenlegi `a1solar.hu` sitemap-URL-jeinek dátumozott mentése.
- A jelenlegi fejléc- és láblécmenü rögzítése.
- A repo-export és az éles sitemap eltéréseinek megőrzése későbbi Search Console-egyeztetéshez.

## 3. Információs architektúra és redirectalap

- Pontosan 35 dokumentált tartalmi oldal és a változatlan cikk-URL-ek.
- Egyszerű, csoportosított dropdown navigáció; csak szükség esetén két hasáb.
- A biztos és a Search Console-adatra váró átirányítások külön kezelése.

## 4. Minimális közös oldalrendszer

- Három oldalkeret: szolgáltatási, narratív és lista.
- A meglévő `SectionKit` elemeinek újrahasználata.
- Egyetlen, stagingen látható `EditorialSlot` kép-, videó- és grafikahelyekhez.
- Nincs CMS, JSON page builder, layout engine vagy általános szűrőmotor.

## 5. Reprezentatív szolgáltatási oldal

- A hosszú vállalati energiatárolási oldal megépítése teljes tartalommal.
- Sticky oldalsáv, szerkesztői helyek és mobil/táblagép viselkedés validálása.
- A vizuális minta elfogadhatóságának ellenőrzése a többi oldal előtt.

## 6. A fennmaradó oldalcsoportok

- Rólunk, lakossági, vállalati, ipari, referenciák, technológiák, cikklista és kapcsolat.
- Tartalomhoz igazodó széles, 2:1, 1:2 és kártyás blokkok.
- A jogi és egyedi cikkoldalak megtartása.

## 7. Űrlap- és tartalmi integrációs előkészítés

- Egy közös Avora-adapter szerződés, valódi külső bekötés nélkül.
- A később érkező referenciaadatok, képek, videók és média-linkek egyértelmű helyei.
- A hiányzó adatok dokumentált adatbekérő listája.

## 8. Staging és minőségbiztosítás

- Build, route- és redirecttesztek, reszponzív ellenőrzés 768, 820 és 1024 px szélességen.
- Azonos build telepítése a `*.homokozo.uk` stagingre és smoke test.
- A valódi `*.hu` production környezet változatlan marad a külön „Mehet élesbe” jóváhagyásig.

## Következő ellenőrzési kapu

- A kézi desktop- és mobilnézeti vizuális QA megfelelt; jegyzőkönyve:
  [VISUAL-QA-2026-09-12.md](VISUAL-QA-2026-09-12.md).
- Következő döntési pont a Draft PR #1 merge-e.
- `main` merge és production deploy csak külön emberi jóváhagyással.
