import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, Wrench } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { NotchHero } from "@/components/page/NotchHero";
import { HeroDivider, SidebarLayout } from "@/components/service/SidebarLayout";
import { SupportWidget } from "@/components/service/SupportWidget";
import { SITE } from "@/lib/site";

type ContactCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

/** A single contact detail card shown in a row above the form. */
const ContactCard = ({ icon: Icon, label, value, href }: ContactCardProps) => (
  <div className="flex flex-col items-start gap-3 rounded-[20px] p-6" style={{ background: "var(--surface-3)" }}>
    <span
      className="flex h-12 w-12 flex-none items-center justify-center rounded-full"
      style={{ background: "rgba(219,3,48,0.10)" }}
      aria-hidden
    >
      <Icon size={22} strokeWidth={1.9} style={{ color: "var(--brand)" }} />
    </span>
    <div className="text-xs uppercase tracking-[1px] text-[var(--ink-muted)]">{label}</div>
    {href ? (
      <a
        href={href}
        className="font-medium text-[var(--ink)] transition-colors hover:text-[var(--brand)]"
        style={{ whiteSpace: "nowrap" }}
      >
        {value}
      </a>
    ) : (
      <div className="font-medium text-[var(--ink)]" style={{ whiteSpace: "nowrap" }}>
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
      intro="Írj nekünk egy üzenetet az űrlapunkon, és kollégánk 24 órán belül felveszi veled a kapcsolatot."
    />

    <HeroDivider />

    <SidebarLayout sidebar={<SupportWidget />}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <ContactCard icon={Mail} label="E-mail" value={SITE.email} href={`mailto:${SITE.email}`} />
        <ContactCard icon={Wrench} label="Szerviz" value="szerviz@a1solar.hu" href="mailto:szerviz@a1solar.hu" />
        <ContactCard icon={MapPin} label="Cím" value={SITE.address} />
      </div>
      <div className="mt-6">
        <ContactForm
          bare
          formName="Kapcsolati űrlap"
          heading="Írj nekünk üzenetet!"
          intro="Kollégánk 24 órán belül felveszi veled a kapcsolatot."
          submitLabel="Üzenet küldése"
        />
      </div>
    </SidebarLayout>
  </div>
);
