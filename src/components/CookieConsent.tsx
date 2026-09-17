"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "a1solar-cookie-consent-v2";

/**
 * GDPR cookie banner mirroring the live a1solar.hu consent modal.
 * Choice is persisted to localStorage; no tracking scripts are loaded here.
 */
export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const choose = (value: "accepted" | "necessary" | "preferences") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-overlay" role="dialog" aria-modal="true" aria-label="Cookie beállítások">
      <div className="cookie-card">
        <div className="cookie-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/brand/a1solar-logo.svg" alt="A1 Solar" />
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
            Mindet elfogadom
          </button>
          <button className="btn btn-ghost" type="button" onClick={() => choose("necessary")}>
            Csak a szükségesek
          </button>
          <button className="btn btn-ghost" type="button" onClick={() => setShowSettings((current) => !current)}>
            Beállítások
          </button>
        </div>
        {showSettings ? (
          <div className="cookie-preferences">
            <label>
              <span>
                <strong>Szükséges cookie-k</strong>
                <small>Az oldal alapvető működéséhez szükségesek.</small>
              </span>
              <input type="checkbox" checked disabled aria-label="Szükséges cookie-k mindig engedélyezve" />
            </label>
            <label>
              <span>
                <strong>Statisztikai cookie-k</strong>
                <small>Segítenek megérteni az oldal használatát.</small>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                aria-label="Statisztikai cookie-k engedélyezése"
              />
            </label>
            <button className="btn btn-primary" type="button" onClick={() => choose(analytics ? "preferences" : "necessary")}>
              Beállítások mentése
            </button>
          </div>
        ) : null}
        <div className="cookie-links">
          <Link href="/cookie-nyilatkozat">Cookie nyilatkozat</Link>
          <Link href="/adatvedelmi-nyilatkozat">Adatvédelmi nyilatkozat</Link>
        </div>
      </div>
    </div>
  );
};
