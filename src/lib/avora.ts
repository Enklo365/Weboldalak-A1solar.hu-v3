export type AvoraLead = {
  form: "residential" | "business" | "industrial" | "service" | "press" | "career";
  name: string;
  email: string;
  phone?: string;
  company?: string;
  location?: string;
  message?: string;
  source?: string;
  consent: boolean;
};

export type AvoraResult = { ok: true; reference?: string } | { ok: false; reason: "not-configured" | "rejected" };

/**
 * The single future integration boundary for every site form. The endpoint and
 * authentication stay server-side; until they are configured the UI keeps the
 * copy-deck form slots visible and never pretends a lead was submitted.
 */
export async function submitToAvora(lead: AvoraLead): Promise<AvoraResult> {
  const endpoint = process.env.AVORA_WEBHOOK_URL;
  const token = process.env.AVORA_API_TOKEN;
  if (!endpoint || !token) return { ok: false, reason: "not-configured" };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${token}` },
    body: JSON.stringify(lead),
    cache: "no-store",
  });
  if (!response.ok) return { ok: false, reason: "rejected" };
  const payload = await response.json().catch(() => ({}));
  return { ok: true, reference: typeof payload.reference === "string" ? payload.reference : undefined };
}
