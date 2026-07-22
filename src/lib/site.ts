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

export type NavChild = { href: string; label: string; external?: boolean };
export type NavEntry = {
  href: string;
  label: string;
  external?: boolean;
  children?: NavChild[];
};

const OEP_PDF =
  "/wp-content/uploads/2026/06/A1_Solar_Ajanlat_otthoni_energiatarolas_vegleges-0529.pdf";

export const MAIN_NAV: NavEntry[] = [
  {
    href: "/cegunkrol",
    label: "Cégünkről",
    children: [{ href: "/karrier", label: "Karrier" }],
  },
  {
    href: "#",
    label: "Szolgáltatásaink",
    children: [
      {
        href: "/lakossagi-napelem-tisztitas-es-karbantartas",
        label: "Lakossági napelem tisztítás és karbantartás",
      },
      {
        href: "/vallalati-napelem-tisztitas-es-karbantartas",
        label: "Vállalati napelem tisztítás és karbantartás",
      },
      { href: "/vallalati-energiatarolas", label: "Vállalati energiatárolás" },
      { href: "/vallalati-napelem", label: "Vállalati napelem" },
      { href: "/lakossagi-napelem", label: "Lakossági napelem" },
      { href: "/palyazatok", label: "Pályázatok" },
      {
        href: "/jedlik-anyos-energetikai-program",
        label: "Jedlik Ányos Energetikai Program",
      },
      {
        href: "/jedlik-anyos-finanszirozasi-segitseg",
        label: "Jedlik Ányos finanszírozási segítség",
      },
    ],
  },
  {
    href: "/lakossagi-energiatarolo-tamogatas",
    label: "Otthoni Energiatároló Program",
    children: [
      { href: OEP_PDF, label: "OEP csomagajánlatok", external: true },
    ],
  },
  { href: "/tudastar-blog", label: "Cikkek" },
  { href: "https://energrosso.hu/", label: "Nagykereskedelem", external: true },
];

/** Mega-menu content, keyed by the MAIN_NAV label it belongs to. */
export type MegaLink = { href: string; label: string; desc: string; icon: string; external?: boolean };
export type MegaGroup = { heading: string; links: MegaLink[] };
export type MegaFeature = { image: string; title: string; text: string; href: string };
export type MegaFooter = { title: string; text: string; ctaLabel: string; ctaHref: string };
export type MegaMenu = { feature: MegaFeature; groups: MegaGroup[]; footer: MegaFooter };

export const MEGA_MENUS: Record<string, MegaMenu> = {
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
          { href: "/lakossagi-napelem", label: "Lakossági napelem", desc: "Otthonod energiájáért.", icon: "panel" },
          { href: "/lakossagi-napelem-tisztitas-es-karbantartas", label: "Tisztítás & karbantartás", desc: "Csúcson a rendszered.", icon: "care" },
        ],
      },
      {
        heading: "Vállalati",
        links: [
          { href: "/vallalati-napelem", label: "Vállalati napelem", desc: "Kevesebb energiaköltség.", icon: "building" },
          { href: "/vallalati-energiatarolas", label: "Energiatárolás", desc: "Tárold a zöld energiát.", icon: "battery" },
          { href: "/vallalati-napelem-tisztitas-es-karbantartas", label: "Tisztítás & karbantartás", desc: "Céges rendszerekhez.", icon: "care" },
        ],
      },
      {
        heading: "Finanszírozás",
        links: [
          { href: "/palyazatok", label: "Pályázatok", desc: "Elérhető támogatások.", icon: "doc" },
          { href: "/jedlik-anyos-energetikai-program", label: "Jedlik Ányos program", desc: "Energetikai pályázat.", icon: "award" },
          { href: "/jedlik-anyos-finanszirozasi-segitseg", label: "Jedlik finanszírozás", desc: "Segítség a hiteledhez.", icon: "coins" },
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
          { href: "/ft1000", label: "Financial Times – FT 1000", desc: "Európa legdinamikusabbjai.", icon: "trophy" },
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

export const FOOTER_NAV: NavChild[] = [
  { href: "/cegunkrol", label: "Cégünkről" },
  { href: "/szolgaltatasaink", label: "Szolgáltatásaink" },
  { href: "/palyazatok", label: "Pályázatok" },
  { href: "/karrier", label: "Karrier" },
  { href: "/tudastar-blog", label: "Tudástár" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export const FOOTER_SERVICES: NavChild[] = [
  { href: "/vallalati-napelem", label: "Vállalati napelem" },
  { href: "/lakossagi-napelem", label: "Lakossági napelem" },
  { href: "/palyazatok", label: "Pályázatok" },
  { href: "/kepzeseink", label: "Képzések" },
];

export const FOOTER_USEFUL: NavChild[] = [
  { href: "/palyazatok", label: "Aktuális pályázatok" },
  {
    href: "/panelmosas-karbantartas-aszf",
    label: "Panelmosás-karbantartás ÁSZF",
  },
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
];
