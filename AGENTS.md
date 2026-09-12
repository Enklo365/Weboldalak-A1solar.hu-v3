<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# A1 Solar — projekt szabályok agenteknek

Ezek a projekt kötelező szabályai minden agentnek (Codex, Claude Code, stb.).
Mielőtt bármit írnál, olvasd el a `MIGRATION.md`-t, és nézd át a `src/` szerkezetét.

Az aktuális projektállapot és a következő engedélyezett lépés a
`docs/HANDOFF-2026-09-12.md` fájlban található. Új munkamenetben ezt is kötelező
elolvasni bármilyen módosítás előtt.

## A projekt

Az a1solar.hu (WordPress + Elementor) migrációja Next.js-re.

- Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind 4
- Staging: `https://teszta1solar.homokozo.uk/` — soha nem production.
- Production: `https://a1solar.hu/` és `https://www.a1solar.hu/` — kizárólag
  külön emberi „Mehet élesbe” jóváhagyással módosítható.
- A `main` mindig release-kész, jóváhagyott állapot. Közvetlenül nem fejlesztünk
  rajta, és sem a merge, sem bármely automatikus vagy kézi deploy nem tekinthető
  engedélyezettnek külön production-jóváhagyás nélkül.
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
NE találj ki magadtól új komponenst, és ne oldd meg egyedi, eldobható
markuppal — mert azzal szétesik a design rendszer.

Helyette fogalmazz meg egy e-mailt az igényekkel a **hello@webbystep.hu** címre.
Az e-mail tartalmazza:

- melyik oldalról / feladatról van szó,
- mit kellene a szakasznak megjelenítenie és tudnia (tartalom, viselkedés),
- miért nem fedi le egyik meglévő komponens sem (melyeket néztél meg és
  miért nem elegendők),
- ha van rá javaslatod, milyen komponens oldaná meg — de a döntés nem a tiéd.

Az e-mailt te fogalmazd meg, konkrétan és tömören. Amíg nem jön rá válasz,
ne implementáld a hiányzó részt — inkább haladj a feladat többi részével,
és jelezd, mi maradt függőben.

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

- NE pusholj magadtól. Commitolj, és szólj, hogy kész — a push külön döntés,
  mert a main azonnal élesedik.
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
