/**
 * Single source of truth for site-wide constants:
 * contact info, navigation, footer, social links.
 * Mirrors the live a1solar.hu structure.
 */

export const SITE = {
  name: "A1 Solar",
  legalName: "A1 Solar Kft.",
  url: "https://a1solar.hu",
  email: "info@a1solar.hu",
  phone: "+36202985200",
  phoneRaw: "06202985200",
  phoneDisplay: "(+36) 20-298-5200",
  supportHours: "08:00-16:00",
  address: "1222 Budapest, Méz utca 11.",
  social: {
    facebook: "https://www.facebook.com/a1solarkft/",
    youtube: "https://www.youtube.com/@a1solarkft",
    linkedin: "https://hu.linkedin.com/company/a1solarkft",
    instagram: "https://www.instagram.com/a1solarkft/",
  },
} as const;

/** Landing pages get a stripped chrome: minimal header + minimal footer (no nav). */
export const LANDING_PATHS = new Set<string>(["/hibrid-napelem-backup"]);

export type NavChild = { href: string; label: string; external?: boolean };
export type NavEntry = {
  href: string;
  label: string;
  external?: boolean;
  children?: NavChild[];
};

export const MAIN_NAV: NavEntry[] = [
  {
    href: "#",
    label: "Rólunk",
    children: [
      { href: "/rolunk/cegunkrol/", label: "Cégünkről" },
      { href: "/rolunk/media/", label: "A1 Solar a médiában" },
      { href: "/rolunk/szerviz-es-garancia/", label: "Szerviz és garancia" },
      { href: "/rolunk/karrier/", label: "Karrier" },
    ],
  },
  {
    href: "#",
    label: "Lakosságnak",
    children: [
      { href: "/lakossagi/napelem-energiataroloval/", label: "Napelem + energiatároló" },
      { href: "/lakossagi/meglevo-napelem-bovitese-energiataroloval/", label: "Meglévő rendszer bővítése" },
      { href: "/lakossagi/backup-aramszuneti-megoldasok/", label: "Backup megoldások" },
      { href: "/lakossagi/szigetuzemu-napelemes-rendszer/", label: "Szigetüzemű rendszer" },
      { href: "/lakossagi/szerviz-karbantartas/", label: "Szerviz és karbantartás" },
      { href: "/lakossagi/palyazatok-tamogatasok/", label: "Pályázatok és támogatások" },
    ],
  },
  {
    href: "#",
    label: "Cégeknek",
    children: [
      { href: "/vallalati/napelem/", label: "Vállalati napelem" },
      { href: "/vallalati/napelem-energiatarolassal/", label: "Napelem + energiatárolás" },
      { href: "/vallalati/meglevo-rendszer-bovitese-energiataroloval/", label: "Meglévő rendszer bővítése" },
      { href: "/vallalati/energetikai-optimalizacio-om/", label: "Energetikai optimalizáció / O&M" },
      { href: "/vallalati/ppa-finanszirozott-projektek/", label: "Finanszírozott / PPA projektek" },
      { href: "/vallalati/palyazatok-tamogatasok/", label: "Pályázatok és támogatások" },
    ],
  },
  {
    href: "#",
    label: "Ipari projektek",
    children: [
      { href: "/ipari/naperomuvek/", label: "Nagy naperőművek" },
      { href: "/ipari/bess-ipari-energiatarolas/", label: "BESS / ipari energiatárolás" },
      { href: "/ipari/standalone-energiatarolas/", label: "Standalone energiatárolás" },
      { href: "/ipari/pv-storage/", label: "PV + storage" },
      { href: "/ipari/aggregacio-flexibilitas/", label: "Aggregáció / flexibilitás" },
    ],
  },
  {
    href: "#",
    label: "Referenciák",
    children: [
      { href: "/referenciak/lakossagi/", label: "Lakossági" },
      { href: "/referenciak/energiatarolas/", label: "Energiatárolás" },
      { href: "/referenciak/backup/", label: "Backup" },
      { href: "/referenciak/vallalati/", label: "Vállalati" },
    ],
  },
  {
    href: "#",
    label: "Technológiák",
    children: [
      { href: "/technologiak/deye/", label: "Deye" },
      { href: "/technologiak/huawei/", label: "Huawei" },
      { href: "/technologiak/sigenergy/", label: "Sigenergy" },
      { href: "/technologiak/foxess/", label: "FoxESS" },
    ],
  },
  { href: "/cikkek/", label: "Cikkek" },
  { href: "/kapcsolat/", label: "Kapcsolat" },
];

