import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

const BADGES = "/images/brand/a1solar-badges.svg";

export type FeatureTileItem = {
  icon: ReactNode;
  eyebrow?: string;
  title: string;
  text?: ReactNode;
  href?: string;
  linkLabel?: string;
  external?: boolean;
};

export type FeatureTilesProps = {
  items: FeatureTileItem[];
  /** Equal cards or an editorial grid with a dominant first card. */
  layout?: "equal" | "mosaic";
  /** Brand-red or neutral graphite emphasis. */
  tone?: "red" | "graphite";
  className?: string;
};

/** Responsive feature-card system for benefits, services and key messages. */
export const FeatureTiles = ({
  items,
  layout = "equal",
  tone = "red",
  className = "",
}: FeatureTilesProps) => (
  <div
    className={`feature-tiles feature-tiles--${layout} feature-tiles--${tone} feature-tiles--count-${items.length}${className ? ` ${className}` : ""}`}
  >
    {items.map((item, index) => (
      <article className="feature-tiles__item" key={`${item.title}-${index}`}>
        <div className="feature-tiles__icon" aria-hidden="true">
          {item.icon}
        </div>
        <div className="feature-tiles__content">
          {item.eyebrow ? <span className="feature-tiles__eyebrow">{item.eyebrow}</span> : null}
          <h3>{item.title}</h3>
          {item.text ? <div className="feature-tiles__text">{item.text}</div> : null}
        </div>
        {item.href ? (
          <a
            className="feature-tiles__link"
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            <span>{item.linkLabel ?? "Részletek"}</span>
            <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </a>
        ) : null}
      </article>
    ))}
    {layout === "mosaic" && items.length >= 5 && items.length % 4 !== 0 ? (
      <aside className="feature-tiles__badges" aria-label="A1 Solar díjak és minősítések">
        <Image src={BADGES} alt="A1 Solar díjak és minősítések" width={1024} height={127} sizes="(max-width: 1024px) 50vw, 40vw" unoptimized />
      </aside>
    ) : null}
  </div>
);

export type FeatureTilesVariantProps = Omit<FeatureTilesProps, "layout" | "tone">;

export const FeatureTilesEqualRed = (props: FeatureTilesVariantProps) => (
  <FeatureTiles {...props} layout="equal" tone="red" />
);

export const FeatureTilesEqualGraphite = (props: FeatureTilesVariantProps) => (
  <FeatureTiles {...props} layout="equal" tone="graphite" />
);

export const FeatureTilesMosaicRed = (props: FeatureTilesVariantProps) => (
  <FeatureTiles {...props} layout="mosaic" tone="red" />
);

export const FeatureTilesMosaicGraphite = (props: FeatureTilesVariantProps) => (
  <FeatureTiles {...props} layout="mosaic" tone="graphite" />
);
