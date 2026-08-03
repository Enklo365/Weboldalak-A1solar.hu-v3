import Link from "next/link";
import { NotchHero } from "@/components/page/NotchHero";
import { KARRIER_BENEFITS, KARRIER_POSITIONS } from "@/components/page/marketing/karrierData";

const HERO_IMAGE = "/wp-content/uploads/2023/11/210363746_m_normal_none.jpg";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden>
    <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

/**
 * Native "Karrier" page — notch hero (intro seated in the notch), a "why join
 * us" icon-card grid, and the open positions as one-per-row cards linking to
 * each position's own /karrier/<slug> subpage.
 */
export const Karrier = () => (
  <>
    <NotchHero
      eyebrow="Karrier"
      titleLight="Csatlakozz"
      titleStrong="Csapatunkhoz!"
      image={HERO_IMAGE}
      imageAlt="Az A1 Solar szerelő csapata munka közben"
      intro="Csatlakozz szerelői vagy irodai csapatunkhoz, és építs velünk stabil, hosszú távú karriert! Versenyképes jövedelmet, támogató munkakörnyezetet és fejlődési lehetőséget kínálunk. Dolgozzunk együtt egy fenntarthatóbb, zöldebb jövőért! Tekintsd meg nyitott pozícióinkat, és küldd el jelentkezésed!"
      ctaLabel="Nyitott pozíciók"
      ctaHref="#poziciok"
    />

    {/* Dashed divider between the hero and the main content */}
    <div className="container">
      <hr className="my-12 md:my-16" style={{ border: 0, borderTop: "1px dashed #ececec" }} />
    </div>

    {/* Positions (main) + "why join us" sidebar widget */}
    <section id="poziciok" className="w-full pb-0" style={{ scrollMarginTop: "var(--header-h)" }}>
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-0">
          {/* Main — open positions, one card per row */}
          <div className="lg:pr-10">
            <span
              className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
              style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
            >
              Nyitott pozíciók
            </span>
            <h2 className="text-[var(--ink)]" style={{ marginTop: "16px", fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}>
              Melyik nyitott pozíciónk érdekel?
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]">Kattints egy pozícióra a részletekért és a jelentkezéshez.</p>

            <div className="mt-8 flex flex-col gap-4">
              {KARRIER_POSITIONS.map((position) => (
                <Link
                  key={position.slug}
                  href={`/karrier/${position.slug}`}
                  className="group flex items-center justify-between gap-6 rounded-[20px] p-6 transition-colors md:p-8"
                  style={{ background: "var(--surface-3)" }}
                >
                  <div className="min-w-0">
                    <h3 className="text-[var(--ink)]" style={{ fontSize: "clamp(19px, 2.4vw, 24px)", fontWeight: 600, lineHeight: 1.25 }}>
                      {position.title}
                    </h3>
                    <p className="mt-2 text-[var(--ink-soft)]">{position.teaser}</p>
                    <div className="mt-3 flex items-center gap-2 text-sm text-[var(--ink-muted)]">
                      <span style={{ color: "var(--brand)" }} aria-hidden>
                        <PinIcon />
                      </span>
                      <span className="truncate">{position.location}</span>
                    </div>
                  </div>
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full transition-colors group-hover:bg-[var(--brand)] group-hover:text-white"
                    style={{ background: "#fff", color: "var(--brand)" }}
                    aria-hidden
                  >
                    <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar — "why join us" widget */}
          <aside className="lg:border-l lg:border-dashed lg:border-[#ececec] lg:pl-10">
            <div className="lg:sticky lg:top-[110px]">
              <div className="rounded-[20px] p-5" style={{ background: "var(--surface-3)" }}>
                <h2 className="text-[var(--ink)]" style={{ fontSize: "18px", fontWeight: 500, lineHeight: 1.25 }}>
                  Miért érdemes csatlakozni hozzánk?
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {KARRIER_BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.4 }}>
                      <span
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-full"
                        style={{ background: "var(--brand)", color: "#fff" }}
                        aria-hidden
                      >
                        <CheckIcon />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </>
);
