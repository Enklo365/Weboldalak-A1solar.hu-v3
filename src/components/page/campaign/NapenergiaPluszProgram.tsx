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

/** Inline brand-red check mark for the hero benefit list. */
const CheckIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
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

/** A single spec row inside a package card. */
type PackageSpec = { label: string; value: string };

/** One package tier (Minimum / Optimum / Premium). */
type SolarPackage = {
  name: string;
  tagline: string;
  price: string;
  ownFund: string;
  specs: PackageSpec[];
  featured?: boolean;
};

/** A named group of three package tiers, with an intro line. */
type PackageGroup = { title: string; intro: string; packages: SolarPackage[] };

const PACKAGE_GROUPS: PackageGroup[] = [
  {
    title: "Költséghatékony csomagok",
    intro: "Költséghatékony megoldás, ha az ár számít leginkább.",
    packages: [
      {
        name: "Minimum",
        tagline: "Belépő szintű, kedvező árú alapcsomag.",
        price: "3.858.087 Ft",
        ownFund: "1.311.749 Ft",
        specs: [
          { label: "Inverter", value: "5 kW" },
          { label: "Akkumulátor", value: "10 kWh" },
          { label: "Napelem panel", value: "410 W" },
          { label: "Napelem darabszám", value: "9 db" },
          { label: "Rendszer teljesítmény", value: "3,69 kWp" },
        ],
      },
      {
        name: "Optimum",
        tagline: "Kiegyensúlyozott ár-érték arány.",
        price: "4.126.111 Ft",
        ownFund: "1.402.878 Ft",
        featured: true,
        specs: [
          { label: "Inverter", value: "5 kW" },
          { label: "Akkumulátor", value: "10 kWh" },
          { label: "Napelem panel", value: "410 W" },
          { label: "Napelem darabszám", value: "12 db" },
          { label: "Rendszer teljesítmény", value: "4,92 kWp" },
        ],
      },
      {
        name: "Premium",
        tagline: "A legnagyobb teljesítmény ebben a kategóriában.",
        price: "4.275.654 Ft",
        ownFund: "1.453.722 Ft",
        specs: [
          { label: "Inverter", value: "5 kW" },
          { label: "Akkumulátor", value: "10 kWh" },
          { label: "Napelem panel", value: "410 W" },
          { label: "Napelem darabszám", value: "14 db" },
          { label: "Rendszer teljesítmény", value: "5,74 kWp" },
        ],
      },
    ],
  },
  {
    title: "Legmodernebb technológia",
    intro: "Amennyiben a piacon elérhető legmodernebb technológiát szeretné.",
    packages: [
      {
        name: "Minimum",
        tagline: "Prémium alapcsomag, csúcstechnológiával.",
        price: "5.104.715 Ft",
        ownFund: "1.735.603 Ft",
        specs: [
          { label: "Inverter", value: "4 kW" },
          { label: "Akkumulátor", value: "10 kWh" },
          { label: "Napelem panel", value: "410 W" },
          { label: "Napelem darabszám", value: "9 db" },
          { label: "Rendszer teljesítmény", value: "3,69 kWp" },
        ],
      },
      {
        name: "Optimum",
        tagline: "A legnépszerűbb prémium választás.",
        price: "5.423.367 Ft",
        ownFund: "1.843.945 Ft",
        featured: true,
        specs: [
          { label: "Inverter", value: "5 kW" },
          { label: "Akkumulátor", value: "10 kWh" },
          { label: "Napelem panel", value: "410 W" },
          { label: "Napelem darabszám", value: "12 db" },
          { label: "Rendszer teljesítmény", value: "4,92 kWp" },
        ],
      },
      {
        name: "Premium",
        tagline: "Maximális teljesítmény a legjobb komponensekkel.",
        price: "5.585.990 Ft",
        ownFund: "1.899.237 Ft",
        specs: [
          { label: "Inverter", value: "5 kW" },
          { label: "Akkumulátor", value: "10 kWh" },
          { label: "Napelem panel", value: "410 W" },
          { label: "Napelem darabszám", value: "14 db" },
          { label: "Rendszer teljesítmény", value: "5,74 kWp" },
        ],
      },
    ],
  },
];

const HERO_BENEFITS: string[] = [
  "Teljes pályázati adminisztráció és kivitelezés",
  "Előleg helyett csak a telepítést követően kell fizetnie",
  "10 év tapasztalat, 3000+ telepítés",
];

