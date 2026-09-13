export type BigStatItem = {
  value: string;
  label: string;
};

export type BigStatsProps = {
  items: BigStatItem[];
  className?: string;
};

/** Restrained graphite statistics band for high-confidence proof points. */
export const BigStats = ({ items, className = "" }: BigStatsProps) => (
  <dl className={`big-stats${className ? ` ${className}` : ""}`}>
    {items.map((item, index) => (
      <div className="big-stats__item" key={`${item.value}-${item.label}-${index}`}>
        <dt>{item.value}</dt>
        <dd>{item.label}</dd>
      </div>
    ))}
  </dl>
);
