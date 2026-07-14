/**
 * Client-side helper for posting to /api/contact.
 * Returns a discriminated result so forms can render success/error UI without
 * sprinkling try/catch and response parsing logic across components.
 */

export type ContactInput = {
  formName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactResult =
  | { ok: true; id?: string }
  | { ok: false; error: string };

export async function submitContact(input: ContactInput): Promise<ContactResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...input,
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      }),
    });
    const data = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      id?: string;
      error?: string;
    };
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error || "Ismeretlen hiba történt." };
    }
    return { ok: true, id: data.id };
  } catch (err) {
    console.error("submitContact failed:", err);
    return { ok: false, error: "Hálózati hiba — próbálja újra." };
  }
}
