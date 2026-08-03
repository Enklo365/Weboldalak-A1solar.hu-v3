import Link from "next/link";
import {
  FOOTER_COMMERCIAL,
  FOOTER_LEGAL,
  FOOTER_NAV,
  FOOTER_RESIDENTIAL,
  type NavChild,
  SITE,
} from "@/lib/site";

const LOGO = "/wp-content/uploads/2024/11/A1solar-logo.svg";
const BADGES = "/wp-content/uploads/2025/07/a1solar_badgek-1024x127.png";
const YEAR = new Date().getFullYear();

/** Footer link that opens external targets in a new tab. */
const FooterLink = ({ href, label, external }: NavChild) =>
  external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    <Link href={href}>{label}</Link>
  );

const DISCLAIMER =
  "A weboldalon szereplő információk kizárólag általános tájékoztatást szolgálnak, nem minősülnek kötelező érvényű ajánlatnak, műszaki, pénzügyi vagy pályázati tanácsadásnak. A végleges műszaki tartalom, ár, határidő és kivitelezési feltételek minden esetben egyedi felmérés és írásbeli ajánlat alapján kerülnek meghatározásra. A feltüntetett termelési, megtakarítási és megtérülési adatok becslések; a tényleges eredmények a helyszíni adottságoktól, a fogyasztástól, az időjárástól, az energiaáraktól és az aktuális szabályozástól függően eltérhetnek. A pályázatok és finanszírozások elérhetőségéért vagy elnyeréséért az A1 Solar Kft. nem vállal garanciát. A termékképek és műszaki adatok tájékoztató jellegűek, azok változhatnak. Kötelező érvényűnek kizárólag az elfogadott írásbeli ajánlat és szerződés minősül. A személyes adatok kezelése az Adatkezelési Tájékoztató szerint történik. A weboldal tartalmai eltérő jelzés hiányában az A1 Solar Kft. tulajdonát képezik.";

const Facebook = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V11H7.5v3H10v8h3Z" />
  </svg>
);
const YouTube = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M22 8.2a2.6 2.6 0 0 0-1.8-1.8C18.5 6 12 6 12 6s-6.5 0-8.2.4A2.6 2.6 0 0 0 2 8.2 27 27 0 0 0 1.6 12 27 27 0 0 0 2 15.8a2.6 2.6 0 0 0 1.8 1.8C5.5 18 12 18 12 18s6.5 0 8.2-.4a2.6 2.6 0 0 0 1.8-1.8c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8ZM10 15V9l5.2 3L10 15Z" />
  </svg>
);
const LinkedIn = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M6.5 8.5v10H3.4v-10h3.1ZM5 3.4a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM20.6 18.5h-3.1v-5.3c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5.5H11s.1-9 0-10h3.1v1.4c.4-.6 1.1-1.6 2.9-1.6 2.1 0 3.6 1.4 3.6 4.3v5.9Z" />
  </svg>
);
const Instagram = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="7" r="1.2" fill="currentColor" />
  </svg>
);

export const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-shell">
      {/* The hero silhouette, mirrored vertically, clips the footer panel — the
          top-right notch is the hero's card notch flipped. */}
      <svg width="0" height="0" aria-hidden focusable="false" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="footer-shape" clipPathUnits="objectBoundingBox">
            <path
              transform="matrix(0.00069735 0 0 -0.00175131 0 1)"
              d="M1403 0C1420.12 0 1434 13.8792 1434 31V394C1434 410.569 1420.57 424 1404 424H655C598.5 424 590 424 573 441.5C555.915 459.088 534.421 495.166 518.441 521.988C509.471 537.045 502.239 549.186 498.5 553.5C488.1 565.5 468.5 570.167 460 571H30C13.4315 571 0 557.569 0 541V31C0 13.8792 13.8792 0 31 0H1403Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Awards nested into the hero-mirror notch (over the cut-out). */}
      <div className="footer-notch">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BADGES} alt="A1 Solar díjak és elismerések" />
      </div>

      <div className="footer-panel">
      <div className="footer-inner">
      {/* Top: logo + mission */}
      <div className="footer-top">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="footer-logo-img" src={LOGO} alt="A1 Solar" />
          <p className="footer-mission">
            Küldetésünk, hogy fenntartható és személyre szabott energetikai
            megoldásokkal segítsük ügyfeleinket az energiafüggetlenség és a
            zöldebb jövő elérésében.
          </p>
        </div>
      </div>

      {/* Columns */}
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Navigáció</h4>
          <ul>
            {FOOTER_NAV.map((l) => (
              <li key={l.href + l.label}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Lakossági</h4>
          <ul>
            {FOOTER_RESIDENTIAL.map((l) => (
              <li key={l.href + l.label}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Vállalati</h4>
          <ul>
            {FOOTER_COMMERCIAL.map((l) => (
              <li key={l.href + l.label}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Elérhetőségeink</h4>
          <div className="footer-contact-item">
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a>
          </div>
          <div className="footer-contact-item">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <div className="footer-contact-item">{SITE.address}</div>
          <div className="footer-social">
            <a href={SITE.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href={SITE.social.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <YouTube />
            </a>
            <a href={SITE.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
            <a href={SITE.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          {FOOTER_LEGAL.map((l) => (
            <Link key={l.href + l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="footer-copyright-row">
          <span>
            © {YEAR} {SITE.legalName} – Minden jog fenntartva.
          </span>
          <a href="https://webbystep.hu" target="_blank" rel="noopener noreferrer">
            Built by Webbystep
          </a>
        </div>
      </div>
      </div>
      </div>
    </div>

    <div className="container">
      <p className="footer-disclaimer">{DISCLAIMER}</p>
    </div>
  </footer>
);
