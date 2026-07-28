import Link from "next/link";
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

/** Aktuális pályázat-kártyák — a mirror képeiből, hiteles, tényszerű leírással. */
type Grant = { image: string; title: string; text: string; href: string; cta: string };

const GRANTS: Grant[] = [
  {
    image: "/wp-content/uploads/2025/06/jedlik-anyos-energetikai-program-2-1-1024x667.png",
    title: "Jedlik Ányos Energetikai Program",
    text: "Energetikai korszerűsítést és megújuló energia telepítését támogató program. Segítünk kiválasztani a hozzád illő konstrukciót, és végigvisszük helyetted a teljes pályázati folyamatot.",
    href: "/jedlik-anyos-energetikai-program",
    cta: "Részletek",
  },
  {
    image: "/wp-content/uploads/2025/05/ginop-plusz-1-4-5-25-1-1024x667.png",
    title: "GINOP Plusz energiahatékonyság",
    text: "Vállalati energiahatékonysági fejlesztéseket ösztönző európai uniós forrás. Felmérjük a jogosultságodat, és összeállítjuk a nyertes pályázathoz szükséges dokumentációt.",
    href: "/kapcsolat",
    cta: "Részletek",
  },
  {
    image: "/wp-content/uploads/2024/11/otthonfelujitasi-tamogatas-1.png",
    title: "Otthonfelújítási támogatás",
    text: "Lakossági korszerűsítést segítő állami támogatás, amely napelemes és energiahatékonysági beruházásokra is fordítható. Megmutatjuk, hogyan használható ki a maximum.",
    href: "/kapcsolat",
    cta: "Részletek",
  },
  {
    image: "/wp-content/uploads/2024/04/shutterstock_1783886117-1024x683.jpg",
    title: "Vállalati napelem pályázatok",
    text: "Cégek számára elérhető, napelemes rendszerek telepítését támogató források. Segítünk a megtérülés kalkulálásában és a pályázati anyag teljes körű elkészítésében.",
    href: "/vallalati-napelem",
    cta: "Részletek",
  },
  {
    image: "/wp-content/uploads/2024/04/bocipanel-1024x683.jpg",
    title: "Lakossági energiatárolás támogatás",
    text: "Otthoni energiatárolók telepítését ösztönző program, amellyel a megtermelt zöld energiád még hatékonyabban hasznosítható. Végigkísérünk az igényléstől a kivitelezésig.",
    href: "/lakossagi-energiatarolo-tamogatas",
    cta: "Részletek",
  },
  {
    image: "/wp-content/uploads/2023/06/image001-1-1024x575.jpg",
    title: "Vállalati energiatárolás",
    text: "Ipari és üzleti méretű energiatároló beruházásokat támogató lehetőségek. Megvizsgáljuk az elérhető forrásokat, és személyre szabott megoldást tervezünk a céged igényeire.",
    href: "/vallalati-energiatarolas",
    cta: "Részletek",
  },
];

/**
 * "Pályázatok" marketing oldal — bespoke natív újraépítés az A1 Solar
 * design-nyelvén: hero, aktuális pályázat-kártyák, értékesítő kártya és záró CTA.
 */
export const Palyazatok = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>Pályázatok</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>Aktuális </span>
          <span style={{ fontWeight: 700 }}>pályázatok!</span>
        </h1>
        <p
          className="mx-auto mt-6 max-w-[720px] text-[var(--ink-soft)]"
          style={{ fontSize: "clamp(16px, 2vw, 19px)" }}
        >
          Segítünk megtalálni a hozzád illő pályázati forrást, és levesszük a válladról a papírmunkát:
          a jogosultság felmérésétől a teljes pályázatírásig végigkísérünk, hogy a támogatásból tényleg
          a beruházásod profitáljon.
        </p>
      </div>
    </section>

    {/* PÁLYÁZAT-KÁRTYÁK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GRANTS.map((g) => (
            <div
              key={g.title}
              className="flex flex-col overflow-hidden"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <div className="aspect-[16/10] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="flex flex-1 flex-col px-7 py-7">
                <h3
                  className="text-[var(--ink)]"
                  style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.25 }}
                >
                  {g.title}
                </h3>
                <p
                  className="mt-3 flex-1 text-[var(--ink-soft)]"
                  style={{ fontSize: "15px", lineHeight: 1.65 }}
                >
                  {g.text}
                </p>
                <div className="mt-6">
                  <Link
                    href={g.href}
                    style={{
                      display: "inline-block",
                      background: "var(--brand)",
                      color: "#fff",
                      padding: "12px 26px",
                      borderRadius: "9999px",
                      fontWeight: 500,
                    }}
                  >
                    {g.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* KÉRDÉSED MARADT? — ÉRTÉKESÍTŐ */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 items-center gap-8 overflow-hidden md:grid-cols-[auto_1fr] md:gap-12"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div className="flex justify-center px-8 pt-10 md:px-12 md:py-12">
            <div
              className="overflow-hidden"
              style={{ width: "220px", height: "220px", borderRadius: "9999px", background: "#fff" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/wp-content/uploads/2025/08/Harasztosi_Szabolcs.png"
                alt="Harasztosi Szabolcs — Értékesítési vezető"
                loading="lazy"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="px-8 pb-10 md:py-12 md:pl-0 md:pr-12">
            <Eyebrow>Kérdésed maradt?</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
            >
              Beszéljünk a lehetőségeidről!
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
              Értékesítő kollégánk hétköznap 10:00–15:00 között elérhető – fordulj hozzá bizalommal!
            </p>
            <div className="mt-6">
              <p className="text-[var(--ink)]" style={{ margin: 0, fontSize: "19px", fontWeight: 600 }}>
                Harasztosi Szabolcs
              </p>
              <p className="text-[var(--ink-muted)]" style={{ margin: 0, marginTop: "2px", fontSize: "15px" }}>
                Értékesítési vezető
              </p>
              <a
                href="tel:06203345849"
                className="mt-4 inline-block"
                style={{ color: "var(--brand)", fontWeight: 700, fontSize: "20px" }}
              >
                (+36) 20-334-5849
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ZÁRÓ CTA */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="flex flex-col items-center gap-6 px-8 py-14 text-center md:px-16"
          style={{ background: "var(--brand)", borderRadius: "28px" }}
        >
          <h2 style={{ margin: 0, color: "#fff", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, lineHeight: 1.2 }}>
            Nézzük meg együtt, milyen pályázat illik hozzád!
          </h2>
          <p
            className="max-w-[620px]"
            style={{ margin: 0, color: "rgba(255,255,255,0.9)", fontSize: "17px", lineHeight: 1.6 }}
          >
            Vedd fel velünk a kapcsolatot, és megkeressük a beruházásodhoz leginkább illeszkedő
            támogatási forrást — a pályázatírást pedig bízd ránk.
          </p>
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/kapcsolat"
              style={{
                background: "#fff",
                color: "var(--brand)",
                padding: "14px 32px",
                borderRadius: "9999px",
                fontWeight: 600,
              }}
            >
              Kapcsolatfelvétel
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} style={{ color: "#fff", fontWeight: 600, fontSize: "18px" }}>
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);
