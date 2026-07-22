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

    const animated = document.querySelectorAll<HTMLElement>("[data-animate]");
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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    // Elements already within (or near) the viewport on load reveal at once;
    // only the ones below the fold wait for the scroll observer. This keeps the
    // visible content from ever being stuck hidden.
    animated.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - 40) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, []);

  return null;
}
