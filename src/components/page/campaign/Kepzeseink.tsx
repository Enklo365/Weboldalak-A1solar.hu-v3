import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

const AUDIENCE: { title: string; items: string[] }[] = [
  {
    title: "Kivitelező csapatod van és…",
    items: [
      "Új üzletág kialakítását tervezed",
      "Felelevenítenéd megkopott tudásodat",
      "Kiegészítenéd jelenlegi tevékenységedet",
    ],
  },
  {
    title: "Villanyszerelő vagy és…",
    items: [
      "Saját csapatod építését tervezed",
      "Karrierváltáson gondolkodsz",
      "Kiegészítő tevékenységet keresel",
    ],
  },
];

const BENEFITS: string[] = [
  "Az elméleti képzés mellett megismered a kivitelezés alapjait, és megtanítunk, hogyan kerüld el a leggyakoribb hibákat és dolgozz biztonságosan.",
  "Az előzetes felmérésen túl a kivitelezés és a szervízelés csínját-bínját is megtanítjuk, az engedélyeztetési eljárás és a jogszabályi háttér mellett.",
  "Nem engedjük el a kezed a tanfolyam elvégzését követően sem – egy csoport keretén belül bármikor felteheted kérdéseidet, melyekre szakértőink válaszolnak.",
];

const INSTRUCTORS: { name: string; role: string; image: string }[] = [
  {
    name: "Farkas Imre",
    role: "Villanyszerelő, napelem telepítő",
    image: "/wp-content/uploads/2022/09/301674412_774282833849823_7493593621653656246_n.png",
  },
  {
    name: "Kovács Csanád",
    role: "Műszaki vezető",
    image: "/wp-content/uploads/2022/09/Kovacs-Csanad-A1.jpeg",
  },
  {
    name: "Kovács Zsombor",
    role: "Műszaki menedzser",
    image: "/wp-content/uploads/2022/09/Kovacs-Zsombor.jpeg",
  },
];

const THEORY: string[] = [
  "Alapfogalmak",
  "Rendszerméretezés, hozamszámítás",
  "Napelemes rendszer elemei",
  "Napelemek felépítése és működése, napelem típusok",
  "Napelemek elhelyezése",
  "Árajánlat kalkulátor használata, támogatási lehetőségek",
  "Tartószerkezetek és tetőfajták",
  "Kiegészítő elemek",
  "Tartószerkezet típusok, számolás",
  "Áramszolgáltatói ügyintézés folyamata",
  "Tűz- és munkavédelem",
];

const PRACTICE: string[] = [
  "Helyszíni felmérés",
  "Stringek méretezése, kialakítása",
  "Tartószerkezet szerelés",
  "Napelemek szerelése",
  "Csatlakozó elemek, villamos dobozok",
  "Kivitelezés ellenőrzése és dokumentálása",
  "Mérőeszközök kezelése",
  "Telepítés lezárása, próbaüzem, átadás-átvétel",
  "Munka- és biztonságvédelem",
  "Monitoring",
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Mik a jelentkezési feltételek?",
    a: "Általános iskolai végzettség. A munkavégzéshez szükséges villanyszerelői képesítés is, amelynek megszerzését jelen képzés nem tartalmazza.",
  },
  {
    q: "Ez OKJ-s tanfolyam?",
    a: "Nem, az OKJ-s képzések már megszűntek.",
  },
  {
    q: "Milyen papírt ad a képzés?",
    a: "Aki sikerrel veszi az akadályokat, tanúsítványt kap, amely igazolja, hogy sikeresen megfelelt a követelményeknek. A tanúsítvány szakképesítést és szakképzettséget nem tanúsít, munkakör betöltésére nem jogosít. Felnőttképzési nyilvántartási szám: B / 2023 / 000525.",
  },
  {
    q: "Mi a képzés pontos helyszíne?",
    a: "Az elméleti képzés helyszíne: 1222 Budapest, Méz utca 11. A gyakorlati képzés helyszíne a telepítések helyszíne. Ez változó, országszerte telepítünk, igyekszünk a hallgató lakhelyéhez legközelebb eső telepítési helyszínt megtalálni.",
  },
];

const STATS: { value: string; label: string }[] = [
  { value: "Közel 2000", label: "elégedett ügyfél" },
  { value: "150+", label: "végzett tanuló" },
  { value: "60+", label: "képzett vállalkozó" },
];

