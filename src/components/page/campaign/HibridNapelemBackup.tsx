import { Clock, Gauge, Maximize2, Network, Plug, Zap } from "lucide-react";

import { BackupLeadForm } from "@/components/page/campaign/BackupLeadForm";
import { NotchFormHero } from "@/components/page/NotchFormHero";
import {
  Body,
  BrandRow,
  CheckList,
  CompareCards,
  CtaButton,
  FactorGrid,
  FaqList,
  InfoCallout,
  InfoCard,
  OfferCallout,
  Reveal,
  RowDivider,
  Section,
  StatBanner,
  StepTimeline,
} from "@/components/section/SectionKit";
import { ReferenceGallery } from "@/components/service/ReferenceGallery";
import { ServiceTocNav } from "@/components/service/ServiceTocNav";
import { SidebarLayout } from "@/components/service/SidebarLayout";
import { SupportWidget } from "@/components/service/SupportWidget";

const TOC = [
  { id: "miert-nem", label: "Hogyan működik?" },
  { id: "backup-megoldasok", label: "Backup megoldások" },
  { id: "melyik", label: "Melyik való neked?" },
  { id: "markak", label: "Gyártók" },
  { id: "reszletfizetes", label: "Részletfizetés" },
  { id: "cegunkrol", label: "Cégünkről" },
  { id: "referenciak", label: "Referenciák" },
  { id: "folyamat", label: "Folyamat" },
  { id: "gyik", label: "GYIK" },
  { id: "ajanlatkeres", label: "Ajánlatkérés" },
];

const REASONS = [
  { title: "5000+ megvalósított rendszer", text: "Több ezer lakossági és vállalati telepítés tapasztalatával segítünk megtalálni az otthonodhoz megfelelő megoldást." },
  { title: "Személyre szabott tervezés", text: "A rendszert az ingatlanod fogyasztása, elektromos hálózata, a használni kívánt berendezések és az elvárt áramszüneti működés alapján tervezzük meg." },
  { title: "Teljes körű szolgáltatás", text: "A műszaki felméréstől és tervezéstől a kivitelezésen át az üzembe helyezésig végigkísérjük a beruházást." },
  { title: "Országos lefedettség", text: "Szakértőink Magyarország egész területén elérhetők." },
  { title: "Megbízható szakmai háttér", text: "Tapasztalt mérnöki, kivitelezői és ügyintézői csapat dolgozik azon, hogy a rendszer ne csak elkészüljön, hanem hosszú távon is biztonságosan és hatékonyan működjön." },
];

const STEPS = [
  { num: "1", title: "Ajánlatkérés", text: "Töltsd ki az űrlapot, és add meg az alapvető igényeidet." },
  { num: "2", title: "Műszaki egyeztetés", text: "Átbeszéljük az energiafogyasztást, a nagyobb berendezéseket, az elvárt áramszüneti működést és az ingatlan alapvető adottságait." },
  { num: "3", title: "Felmérés és személyre szabott ajánlat", text: "Szükség esetén helyszíni felmérést végzünk, majd elkészítjük a műszaki tartalmat és a részletes ajánlatot." },
  { num: "4", title: "Kivitelezés és üzembe helyezés", text: "A jóváhagyott rendszer telepítése után elvégezzük a szükséges beállításokat, teszteljük a működést, és átadjuk a kész rendszert." },
];

const MELYIK_CARDS = [
  {
    title: "Kis backup – a legfontosabb fogyasztókhoz",
    subtitle: "Ha áramszünetkor elsősorban a kritikus eszközöket szeretnéd működtetni.",
    points: [
      "Hűtő, internet, világítás, riasztó",
      "Fűtés keringetőszivattyúja",
      "Telefon és laptop töltése",
      "Költséghatékonyabb kialakítás",
    ],
    footnote: "Alap komfort és biztonság fenntartása áramszünet esetén.",
  },
  {
    title: "Teljes házas backup",
    subtitle: "Ha több áramkört vagy az egész házat szeretnéd ellátni.",
    points: [
      "Több áramkör vagy a teljes ház",
      "Nagyobb fogyasztók is (feltételekkel)",
      "Gateway / átkapcsoló alapú megoldás",
      "Nagyobb inverter- és akkumulátorkapacitás",
    ],
    footnote: "Jelentősebb beruházás, mindig egyedi műszaki tervezéssel.",
    highlighted: true,
  },
];

