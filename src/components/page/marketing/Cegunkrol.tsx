import type { ReactNode } from "react";

import { ServiceTocNav } from "@/components/service/ServiceTocNav";
import { HeroDivider, SidebarLayout } from "@/components/service/SidebarLayout";
import { SupportWidget } from "@/components/service/SupportWidget";

const HERO_CLIP_ID = "a1-cegunkrol-hero-shape";
/* Same looped hero video as the homepage. */
const HERO_VIDEO = "/nativ/hero-loop.mp4";
const HERO_POSTER = "/wp-content/uploads/2026/03/otthoni_energiatarolo_program-1.png";
const AWARD_IMAGE = "/wp-content/uploads/2026/06/2025.11.27.-Uzleti-Etikai-Dij-159-1-scaled.jpg";
const GRADIENT = "linear-gradient(to right, #0A141Dcc 0%, rgba(10,20,29,0) 100%)";
const FIRSTS_VIDEO = "a-3vU7MlPTU";

const CEG_TOC = [
  { id: "bemutatkozas", label: "Cégünkről" },
  { id: "tortenet", label: "Történetünk" },
  { id: "szolgaltatasok", label: "Több mint napelem" },
  { id: "referenciak", label: "Referenciáink" },
  { id: "nemzetkozi", label: "Nemzetközi projektek" },
  { id: "miert-erdemes", label: "Miért éri meg?" },
  { id: "elsok-voltunk", label: "Elsők voltunk" },
  { id: "velemenyek", label: "Vélemények" },
];

const STORY_LEAD = [
  "Az A1 Solar magyar tulajdonú energetikai vállalat, amely lakossági, vállalati és ipari ügyfelei számára kínál komplex napelemes, energiatárolási és energiahatékonysági megoldásokat.",
  "Célunk nem egyszerűen berendezések értékesítése vagy napelemek telepítése. Olyan hosszú távon működő, megbízható energetikai rendszereket tervezünk és valósítunk meg, amelyek csökkentik ügyfeleink energiaköltségeit, növelik energiafüggetlenségüket, és kiszámíthatóbbá teszik működésüket.",
  "A tervezéstől és az engedélyeztetéstől kezdve a finanszírozáson és pályázati ügyintézésen át egészen a kivitelezésig, a távfelügyeletig és a szervizig végigkísérjük ügyfeleinket a teljes folyamaton.",
];

const FOUNDING = [
  "Az A1 Solar 2019 decemberében két családi vállalkozás, a Szorgos Vill Kft. és a Blyxa Consulting Kft. szakmai együttműködéséből jött létre.",
  "A Szorgos Vill már az A1 Solar megalapítása előtt jelentős tapasztalatot szerzett napelemes rendszerek kivitelezésében, a Blyxa Consulting pedig energetikai pályázatok előkészítésével és kezelésével segítette a beruházások megvalósítását. A két szakterület összekapcsolásával olyan vállalatot hoztunk létre, ahol ügyfeleink egy helyen kaphatják meg a beruházás valamennyi fontos elemét: a műszaki tervezést, az engedélyeztetést, a pályázati támogatást, az ügyintézést és a teljes kivitelezést.",
  "A családias vállalkozásból néhány év alatt országosan működő energetikai vállalattá fejlődtünk. Növekedésünk ellenére továbbra is fontos számunkra a személyes felelősségvállalás, a közvetlen ügyfélkapcsolat és az, hogy minden rendszer mögött valódi szakmai támogatás álljon.",
];

const MORE_THAN_SOLAR = [
  "Az energetikai piac gyorsan változik. Ma már nem elegendő kizárólag a villamosenergia-termelésben gondolkodni: a fogyasztás, az energiatárolás, az intelligens vezérlés, a tartalékenergia és a finanszírozás együtt határozza meg egy beruházás valódi értékét.",
  "Ezért megoldásainkat mindig az ügyfél fogyasztási szokásaihoz, műszaki adottságaihoz és hosszú távú céljaihoz igazítjuk.",
];

