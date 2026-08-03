import { ContactForm } from "@/components/ContactForm";
import { NotchHero } from "@/components/page/NotchHero";
import {
  Body,
  Bullets,
  CtaButton,
  FaqList,
  InfoCard,
  NumberedList,
  RowDivider,
  Section,
} from "@/components/section/SectionKit";
import { ServiceTocNav } from "@/components/service/ServiceTocNav";
import { HeroDivider, SidebarLayout } from "@/components/service/SidebarLayout";
import { SupportWidget } from "@/components/service/SupportWidget";

const TOC = [
  { id: "miert-nem", label: "Hogyan működik?" },
  { id: "backup-megoldasok", label: "Backup megoldások" },
  { id: "melyik", label: "Melyik való neked?" },
  { id: "markak", label: "Gyártók" },
  { id: "reszletfizetes", label: "Részletfizetés" },
  { id: "miert-a1", label: "Miért minket?" },
  { id: "folyamat", label: "Folyamat" },
  { id: "gyik", label: "GYIK" },
  { id: "ajanlatkeres", label: "Ajánlatkérés" },
];

const REASONS = [
  { num: "1", title: "5000+ megvalósított rendszer", text: "Több ezer lakossági és vállalati telepítés tapasztalatával segítünk megtalálni az otthonodhoz megfelelő megoldást." },
  { num: "2", title: "Személyre szabott tervezés", text: "A rendszert az ingatlanod fogyasztása, elektromos hálózata, a használni kívánt berendezések és az elvárt áramszüneti működés alapján tervezzük meg." },
  { num: "3", title: "Teljes körű szolgáltatás", text: "A műszaki felméréstől és tervezéstől a kivitelezésen át az üzembe helyezésig végigkísérjük a beruházást." },
  { num: "4", title: "Országos lefedettség", text: "Szakértőink Magyarország egész területén elérhetők." },
  { num: "5", title: "Megbízható szakmai háttér", text: "Tapasztalt mérnöki, kivitelezői és ügyintézői csapat dolgozik azon, hogy a rendszer ne csak elkészüljön, hanem hosszú távon is biztonságosan és hatékonyan működjön." },
];

