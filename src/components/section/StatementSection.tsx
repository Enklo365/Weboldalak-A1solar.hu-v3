import type { ReactNode } from "react";

export type StatementSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  tone?: "plain" | "soft";
  className?: string;
};

/** Spacious editorial statement for text-led sections without card chrome. */
export const StatementSection = ({
  id,
  eyebrow,
  title,
  children,
  tone = "plain",
  className = "",
}: StatementSectionProps) => (
  <section
    id={id}
    className={`statement-section statement-section--${tone}${className ? ` ${className}` : ""}`}
  >
    <div className="statement-section__rail" aria-hidden="true" />
    <div className="statement-section__inner">
      {eyebrow ? <span className="statement-section__eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      <div className="statement-section__body">{children}</div>
    </div>
  </section>
);
