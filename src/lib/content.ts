/**
 * Content layer — reads the WordPress export (migrated to JSON under /content)
 * and exposes typed accessors + an HTML processor that rewrites legacy
 * a1solar.hu URLs to local paths and normalises WordPress shortcodes.
 *
 * Server-only (uses fs). Import from server components / route handlers.
 */
import fs from "node:fs";
import path from "node:path";

export type WpPage = {
  title: string;
  slug: string;
  status: string;
  date: string;
  excerpt: string;
  content: string;
  link: string;
  parent: string;
  id: string;
  categories: string[];
};

export type WpPost = WpPage;

const CONTENT_DIR = path.join(process.cwd(), "content");

function readJson<T>(file: string): T {
  return JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8")) as T;
}

// Cache across requests within a single server process / build.
let _pages: WpPage[] | null = null;
let _posts: WpPost[] | null = null;
let _cats: string[] | null = null;

export function getPages(): WpPage[] {
  _pages ??= readJson<WpPage[]>("pages.json");
  return _pages;
}
export function getPosts(): WpPost[] {
  if (!_posts) {
    const posts = readJson<WpPost[]>("posts.json");
    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    _posts = posts;
  }
  return _posts;
}
export function getCategories(): string[] {
  _cats ??= readJson<string[]>("categories.json");
  return _cats;
}

export function getPage(slug: string): WpPage | undefined {
  return getPages().find((p) => p.slug === slug);
}
export function getPost(slug: string): WpPost | undefined {
  return getPosts().find((p) => p.slug === slug);
}

/** Slugs handled by dedicated routes, excluded from the generic [slug] route. */
export const RESERVED_SLUGS = new Set(["kezdolap", "tudastar-blog"]);

/** Slug is a page (takes precedence over a same-slug post, e.g. `ft1000`). */
export function isPageSlug(slug: string): boolean {
  return Boolean(getPage(slug));
}

// ----------------------------------------------------------------------------
// HTML processing
// ----------------------------------------------------------------------------

const LEGACY_HOST = /https?:\/\/(www\.)?a1solar\.hu/gi;

/** Turn `[caption ...]<img>… text[/caption]` into a semantic <figure>. */
function normaliseCaptions(html: string): string {
  return html.replace(
    /\[caption[^\]]*\]([\s\S]*?)\[\/caption\]/gi,
    (_m, inner: string) => {
      const imgMatch = inner.match(/<img[^>]*>/i);
      const img = imgMatch ? imgMatch[0] : "";
      const caption = inner.replace(/<img[^>]*>/i, "").trim();
      return `<figure>${img}${
        caption ? `<figcaption>${caption}</figcaption>` : ""
      }</figure>`;
    }
  );
}

/**
 * Replace interactive WordPress shortcodes with branded embed placeholders.
 * The real calculators/forms are backend-driven; we surface a clear CTA.
 *
 * TO-DO - BACKEND / FEATURE IMPLEMENTATION
 * ========================================
 * * [lakossagi_napelem_kalkulator] / [vallalati_napelem_kalkulator]
 *     → interactive savings calculator (lead capture).
 * * [fluentform id=".."] / [a1ku_form] → lead / eligibility forms.
 * * [trustindex ..] → Google reviews widget (external script).
 * Until implemented, these render as a CTA embed pointing at /kapcsolat.
 */
function normaliseShortcodes(html: string): string {
  let out = html;

  // Reviews widget — drop (external Trustindex script, not migrated).
  out = out.replace(/\[trustindex[^\]]*\]/gi, "");

  // Calculators & lead forms → branded embed with CTA.
  const embed = (title: string, note: string) =>
    `<div class="shortcode-embed" data-embed>
       <div class="shortcode-embed__inner">
         <span class="shortcode-embed__eyebrow">A1 Solar</span>
         <h3>${title}</h3>
         <p>${note}</p>
         <a class="btn btn-primary" href="/kapcsolat">Ajánlatkérés &amp; kapcsolat</a>
       </div>
     </div>`;

  out = out.replace(
    /\[lakossagi_napelem_kalkulator[^\]]*\]/gi,
    embed(
      "Lakossági napelem kalkulátor",
      "Számítsa ki, mennyit spórolhat egy lakossági napelemes rendszerrel — munkatársaink személyre szabott ajánlatot készítenek."
    )
  );
  out = out.replace(
    /\[vallalati_napelem_kalkulator[^\]]*\]/gi,
    embed(
      "Vállalati napelem kalkulátor",
      "Kérjen céges energetikai felmérést és megtérülési számítást szakértő kollégáinktól."
    )
  );
  out = out.replace(
    /\[fluentform[^\]]*\]/gi,
    embed(
      "Jelentkezés & előszűrő",
      "Töltse ki jelentkezését, és munkatársunk hamarosan felveszi Önnel a kapcsolatot."
    )
  );
  out = out.replace(
    /\[a1ku_form[^\]]*\]/gi,
    embed(
      "Kapcsolatfelvétel",
      "Hagyja meg elérhetőségét, és kollégáink visszahívják."
    )
  );

  // Strip any remaining unknown shortcodes to avoid raw brackets in output.
  out = out.replace(/\[\/?[a-z][a-z0-9_-]*(?:[^\]]*)?\]/gi, "");
  return out;
}

/** Strip Gutenberg block HTML comments. */
function stripBlockComments(html: string): string {
  return html.replace(/<!--\s*\/?wp:[\s\S]*?-->/gi, "");
}

/**
 * Rewrite legacy absolute a1solar.hu URLs.
 *  - /wp-content/uploads/… → kept as local absolute path (assets are in /public)
 *  - internal page links     → site-relative paths
 */
function rewriteUrls(html: string): string {
  return html.replace(LEGACY_HOST, "");
}

/** Full processing pipeline for page/post body HTML. */
export function processHtml(html: string): string {
  if (!html) return "";
  let out = stripBlockComments(html);
  out = normaliseCaptions(out);
  out = normaliseShortcodes(out);
  out = rewriteUrls(out);
  return out.trim();
}

// ----------------------------------------------------------------------------
// Post helpers (excerpt + cover image derived from content)
// ----------------------------------------------------------------------------

export function firstImage(html: string): string | null {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (!m) return null;
  return m[1].replace(LEGACY_HOST, "");
}

export function plainExcerpt(html: string, max = 160): string {
  const text = stripBlockComments(html)
    .replace(/\[[^\]]*\]/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max).replace(/\s+\S*$/, "")}…`;
}

export function formatDate(iso: string): string {
  // iso like "2020-08-11 06:07:53"
  const d = new Date(iso.replace(" ", "T"));
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

export type PostCard = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateDisplay: string;
  cover: string | null;
  excerpt: string;
};

export function postCard(p: WpPost): PostCard {
  return {
    slug: p.slug,
    title: p.title,
    category: p.categories[0] ?? "Hírek",
    date: p.date,
    dateDisplay: formatDate(p.date),
    cover: firstImage(p.content),
    excerpt: p.excerpt.trim()
      ? plainExcerpt(p.excerpt)
      : plainExcerpt(p.content),
  };
}