/**
 * A1 Solar „Képzéseink” marketing page — natív, bespoke újraépítés a napelem
 * telepítő tanfolyam tartalmával (hero, célközönség, modulok, oktatók, GY.I.K.).
 */
export const Kepzeseink = () => (
  <>
    <section className="py-16 md:py-24" style={{ background: "var(--surface-3)" }}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
            style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
          >
            Képzéseink
          </span>
          <h1
            style={{
              marginTop: "20px",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              lineHeight: 1.1,
              color: "var(--ink)",
            }}
          >
            <span style={{ fontWeight: 300 }}>Napelem telepítő </span>
            <span style={{ fontWeight: 700 }}>tanfolyam</span>
          </h1>
          <p
            style={{ marginTop: "18px", color: "var(--ink-soft)" }}
            className="text-lg leading-relaxed"
          >
            Gyakorlatorientált szerelő képzés – az elméleti modul után éles
            kivitelezéseken sajátíthatod el a napelem telepítés szakmáját.
          </p>
          <p style={{ marginTop: "10px", color: "var(--ink-muted)" }} className="text-sm">
            Felnőttképzési nyilvántartási szám: B / 2023 / 000525
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#jelentkezes"
              style={{
                background: "var(--brand)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "9999px",
                fontWeight: 500,
              }}
            >
              Jelentkezem a képzésre
            </a>
            <a
              href="tel:+36202779244"
              style={{
                background: "#fff",
                color: "var(--ink)",
                padding: "14px 28px",
                borderRadius: "9999px",
                fontWeight: 500,
                border: "1px solid var(--line)",
              }}
            >
              Vagy hívj minket! (+36) 20 277 9244
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span
              className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
              style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
            >
              Cégünkről
            </span>
            <h2
              style={{
                marginTop: "16px",
                fontWeight: 600,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--ink)",
              }}
            >
              Miért az A1 Solar?
            </h2>
            <p style={{ marginTop: "16px", color: "var(--ink-soft)" }} className="leading-relaxed">
              Elődcégünkkel együtt 2014-től közel 2000 napelemes rendszert
              telepítettünk cégeknek és magánszemélyeknek egyaránt.
            </p>
            <p style={{ marginTop: "14px", color: "var(--ink-soft)" }} className="leading-relaxed">
              A több mint 8 éves tudásunkat és tapasztalatunkat osztjuk meg a
              képzésen résztvevőkkel. Elméleti szakemberek és oktatók helyett
              nálunk gyakorló villamosmérnökök és erősáramú technikus tartja az
              alapozó képzést.
            </p>
            <p style={{ marginTop: "14px", color: "var(--ink-soft)" }} className="leading-relaxed">
              A gyakorlati tudást pedig részben tanműhelyünkben, részben éles
              kivitelezések során sajátíthatod el.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center px-4 py-8 text-center"
                style={{ background: "var(--surface-3)", borderRadius: "24px" }}
              >
                <span style={{ fontWeight: 700, color: "var(--brand)" }} className="text-2xl">
                  {stat.value}
                </span>
                <span style={{ marginTop: "6px", color: "var(--ink-soft)" }} className="text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24" style={{ background: "var(--surface-3)" }}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            style={{
              fontWeight: 600,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--ink)",
            }}
          >
            A képzés neked szól, ha…
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {AUDIENCE.map((group) => (
            <div key={group.title} className="p-8" style={{ background: "#fff", borderRadius: "24px" }}>
              <h3 style={{ fontWeight: 600, color: "var(--ink)" }} className="text-xl">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ color: "var(--ink-soft)" }}>
                    <span style={{ color: "var(--brand)", fontWeight: 700 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            style={{
              fontWeight: 600,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--ink)",
            }}
          >
            Mit nyújt neked a képzés?
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit}
              className="p-8 leading-relaxed"
              style={{ background: "var(--surface-3)", borderRadius: "24px", color: "var(--ink-soft)" }}
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24" style={{ background: "var(--surface-3)" }}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
            style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
          >
            Oktatóink
          </span>
          <h2
            style={{
              marginTop: "16px",
              fontWeight: 600,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--ink)",
            }}
          >
            Tőlük fogsz tanulni
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {INSTRUCTORS.map((person) => (
            <div
              key={person.name}
              className="overflow-hidden text-center"
              style={{ background: "#fff", borderRadius: "24px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={person.image}
                alt={person.name}
                loading="lazy"
                className="w-full"
                style={{ height: "260px", objectFit: "cover" }}
              />
              <div className="p-6">
                <h3 style={{ fontWeight: 600, color: "var(--ink)" }} className="text-lg">
                  {person.name}
                </h3>
                <p style={{ marginTop: "6px", color: "var(--ink-muted)" }} className="text-sm">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            style={{
              fontWeight: 600,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--ink)",
            }}
          >
            Miről fogsz tanulni?
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="p-8" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 style={{ fontWeight: 600, color: "var(--ink)" }} className="text-xl">
              Elméleti modul
            </h3>
            <ul className="mt-6 space-y-3">
              {THEORY.map((item) => (
                <li key={item} className="flex items-start gap-3" style={{ color: "var(--ink-soft)" }}>
                  <span style={{ color: "var(--brand)", fontWeight: 700 }}>–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "24px", color: "var(--ink)" }} className="text-sm font-medium">
              <p>Időtartam: 3 nap</p>
              <p style={{ marginTop: "4px" }}>Helyszín: 1222 Budapest, Méz utca 11.</p>
            </div>
          </div>
          <div className="p-8" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3 style={{ fontWeight: 600, color: "var(--ink)" }} className="text-xl">
              Gyakorlati modul
            </h3>
            <ul className="mt-6 space-y-3">
              {PRACTICE.map((item) => (
                <li key={item} className="flex items-start gap-3" style={{ color: "var(--ink-soft)" }}>
                  <span style={{ color: "var(--brand)", fontWeight: 700 }}>–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "24px", color: "var(--ink)" }} className="text-sm font-medium">
              <p>Időtartam: 3 nap</p>
              <p style={{ marginTop: "4px" }}>
                A telepítések helyszíne változó, országszerte telepítünk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24" style={{ background: "var(--hero-dark)" }}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 style={{ fontWeight: 600, color: "#fff" }} className="text-2xl md:text-3xl">
            A képzés ára
          </h2>
          <p style={{ marginTop: "12px", fontWeight: 700, color: "#fff" }} className="text-4xl md:text-5xl">
            295.000 Ft + ÁFA
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Időtartam", v: "6 nap" },
              { k: "Helyszín", v: "1222 Budapest, Méz utca 11." },
              { k: "Tervezett kezdés", v: "2023. október 2." },
            ].map((row) => (
              <div
                key={row.k}
                className="px-5 py-6"
                style={{ background: "rgba(255,255,255,0.06)", borderRadius: "20px" }}
              >
                <p style={{ color: "rgba(255,255,255,0.6)" }} className="text-xs uppercase tracking-[1px]">
                  {row.k}
                </p>
                <p style={{ marginTop: "8px", color: "#fff", fontWeight: 500 }}>{row.v}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "24px", color: "rgba(255,255,255,0.7)" }} className="text-sm leading-relaxed">
            A képzés minimum 6 fő jelentkezése esetén indul. A fizetés készpénzben
            a helyszínen vagy banki előre utalással történik.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span
              className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
              style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
            >
              GY.I.K.
            </span>
            <h2
              style={{
                marginTop: "16px",
                fontWeight: 600,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--ink)",
              }}
            >
              Gyakori kérdések
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="p-6"
                style={{ background: "var(--surface-3)", borderRadius: "20px" }}
              >
                <summary
                  className="cursor-pointer list-none"
                  style={{ fontWeight: 600, color: "var(--ink)" }}
                >
                  {item.q}
                </summary>
                <p style={{ marginTop: "12px", color: "var(--ink-soft)" }} className="leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="jelentkezes" className="py-16 md:py-24" style={{ background: "var(--surface-3)" }}>
      <div className="container">
        <ContactForm
          bare
          formName="Képzés jelentkezés"
          heading="Érdekel egy képzésünk?"
          intro="Töltsd ki az űrlapot, és kollégánk tájékoztat a részletekről és időpontokról."
        />
        <p style={{ marginTop: "20px", color: "var(--ink-muted)" }} className="text-center text-sm">
          Vagy keress minket: {SITE.email} · {SITE.phoneDisplay}
        </p>
      </div>
    </section>
  </>
);
