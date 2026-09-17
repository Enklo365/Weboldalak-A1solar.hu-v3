import type { ComponentType } from "react";
import { Cegunkrol } from "@/components/page/marketing/Cegunkrol";
import { Kapcsolat } from "@/components/page/marketing/Kapcsolat";
import { Karrier } from "@/components/page/marketing/Karrier";

/** Slug → bespoke native marketing page component. */
export const MARKETING_PAGES: Record<string, ComponentType> = {
  cegunkrol: Cegunkrol,
  kapcsolat: Kapcsolat,
  karrier: Karrier,
};
