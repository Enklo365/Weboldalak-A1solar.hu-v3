"use client";

import { useState } from "react";
import { submitContact } from "@/lib/submitContact";

type ContactFormProps = {
  formName?: string;
  heading?: string;
  intro?: string;
  compact?: boolean;
};

/**
 * Lead / contact form. Posts to /api/contact (Resend) via {@link submitContact}.
 * Used on the contact page and injected in place of legacy form shortcodes.
 */
export const ContactForm = ({
  formName = "Kapcsolati űrlap",
  heading = "Kérjen ingyenes ajánlatot",
  intro = "Töltse ki az űrlapot, és munkatársunk 24 órán belül felveszi Önnel a kapcsolatot.",
}: ContactFormProps) => {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
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
      <div className="contact-card contact-success">
        <div className="contact-success__icon">✓</div>
        <h3>Köszönjük megkeresését!</h3>
        <p>Munkatársunk hamarosan felveszi Önnel a kapcsolatot.</p>
      </div>
    );
  }

  return (
    <form className="contact-card" onSubmit={onSubmit} noValidate>
      <h3>{heading}</h3>
      <p className="contact-intro">{intro}</p>
      <div className="field-row">
        <label className="field">
          <span>Név *</span>
          <input name="name" required autoComplete="name" placeholder="Teljes név" />
        </label>
        <label className="field">
          <span>Telefonszám *</span>
          <input name="phone" required autoComplete="tel" placeholder="+36 …" />
        </label>
      </div>
      <label className="field">
        <span>E-mail cím *</span>
        <input name="email" type="email" required autoComplete="email" placeholder="pelda@email.hu" />
      </label>
      <label className="field">
        <span>Üzenet *</span>
        <textarea name="message" required rows={5} placeholder="Miben segíthetünk?" />
      </label>
      {status === "error" ? <p className="form-error">{error}</p> : null}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Küldés…" : "Ajánlatot kérek"}
      </button>
      <p className="form-consent">
        Az űrlap elküldésével elfogadja az adatvédelmi nyilatkozatunkat.
      </p>
    </form>
  );
};
