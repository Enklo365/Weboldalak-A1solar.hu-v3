import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { KARRIER_POSITIONS } from "@/components/page/marketing/karrierData";
import { ArticleArchive, FeaturedArticles } from "@/components/v3/ArticleArchive";
import { getPosts, postCard } from "@/lib/content";
import { SITE } from "@/lib/site";

const CareerCards = () => (
  <div className="v3-career-grid">
    {KARRIER_POSITIONS.map((position) => (
      <Link key={position.slug} className="v3-career-card" href={`/karrier/${position.slug}/`}>
        <span>{position.location}</span>
        <strong>{position.title}</strong>
        <p>{position.teaser}</p>
        <span className="v3-inline-link">Részletek és jelentkezés <ArrowRight size={15} /></span>
      </Link>
    ))}
  </div>
);

const ContactDetails = () => (
  <div className="v3-contact-grid">
    <a href={`tel:${SITE.phone}`}><Phone size={21} /><span><small>Telefon</small><strong>{SITE.phoneDisplay}</strong></span></a>
    <a href={`mailto:${SITE.email}`}><Mail size={21} /><span><small>E-mail</small><strong>{SITE.email}</strong></span></a>
    <div><MapPin size={21} /><span><small>Cím</small><strong>{SITE.address}</strong></span></div>
    <div><Clock3 size={21} /><span><small>Nyitvatartás</small><strong>Hétköznap {SITE.supportHours}</strong></span></div>
  </div>
);

const GrantCard = ({ status, title, code, children }: { status: string; title: string; code?: string; children: ReactNode }) => (
  <div className="v3-grant-card">
    <span className="v3-grant-card__status">{status}</span>
    {code ? <small>{code}</small> : null}
    <strong>{title}</strong>
    <p>{children}</p>
    <a href="https://napelemespalyazatok.hu/" target="_blank" rel="noopener noreferrer">Aktuális részletek <ArrowRight size={15} /></a>
  </div>
);

export const V3HeroSupplement = ({ pageNumber }: { pageNumber: number }) => {
  if (pageNumber === 11) return (
    <GrantCard status="Benyújtás jelenleg nem lehetséges" title="Otthoni Energiatároló Program">
      Magánszemélyeknek, energiatárolóra és kapcsolódó tételekre legfeljebb 2,5 millió Ft támogatással. Az első ütem lezárult, a második felfüggesztett. Ellenőrizve: 2026.09.08.
    </GrantCard>
  );
  if (pageNumber === 18) return (
    <div className="v3-grant-stack">
      <GrantCard status="Aktív" code="GINOP Plusz-1.4.5-25" title="Nemzeti Bajnokok">
        0%-os kölcsön, a feltételek szerint akár 45% vissza nem térítendő támogatással kombinálva. Ellenőrizve: 2026.09.08.
      </GrantCard>
      <GrantCard status="Aktív" code="KEHOP Plusz-4.1.6-25" title="Vállalkozások energiahatékonysági hitelkonstrukciója">
        0%-os fix kamatozású hitel, legalább 10% saját forrással, a felhívás műszaki feltételei szerint. Ellenőrizve: 2026.09.08.
      </GrantCard>
    </div>
  );
  return null;
};

export const hasV3HeroSupplement = (pageNumber: number) => pageNumber === 11 || pageNumber === 18;

export const V3Supplement = ({ pageNumber, sectionId }: { pageNumber: number; sectionId: string }) => {
  if (pageNumber === 5 && sectionId === "nyitott-poziciok") return <CareerCards />;
  if (pageNumber === 35 && sectionId === "altalanos-elerhetosegek") return <ContactDetails />;
  if (pageNumber === 34 && sectionId === "kiemelt-cikkek") return <FeaturedArticles posts={getPosts().map(postCard)} />;
  if (pageNumber === 34 && sectionId === "legfrissebb-cikkek") return <ArticleArchive posts={getPosts().map(postCard)} />;
  return null;
};

export const hasV3Supplement = (pageNumber: number, sectionId: string) =>
  (pageNumber === 5 && sectionId === "nyitott-poziciok") ||
  (pageNumber === 35 && sectionId === "altalanos-elerhetosegek") ||
  (pageNumber === 34 && (sectionId === "kiemelt-cikkek" || sectionId === "legfrissebb-cikkek"));
