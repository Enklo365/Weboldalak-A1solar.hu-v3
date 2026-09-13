import Image from "next/image";
import type { ReactNode } from "react";

export type FramedHeroMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
  position?: string;
};

export type FramedHeroProps = {
  children: ReactNode;
  className?: string;
  media: FramedHeroMedia;
  /** Optional content placed in the white lower-right notch on wide screens. */
  notch?: ReactNode;
};

const CLIP_ID = "a1-framed-hero-shape";

/**
 * Primary A1 Solar hero template.
 *
 * It preserves the accepted WordPress-inspired 1434/571 frame, including the
 * rounded corners and lower-right notch. Pages only provide their media and
 * copy; a later hero type can live beside this component without changing it.
 */
export function FramedHero({ children, className = "", media, notch }: FramedHeroProps) {
  const position = media.position ?? "center";

  return (
    <div className={`a1-framed-hero ${className}`}>
      <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
        <defs>
          <clipPath id={CLIP_ID} clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.00069735, 0.00175131)"
              d="M1403 0C1420.12 0 1434 13.8792 1434 31V394C1434 410.569 1420.57 424 1404 424H655C598.5 424 590 424 573 441.5C555.915 459.088 534.421 495.166 518.441 521.988C509.471 537.045 502.239 549.186 498.5 553.5C488.1 565.5 468.5 570.167 460 571H30C13.4315 571 0 557.569 0 541V31C0 13.8792 13.8792 0 31 0H1403Z"
            />
          </clipPath>
        </defs>
      </svg>

      <div className="a1-framed-hero__media" style={{ clipPath: `url(#${CLIP_ID})` }} aria-hidden="true">
        {media.type === "video" ? (
          <video autoPlay loop muted playsInline preload="metadata" poster={media.poster} style={{ objectPosition: position }}>
            <source src={media.src} />
          </video>
        ) : (
          <Image src={media.src} alt="" fill priority sizes="(max-width: 1340px) 100vw, 1290px" style={{ objectPosition: position }} />
        )}
        <div className="a1-framed-hero__shade" />
      </div>

      {children}
      {notch ? <div className="a1-framed-hero__notch">{notch}</div> : null}
    </div>
  );
}

/** Accepted framed hero with the A1 Solar award/qualification strip in its notch. */
export function FramedHeroBadges(props: Omit<FramedHeroProps, "notch">) {
  return (
    <FramedHero
      {...props}
      notch={<img src="/images/brand/a1solar-badges.svg" alt="A1 Solar szakmai és pénzügyi minősítései" />}
    />
  );
}
