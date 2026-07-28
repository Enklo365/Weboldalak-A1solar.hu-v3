import { ContactForm } from "@/components/ContactForm";

/** Small brand-tint pill used as a section eyebrow. */
const Eyebrow = ({ children }: { children: string }) => (
  <span
    className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
    style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
  >
    {children}
  </span>
);

/** Inline brand-red check mark for benefit / feature lists. */
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

const ELIGIBILITY: string[] = [
  "1991 előtt használatba vett családi házak",
  "Az ingatlan életvitelszerű használatban van",
  "Az ingatlan állandó lakhely vagy tartózkodási hely",
];

type FinanceItem = { label: string; value: string; note?: string };

const FINANCE: FinanceItem[] = [
  { label: "Saját forrás", value: "1 millió forint" },
  { label: "Vissza nem térítendő támogatás", value: "2,5–3,5 millió forint" },
  { label: "Kedvezményes hitel", value: "2,5–3,5 millió forint", note: "0% kamattal" },
];

const ACTIVITIES: string[] = [
  "Nyílászáró csere",
  "Hőszigetelés és födémszigetelés",
  "Használati melegvíz rendszerek korszerűsítése",
  "Fűtéskorszerűsítés (hőszivattyús fűtési rendszer is)",
];

/**
 * "Otthonfelújítási támogatás 2024" pályázati landing — bespoke natív
 * újraépítés az A1 Solar design-nyelvén: hero, a program bemutatása,
 * jogosultság, finanszírozás, támogatható tevékenységek, hőszivattyús rendszer,
 * okosotthon technológia és kapcsolatfelvételi űrlap.
 */
