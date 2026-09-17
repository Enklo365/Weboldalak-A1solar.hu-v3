"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * OEP hero lead form (matches the live a1solar.hu hero): name + postal code +
 * e-mail + phone, a required consent checkbox and a honeypot. Posts to
 * /api/contact; the postal code is folded into the message field.
 */
export const OepHeroForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") ?? "").trim() !== "") {
      setStatus("ok");
      return;
    }
    if (data.get("consent") !== "on") {
      setError("Kérjük, fogadd el az adatkezelési tájékoztatót.");
      return;
    }

    setStatus("sending");
    setError("");

    const zip = String(data.get("zip") ?? "").trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          formName: "Otthoni Energiatároló Program",
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          message: `Otthoni Energiatároló Program érdeklődés.${zip ? ` Irányítószám: ${zip}.` : ""}`,
          consent: true,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error || "Ismeretlen hiba történt.");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("Hálózati hiba — próbáld újra.");
    }
  };

  if (status === "ok") {
    return (
      <div className="contact-card contact-card--bare contact-success">
        <div className="contact-success__icon">✓</div>
        <h3>Köszönjük megkeresését!</h3>
        <p>Munkatársunk 24 órán belül felveszi Önnel a kapcsolatot.</p>
      </div>
    );
  }

  return (
    <form className="contact-card contact-card--bare" onSubmit={onSubmit}>
      <span
        className="rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
        style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)", alignSelf: "flex-start", width: "fit-content", marginBottom: "12px" }}
      >
        Kapcsolatfelvétel
      </span>
      <h3>Töltse ki az alábbi űrlapot!</h3>
      <p className="contact-intro">
        Munkatársunk 24 órán belül felveszi Önnel a kapcsolatot a megadott elérhetőségei egyikén.
      </p>

      {/* Honeypot — hidden from users; bots that fill it are silently dropped. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />

      <div className="field-row">
        <label className="field">
          <span>Teljes név *</span>
          <input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Teljes név" />
        </label>
        <label className="field">
          <span>Irányítószám *</span>
          <input
            name="zip"
            required
            inputMode="numeric"
            pattern="[0-9]{4}"
            title="Négy számjegyű irányítószám."
            autoComplete="postal-code"
            placeholder="1234"
          />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>E-mail cím *</span>
          <input name="email" type="email" required maxLength={120} autoComplete="email" placeholder="pelda@email.hu" />
        </label>
        <label className="field">
          <span>Telefonszám *</span>
          <input
            name="phone"
            type="tel"
            required
            pattern="[0-9+()\-\s]{6,20}"
            title="Adjon meg egy érvényes telefonszámot."
            autoComplete="tel"
            placeholder="+36 …"
          />
        </label>
      </div>

      <label className="mt-1 flex items-start gap-3 text-sm text-[var(--ink-soft)]">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0" style={{ accentColor: "var(--brand)" }} />
        <span>
          Elfogadom az{" "}
          <Link href="/adatvedelmi-nyilatkozat" className="text-[var(--brand)] underline" target="_blank" rel="noopener noreferrer">
            adatvédelmi nyilatkozatban
          </Link>{" "}
          foglaltakat. *
        </span>
      </label>

      {status === "error" ? <p className="form-error">{error}</p> : null}

      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Küldés…" : "Kapcsolatfelvétel"}
      </button>
    </form>
  );
};
