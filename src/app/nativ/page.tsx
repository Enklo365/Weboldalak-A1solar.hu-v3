import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";

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
      {/* TODO: Cégünkről · Zanzibár · Tudástár sections (next) */}
      <div className="mx-auto max-w-[var(--container)] px-4 py-16 text-[var(--ink-muted)]">
        További szekciók következnek: Cégünkről · Zanzibár · Legfrissebb cikkeink.
      </div>
    </>
  );
}
