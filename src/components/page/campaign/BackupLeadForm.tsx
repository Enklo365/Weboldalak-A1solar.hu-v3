"use client";

import Link from "next/link";
import { useState } from "react";

type BackupLeadFormProps = {
  formName?: string;
  heading?: string;
  intro?: string;
  submitLabel?: string;
  /** hide the badge + heading + intro (when the surrounding section already titles it) */
  hideHeader?: boolean;
  /** small reassurance line shown under the submit button */
  microcopy?: string;
};

/**
 * Landing lead form for the hybrid-backup page: full name, e-mail, postal code,
 * phone and a free-text "ideas" area, plus a required consent checkbox and a
 * honeypot. Posts to /api/contact; the postal code is folded into the message.
 */
export const BackupLeadForm = ({
  formName = "Hibrid napelem + backup ajánlatkérés",
  heading = "Töltse ki az alábbi űrlapot!",
  intro = "Munkatársunk 24 órán belül felveszi Önnel a kapcsolatot a megadott elérhetőségei egyikén.",
  submitLabel = "Ajánlatot kérek",
  hideHeader = false,
  microcopy,
}: BackupLeadFormProps) => {
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
    const ideas = String(data.get("ideas") ?? "").trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          formName,
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          message: `${ideas || "Hibrid napelem + backup ajánlatkérés."}${zip ? ` (Irányítószám: ${zip}.)` : ""}`,
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
      {hideHeader ? null : (
        <>
          <span
            className="rounded-[30px] px-3 py-2 text-xs font-normal uppercase tracking-[1px]"
            style={{ background: "rgba(194,29,32,0.14)", color: "var(--brand-dark)", alignSelf: "flex-start", width: "fit-content", marginBottom: "12px" }}
          >
            Kapcsolatfelvétel
          </span>
          <h3>{heading}</h3>
          <p className="contact-intro">{intro}</p>
        </>
      )}

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
          <span>E-mail cím *</span>
          <input name="email" type="email" required maxLength={120} autoComplete="email" placeholder="pelda@email.hu" />
        </label>
      </div>
      <div className="field-row">
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
        <span>Írd le nekünk pár mondatban az elképzeléseid</span>
        <textarea name="ideas" maxLength={2000} rows={4} placeholder="Pl. mekkora a ház, mit szeretnél áramszünetben működtetni, van-e már napelemed…" />
      </label>

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
        {status === "sending" ? "Küldés…" : submitLabel}
      </button>

      {microcopy ? (
        <p className="text-center" style={{ margin: "4px 0 0", fontSize: "13px", lineHeight: 1.5, color: "var(--ink-muted)" }}>
          {microcopy}
        </p>
      ) : null}
    </form>
  );
};