const STATS: { value: string; label: string }[] = [
  { value: "75 mrd Ft", label: "Pályázati keretösszeg" },
  { value: "15.000", label: "Támogatható háztartás" },
  { value: "66%", label: "Maximális támogatás" },
  { value: "3000+", label: "Elégedett ügyfél" },
];

const PROGRAM_FACTS: string[] = [
  "A támogatási keretösszeg közel 75,8 milliárd forint, ami 15.000 háztartás számára adhat lehetőséget a beruházásra.",
  "A támogatás 4–5 kW-os napelemes rendszerekre és 8–10 kWh-os akkumulátoros tárolórendszerekre igényelhető.",
  "A támogatás akár a rendszer költségeinek 66%-át is fedezheti, de ehhez bizonyos mértékű önerőre is szükség van a projekthez.",
  "A támogatás vissza nem térítendő.",
];

const PARTNER_LOGOS: { src: string; alt: string }[] = [
  { src: "/wp-content/uploads/2022/09/do-media-bisnode-hu.jpeg", alt: "Bisnode minősítés" },
  { src: "/wp-content/uploads/2022/09/mnnsz_logo_betu_fekete-1.png", alt: "MNNSZ tagság" },
  { src: "/wp-content/uploads/2024/02/Deye-vagott-.png", alt: "Deye inverter partner" },
  { src: "/wp-content/uploads/2022/12/sunways-logo-99.png", alt: "Sunways partner" },
];

/**
 * "Napenergia Plusz Program" pályázati landing — bespoke natív újraépítés az
 * A1 Solar design-nyelvén: hero, statisztika-sáv, információk, kedvezményes
 * csomagajánlatok, a pályázat rövid ismertetője és kapcsolatfelvételi űrlap.
 */
