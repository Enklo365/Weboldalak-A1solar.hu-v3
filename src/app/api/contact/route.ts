import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "A1 Solar <onboarding@resend.dev>";
const TO_EMAIL = process.env.RESEND_TO_EMAIL || "info@a1solar.hu";

type ContactPayload = {
  formName?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  pageUrl?: string;
  position?: string;
  consent?: boolean;
  attachment?: { filename?: string; content?: string; contentType?: string };
};

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY missing");
    return NextResponse.json(
      { error: "A levélküldő szolgáltatás nincs konfigurálva." },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Érvénytelen JSON." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const message = clean(body.message);
  const formName = clean(body.formName) || "Weboldal űrlap";
  const pageUrl = clean(body.pageUrl);
  const position = clean(body.position);
  const consent = body.consent === true;

  // Optional CV attachment (base64). Kept small to stay under the serverless
  // request-body limit; the client already caps the file size.
  let attachments: { filename: string; content: Buffer }[] | undefined;
  const att = body.attachment;
  if (att && clean(att.content) && clean(att.filename)) {
    const raw = clean(att.content);
    const base64 = raw.includes(",") ? raw.slice(raw.indexOf(",") + 1) : raw;
    const approxBytes = Math.floor((base64.length * 3) / 4);
    if (approxBytes > 3_500_000) {
      return NextResponse.json({ error: "A csatolt önéletrajz túl nagy (max. 3 MB)." }, { status: 400 });
    }
    try {
      attachments = [{ filename: clean(att.filename).slice(0, 200), content: Buffer.from(base64, "base64") }];
    } catch {
      return NextResponse.json({ error: "A csatolt fájl feldolgozása sikertelen." }, { status: 400 });
    }
  }

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Hiányzó kötelező mezők." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Érvénytelen e-mail cím." }, { status: 400 });
  }
  if (
    name.length > 200 ||
    email.length > 200 ||
    phone.length > 50 ||
    message.length > 5000
  ) {
    return NextResponse.json({ error: "Túl hosszú mezőérték." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: position ? `Új jelentkezés – ${position}` : `Új ajánlatkérés – ${formName}`,
      html: buildHtml({ name, email, phone, message, formName, pageUrl, position, consent, hasCv: Boolean(attachments) }),
      text: buildText({ name, email, phone, message, formName, pageUrl, position, consent, hasCv: Boolean(attachments) }),
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Nem sikerült elküldeni az üzenetet." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error in /api/contact:", err);
    return NextResponse.json({ error: "Szerverhiba." }, { status: 500 });
  }
}

function clean(value: unknown) {
  return value == null ? "" : String(value).trim();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildHtml(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  formName: string;
  pageUrl: string;
  position?: string;
  consent?: boolean;
  hasCv?: boolean;
}) {
  const { name, email, phone, message, formName, pageUrl, position, consent, hasCv } = data;
  const extra = `${position ? `<p style="margin:0 0 8px;"><strong>Pozíció:</strong> ${escapeHtml(position)}</p>` : ""}${hasCv ? `<p style="margin:0 0 8px;"><strong>Önéletrajz:</strong> csatolva</p>` : ""}${consent ? `<p style="margin:0 0 8px;font-size:12px;color:#777;">Adatkezelési hozzájárulás elfogadva.</p>` : ""}`;
  return `<!doctype html>
<html lang="hu">
<body style="margin:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;color:#181818;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;max-width:600px;">
        <tr>
          <td style="padding:24px 32px;background:#db0330;color:#ffffff;">
            <h1 style="margin:0;font-size:20px;">Új ajánlatkérés</h1>
            <p style="margin:4px 0 0;font-size:13px;">${escapeHtml(formName)}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px;">
            <p style="margin:0 0 8px;"><strong>Név:</strong> ${escapeHtml(name)}</p>
            <p style="margin:0 0 8px;"><strong>E-mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p style="margin:0 0 8px;"><strong>Telefon:</strong> <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></p>
            ${extra}
            <p style="margin:16px 0 4px;"><strong>Üzenet:</strong></p>
            <div style="white-space:pre-wrap;background:#f7f7f7;border-radius:6px;padding:12px 16px;">${escapeHtml(message)}</div>
            ${pageUrl ? `<p style="margin:16px 0 0;font-size:12px;color:#777;">Forrás: <a href="${escapeHtml(pageUrl)}">${escapeHtml(pageUrl)}</a></p>` : ""}
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildText(d: {
  name: string;
  email: string;
  phone: string;
  message: string;
  formName: string;
  pageUrl: string;
  position?: string;
  consent?: boolean;
  hasCv?: boolean;
}) {
  const lines = [
    d.position ? `Új jelentkezés – ${d.position}` : `Új ajánlatkérés – ${d.formName}`,
    "",
    `Név:     ${d.name}`,
    `E-mail:  ${d.email}`,
    `Telefon: ${d.phone}`,
  ];
  if (d.position) lines.push(`Pozíció: ${d.position}`);
  if (d.hasCv) lines.push("Önéletrajz: csatolva");
  if (d.consent) lines.push("Adatkezelési hozzájárulás: elfogadva");
  lines.push("", "Üzenet:", d.message);
  if (d.pageUrl) lines.push(`\nForrás: ${d.pageUrl}`);
  return lines.join("\n");
}
