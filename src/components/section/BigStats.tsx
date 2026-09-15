export type BigStatItem = {
  value: string;
  label: string;
};

export type BigStatsProps = {
  className?: string;
};

export const BIG_STATS_ITEMS: BigStatItem[] = [
  { value: "13 év", label: "szakmai tapasztalat" },
  { value: "2019 óta", label: "stabil A1 Solar működés" },
  { value: "5000+", label: "telepített rendszer" },
  { value: "Országos", label: "kivitelezés" },
  { value: "Pénzügyileg", label: "stabil vállalkozás" },
];

/** Restrained graphite statistics band for high-confidence proof points. */
export const BigStats = ({ className = "" }: BigStatsProps) => (
  <dl className={`big-stats big-stats--5${className ? ` ${className}` : ""}`}>
    {BIG_STATS_ITEMS.map((item, index) => (
      <div className="big-stats__item" key={`${item.value}-${item.label}-${index}`}>
        <dt>{item.value}</dt>
        <dd>{item.label}</dd>
      </div>
    ))}
  </dl>
);