const STEPS = [
  { num: "1", title: "Ajánlatkérés", text: "Töltsd ki az űrlapot, és add meg az alapvető igényeidet." },
  { num: "2", title: "Műszaki egyeztetés", text: "Átbeszéljük az energiafogyasztást, a nagyobb berendezéseket, az elvárt áramszüneti működést és az ingatlan alapvető adottságait." },
  { num: "3", title: "Felmérés és személyre szabott ajánlat", text: "Szükség esetén helyszíni felmérést végzünk, majd elkészítjük a műszaki tartalmat és a részletes ajánlatot." },
  { num: "4", title: "Kivitelezés és üzembe helyezés", text: "A jóváhagyott rendszer telepítése után elvégezzük a szükséges beállításokat, teszteljük a működést, és átadjuk a kész rendszert." },
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
    <NotchHero
      eyebrow="Hibrid rendszer + backup"
      titleLight="Legyen áram otthonodban akkor is,"
      titleStrong="amikor a hálózat leáll"
      image="/wp-content/uploads/2025/08/8024.jpg"
      imageAlt="Hibrid napelemes rendszer energiatárolóval"
      intro="Hibrid napelemes rendszer energiatárolóval és személyre szabott backup megoldással az A1 Solartól."
      ctaLabel="Kérek személyre szabott ajánlatot"
      ctaHref="#ajanlatkeres"
    />

    <HeroDivider />

    <SidebarLayout
      sidebar={
        <>
          <ServiceTocNav items={TOC} />
          <SupportWidget />
        </>
      }
    >
      {/* Lead */}
      <div className="flex flex-col gap-5">
        <Body>
          Egy hagyományos, hálózatra kapcsolt napelemes rendszer áramszünet esetén általában biztonsági okokból leáll.
          Megfelelő hibrid inverterrel, akkumulátorral és szabályosan kialakított backup rendszerrel azonban otthonod
          legfontosabb berendezései tovább működhetnek.
        </Body>
        <Body>
          Az A1 Solar az ingatlanod fogyasztása, elektromos hálózata és az elvárt áramszüneti működés alapján tervezi
          meg a megfelelő rendszert – a legfontosabb fogyasztók ellátásától akár a teljes házas backupig.
        </Body>
        <Body>A kivitelezést akár 6 havi kamatmentes részletfizetéssel is kérheted.</Body>
        <CtaButton href="#ajanlatkeres">Kérek személyre szabott ajánlatot</CtaButton>
      </div>

      <RowDivider />

      <Section id="miert-nem" eyebrow="Hogyan működik?" title="Miért nem működik minden napelemes rendszer áramszünetben?">
        <Body>
          Sokan úgy gondolják, hogy ha napelem van a házon, akkor áramszünet esetén is lesz villamos energia. Ez azonban
          nem feltétlenül igaz.
        </Body>
        <Body>
          A hagyományos napelemes rendszer hálózati kimaradáskor automatikusan leáll, hogy ne tápláljon vissza áramot
          abba a közcélú hálózatba, amelyen közben szakemberek dolgozhatnak.
        </Body>
        <Body>Az áramszüneti működéshez önmagában a napelem vagy a hibrid inverter sem elegendő. Szükség van:</Body>
        <Bullets
          items={[
            "megfelelő energiatárolóra",
            "valódi backup funkcióra",
            "szabályos hálózati leválasztásra",
            "megfelelő átkapcsoló- és védelmi berendezésekre",
            "az ingatlan adottságaihoz illeszkedő villamos kialakításra",
          ]}
        />
        <Body>
          A legtöbb hálózati csatlakozással rendelkező családi háznál nem a teljesen szigetüzemű rendszer a
          legészszerűbb választás. Általában egy hibrid napelemes rendszer, energiatárolóval és megfelelően kialakított
          backuppal biztosítja a legjobb egyensúlyt a használhatóság, a biztonság és a beruházási költség között.
        </Body>
      </Section>

      <RowDivider />

      <Section id="backup-megoldasok" eyebrow="Backup megoldások" title="Kétféle backup megoldás">
        <InfoCard title="Backup a legfontosabb fogyasztókhoz">
          <Body>
            Ez a költséghatékonyabb megoldás akkor lehet megfelelő, ha áramszünet esetén elsősorban az otthonod
            legfontosabb berendezéseit szeretnéd működtetni.
          </Body>
          <Body>Ilyen lehet például:</Body>
          <Bullets
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

        <InfoCard title="Teljes házas backup">
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
          <Bullets
            items={["hőszivattyú", "villanybojler", "indukciós főzőlap", "klímaberendezés", "szauna", "elektromosautó-töltő"]}
          />
          <Body>
            A teljes házas backup az alap napelemes és energiatárolós rendszerhez képest jelentős többletköltséget
            jelenthet. A pontos összeg függhet többek között:
          </Body>
          <Bullets
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
      </Section>

      <RowDivider />

      <Section id="melyik" eyebrow="Döntés" title="Melyik megoldás való neked?">
        <Body>
          A kisebb backup jó választás lehet, ha áramszünet esetén elsősorban a hűtőt, az internetet, a világítást és
          néhány kritikus berendezést szeretnéd működtetni.
        </Body>
        <Body>
          A teljes házas backup akkor lehet indokolt, ha több áramkört szeretnél megtartani, vagy otthonod működése
          nagymértékben függ elektromos berendezésektől.
        </Body>
        <Body>A megfelelő rendszer kiválasztásához nem elég csak az éves energiafogyasztást ismerni. Meg kell vizsgálni:</Body>
        <Bullets
          items={[
            "a pillanatnyi csúcsterhelést",
            "az egy- vagy háromfázisú kialakítást",
            "a nagyobb fogyasztók teljesítményét",
            "az elvárt áthidalási időt",
            "az elektromos hálózat állapotát",
            "a későbbi bővítés lehetőségét",
          ]}
        />
        <Body>Az A1 Solar szakemberei ezek alapján készítik el a személyre szabott műszaki javaslatot.</Body>
      </Section>

      <RowDivider />

      <Section id="markak" eyebrow="Gyártók" title="Nem egyetlen márkát ajánlunk minden otthonhoz">
        <Body>
          Az adott ingatlan és az elvárt backup működés alapján többek között Deye, FoxESS és Sigenergy rendszerekkel is
          tervezünk megoldásokat.
        </Body>
        <Body>
          Nem egy előre összeállított rendszert próbálunk minden otthonra ráilleszteni. Azt a műszaki megoldást
          javasoljuk, amely az ingatlan adottságaihoz, a fogyasztási szokásokhoz és a rendelkezésre álló költségkerethez
          is megfelelő.
        </Body>
      </Section>

      <RowDivider />

      <Section id="reszletfizetes" eyebrow="Finanszírozás" title="Akár 6 havi kamatmentes részletfizetéssel">
        <Body>A beruházás teljes költségét nem feltétlenül kell egy összegben kifizetned.</Body>
        <Body>Az A1 Solar kivitelezése bizonyos feltételek mellett akár 6 havi kamatmentes részletfizetéssel is elérhető.</Body>
        <Body>A részletfizetés pontos feltételeit az egyedi ajánlat és a szerződés tartalmazza.</Body>
        <CtaButton href="#ajanlatkeres">Kérek ajánlatot részletfizetéssel</CtaButton>
      </Section>

      <RowDivider />

      <Section id="miert-a1" eyebrow="Miért minket?" title="Miért válaszd az A1 Solart?">
        <NumberedList items={REASONS} />
      </Section>

      <RowDivider />

      <Section id="folyamat" eyebrow="Folyamat" title="Így készül el a rendszered">
        <NumberedList items={STEPS} />
        <Body>
          Érdemes időben elindítani az egyeztetést, mert a megfelelő rendszer kiválasztása műszaki felmérést, esetenként
          hálózati átalakítást és különböző eszközök beszerzését is igényelheti.
        </Body>
      </Section>

      <RowDivider />

      <Section id="gyik" eyebrow="GYIK" title="Gyakori kérdések">
        <FaqList items={FAQ} />
      </Section>

      <RowDivider />

      <Section id="ajanlatkeres" eyebrow="Ajánlatkérés" title="Készülj fel tudatosan az áramszünetekre">
        <Body>
          Kérj személyre szabott műszaki javaslatot, és segítünk eldönteni, hogy otthonodhoz a legfontosabb fogyasztókat
          ellátó kisebb backup vagy egy teljes házas megoldás illik-e jobban.
        </Body>
        <Body>A kivitelezést bizonyos feltételek mellett akár 6 havi kamatmentes részletfizetéssel is kérheted.</Body>
        <Body>Az ajánlatkérés díjmentes, és nem jár megrendelési kötelezettséggel.</Body>
        <div className="pt-2">
          <ContactForm
            bare
            formName="Hibrid napelem + backup ajánlatkérés"
            heading="Kérek díjmentes műszaki konzultációt"
            intro="Add meg az elérhetőségeidet és az alapvető igényeidet – munkatársunk 24 órán belül felveszi Önnel a kapcsolatot."
            submitLabel="Ajánlatkérő űrlap küldése"
          />
        </div>
      </Section>
    </SidebarLayout>
  </div>
);
