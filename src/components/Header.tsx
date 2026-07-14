"use client";

import Link from "next/link";
import { useState } from "react";
import { MAIN_NAV, SITE, type NavEntry } from "@/lib/site";

const LOGO = "/wp-content/uploads/2022/09/A1solar-logo.svg";

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1L6.6 10.8Z"
      fill="currentColor"
    />
  </svg>
);
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" />
  </svg>
);
const Caret = () => (
  <svg className="nav-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const NavLink = ({ entry }: { entry: NavEntry }) => {
  if (entry.external) {
    return (
      <a className="nav-link" href={entry.href} target="_blank" rel="noopener noreferrer">
        {entry.label}
      </a>
    );
  }
  if (entry.children?.length) {
    // Parent with a real destination stays clickable; "#" is a pure toggle.
    return entry.href === "#" ? (
      <span className="nav-link">
        {entry.label}
        <Caret />
      </span>
    ) : (
      <Link className="nav-link" href={entry.href}>
        {entry.label}
        <Caret />
      </Link>
    );
  }
  return (
    <Link className="nav-link" href={entry.href}>
      {entry.label}
    </Link>
  );
};

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Top utility bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-item">
            <span className="topbar-icon">
              <PhoneIcon />
            </span>
            <span>
              <span className="topbar-label">Telefonszám:</span>
              <br />
              <a className="topbar-value" href={`tel:${SITE.phoneRaw}`}>
                {SITE.phoneDisplay}
              </a>
            </span>
          </div>
          <div className="topbar-item hide-sm">
            <span className="topbar-icon">
              <ClockIcon />
            </span>
            <span>
              <span className="topbar-label">Telefonos ügyfélszolgálat</span>
              <br />
              <span className="topbar-value muted">{SITE.supportHours}</span>
            </span>
          </div>
          <div className="topbar-item hide-sm">
            <span className="topbar-icon">
              <MailIcon />
            </span>
            <span>
              <span className="topbar-label">E-mail cím:</span>
              <br />
              <a className="topbar-value" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </span>
          </div>
          <div className="topbar-spacer" />
          <Link className="ft-badge hide-sm" href="/ft1000">
            Financial Times - FT 1000
          </Link>
          <form className="search-box" action="/tudastar-blog">
            <SearchIcon />
            <input type="search" name="q" placeholder="Keresés..." aria-label="Keresés" />
          </form>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="mainbar">
        <div className="container">
          <Link className="brand-logo" href="/" aria-label="A1 Solar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="A1 Solar" />
          </Link>

          <nav className="mainnav" aria-label="Fő menü">
            {MAIN_NAV.map((entry) => (
              <div className="nav-item" key={entry.label}>
                <NavLink entry={entry} />
                {entry.children?.length ? (
                  <div className="dropdown">
                    {entry.children.map((c) =>
                      c.external ? (
                        <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer">
                          {c.label}
                        </a>
                      ) : (
                        <Link key={c.href} href={c.href}>
                          {c.label}
                        </Link>
                      )
                    )}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <Link className="btn btn-primary header-cta" href="/kapcsolat">
            Kapcsolat
          </Link>

          <button
            className="burger"
            type="button"
            aria-label="Menü megnyitása"
            onClick={() => setOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${open ? " open" : ""}`} onClick={() => setOpen(false)}>
        <div className="mobile-panel" onClick={(e) => e.stopPropagation()}>
          <button
            className="burger"
            type="button"
            aria-label="Menü bezárása"
            style={{ marginLeft: "auto", marginBottom: 16 }}
            onClick={() => setOpen(false)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          {MAIN_NAV.map((entry) =>
            entry.external ? (
              <a key={entry.label} href={entry.href} target="_blank" rel="noopener noreferrer">
                {entry.label}
              </a>
            ) : (
              <div key={entry.label}>
                <Link href={entry.href} onClick={() => setOpen(false)}>
                  {entry.label}
                </Link>
                {entry.children?.length ? (
                  <div className="sub">
                    {entry.children.map((c) => (
                      <Link key={c.href} href={c.href} onClick={() => setOpen(false)}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            )
          )}
          <Link
            className="btn btn-primary"
            href="/kapcsolat"
            style={{ marginTop: 20, width: "100%" }}
            onClick={() => setOpen(false)}
          >
            Kapcsolat
          </Link>
        </div>
      </div>
    </header>
  );
};
