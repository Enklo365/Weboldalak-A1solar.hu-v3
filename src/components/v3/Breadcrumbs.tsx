import Link from "next/link";

export const Breadcrumbs = ({ value }: { value: string }) => {
  const labels = value.split("→").map((part) => part.trim()).filter(Boolean);
  return (
    <nav className="v3-breadcrumbs" aria-label="Morzsamenü">
      <Link href="/">Főoldal</Link>
      {labels.map((label, index) => (
        <span key={`${label}-${index}`} className="v3-breadcrumbs__part">
          <span aria-hidden="true">/</span>
          <span aria-current={index === labels.length - 1 ? "page" : undefined}>{label}</span>
        </span>
      ))}
    </nav>
  );
};
