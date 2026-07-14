"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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

  return (
    <div className="blog-wrap">
      <div className="container">
        <div className="blog-header">
          <span className="post-cat">Tudástár &amp; Blog</span>
          <h1>Legfrissebb cikkeink</h1>
          <p style={{ color: "var(--ink-soft)" }}>
            Hasznos tudnivalók napelemről, energiatárolásról, pályázatokról és a
            megújuló energia világáról.
          </p>
        </div>

        <div className="cat-filter">
          {chips.map((c) => (
            <button
              key={c}
              type="button"
              className={`cat-chip${c === active ? " active" : ""}`}
              onClick={() => {
                setActive(c);
                setPage(1);
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="post-grid">
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
              .filter(
                (n) =>
                  n === 1 ||
                  n === pages ||
                  (n >= current - 1 && n <= current + 1)
              )
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
      </div>
    </div>
  );
};
