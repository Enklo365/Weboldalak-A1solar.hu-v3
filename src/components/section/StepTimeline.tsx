"use client";

import { useEffect, useRef, useState } from "react";

export type Step = { num: string; title: string; text: string };

/**
 * Connected numbered timeline whose vertical line fills with brand colour as the
 * section scrolls through the viewport. Each node flips from grey to brand the
 * moment the fill line actually reaches it — node positions are measured (the
 * steps have unequal heights), so the colour change lines up with the fill.
 */
export const StepTimeline = ({ items }: { items: Step[] }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [fractions, setFractions] = useState<number[]>([]);

  // Measure each node's centre RELATIVE TO THE CONTAINER (offsetTop is unreliable
  // here — every row is position:relative, so it'd be the node's own offset parent).
  // → the track fraction at which the fill line reaches each node.
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const measure = () => {
      const cRect = el.getBoundingClientRect();
      const trackH = cRect.height - 48; // track: top:24 → bottom:24
      if (trackH <= 0) return;
      setFractions(
        nodeRefs.current.map((n) => {
          if (!n) return 0;
          const r = n.getBoundingClientRect();
          const center = r.top - cRect.top + r.height / 2; // node centre from container top
          return (center - 24) / trackH;
        })
      );
    };
    measure();
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items.length]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const activateY = vh * 0.62;
      const p = (activateY - rect.top) / Math.max(rect.height, 1);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const lastIndex = Math.max(items.length - 1, 1);

  return (
    <div ref={ref} className="relative flex flex-col">
      {/* Track + fill (line runs from the first node centre to the last). */}
      <span aria-hidden="true" className="absolute" style={{ left: "23px", top: "24px", bottom: "24px", width: "2px", background: "var(--line)" }}>
        <span
          className="absolute left-0 top-0"
          style={{ width: "2px", height: `${progress * 100}%`, background: "var(--brand)", transition: "height 80ms linear" }}
        />
      </span>

      {items.map((it, i) => {
        const frac = fractions[i] ?? i / lastIndex;
        // Node lights up only once the fill line has actually reached its centre.
        const active = progress >= Math.max(frac, 0.001);
        return (
          <div key={it.title} className="relative flex gap-5" style={{ paddingBottom: i < items.length - 1 ? "32px" : 0 }}>
            <span
              ref={(n) => {
                nodeRefs.current[i] = n;
              }}
              className="relative z-10 flex flex-none items-center justify-center"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "9999px",
                background: active ? "var(--brand)" : "var(--line)",
                color: active ? "#fff" : "var(--ink)",
                fontSize: "17px",
                fontWeight: 700,
                transform: active ? "scale(1.06)" : "scale(1)",
                transition: "background 250ms ease, color 250ms ease, transform 250ms ease",
              }}
            >
              {it.num}
            </span>
            <div className="min-w-0" style={{ paddingTop: "4px" }}>
              <h3 className="text-[var(--ink)]" style={{ margin: 0, fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
                {it.title}
              </h3>
              <p className="mt-2 text-[var(--ink-soft)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                {it.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
