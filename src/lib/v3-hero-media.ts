export type V3HeroMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
  position?: string;
};

const RESIDENTIAL = "/wp-content/uploads/2025/08/8024.jpg";
const RESIDENTIAL_STORAGE = "/wp-content/uploads/2025/08/hibrid-napelem-backup-hero.jpg";
const COMMERCIAL = "/wp-content/uploads/2025/08/47611.jpg";
const COMMERCIAL_STORAGE = "/wp-content/uploads/2025/07/photo_5764948694217641557_y-1-edited.jpg";
const SOLAR_PARK = "/wp-content/uploads/2025/03/Kelfeder-Zrt.-I-2-mWp.jpg";
const COMPANY = "/wp-content/uploads/2025/07/18792.jpg";
const TEAM = "/wp-content/uploads/2023/11/210363746_m_normal_none.jpg";
const GRANTS = "/wp-content/uploads/2025/06/jedlik-anyos-energetikai-program-2-1.png";
const SERVICE = "/wp-content/uploads/2026/06/photo_2026-06-24_11-59-38.jpg";
const COMPANY_VIDEO = "/wp-content/uploads/2025/07/Telepitettuk-az-elso-Napenergia-Plusz-Programos-rendszert-A1-Solar.mp4";
const SERVICE_VIDEO = "/wp-content/uploads/2026/06/Panelmosas-aloldalhoz-A1-Solar-1080p-h264.mp4";

// Existing media carried over from the original WordPress site. Reusing it
// keeps every v3 hero visual until final page-specific photography arrives.
const mediaByPath: Record<string, V3HeroMedia> = {
  "/rolunk/cegunkrol/": { type: "video", src: COMPANY_VIDEO, poster: COMPANY },
  "/rolunk/media/": { type: "video", src: COMPANY_VIDEO, poster: COMPANY },
  "/rolunk/szerviz-es-garancia/": { type: "video", src: SERVICE_VIDEO, poster: SERVICE },
  "/rolunk/karrier/": { type: "image", src: TEAM, position: "center 35%" },

  "/lakossagi/napelem-energiataroloval/": { type: "image", src: RESIDENTIAL },
  "/lakossagi/meglevo-napelem-bovitese-energiataroloval/": { type: "image", src: "/wp-content/uploads/2025/08/7854.jpg" },
  "/lakossagi/backup-aramszuneti-megoldasok/": { type: "image", src: RESIDENTIAL_STORAGE },
  "/lakossagi/szigetuzemu-napelemes-rendszer/": { type: "image", src: RESIDENTIAL_STORAGE },
  "/lakossagi/szerviz-karbantartas/": { type: "image", src: SERVICE },
  "/lakossagi/palyazatok-tamogatasok/": { type: "image", src: GRANTS },

  "/vallalati/napelem/": { type: "image", src: COMMERCIAL },
  "/vallalati/napelem-energiatarolassal/": { type: "image", src: COMMERCIAL_STORAGE },
  "/vallalati/meglevo-rendszer-bovitese-energiataroloval/": { type: "image", src: COMMERCIAL_STORAGE },
  "/vallalati/energetikai-optimalizacio-om/": { type: "image", src: COMMERCIAL },
  "/vallalati/ppa-finanszirozott-projektek/": { type: "image", src: SOLAR_PARK },
  "/vallalati/szerviz-tavfelugyelet/": { type: "video", src: SERVICE_VIDEO, poster: SERVICE },
  "/vallalati/palyazatok-tamogatasok/": { type: "image", src: GRANTS },

  "/ipari/naperomuvek/": { type: "image", src: SOLAR_PARK },
  "/ipari/bess-ipari-energiatarolas/": { type: "image", src: COMMERCIAL_STORAGE },
  "/ipari/standalone-energiatarolas/": { type: "image", src: COMMERCIAL_STORAGE },
  "/ipari/pv-storage/": { type: "image", src: SOLAR_PARK },
  "/ipari/aggregacio-flexibilitas/": { type: "image", src: SOLAR_PARK },

  "/referenciak/lakossagi/": { type: "image", src: "/wp-content/uploads/2022/08/Paty-napelem-scaled.jpg" },
  "/referenciak/energiatarolas/": { type: "image", src: RESIDENTIAL_STORAGE },
  "/referenciak/backup/": { type: "image", src: "/wp-content/uploads/2025/08/backup-teljes-hazas.jpg" },
  "/referenciak/vallalati/": { type: "image", src: "/wp-content/uploads/2025/03/BOGWOOD-Kft-scaled.jpg" },
  "/referenciak/bess-ipari/": { type: "image", src: COMMERCIAL_STORAGE },
  "/referenciak/naperomu/": { type: "image", src: SOLAR_PARK },

  "/technologiak/deye/": { type: "image", src: RESIDENTIAL_STORAGE },
  "/technologiak/huawei/": { type: "image", src: "/wp-content/uploads/2026/01/HUAWEI.png" },
  "/technologiak/sigenergy/": { type: "image", src: "/wp-content/uploads/2026/01/sigenergy_vs_fox_ess_akkumulator_melyik_a_legjobb_valasztas_2026-1536x1000.png" },
  "/technologiak/foxess/": { type: "image", src: COMMERCIAL_STORAGE },

  "/cikkek/": { type: "image", src: "/wp-content/uploads/2026/02/tudastar_blog-3.png" },
  "/kapcsolat/": { type: "image", src: COMPANY },
};

export const getV3HeroMedia = (path: string): V3HeroMedia => (
  mediaByPath[path] ?? { type: "image", src: COMPANY }
);
