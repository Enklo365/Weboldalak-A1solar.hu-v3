import { KarrierApplyForm } from "@/components/page/marketing/KarrierApplyForm";
import { NotchHero } from "@/components/page/NotchHero";
import { Body, NumberedList, Reveal, RowDivider, Section } from "@/components/section/SectionKit";
import { ServiceTocNav } from "@/components/service/ServiceTocNav";
import { HeroDivider, SidebarLayout } from "@/components/service/SidebarLayout";
import { SupportWidget } from "@/components/service/SupportWidget";

const TOC = [
  { id: "miert", label: "Miért érdemes?" },
  { id: "jelentkezes", label: "Előszűrő" },
];

const REASONS = [
  { num: "1", title: "Bizonyított növekedés", text: "Az A1 Solar bekerült a Financial Times FT1000 – Europe’s Fastest Growing Companies rangsorába, ahol 2025-ben európai szinten a 12., Magyarországon pedig az 1. helyet érte el növekedési kategóriájában." },
  { num: "2", title: "Stabil és megbízható vállalati háttér", text: "Több éve működő, komoly referenciákkal, saját szakmai, értékesítési és kivitelezési háttérrel rendelkező vállalat vagyunk, több mint 5000 kivitelezéssel és nemzetközi jelenléttel." },
  { num: "3", title: "Erős pénzügyi minősítés", text: "AAA D&B vállalati minősítéssel rendelkezünk. Fontos, hogy értékesítőink és partnereink egy pénzügyileg is stabil, megbízható vállalattal dolgozzanak." },
  { num: "4", title: "Erős ügyfélbizalom", text: "A vállalatunkról nyilvánosan elérhető ügyfélértékelések és referenciák is képet adnak a munkánkról. Értékesítőként sokkal könnyebb úgy tárgyalni, ha egy ismert és bizonyítható háttér áll mögötted." },
  { num: "5", title: "Ismert gyártók és korszerű technológiák", text: "Nemzetközileg ismert napelem-, inverter- és energiatároló-gyártók termékeivel dolgozunk, több gyártóval hivatalos partneri vagy disztribútori kapcsolatban." },
  { num: "6", title: "Saját leadekkel is támogatjuk az értékesítést", text: "Központi marketinggel és leadgenerálással támogatjuk az értékesítést. A saját lead természetesen érték, de nem abból indulunk ki, hogy mindent neked kell megszerezned." },
  { num: "7", title: "Modern értékesítési rendszer, minimális adminisztráció", text: "Könnyen használható CRM-ben dolgozol, amelyhez integrált helyszíni felmérő alkalmazás és ajánlatkalkulátor kapcsolódik – ne Excel-táblák között teljen a napod. A CRM rendben tartása nálunk alap." },
  { num: "8", title: "Nem maradsz egyedül a műszaki kérdésekkel", text: "Belső oktatási programmal, műszaki támogatással, marketinganyagokkal, online ajánlatadó rendszerrel és központi háttérfolyamatokkal támogatjuk a munkádat." },
  { num: "9", title: "Teljesítményalapú kereseti lehetőség", text: "A konstrukció jutalékalapú. Minél jobb eredményt érsz el, annál magasabb lehet a jövedelmed – nem fix plafonban, hanem teljesítményben gondolkodunk." },
];

/**
 * Értékesítő előszűrő — recruitment funnel (sidebar subpage layout). Built from
 * existing components: NotchHero + SidebarLayout + NumberedList + KarrierApplyForm.
 */
export const ErtekesitoEloszuro = () => (
  <div>
    <NotchHero
      eyebrow="Értékesítői lehetőség"
      titleLight="Építs sikeres értékesítői karriert"
      titleStrong="az A1 Solarral"
      image="/wp-content/uploads/2025/07/photo_2025-07-30_10-24-40.jpg"
      imageAlt="Az A1 Solar csapata"
      intro="Vállalkozói, jutalékalapú együttműködés – a jövedelmed közvetlenül a saját teljesítményeddel együtt növekszik."
      ctaLabel="Kitöltöm az előszűrőt"
      ctaHref="#jelentkezes"
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
      <Reveal>
        <div className="flex flex-col gap-5">
          <Body>
            Ne csak ajánlatot küldj – építs saját ügyfélkört és eredményt. A lehetőség vállalkozói, jutalékalapú, és a
            jövedelmed a saját teljesítményeddel együtt növekedhet.
          </Body>
          <Body>
            Ha szeretsz ügyfelekkel dolgozni, eredményt elérni, és egy jól felépített rendszerben értékesítenél, töltsd
            ki az előszűrőt. Néhány perc alatt kiderülhet, érdemes-e tovább beszélnünk.
          </Body>
        </div>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section id="miert" eyebrow="Miért minket?" title="Miért érdemes az A1 Solarral dolgoznod?">
          <Body>
            Értékesítőként nem mindegy, milyen cég, milyen termék és milyen rendszer áll mögötted. Az A1 Solarnál egy
            működő értékesítési rendszerhez, ismert márkához és stabil szakmai háttérhez csatlakozol.
          </Body>
          <NumberedList items={REASONS} />
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section id="jelentkezes" eyebrow="Előszűrő" title="Töltsd ki az értékesítői előszűrőt">
          <Body>
            Add meg az elérhetőségeidet, és írd le pár mondatban, miért lennél sikeres értékesítő az A1 Solarnál.
            Munkatársunk a beérkezés után felveszi veled a kapcsolatot a részletes előszűrő kérdésekkel.
          </Body>
          <div className="pt-2">
            <KarrierApplyForm positionTitle="Értékesítő" />
          </div>
        </Section>
      </Reveal>
    </SidebarLayout>
  </div>
);
