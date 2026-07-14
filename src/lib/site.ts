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
