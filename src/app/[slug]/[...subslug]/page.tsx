import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CopydeckPage } from "@/components/v3/CopydeckPage";
import { getV3Page, V3_PAGES } from "@/lib/v3-pages";

type Params = { slug: string; subslug: string[] };
const pathFor = ({ slug, subslug }: Params) => `/${[slug, ...subslug].join("/")}/`;

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return V3_PAGES
    .map((page) => new URL(page.url, "https://a1solar.hu").pathname.split("/").filter(Boolean))
    .filter((parts) => parts.length > 1)
    .map(([slug, ...subslug]) => ({ slug, subslug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const page = getV3Page(pathFor(await params));
  if (!page) return {};
  return {
    title: { absolute: page.seoTitle },
    description: page.metaDescription,
    alternates: { canonical: new URL(page.url, "https://a1solar.hu").pathname },
    openGraph: { title: page.seoTitle, description: page.metaDescription },
  };
}

export default async function V3NestedPage({ params }: { params: Promise<Params> }) {
  const page = getV3Page(pathFor(await params));
  if (!page) notFound();
  return <CopydeckPage page={page} />;
}
