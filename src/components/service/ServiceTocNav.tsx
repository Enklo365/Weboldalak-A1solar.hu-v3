"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

/**
 * In-page section navigation for the service subpages. Anchor links scroll to
 * each section (the section eyebrow "badges"); the current section is
 * highlighted via a scroll-spy IntersectionObserver. Background #f6f6f6, no
 * border (per the design rules).
 */
export function ServiceTocNav({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    setActive(id);
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav className="rounded-[20px] p-6" style={{ background: "var(--surface-3)" }} aria-label="Szakaszok">
      <div className="text-[13px] font-semibold uppercase tracking-[1px] text-[var(--ink-muted)]">Navigáció</div>
      <ul className="mt-4 flex flex-col gap-1">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => onClick(e, item.id)}
                aria-current={isActive ? "true" : undefined}
                className="flex items-center gap-3 rounded-[10px] px-3 py-2 text-sm transition-colors"
                style={isActive ? { background: "#fff", color: "var(--brand)", fontWeight: 600 } : { color: "var(--ink-soft)" }}
              >
                <span
                  className="h-1.5 w-1.5 flex-none rounded-full"
                  style={{ background: isActive ? "var(--brand)" : "var(--ink-muted)" }}
                />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
