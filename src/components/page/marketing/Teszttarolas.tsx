import { NotchHero } from "@/components/page/NotchHero";
import {
  Body,
  Bullets,
  CheckList,
  CompareCards,
  CtaBanner,
  CtaButton,
  FaqList,
  FeatureGrid,
  InfoCallout,
  InfoCard,
  Reveal,
  RowDivider,
  Section,
  StepTimeline,
  TagList,
} from "@/components/section/SectionKit";

const PROBLEMS = [
  {
    title: "Energiaköltségek kezelése",
    text: "Az energiatároló segíthet abban, hogy a vállalkozásod a saját megtermelt energiáját jobban felhasználja, illetve a fogyasztását tudatosabban időzítse.",
  },
  {
    title: "Fogyasztási csúcsok kezelése",
    text: "Megfelelő rendszertervezéssel az energiatároló szerepet kaphat a rövid idejű teljesítménycsúcsok mérséklésében.",
  },
  {
    title: "Saját napelemes energia jobb felhasználása",
    text: "Ha a napelemes rendszer olyan időszakban termel, amikor a vállalkozás nem használja fel teljesen az energiát, annak egy része eltárolható és később felhasználható.",
  },
  {
    title: "Hálózati korlátok kezelése",
    text: "Bizonyos helyzetekben az energiatárolás segíthet a rendelkezésre álló hálózati kapacitás hatékonyabb kihasználásában.",
  },
  {
    title: "Energiabiztonság és üzletmenet-folytonosság",
    text: "Megfelelő műszaki kialakítás esetén az energiatároló tartalék energiaellátásban is szerepet kaphat.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Energetikai helyzet felmérése",
    text: "Megvizsgáljuk a fogyasztást, a meglévő energiatermelést és azt, hogy mi a legfontosabb üzleti probléma.",
  },
  {
    num: "02",
    title: "Műszaki lehetőségek vizsgálata",
    text: "Megnézzük, hogyan illeszthető egymáshoz a napelemes rendszer, az energiatároló és az intelligens energiakezelés.",
  },
  {
    num: "03",
    title: "Rendszerjavaslat",
    text: "A célok alapján javaslatot készítünk a lehetséges rendszerkialakításra.",
  },
  {
    num: "04",
    title: "Következő lépések",
    text: "Bemutatjuk a műszaki, finanszírozási és adminisztratív lépéseket.",
  },
];

const FAQ = [
  {
    q: "Meglévő vállalati napelemes rendszer mellé is telepíthető energiatároló?",
    a: "Sok esetben igen. Ehhez meg kell vizsgálni a meglévő rendszer műszaki kialakítását, az invertereket, a hálózati csatlakozást és a fogyasztási profilt.",
  },
  {
    q: "Mekkora energiatárolóra van szüksége egy vállalkozásnak?",
    a: "Nincs általánosan megfelelő méret. A kapacitást a fogyasztási profil, a napelemes termelés és a tároló tervezett szerepe alapján kell meghatározni.",
  },
  {
    q: "Lehet energiatárolóval csökkenteni a fogyasztási csúcsokat?",
    a: "Megfelelő tervezés és vezérlés mellett igen, de ezt mindig a vállalkozás fogyasztási adatai alapján kell megvizsgálni.",
  },
  {
    q: "Működik a vállalkozás áramszünet esetén?",
    a: "Csak akkor, ha a rendszer megfelelő backup funkcióval, leválasztással és villamos kialakítással készül el.",
  },
  {
    q: "Mennyi idő alatt térül meg?",
    a: "Általános megtérülési idő nem adható. A beruházás, a fogyasztási profil, a termelés, az energiaköltségek, a felhasználási mód és az esetleges további szolgáltatások együtt határozzák meg.",
  },
  {
    q: "Van jelenleg támogatás?",
    a: "A támogatási lehetőségek időszakonként változnak. Mindig az aktuálisan elérhető programokat érdemes megvizsgálni.",
  },
];