const REFERENCE_IMAGES = [
  "/wp-content/uploads/2022/08/szuha-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/Esztergom-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/budapest-3-napelem.jpg",
  "/wp-content/uploads/2022/08/Pecel-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/Budapest-2-napelem.jpg",
  "/wp-content/uploads/2022/08/Erd-napelem.jpg",
  "/wp-content/uploads/2022/08/Paty-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/siofok-napelem-2-scaled.jpg",
  "/wp-content/uploads/2022/08/Szentendre-Napelem.jpg",
];

const FAQ = [
  { q: "Minden hibrid napelemes rendszer működik áramszünetben?", a: "Nem. Az áramszüneti működéshez megfelelő inverterre, akkumulátorra, backup funkcióra, szabályos leválasztásra és megfelelő tartalék áramkörökre is szükség van." },
  { q: "Elég egy 10 kWh-s akkumulátor az egész házhoz?", a: "Ezt önmagában az akkumulátor kapacitása alapján nem lehet megmondani. Az energiamennyiség mellett az inverter teljesítményét, a pillanatnyi fogyasztást és a működtetni kívánt berendezéseket is meg kell vizsgálni." },
  { q: "Utólag is kialakítható backup?", a: "Bizonyos rendszereknél igen. Ehhez fel kell mérni a meglévő invertert, akkumulátort, elosztótáblát, kábelezést és az ingatlan elektromos hálózatát." },
  { q: "Mennyi ideig működik a rendszer áramszünet esetén?", a: "Az áthidalási idő függ az akkumulátor kapacitásától és töltöttségétől, a napelemes termeléstől, valamint a működtetett fogyasztók számától és teljesítményétől." },
  { q: "Mennyibe kerül a teljes házas backup?", a: "Nincs minden ingatlanra érvényes fix ár. A költséget az inverter és az akkumulátor mellett az átkapcsolóberendezés, az elosztótábla átalakítása, a kábelezés és a szükséges villamos védelmek is befolyásolják." },
  { q: "Áramszünetben automatikusan átkapcsol a rendszer?", a: "Ez a kiválasztott rendszer és a kialakítás módjától függ. Megfelelően megtervezett megoldásnál az átkapcsolás automatikusan is történhet, de ennek pontos működését mindig az adott rendszer műszaki tartalma határozza meg." },
];

/**
 * "Hibrid napelemes rendszer backuppal" landing page — built entirely from the
 * shared section kit + the shared page-chrome components. It renders inside the
 * landing chrome (minimal header/footer) so visitors cannot navigate away.
 */
