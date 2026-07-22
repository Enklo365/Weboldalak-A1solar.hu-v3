"use client";

import { useEffect } from "react";

/**
 * Progressive micro-interactions, all opt-in via data attributes so the markup
 * stays declarative:
 *  - `[data-animate="up"]`   fade + rise into view on scroll
 *  - `[data-animate="line"]` draw a divider in (scaleX) on scroll
 *  - `img[data-fade]`        fade in once the image has decoded
 *
 * Honours `prefers-reduced-motion`: everything is shown immediately, no motion.
 */
export function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll<HTMLImageElement>("img[data-fade]").forEach((img) => {
      if (reduce || img.complete) {
        img.classList.add("loaded");
        return;
      }
      const done = () => img.classList.add("loaded");
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });

    const animated = document.querySelectorAll("[data-animate]");
    if (reduce) {
      animated.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    animated.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
