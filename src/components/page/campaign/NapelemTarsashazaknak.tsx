import { ContactForm } from "@/components/ContactForm";

/** Small brand-tint pill used as a section eyebrow. */
const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

/** Brand-dot bullet list rendered from plain strings. */
const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mt-4 space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
        <span
          aria-hidden
          className="mt-[9px] shrink-0"
          style={{ width: "7px", height: "7px", borderRadius: "9999px", background: "var(--brand)" }}
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

type Model = { title: string; body: string; pros: string; cons: string };

const ACCOUNTING_MODELS: Model[] = [
  {
    title: "Diszkontált rendszerhasználati díj visszatérítés",
    body: "A ház által termelt és helyben azonnal elfogyasztott energia után az elosztói díjak egy részét évente visszatérítik a közösségnek – kvázi jutalom a hálózat tehermentesítéséért. Mivel a legtöbb társasház tetőfelülete kicsi, ez a modell csak minimális pénzügyi előnyt kínál, ezért várhatóan kevésbé lesz népszerű.",
    pros: "Passzív díjvisszatérítés a közvetlen fogyasztás után.",
    cons: "Elenyésző összeg, ha a napelemek csak a fogyasztás 5–10%-át termelik.",
  },
  {
    title: "Társasházi megosztás – statikus modell",
    body: "A lakók előre, fix aránymegosztásban állapodnak meg arról, hogy a termelt energia mekkora részét melyik lakás írhatja jóvá – az arány meghatározható alapterület, lakószám alapján vagy egyenlő részben. Minden lakás legfeljebb a kvótájának megfelelő részt használhatja fel kedvezményesen, amelyet a szolgáltató a számlában jóváír. Az elszámolás havonta, utólag történik.",
    pros: "Egyszerű és kiszámítható.",
    cons: "Merev: a fel nem használt kvótát nem lehet másnak átadni az adott hónapban.",
  },
  {
    title: "Társasházi megosztás – dinamikus modell",
    body: "A tagok utólag, a tényleges fogyasztási arányuk alapján részesülnek a termelt energiából. Minden hónap végén a szolgáltató megállapítja, mennyit használt el közvetlenül az épület, és a maradékból lakásonként mennyit vett át a fogyasztó – mintha azt az adott lakó termelte volna. Így mindenki pontosan annyival csökkentheti a villanyszámláját, amennyit a közös napelem termeléséből ténylegesen felhasznált.",
    pros: "Igazságosabb és rugalmasabb – a takarékosabb lakó nem veszít a kvótájából.",
    cons: "Bonyolultabb mérést igényel, amelyet az okos mérési rendszer automatikusan elvégez.",
  },
];

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: "Kell építési engedély a társasházi napelemhez?",
    a: "Általános szabályként az 50 kW alatti, épületre telepített napelemes rendszer nem építési engedélyköteles, így egy társasházi tetőre telepített háztartási méretű kiserőműhöz nincs szükség külön építési engedélyre. Kivételt jelenthet a műemléki védettség, a helyi építészeti örökség vagy a városképi előírás – ilyenkor hatósági hozzájárulás is szükséges lehet.",
  },
  {
    q: "Hány szavazat kell a közgyűlésen a döntéshez?",
    a: "2025. július 20-tól a közgyűlés egyszerű többséggel (50% + 1 szavazat) határozhat a napelemrendszer telepítéséről; már nem szükséges a tulajdonosok 75%-ának hozzájárulása. A döntést közgyűlési határozatba kell foglalni, amelyet bizonyos pályázatoknál csatolni is kell.",
  },
  {
    q: "Mekkora rendszer telepíthető egy társasházra?",
    a: "Társasházi energiaközösségben háztartási méretű, jelenleg maximum 50 kVA beépített teljesítményű rendszer létesíthető. A gyakorlatban a legtöbb tetőfelület ennél jóval kisebb rendszernek ad helyet – egy nagyobb panelháznál gyakran csak a közös fogyasztás (lift, világítás) egy részét fedező kapacitás fér el.",
  },
  {
    q: "Mennyibe kerül a mérőórák cseréje?",
    a: "Az új szabályozású rendszereknél minden érintett lakásban okos, negyedórás mérésre alkalmas mérőórára van szükség. A régi villanyórák cseréje jellemzően 30–40 ezer Ft lakásonként, amelynek költségét a beruházás előkészítésekor figyelembe kell venni; a mérőhelyek kialakítása a közösséget terheli.",
  },
  {
    q: "Mi lesz a meglévő napelemes rendszerrel bővítéskor?",
    a: "Bővítés vagy üzemeltetési mód váltása lehetséges, de új igénybejelentést és engedélyeztetést igényel. A 2024 előtti rendszerek többsége szaldós volt; bármilyen bővítés vagy teljesítménynövelés esetén az új szabályok szerint már bruttó elszámolás lép életbe, így a tulajdonos elveszítheti a szaldóelszámolást. Az inverter korszerűsítése okos, távleolvasható típusra viszont támogatott és ajánlott.",
  },
];

