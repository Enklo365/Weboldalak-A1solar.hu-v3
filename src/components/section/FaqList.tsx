"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export type FaqItem = { q: string; a: ReactNode };

/**
 * Animated FAQ accordion. Smooth open/close via the grid-template-rows 0fr→1fr
 * technique (no height measuring), with a chevron (not a plus) that rotates on
 * open. The chevron uses the heading ink colour, not brand red.
 */
export const FaqList = ({ items }: { items: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={f.q} className="rounded-[16px]" style={{ background: "var(--surface-3)" }}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 text-left"
              style={{
                padding: "18px 20px",
                background: "transparent",
                border: 0,
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: 1.4,
                color: "var(--ink)",
              }}
            >
              <span>{f.q}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="flex-none"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", color: "var(--ink)" }}
              >
                <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.3s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div className="faq-list__answer" style={{ margin: 0, padding: "0 20px 18px", fontSize: "15px", lineHeight: 1.7, color: "var(--ink-soft)" }}>
                  {f.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
