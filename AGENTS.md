<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# A1 Solar — projekt szabályok agenteknek

Ezek a projekt kötelező szabályai minden agentnek (Codex, Claude Code, stb.).
Mielőtt bármit írnál, olvasd el a `MIGRATION.md`-t, és nézd át a `src/` szerkezetét.

Az aktuális projektállapot és a következő engedélyezett lépés a
`docs/HANDOFF.md` fájlban található. Új munkamenetben ezt is kötelező
elolvasni bármilyen módosítás előtt.

A dátumozott HANDOFF- és QA-fájlok változatlan történeti naplók. Eltérés esetén
a tényleges Git-, GitHub- és futó staging-állapot fontosabb bármely handoffnál.

## A projekt

Az a1solar.hu (WordPress + Elementor) migrációja Next.js-re.

- Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind 4
- Staging: `https://teszta1solar.homokozo.uk/` — soha nem production.
- Production: `https://a1solar.hu/` és `https://www.a1solar.hu/` — kizárólag
  külön emberi „Mehet élesbe” jóváhagyással módosítható.
- Kötelező folyamat: fejlesztési ág → staging → ellenőrzés → emberi jóváhagyás
  → `main` → külön production deploy.
- A `main` mindig release-kész, jóváhagyott állapot; közvetlenül nem fejlesztünk
  rajta. A `main` merge és a production deploy két külön döntési pont.
- Dokumentáció alapján soha ne feltételezd, hogy a `main` merge automatikusan
  production deployt indít. Ezt csak a tényleges deployment-konfiguráció alapján
  lehet kijelenteni.
- Nyelv: a teljes felület magyar. A user-facing szövegek magyarul íródnak,
  a KÓD (változónevek, kommentek, commit üzenetek) viszont angolul.

## Architektúra — ezt értsd meg először

Három együtt élő tartalmi forrás van:

1. **V3 copy deck oldalak** — generált tartalom
   (`src/content/v3-pages.generated.json`) és egyszerű közös React megjelenítés
   (`src/components/v3/**`). Pontosan 35 jóváhagyott tartalmi oldal.
2. **NATÍV oldalak** — saját React komponensek (`src/components/page/**`,
   `src/components/service/**`). Az újabb munka mind ide megy.
3. **MIRROR oldalak** — a régi WP oldal renderelt `<main>` HTML-je JSON-ben
   (`content/mirror.json`), scope-olt WP/Elementor CSS-sel `.mirror-root` alatt.
   Ezek átmeneti megoldások, amiket fokozatosan natívra cserélünk.

A routing központja: `src/app/[slug]/page.tsx`, valamint a v3 hierarchikus
URL-ekhez `src/app/[slug]/[...subslug]/page.tsx`. Egy egyszegmenses slug
feloldása a V3_PAGES ellenőrzésével indul, majd SERVICE_PAGES →
MARKETING_PAGES → TOOL_PAGES → CAMPAIGN_PAGES → SUCCESS_PAGES → TEXT_PAGES →
(mirror/WP tartalom) → 404 következik.

Új natív oldal = komponens + regisztráció a megfelelő registry mapbe. NE hozz
létre új route fájlt a `src/app` alatt, hacsak nem tényleg külön útvonal kell.

## Design rendszer — kötelező

Van egy közös komponenskészlet: `src/components/section/SectionKit.tsx`
(Section, Body, Bullets, NumberedList, FeatureGrid, FactorGrid, CheckList,
CompareCards, InfoCard, InfoCallout, StatBanner, OfferCallout, CtaBanner,
BrandRow, TagList, FaqList, StepTimeline, Reveal, CtaButton...).
Plusz oldal-chrome: NotchHero / NotchBanner / NotchFormHero / LandingHero,
SidebarLayout + ServiceTocNav + SupportWidget.

**Szabály:** ÚJ szakaszt először ezekből építs össze. Élő katalógus az összes
komponensről: `/komponensek`

Színek/tipográfia: CSS változókból (`src/app/globals.css`), NE hardcode-olj hexet.

```
--brand #db0330, --brand-dark #c21d20, --ink #212529,
--ink-soft #4b5563, --ink-muted #6b6b6b, --surface-3 #f6f6f6, --line #e5e7eb
```