const SERVICES = [
  "Lakossági és vállalati napelemes rendszerek",
  "Lakossági és ipari energiatárolók",
  "Rendszertervezés és műszaki tanácsadás",
  "Engedélyeztetés és teljes körű ügyintézés",
  "Pályázati előminősítés és pályázatkezelés",
  "Finanszírozási konstrukciók kialakítása",
  "Telepítés és üzembe helyezés",
  "Távfelügyelet és rendszerdiagnosztika",
  "Karbantartás, tisztítás és szerviz",
  "Komplex épületenergetikai fejlesztések",
];

const EXPERIENCE = [
  "Az elmúlt években családi házak, kereskedelmi ingatlanok, termelővállalatok, mezőgazdasági üzemek, intézmények és nagy energiafogyasztású ipari telephelyek energetikai beruházásain dolgoztunk.",
  "Referenciáink között több tíz kilowattos rendszerek mellett több száz kilowattos, illetve megawattos méretű vállalati naperőművek is megtalálhatók. Jelenlegi legnagyobb projektünk egy 7 MWh-s tároló kapacitású erőmű.",
];

const INTERNATIONAL = [
  "Az A1 Solar tevékenysége mára Magyarország határain túlra is kiterjed. Több tucatnyi kivitelezést végeztünk el Ausztriában, valamint az A1 Solar Zanzibar 2024 óta nyújt napelemes, energiatárolási, karbantartási és projekttervezési szolgáltatásokat lakossági, kereskedelmi és ipari ügyfelek számára Afrikában.",
  "Nemzetközi munkánk során az európai mérnöki tudást a helyi éghajlati, infrastrukturális és fogyasztási sajátosságokhoz igazítjuk. Célunk, hogy olyan területeken is stabil és fenntartható energiaellátást biztosítsunk, ahol a hálózati kimaradások és az infrastruktúra korlátai mindennapos kihívást jelentenek.",
];

const COUNTRIES = ["Tanzánia", "Zambia", "Kenya", "Dél-Szudán"];

const REASONS: { num: string; title: string; text: string }[] = [
  { num: "I.", title: "5000+ telepített rendszer", text: "Több, mint 5000 telepített napelemes rendszer." },
  { num: "II.", title: "Országos lefedettség", text: "Szakértőink Magyarország egész területén elérhetők." },
  { num: "III.", title: "Teljes körű szolgáltatás", text: "Tervezés, pályázat, finanszírozás, kivitelezés és szerviz." },
  { num: "IV.", title: "Lakosságtól az ipari méretig", text: "Komplex napelemes és energiatárolási rendszerek." },
  { num: "V.", title: "Megbízható szakmai háttér", text: "Tapasztalt mérnöki, kivitelezői és ügyintézői csapat egy helyen." },
];

const REVIEWS: { text: string; name: string }[] = [
  { text: "Kiváló csapat, gyors és hatékony kivitelezés. Ajánlott!", name: "László Péter" },
  { text: "Tökéletesen meg vagyok elégedve, köszönöm!", name: "Tamás Martinka" },
  { text: "Délvidék legjobb napelemes csapata, köszönöm a szakszerű, precíz munkát.", name: "László Balogh" },
  { text: "Gyorsan, szakszerűen zajlott a kivitelezés. Köszönöm!", name: "Pál Holi" },
  { text: "A szolgáltatással meg vagyok elégedve!", name: "János Winger" },
];

const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

const SectionTitle = ({ children }: { children: string }) => (
  <h2 className="text-[var(--ink)]" style={{ margin: "22px 0 0", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}>
    {children}
  </h2>
);

const Body = ({ children }: { children: ReactNode }) => (
  <p className="text-[var(--ink-soft)]" style={{ margin: 0, fontSize: "16px", lineHeight: 1.75 }}>
    {children}
  </p>
);

/** Dashed row separator between the stacked main-column sections. */
const RowDivider = () => <hr style={{ border: 0, borderTop: "1px dashed #ececec", margin: "48px 0" }} />;

/** In-column section wrapper with a scroll anchor. */
const Block = ({ id, children }: { id: string; children: ReactNode }) => (
  <div id={id} style={{ scrollMarginTop: "100px" }}>
    {children}
  </div>
);

const StarRow = () => (
  <div className="flex gap-0.5" aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f5a623">
        <path d="M12 17.3l-6.16 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.48 4.73 1.64 7.03z" />
      </svg>
    ))}
  </div>
);

