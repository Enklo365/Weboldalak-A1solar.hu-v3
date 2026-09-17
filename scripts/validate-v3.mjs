import fs from "node:fs";

const pages = JSON.parse(fs.readFileSync("src/content/v3-pages.generated.json", "utf8"));
const normalize = (value) => {
  const pathname = new URL(value, "https://a1solar.hu").pathname;
  return pathname === "/" ? "/" : `/${pathname.split("/").filter(Boolean).join("/")}/`;
};
const errors = [];
const urls = pages.map((page) => normalize(page.url));

if (pages.length !== 35) errors.push(`Expected 35 pages, found ${pages.length}`);
if (new Set(urls).size !== pages.length) errors.push("Page URLs are not unique");
for (const page of pages) {
  if (!page.h1 || !page.seoTitle || !page.metaDescription) errors.push(`Missing SEO/content fields: ${page.url}`);
  const items = [...page.intro, ...page.sections.flatMap((section) => section.items)];
  if (items.some((item) => item.kind === "note")) errors.push(`Unparsed editor note: ${page.url}`);
}

const redirects = fs.readFileSync("docs/migration/redirect-candidate-map.csv", "utf8").trim().split(/\r?\n/).slice(1);
const confirmed = redirects.filter((row) => row.split(",")[2] === "confirmed");
const retired = redirects.filter((row) => row.split(",")[2] === "retired");
if (confirmed.length !== 18) errors.push(`Expected 18 confirmed redirects, found ${confirmed.length}`);
if (retired.length !== 6) errors.push(`Expected 6 retired URLs, found ${retired.length}`);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(JSON.stringify({
  pages: pages.length,
  uniqueUrls: new Set(urls).size,
  confirmedRedirects: confirmed.length,
  retiredUrls: retired.length,
}));
