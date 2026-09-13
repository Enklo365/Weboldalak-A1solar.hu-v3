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
- Kötelező release-folyamat: fejlesztési ág → helyi ellenőrzés → külön
  „Mehet stagingre” jóváhagyás → staging → ellenőrzés → emberi „Mehet élesbe”
  jóváhagyás → `main` → külön production deploy.
- A helyi elfogadás, például a „jó” visszajelzés nem jelent staging- vagy
  production-deploy engedélyt. A két környezethez külön, egyértelmű jóváhagyás
  szükséges.
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

## Hatékony munkamód

- Egy feladat egy jól körülhatárolt módosítás legyen.
- Kis vizuális módosításnál az alapfolyamat: módosítás → helyi preview → az
  érintett rész célzott böngészős ellenőrzése és legfeljebb 1–2 releváns
  screenshot → eredmény bemutatása → STOP. Ebben a gyors körben ne induljon
  production build, commit, push, PR-frissítés vagy staging deploy.
- A felhasználói finomításokat ugyanabban a helyi preview-körben kell
  összegyűjteni. Az elfogadott helyi eredmény után egyértelműen jelentsd:
  „helyben kész; még nincs commit, push vagy staging deploy”.
- Staging deploy kizárólag külön, kifejezett „Mehet stagingre” vagy azzal
  egyenértékű utasításra indulhat. Több elfogadott vizuális módosítást lehetőleg
  egy buildbe, commitba és staging release-be vonj össze.
- A staging jóváhagyása után futtasd a szükséges production buildet, készíts
  commitot és push/PR-frissítést, majd használd a dokumentált staging-folyamatot.
  A staging jóváhagyása továbbra sem engedély `main` merge-re vagy production
  deployra.
- Új munkamenetben az állapotot az `AGENTS.md`, a `docs/HANDOFF.md`, a Git és a
  tényleges staging alapján állapítsd meg; ne dolgozd fel újra a teljes korábbi
  beszélgetést.
- Új munkamenetet természetes mérföldkőnél érdemes kezdeni, nem minden apró
  igazítás után. Egy koherens vizuális munkacsomag maradjon egy munkamenetben;
  a következő témát vagy külön staging/release feladatot a `HANDOFF.md` alapján
  új munkamenet folytathatja.
- Rutinfeladatnál ne elemezd újra a teljes repositoryt. Csak a kötelező
  szabályokat, az érintett komponenst vagy stílust és a releváns diffet olvasd.
- Normál esetben csak rövid, összesített parancskimenetet olvass vissza. Teljes
  build-, Docker-, böngésző- vagy egyéb logot csak hiba esetén vizsgálj.
- A munka elején határozd meg a szükséges minimális bizonyítékot, és az
  összetartozó read-only ellenőrzéseket lehetőleg vond össze. Ne olvass be
  irreleváns fájlokat vagy teljes naplókat megelőző jelleggel.
- A QA mindig legyen változásarányos. Lokális spacing-, szín- vagy
  igazításmódosításnál elég az érintett nézet és a releváns mobil/desktop
  viewport; a nem érintett route-okat, redirecteket, sitemapet és teljes
  oldalkészletet ne ellenőrizd újra.
- Közös vagy globális komponens módosításakor programozottan ellenőrizheted az
  összes érintett oldalt, vizuálisan azonban csak 3–5 reprezentatív oldalt és a
  releváns desktop-, tablet- és mobilnézeteket ellenőrizd.
- Teljes QA csak valódi release-mérföldkőnél, széles hatású architekturális vagy
  routing-változásnál, illetve production jóváhagyás előtti indokolt kapunál
  fusson.
- Vizuális ellenőrzéshez célzott nézetet vagy elemet vizsgálj; teljes oldalas
  képernyőképet csak akkor készíts, ha az egész oldal ritmusa a feladat tárgya.
- Ne ismételj meg ellenőrzést, ha az előző eredmény még érvényes.
- A production buildet az elfogadott módosításcsomag véglegesítése után,
  commit előtt egyszer futtasd. Gyors helyi vizuális iterációk között ne
  buildelj. Sikeres, változatlan buildet vagy QA-t ne futtass újra; hiba esetén
  először csak a releváns naplórészletet vizsgáld.
- Kizárólag dokumentációt érintő commit előtt production build nem szükséges;
  ilyenkor a Markdown-diff és a formázás célzott ellenőrzése elegendő.
- Staging deploynál, a külön jóváhagyás után, a meglévő folyamatot használd.
  Pusztán token- vagy időmegtakarításért ne építs új CI-t, deploy-rendszert vagy
  automatizmust.
- Hosszú külső folyamat állapotát egyszer ellenőrizd. Ha még fut és nincs más
  érdemi teendő, jelentsd röviden az állapotot és állj meg.
- Köztes felhasználói üzenetet csak érdemi mérföldkőnél vagy problémánál adj.
- A végén röviden és egyértelműen jelentsd, hogy a módosítás csak helyben van-e,
  illetve történt-e build, commit, push, staging vagy QA. Ha nincs hiba, ne adj
  hosszú technikai naplót.

## Parancsok

```
yarn install
yarn dev        # http://localhost:3000
yarn build      # alkalmazáskód commitja előtt kötelező; docs-only commitnál nem
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
