# A1 Solar v3

Az `a1solar.hu` Next.js 16 alapú új weboldala. A projekt aktuális, folytatáshoz
szükséges Git-, staging-, redirect-, SEO- és QA-állapota itt található:

**[Fejlesztési átadás – 2026-09-12](docs/HANDOFF-2026-09-12.md)**

Fontos: a `teszta1solar.homokozo.uk` staging, a `.hu` címek production
környezetek. Merge és production deploy csak külön emberi jóváhagyással
történhet.

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
