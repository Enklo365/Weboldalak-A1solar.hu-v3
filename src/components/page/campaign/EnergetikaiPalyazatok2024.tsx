import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

/** Small brand-tint pill used as a section eyebrow. */
const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

/** Inline brand-red check mark for benefit lists. */
const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="12" fill="var(--brand)" />
    <path
      d="M7 12.5l3 3 7-7"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** A single funding programme card shown in the overview grid. */
type Grant = {
  title: string;
  image: string;
  description: string;
  audience: string;
  support: string;
  targets: string[];
};

const GRANTS: Grant[] = [
  {
    title: "Feldolgozó üzemek komplex támogatása",
    image: "/wp-content/uploads/2024/05/Feldolgozo-uzemek-komplex-tamogatasa.png",
    description:
      "A Magyarország teljes területén megvalósítható támogatás célja az élelmiszeripari, borászati, takarmányipari és mezőgazdasági termékek értéknövelését elősegítő technológiai fejlesztések támogatása.",
    audience: "Élelmiszeripari, borászati, takarmányipari és mezőgazdasági feldolgozóknak.",
    support: "200 millió Ft – 5 milliárd Ft vissza nem térítendő támogatás, 50–70% intenzitással. Napelemes beruházás esetében a támogatás intenzitása akár 70%.",
    targets: [
      "Új eszközök, gépek beszerzése",
      "Új épületek építése, bővítés, korszerűsítés",
      "Zöld beruházások: energiahatékonyság, megújuló energia",
    ],
  },
  {
    title: "Állattartó telepek fejlesztése és megújítása",
    image: "/wp-content/uploads/2024/05/Allattarto-telepek-fejlesztese-es-megujitasa-1.png",
    description:
      "A Magyarország teljes területén megvalósítható pályázat az állattartó telepek fejlesztését és megújítását támogatja, a fejlesztésre 150 milliárd Ft, a megújításra 50 milliárd Ft keretösszeggel.",
    audience: "Állattartó telepet üzemeltető vállalkozásoknak.",
    support: "200 millió Ft – 5 milliárd Ft vissza nem térítendő támogatás, 50–80% intenzitással. Napelemes beruházás esetében a támogatás intenzitása akár 70%.",
    targets: [
      "Állattartáshoz kapcsolódó épületek, építmények építése, fejlesztése, korszerűsítése",
      "Energiahatékonyságot javító és megújuló energiaforrásokat hasznosító technológiák alkalmazása",
      "Új gépek és eszközök, technológiák vásárlása",
    ],
  },
  {
    title: "KKV Technológia Plusz Hitelprogram",
    image: "/wp-content/uploads/2024/05/KKV-Technologia-Plusz-Hitelprogram.png",
    description:
      "A kizárólag Budapesten kívüli helyszínen megvalósítható program célja, hogy támogassa a hazai kis- és középvállalkozásokat a termelékenység és a hozzáadott érték növelésében 0%-os hitel formájában.",
    audience: "Budapesten kívüli helyszínen működő kis- és középvállalkozásoknak.",
    support: "10 millió Ft – 100 millió Ft kamatmentes, 0%-os hitel.",
    targets: [
      "Új tárgyi eszköz beszerzése, legalább az elszámolható költség 50%-ában",
      "Elektromos jármű beszerzése",
      "Immateriális javak, pl. szoftverek beszerzése",
      "Minőség-, környezet- és egyéb irányítási rendszerekkel kapcsolatos beszerzés",
      "Megújuló energiaforrást hasznosító eszközök, pl. napelem az elszámolható költség 30%-áig",
    ],
  },
  {
    title: "Kertészeti és post-harvest fejlesztések támogatása",
    image:
      "/wp-content/uploads/2024/05/Kerteszeti-uveghazakhoz-hutohazakhoz-kapcsolodo-es-post-harvest-fejlesztesek-tamogatasa.png",
    description:
      "A kertészeti üvegházakhoz, hűtőházakhoz kapcsolódó, és post-harvest fejlesztések támogatás célja, hogy segítse a mezőgazdasági termelők és vállalkozások fejlődését, fenntarthatóságát és versenyképességét.",
    audience: "Mezőgazdasági termelőknek és kertészeti vállalkozásoknak.",
    support: "Legfeljebb 5 milliárd Ft vissza nem térítendő támogatás, a költség 50%-a, megújuló energiaforrás alkalmazása esetén akár 70%.",
    targets: [
      "Utókezelési folyamatok fejlesztése",
      "Energiahatékonyság növelése",
      "Megújuló energiaforrások alkalmazása",
      "Kertészeti létesítmények fejlesztése, korszerűsítése, építése",
    ],
  },
];

