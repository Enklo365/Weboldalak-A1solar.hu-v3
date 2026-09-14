"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal wrapper: fades + slides its children up the first time they enter
 * the viewport. Respects prefers-reduced-motion (shows instantly, no motion) and
 * degrades to visible when IntersectionObserver is unavailable.
 */
export const Reveal = ({
  children,
  className,
  animated = true,
}: {
  children: ReactNode;
  className?: string;
  /** Disable motion when the content must be visible in server-rendered previews. */
  animated?: boolean;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(!animated);

  useEffect(() => {
    if (!animated) return undefined;

    const el = ref.current;
    if (!el) return undefined;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduce || !("IntersectionObserver" in window)) {
      setShown(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animated]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(20px)",
        transition: "opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), transform 650ms cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};
