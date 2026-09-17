"use client";

import Link from "next/link";
import { useState } from "react";
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
  const [visible, setVisible] = useState(12);
  return (
    <div className="v3-archive">
      <div className="v3-archive__main">
        <div className="v3-article-grid">{posts.slice(0, visible).map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
        {visible < posts.length ? <button className="btn btn-outline" type="button" onClick={() => setVisible((value) => value + 12)}>További cikkek</button> : null}
      </div>
      <aside className="v3-article-sidebar" aria-label="Legfrissebb cikkek">
        <span className="v3-article-sidebar__eyebrow">Tudástár</span>
        <h2>Legfrissebb cikkek</h2>
        <div className="v3-article-sidebar__list">
          {posts.slice(0, 6).map((post) => (
            <Link key={post.slug} href={`/${post.slug}/`}>
              <small>{post.category} · {post.dateDisplay}</small>
              <strong>{post.title}</strong>
              <span>Tovább olvasom</span>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};
