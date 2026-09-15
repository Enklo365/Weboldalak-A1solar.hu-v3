import Image from "next/image";

export type BrandBadgesProps = {
  className?: string;
};

/** Official A1 Solar awards and certifications, kept as one responsive strip. */
export const BrandBadges = ({ className = "" }: BrandBadgesProps) => (
  <div className={`brand-badges${className ? ` ${className}` : ""}`}>
    <Image
      src="/images/brand/a1solar-badges.svg"
      alt="A1 Solar díjak és szakmai minősítések"
      width={997}
      height={124}
      sizes="(max-width: 768px) 92vw, 997px"
      unoptimized
    />
  </div>
);
