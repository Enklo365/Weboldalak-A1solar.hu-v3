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
      subject: `Új ajánlatkérés – ${formName}`,
      html: buildHtml({ name, email, phone, message, formName, pageUrl }),
      text: buildText({ name, email, phone, message, formName, pageUrl }),
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
}) {
  const { name, email, phone, message, formName, pageUrl } = data;
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
}) {
  return [
    `Új ajánlatkérés – ${d.formName}`,
    "",
    `Név:     ${d.name}`,
    `E-mail:  ${d.email}`,
    `Telefon: ${d.phone}`,
    "",
    "Üzenet:",
    d.message,
    d.pageUrl ? `\nForrás: ${d.pageUrl}` : "",
  ].join("\n");
}
