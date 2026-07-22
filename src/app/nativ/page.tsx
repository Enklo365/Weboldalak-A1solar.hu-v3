import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeAbout, HomeArticles, HomeZanzibar } from "@/components/home/HomeSections";

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
      <HomeHero />
      <div className="mx-auto max-w-[var(--container)] px-6">
        <hr style={{ border: 0, borderTop: "1px dashed #ececec" }} />
      </div>
      <HomeAbout />
      <HomeZanzibar />
      <HomeArticles />
    </>
  );
}
