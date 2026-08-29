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
  { num: "3", title: "Erős pénzügyi minősítés", text: "AAA D&B vállalati minősítés – számunkra fontos, hogy partnereink és munkatársaink egy pénzügyileg is megbízható vállalathoz csatlakozzanak." },
  { num: "4", title: "Erős ügyfélbizalom", text: "A vállalatunkról nyilvánosan elérhető ügyfélértékelések és referenciák is képet adnak a munkánkról. Nem csak azt mondjuk magunkról, hogy megbízhatóak vagyunk – az ügyfeleink véleménye is számít." },
  { num: "5", title: "Ismert gyártók és technológiák", text: "Nemzetközileg ismert napelem-, inverter- és energiatároló-gyártók termékeivel dolgozunk, több gyártóval hivatalos partneri vagy disztribútori kapcsolatban." },
  { num: "6", title: "Saját leadekkel is támogatjuk az értékesítést", text: "Nem várjuk el, hogy a régióvezető és csapata kizárólag saját kapcsolati hálóból dolgozzon. Központi marketinggel és leadgenerálással támogatjuk az értékesítést." },
  { num: "7", title: "Nem egyedül kell felépítened a régiódat", text: "Segítünk a toborzásban és az értékesítők betanításában saját belső oktatási programunkkal, valamint műszaki oldalról, marketinganyagokkal, online ajánlatadó szoftverrel és központi háttérfolyamatokkal." },
  { num: "8", title: "Valódi vezetői lehetőség", text: "Nem egyszerű értékesítői pozícióról van szó. Saját régiót, saját értékesítői csapatot és hosszabb távon komoly üzletet építhetsz velünk." },
];

/**
 * Régióvezető előszűrés — recruitment funnel (sidebar subpage layout). Built from
 * existing components: NotchHero + SidebarLayout + NumberedList + KarrierApplyForm.
 */
export const RegiovezetoEloszures = () => (
  <div>
    <NotchHero
      eyebrow="Régióvezetői lehetőség"
      titleLight="Építs saját értékesítői csapatot"
      titleStrong="az A1 Solarral"
      image="/wp-content/uploads/2025/07/photo_2025-07-30_10-24-40.jpg"
      imageAlt="Az A1 Solar csapata"
      intro="Vállalkozói, jutalékalapú együttműködés – a jövedelmed a saját és a csapatod eredményével együtt növekedhet."
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
            Ne csak csapatot vezess – építs saját régiót. A lehetőség vállalkozói, jutalékalapú, és a jövedelmed a saját
            és a csapatod eredményével együtt növekedhet.
          </Body>
          <Body>
            Ha ez a működés közel áll hozzád, töltsd ki az előszűrőt. Néhány perc alatt kiderülhet, érdemes-e tovább
            beszélnünk.
          </Body>
        </div>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section id="miert" eyebrow="Miért minket?" title="Miért érdemes az A1 Solarral dolgoznod?">
          <Body>
            Régióvezetőként nem mindegy, milyen cég áll mögötted. Az A1 Solarnál egy működő értékesítési rendszerhez,
            ismert márkához és stabil szakmai háttérhez csatlakozol.
          </Body>
          <NumberedList items={REASONS} />
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section id="jelentkezes" eyebrow="Előszűrő" title="Töltsd ki a régióvezetői előszűrőt">
          <Body>
            Add meg az elérhetőségeidet, és írd le pár mondatban, miért lennél sikeres régióvezető az A1 Solarnál.
            Munkatársunk a beérkezés után felveszi veled a kapcsolatot a részletes előszűrő kérdésekkel.
          </Body>
          <div className="pt-2">
            <KarrierApplyForm positionTitle="Régióvezető" />
          </div>
        </Section>
      </Reveal>
    </SidebarLayout>
  </div>
);
