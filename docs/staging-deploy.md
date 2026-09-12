# A1 Solar v3 – AX41 staging deploy

Ez a runbook kizárólag a `teszta1solar.homokozo.uk` staging környezetre
érvényes. A `.hu` production címekhez nem ad deployengedélyt.

## Image

1. Futtasd a production buildet, és ellenőrizd a v3 struktúrát.
2. A build context tartalmazza a `Dockerfile.staging`, `.next/standalone`,
   `.next/static` és `public` útvonalakat.
3. Építs egyedi, rövid commit taggel és teljes OCI revision címkével:

```bash
docker build \
  --build-arg REVISION="$FULL_COMMIT_SHA" \
  -f Dockerfile.staging \
  -t "a1solar-nextjs:v3-$SHORT_COMMIT_SHA" .
```

A Dockerfile a Windows/pnpm standalone trace hiányos top-level csomagjait a
trace saját `.pnpm/node_modules` tárából állítja helyre. Az image-et publikus
routing nélkül, az éles Compose-éval azonos read-only, tmpfs, cap-drop és
`no-new-privileges` beállításokkal kell először health checkelni.

## Hatékony végrehajtás

- A végleges módosítás után egyetlen production build és staging image készüljön.
- Siker esetén csak a commitot, image taget, OCI revisiont, health/read-only
  állapotot, HTTP státuszt és `X-Robots-Tag` értéket olvasd vissza.
- `docker inspect` esetén formázott mezőket kérj, ne a teljes JSON-t. Teljes
  build- vagy konténernaplót csak hiba esetén vizsgálj.
- Ugyanazon HEAD már ellenőrzött buildjét vagy deploylépését ne ismételd meg.
- A nagy médiacsomag miatt hosszú csomagolás vagy feltöltés nem indok új CI- vagy
  deploy-rendszer építésére; a meglévő folyamat marad az elsődleges.

## Compose aktiválás

- Projektkönyvtár: `/home/endre/a1solar-staging/teszta1solar`
- Kötelező Compose-projektnév: `teszta1solar-staging`
- Aktiválás előtt készüljön commit-SHA-val jelölt mentés a Compose-fájlról.
- A helyes parancs:

```bash
docker compose -p teszta1solar-staging config
docker compose -p teszta1solar-staging up -d
```

A `-p teszta1solar-staging` elhagyása más nevű, párhuzamos konténert hozna
létre, ezért tilos. Aktiválás után ellenőrizendő az image tag, a teljes OCI
revision, a `healthy` állapot, a read-only rootfs és a publikus staging URL.

## Kötelező smoke és rollback

- főoldal, legalább egy v3 szolgáltatási oldal és `/cikkek/`: `200`;
- az új vagy javított assetek: `200`;
- `X-Robots-Tag: noindex, nofollow, noarchive`;
- hiba esetén a mentett Compose-fájl és az előző, megőrzött image azonnali
  visszaállítása ugyanazzal a kötelező Compose-projektnévvel.
