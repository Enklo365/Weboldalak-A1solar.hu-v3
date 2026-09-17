import type { ComponentType } from "react";
import { LakossagiKalkulator, VallalatiKalkulator } from "@/components/page/tools/CalculatorPage";
import { Cegbemutato } from "@/components/page/tools/Cegbemutato";
import { JogosultsagiEloszuro } from "@/components/page/tools/JogosultsagiEloszuro";

/** Slug → native tool / utility page component. */
export const TOOL_PAGES: Record<string, ComponentType> = {
  "lakossagi-napelem-kalkulator": LakossagiKalkulator,
  "vallalati-napelem-kalkulator": VallalatiKalkulator,
  cegbemutato: Cegbemutato,
  "jogosultsagi-eloszuro": JogosultsagiEloszuro,
};
