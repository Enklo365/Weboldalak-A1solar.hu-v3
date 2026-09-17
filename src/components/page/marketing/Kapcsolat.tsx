import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, Phone, Wrench } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { NotchFormHero } from "@/components/page/NotchFormHero";
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
 * Native contact page adapted from the original A1 Solar layout: a shaped photo
 * hero, an overlapping red form and the complete contact-detail set.
 */
export const Kapcsolat = () => (
  <div className="contact-page pb-6 md:pb-8">
    <NotchFormHero
      eyebrow="Kapcsolat"
      titleLight="Vedd fel velünk"
      titleStrong="a kapcsolatot!"
      image="/wp-content/uploads/2025/07/18792.jpg"
      imageAlt="Napelemek mellett dolgozó ügyfél"
      imagePosition="50% 50%"
      ctaLabel="Üzenetet írok"
      ctaHref="#kapcsolati-urlap"
      intro="Írj nekünk egy üzenetet az űrlapunkon keresztül, és kollégánk legfeljebb 3 munkanapon belül felveszi veled a kapcsolatot a megadott elérhetőségeid egyikén."
      guaranteesTitle="Keress minket elérhetőségeinken:"
      guarantees={[
        SITE.email,
        SITE.phoneDisplay,
        SITE.address,
        `Telefonos ügyfélszolgálat: hétköznap ${SITE.supportHours}`,
        "Hibabejelentés: szerviz@a1solar.hu",
      ]}
      badges="/images/brand/a1solar-badges.svg"
      formId="kapcsolati-urlap"
      form={(
        <div className="contact-page-form">
          <ContactForm
            bare
            detailed
            formName="Kapcsolati űrlap"
            heading="Írj nekünk üzenetet!"
            intro="Mondd el röviden, miben segíthetünk."
            submitLabel="Üzenet küldése"
          />
        </div>
      )}
    />
    <section className="container contact-page-details" aria-label="Elérhetőségeink">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ContactCard icon={Phone} label="Telefon" value={SITE.phoneDisplay} href={`tel:${SITE.phone}`} />
        <ContactCard icon={Mail} label="E-mail" value={SITE.email} href={`mailto:${SITE.email}`} />
        <ContactCard icon={Wrench} label="Szerviz" value="szerviz@a1solar.hu" href="mailto:szerviz@a1solar.hu" />
        <ContactCard icon={MapPin} label="Cím" value={SITE.address} />
      </div>
    </section>
  </div>
);
