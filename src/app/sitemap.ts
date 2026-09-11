import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/content";
import { FOOTER_LEGAL, SITE } from "@/lib/site";
import { V3_PAGES } from "@/lib/v3-pages";

/**
 * The v3 sitemap contains the 35 approved copy-deck pages, unchanged article
 * URLs and retained legal documents. Legacy and confirmation pages stay out.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = V3_PAGES.map((page) => ({
    url: page.number === 1 ? SITE.url : new URL(page.url, SITE.url).toString(),
    priority: page.number === 1 ? 1 : page.number === 34 ? 0.8 : 0.7,
  }));
  const seen = new Set(entries.map((entry) => entry.url.replace(/\/$/, "")));
  for (const post of getPosts()) {
    const url = `${SITE.url}/${post.slug}`;
    if (!seen.has(url)) entries.push({ url, lastModified: post.date, priority: 0.6 });
  }
  for (const legal of FOOTER_LEGAL) {
    if (legal.external) continue;
    const url = `${SITE.url}${legal.href}`;
    if (!seen.has(url)) entries.push({ url, priority: 0.3 });
  }
  return entries;
}