A globals.css-ben a `/* @tokens:start ... @tokens:end */` blokk GENERÁLT —
ne szerkeszd kézzel, a forrás a `tokens/brand.tokens.json` + `npm run tokens`.

## Ha nincs megfelelő komponens

Ha olyan feladat érkezik, amit a meglévő komponensekből NEM lehet összerakni:
először dokumentáltan vizsgáld meg a meglévő közös komponenseket és azok
összeállítási lehetőségeit. Ne készíts egyszer használatos workaroundot vagy
eldobható markupot csak azért, hogy egy oldal elkészüljön.

Ha valóban új reusable komponens szükséges, röviden javasold a felhasználónak,
írd le az igényt és azt, hogy a meglévő elemek miért nem elegendők, majd várj a
döntésére. A külső WebbyStep fejlesztő jóváhagyása és a neki írt e-mail nem része
a fejlesztési folyamatnak.

Ne építs CMS-t, page buildert, layout engine-t vagy más általános rendszert
valódi, jóváhagyott igény nélkül. A KISS-elv az alapértelmezett.

## Reszponzivitás

Mobil → tablet → desktop mind számít, a tablet (768–1023px) külön figyelmet
kap: nemrég ment végig rajta egy teljes optimalizálás. Amit tarts be:

- `lg` alatt a sidebar a tartalom alá kerül — ott ne nyúljon szét teljes
  szélességben, hanem `md:grid-cols-2`.
- Ha egy `lg:grid-cols-2` blokk tableten egy oszlopba esik, a benne lévő képet
  korlátozd (`mx-auto w-full max-w-[440px] lg:max-w-none`), különben 500px+
  magas lesz.
- Kártyarácsoknak legyen `sm:`/`md:` oszlopszáma is, ne csak `lg:`.

Ellenőrizd 768 / 820 / 1024 px-en, mielőtt késznek mondasz valamit.

Vizuális módosításkor meglévő szöveget vagy tartalmat ne törölj, hacsak erre
nincs külön utasítás. Közös vagy globális komponens módosításakor több
reprezentatív oldalon ellenőrizd a hatást desktop-, tablet- és mobilnézetben.
A technikai működés mellett a régi WordPress oldal szintjét elérő vagy meghaladó
vizuális minőség is követelmény.

## Parancsok

```
yarn install
yarn dev        # http://localhost:3000
yarn build      # ezt MINDIG futtasd le, mielőtt commitolsz
npx tsc --noEmit
```

A repo `yarn.lock`-ot használ — yarn-nal telepíts, ne npm-mel (különben
lockfile-káosz lesz a diffben).

## Amit NE csinálj

- Feature ágról `main`-re csak emberi jóváhagyással merge-ölj. A feature ág
  pusholása és a PR frissítése nem production deploy; a production telepítéshez
  ettől független, egyértelmű jóváhagyás szükséges.
- NE commitolj `.env` / `.env.local` fájlt (gitignore-olt, és úgy is marad).
  A Resend env változók (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`,
  `RESEND_TO_EMAIL`) külön érkeznek; enélkül az `/api/contact` űrlap nem küld
  e-mailt, de a site fut.
- NE írd át a `content/*.json` tartalmi fájlokat kézzel (pages.json, posts.json,
  mirror.json) — ezek exportból származnak.
- NE nyúlj a `public/wp-content/` alatti assetekhez (~200 MB, a klón emiatt nagy).

## Commit konvenció

Angolul, conventional commit prefixszel: `feat:` / `fix:` / `refactor:` /
`chore:` / `docs:` / `style:` / `perf:` / `build:` / `ci:` / `test:`

A commit üzenet azt írja le, mi változott és miért. NE tartalmazzon
`Co-Authored-By`-t vagy bármilyen AI-attribúciót, és ne hivatkozzon a
beszélgetésre ("as requested", "per your message").

---

**Kezdésként:** olvasd el a `MIGRATION.md`-t, nézd meg a `/komponensek` oldalt és a
`src/components/section/SectionKit.tsx`-et, és mondd el a saját szavaiddal,
hogyan épül fel egy natív aloldal — mielőtt bármihez hozzányúlnál.
