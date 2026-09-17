import type { ComponentType } from "react";
import { EnergetikaiPalyazatok2024 } from "@/components/page/campaign/EnergetikaiPalyazatok2024";
import { ErtekesitoEloszuro } from "@/components/page/campaign/ErtekesitoEloszuro";
import { FalusiCsok } from "@/components/page/campaign/FalusiCsok";
import { HibridNapelemBackup } from "@/components/page/campaign/HibridNapelemBackup";
import { JedlikAnyosEnergetikaiProgram } from "@/components/page/campaign/JedlikAnyosEnergetikaiProgram";
import { JedlikAnyosFinanszirozasiSegitseg } from "@/components/page/campaign/JedlikAnyosFinanszirozasiSegitseg";
import { Kepzeseink } from "@/components/page/campaign/Kepzeseink";
import { LakossagiEnergiataroloTamogatas } from "@/components/page/campaign/LakossagiEnergiataroloTamogatas";
import { NapelemReszletfizetes } from "@/components/page/campaign/NapelemReszletfizetes";
import { RegiovezetoEloszures } from "@/components/page/campaign/RegiovezetoEloszures";
import { OepHelysziniFelmeres } from "@/components/page/campaign/OepHelysziniFelmeres";
import { SzakmaiNapRegisztracio } from "@/components/page/campaign/SzakmaiNapRegisztracio";
import { NapelemTarsashazaknak } from "@/components/page/campaign/NapelemTarsashazaknak";
import { NapenergiaPluszProgram } from "@/components/page/campaign/NapenergiaPluszProgram";
import { OtthonfelujitasiTamogatas2024 } from "@/components/page/campaign/OtthonfelujitasiTamogatas2024";
import { OtthonfelujitasiTamogatas2025 } from "@/components/page/campaign/OtthonfelujitasiTamogatas2025";
import { OtthonfelujitasiTamogatasAjanlatI } from "@/components/page/campaign/OtthonfelujitasiTamogatasAjanlatI";
import { OtthonfelujitasiTamogatasAjanlatII } from "@/components/page/campaign/OtthonfelujitasiTamogatasAjanlatII";
import { OtthonfelujitasiTamogatasAjanlatIII } from "@/components/page/campaign/OtthonfelujitasiTamogatasAjanlatIII";

/** Slug → bespoke native campaign / landing page component. */
export const CAMPAIGN_PAGES: Record<string, ComponentType> = {
  kepzeseink: Kepzeseink,
  "napelem-tarsashazaknak": NapelemTarsashazaknak,
  "napenergia-plusz-program": NapenergiaPluszProgram,
  "otthonfelujitasi-tamogatas-2025": OtthonfelujitasiTamogatas2025,
  "otthonfelujitasi-tamogatas-2024": OtthonfelujitasiTamogatas2024,
  "falusi-csok": FalusiCsok,
  "jedlik-anyos-energetikai-program": JedlikAnyosEnergetikaiProgram,
  "jedlik-anyos-finanszirozasi-segitseg": JedlikAnyosFinanszirozasiSegitseg,
  "energetikai-palyazatok-2024": EnergetikaiPalyazatok2024,
  "otthonfelujitasi-tamogatas-ajanlat-i": OtthonfelujitasiTamogatasAjanlatI,
  "otthonfelujitasi-tamogatas-ajanlat-ii": OtthonfelujitasiTamogatasAjanlatII,
  "otthonfelujitasi-tamogatas-ajanlat-iii": OtthonfelujitasiTamogatasAjanlatIII,
  "lakossagi-energiatarolo-tamogatas": LakossagiEnergiataroloTamogatas,
  "oep-helyszini-felmeres": OepHelysziniFelmeres,
  "szakmai-nap-regisztracio": SzakmaiNapRegisztracio,
  "hibrid-napelem-backup": HibridNapelemBackup,
  "napelem-energiatarolo-reszletfizetes": NapelemReszletfizetes,
  "ertekesito-eloszuro": ErtekesitoEloszuro,
  "regiovezeto-eloszures": RegiovezetoEloszures,
};
