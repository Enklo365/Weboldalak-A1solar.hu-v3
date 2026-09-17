import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";
import { serializeJsonLd } from "@/lib/json-ld";
import { SITE } from "@/lib/site";

const overusedGrotesk = localFont({
  src: "../../public/fonts/OverusedGrotesk-VF.woff2",
  variable: "--font-overused",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "A1 Solar – Napelem, energiatárolás és finanszírozás egy helyről",
    template: "%s | A1 Solar",
  },
  description:
    "Több mint tíz év tapasztalattal Magyarország egyik vezető energetikai vállalata. Lakossági és vállalati napelemes rendszerek, energiatárolás, pályázatok és finanszírozás.",
  openGraph: {
    title: "A1 Solar – Napelem és energiatárolás",
    description:
      "Lakossági és vállalati napelemes rendszerek, energiatárolás, pályázatok és finanszírozás egy helyről.",
    type: "website",
    locale: "hu_HU",
    url: SITE.url,
    siteName: SITE.name,
  },
  icons: {
    icon: [{ url: "/images/brand/a1solar-favicon.svg", type: "image/svg+xml" }],
    shortcut: "/images/brand/a1solar-favicon.svg",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/brand/a1solar-logo.svg`,
  email: SITE.email,
  telephone: SITE.phoneDisplay,
  address: { "@type": "PostalAddress", streetAddress: SITE.address, addressCountry: "HU" },
  sameAs: Object.values(SITE.social ?? {}).filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={overusedGrotesk.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
