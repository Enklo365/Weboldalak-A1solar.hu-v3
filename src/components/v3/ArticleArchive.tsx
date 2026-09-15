"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { PostCard } from "@/lib/content";

const FALLBACK = "/wp-content/uploads/2022/08/Esztergom-napelem-scaled-blog1024.jpg";

const ArticleCard = ({ post }: { post: PostCard }) => (
  <Link className="v3-article-card" href={`/${post.slug}/`}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={post.cover || FALLBACK} alt="" loading="lazy" />
    <span className="v3-article-card__body">
      <span className="v3-article-card__meta">{post.category} · {post.dateDisplay}</span>
      <strong>{post.title}</strong>
      <span>{post.excerpt}</span>
    </span>
  </Link>
);

export const FeaturedArticles = ({ posts }: { posts: PostCard[] }) => (
  <div className="v3-article-grid">{posts.slice(0, 3).map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
);

export const ArticleArchive = ({ posts }: { posts: PostCard[] }) => {
  const categories = ["Összes", ...Array.from(new Set(posts.map((post) => post.category))).slice(0, 8)];
  const [active, setActive] = useState("Összes");
  const [visible, setVisible] = useState(12);
  const filtered = useMemo(() => active === "Összes" ? posts : posts.filter((post) => post.category === active), [active, posts]);
  return (
    <div className="v3-archive">
      <div className="v3-filter" aria-label="Cikk-kategóriák">
        {categories.map((category) => <button key={category} type="button" className={active === category ? "is-active" : ""} onClick={() => { setActive(category); setVisible(12); }}>{category}</button>)}
      </div>
      <div className="v3-article-grid">{filtered.slice(0, visible).map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
      {visible < filtered.length ? <button className="btn btn-outline" type="button" onClick={() => setVisible((value) => value + 12)}>További cikkek</button> : null}
    </div>
  );
};
