"use client";

import Link from "next/link";
import { useState } from "react";
import { submitContact } from "@/lib/submitContact";

type ContactFormProps = {
  formName?: string;
  heading?: string;
  intro?: string;
  compact?: boolean;
  /** Borderless, shadowless, full-width variant (used inside service subpages). */
  bare?: boolean;
  /** Submit button label. */
  submitLabel?: string;
};

/**
 * Lead / contact form. Posts to /api/contact (Resend) via {@link submitContact}.
 * Bot-protected (honeypot) with native field validation and a required GDPR
 * consent checkbox. Used on the contact page and injected in place of legacy
 * form shortcodes.
 */
export const ContactForm = ({
  formName = "Kapcsolati űrlap",
  heading = "Kérjen ingyenes ajánlatot",
  intro = "Töltse ki az űrlapot, és munkatársunk 24 órán belül felveszi Önnel a kapcsolatot.",
  bare = false,
  submitLabel = "Ajánlatkérő űrlap küldése",
}: ContactFormProps) => {
  const cardClass = bare ? "contact-card contact-card--bare" : "contact-card";
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots that fill the hidden field are silently accepted-and-dropped.
    if (String(data.get("website") ?? "").trim() !== "") {
      setStatus("ok");
      return;
    }
    if (data.get("consent") !== "on") {
      setError("Kérjük, fogadd el az adatvédelmi nyilatkozatot.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    const res = await submitContact({
      formName,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
    });

    if (res.ok) {
      setStatus("ok");
      form.reset();
    } else {
      setStatus("error");
      setError(res.error);
    }
  };

  if (status === "ok") {
    return (
      <div className={`${cardClass} contact-success`}>
        <div className="contact-success__icon">✓</div>
        <h3>Köszönjük megkeresését!</h3>
        <p>Munkatársunk hamarosan felveszi Önnel a kapcsolatot.</p>
      </div>
    );
  }

  return (
    <form className={cardClass} onSubmit={onSubmit}>
      <h3>{heading}</h3>
      <p className="contact-intro">{intro}</p>

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
          <span>Név *</span>
          <input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Teljes név" />
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
      <label className="field">
        <span>E-mail cím *</span>
        <input name="email" type="email" required maxLength={120} autoComplete="email" placeholder="pelda@email.hu" />
      </label>
      <label className="field">
        <span>Üzenet *</span>
        <textarea name="message" required minLength={5} maxLength={2000} rows={5} placeholder="Miben segíthetünk?" />
      </label>

      <label className="mt-1 flex items-start gap-3 text-sm text-[var(--ink-soft)]">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0" style={{ accentColor: "var(--brand)" }} />
        <span>
          Elfogadom az{" "}
          <Link href="/adatvedelmi-nyilatkozat" className="text-[var(--brand)] underline" target="_blank">
            adatvédelmi nyilatkozatban
          </Link>{" "}
          foglaltakat. *
        </span>
      </label>

      {status === "error" ? <p className="form-error">{error}</p> : null}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Küldés…" : submitLabel}
      </button>
    </form>
  );
};
