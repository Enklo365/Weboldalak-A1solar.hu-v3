import type { Metadata } from "next";
import { CopydeckPage } from "@/components/v3/CopydeckPage";
import { getV3Page } from "@/lib/v3-pages";

export const metadata: Metadata = {
  title: "A1 Solar – Napelem, energiatárolás és finanszírozás egy helyről",
  description:
    "Célunk, hogy ügyfeleink egy helyről kapják meg a napelemes rendszer kiépítéséhez szükséges összes szolgáltatást. Fókuszban az energiatárolás.",
  alternates: { canonical: "/" },
};

/**
 * Homepage — native React/Next.js rebuild of a1solar.hu (previously served from
 * the `/nativ` preview route; promoted to `/` after sign-off).
 */
export default function HomePage() {
  const page = getV3Page("/");
  if (!page) return null;
  return <CopydeckPage page={page} />;
}
