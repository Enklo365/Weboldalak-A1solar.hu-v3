import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_ORIGIN = "https://a1solar.hu";
const OUTPUT_DIR = path.join(process.cwd(), "docs", "migration");
const SNAPSHOT_DATE = process.argv[2] ?? new Date().toISOString().slice(0, 10);

const escapeCsv = (value) => `"${String(value).replaceAll('"', '""')}"`;

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; A1SolarMigration/1.0)" },
  });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.text();
}

function sitemapUrls(xml) {
  return [...xml.matchAll(/<loc>(https:\/\/a1solar\.hu\/[^<]*)<\/loc>/g)]
    .map((match) => match[1])
    .filter((url) => !url.includes("/wp-content/"));
}

async function main() {
  const [indexXml, pageXml, postXml] = await Promise.all([
    fetchText(`${SITE_ORIGIN}/sitemap_index.xml`),
    fetchText(`${SITE_ORIGIN}/page-sitemap.xml`),
    fetchText(`${SITE_ORIGIN}/post-sitemap.xml`),
  ]);

  const pages = sitemapUrls(pageXml);
  const posts = sitemapUrls(postXml);
  const rows = [
    ["snapshot_date", "type", "url"],
    ...pages.map((url) => [SNAPSHOT_DATE, "page", url]),
    ...posts.map((url) => [SNAPSHOT_DATE, "post", url]),
  ];
  const csv = `${rows.map((row) => row.map(escapeCsv).join(",")).join("\n")}\n`;
  const summary = {
    capturedAt: new Date().toISOString(),
    source: `${SITE_ORIGIN}/sitemap_index.xml`,
    sitemapIndexPresent: indexXml.includes("<sitemapindex"),
    pageUrlCount: pages.length,
    postUrlCount: posts.length,
  };

  await mkdir(OUTPUT_DIR, { recursive: true });
  await Promise.all([
    writeFile(path.join(OUTPUT_DIR, `live-url-inventory-${SNAPSHOT_DATE}.csv`), csv, "utf8"),
    writeFile(
      path.join(OUTPUT_DIR, `live-url-inventory-${SNAPSHOT_DATE}.json`),
      `${JSON.stringify(summary, null, 2)}\n`,
      "utf8",
    ),
  ]);
  console.log(JSON.stringify(summary));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
