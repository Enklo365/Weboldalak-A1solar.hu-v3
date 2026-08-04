import { BatteryCharging, Gauge, Network, Plug, Zap } from "lucide-react";

import { BackupLeadForm } from "@/components/page/campaign/BackupLeadForm";
import { NotchHero } from "@/components/page/NotchHero";
import {
  Body,
  CheckList,
  CtaButton,
  FactorGrid,
  FeatureGrid,
  InfoCallout,
  InfoCard,
  Reveal,
  RowDivider,
  Section,
  StatBanner,
} from "@/components/section/SectionKit";
import { ServiceTocNav } from "@/components/service/ServiceTocNav";
import { HeroDivider, SidebarLayout } from "@/components/service/SidebarLayout";
import { SupportWidget } from "@/components/service/SupportWidget";

const TOC = [
  { id: "reszletfizetes", label: "Részletfizetés" },
  { id: "miert-nem", label: "Hogyan működik?" },
  { id: "backup", label: "Backup megoldás" },
  { id: "bovites", label: "Van már napelemed?" },
  { id: "kinek", label: "Kinek ajánljuk?" },
  { id: "miert-a1", label: "Miért minket?" },
  { id: "ajanlatkeres", label: "Ajánlatkérés" },
];

const REASONS = [
  { title: "5000+ megvalósított rendszer", text: "Több ezer lakossági és vállalati kivitelezés tapasztalata." },
  { title: "Személyre szabott tervezés", text: "Nem kész csomagot adunk, hanem az ingatlanodhoz illő rendszert tervezzük meg." },
  { title: "Teljes körű kivitelezés", text: "A műszaki egyeztetéstől a telepítésen át a beüzemelésig végigkísérünk." },
  { title: "Országos lefedettség", text: "Szakértőink Magyarország egész területén elérhetők." },
];

/**
 * "Napelem és energiatároló 6 havi kamatmentes részletfizetéssel" — bespoke
 * native subpage (full navigation chrome), built entirely from the shared
 * section kit + page-chrome components.
 */
