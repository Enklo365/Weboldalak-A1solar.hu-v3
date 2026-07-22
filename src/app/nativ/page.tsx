import type { Metadata } from "next";
import { BottomNav } from "@/components/BottomNav";
import { Motion } from "@/components/Motion";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeAbout, HomeArticles, HomeZanzibar, SectionDivider } from "@/components/home/HomeSections";

export const metadata: Metadata = {
  title: "A1 Solar – natív főoldal (preview)",
  robots: { index: false, follow: false },
};

/**
 * Preview route for the native (React/Next.js) homepage rebuild. Built here so
 * the live homepage keeps serving the faithful mirror until the native version
 * is complete and verified, then `src/app/page.tsx` is switched over.
 */
export default function NativHomePreview() {
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
      <BottomNav />
    </>
  );
}
