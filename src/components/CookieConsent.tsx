"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "a1solar-cookie-consent";

/**
 * GDPR cookie banner mirroring the live a1solar.hu consent modal.
 * Choice is persisted to localStorage; no tracking scripts are loaded here.
 */
export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const choose = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-overlay" role="dialog" aria-modal="true" aria-label="Cookie beállítások">
      <div className="cookie-card">
        <div className="cookie-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/wp-content/uploads/2022/09/A1solar-logo.svg" alt="A1 Solar" />
          <strong>Cookie beállítások</strong>
        </div>
        <p>
          A legjobb élmény biztosítása érdekében olyan technológiákat használunk,
          mint a cookie-k az eszközadatok tárolására és/vagy eléréséhez. Ha
          beleegyezik ezekbe a technológiákba, akkor olyan adatokat dolgozhatunk
          fel ezen az oldalon, mint a böngészési viselkedés vagy az egyedi
          azonosítók.
        </p>
        <div className="cookie-actions">
          <button className="btn btn-primary" type="button" onClick={() => choose("accepted")}>
            Elfogadom
          </button>
          <button className="btn btn-ghost" type="button" onClick={() => choose("declined")}>
            Elutasítom
          </button>
        </div>
        <div className="cookie-links">
          <Link href="/cookie-nyilatkozat">Cookie nyilatkozat</Link>
          <Link href="/adatvedelmi-nyilatkozat">Adatvédelmi nyilatkozat</Link>
        </div>
      </div>
    </div>
  );
};
