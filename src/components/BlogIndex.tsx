"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { NotchHero } from "@/components/page/NotchHero";
import { HeroDivider, SidebarLayout } from "@/components/service/SidebarLayout";
import { SupportWidget } from "@/components/service/SupportWidget";
import type { PostCard } from "@/lib/content";

type BlogIndexProps = {
  posts: PostCard[];
  categories: string[];
};

const PAGE_SIZE = 12;
const ALL = "Összes";

/**
 * Fallback cover images (real A1 Solar installs) for posts with no image.
 * All are ~16:9 so object-cover frames them identically across cards.
 */
const FALLBACK_COVERS = [
  "/wp-content/uploads/2022/08/Esztergom-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/Paty-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/Pecel-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/Rad-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/szuha-napelem-scaled.jpg",
  "/wp-content/uploads/2022/08/budapest-3-napelem.jpg",
];

/** Stable cover for a post: its own first image, else a slug-hashed fallback. */
const coverFor = (post: PostCard): string => {
  if (post.cover) return post.cover;
  let hash = 0;
  for (let i = 0; i < post.slug.length; i += 1) hash = (hash + post.slug.charCodeAt(i)) % FALLBACK_COVERS.length;
  return FALLBACK_COVERS[hash];
};

/** Article card matching the homepage "Híreink" cards. */
const Card = ({ post, index }: { post: PostCard; index: number }) => (
  <Link href={`/${post.slug}`} className="blog-card-in group flex" style={{ animationDelay: `${index * 45}ms` }}>
    {/* Inner clip wrapper on its own compositing layer (translateZ) so Chrome
        renders the rounded corners without a faint antialiased seam. */}
    <div
      className="flex w-full flex-col overflow-hidden rounded-[20px] bg-[var(--surface-3)]"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={coverFor(post)}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="notch-badge">
          <span className="notch-badge-pill">{post.category}</span>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg leading-snug text-[var(--ink)]" style={{ fontWeight: 500 }}>
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">{post.excerpt}</p>
        <span className="post-meta mt-4">{post.dateDisplay}</span>
      </div>
    </div>
  </Link>
);

export const BlogIndex = ({ posts, categories }: BlogIndexProps) => {
  const [active, setActive] = useState<string>(ALL);
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (active === ALL ? posts : posts.filter((p) => p.category === active)),
    [active, posts]
  );

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const slice = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const chips = [ALL, ...categories];

  const scrollToTop = () => {
    const el = topRef.current;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const onCategory = (c: string) => {
    setActive(c);
    setPage(1);
    scrollToTop();
  };

  const onPage = (n: number) => {
    setPage(n);
    scrollToTop();
  };

  const sidebar = (
    <>
      <nav className="rounded-[20px] p-6" style={{ background: "var(--surface-3)" }} aria-label="Kategóriák">
        <div className="text-[13px] font-semibold uppercase tracking-[1px] text-[var(--ink-muted)]">Kategóriák</div>
        <ul className="mt-4 flex flex-col gap-1">
          {chips.map((c) => {
            const isActive = c === active;
            return (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => onCategory(c)}
                  aria-current={isActive ? "true" : undefined}
                  className="flex w-full items-center gap-3 rounded-[10px] px-3 py-2 text-left text-sm transition-colors"
                  style={isActive ? { background: "#fff", color: "var(--brand)", fontWeight: 600 } : { color: "var(--ink-soft)" }}
                >
                  <span
                    className="h-1.5 w-1.5 flex-none rounded-full"
                    style={{ background: isActive ? "var(--brand)" : "var(--ink-muted)" }}
                  />
                  {c}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <SupportWidget />
    </>
  );

  return (
    <div className="pb-6 md:pb-8">
      <NotchHero
        eyebrow="Híreink"
        titleStrong="Legfrissebb cikkeink"
        image="/wp-content/uploads/2025/08/8024.jpg"
        imageAlt="A1 Solar hírek"
        intro="Hasznos tudnivalók napelemről, energiatárolásról, pályázatokról és a megújuló energia világáról."
      />

      <HeroDivider />

      <SidebarLayout sidebar={sidebar}>
        <div ref={topRef} style={{ scrollMarginTop: "100px" }}>
          {/* key → remount on filter/page change so the entrance animation replays */}
          <div key={`${active}-${current}`} className="post-grid post-grid--sidebar">
            {slice.map((p, i) => (
              <Card key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>

        {pages > 1 ? (
          <div className="pager">
            {current > 1 ? (
              <a onClick={() => onPage(current - 1)} role="button" tabIndex={0}>
                ‹
              </a>
            ) : null}
            {Array.from({ length: pages }, (_, i) => i + 1)
              .filter((n) => n === 1 || n === pages || (n >= current - 1 && n <= current + 1))
              .map((n, idx, arr) => (
                <span key={n} style={{ display: "contents" }}>
                  {idx > 0 && n - arr[idx - 1] > 1 ? <span>…</span> : null}
                  {n === current ? (
                    <span className="current">{n}</span>
                  ) : (
                    <a onClick={() => onPage(n)} role="button" tabIndex={0}>
                      {n}
                    </a>
                  )}
                </span>
              ))}
            {current < pages ? (
              <a onClick={() => onPage(current + 1)} role="button" tabIndex={0}>
                ›
              </a>
            ) : null}
          </div>
        ) : null}
      </SidebarLayout>
    </div>
  );
};