export const Teszttarolas = () => (
  <div>
    <NotchHero
      eyebrow="Vállalati energiatárolás"
      titleLight="Tervezhetőbb energia,"
      titleStrong="kisebb üzleti kockázat"
      image="/wp-content/uploads/2025/08/47611.jpg"
      imageAlt="Vállalati napelemes és energiatároló rendszer irodaépület tetején"
      imagePosition="50% 48%"
      intro="Csökkentsd az energiaköltségek és a hálózati korlátok üzleti kockázatát, és használd tudatosabban a saját energiádat."
      ctaLabel="Kérek ingyenes konzultációt"
      ctaHref="#konzultacio"
    />

    <div className="mx-auto max-w-[var(--container)] px-4 py-14 md:px-6 md:py-20">
      <Reveal>
        <Section
          eyebrow="Üzleti célok"
          title="Milyen problémát oldhat meg egy vállalati energiatároló?"
          intro="Egy ipari vagy vállalati akkumulátor nem önmagában értékes. Akkor van értelme, ha egy konkrét energetikai vagy üzleti problémára ad megoldást."
        >
          <FeatureGrid items={PROBLEMS} />
          <InfoCallout>
            Fontos: nem minden energiatároló rendszer biztosít automatikusan backup működést. Ehhez a teljes villamos rendszer megfelelő kialakítása szükséges.
          </InfoCallout>
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section
          eyebrow="Kiindulási helyzet"
          title="Meglévő vagy új napelemes rendszerrel tervezel?"
          intro="Segítünk megvizsgálni, hogy egy vállalati energiatároló milyen szerepet tölthet be a céged energetikai rendszerében, és milyen műszaki vagy finanszírozási lehetőség illeszkedhet hozzá."
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <InfoCard title="Van már napelemes rendszered?">
              <Body>A meglévő vállalati napelemes rendszer mellé sok esetben energiatároló is illeszthető.</Body>
              <Body>A lehetőségek többek között ezektől függnek:</Body>
              <Bullets
                items={[
                  "a meglévő rendszer mérete",
                  "az inverter és a villamos rendszer kialakítása",
                  "a fogyasztási profil",
                  "a termelési és fogyasztási csúcsok",
                  "a hálózati csatlakozási lehetőségek",
                  "a backup vagy más speciális funkció igénye",
                ]}
              />
              <Body>Ezért a tároló méretét nem érdemes önmagában meghatározni.</Body>
              <CtaButton href="#konzultacio">Megnézzük a meglévő rendszeremet</CtaButton>
            </InfoCard>

            <InfoCard title="Új napelemes rendszerrel együtt tervezel?">
              <Body>
                Új beruházásnál érdemes a napelemes rendszert, az energiatárolót és az intelligens energiakezelést egyetlen rendszerként megtervezni.
              </Body>
              <CheckList
                items={[
                  "fogyasztási profil",
                  "napelemes termelés",
                  "hálózati korlátok",
                  "teljesítményigény",
                  "az energiatárolás szerepe",
                  "backup igény",
                  "későbbi bővíthetőség",
                ]}
              />
            </InfoCard>
          </div>
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section
          eyebrow="Méretezés"
          title="Mekkora energiatárolóra van szükség?"
          intro="Erre nincs általános válasz. A megfelelő méretezéshez először meg kell érteni a vállalkozás energetikai működését."
        >
          <TagList
            items={[
              "napi és éves energiafogyasztás",
              "negyedórás vagy részletes fogyasztási profil",
              "meglévő vagy tervezett napelemes termelés",
              "fogyasztási csúcsok",
              "hálózati csatlakozási teljesítmény",
              "az energiatároló tervezett feladata",
              "backup igény",
            ]}
          />
          <InfoCallout>A cél nem a lehető legnagyobb akkumulátor, hanem az adott feladathoz megfelelő rendszer.</InfoCallout>
          <CtaButton href="#konzultacio">Kérek előzetes rendszerfelmérést</CtaButton>
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section
          eyebrow="Energiabiztonság"
          title="Energiaszükséglet és backup"
          intro="Fontos különválasztani a költségoptimalizálást és a tartalék energiaellátást. Ha a vállalkozásnak áramszünet esetén is működtetnie kell bizonyos berendezéseket, ezt már a tervezés elején meg kell határozni."
        >
          <CompareCards
            items={[
              {
                title: "Amit a backup tervezésénél vizsgálunk",
                points: [
                  "mely fogyasztóknak kell működniük",
                  "mekkora teljesítmény szükséges",
                  "mennyi ideig kell biztosítani az ellátást",
                  "milyen leválasztási és átkapcsolási rendszer szükséges",
                ],
              },
              {
                title: "Amit fontos előre tisztázni",
                subtitle: "Az akkumulátor megléte önmagában nem garantál üzletmenet-folytonosságot.",
                points: [
                  "a backup külön műszaki funkció",
                  "a kritikus fogyasztókat előre ki kell jelölni",
                  "a teljes villamos rendszer kialakítása számít",
                ],
                highlighted: true,
              },
            ]}
          />
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section
          eyebrow="Rendszerszemlélet"
          title="Intelligens energiakezelés"
          intro="Az energiatároló értékét nagyban meghatározza a vezérlés. Egy jól kialakított energiakezelő rendszer összehangolhatja a napelemes termelést, az akkumulátor töltését és kisütését, a vállalkozás fogyasztását, a teljesítményigényt és az előre meghatározott energetikai célokat."
        >
          <Body>Ezért az energiatárolót érdemes egy összetett energetikai rendszer részeként kezelni.</Body>
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section
          eyebrow="További lehetőségek"
          title="Energiapiaci és aggregációs lehetőségek"
          intro="Egy megfelelően vezérelt energiatároló a későbbiekben nagyobb, összehangolt rendszer részeként is működhet. Ez lehetőséget teremthet különböző rugalmassági vagy aggregációs szolgáltatásokban való részvételre."
        >
          <Bullets
            items={[
              "a rendszer műszaki képességei",
              "az aktuális piaci és szabályozási környezet",
              "az aggregátor feltételei",
              "az elérhető szolgáltatások",
            ]}
          />
          <InfoCallout>Konkrét bevételi vagy megtérülési lehetőséget csak egyedi és aktuális adatok alapján lehet megvizsgálni.</InfoCallout>
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section eyebrow="Közös munka" title="Hogyan segítünk?">
          <StepTimeline items={STEPS} />
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section eyebrow="GYIK" title="Gyakori kérdések">
          <FaqList items={FAQ} />
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <div id="konzultacio" style={{ scrollMarginTop: "100px" }}>
          <CtaBanner
            eyebrow="Ingyenes első egyeztetés"
            title="Nézzük meg, van-e értelme energiatárolónak a vállalkozásodnál"
            body="Nem egy akkumulátort szeretnénk eladni, hanem azt megvizsgálni, hogy milyen energetikai rendszer oldhatja meg a vállalkozásod problémáját."
            ctaLabel="Kapcsolatfelvétel"
            ctaHref="/kapcsolat"
          />
          <div className="mt-7">
            <CheckList
              items={[
                "Ingyenes és kötelezettségmentes első egyeztetés",
                "Meglévő napelemes rendszer figyelembevétele",
                "Fogyasztási és termelési adatok alapján történő tervezés",
                "Backup igény külön vizsgálata",
                "48 munkaórán belül visszahívunk",
              ]}
            />
          </div>
        </div>
      </Reveal>
    </div>
  </div>
);
