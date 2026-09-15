"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const ZoomIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="m20 20-3.4-3.4M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/**
 * Reference gallery — a rounded image grid with a gentle hover (slow zoom + a
 * soft overlay and a zoom badge, no jump) that opens a full-screen lightbox.
 * The lightbox is keyboard-navigable (Esc / ← / →), locks background scroll and
 * respects reduced-motion.
 */
export function ReferenceGallery({ images, animated = true }: { images: string[]; animated?: boolean }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % images.length)), [images.length]);

  // Self-reveal so the gallery works outside the ServicePage animation harness
  // (e.g. on the landing): fade tiles in on scroll and images on decode.
  const gridRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;

    if (!animated) return undefined;

    grid.querySelectorAll<HTMLImageElement>("img[data-fade]").forEach((img) => {
      if (img.complete && img.naturalWidth > 0) img.classList.add("loaded");
    });
    const tiles = Array.from(grid.querySelectorAll<HTMLElement>("[data-animate]"));
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduce || !("IntersectionObserver" in window)) {
      tiles.forEach((t) => t.classList.add("in"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    tiles.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [animated]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, prev, next]);

  return (
    <>
      <div ref={gridRef} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            data-animate={animated ? "up" : undefined}
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            className="ref-tile"
            aria-label="Referencia megnyitása"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              data-fade={animated ? true : undefined}
              src={src}
              alt="A1 Solar telepített napelemes rendszer"
              onLoad={(e) => e.currentTarget.classList.add("loaded")}
              className="ref-img object-cover object-center"
              style={{ height: "100%", width: "100%" }}
            />
            <span className="ref-overlay" aria-hidden />
            <span className="ref-zoom" aria-hidden>
              <ZoomIcon />
            </span>
          </button>
        ))}
      </div>

      {open ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Referencia galéria" onClick={close}>
          <button className="lightbox-close" type="button" onClick={close} aria-label="Bezárás">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Előző kép"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="m15 5-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="lightbox-img" src={images[index]} alt="A1 Solar referencia" />
          </figure>
          <button
            className="lightbox-nav lightbox-next"
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Következő kép"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="lightbox-count">
            {index + 1} / {images.length}
          </div>
        </div>
      ) : null}
    </>
  );
}
