import Image from "next/image";
import type { ReactNode } from "react";

export type ImageOverlapProps = {
  image: string;
  imageAlt: string;
  video?: string;
  children: ReactNode;
  /** Optional overflow copy rendered in a full-width box below the image. */
  continuation?: ReactNode;
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
  video,
  children,
  continuation,
  side = "right",
  tone = "red",
  imagePosition = "center",
  className = "",
}: ImageOverlapProps) => (
  <div className={`image-overlap image-overlap--${side} image-overlap--${tone}${className ? ` ${className}` : ""}`}>
    <div className="image-overlap__media">
      {video ? (
        <video src={video} poster={image} controls playsInline preload="metadata" aria-label={imageAlt} />
      ) : (
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 75vw"
          style={{ objectFit: "cover", objectPosition: imagePosition }}
        />
      )}
    </div>
    <div className="image-overlap__card">{children}</div>
    {continuation ? <div className="image-overlap__continuation">{continuation}</div> : null}
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

const floatingClassName = (className = "") => `image-overlap--floating${className ? ` ${className}` : ""}`;

/** Compact text card entering the image from the right, slightly below its centre line. */
export const ImageOverlapRightFloatingGraphite = ({ className, ...props }: ImageOverlapVariantProps) => (
  <ImageOverlap {...props} className={floatingClassName(className)} side="right" tone="graphite" />
);

/** Compact text card entering the image from the left, slightly below its centre line. */
export const ImageOverlapLeftFloatingGraphite = ({ className, ...props }: ImageOverlapVariantProps) => (
  <ImageOverlap {...props} className={floatingClassName(className)} side="left" tone="graphite" />
);
