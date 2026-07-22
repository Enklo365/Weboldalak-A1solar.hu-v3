"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1L6.6 10.8Z"
      fill="currentColor"
    />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="m4 7.5 8 5.5 8-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const OfferIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M13 3v5h5M8.5 13h7M8.5 16.5h4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArticleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
    <path d="M8 9h8M8 13h8M8 17h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/**
 * Floating mobile bottom bar (≤900px) with a raised centre CTA nesting in a
 * concave notch. Conversion-first: the elevated button is "Ajánlatkérés"; the
 * side slots are call / e-mail / articles / menu. Hides on scroll-down.
 */
export function BottomNav() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) setHidden(false);
      else if (y > lastY + 6) setHidden(true);
      else if (y < lastY - 6) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`bottom-nav${hidden ? " hidden" : ""}`} aria-label="Gyors műveletek">
      <div className="bottom-nav-bar">
        <a className="bottom-nav-item" href={`tel:${SITE.phoneRaw}`}>
          <PhoneIcon />
          Hívás
        </a>
        <a className="bottom-nav-item" href={`mailto:${SITE.email}`}>
          <MailIcon />
          E-mail
        </a>
        <span className="bottom-nav-slot">Ajánlat</span>
        <Link className="bottom-nav-item" href="/tudastar-blog">
          <ArticleIcon />
          Cikkek
        </Link>
        <button
          type="button"
          className="bottom-nav-item"
          onClick={() => window.dispatchEvent(new CustomEvent("a1:toggle-menu"))}
        >
          <MenuIcon />
          Menü
        </button>
      </div>
      <Link className="bottom-nav-cta" href="/kapcsolat" aria-label="Ajánlatkérés">
        <OfferIcon />
      </Link>
    </nav>
  );
}
