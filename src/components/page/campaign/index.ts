import type { ComponentType } from "react";
import { Ft1000 } from "@/components/page/campaign/Ft1000";
import { Kepzeseink } from "@/components/page/campaign/Kepzeseink";
import { NapelemTarsashazaknak } from "@/components/page/campaign/NapelemTarsashazaknak";
import { NapenergiaPluszProgram } from "@/components/page/campaign/NapenergiaPluszProgram";

/** Slug → bespoke native campaign / landing page component. */
export const CAMPAIGN_PAGES: Record<string, ComponentType> = {
  ft1000: Ft1000,
  kepzeseink: Kepzeseink,
  "napelem-tarsashazaknak": NapelemTarsashazaknak,
  "napenergia-plusz-program": NapenergiaPluszProgram,
};
