# A1 Solar — WordPress → Next.js migráció

> **Aktuális v3 állapot (2026-09-11):** a folytatás előtt kötelező elolvasni a
> [`docs/HANDOFF-2026-09-11.md`](docs/HANDOFF-2026-09-11.md) fájlt. A staging
> címe `https://teszta1solar.homokozo.uk/`. A valódi production cím
> `https://a1solar.hu/` és annak `www` változata; ezek változatlanok. Merge és
> production deploy nem történt, és csak külön emberi jóváhagyással történhet.
> Az alábbi Vercel-adatok örökölt történeti információk, nem jelentenek aktuális
> production célt vagy deployengedélyt.

Az `a1solar.hu` WordPress (Elementor + Blocksy) oldal hű átültetése
**React / Next.js 16 / Vercel** alapokra.

- **Örökölt Vercel preview:** https://a1solar.vercel.app
- **Örökölt Vercel projekt:** `webbysteps-projects/a1solar`

## Architektúra

A v3 réteg 35 copy deck oldalát a `src/content/v3-pages.generated.json`, a
`src/lib/v3-pages.ts`, valamint a `src/components/v3/` egyszerű komponensei
szolgálják ki. Az egy szegmensű v3 URL-eket a `src/app/[slug]/page.tsx`, a
többszegmenseseket a `src/app/[slug]/[...subslug]/page.tsx` kezeli. Ez a réteg
a lent dokumentált örökölt natív/mirror tartalommal együtt él.

| Terület | Megoldás |
|---|---|
| Keret | Next.js 16 (App Router, Turbopack), React 19, TypeScript |
| Stílus | Saját design rendszer (`src/app/globals.css`), Tailwind 4 elérhető |
| Fejléc / lábléc | Saját React komponensek (`src/components/Header.tsx`, `Footer.tsx`) |
| Tartalom | WordPress WXR export → JSON (`content/pages.json`, `posts.json`) |
| Oldalak (55) | Hű **mirror**: az élő oldal renderelt `<main>` HTML-je + scope-olt CSS |
| Blog (241 poszt) | React cikk-elrendezés a WP exportból, kategóriaszűrő + lapozás |
| Űrlap | Resend (`src/app/api/contact/route.ts`) |
| Assetek | Önállóan hostolva a `public/wp-content/...` alatt (~180 MB) |

### Miért „mirror”?
A WordPress WXR export **kicsupaszította a builder-oldalak markupját**
(divek/class-ok nélkül), így azok pusztán az exportból nem rekonstruálhatók.
Ezért oldalanként lementettük az **élő, szerver-renderelt `<main>` HTML-t** és a
hozzá tartozó CSS-t (`content/mirror.json` + `public/wp-content/.../*.css`).
A teljes WP/Elementor/Blocksy CSS-t `.mirror-root`-ra **scope-oltuk**, így nem
ütközik a saját React fejléc/lábléc stílusaival.

## Örökölt Vercel-jegyzetek – nem aktuális élesítési runbook

Az alábbi pontok a korábbi Vercel-változathoz tartoztak. Nem adnak engedélyt
deployra, és a jelenlegi AX41 stagingből nem szabad ezek alapján productiont
képezni.

1. **Resend e-mail (ajánlatkérő űrlapok):** add meg a Vercel projekt
   env változóit — enélkül az űrlap „nincs konfigurálva" hibát ad:
   - `RESEND_API_KEY` — Resend API kulcs
   - `RESEND_FROM_EMAIL` — pl. `A1 Solar <info@a1solar.hu>` (a domaint verifikálni kell a Resendben)
   - `RESEND_TO_EMAIL` — pl. `info@a1solar.hu`
2. **Vercel „Attack Challenge Mode":** a látogatók pár másodperces
   „böngésző-ellenőrzést" látnak. Kikapcsolás: Vercel → Project → Settings →
   Security → Attack Challenge Mode = Off (publikus marketing oldalhoz ajánlott).
3. **Saját domain:** Vercel → Project → Settings → Domains → `a1solar.hu`.
4. **Kalkulátorok / speciális űrlapok:** a napelem-kalkulátor és a fluentform
   alapú előszűrők jelenleg branded placeholder + CTA (`/kapcsolat`). Ezek valós
   backend-implementációt igényelnek (lásd `src/lib/content.ts` shortcode-kezelő).

## Helyi fejlesztési parancsok

```bash
yarn install
yarn dev      # http://localhost:3000
yarn build    # production build; jelenlegi ellenőrzött eredmény: 346 útvonal
```

## Ismert korlátok
- Néhány blog-borítókép üres (a poszt első képe külső domainről hivatkozott, vagy hiányzik).
- A Google-vélemények (`[trustindex]`) widget nincs migrálva (külső script).
- A mirror-oldalakon lévő eredeti WP-űrlapok statikusak; a működő űrlap a
  `/kapcsolat` oldalon és minden cikk alján érhető el.
