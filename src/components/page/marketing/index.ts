import type { ComponentType } from "react";
import { Cegunkrol } from "@/components/page/marketing/Cegunkrol";
import { Kapcsolat } from "@/components/page/marketing/Kapcsolat";
import { Karrier } from "@/components/page/marketing/Karrier";
import { Palyazatok } from "@/components/page/marketing/Palyazatok";
import { Szolgaltatasaink } from "@/components/page/marketing/Szolgaltatasaink";
import { Teszttarolas } from "@/components/page/marketing/Teszttarolas";

/** Slug → bespoke native marketing page component. */
export const MARKETING_PAGES: Record<string, ComponentType> = {
  cegunkrol: Cegunkrol,
  kapcsolat: Kapcsolat,
  szolgaltatasaink: Szolgaltatasaink,
  palyazatok: Palyazatok,
  karrier: Karrier,
  teszttarolas: Teszttarolas,
};