export const NapenergiaPluszProgram = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>75 milliárd forint keretösszeg</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(26px, 2.9vw, 34px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>Napenergia Plusz </span>
          <span style={{ fontWeight: 700 }}>Program</span>
        </h1>
        <ul
          className="mx-auto mt-8 flex max-w-[640px] flex-col gap-4 text-left"
          style={{ listStyle: "none", padding: 0, margin: "32px auto 0" }}
        >
          {HERO_BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-[var(--ink)]" style={{ fontSize: "clamp(16px, 2vw, 18px)" }}>
                {benefit}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <a
            href="#kapcsolat"
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

    {/* STATISZTIKA */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-6 py-10 text-center"
              style={{ background: "var(--surface-3)", borderRadius: "24px" }}
            >
              <span
                style={{ color: "var(--brand)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, lineHeight: 1 }}
              >
                {stat.value}
              </span>
              <span className="mt-3 text-[var(--ink-soft)]" style={{ fontSize: "15px" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* INFORMÁCIÓK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Információk</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Előregisztrációja pozitív elbírálást kapott?
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <h3
              className="text-[var(--ink)]"
              style={{ margin: 0, fontSize: "22px", fontWeight: 600, lineHeight: 1.25 }}
            >
              Még nem szerződött le kivitelezővel? Válassza az A1 Solar-t!
            </h3>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Kerülje el a tömeges beadási időszakot, cselekedjen időben! Amennyiben velünk szerződik,
              az adatok birtokában ügyintézését 24 órán belül megkezdjük!
            </p>
            <div className="mt-6">
              <a
                href="#kapcsolat"
                style={{
                  display: "inline-block",
                  background: "var(--brand)",
                  color: "#fff",
                  padding: "12px 26px",
                  borderRadius: "9999px",
                  fontWeight: 500,
                }}
              >
                Jelölje meg kivitelezőjeként az A1 Solar-t!
              </a>
            </div>
          </div>

          <div
            className="px-8 py-9"
            style={{
              background: "rgba(194,29,32,0.06)",
              borderRadius: "24px",
              borderLeft: "4px solid var(--brand)",
            }}
          >
            <span
              className="inline-block rounded-[30px] px-3 py-1 text-xs font-semibold uppercase tracking-[1px]"
              style={{ background: "var(--brand)", color: "#fff" }}
            >
              Fontos
            </span>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Amennyiben a regisztrációs felületen több kivitelezőt is bejelöl, előfordulhat, hogy végül
              nem azzal a céggel fog leszerződni, akivel eredetileg szeretett volna. A kivitelezőváltást
              csak a támogatói okirat megérkezése után tudja módosítani, ami nagyban elhúzza az
              ügyintézési időt.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CSOMAGOK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Csomagok</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Kedvezményes csomagajánlatok!
          </h2>
        </div>

        {PACKAGE_GROUPS.map((group) => (
          <div key={group.title} className="mt-14">
            <h3
              className="text-[var(--ink)]"
              style={{ margin: 0, fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 600 }}
            >
              {group.title}
            </h3>
            <p className="mt-2 text-[var(--ink-muted)]" style={{ fontSize: "16px" }}>
              {group.intro}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.packages.map((pkg) => (
                <div
                  key={`${group.title}-${pkg.name}`}
                  className="flex flex-col px-7 py-8"
                  style={{
                    background: "var(--surface-3)",
                    borderRadius: "24px",
                    border: Boolean(pkg.featured) ? "2px solid var(--brand)" : "2px solid transparent",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h4
                      className="text-[var(--ink)]"
                      style={{ margin: 0, fontSize: "22px", fontWeight: 700 }}
                    >
                      {pkg.name}
                    </h4>
                    {Boolean(pkg.featured) ? (
                      <span
                        className="rounded-[30px] px-3 py-1 text-xs font-semibold uppercase tracking-[1px]"
                        style={{ background: "var(--brand)", color: "#fff" }}
                      >
                        Ajánlott
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-[var(--ink-muted)]" style={{ fontSize: "14px", lineHeight: 1.5 }}>
                    {pkg.tagline}
                  </p>

                  <dl className="mt-5 flex flex-col" style={{ margin: 0 }}>
                    {pkg.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center justify-between py-2.5"
                        style={{ borderTop: "1px solid var(--line)" }}
                      >
                        <dt className="text-[var(--ink-soft)]" style={{ fontSize: "14px" }}>
                          {spec.label}
                        </dt>
                        <dd className="text-[var(--ink)]" style={{ margin: 0, fontSize: "15px", fontWeight: 600 }}>
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 flex-1">
                    <p className="text-[var(--ink-muted)]" style={{ margin: 0, fontSize: "13px" }}>
                      Bruttó csomagár
                    </p>
                    <p
                      className="text-[var(--ink)]"
                      style={{ margin: 0, marginTop: "2px", fontSize: "24px", fontWeight: 700 }}
                    >
                      {pkg.price}
                    </p>
                    <p className="mt-3 text-[var(--ink-muted)]" style={{ margin: "12px 0 0", fontSize: "13px" }}>
                      Bruttó önerő
                    </p>
                    <p style={{ margin: 0, marginTop: "2px", fontSize: "20px", fontWeight: 700, color: "var(--brand)" }}>
                      {pkg.ownFund}
                    </p>
                  </div>

                  <div className="mt-6">
                    <a
                      href="#kapcsolat"
                      style={{
                        display: "inline-block",
                        background: "var(--brand)",
                        color: "#fff",
                        padding: "12px 26px",
                        borderRadius: "9999px",
                        fontWeight: 500,
                      }}
                    >
                      Érdekel a csomag
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* A PÁLYÁZATRÓL RÖVIDEN */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-[1fr_1.1fr] md:gap-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <div>
            <Eyebrow>Regisztráció</Eyebrow>
            <h2
              className="text-[var(--ink)]"
              style={{ marginTop: "22px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              Még nem regisztrált a Napenergia Plusz Programra? Nem késő!
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Segítünk a teljes regisztrációs és pályázati folyamatban, hogy minél előbb benyújthassa
              támogatási kérelmét! A pályázatról röviden:
            </p>
          </div>

          <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {PROGRAM_FACTS.map((fact) => (
              <li key={fact} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                  {fact}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* PARTNEREK / TANÚSÍTVÁNYOK */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {PARTNER_LOGOS.map((logo) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              style={{ height: "48px", width: "auto", objectFit: "contain", opacity: 0.85 }}
            />
          ))}
        </div>
      </div>
    </section>

    {/* KAPCSOLAT */}
    <section id="kapcsolat" className="w-full">
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
            formName="Napenergia Plusz Program"
            heading="Jelölje meg kivitelezőjeként az A1 Solar-t!"
            intro="Adja meg elérhetőségeit, és munkatársunk 24 órán belül felveszi Önnel a kapcsolatot."
          />
        </div>
      </div>
    </section>
  </div>
);
