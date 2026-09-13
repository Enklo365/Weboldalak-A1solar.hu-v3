import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export type DarkFeatureItem = {
  icon: ReactNode;
  title: string;
  text: string;
};

export type DarkFeatureProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  items?: DarkFeatureItem[];
  children?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  note?: string;
  className?: string;
};

/** Premium graphite feature section with a lead message and compact benefit cards. */
export const DarkFeature = ({
  id,
  eyebrow,
  title,
  intro,
  items = [],
  children,
  ctaLabel,
  ctaHref,
  note,
  className = "",
}: DarkFeatureProps) => (
  <section id={id} className={`dark-feature${className ? ` ${className}` : ""}`}>
    <div className="dark-feature__glow" aria-hidden="true" />
    <div className="dark-feature__lead">
      {eyebrow ? <span className="dark-feature__eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {intro ? <div className="dark-feature__intro">{intro}</div> : null}
      {children ? <div className="dark-feature__body">{children}</div> : null}
      {ctaLabel && ctaHref ? (
        <a className="dark-feature__cta" href={ctaHref}>
          <span>{ctaLabel}</span>
          <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
        </a>
      ) : null}
      {note ? <p className="dark-feature__note">{note}</p> : null}
    </div>

    {items.length ? (
      <div className="dark-feature__grid">
        {items.map((item, index) => (
          <article className="dark-feature__item" key={`${item.title}-${index}`}>
            <div className="dark-feature__icon" aria-hidden="true">
              {item.icon}
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    ) : null}
  </section>
);