const SERVICES: string[] = [
  "Pályázatírás és teljes körű pályázatkezelés",
  "Napelemes rendszer tervezése és kivitelezése",
  "Teljes körű projektmenedzsment",
  "Kiterjedt szállítói kapcsolatrendszer",
  "Személyre szabott megoldások",
  "Szakértői tanácsadás",
];

/**
 * "Energetikai pályázatok 2024" pályázati áttekintő landing — bespoke natív
 * újraépítés az A1 Solar design-nyelvén: hero, a 2024-es induló pályázatok
 * kártyás áttekintője, egykapus pályázatírási szolgáltatás és kapcsolatfelvétel.
 */
export const EnergetikaiPalyazatok2024 = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>Pályázatok</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(26px, 2.9vw, 34px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>Induló energetikai pályázatok </span>
          <span style={{ fontWeight: 700 }}>vállalkozásoknak</span>
        </h1>
        <p
          className="mx-auto mt-6 text-[var(--ink-soft)]"
          style={{ maxWidth: "760px", marginTop: "24px", fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.7 }}
        >
          A következő időszakban több pályázat is kiírásra kerül vállalkozások számára, többek között
          energetikai fejlesztésre is! Készüljön fel időben, és biztosítson támogatást vállalkozása
          számára cégünk egykapus rendszere által.
        </p>
        <div className="mt-10">
          <a
            href="#ajanlatkeres"
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

    {/* PÁLYÁZATOK GRID */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Induló pályázatok 2024</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Ne hagyja ki az új pályázati lehetőségeket!
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GRANTS.map((grant) => (
            <div
              key={grant.title}
              className="flex flex-col overflow-hidden"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={grant.image}
                alt={grant.title}
                loading="lazy"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div className="flex flex-1 flex-col px-7 py-7">
                <h3
                  className="text-[var(--ink)]"
                  style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}
                >
                  {grant.title}
                </h3>
                <p className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
                  {grant.description}
                </p>

                <div
                  className="mt-4 px-4 py-3"
                  style={{ background: "rgba(194,29,32,0.06)", borderRadius: "14px" }}
                >
                  <span
                    className="uppercase tracking-[1px] text-[var(--brand-dark)]"
                    style={{ fontSize: "11px", fontWeight: 600 }}
                  >
                    Támogatás
                  </span>
                  <p className="mt-1 text-[var(--ink)]" style={{ margin: 0, fontSize: "14px", lineHeight: 1.55 }}>
                    {grant.support}
                  </p>
                </div>

                <p className="mt-4 text-[var(--ink)]" style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.5 }}>
                  {grant.audience}
                </p>

                <p
                  className="mt-4 uppercase tracking-[1px] text-[var(--ink-muted)]"
                  style={{ margin: "16px 0 0", fontSize: "11px", fontWeight: 600 }}
                >
                  Célterületek
                </p>
                <ul className="mt-2 flex flex-col gap-2" style={{ listStyle: "none", padding: 0, margin: "8px 0 0" }}>
                  {grant.targets.map((target) => (
                    <li key={target} className="flex items-start gap-2">
                      <CheckIcon />
                      <span className="text-[var(--ink-soft)]" style={{ fontSize: "14px", lineHeight: 1.5 }}>
                        {target}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex-1" />
                <div>
                  <Link
                    href="/kapcsolat"
                    style={{
                      display: "inline-block",
                      background: "var(--brand)",
                      color: "#fff",
                      padding: "12px 26px",
                      borderRadius: "9999px",
                      fontWeight: 500,
                    }}
                  >
                    Részletek
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PÁLYÁZATÍRÁSBAN SEGÍTÜNK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-[1fr_1.1fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>Egykapus rendszer</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              Segítünk a pályázatírásban az első lépéstől a kivitelezésig
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Cégünk egykapus rendszere által a teljes folyamatot egy kézben tartjuk: a pályázat
              megírásától és beadásától a napelemes rendszer tervezésén át egészen a kivitelezésig.
              Készüljön fel időben, és biztosítson támogatást vállalkozása számára!
            </p>
          </div>

          <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {SERVICES.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* KAPCSOLAT */}
    <section id="ajanlatkeres" className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Kapcsolatfelvétel</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Munkatársunk 24 órán belül felveszi Önnel a kapcsolatot!
          </h2>
          <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px" }}>
            Vagy hívjon minket most:{" "}
            <a href={`tel:${SITE.phoneRaw}`} style={{ color: "var(--brand)", fontWeight: 700 }}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="mt-10">
          <ContactForm
            bare
            formName="Energetikai pályázatok 2024"
            heading="Melyik pályázat illik hozzád?"
            intro="Töltsd ki az űrlapot, és kollégánk segít kiválasztani és beadni a megfelelő pályázatot."
          />
        </div>
      </div>
    </section>
  </div>
);