export const OtthonfelujitasiTamogatas2024 = () => (
  <div className="w-full">
    {/* HERO */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 py-16 text-center md:py-24">
        <Eyebrow>Akár 3,5 milliós támogatás hőszivattyús rendszerre!</Eyebrow>
        <h1
          className="text-[var(--ink)]"
          style={{ marginTop: "28px", fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 1.1 }}
        >
          <span style={{ fontWeight: 300 }}>Otthonfelújítási </span>
          <span style={{ fontWeight: 700 }}>Program 2024</span>
        </h1>
        <p
          className="mx-auto text-[var(--ink-soft)]"
          style={{ marginTop: "24px", maxWidth: "760px", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7 }}
        >
          A támogatás célja magánberuházások ösztönzése és a magyarországi lakóépületek
          energiahatékonyságának javítása kombinált kölcsön és vissza nem térítendő támogatással.
          A program kiemelt célja a 1990. dec. 31. előtt használatba vett lakóházak korszerűsítése,
          ami közel 20 ezer lakás energiahatékony felújítását teszi lehetővé.
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

    {/* KORSZERŰSÍTSD INGATLANOD */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="px-8 py-12 text-center md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <Eyebrow>Korszerűsítsd ingatlanod!</Eyebrow>
          <h2
            className="mx-auto text-[var(--ink)]"
            style={{
              marginTop: "22px",
              maxWidth: "820px",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Akár 6 millió forint kamatmentes kölcsön és vissza nem térítendő támogatás!
          </h2>
        </div>
      </div>
    </section>

    {/* TÁMOGATHATÓ INGATLAN + FINANSZÍROZÁS */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <Eyebrow>Támogatható ingatlan</Eyebrow>
            <ul className="mt-6 flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {ELIGIBILITY.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[var(--ink-soft)]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-8 py-9" style={{ background: "var(--surface-3)", borderRadius: "24px" }}>
            <Eyebrow>Finanszírozás</Eyebrow>
            <dl className="mt-6 flex flex-col" style={{ margin: 0 }}>
              {FINANCE.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 py-3.5"
                  style={{ borderTop: "1px solid var(--line)" }}
                >
                  <dt className="text-[var(--ink-soft)]" style={{ fontSize: "15px" }}>
                    {item.label}
                  </dt>
                  <dd className="text-right" style={{ margin: 0 }}>
                    <span className="text-[var(--ink)]" style={{ fontSize: "16px", fontWeight: 700 }}>
                      {item.value}
                    </span>
                    {item.note ? (
                      <span className="text-[var(--brand)]" style={{ display: "block", fontSize: "13px", fontWeight: 600 }}>
                        {item.note}
                      </span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>

    {/* TÁMOGATÁS MÉRTÉKE */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Támogatás mértéke</Eyebrow>
          <p
            className="mx-auto text-[var(--ink-soft)]"
            style={{ marginTop: "22px", maxWidth: "820px", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7 }}
          >
            A vissza nem térítendő támogatás aránya a korszerűsítendő ingatlan fekvése szerinti járás
            átlagjövedelmének az országos átlagjövedelemhez viszonyításától függően, sávosan kerül
            meghatározásra.
          </p>
        </div>
      </div>
    </section>

    {/* TÁMOGATHATÓ TEVÉKENYSÉGEK */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div className="text-center">
          <Eyebrow>Támogatható tevékenységek</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
          >
            Válaszd az A1 Solar Kft.-t kivitelezőnek!
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACTIVITIES.map((activity) => (
            <div
              key={activity}
              className="flex items-start gap-3 px-6 py-7"
              style={{ background: "var(--surface-3)", borderRadius: "20px" }}
            >
              <CheckIcon />
              <span className="text-[var(--ink)]" style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.5 }}>
                {activity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* HŐSZIVATTYÚS RENDSZER */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="px-8 py-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <Eyebrow>Hőszivattyús rendszer</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
          >
            Fűtésre, hűtésre és használati melegvíz előállítására is!
          </h2>
          <p className="mt-6 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            A hőszivattyú hatékony és energiatakarékos megoldást kínál lakóházak, társasházak,
            valamint kis- és közepes méretű irodaházak és középületek fűtésére, hűtésére és
            használati meleg víz előállítására. Ezek az eszközök magas COP értékkel rendelkeznek,
            amely lehetővé teszi az elfogyasztott elektromos energia többszörösének hőenergiává
            alakítását, ezáltal jelentős költségmegtakarítást és csökkentett szén-dioxid-kibocsátást
            eredményezve.
          </p>
          <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            A hőszivattyúk a fosszilis energiahordozók helyett a környezeti hőforrásokat – mint
            például a levegőt, a talajt vagy a vizet – hasznosítják, így nemcsak költséghatékonyak,
            hanem a fenntarthatósági célokkal is összhangban állnak. Rugalmas konfigurációs
            lehetőségeik révén könnyedén igazodnak az épületek specifikus adottságaihoz, így
            biztosítva egyedi igényeknek megfelelő, energiahatékony megoldásokat.
          </p>
        </div>
      </div>
    </section>

    {/* OKOSOTTHON TECHNOLÓGIA */}
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container)] px-6 pb-16 md:pb-24">
        <div
          className="px-8 py-12 md:px-12 md:py-14"
          style={{ background: "var(--surface-3)", borderRadius: "28px" }}
        >
          <Eyebrow>Okosotthon technológia</Eyebrow>
          <h2
            className="text-[var(--ink)]"
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
          >
            Az energiahatékonyság kulcsa!
          </h2>
          <p className="mt-6 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            Az intelligens vezérlés az okosotthon technológián keresztül valósul meg, ahol a ház
            összes rendszerét — mint a fűtés, hűtés, világítás, biztonsági rendszerek és háztartási
            gépek — egy központi rendszer integrálja és automatizálja. Ez a technológia lehetővé
            teszi a lakók számára, hogy távolról, okostelefon vagy más intelligens eszköz
            segítségével irányítsák és monitorozzák otthonuk funkcióit.
          </p>
          <p className="mt-5 text-[var(--ink-soft)]" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            Az intelligens vezérlés nemcsak hogy növeli az otthoni kényelmet és biztonságot, hanem
            jelentős energiamegtakarítást is eredményezhet azáltal, hogy optimalizálja az
            energiafelhasználást, csökkenti a felesleges pazarlást és adaptálódik a lakók napi
            rutinjához. Ezáltal az intelligens okosotthonok képesek egy magasabb életminőséget és
            hatékonyabb otthoni gazdálkodást kínálni, miközben támogatják a környezettudatos
            életvitelt.
          </p>
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
            style={{ marginTop: "22px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}
          >
            Munkatársunk 24 órán belül felveszi Veled a kapcsolatot!
          </h2>
        </div>

        <div className="mt-10">
          <ContactForm
            bare
            formName="Otthonfelújítási támogatás 2024"
            heading="Kérd ingyenes kalkulációnkat!"
            intro="Töltsd ki az űrlapot, és kollégánk segít a támogatás igénylésében."
          />
        </div>
      </div>
    </section>
  </div>
);
