"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MAIN_NAV, SITE } from "@/lib/site";

const Caret = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ExtIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/**
 * Full-screen menu that lives *behind* the page. When it opens (via the
 * `a1:toggle-menu` event from the header burger or the bottom bar), the page
 * scales back into a rounded card, revealing this brand-coloured frame with the
 * navigation on the left — the "the drawer frames the whole page" pattern.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const toggle = () => setOpen((o) => !o);
    window.addEventListener("a1:toggle-menu", toggle);
    return () => window.removeEventListener("a1:toggle-menu", toggle);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };
  const toggleGroup = (label: string) => setExpanded((cur) => (cur === label ? null : label));

  return (
    <div className={`app-menu${open ? " open" : ""}`} aria-hidden={!open}>
      <button className="app-menu-scrim" type="button" aria-label="Menü bezárása" tabIndex={open ? 0 : -1} onClick={close} />
      <div className="app-menu-inner">
        <button className="app-menu-close" type="button" aria-label="Menü bezárása" onClick={close}>
          <CloseIcon />
        </button>

        <nav className="app-menu-nav" aria-label="Menü">
          {MAIN_NAV.map((entry) => {
            if (entry.external) {
              return (
                <a key={entry.label} className="app-menu-row" href={entry.href} target="_blank" rel="noopener noreferrer">
                  <span>{entry.label}</span>
                  <ExtIcon />
                </a>
              );
            }
            if (entry.children?.length) {
              const isOpen = expanded === entry.label;
              return (
                <div key={entry.label} className={`app-menu-group${isOpen ? " open" : ""}`}>
                  <button type="button" className="app-menu-row" aria-expanded={isOpen} onClick={() => toggleGroup(entry.label)}>
                    <span>{entry.label}</span>
                    <Caret />
                  </button>
                  {isOpen ? (
                    <div className="app-menu-sub">
                      {entry.href !== "#" ? (
                        <Link href={entry.href} onClick={close}>
                          Áttekintés
                        </Link>
                      ) : null}
                      {entry.children.map((c) =>
                        c.external ? (
                          <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer">
                            {c.label}
                          </a>
                        ) : (
                          <Link key={c.href} href={c.href} onClick={close}>
                            {c.label}
                          </Link>
                        )
                      )}
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <Link key={entry.label} className="app-menu-row" href={entry.href} onClick={close}>
                <span>{entry.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="app-menu-foot">
          <Link className="app-menu-cta" href="/kapcsolat" onClick={close}>
            Kérj ajánlatot
          </Link>
          <div className="app-menu-contact">
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
