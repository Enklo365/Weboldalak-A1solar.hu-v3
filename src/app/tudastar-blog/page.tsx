import type { Metadata } from "next";
import { BlogIndex } from "@/components/BlogIndex";
import { getCategories, getPosts, postCard } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tudástár & Blog",
  description:
    "Hasznos tudnivalók napelemről, energiatárolásról, pályázatokról és a megújuló energia világáról az A1 Solar szakértőitől.",
  alternates: { canonical: "/tudastar-blog" },
};

export default function BlogPage() {
  const posts = getPosts().map(postCard);
  const categories = getCategories();
  return <BlogIndex posts={posts} categories={categories} />;
}
