# A1 Solar v3 migrációs alapállapot

Ez a könyvtár az `a1solar.hu` jelenlegi szerkezetének és a v3 URL-migráció döntéseinek auditálható alapja.

## Fájlok

- `live-url-inventory-2026-09-11.csv`: a WordPress page és post sitemap URL-jei.
- `live-url-inventory-2026-09-11.json`: a felmérés időpontja és darabszámai.
- `live-menu-2026-09-11.md`: az éles fejléc és lábléc jelenlegi navigációja.
- `redirect-candidate-map.csv`: biztos és Search Console-adatokra váró átirányítások.

## Szabály

A `confirmed` sorok a copy deckben megadott vagy egyértelműen átnevezett URL-ek. A `candidate` sorok csak a Search Console ellenőrzése után válhatnak végleges 301-es átirányítássá. Az egyedi cikkek URL-je változatlan marad.

Az éles felmérés megismételhető:

```text
node scripts/capture-live-url-baseline.mjs YYYY-MM-DD
```
