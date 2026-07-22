import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
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
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
