"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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

const Card = ({ post }: { post: PostCard }) => (
  <Link className="post-card" href={`/${post.slug}`}>
    <div className="post-card-media">
      {post.cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.cover} alt={post.title} loading="lazy" />
      ) : null}
    </div>
    <div className="post-card-body">
      <span className="post-cat">{post.category}</span>
      <h3>{post.title}</h3>
      <span className="post-meta">{post.dateDisplay}</span>
    </div>
  </Link>
);

export const BlogIndex = ({ posts, categories }: BlogIndexProps) => {
  const [active, setActive] = useState<string>(ALL);
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (active === ALL ? posts : posts.filter((p) => p.category === active)),
    [active, posts]
  );

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const slice = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const chips = [ALL, ...categories];

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
                  onClick={() => {
                    setActive(c);
                    setPage(1);
                  }}
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
        <div className="post-grid post-grid--sidebar">
          {slice.map((p) => (
            <Card key={p.slug} post={p} />
          ))}
        </div>

        {pages > 1 ? (
          <div className="pager">
            {current > 1 ? (
              <a onClick={() => setPage(current - 1)} role="button" tabIndex={0}>
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
                    <a onClick={() => setPage(n)} role="button" tabIndex={0}>
                      {n}
                    </a>
                  )}
                </span>
              ))}
            {current < pages ? (
              <a onClick={() => setPage(current + 1)} role="button" tabIndex={0}>
                ›
              </a>
            ) : null}
          </div>
        ) : null}
      </SidebarLayout>
    </div>
  );
};
