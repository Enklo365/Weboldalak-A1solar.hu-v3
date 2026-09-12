# A1 Solar v3

Az `a1solar.hu` Next.js 16 alapú új weboldala. A projekt aktuális, folytatáshoz
szükséges Git-, staging- és PR-állapota itt található:

**[Aktuális fejlesztési átadás](docs/HANDOFF.md)**

Fontos: a `teszta1solar.homokozo.uk` staging, a `.hu` címek production
környezetek. A `main` merge és a production deploy két külön döntési pont;
production módosítás mindig külön, egyértelmű emberi jóváhagyást igényel.
A `main` merge önmagában csak a tényleges deployment-konfiguráció ismeretében
tekinthető production deployt kiváltó eseménynek.

A dátumozott HANDOFF- és QA-fájlok változatlan történeti állapotnaplók. Ha
ellentmondás van, a tényleges Git-, GitHub- és futó staging-állapot az elsődleges.

## Technológia

- Next.js 16 App Router, React 19, TypeScript, Tailwind 4
- natív React oldalak és megtartott WordPress-exportált tartalmak
- közös v3 oldal- és section komponensek
- standalone Docker build az AX41 staging környezethez

## Helyi fejlesztés

```bash
yarn install
yarn dev
yarn build
```

Helyi cím: [http://localhost:3000](http://localhost:3000).

Részletes architektúra és fejlesztési szabályok: `AGENTS.md` és
`MIGRATION.md`. A migrációs URL-adatok a `docs/migration/` könyvtárban vannak.
