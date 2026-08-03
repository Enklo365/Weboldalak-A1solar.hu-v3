import type { MetadataRoute } from "next";
import { SUCCESS_PAGES } from "@/components/page/SuccessPage";
import { getPages, getPosts, RESERVED_SLUGS } from "@/lib/content";
import { SITE } from "@/lib/site";

/**
 * XML sitemap for the native site. Lists the home + blog index + every page and
 * post slug, but EXCLUDES confirmation ("sikeres…") pages (they are noindex) and
 * reserved routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = new Set<string>();
  for (const p of getPages()) if (!RESERVED_SLUGS.has(p.slug) && !SUCCESS_PAGES[p.slug]) slugs.add(p.slug);
  for (const p of getPosts()) if (!slugs.has(p.slug) && !SUCCESS_PAGES[p.slug]) slugs.add(p.slug);

  const entries: MetadataRoute.Sitemap = [
    { url: SITE.url, priority: 1 },
    { url: `${SITE.url}/tudastar-blog`, priority: 0.8 },
  ];
  for (const slug of slugs) entries.push({ url: `${SITE.url}/${slug}`, priority: 0.6 });
  return entries;
}
