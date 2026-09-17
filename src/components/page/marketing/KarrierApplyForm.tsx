"use client";

import Link from "next/link";
import { useRef, useState } from "react";

type KarrierApplyFormProps = {
  positionTitle: string;
};

const MAX_CV_BYTES = 3 * 1024 * 1024; // 3 MB
const ACCEPT = ".pdf,.doc,.docx,.jpg,.jpeg,.png";

const readAsBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("read-failed"));
    reader.readAsDataURL(file);
  });

/**
 * Job-application form for the position sections — single column, with a CV
 * upload and a required GDPR consent checkbox. Posts to /api/contact with the
 * CV as a base64 attachment and the position name.
 */
export const KarrierApplyForm = ({ positionTitle }: KarrierApplyFormProps) => {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");
  const [cvName, setCvName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setCvName("");
      return;
    }
    if (file.size > MAX_CV_BYTES) {
      setError("A csatolt önéletrajz túl nagy (max. 3 MB).");
      e.target.value = "";
      setCvName("");
      return;
    }
    setError("");
    setCvName(file.name);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — hidden field; only bots fill it. Silently drop the submission.
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

    let attachment: { filename: string; content: string } | undefined;
    const file = fileRef.current?.files?.[0];
    if (file) {
      try {
        attachment = { filename: file.name, content: await readAsBase64(file) };
      } catch {
        setStatus("error");
        setError("Az önéletrajz feldolgozása sikertelen. Próbáld újra.");
        return;
      }
    }

    const name = String(data.get("name") ?? "");
    const motivation = String(data.get("message") ?? "").trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          formName: `Karrier jelentkezés – ${positionTitle}`,
          position: positionTitle,
          name,
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          message: motivation || `Jelentkezés a(z) ${positionTitle} pozícióra.`,
          consent: true,
          attachment,
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
      setCvName("");
    } catch {
      setStatus("error");
      setError("Hálózati hiba — próbáld újra.");
    }
  };

  if (status === "ok") {
    return (
      <div className="contact-card contact-card--bare contact-success">
        <div className="contact-success__icon">✓</div>
        <h3>Köszönjük jelentkezésed!</h3>
        <p>Kollégánk hamarosan felveszi veled a kapcsolatot.</p>
      </div>
    );
  }

  return (
    <form className="contact-card contact-card--bare" onSubmit={onSubmit}>
      <h3>Jelentkezés</h3>
      <p className="contact-intro">Töltsd ki az alábbi űrlapot és jelentkezz a pozícióra.</p>

      {/* Honeypot — hidden from users; bots that fill it are silently dropped. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />

      <label className="field">
        <span>Név *</span>
        <input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Teljes név" />
      </label>
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
          title="Adj meg egy érvényes telefonszámot (legalább 6 számjegy)."
          autoComplete="tel"
          placeholder="+36 …"
        />
      </label>
      <label className="field">
        <span>Motiváció / üzenet</span>
        <textarea name="message" rows={4} placeholder="Pár mondat magadról (opcionális)" />
      </label>

      <div className="field">
        <span style={{ fontSize: "12px", fontWeight: 400, color: "var(--ink-muted)", textTransform: "none", letterSpacing: 0 }}>
          Önéletrajz (PDF, DOC, kép — max. 3 MB)
        </span>
        <input
          ref={fileRef}
          name="cv"
          type="file"
          accept={ACCEPT}
          onChange={onFileChange}
          className="block w-full text-sm text-[var(--ink-soft)]"
          style={{
            padding: "10px 12px",
            borderRadius: "12px",
            background: "#fff",
            border: "1px solid var(--line)",
          }}
        />
        {cvName ? <span className="mt-1 text-xs text-[var(--ink-muted)]">Kiválasztva: {cvName}</span> : null}
      </div>

      <label className="mt-1 flex items-start gap-3 text-sm text-[var(--ink-soft)]">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0" style={{ accentColor: "var(--brand)" }} />
        <span>
          Elolvastam és elfogadom az{" "}
          <Link href="/adatvedelmi-nyilatkozat" className="text-[var(--brand)] underline" target="_blank" rel="noopener noreferrer">
            adatvédelmi nyilatkozatot
          </Link>
          , és hozzájárulok adataim kezeléséhez. *
        </span>
      </label>

      {status === "error" ? <p className="form-error">{error}</p> : null}

      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Küldés…" : "Jelentkezés elküldése"}
      </button>
    </form>
  );
};