const HeroCopy = () => (
  <>
    <span
      className="inline-block rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[1px] text-white"
      style={{ background: "rgba(255,255,255,0.2)" }}
    >
      Cégünkről
    </span>
    <h1 style={{ marginTop: "20px", color: "#fff", fontSize: "clamp(26px, 2.9vw, 34px)", fontWeight: 300, lineHeight: 1.2 }}>
      A jövőre
      <br />
      <strong style={{ fontWeight: 700 }}>Optimalizálva</strong>
    </h1>
  </>
);

/**
 * "Cégünkről" page — same structure as the service subpages: a full-width notch
 * (video) hero, a dashed divider, then a main column of stacked sections with a
 * sticky sidebar (in-page nav + customer-service widget).
 */
export const Cegunkrol = () => (
  <div className="pb-6 md:pb-8">
    <section className="w-full">
      <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
        <defs>
          <clipPath id={HERO_CLIP_ID} clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.00069735, 0.00175131)"
              d="M1403 0C1420.12 0 1434 13.8792 1434 31V394C1434 410.569 1420.57 424 1404 424H1305C1248.5 424 1240 424 1223 441.5C1205.915 459.088 1184.421 495.166 1168.441 521.988C1159.471 537.045 1152.239 549.186 1148.5 553.5C1138.1 565.5 1118.5 570.167 1110 571H30C13.4315 571 0 557.569 0 541V31C0 13.8792 13.8792 0 31 0H1403Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Desktop (≥lg) — shaped video hero, same band size as the homepage hero. */}
      <div className="container hidden lg:block">
        <div className="relative w-full" style={{ aspectRatio: "1192 / 571" }}>
          <div className="absolute inset-0" style={{ clipPath: `url(#${HERO_CLIP_ID})` }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={HERO_POSTER}
              aria-hidden
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 100%" }}
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
            <div className="absolute inset-0" style={{ background: GRADIENT }} />
          </div>
          <div className="absolute bottom-0 left-0 z-10" style={{ padding: "40px" }}>
            <HeroCopy />
          </div>
        </div>
      </div>

      {/* Mobile (<lg) — rounded video card */}
      <div className="lg:hidden px-4">
        <div className="relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[24px] p-6">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
            className="absolute inset-0"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: GRADIENT }} />
          <div className="relative z-10">
            <HeroCopy />
          </div>
        </div>
      </div>
    </section>

    <HeroDivider />

    <SidebarLayout
      sidebar={
        <>
          <ServiceTocNav items={CEG_TOC} />
          <SupportWidget />
        </>
      }
    >
      {/* Bemutatkozás — copy + award photo */}
      <Block id="bemutatkozas">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <Eyebrow>Cégünkről</Eyebrow>
            <SectionTitle>A jövő energiáját építjük</SectionTitle>
            <div className="mt-6 flex flex-col gap-5">
              {STORY_LEAD.map((p) => (
                <Body key={p.slice(0, 24)}>{p}</Body>
              ))}
            </div>
          </div>
          <div className="order-first aspect-[4/3] overflow-hidden rounded-[24px] lg:order-none lg:aspect-auto" style={{ background: "var(--surface-3)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={AWARD_IMAGE}
              alt="Az A1 Solar az Üzleti Etikai Díj 2025 díjátadóján"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </Block>

      <RowDivider />

      <Block id="tortenet">
        <Eyebrow>Történetünk</Eyebrow>
        <SectionTitle>Így indult az A1 Solar</SectionTitle>
        <div className="mt-6 flex flex-col gap-5">
          {FOUNDING.map((p) => (
            <Body key={p.slice(0, 24)}>{p}</Body>
          ))}
        </div>
      </Block>

      <RowDivider />

      <Block id="szolgaltatasok">
        <Eyebrow>Több mint napelem</Eyebrow>
        <SectionTitle>Teljes energetikai partner</SectionTitle>
        <div className="mt-6 flex flex-col gap-5">
          {MORE_THAN_SOLAR.map((p) => (
            <Body key={p.slice(0, 24)}>{p}</Body>
          ))}
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <li key={s} className="flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "1px" }}>
                <circle cx="12" cy="12" r="12" fill="var(--brand)" />
                <path d="M7 12.5l3 3 7-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.5 }}>{s}</span>
            </li>
          ))}
        </ul>
      </Block>

      <RowDivider />

      <Block id="referenciak">
        <Eyebrow>Referenciáink</Eyebrow>
        <SectionTitle>Lakossági és vállalati tapasztalat</SectionTitle>
        <div className="mt-6 flex flex-col gap-5">
          {EXPERIENCE.map((p) => (
            <Body key={p.slice(0, 24)}>{p}</Body>
          ))}
        </div>
      </Block>

      <RowDivider />

      <Block id="nemzetkozi">
        <Eyebrow>Nemzetközi projektek</Eyebrow>
        <SectionTitle>Magyar szakértelem nemzetközi környezetben</SectionTitle>
        <div className="mt-6 flex flex-col gap-5">
          {INTERNATIONAL.map((p) => (
            <Body key={p.slice(0, 24)}>{p}</Body>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {COUNTRIES.map((c) => (
            <span key={c} className="rounded-full px-4 py-2 text-sm font-medium text-[var(--ink)]" style={{ background: "var(--surface-3)" }}>
              {c}
            </span>
          ))}
        </div>
      </Block>

      <RowDivider />

      <Block id="miert-erdemes">
        <Eyebrow>Miért éri meg?</Eyebrow>
        <SectionTitle>5 ok, amiért érdemes az A1 Solart választani</SectionTitle>
        <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
          Az energiatároló rendszerek a napelemes beruházások hatékonyságát és megtérülését jelentősen növelik.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          {REASONS.map((r) => (
            <div key={r.num} className="flex items-start gap-5 rounded-[20px] px-6 py-6" style={{ background: "var(--surface-3)" }}>
              <span
                className="flex flex-none items-center justify-center"
                style={{ width: "48px", height: "48px", borderRadius: "9999px", background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)", fontSize: "17px", fontWeight: 700 }}
              >
                {r.num}
              </span>
              <div className="min-w-0">
                <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>{r.title}</h3>
                <p className="mt-2 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      <RowDivider />

      <Block id="elsok-voltunk">
        <Eyebrow>Mindig az élen</Eyebrow>
        <SectionTitle>Több jelentős eseménynél is elsők voltunk</SectionTitle>
        <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.75 }}>
          Magyarország első Fox ESS G-MAX energiatároló rendszerének telepítése az A1 Solar közreműködésével valósult
          meg. A beüzemelést olyan szakemberünk végezte, aki sikeresen elvégezte a Fox ESS hivatalos képzését, így a
          kivitelezés mindenben megfelel a gyártói előírásoknak, miközben a garancia teljes mértékben megmarad.
        </p>
        <div className="relative mt-6 aspect-video overflow-hidden rounded-[20px]" style={{ background: "#000", border: "1px solid var(--line)" }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${FIRSTS_VIDEO}?rel=0`}
            title="Az első Fox ESS G-Max Magyarországon"
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </Block>

      <RowDivider />

      <Block id="velemenyek">
        <Eyebrow>Vélemények</Eyebrow>
        <SectionTitle>Ügyfeleink néhány visszajelzése</SectionTitle>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {REVIEWS.map((r) => (
            <div key={r.name} className="flex flex-col rounded-[20px] p-6" style={{ background: "var(--surface-3)" }}>
              <StarRow />
              <p className="mt-3 flex-1 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>„{r.text}"</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm font-semibold text-[var(--ink)]">{r.name}</span>
                <span className="text-xs text-[var(--ink-muted)]">· Google</span>
              </div>
            </div>
          ))}
        </div>
      </Block>

      <RowDivider />

      <div className="rounded-[28px] px-8 py-12 text-center md:px-12 md:py-14" style={{ background: "var(--brand)" }}>
        <span className="inline-block rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[1px]" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>
          Küldetésünk
        </span>
        <p className="mx-auto mt-6 max-w-[620px]" style={{ color: "#fff", fontSize: "clamp(18px, 2.2vw, 22px)", fontWeight: 500, lineHeight: 1.5 }}>
          Korszerű, biztonságos és személyre szabott energetikai megoldásokkal segítjük ügyfeleinket az
          energiafüggetlenség, a költséghatékonyabb működés és egy fenntarthatóbb jövő elérésében.
        </p>
        <p className="mt-5" style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
          A jövőre optimalizálva.
        </p>
      </div>
    </SidebarLayout>
  </div>
);
