"use client";

import Link from "next/link";
import { useState } from "react";

export type QuizField =
  | { name: string; label: string; type: "text"; required?: boolean; placeholder?: string }
  | { name: string; label: string; type: "textarea"; required?: boolean; placeholder?: string }
  | { name: string; label: string; type: "select"; required?: boolean; options: string[] }
  | { name: string; label: string; type: "radio"; required?: boolean; options: string[] };

type ScreeningQuizProps = {
  formName: string;
  intro?: string;
  submitLabel?: string;
  questions: QuizField[];
};

/**
 * Config-driven recruitment pre-screening quiz — the native equivalent of the WP
 * Fluent Forms screening quiz. Collects contact details + a list of typed
 * questions (radio / select / text / textarea), bot-protected (honeypot) with a
 * required consent checkbox. All answers are folded into the message and posted
 * to /api/contact.
 */
export const ScreeningQuiz = ({ formName, intro, submitLabel = "Beküldöm", questions }: ScreeningQuizProps) => {
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

    const name = `${String(data.get("firstName") ?? "").trim()} ${String(data.get("lastName") ?? "").trim()}`.trim();
    const lines = questions
      .map((q) => {
        const v = String(data.get(q.name) ?? "").trim();
        return v ? `${q.label}\n→ ${v}` : "";
      })
      .filter(Boolean);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          formName,
          name,
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          message: lines.join("\n\n") || `${formName} – kitöltött előszűrő.`,
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
        <h3>Köszönjük a kitöltést!</h3>
        <p>Munkatársunk hamarosan felveszi veled a kapcsolatot.</p>
      </div>
    );
  }

  return (
    <form className="contact-card contact-card--bare" onSubmit={onSubmit}>
      {intro ? <p className="contact-intro">{intro}</p> : null}

      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />

      <div className="field-row">
        <label className="field">
          <span>Keresztnév *</span>
          <input name="firstName" required minLength={2} maxLength={60} autoComplete="given-name" placeholder="Keresztnév" />
        </label>
        <label className="field">
          <span>Vezetéknév *</span>
          <input name="lastName" required minLength={2} maxLength={60} autoComplete="family-name" placeholder="Vezetéknév" />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>E-mail cím *</span>
          <input name="email" type="email" required maxLength={120} autoComplete="email" placeholder="pelda@email.hu" />
        </label>
        <label className="field">
          <span>Telefonszám *</span>
          <input name="phone" type="tel" required pattern="[0-9+()\-\s]{6,20}" autoComplete="tel" placeholder="+36 …" />
        </label>
      </div>

      {questions.map((q, i) => {
        const label = `${i + 1}. ${q.label}${q.required ? " *" : ""}`;
        if (q.type === "textarea") {
          return (
            <label key={q.name} className="field">
              <span>{label}</span>
              <textarea name={q.name} required={q.required} rows={3} maxLength={2000} placeholder={q.placeholder} />
            </label>
          );
        }
        if (q.type === "text") {
          return (
            <label key={q.name} className="field">
              <span>{label}</span>
              <input name={q.name} required={q.required} maxLength={200} placeholder={q.placeholder} />
            </label>
          );
        }
        if (q.type === "select") {
          return (
            <label key={q.name} className="field">
              <span>{label}</span>
              <select name={q.name} required={q.required} defaultValue="">
                <option value="" disabled>
                  Válassz…
                </option>
                {q.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
          );
        }
        // radio
        return (
          <fieldset key={q.name} style={{ border: 0, padding: 0, margin: 0 }}>
            <legend style={{ fontSize: "14px", fontWeight: 600, color: "var(--ink)", marginBottom: "8px" }}>{label}</legend>
            <div className="flex flex-col gap-2">
              {q.options.map((o) => (
                <label key={o} className="flex items-start gap-3 text-sm" style={{ color: "var(--ink-soft)", cursor: "pointer" }}>
                  <input type="radio" name={q.name} value={o} required={q.required} className="mt-1 h-4 w-4 shrink-0" style={{ accentColor: "var(--brand)" }} />
                  <span>{o}</span>
                </label>
              ))}
            </div>
          </fieldset>
        );
      })}

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
