import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "A1 Solar <onboarding@resend.dev>";
const TO_EMAIL = process.env.RESEND_TO_EMAIL || "info@a1solar.hu";
const MAX_REQUEST_BYTES = 4_500_000;
const MAX_ATTACHMENT_BYTES = 3 * 1024 * 1024;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

type ContactPayload = {
  formName?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  pageUrl?: string;
  position?: string;
  consent?: boolean;
  website?: string;
  attachment?: { filename?: string; content?: string; contentType?: string };
};

type RateBucket = { count: number; resetAt: number };
const rateState = globalThis as typeof globalThis & {
  __a1ContactRateBuckets?: Map<string, RateBucket>;
};
const rateBuckets = (rateState.__a1ContactRateBuckets ??= new Map());

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return json({ error: "Érvénytelen kérési eredet." }, 403);
  }

  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.startsWith("application/json")) {
    return json({ error: "Csak JSON kérés fogadható." }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) {
    return json({ error: "A kérés túl nagy." }, 413);
  }

  const rateLimit = takeRateLimit(request);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Túl sok küldési kísérlet. Kérjük, próbálja újra később." },
      {
        status: 429,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": String(rateLimit.retryAfter),
        },
      },
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return json({ error: "A kérés nem olvasható." }, 400);
  }
  if (Buffer.byteLength(rawBody, "utf8") > MAX_REQUEST_BYTES) {
    return json({ error: "A kérés túl nagy." }, 413);
  }

  let body: ContactPayload;
  try {
    body = JSON.parse(rawBody) as ContactPayload;
  } catch {
    return json({ error: "Érvénytelen JSON." }, 400);
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return json({ error: "Érvénytelen kérés." }, 400);
  }

  // A filled honeypot is accepted but deliberately not delivered.
  if (singleLine(body.website, 200)) {
    return json({ ok: true }, 200);
  }

  const name = singleLine(body.name, 200);
  const email = singleLine(body.email, 200).toLowerCase();
  const phone = singleLine(body.phone, 50);
  const message = clean(body.message);
  const formName = singleLine(body.formName, 120) || "Weboldal űrlap";
  const position = singleLine(body.position, 120);
  const pageUrl = sameOriginPageUrl(body.pageUrl, request);
  const consent = body.consent === true;

  if (!consent) {
    return json({ error: "Az adatkezelési hozzájárulás kötelező." }, 400);
  }
  if (name.length < 2 || !isValidEmail(email) || !isValidPhone(phone) || message.length < 2) {
    return json({ error: "Hiányzó vagy érvénytelen kötelező mező." }, 400);
  }
  if (message.length > 5000) {
    return json({ error: "Túl hosszú üzenet." }, 400);
  }

  let attachments: { filename: string; content: Buffer }[] | undefined;
  if (body.attachment) {
    const decoded = decodeAttachment(body.attachment);
    if (!decoded.ok) return json({ error: decoded.error }, 400);
    attachments = [{ filename: decoded.filename, content: decoded.content }];
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY missing");
    return json({ error: "A levélküldő szolgáltatás nincs konfigurálva." }, 500);
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
      console.error("Resend delivery failed", { name: error.name, message: error.message });
      return json({ error: "Nem sikerült elküldeni az üzenetet." }, 502);
    }

    return json({ ok: true, id: data?.id }, 200);
  } catch (error) {
    console.error("Unexpected contact delivery error", error instanceof Error ? error.message : "unknown");
    return json({ error: "Szerverhiba." }, 500);
  }
}

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function clean(value: unknown) {
  return value == null ? "" : String(value).trim();
}

function singleLine(value: unknown, maxLength: number) {
  return clean(value).replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").slice(0, maxLength);
}

function isValidEmail(value: string) {
  return value.length <= 200 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  return value === "Nincs megadva" || (value.length <= 50 && /^[0-9+().\-\s]{6,50}$/.test(value));
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
    const expectedHost = forwardedHost || request.headers.get("host") || new URL(request.url).host;
    return new URL(origin).host.toLowerCase() === expectedHost.toLowerCase();
  } catch {
    return false;
  }
}

function sameOriginPageUrl(value: unknown, request: Request) {
  const raw = singleLine(value, 500);
  if (!raw) return "";

  try {
    const url = new URL(raw);
    const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
    const expectedHost = forwardedHost || request.headers.get("host") || new URL(request.url).host;
    return url.host.toLowerCase() === expectedHost.toLowerCase() && /^https?:$/.test(url.protocol)
      ? url.toString()
      : "";
  } catch {
    return "";
  }
}

function clientIp(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function takeRateLimit(request: Request): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  if (rateBuckets.size > 1000) {
    for (const [key, bucket] of rateBuckets) {
      if (bucket.resetAt <= now) rateBuckets.delete(key);
    }
  }

  const key = clientIp(request);
  const current = rateBuckets.get(key);
  if (!current || current.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  if (current.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)) };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

function decodeAttachment(attachment: NonNullable<ContactPayload["attachment"]>):
  | { ok: true; filename: string; content: Buffer }
  | { ok: false; error: string } {
  const originalName = singleLine(attachment.filename, 200);
  const filename = originalName.replace(/[\\/:*?"<>|]/g, "_");
  const extension = filename.match(/\.([a-z0-9]+)$/i)?.[1]?.toLowerCase() ?? "";
  const allowedExtensions = new Set(["pdf", "doc", "docx", "jpg", "jpeg", "png"]);
  if (!filename || !allowedExtensions.has(extension)) {
    return { ok: false, error: "Nem támogatott csatolmánytípus." };
  }

  const raw = clean(attachment.content);
  const base64 = raw.includes(",") ? raw.slice(raw.indexOf(",") + 1) : raw;
  if (!base64 || base64.length > Math.ceil(MAX_ATTACHMENT_BYTES / 3) * 4 + 4) {
    return { ok: false, error: "A csatolt önéletrajz túl nagy (max. 3 MB)." };
  }
  if (base64.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(base64)) {
    return { ok: false, error: "A csatolt fájl kódolása érvénytelen." };
  }

  const content = Buffer.from(base64, "base64");
  if (!content.length || content.length > MAX_ATTACHMENT_BYTES || !matchesFileSignature(extension, content)) {
    return { ok: false, error: "A csatolt fájl típusa vagy tartalma érvénytelen." };
  }

  return { ok: true, filename, content };
}

function matchesFileSignature(extension: string, content: Buffer) {
  const hex = content.subarray(0, 8).toString("hex");
  if (extension === "pdf") return content.subarray(0, 5).toString("ascii") === "%PDF-";
  if (extension === "doc") return hex.startsWith("d0cf11e0a1b11ae1");
  if (extension === "docx") return hex.startsWith("504b0304");
  if (extension === "jpg" || extension === "jpeg") return hex.startsWith("ffd8ff");
  if (extension === "png") return hex.startsWith("89504e470d0a1a0a");
  return false;
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

function buildText(data: {
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
    data.position ? `Új jelentkezés – ${data.position}` : `Új ajánlatkérés – ${data.formName}`,
    "",
    `Név:     ${data.name}`,
    `E-mail:  ${data.email}`,
    `Telefon: ${data.phone}`,
  ];
  if (data.position) lines.push(`Pozíció: ${data.position}`);
  if (data.hasCv) lines.push("Önéletrajz: csatolva");
  if (data.consent) lines.push("Adatkezelési hozzájárulás: elfogadva");
  lines.push("", "Üzenet:", data.message);
  if (data.pageUrl) lines.push(`\nForrás: ${data.pageUrl}`);
  return lines.join("\n");
}
