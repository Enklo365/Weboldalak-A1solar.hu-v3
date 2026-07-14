import Link from "next/link";
import {
  FOOTER_LEGAL,
  FOOTER_NAV,
  FOOTER_SERVICES,
  FOOTER_USEFUL,
  SITE,
} from "@/lib/site";

const LOGO = "/wp-content/uploads/2022/09/A1solar-logo.svg";
const YEAR = 2025;

const Facebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V11H7.5v3H10v8h3Z" />
  </svg>
);
const YouTube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M22 8.2a2.6 2.6 0 0 0-1.8-1.8C18.5 6 12 6 12 6s-6.5 0-8.2.4A2.6 2.6 0 0 0 2 8.2 27 27 0 0 0 1.6 12 27 27 0 0 0 2 15.8a2.6 2.6 0 0 0 1.8 1.8C5.5 18 12 18 12 18s6.5 0 8.2-.4a2.6 2.6 0 0 0 1.8-1.8c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8ZM10 15V9l5.2 3L10 15Z" />
  </svg>
);
const LinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M6.5 8.5v10H3.4v-10h3.1ZM5 3.4a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM20.6 18.5h-3.1v-5.3c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5.5H11s.1-9 0-10h3.1v1.4c.4-.6 1.1-1.6 2.9-1.6 2.1 0 3.6 1.4 3.6 4.3v5.9Z" />
  </svg>
);
const Instagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="7" r="1.2" fill="currentColor" />
  </svg>
);

export const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="footer-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="A1 Solar" />
          </div>
          <p style={{ color: "#9aa2ab", fontSize: 14.5, maxWidth: 320 }}>
            Több mint tíz év tapasztalattal Magyarország egyik vezető
            energetikai vállalata — napelem, energiatárolás és finanszírozás egy
            helyről.
          </p>
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

        <div className="footer-col">
          <h4>Navigáció</h4>
          <ul>
            {FOOTER_NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Szolgáltatásaink</h4>
          <ul>
            {FOOTER_SERVICES.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <h4 style={{ marginTop: 24 }}>Hasznos linkek</h4>
          <ul>
            {FOOTER_USEFUL.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Elérhetőségeink</h4>
          <div className="footer-contact-item">
            <span>📞</span>
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a>
          </div>
          <div className="footer-contact-item">
            <span>✉️</span>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <div className="footer-contact-item">
            <span>📍</span>
            <span>{SITE.address}</span>
          </div>
          <div className="footer-contact-item">
            <span>🕐</span>
            <span>Ügyfélszolgálat: {SITE.supportHours}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <span>
          © {YEAR} {SITE.legalName}. Minden jog fenntartva.
        </span>
        <div className="footer-legal">
          {FOOTER_LEGAL.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
