import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "media-src 'self' blob:",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
  "connect-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  trailingSlash: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      ["/cegunkrol", "/rolunk/cegunkrol/"],
      ["/a1-solar-a-mediaban", "/rolunk/media/"],
      ["/szerviz-garancia", "/rolunk/szerviz-es-garancia/"],
      ["/lakossagi-napelem", "/lakossagi/napelem-energiataroloval/"],
      ["/lakossagi-energiatarolas", "/lakossagi/napelem-energiataroloval/"],
      ["/meglevo-napelem-akkumulatoros-bovitese", "/lakossagi/meglevo-napelem-bovitese-energiataroloval/"],
      ["/hibrid-napelem-backup", "/lakossagi/backup-aramszuneti-megoldasok/"],
      ["/vallalati-energiatarolas", "/vallalati/napelem-energiatarolassal/"],
      ["/energiatarolo-referenciak", "/referenciak/energiatarolas/"],
      ["/deye-inverter-energiatarolas", "/technologiak/deye/"],
      ["/huawei-inverter-energiatarolas", "/technologiak/huawei/"],
      ["/sigenergy-inverter-energiatarolas", "/technologiak/sigenergy/"],
      ["/foxess-inverter-energiatarolas", "/technologiak/foxess/"],
      ["/karrier", "/rolunk/karrier/"],
      ["/tudastar-blog", "/cikkek/"],
      ["/vallalati-napelem", "/vallalati/napelem/"],
      ["/lakossagi-napelem-tisztitas-es-karbantartas", "/lakossagi/szerviz-karbantartas/"],
      ["/ft1000", "/rolunk/cegunkrol/"],
    ].map(([source, destination]) => ({ source, destination, statusCode: 301 as const }));
  },
};

export default nextConfig;