/** Mega-menu content, keyed by the MAIN_NAV label it belongs to. */
export type MegaLink = { href: string; label: string; desc: string; icon: string; external?: boolean };
export type MegaGroup = { heading: string; links: MegaLink[] };
export type MegaFeature = { image: string; title: string; text: string; href: string };
export type MegaFooter = { title: string; text: string; ctaLabel: string; ctaHref: string };
export type MegaMenu = { feature: MegaFeature; groups: MegaGroup[]; footer: MegaFooter };

const LEGACY_MEGA_MENUS: Record<string, MegaMenu> = {
  Szolgáltatásaink: {
    feature: {
      image: "/wp-content/uploads/2026/03/otthoni_energiatarolo_program-1.png",
      title: "Otthoni Energiatároló Program",
      text: "Válaszd kivitelezőnek az A1 Solar-t!",
      href: "/lakossagi-energiatarolo-tamogatas",
    },
    groups: [
      {
        heading: "Lakossági",
        links: [
          { href: "/lakossagi-napelem", label: "Napelem", desc: "Otthonod energiájáért.", icon: "panel" },
          { href: "/lakossagi-energiatarolo-tamogatas", label: "Energiatárolás", desc: "Tárold a zöld energiát.", icon: "battery" },
          { href: "/lakossagi-napelem-tisztitas-es-karbantartas", label: "Tisztítás & karbantartás", desc: "Csúcson a rendszered.", icon: "care" },
        ],
      },
      {
        heading: "Vállalati",
        links: [
          { href: "/vallalati-napelem", label: "Napelem", desc: "Kevesebb energiaköltség.", icon: "panel" },
          { href: "/vallalati-energiatarolas", label: "Energiatárolás", desc: "Tárold a zöld energiát.", icon: "battery" },
          { href: "/vallalati-napelem-tisztitas-es-karbantartas", label: "Tisztítás & karbantartás", desc: "Céges rendszerekhez.", icon: "care" },
        ],
      },
    ],
    footer: {
      title: "Segítsünk eligazodni?",
      text: "Vedd fel velünk a kapcsolatot!",
      ctaLabel: "Kapcsolat",
      ctaHref: "/kapcsolat",
    },
  },
  Finanszírozás: {
    feature: {
      image: "/wp-content/uploads/2025/06/jedlik-anyos-energetikai-program-2-1-1024x667.png",
      title: "Aktuális pályázatok",
      text: "Nézd meg, milyen támogatás illik hozzád!",
      href: "/palyazatok",
    },
    groups: [
      {
        heading: "Pályázatok & támogatások",
        links: [
          { href: "/palyazatok", label: "Pályázatok", desc: "Elérhető támogatások.", icon: "doc" },
          { href: "/lakossagi-energiatarolo-tamogatas", label: "Otthoni Energiatároló Program", desc: "Kiemelt lakossági pályázat.", icon: "battery" },
        ],
      },
      {
        heading: "Részletfizetés & hitel",
        links: [
          { href: "/napelem-energiatarolo-reszletfizetes", label: "Kamatmentes részletfizetés", desc: "Napelem 6 havi, 0% kamattal.", icon: "coins" },
          { href: "/jedlik-anyos-energetikai-program", label: "Jedlik Ányos program", desc: "Energetikai pályázat.", icon: "award" },
          { href: "/jedlik-anyos-finanszirozasi-segitseg", label: "Jedlik finanszírozás", desc: "Segítség a hiteledhez.", icon: "coins" },
        ],
      },
    ],
    footer: {
      title: "Nem tudod, mire vagy jogosult?",
      text: "Töltsd ki a jogosultsági előszűrőt!",
      ctaLabel: "Jogosultsági előszűrő",
      ctaHref: "/jogosultsagi-eloszuro",
    },
  },
  Cégünkről: {
    feature: {
      image: "/wp-content/uploads/2025/07/photo_2025-07-30_10-24-40.jpg",
      title: "Új esélyt adtunk!",
      text: "Átadtuk első napelemes rendszerünket afrikában.",
      href: "/az-a1-solar-zanzibar-ltd-atadta-elso-afrikai-napelemes-rendszeret/",
    },
    groups: [
      {
        heading: "Cégünkről",
        links: [
          { href: "/cegunkrol", label: "Rólunk", desc: "Ismerd meg az A1 Solart.", icon: "info" },
          { href: "/karrier", label: "Karrier", desc: "Csatlakozz a csapatunkhoz.", icon: "career" },
        ],
      },
      {
        heading: "Tudástár & híreink",
        links: [
          { href: "/tudastar-blog", label: "Cikkek", desc: "Friss hírek és tudástár.", icon: "article" },
          { href: "/ft1000", label: "Financial Times", desc: "Európa legdinamikusabbjai.", icon: "trophy" },
        ],
      },
    ],
    footer: {
      title: "Kérdésed van?",
      text: "Írj nekünk egy üzenetet!",
      ctaLabel: "Kapcsolat",
      ctaHref: "/kapcsolat",
    },
  },
};

