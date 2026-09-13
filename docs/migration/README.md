# A1 Solar v3 migrációs alapállapot

Ez a könyvtár az `a1solar.hu` jelenlegi szerkezetének és a v3 URL-migráció döntéseinek auditálható alapja.

Az aktuális staging- és folytatási állapot:
[`docs/HANDOFF.md`](../HANDOFF.md).

## Fájlok

- `live-url-inventory-2026-09-11.csv`: a WordPress page és post sitemap URL-jei.
- `live-url-inventory-2026-09-11.json`: a felmérés időpontja és darabszámai.
- `live-menu-2026-09-11.md`: az éles fejléc és lábléc jelenlegi navigációja.
- `redirect-candidate-map.csv`: biztos és Search Console-adatokra váró átirányítások.

## Szabály

A `confirmed` sorok a copy deckben megadott vagy egyértelműen átnevezett URL-ek. A `candidate` sorok csak a Search Console ellenőrzése után válhatnak végleges 301-es átirányítássá. Az egyedi cikkek URL-je változatlan marad.

2026-09-12-i státusz: 15 `confirmed` redirect stagingen ellenőrizve, mindegyik
egyetlen közvetlen `301` lépéssel ér célba. A 16 `candidate` sor továbbra is
Search Console-adatra vár és nincs aktiválva.

Az éles felmérés megismételhető:

```text
node scripts/capture-live-url-baseline.mjs YYYY-MM-DD
```

## Ismert Next.js 404 logzaj

A catch-all route-ok `dynamicParams = false` beállítása gondoskodik arról, hogy
az ismeretlen útvonalak helyes statikus `404` választ adjanak, és a megerősített
read-only konténerben ne próbáljanak prerender cache-t írni. A Next.js 16.2.6
eközben `Internal: NoFallbackError` sort ír a naplóba (vercel/next.js #90537),
noha a 404 válasz helyes. Szándékosan nem szűrjük a `console.error` kimenetét és
nem építünk egyedi cache-kezelőt egy kizárólag naplózási hiba elfedésére.
