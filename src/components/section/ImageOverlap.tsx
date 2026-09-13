import Image from "next/image";
import type { ReactNode } from "react";

export type ImageOverlapProps = {
  image: string;
  imageAlt: string;
  children: ReactNode;
  /** Side where the text card overlaps the image on wide screens. */
  side?: "left" | "right";
  /** Accent palette inherited by compatible SectionKit content. */
  tone?: "red" | "graphite";
  /** CSS object-position value for focal-point control. */
  imagePosition?: string;
  className?: string;
};

/**
 * Editorial image-and-copy composition with a floating text card. On smaller
 * screens the card stacks below the image while keeping a subtle overlap.
 */
export const ImageOverlap = ({
  image,
  imageAlt,
  children,
  side = "right",
  tone = "red",
  imagePosition = "center",
  className = "",
}: ImageOverlapProps) => (
  <div className={`image-overlap image-overlap--${side} image-overlap--${tone}${className ? ` ${className}` : ""}`}>
    <div className="image-overlap__media">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 75vw"
        style={{ objectFit: "cover", objectPosition: imagePosition }}
      />
    </div>
    <div className="image-overlap__card">{children}</div>
  </div>
);

export type ImageOverlapVariantProps = Omit<ImageOverlapProps, "side" | "tone">;

export const ImageOverlapRightRed = (props: ImageOverlapVariantProps) => (
  <ImageOverlap {...props} side="right" tone="red" />
);

export const ImageOverlapLeftRed = (props: ImageOverlapVariantProps) => (
  <ImageOverlap {...props} side="left" tone="red" />
);

export const ImageOverlapRightGraphite = (props: ImageOverlapVariantProps) => (
  <ImageOverlap {...props} side="right" tone="graphite" />
);

export const ImageOverlapLeftGraphite = (props: ImageOverlapVariantProps) => (
  <ImageOverlap {...props} side="left" tone="graphite" />
);
