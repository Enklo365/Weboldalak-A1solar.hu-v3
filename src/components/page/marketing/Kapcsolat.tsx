import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="m4 7.5 8 5.5 8-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
    <path
      d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1L6.6 10.8Z"
      fill="currentColor"
    />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
    <path
      d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
    <path
      d="M14.7 6.3a4 4 0 0 0 5 5l-9 9a2.1 2.1 0 0 1-3-3l9-9a4 4 0 0 0-2-2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
};

const ContactItem = ({ icon, label, value, href }: ContactItemProps) => (
  <li className="flex items-start gap-4">
    <span
      className="grid h-12 w-12 shrink-0 place-items-center rounded-full"
      style={{ background: "var(--surface-3)", color: "var(--brand)" }}
      aria-hidden
    >
      {icon}
    </span>
    <div className="min-w-0">
      <div className="text-xs uppercase tracking-[1px] text-[var(--ink-muted)]">{label}</div>
      {href ? (
        <a
          href={href}
          className="text-lg font-medium text-[var(--ink)] transition-colors hover:text-[var(--brand)]"
          style={{ wordBreak: "break-word" }}
        >
          {value}
        </a>
      ) : (
        <div className="text-lg font-medium text-[var(--ink)]">{value}</div>
      )}
    </div>
  </li>
);

/**
 * Native bespoke "Kapcsolat" marketing page — hero, a two-column layout with
 * brand-styled contact detail cards on the left and the {@link ContactForm} on
 * the right, plus a static address block. On-brand rounded / Inter design.
 */
export const Kapcsolat = () => (
  <>
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-[760px] text-center">
          <span
            className="inline-block rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
            style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)" }}
          >
            Kapcsolat
          </span>
          <h1
            className="text-[var(--ink)]"
            style={{ marginTop: "20px", fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.12 }}
          >
            <span style={{ fontWeight: 300 }}>Vedd fel velünk </span>
            <span style={{ fontWeight: 700 }}>a kapcsolatot!</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-lg text-[var(--ink-soft)]">
            Írj nekünk egy üzenetet az űrlapunkon keresztül és kollégánk maximum 3 munkanapon belül felveszi veled
            a kapcsolatot a megadott elérhetőségeid egyikén.
          </p>
        </div>
      </div>
    </section>

    <section className="w-full pb-16 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2
              className="text-[var(--ink)]"
              style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 600, lineHeight: 1.2 }}
            >
              Keress minket elérhetőségeinken:
            </h2>

            <ul className="mt-8 flex flex-col gap-6">
              <ContactItem icon={<MailIcon />} label="E-mail" value={SITE.email} href={`mailto:${SITE.email}`} />
              <ContactItem
                icon={<PhoneIcon />}
                label="Telefon"
                value={SITE.phoneDisplay}
                href={`tel:${SITE.phoneRaw}`}
              />
              <ContactItem icon={<PinIcon />} label="Cím" value={SITE.address} />
              <ContactItem
                icon={<ClockIcon />}
                label="Ügyfélszolgálat"
                value={`Telefonos ügyfélszolgálatunk minden hétköznap ${SITE.supportHours} között elérhető.`}
              />
            </ul>

            <div
              className="mt-8 flex items-start gap-4 rounded-[20px] p-6"
              style={{ background: "var(--surface-3)" }}
            >
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full"
                style={{ background: "#fff", color: "var(--brand)" }}
                aria-hidden
              >
                <WrenchIcon />
              </span>
              <div className="min-w-0">
                <div className="text-lg font-semibold text-[var(--ink)]">Szerviz</div>
                <div className="mt-1 text-[var(--ink-soft)]">
                  Hibabejelentés:{" "}
                  <a
                    href="mailto:szerviz@a1solar.hu"
                    className="font-medium text-[var(--brand)] transition-opacity hover:opacity-80"
                  >
                    szerviz@a1solar.hu
                  </a>
                </div>
              </div>
            </div>

            <div
              className="mt-8 flex flex-col items-center gap-3 rounded-[24px] px-6 py-12 text-center"
              style={{ background: "var(--surface-3)" }}
            >
              <span
                className="grid h-14 w-14 place-items-center rounded-full"
                style={{ background: "#fff", color: "var(--brand)" }}
                aria-hidden
              >
                <PinIcon />
              </span>
              <div className="text-lg font-semibold text-[var(--ink)]">{SITE.address}</div>
              <div className="text-sm text-[var(--ink-muted)]">A1 Solar iroda — látogatás előzetes egyeztetéssel</div>
            </div>
          </div>

          <div>
            <h2
              className="text-[var(--ink)]"
              style={{ marginBottom: "24px", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 600, lineHeight: 1.2 }}
            >
              Írj nekünk üzenetet!
            </h2>
            <ContactForm
              bare
              formName="Kapcsolati űrlap"
              heading="Írj nekünk üzenetet!"
              intro="Kollégánk maximum 3 munkanapon belül felveszi veled a kapcsolatot."
            />
          </div>
        </div>
      </div>
    </section>
  </>
);
