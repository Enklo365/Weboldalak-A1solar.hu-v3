import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Bullets } from "@/components/section/SectionKit";
import { Breadcrumbs } from "@/components/v3/Breadcrumbs";
import { EditorialSlot } from "@/components/v3/EditorialSlot";
import { hasV3HeroSupplement, hasV3Supplement, V3HeroSupplement, V3Supplement } from "@/components/v3/V3Supplement";
import { getV3Layout, type CopyItem, type CopyPage } from "@/lib/v3-pages";

const RenderItems = ({ items, compact = false }: { items: CopyItem[]; compact?: boolean }) => (
  <div className={`v3-copy${compact ? " v3-copy--compact" : ""}`}>
    {items.map((item, index) => {
      if (item.kind === "paragraph") return <p key={index}>{item.text}</p>;
      if (item.kind === "subheading") return <h3 key={index}>{item.text}</h3>;
      if (item.kind === "bullets") return <Bullets key={index} items={item.items} />;
      if (item.kind === "editorial") return <EditorialSlot key={index} type={item.mediaType} placement={item.placement} details={item.details} />;
      if (item.kind === "cta") return <Link key={index} className="btn btn-primary" href="/kapcsolat/">{item.label}<ArrowRight size={17} /></Link>;
      if (item.kind === "link") {
        const props = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
        return <a key={index} className="v3-inline-link" href={item.href} {...props}>{item.label}<ArrowRight size={15} /></a>;
      }
      if (item.kind === "linkList") return (
        <div key={index} className="v3-link-list">
          {item.links.map((link) => <a key={link.href} className="v3-inline-link" href={link.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}>{link.label}<ArrowRight size={15} /></a>)}
        </div>
      );
      return <p key={index} className="v3-editor-note">{item.text}</p>;
    })}
  </div>
);

export const CopydeckPage = ({ page }: { page: CopyPage }) => {
  const layout = getV3Layout(page);
  const heroSupplement = hasV3HeroSupplement(page.number);
  const heroSlot = heroSupplement ? undefined : page.intro.find((item) => item.kind === "editorial");
  const heroCopy = page.intro.filter((item) => item !== heroSlot && !(heroSupplement && item.kind === "editorial"));
  const hasSidebar = layout === "service" && page.sections.length >= 5;

  return (
    <article className={`v3-page v3-page--${layout}`}>
      <header className="v3-hero">
        <div className="container">
          <Breadcrumbs value={page.breadcrumb} />
          <div className="v3-hero__grid">
            <div className="v3-hero__copy">
              <span className="v3-kicker">{page.name}</span>
              <h1>{page.h1}</h1>
              <RenderItems items={heroCopy} compact />
            </div>
            <div className="v3-hero__visual">
              {heroSupplement ? <V3HeroSupplement pageNumber={page.number} /> : heroSlot?.kind === "editorial" ? (
                <EditorialSlot type={heroSlot.mediaType} placement={heroSlot.placement} details={heroSlot.details} />
              ) : (
                <div className="v3-hero__monogram" aria-hidden="true">A1</div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className={`container v3-content${hasSidebar ? " v3-content--sidebar" : ""}`}>
        {hasSidebar ? (
          <aside className="v3-toc">
            <span>Az oldalon</span>
            <nav aria-label="Oldalon belüli navigáció">
              {page.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
            </nav>
            <Link className="btn btn-primary" href="/kapcsolat/">Kapcsolat</Link>
          </aside>
        ) : null}

        <div className="v3-sections">
          {page.sections.map((section, index) => {
            const supplemented = hasV3Supplement(page.number, section.id);
            const editorial = supplemented ? undefined : section.items.find((item) => item.kind === "editorial");
            const textItems = section.items.filter((item) => item !== editorial && !(supplemented && item.kind === "editorial"));
            const split = Boolean(editorial) && layout !== "listing";
            return (
              <section key={section.id} id={section.id} className={`v3-section${split ? " v3-section--split" : ""}${index % 2 ? " v3-section--reverse" : ""}`}>
                <div className="v3-section__copy">
                  <span className="v3-section__number">{String(index + 1).padStart(2, "0")}</span>
                  <h2>{section.title}</h2>
                  <RenderItems items={textItems} />
                  <V3Supplement pageNumber={page.number} sectionId={section.id} />
                </div>
                {editorial?.kind === "editorial" ? (
                  <div className="v3-section__visual"><EditorialSlot type={editorial.mediaType} placement={editorial.placement} details={editorial.details} /></div>
                ) : null}
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
};