export const HibridNapelemBackup = () => (
  <div>
    <NotchFormHero
      eyebrow="Hibrid rendszer + backup"
      titleLight="Legyen áram otthonodban akkor is,"
      titleStrong="amikor a hálózat leáll"
      image="/wp-content/uploads/2025/08/hibrid-napelem-backup-hero.jpg"
      imageAlt="Napelemes családi ház energiatárolóval, kivilágítva egy viharos, áramszünetes estén"
      imagePosition="50% 45%"
      ctaLabel="Ajánlatot kérek"
      ctaHref="#ajanlatkeres-fej"
      intro="Egy hagyományos napelemes rendszer áramszünetkor biztonsági okból leáll. Megfelelő hibrid inverterrel, energiatárolóval és szabályosan kialakított backuppal viszont otthonod legfontosabb berendezései tovább működhetnek."
      guaranteesTitle="Amit az A1 Solar biztosít:"
      guarantees={REASONS.map((r) => r.title)}
      badges="/images/brand/a1solar-badges.svg"
      formId="ajanlatkeres-fej"
      form={<BackupLeadForm />}
    />

    <SidebarLayout
      sidebar={
        <>
          <ServiceTocNav items={TOC} />
          <SupportWidget />
        </>
      }
    >
      <Reveal><Section id="miert-nem" eyebrow="Hogyan működik?" title="Miért nem működik minden napelemes rendszer áramszünetben?">
        <Body>
          Sokan úgy gondolják, hogy ha napelem van a házon, akkor áramszünet esetén is lesz villamos energia. Ez azonban
          nem feltétlenül igaz.
        </Body>
        <Body>
          A hagyományos napelemes rendszer hálózati kimaradáskor automatikusan leáll, hogy ne tápláljon vissza áramot
          abba a közcélú hálózatba, amelyen közben szakemberek dolgozhatnak.
        </Body>
        <Body>Az áramszüneti működéshez önmagában a napelem vagy a hibrid inverter sem elegendő. Szükség van:</Body>
        <CheckList
          items={[
            "megfelelő energiatárolóra",
            "valódi backup funkcióra",
            "szabályos hálózati leválasztásra",
            "megfelelő átkapcsoló- és védelmi berendezésekre",
            "az ingatlan adottságaihoz illeszkedő villamos kialakításra",
          ]}
        />
        <InfoCallout>
          Napelem a tetőn nem egyenlő az árammal áramszünetben. A biztonságos áramszüneti működéshez energiatároló, valódi
          backup funkció és szabályos hálózati leválasztás is kell.
        </InfoCallout>
        <Body>
          A legtöbb hálózati csatlakozással rendelkező családi háznál nem a teljesen szigetüzemű rendszer a
          legészszerűbb választás. Általában egy hibrid napelemes rendszer, energiatárolóval és megfelelően kialakított
          backuppal biztosítja a legjobb egyensúlyt a használhatóság, a biztonság és a beruházási költség között.
        </Body>
      </Section></Reveal>

      <RowDivider />

      <Reveal><Section id="backup-megoldasok" eyebrow="Backup megoldások" title="Kétféle backup megoldás">
        <InfoCard
          title="Backup a legfontosabb fogyasztókhoz"
          image="/wp-content/uploads/2025/08/backup-legfontosabb-fogyasztok.jpg"
          imageAlt="Áramszünetben csak a legfontosabb fogyasztók – konyha, hűtő, világítás – kapnak áramot"
        >
          <Body>
            Ez a költséghatékonyabb megoldás akkor lehet megfelelő, ha áramszünet esetén elsősorban az otthonod
            legfontosabb berendezéseit szeretnéd működtetni.
          </Body>
          <Body>Ilyen lehet például:</Body>
          <CheckList
            items={[
              "a hűtőszekrény",
              "az internetes router",
              "néhány lámpa",
              "a riasztó",
              "a fűtési rendszer keringetőszivattyúja",
              "telefonok és laptopok töltése",
            ]}
          />
          <Body>
            Deye és FoxESS rendszereknél megfelelő leválasztó- és védelmi berendezésekkel akár külön backup dugaljak is
            kialakíthatók. Áramszünet esetén ezekről célzottan elláthatók a kiválasztott berendezések.
          </Body>
          <Body>
            Ez praktikus megoldás, amikor nem az egész ház működtetése a cél, hanem az alapvető komfort és biztonság
            fenntartása.
          </Body>
          <Body>
            A rendelkezésre álló teljesítmény és működési idő mindig függ az inverter teljesítményétől, az akkumulátor
            kapacitásától és töltöttségétől, az aktuális napelemes termeléstől, valamint a csatlakoztatott fogyasztóktól.
          </Body>
          <CtaButton href="#ajanlatkeres">Megnézem, milyen backup rendszer illik az otthonomhoz</CtaButton>
        </InfoCard>

        <InfoCard
          title="Teljes házas backup"
          image="/wp-content/uploads/2025/08/backup-teljes-hazas.jpg"
          imageAlt="Áramszünetben a teljes ház – minden helyiség és nagyobb fogyasztó – árammal ellátva"
        >
          <Body>
            Megfelelő műszaki tervezés mellett akár az egész ház vagy annak előre meghatározott hálózati részei is
            elláthatók áramszünet esetén.
          </Body>
          <Body>
            Sigenergy rendszereknél ez jellemzően gateway alapú megoldással alakítható ki, de Deye és FoxESS
            rendszerekkel is megvalósítható teljes házas vagy több áramkört ellátó backup.
          </Body>
          <Body>
            Fontos azonban, hogy a teljes házas backup nem jelenti automatikusan azt, hogy minden nagy fogyasztó egyszerre
            és korlátozás nélkül használható.
          </Body>
          <Body>
            A következő berendezések működtetéséhez például nagyobb inverterteljesítményre és akkumulátorkapacitásra lehet
            szükség:
          </Body>
          <CheckList
            items={["hőszivattyú", "villanybojler", "indukciós főzőlap", "klímaberendezés", "szauna", "elektromosautó-töltő"]}
          />
          <Body>
            A teljes házas backup az alap napelemes és energiatárolós rendszerhez képest jelentős többletköltséget
            jelenthet. A pontos összeg függhet többek között:
          </Body>
          <CheckList
            items={[
              "a gateway vagy átkapcsolóberendezés típusától",
              "a szükséges hálózati leválasztástól",
              "az elosztótábla állapotától",
              "a kábelezés kialakításától",
              "a mérőhely műszaki állapotától",
              "a szükséges villamos védelmektől",
            ]}
          />
          <Body>
            Ezért nem egyszerűen egy kész csomagot kell kiválasztani. Az ingatlanodhoz és az elvárásaidhoz illő rendszert
            kell megtervezni.
          </Body>
        </InfoCard>
      </Section></Reveal>

      <RowDivider />

      <Reveal><Section id="melyik" eyebrow="Döntés" title="Melyik megoldás való neked?">
        <CompareCards items={MELYIK_CARDS} />
        <Body>A megfelelő rendszer kiválasztásához nem elég csak az éves energiafogyasztást ismerni. Ezeket vizsgáljuk meg:</Body>
        <FactorGrid
          items={[
            { icon: <Gauge size={20} strokeWidth={1.9} />, label: "Pillanatnyi csúcsterhelés" },
            { icon: <Plug size={20} strokeWidth={1.9} />, label: "Egy- vagy háromfázisú kialakítás" },
            { icon: <Zap size={20} strokeWidth={1.9} />, label: "Nagyobb fogyasztók teljesítménye" },
            { icon: <Clock size={20} strokeWidth={1.9} />, label: "Elvárt áthidalási idő" },
            { icon: <Network size={20} strokeWidth={1.9} />, label: "Elektromos hálózat állapota" },
            { icon: <Maximize2 size={20} strokeWidth={1.9} />, label: "Későbbi bővítés lehetősége" },
          ]}
        />
        <Body>Az A1 Solar szakemberei ezek alapján készítik el a személyre szabott műszaki javaslatot.</Body>
        <OfferCallout
          title="Nem vagy biztos benne, melyik megoldás való neked?"
          body="Segítünk eldönteni. Egy rövid műszaki egyeztetés alapján megmondjuk, hogy otthonodhoz a legfontosabb fogyasztókat ellátó kisebb backup vagy egy teljes házas megoldás illik-e jobban."
          prompt="Kérj személyre szabott javaslatot díjmentesen, megrendelési kötelezettség nélkül."
          ctaLabel="Ajánlatot kérek"
          ctaHref="#ajanlatkeres"
        />
      </Section></Reveal>

      <RowDivider />

      <Reveal><Section id="markak" eyebrow="Gyártók" title="Nem egyetlen márkát ajánlunk minden otthonhoz">
        <Body>
          Az adott ingatlan és az elvárt backup működés alapján többek között Deye, FoxESS és Sigenergy rendszerekkel is
          tervezünk megoldásokat.
        </Body>
        <Body>
          Nem egy előre összeállított rendszert próbálunk minden otthonra ráilleszteni. Azt a műszaki megoldást
          javasoljuk, amely az ingatlan adottságaihoz, a fogyasztási szokásokhoz és a rendelkezésre álló költségkerethez
          is megfelelő.
        </Body>
        <BrandRow
          items={[
            { name: "Deye", logo: "/wp-content/uploads/brands/deye.png" },
            { name: "FoxESS", logo: "/wp-content/uploads/brands/foxess.png" },
            { name: "Sigenergy", logo: "/wp-content/uploads/brands/sigenergy.svg" },
          ]}
        />
      </Section></Reveal>

      <RowDivider />

      <Reveal><Section id="reszletfizetes" eyebrow="Finanszírozás" title="Akár 6 havi kamatmentes részletfizetéssel">
        <Body>
          A beruházás teljes költségét nem feltétlenül kell egy összegben kifizetned – az A1 Solar kivitelezése bizonyos
          feltételek mellett akár 6 havi kamatmentes részletfizetéssel is elérhető.
        </Body>
        <StatBanner
          stats={[
            { value: "0%", label: "kamat" },
            { value: "6 hó", label: "futamidő" },
          ]}
          body="A részletfizetés pontos feltételeit az egyedi ajánlat és a szerződés tartalmazza."
          ctaLabel="Kérek ajánlatot részletfizetéssel"
          ctaHref="#ajanlatkeres"
        />
      </Section></Reveal>

      <RowDivider />

      <Reveal><Section id="cegunkrol" eyebrow="Cégünkről" title="Miért válassz minket?">
        <Body>
          Több mint 10 éves tapasztalatunkkal és több mint 5000 telepített rendszerrel garantáljuk a megbízhatóságot, a
          szakértelmet és a biztonságot. Átfogó szolgáltatásaink az első konzultációtól egészen a fenntartásig tartanak.
        </Body>
        <div
          className="flex min-h-[180px] flex-col items-center justify-center gap-2 rounded-[20px] p-8 text-center"
          style={{ background: "var(--surface-3)" }}
        >
          <div aria-hidden className="text-lg tracking-wide" style={{ color: "#f5b100" }}>
            ★★★★★
          </div>
          <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
            Ügyfeleink Google-értékelései hamarosan itt jelennek meg.
          </p>
        </div>
      </Section></Reveal>

      <RowDivider />

      <Reveal><Section id="referenciak" eyebrow="Referenciák" title="Tekintsd meg korábbi munkáink">
        <ReferenceGallery images={REFERENCE_IMAGES} />
      </Section></Reveal>

      <RowDivider />

      <Reveal><Section id="folyamat" eyebrow="Folyamat" title="Így készül el a rendszered">
        <StepTimeline items={STEPS} />
        <Body>
          Érdemes időben elindítani az egyeztetést, mert a megfelelő rendszer kiválasztása műszaki felmérést, esetenként
          hálózati átalakítást és különböző eszközök beszerzését is igényelheti.
        </Body>
      </Section></Reveal>

      <RowDivider />

      <Reveal><Section id="gyik" eyebrow="GYIK" title="Gyakori kérdések">
        <FaqList items={FAQ} />
      </Section></Reveal>

      <RowDivider />

      <Reveal><Section id="ajanlatkeres" eyebrow="Ajánlatkérés" title="Készülj fel tudatosan az áramszünetekre">
        <Body>
          Kérj személyre szabott műszaki javaslatot, és segítünk eldönteni, hogy otthonodhoz a legfontosabb fogyasztókat
          ellátó kisebb backup vagy egy teljes házas megoldás illik-e jobban.
        </Body>
        <Body>A kivitelezést bizonyos feltételek mellett akár 6 havi kamatmentes részletfizetéssel is kérheted.</Body>
        <div className="pt-2">
          <BackupLeadForm
            hideHeader
            submitLabel="Ajánlatkérő űrlap küldése"
            microcopy="Az ajánlatkérés díjmentes, és nem jár megrendelési kötelezettséggel."
          />
        </div>
      </Section></Reveal>
    </SidebarLayout>
  </div>
);
