import { ContactForm } from "@/components/ContactForm";
import { NotchHero } from "@/components/page/NotchHero";
import { HeroDivider, SidebarLayout } from "@/components/service/SidebarLayout";
import { SupportWidget } from "@/components/service/SupportWidget";
import { SITE } from "@/lib/site";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="m4 7.5 8 5.5 8-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
/** Contact details + service card shown in the sidebar. */
const ContactDetails = () => (
  <div className="rounded-[20px] p-6" style={{ background: "var(--surface-3)" }}>
    <div className="text-[13px] font-semibold uppercase tracking-[1px] text-[var(--ink-muted)]">Elérhetőségek</div>
    <ul className="mt-5 flex flex-col gap-5">
      <ContactItem icon={<MailIcon />} label="E-mail" value={SITE.email} href={`mailto:${SITE.email}`} />
      <ContactItem icon={<PinIcon />} label="Cím" value={SITE.address} />
      <ContactItem
        icon={<ClockIcon />}
        label="Ügyfélszolgálat"
        value={`Hétköznap ${SITE.supportHours} között`}
      />
      <ContactItem icon={<WrenchIcon />} label="Szerviz" value="szerviz@a1solar.hu" href="mailto:szerviz@a1solar.hu" />
    </ul>
  </div>
);

/**
 * Native bespoke "Kapcsolat" marketing page on the sidebar + notch-hero layout:
 * a shaped hero, the {@link ContactForm} in the main column and the contact
 * details + customer-service widget in a sticky sidebar.
 */
export const Kapcsolat = () => (
  <div className="pb-6 md:pb-8">
    <NotchHero
      eyebrow="Kapcsolat"
      titleLight="Vedd fel velünk"
      titleStrong="a kapcsolatot!"
      image="/wp-content/uploads/2023/11/210363746_m_normal_none.jpg"
      imageAlt="A1 Solar ügyfélszolgálat"
      intro="Írj nekünk egy üzenetet az űrlapunkon, és kollégánk maximum 3 munkanapon belül felveszi veled a kapcsolatot."
    />

    <HeroDivider />

    <SidebarLayout
      sidebar={
        <>
          <ContactDetails />
          <SupportWidget />
        </>
      }
    >
      <h2 className="text-[var(--ink)]" style={{ margin: "0 0 24px", fontSize: "30px", fontWeight: 600, lineHeight: 1.2 }}>
        Írj nekünk üzenetet!
      </h2>
      <ContactForm
        bare
        formName="Kapcsolati űrlap"
        heading="Írj nekünk üzenetet!"
        intro="Kollégánk maximum 3 munkanapon belül felveszi veled a kapcsolatot."
      />
    </SidebarLayout>
  </div>
);
