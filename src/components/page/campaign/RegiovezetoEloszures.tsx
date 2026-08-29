import { ScreeningQuiz, type QuizField } from "@/components/page/campaign/ScreeningQuiz";
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

const QUESTIONS: QuizField[] = [
  { name: "csapat_meret", type: "select", required: true, label: "Hány fős értékesítési csapatot vezettél eddig?", options: ["Nem voltam még vezető", "2–5 fő", "6–10 fő", "11 fő felett"] },
  { name: "felepites_90nap", type: "text", required: true, label: "Hány aktív értékesítőt tudnál reálisan felépíteni magad alatt 90 napon belül?", placeholder: "pl. 5" },
  { name: "elso5", type: "textarea", required: true, label: "Ha holnap kezdenél nálunk, honnan szereznéd meg az első 5 értékesítődet?" },
  { name: "alulteljesites", type: "textarea", required: true, label: "Tegyük fel, hogy 8 értékesítőd van, de közülük csak 3 hoz rendszeresen szerződést. Mit csinálnál a következő 30 napban?" },
  { name: "kpi", type: "textarea", required: true, label: "Milyen rendszerességgel és milyen KPI-ok alapján követnéd az értékesítőid teljesítményét?" },
  { name: "gyenge_lancszem", type: "textarea", required: true, label: "Volt-e olyan értékesítőd, aki alulteljesített? Mit tettél vele?" },
  { name: "stilus", type: "radio", required: true, label: "Melyik állítás áll hozzád közelebb?", options: ["Inkább kapok egy kész, jól működő csapatot, és abból hozom ki a maximumot.", "Szeretek nulláról felépíteni egy csapatot."] },
  { name: "konstrukcio", type: "select", required: true, label: "A pozíció vállalkozói, számlás és teljesítményalapú. Megfelel számodra ez a konstrukció?", options: ["Igen", "Nem"] },
  { name: "jovedelem_cel", type: "text", required: true, label: "Mekkora havi jövedelmi célt tartasz reálisnak ebben a pozícióban 6–12 hónap után?", placeholder: "pl. 1 500 000 Ft" },
  { name: "miert_sikeres", type: "textarea", required: true, label: "Miért gondolod, hogy sikeres lennél egy olyan iparágban, amelyben jelenleg nincs tapasztalatod?" },
  { name: "egyeb", type: "textarea", label: "Amit fontosnak tartasz még leírni" },
];

/**
 * Régióvezető előszűrés — recruitment funnel (sidebar subpage layout). Built from
 * existing components + the native ScreeningQuiz (Fluent Forms quiz equivalent).
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
            Néhány perc alatt kitölthető. A válaszaid alapján kiderül, érdemes-e tovább beszélnünk – a beérkezés után
            felvesszük veled a kapcsolatot.
          </Body>
          <div className="pt-2">
            <ScreeningQuiz formName="Régióvezető előszűrő" questions={QUESTIONS} />
          </div>
        </Section>
      </Reveal>
    </SidebarLayout>
  </div>
);