/**
 * "Napelem társasházaknak" kampányoldal — bespoke natív újraépítés az A1 Solar
 * design-nyelvén: jogszabályi háttér, technikai feltételek, elszámolási modellek,
 * támogatások, GYIK akkordeon és záró ajánlatkérő űrlap. A tartalom a hiteles
 * 2025-ös jogszabályi és pályázati kivonatból származik.
 */
export const NapelemTarsashazaknak = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>Napelem társasházaknak</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>Jogszabályok </span>
          <span style={{ fontWeight: 700 }}>és támogatások!</span>
        </h1>
        <p
          className="mx-auto mt-6 max-w-[760px] text-[var(--ink-soft)]"
          style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7 }}
        >
          2025 őszére a szabályozási környezet radikálisan kedvezőbbé vált a társasházi napelemes
          beruházások számára. Az energiaközösségek bevezetése, az egyszerű többséggel hozható
          közgyűlési döntés és a támogatások megnyitották az utat, hogy a lakóközösségek közösen
          hasznosítsák a napenergiát. Nézzük végig, mit érdemes tudni a jogról, a technikáról és a
          finanszírozásról.
        </p>
        <div className="mt-9">
          <a
            href="#jogszabalyok"
            style={{
              display: "inline-block",
              background: "var(--brand)",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "9999px",
              fontWeight: 500,
            }}
          >
            További információ
          </a>
        </div>
      </div>
    </section>

    {/* JOGSZABÁLYI KERETEK */}
    <section id="jogszabalyok" className="w-full" style={{ scrollMarginTop: "var(--header-h)" }}>
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="max-w-[820px]">
          <Eyebrow>Jogszabályok és engedélyek</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 600, lineHeight: 1.2 }}
          >
            Jogszabályi keretek és engedélyezés
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col px-8 py-8" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
              Energiaközösségek – VET módosítás
            </h3>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              2025. szeptember 1-jétől hatályos a villamos energiáról szóló 2007. évi LXXXVI. törvény új
              66/B §-a, amely bevezette a társasházi energiaközösség fogalmát. Legalább két lakástulajdonos
              írásbeli megállapodásával energiaközösség jöhet létre, így a közös csatlakozási pont mögött
              közösen telepíthető háztartási méretű kiserőmű (HMKE).
            </p>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              A tetőn termelt áramot elsősorban közös fogyasztásra (lift, világítás), valamint a részt vevő
              lakók saját fogyasztására lehet felhasználni. A törvény előírja az áramszolgáltatóknak, hogy
              engedélyezzék az energiaközösségek csatlakozását – új korszakot nyitva a városi napenergia
              hasznosításában.
            </p>
          </div>

          <div className="flex flex-col px-8 py-8" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
              Egyszerűbb közgyűlési döntés
            </h3>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              A társasházakról szóló 2003. évi CXXXIII. törvény 2025. július 20-án hatályba lépett módosítása
              szerint a közgyűlés egyszerű többséggel dönthet a napelemrendszer telepítéséről:
            </p>
            <Bullets
              items={[
                "Elég az egyszerű többség (50% + 1 szavazat).",
                "Nem szükséges a tulajdonosok 75%-ának hozzájárulása.",
                "A döntést közgyűlési határozatba kell foglalni.",
                "Bizonyos pályázatoknál a támogató határozatot csatolni kell.",
              ]}
            />
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              A módosítás hivatalosan lehetővé tette az online részvételt a közgyűléseken, ami megkönnyíti a
              határozatképesség elérését nagyobb társasházaknál is.
            </p>
          </div>

          <div className="flex flex-col px-8 py-8" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
              Építési engedély és műemléki védelem
            </h3>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              Általános szabályként az 50 kW alatti, épületre telepített napelemes rendszer nem építési
              engedélyköteles, így a társasházi tetőre telepített HMKE-hez nincs szükség külön engedélyre.
              Bizonyos esetekben azonban hatósági hozzájárulás is szükséges lehet:
            </p>
            <Bullets
              items={[
                "Műemléki védettség, helyi építészeti örökség vagy városképi előírás esetén.",
                "Az elhelyezést az örökségvédelmi vagy építésügyi hatósággal kell egyeztetni.",
                "Előírhatják, hogy a panelok csak nem látható módon, az architektúrába illeszkedve legyenek.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>

    {/* TECHNIKAI FELTÉTELEK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Technikai feltételek</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 600, lineHeight: 1.2 }}
            >
              Technikai feltételek a társasházi napelemekhez
            </h2>
            <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              A közös tulajdonú tetőfelület napelemek telepítésére használható, ennek feltétele írásbeli
              megállapodás és a közgyűlés előzetes hozzájárulása. A rendszer jogilag a társasház összekötő
              berendezéséhez csatlakozik, tehát a ház belső hálózatára termel – a telepítés előtt műszaki
              felmérés szükséges a tetőszerkezet teherbírásáról és a hálózat alkalmasságáról.
            </p>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              Az energiaközösség megalapításához meg kell nevezni a közös képviselőt és az energiaközösség
              képviselőjét, rögzíteni a részt vevő lakások adatait és a közös célokat, ki kell választani az
              elszámolási modellt, valamint rögzíteni a megállapodás időtartamát.
            </p>
          </div>
          <div className="overflow-hidden" style={{ borderRadius: "24px" }}>
            <div className="aspect-[16/10] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/wp-content/uploads/2025/10/3065-1-1024x683.jpg"
                alt="Napelemek telepítése társasház tetején"
                loading="lazy"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col px-8 py-8" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "19px", fontWeight: 600, lineHeight: 1.3 }}>
              HMKE teljesítménykorlát
            </h3>
            <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
              Energiaközösségben háztartási méretű, jelenleg maximum 50 kVA beépített teljesítményű rendszer
              létesíthető. A legtöbb tető ennél kisebb kapacitásnak ad helyet – egy nagyobb panelháznál gyakran
              csak a közös fogyasztás egy részét fedező rendszer fér el.
            </p>
          </div>
          <div className="flex flex-col px-8 py-8" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "19px", fontWeight: 600, lineHeight: 1.3 }}>
              Okos mérők és mérőcsere
            </h3>
            <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
              Minden érintett lakásba negyedórás mérésre alkalmas okos mérő szükséges. A régi villanyórák cseréje
              jellemzően 30–40 ezer Ft lakásonként, a mérőhelyek kialakítása a közösséget terheli. Cserébe pontos
              termelés- és fogyasztás-nyilvántartás készül.
            </p>
          </div>
          <div className="flex flex-col px-8 py-8" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "19px", fontWeight: 600, lineHeight: 1.3 }}>
              Építéstechnika és biztonság
            </h3>
            <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
              Lapostetőn ballasztos, magastetőn tetősíkra erősített rögzítés a jellemző, megfelelő
              vízszigeteléssel. Elektromosan túláram- és túlfeszültség-védelem, valamint tűzvédelmi kapcsoló
              szükséges. A csatlakozáshoz igénybejelentést kell benyújtani az áramszolgáltatóhoz.
            </p>
          </div>
        </div>

        <div className="mt-6 px-8 py-8" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
          <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "19px", fontWeight: 600, lineHeight: 1.3 }}>
            Meglévő rendszerek bővítése és korszerűsítése
          </h3>
          <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
            Ha a társasház már rendelkezik napelemes rendszerrel, a bővítés vagy üzemeltetési mód váltása is
            lehetséges, de új igénybejelentést és engedélyeztetést igényel. A 2024 előtti rendszerek többsége
            szaldós volt; bővítés vagy teljesítménynövelés esetén az új szabályok szerint már bruttó elszámolás
            lép életbe, így a tulajdonos elveszítheti a szaldóelszámolást. Az inverter korszerűsítése okos,
            távleolvasható típusra viszont támogatott és ajánlott – 2025. július 1. után csak internetes
            kapcsolatú, távleolvasható inverterrel telepíthető új HMKE.
          </p>
        </div>
      </div>
    </section>

    {/* ELSZÁMOLÁSI MODELLEK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="max-w-[820px]">
          <Eyebrow>Elszámolás</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 600, lineHeight: 1.2 }}
          >
            Elszámolási modellek és hálózatra visszatáplálás
          </h2>
          <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            A jogszabály – a 273/2007. (X.19.) Korm. rendelet, a VET végrehajtási rendelete – háromféle
            elszámolási modellt tesz lehetővé a társasházi energiaközösségek számára. A közösség bármikor
            módosíthatja a modellt vagy az arányokat, ha azt a tagok közösen kérik.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {ACCOUNTING_MODELS.map((m) => (
            <div
              key={m.title}
              className="flex flex-col px-8 py-8"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "19px", fontWeight: 600, lineHeight: 1.3 }}>
                {m.title}
              </h3>
              <p className="mt-3 flex-1 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
                {m.body}
              </p>
              <div className="mt-5 space-y-2">
                <p className="text-[var(--ink)]" style={{ margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 600, color: "var(--brand-dark)" }}>Előny: </span>
                  {m.pros}
                </p>
                <p className="text-[var(--ink)]" style={{ margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 600, color: "var(--ink-muted)" }}>Hátrány: </span>
                  {m.cons}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TÁMOGATÁSOK */}
    <section className="w-full" style={{ background: "var(--surface-3)" }}>
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 md:py-24">
        <div className="max-w-[820px]">
          <Eyebrow>Elérhető támogatások</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 600, lineHeight: 1.2 }}
          >
            Támogatási lehetőségek társasházaknak (2025)
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="px-8 py-8" style={{ background: "#fff", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "19px", fontWeight: 600, lineHeight: 1.3 }}>
              Napenergia Plusz Program (lezárult)
            </h3>
            <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
              A 2023 végén indított program 2024-ben egyszeri, nagy volumenű támogatást nyújtott lakossági
              napelem + akkumulátor telepítésre. A keretösszeget 75 milliárdról 105,8 milliárd Ft-ra emelték,
              így több mint 23 ezer pályázó részesült benne. A támogatás a beruházás 65%-a (maximum 5 millió Ft)
              volt, kizárólag új telepítésre, ingatlanonként egyszer.
            </p>
            <Bullets
              items={[
                "Feltétel: legalább 4 kW-os rendszer és 7,5 kWh energiatároló.",
                "Elsősorban családi házak és legfeljebb 6 lakásos társasházak.",
                "A program 2024. január 15-én lezárult – nagyobb társasházak kimaradtak.",
              ]}
            />
          </div>

          <div className="px-8 py-8" style={{ background: "#fff", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "19px", fontWeight: 600, lineHeight: 1.3 }}>
              Önkormányzati (helyi) pályázatok
            </h3>
            <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
              Számos nagyváros és kerület saját forrású programot indít a társasházi felújítások elősegítésére,
              amelyek egy része energetikai korszerűsítésre, így napelemre is igénybe vehető. Budapest, Debrecen
              és más városok külön alapokkal, „panelprogramokkal" támogatják a telepítést. Érdemes figyelni az
              aktuális kiírásokat, mert gyakran rugalmasabb feltételekkel és gyorsabb ügyintézéssel érhetők el.
            </p>
          </div>

          <div className="px-8 py-8" style={{ background: "#fff", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "19px", fontWeight: 600, lineHeight: 1.3 }}>
              Kedvezményes hitelek
            </h3>
            <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
              Támogatás hiányában kedvezményes hitelkonstrukciók is finanszírozhatják a beruházást. 2024-től
              elérhető az MFB által kezelt Lakossági Energiahatékonysági Hitel, amely az EU-s otthonfelújítási
              program részeként kamatmentes kölcsönt biztosít, 30% energiamegtakarítás teljesítése esetén.
            </p>
            <Bullets
              items={[
                "OTP Zöld Kamatkedvezmény lakáshitel felújításra.",
                "MBH Bank társasházi projekt hitelei.",
                "Kereskedelmi banki zöld hitelprogramok kamattámogatással.",
              ]}
            />
          </div>

          <div className="px-8 py-8" style={{ background: "#fff", borderRadius: "24px" }}>
            <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "19px", fontWeight: 600, lineHeight: 1.3 }}>
              Önfinanszírozó modell – a közös költség szerepe
            </h3>
            <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
              A társasházak jellemzően a közös költség átmeneti emelésével törlesztik a hitelt, majd a
              megtakarított rezsiből fokozatosan csökkentik azt. A napelemek üzembe helyezése után a ház
              villany- és akár fűtésszámlája is mérséklődik, így a megtakarított összegből törleszthető a hitel.
              A jól méretezett rendszer 25–30 éves élettartammal hosszú távon megtérülő befektetés, amely
              évtizedeken át forrást biztosíthat a felújítási alapba.
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-[900px] text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
          A technikai és pénzügyi kihívások – korlátozott tetőkapacitás, mérőcserék költsége, a bruttó elszámolás
          miatti hosszabb megtérülési idő – továbbra is jelentősek, de számos támogatási eszköz és jó gyakorlat
          segíti a társasházakat. Uniós pályázatok keretében akár 20 millió Ft is elérhető egy innovatív
          közösségi energiaötlet kidolgozására. 2025-ben már reális alternatíva, hogy egy társasházi közösség
          napelemeket telepítsen a saját épületére.
        </p>
      </div>
    </section>

    {/* GYIK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 md:py-24">
        <div className="max-w-[820px]">
          <Eyebrow>Gyakori kérdések</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 600, lineHeight: 1.2 }}
          >
            Kérdésed maradt?
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-[900px] space-y-4">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group px-7 py-5"
              style={{ background: "var(--surface-3)", borderRadius: "20px" }}
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 text-[var(--ink)]"
                style={{ fontSize: "18px", fontWeight: 600, lineHeight: 1.4 }}
              >
                {f.q}
                <span
                  aria-hidden
                  className="shrink-0 transition-transform duration-200 group-open:rotate-45"
                  style={{ color: "var(--brand)", fontSize: "26px", lineHeight: 1 }}
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* MIÉRT VÁLASSZ MINKET? */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 items-center gap-10 overflow-hidden md:grid-cols-2"
          style={{ background: "var(--brand)", borderRadius: "28px" }}
        >
          <div className="px-8 py-12 md:px-14">
            <span
              className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
              style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}
            >
              Cégünkről
            </span>
            <h2 style={{ marginTop: "22px", color: "#fff", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, lineHeight: 1.2 }}>
              Miért válassz minket?
            </h2>
            <p className="mt-5" style={{ color: "rgba(255,255,255,0.92)", fontSize: "17px", lineHeight: 1.7 }}>
              Teljes körű támogatást nyújtunk a pályázati ügyintézésben, a szükséges dokumentumok
              előkészítésétől a benyújtásig. Szakértelmünkkel a napelemes rendszereket intelligens
              eszközökkel ötvözzük, hogy energiafogyasztásod optimális legyen. Átfogó szolgáltatásaink az
              első konzultációtól a fenntartásig tartanak.
            </p>
            <div className="mt-8 flex flex-wrap gap-10">
              <div>
                <p style={{ margin: 0, color: "#fff", fontSize: "34px", fontWeight: 700, lineHeight: 1 }}>10+</p>
                <p style={{ margin: 0, marginTop: "6px", color: "rgba(255,255,255,0.85)", fontSize: "15px" }}>
                  év tapasztalat
                </p>
              </div>
              <div>
                <p style={{ margin: 0, color: "#fff", fontSize: "34px", fontWeight: 700, lineHeight: 1 }}>5000+</p>
                <p style={{ margin: 0, marginTop: "6px", color: "rgba(255,255,255,0.85)", fontSize: "15px" }}>
                  telepített rendszer
                </p>
              </div>
            </div>
          </div>
          <div className="h-full min-h-[280px] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/2025/10/1368-1-1024x683.jpg"
              alt="A1 Solar szakemberek napelemes rendszer telepítése közben"
              loading="lazy"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* AJÁNLATKÉRÉS */}
    <section id="ajanlatkeres" className="w-full" style={{ scrollMarginTop: "var(--header-h)" }}>
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <ContactForm
          bare
          formName="Napelem társasházaknak"
          heading="Kérj ajánlatot társasházadra!"
          intro="Töltsd ki az űrlapot, és kollégánk felveszi veled a kapcsolatot a lehetőségekről."
        />
      </div>
    </section>
  </div>
);
