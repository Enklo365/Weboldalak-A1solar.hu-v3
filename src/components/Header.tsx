"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LANDING_PATHS, MAIN_NAV, MEGA_MENUS, SITE, type NavEntry } from "@/lib/site";

const LOGO = "/images/brand/a1solar-logo.svg";

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
const ExtLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.6C11.5 3 10.5 4.7 10.5 7v1.5H8.5V12h2v9h3.5v-9h2.5l.4-3.5H14Z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M22.5 8.2a2.7 2.7 0 0 0-1.9-1.9C18.9 5.8 12 5.8 12 5.8s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 8.2 28 28 0 0 0 1 12a28 28 0 0 0 .5 3.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 23 12a28 28 0 0 0-.5-3.8ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.3" cy="6.7" r="1.3" fill="currentColor" />
  </svg>
);

/** Line icons for mega-menu items, selected by name. */
const MegaIcon = ({ name }: { name: string }) => {
  const p = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "panel":
      return (
        <svg {...p}>
          <rect x="3" y="4" width="18" height="12" rx="1" />
          <path d="M3 8h18M3 12h18M9 4v12M15 4v12M12 16v4M8 20h8" />
        </svg>
      );
    case "building":
      return (
        <svg {...p}>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h6" />
        </svg>
      );
    case "battery":
      return (
        <svg {...p}>
          <rect x="3" y="7" width="16" height="10" rx="2" />
          <path d="M21 10v4M12 9l-2 3h3l-2 3" />
        </svg>
      );
    case "care":
      return (
        <svg {...p}>
          <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
          <path d="M18.5 15l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
        </svg>
      );
    case "doc":
      return (
        <svg {...p}>
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M14 3v4h4M10 12h6M10 16h6" />
        </svg>
      );
    case "award":
      return (
        <svg {...p}>
          <circle cx="12" cy="9" r="5" />
          <path d="M9 13l-1 8 4-2 4 2-1-8" />
        </svg>
      );
    case "coins":
      return (
        <svg {...p}>
          <ellipse cx="9" cy="7" rx="6" ry="3" />
          <path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7" />
          <path d="M15 12.5c2.5-.3 6-1.4 6-3.5s-3.5-3.2-6-3.5" />
        </svg>
      );
    case "info":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5M12 8h.01" />
        </svg>
      );
    case "career":
      return (
        <svg {...p}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18" />
        </svg>
      );
    case "article":
      return (
        <svg {...p}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 9h8M8 13h8M8 17h5" />
        </svg>
      );
    case "globe":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...p}>
          <path d="M8 4h8v5a4 4 0 0 1-8 0V4z" />
          <path d="M8 6H5v1a3 3 0 0 0 3 3M16 6h3v1a3 3 0 0 1-3 3M10 14h4M9 20h6M12 14v6" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
};

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
  const [expanded, setExpanded] = useState<string | null>(null);
  const [mega, setMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const activeMega = mega ? MEGA_MENUS[mega] : null;

  // Shrink the sticky nav bar once the page is scrolled past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The floating bottom bar's "Menü" button opens this same drawer.
  useEffect(() => {
    const toggle = () => setOpen((cur) => !cur);
    window.addEventListener("a1:toggle-menu", toggle);
    return () => window.removeEventListener("a1:toggle-menu", toggle);
  }, []);

  // While the drawer is open, lock background scroll and hide the bottom bar.
  useEffect(() => {
    document.body.classList.toggle("drawer-open", open);
    return () => document.body.classList.remove("drawer-open");
  }, [open]);
  const toggle = (label: string) => setExpanded((cur) => (cur === label ? null : label));
  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  const pathname = usePathname();

  // Landing pages: minimal header — logo left, contact info (with icons) right,
  // no navigation, so visitors cannot leave the page.
  if (LANDING_PATHS.has(pathname)) {
    return (
      <>
        <header className="site-header">
        <div className="mainbar">
          <div className="container landing-bar">
            <span className="brand-logo" aria-label="A1 Solar">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO} alt="A1 Solar" />
            </span>
            <div className="landing-contact">
              <div className="topbar-item">
                <span className="topbar-icon">
                  <MailIcon />
                </span>
                <span className="topbar-text">
                  <span className="topbar-label">E-mail cím:</span>
                  <a className="topbar-value" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </span>
              </div>
              <div className="topbar-item">
                <span className="topbar-icon">
                  <PhoneIcon />
                </span>
                <span className="topbar-text">
                  <span className="topbar-label">Telefonszám:</span>
                  <a className="topbar-value" href={`tel:${SITE.phoneRaw}`}>
                    {SITE.phoneDisplay}
                  </a>
                </span>
              </div>
              <div className="topbar-item hide-sm">
                <span className="topbar-icon">
                  <ClockIcon />
                </span>
                <span className="topbar-text">
                  <span className="topbar-label">Telefonos ügyfélszolgálat</span>
                  <span className="topbar-value muted">{SITE.supportHours}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        </header>

        {/* Mobile floating action bar — boosts landing conversion. */}
        <div className="landing-fab" aria-label="Gyors műveletek">
          <a className="landing-fab-call" href={`tel:${SITE.phoneRaw}`}>
            <PhoneIcon />
            <span>Hívás</span>
          </a>
          <a className="landing-fab-cta" href="#ajanlatkeres">
            Kérek ajánlatot
          </a>
        </div>
      </>
    );
  }

  return (
    <header className="site-header">
      {/* Top utility bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-item">
            <span className="topbar-icon">
              <MailIcon />
            </span>
            <span className="topbar-text">
              <span className="topbar-label">E-mail cím:</span>
              <a className="topbar-value" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </span>
          </div>
          <div className="topbar-item hide-sm">
            <span className="topbar-icon">
              <PhoneIcon />
            </span>
            <span className="topbar-text">
              <span className="topbar-label">Telefonszám:</span>
              <a className="topbar-value" href={`tel:${SITE.phoneRaw}`}>
                {SITE.phoneDisplay}
              </a>
            </span>
          </div>
          <div className="topbar-item hide-sm">
            <span className="topbar-icon">
              <ClockIcon />
            </span>
            <span className="topbar-text">
              <span className="topbar-label">Telefonos ügyfélszolgálat</span>
              <span className="topbar-value muted">{SITE.supportHours}</span>
            </span>
          </div>
          <div className="topbar-spacer" />
          <Link className="ft-badge hide-sm" href="/lakossagi-energiatarolo-tamogatas">
            Otthoni Energiatároló Program
          </Link>
          <form className="search-box" action="/tudastar-blog">
            <SearchIcon />
            <input type="search" name="q" placeholder="Keresés..." aria-label="Keresés" />
          </form>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className={`mainbar${scrolled ? " scrolled" : ""}`} onMouseLeave={() => setMega(null)}>
        <div className="container">
          <Link className="brand-logo" href="/" aria-label="A1 Solar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="A1 Solar" />
          </Link>

          <nav className="mainnav" aria-label="Fő menü">
            {MAIN_NAV.map((entry) => {
              const hasMega = Boolean(MEGA_MENUS[entry.label]);
              return (
                <div
                  className={`nav-item${mega === entry.label ? " is-open" : ""}`}
                  key={entry.label}
                  onMouseEnter={() => setMega(hasMega ? entry.label : null)}
                >
                  <NavLink entry={entry} />
                  {!hasMega && entry.children?.length ? (
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
              );
            })}
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
            <svg width="20" height="16" viewBox="0 0 18 14" fill="currentColor" aria-hidden>
              <rect y="0" width="18" height="1.7" rx="1" />
              <rect y="6.15" width="18" height="1.7" rx="1" />
              <rect y="12.3" width="18" height="1.7" rx="1" />
            </svg>
          </button>
        </div>

        {/* Mega-menu panel (desktop) */}
        {activeMega ? (
          <div className="megamenu">
            <div className="container">
              <div className="megamenu-card">
                <Link
                  className="megamenu-feature"
                  href={activeMega.feature.href}
                  onClick={() => setMega(null)}
                  style={{ backgroundImage: `url(${activeMega.feature.image})` }}
                >
                  <span className="megamenu-feature-body">
                    <span className="megamenu-feature-title">{activeMega.feature.title}</span>
                    <span className="megamenu-feature-text">{activeMega.feature.text}</span>
                  </span>
                </Link>

                <div className="megamenu-main">
                  <div className="megamenu-groups">
                    {activeMega.groups.map((g) => (
                      <div className="megamenu-group" key={g.heading}>
                        <span className="megamenu-heading">{g.heading}</span>
                        {g.links.map((l) => {
                          const inner = (
                            <>
                              <span className="megamenu-item-icon">
                                <MegaIcon name={l.icon} />
                              </span>
                              <span className="megamenu-item-body">
                                <span className="megamenu-item-title">{l.label}</span>
                                <span className="megamenu-item-desc">{l.desc}</span>
                              </span>
                            </>
                          );
                          return l.external ? (
                            <a key={l.href} className="megamenu-item" href={l.href} target="_blank" rel="noopener noreferrer" onClick={() => setMega(null)}>
                              {inner}
                            </a>
                          ) : (
                            <Link key={l.href} className="megamenu-item" href={l.href} onClick={() => setMega(null)}>
                              {inner}
                            </Link>
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  <div className="megamenu-footer">
                    <span className="megamenu-footer-text">
                      <strong>{activeMega.footer.title}</strong>
                      {activeMega.footer.text}
                    </span>
                    <Link className="megamenu-footer-cta" href={activeMega.footer.ctaHref} onClick={() => setMega(null)}>
                      {activeMega.footer.ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${open ? " open" : ""}`} onClick={close}>
        <div className="mobile-panel" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-panel-head">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mobile-panel-logo" src={LOGO} alt="A1 Solar" />
            <button className="mobile-close" type="button" aria-label="Menü bezárása" onClick={close}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobil menü">
            {MAIN_NAV.map((entry) => {
              if (entry.external) {
                return (
                  <a key={entry.label} className="mobile-nav-row" href={entry.href} target="_blank" rel="noopener noreferrer">
                    <span>{entry.label}</span>
                    <ExtLinkIcon />
                  </a>
                );
              }
              if (entry.children?.length) {
                const isOpen = expanded === entry.label;
                return (
                  <div key={entry.label} className={`mobile-nav-group${isOpen ? " open" : ""}`}>
                    <button
                      type="button"
                      className="mobile-nav-row"
                      aria-expanded={isOpen}
                      onClick={() => toggle(entry.label)}
                    >
                      <span>{entry.label}</span>
                      <Caret />
                    </button>
                    {isOpen ? (
                      <div className="mobile-sub">
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
                <Link key={entry.label} className="mobile-nav-row" href={entry.href} onClick={close}>
                  <span>{entry.label}</span>
                </Link>
              );
            })}
          </nav>

          <Link className="mobile-cta" href="/kapcsolat" onClick={close}>
            Kérj ajánlatot
          </Link>

          <div className="mobile-quick">
            <a className="mobile-quick-btn" href={`tel:${SITE.phoneRaw}`}>
              <PhoneIcon />
              Hívás
            </a>
            <a className="mobile-quick-btn" href={`mailto:${SITE.email}`}>
              <MailIcon />
              E-mail
            </a>
          </div>

          <div className="mobile-meta">
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a>
            <span className="muted">Ügyfélszolgálat: {SITE.supportHours}</span>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>

          <div className="mobile-social">
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YoutubeIcon />
            </a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
