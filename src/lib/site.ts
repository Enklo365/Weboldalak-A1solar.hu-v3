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
    facebook: "https://www.facebook.com/a1solarhungary",
    youtube: "https://www.youtube.com/@a1solar",
    linkedin: "https://www.linkedin.com/company/a1-solar-kft/",
    instagram: "https://www.instagram.com/a1solar.hu/",
  },
} as const;

export type NavChild = { href: string; label: string; external?: boolean };
export type NavEntry = {
  href: string;
  label: string;
  external?: boolean;
  children?: NavChild[];
};

export const MAIN_NAV: NavEntry[] = [
  { href: "/cegunkrol", label: "Cégünkről" },
  {
    href: "#",
    label: "Szolgáltatásaink",
    children: [
      { href: "/lakossagi-napelem", label: "Lakossági napelem" },
      { href: "/vallalati-napelem", label: "Vállalati napelem" },
      { href: "/vallalati-energiatarolas", label: "Vállalati energiatárolás" },
      {
        href: "/lakossagi-napelem-tisztitas-es-karbantartas",
        label: "Lakossági napelem tisztítás és karbantartás",
      },
      {
        href: "/vallalati-napelem-tisztitas-es-karbantartas",
        label: "Vállalati napelem tisztítás és karbantartás",
      },
      { href: "/palyazatok", label: "Pályázatok" },
      { href: "/kepzeseink", label: "Képzéseink" },
      { href: "/karrier", label: "Karrier" },
    ],
  },
  {
    href: "/lakossagi-energiatarolo-tamogatas",
    label: "Otthoni Energiatároló Program",
  },
  { href: "/tudastar-blog", label: "Cikkek" },
  { href: "https://energrosso.hu/", label: "Nagykereskedelem", external: true },
];

export const FOOTER_NAV: NavChild[] = [
  { href: "/cegunkrol", label: "Cégünkről" },
  { href: "/lakossagi-napelem", label: "Lakossági napelem" },
  { href: "/vallalati-napelem", label: "Vállalati napelem" },
  { href: "/palyazatok", label: "Pályázatok" },
  { href: "/karrier", label: "Karrier" },
  { href: "/tudastar-blog", label: "Tudástár & Blog" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export const FOOTER_SERVICES: NavChild[] = [
  { href: "/vallalati-napelem", label: "Vállalati napelem" },
  { href: "/lakossagi-napelem", label: "Lakossági napelem" },
  {
    href: "/lakossagi-energiatarolo-tamogatas",
    label: "Otthoni Energiatároló Program",
  },
  { href: "/vallalati-energiatarolas", label: "Vállalati energiatárolás" },
  { href: "/kepzeseink", label: "Képzéseink" },
];

export const FOOTER_USEFUL: NavChild[] = [
  { href: "/palyazatok", label: "Aktuális pályázatok" },
  { href: "/napenergia-plusz-program", label: "Napenergia Plusz Program" },
  {
    href: "/panelmosas-karbantartas-aszf",
    label: "Panelmosás-karbantartás ÁSZF",
  },
];

export const FOOTER_LEGAL: NavChild[] = [
  { href: "/adatvedelmi-nyilatkozat", label: "Adatvédelmi nyilatkozat" },
  { href: "/cookie-nyilatkozat", label: "Cookie nyilatkozat" },
  { href: "/aszf", label: "ÁSZF" },
  {
    href: "/lakossagi-napelemes-rendszerek-tamogatasa-promocios-szabalyzat",
    label: "Promóciós szabályzat",
  },
];