// KISS: the v3 starts with the Header's existing simple dropdowns. The former
// mega-menu data stays local during the transition but is not exposed to UI.
export const MEGA_MENUS: Record<string, MegaMenu> = {};
void LEGACY_MEGA_MENUS;

export const FOOTER_NAV: NavChild[] = [
  { href: "/rolunk/cegunkrol/", label: "Cégünkről" },
  { href: "/referenciak/lakossagi/", label: "Referenciák" },
  { href: "/rolunk/karrier/", label: "Karrier" },
  { href: "/cikkek/", label: "Cikkek" },
  { href: "/kapcsolat/", label: "Kapcsolat" },
];

export const FOOTER_SERVICES: NavChild[] = [
  { href: "/vallalati-napelem", label: "Vállalati napelem" },
  { href: "/lakossagi-napelem", label: "Lakossági napelem" },
  { href: "/palyazatok", label: "Pályázatok" },
  { href: "/kepzeseink", label: "Képzések" },
];

/** Residential service links — mirrors the header mega-menu "Lakossági" group. */
export const FOOTER_RESIDENTIAL: NavChild[] = [
  { href: "/lakossagi/napelem-energiataroloval/", label: "Napelem + energiatároló" },
  { href: "/lakossagi/backup-aramszuneti-megoldasok/", label: "Backup megoldások" },
  { href: "/lakossagi/szerviz-karbantartas/", label: "Szerviz és karbantartás" },
];

/** Commercial service links — mirrors the header mega-menu "Vállalati" group. */
export const FOOTER_COMMERCIAL: NavChild[] = [
  { href: "/vallalati/napelem/", label: "Napelem" },
  { href: "/vallalati/napelem-energiatarolassal/", label: "Energiatárolás" },
];

const OEP_PDF =
  "/wp-content/uploads/2026/06/A1_Solar_Ajanlat_otthoni_energiatarolas_vegleges-0529.pdf";

export const FOOTER_USEFUL: NavChild[] = [
  { href: "/palyazatok", label: "Aktuális pályázatok" },
  { href: "/lakossagi-energiatarolo-tamogatas", label: "Otthoni Energiatároló Program" },
  { href: OEP_PDF, label: "OEP csomagajánlatok", external: true },
  { href: "https://energrosso.hu/", label: "Nagykereskedelem", external: true },
];

export const FOOTER_LEGAL: NavChild[] = [
  { href: "/adatvedelmi-nyilatkozat", label: "Adatvédelmi nyilatkozat" },
  { href: "/cookie-nyilatkozat", label: "Cookie nyilatkozat" },
  { href: "/aszf", label: "Általános Szerződési Feltételek" },
  {
    href: "/lakossagi-napelemes-rendszerek-tamogatasa-promocios-szabalyzat",
    label: "Promóciós szabályzat",
  },
  { href: "/oepszigeteles", label: "OEP szigetelés" },
  {
    href: "/panelmosas-karbantartas-aszf",
    label: "Panelmosás-karbantartás ÁSZF",
  },
];
