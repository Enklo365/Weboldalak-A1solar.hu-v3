# A1 Solar — WordPress → Next.js migráció

Az `a1solar.hu` WordPress (Elementor + Blocksy) oldal hű átültetése
**React / Next.js 16 / Vercel** alapokra.

- **Éles URL:** https://a1solar.vercel.app
- **Vercel projekt:** `webbysteps-projects/a1solar`

## Architektúra

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

## Teendők élesítéshez

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

## Fejlesztés

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # éles build (299 statikus oldal)
vercel deploy --prod --yes
```

## Ismert korlátok
- Néhány blog-borítókép üres (a poszt első képe külső domainről hivatkozott, vagy hiányzik).
- A Google-vélemények (`[trustindex]`) widget nincs migrálva (külső script).
- A mirror-oldalakon lévő eredeti WP-űrlapok statikusak; a működő űrlap a
  `/kapcsolat` oldalon és minden cikk alján érhető el.
