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

type ContactCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
};

/** A single contact detail card shown in a row above the form. */
const ContactCard = ({ icon, label, value, href }: ContactCardProps) => (
  <div className="flex flex-col items-start gap-3 rounded-[20px] p-6" style={{ background: "var(--surface-3)" }}>
    <span className="grid h-12 w-12 flex-none place-items-center rounded-full" style={{ background: "#fff", color: "var(--brand)" }} aria-hidden>
      {icon}
    </span>
    <div className="text-xs uppercase tracking-[1px] text-[var(--ink-muted)]">{label}</div>
    {href ? (
      <a
        href={href}
        className="font-medium text-[var(--ink)] transition-colors hover:text-[var(--brand)]"
        style={{ wordBreak: "break-word" }}
      >
        {value}
      </a>
    ) : (
      <div className="font-medium text-[var(--ink)]" style={{ wordBreak: "break-word" }}>
        {value}
      </div>
    )}
  </div>
);

/**
 * Native bespoke "Kapcsolat" marketing page on the sidebar + notch-hero layout:
 * a shaped hero, three contact-detail cards + the {@link ContactForm} in the
 * main column and the customer-service widget in a sticky sidebar.
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

    <SidebarLayout sidebar={<SupportWidget />}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <ContactCard icon={<MailIcon />} label="E-mail" value={SITE.email} href={`mailto:${SITE.email}`} />
        <ContactCard icon={<WrenchIcon />} label="Szerviz" value="szerviz@a1solar.hu" href="mailto:szerviz@a1solar.hu" />
        <ContactCard icon={<PinIcon />} label="Cím" value={SITE.address} />
      </div>
      <div className="mt-6">
        <ContactForm
          bare
          formName="Kapcsolati űrlap"
          heading="Írj nekünk üzenetet!"
          intro="Kollégánk maximum 3 munkanapon belül felveszi veled a kapcsolatot."
        />
      </div>
    </SidebarLayout>
  </div>
);
