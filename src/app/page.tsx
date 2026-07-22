import type { Metadata } from "next";
import { Motion } from "@/components/Motion";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeAbout, HomeArticles, HomeZanzibar, SectionDivider } from "@/components/home/HomeSections";

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
  return (
    <>
      <Motion />
      <HomeHero />
      <SectionDivider />
      <HomeAbout />
      <SectionDivider />
      <HomeZanzibar />
      <SectionDivider />
      <HomeArticles />
    </>
  );
}