export const NapelemReszletfizetes = () => (
  <div>
    <NotchHero
      eyebrow="6 havi kamatmentes részletfizetés"
      titleLight="Napelem és energiatároló"
      titleStrong="akár 6 havi kamatmentes részletfizetéssel"
      image="/wp-content/uploads/2025/08/hibrid-napelem-backup-hero.jpg"
      imageAlt="Napelemes családi ház energiatárolóval, alkonyatban"
      imagePosition="50% 55%"
      intro="Növeld az energiafüggetlenségedet, és készülj fel az áramszünetekre – személyre szabott rendszerrel, rugalmas fizetéssel."
      ctaLabel="Ajánlatot kérek részletfizetéssel"
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
      <Reveal>
        <div className="flex flex-col gap-5">
          <Body>
            Egy jól megtervezett napelemes rendszer nemcsak a hálózatból vásárolt energia mennyiségét csökkentheti.
            Megfelelő energiatárolóval és backup kialakítással áramszünet esetén is tovább működhetnek otthonod vagy
            vállalkozásod legfontosabb berendezései.
          </Body>
          <Body>
            Az A1 Solar személyre szabott napelemes és energiatárolós rendszereit most akár 6 havi kamatmentes
            részletfizetéssel is megvalósíthatod – kérhetsz egyszerűbb backup megoldást a legfontosabb fogyasztókhoz,
            vagy megfelelő műszaki adottságok mellett az egész ingatlan kijelölt hálózatát ellátó rendszert.
          </Body>
        </div>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section id="reszletfizetes" eyebrow="Finanszírozás" title="6 havi kamatmentes részletfizetés">
          <Body>Nem szükséges a teljes beruházást egy összegben kifizetned. Az egyedi ajánlatban átláthatóan bemutatjuk:</Body>
          <CheckList
            items={[
              "a rendszer műszaki tartalmát",
              "a teljes árat",
              "a havi részletek összegét",
              "a fizetési ütemezést",
              "a részletfizetés pontos feltételeit",
            ]}
          />
          <Body>
            Így előre láthatod, milyen rendszert kapsz, mennyibe kerül, és hogyan oszlik meg a fizetés hat hónapra.
          </Body>
          <StatBanner
            stats={[
              { value: "0%", label: "kamat" },
              { value: "6 hó", label: "futamidő" },
            ]}
            body="A részletfizetés pontos feltételeit az egyedi ajánlat és a szerződés tartalmazza."
            ctaLabel="Ajánlatot kérek részletfizetéssel"
            ctaHref="#ajanlatkeres"
          />
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section id="miert-nem" eyebrow="Hogyan működik?" title="Miért nem működik minden napelem áramszünetben?">
          <Body>
            A hagyományos, hálózatra kapcsolt napelemes rendszer áramszünet esetén biztonsági okokból általában leáll.
            Ez azt jelenti, hogy megfelelő energiatároló és backup kialakítás nélkül akkor sem feltétlenül lesz áram az
            ingatlanban, ha közben süt a nap.
          </Body>
          <InfoCallout>
            Az áramszüneti működéshez önmagában a napelem vagy a hibrid inverter nem elegendő. Szükség van akkumulátorra,
            valódi backup funkcióra, szabályos hálózati leválasztásra és megfelelő villamos védelemre is.
          </InfoCallout>
          <Body>
            A rendszert ezért mindig az ingatlan fogyasztásához, elektromos hálózatához és az elvárt áramszüneti
            működéshez tervezzük.
          </Body>
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section id="backup" eyebrow="Backup megoldás" title="Részleges vagy teljes backup?">
          <InfoCard title="A legfontosabb fogyasztók ellátása">
            <Body>
              Költséghatékonyabb megoldás lehet, ha áramszünet esetén csak az előre kiválasztott berendezéseket szeretnéd
              működtetni. Ilyen lehet például:
            </Body>
            <CheckList
              items={[
                "a világítás",
                "a hűtő és a fagyasztó",
                "az internet és a riasztó",
                "a fűtési rendszer vezérlése és a keringetőszivattyú",
                "egy kisebb iroda számítógépei",
                "az üzlet vagy műhely fontos berendezései",
              ]}
            />
          </InfoCard>

          <InfoCard title="Teljes ingatlanra tervezett backup">
            <Body>
              Megfelelő méretezés mellett akár az egész családi ház, iroda, üzlethelyiség vagy kisebb telephely kijelölt
              hálózata is ellátható.
            </Body>
            <Body>
              Ez azonban nem jelenti automatikusan azt, hogy minden nagy fogyasztó egyszerre és korlátozás nélkül
              használható. A rendelkezésre álló teljesítményt az inverter, az akkumulátor, az elektromos hálózat és az
              egyidejű fogyasztás határozza meg.
            </Body>
          </InfoCard>
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section id="bovites" eyebrow="Bővítés" title="Már van napelemes rendszered?">
          <Body>Meglévő rendszered bizonyos esetekben energiatárolóval és backup funkcióval is bővíthető.</Body>
          <Body>Nem javasoljuk automatikusan a teljes rendszer cseréjét. Először megvizsgáljuk:</Body>
          <FactorGrid
            items={[
              { icon: <Plug size={20} strokeWidth={1.9} />, label: "Meglévő inverter és napelemek" },
              { icon: <Gauge size={20} strokeWidth={1.9} />, label: "A rendszer teljesítménye" },
              { icon: <Network size={20} strokeWidth={1.9} />, label: "Az ingatlan villamos hálózata" },
              { icon: <BatteryCharging size={20} strokeWidth={1.9} />, label: "Az akkumulátor csatlakoztatása" },
              { icon: <Zap size={20} strokeWidth={1.9} />, label: "A kívánt backup működés" },
            ]}
          />
          <Body>
            Egyes esetekben elegendő lehet néhány berendezés kiegészítése, máskor invertercserére vagy részleges
            átalakításra lehet szükség.
          </Body>
          <CtaButton href="#ajanlatkeres">Meglévő rendszerre kérek ajánlatot</CtaButton>
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section id="kinek" eyebrow="Kinek ajánljuk?" title="Otthonoknak és kisebb vállalkozásoknak">
          <Body>
            Megoldásainkat családi házak, irodák, üzletek, műhelyek, rendelők és kisebb telephelyek számára is kínáljuk.
            Egy jól megtervezett rendszer:
          </Body>
          <CheckList
            items={[
              "csökkentheti a hálózatból vásárolt energiát",
              "növelheti a saját napenergia felhasználását",
              "mérsékelheti az áramszünetek hatását",
              "működésben tarthatja a fontos berendezéseket",
              "növelheti az energiafüggetlenséget",
            ]}
          />
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section id="miert-a1" eyebrow="Miért minket?" title="Miért válaszd az A1 Solart?">
          <FeatureGrid items={REASONS} />
        </Section>
      </Reveal>

      <RowDivider />

      <Reveal>
        <Section id="ajanlatkeres" eyebrow="Ajánlatkérés" title="Kérj személyre szabott ajánlatot">
          <Body>
            Akár új rendszert szeretnél, akár meglévő napelemes rendszeredet korszerűsítenéd, segítünk megtalálni a
            megfelelő megoldást. Az ajánlatból megtudhatod:
          </Body>
          <CheckList
            items={[
              "milyen rendszer illik az ingatlanodhoz",
              "mekkora energiatárolóra lehet szükséged",
              "mely fogyasztók működhetnek áramszünet esetén",
              "mennyi lenne a teljes ár és a havi részlet",
            ]}
          />
          <div className="pt-2">
            <BackupLeadForm
              formName="Napelem + energiatároló részletfizetés ajánlatkérés"
              hideHeader
              submitLabel="Ajánlatot kérek részletfizetéssel"
              microcopy="Az ajánlatkérés díjmentes, és nem jár megrendelési kötelezettséggel. A részletfizetés és a backup működés pontos feltételeit az egyedi ajánlat és a szerződés tartalmazza."
            />
          </div>
        </Section>
      </Reveal>
    </SidebarLayout>
  </div>
);
