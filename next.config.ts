import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
    ].map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
