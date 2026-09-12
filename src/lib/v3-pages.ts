import pageData from "@/content/v3-pages.generated.json";

export type CopyItem =
  | { kind: "paragraph"; text: string }
  | { kind: "subheading"; text: string }
  | { kind: "bullets"; items: string[] }
  | { kind: "cta"; label: string }
  | { kind: "link"; label: string; href: string; external?: boolean }
  | { kind: "linkList"; links: { label: string; href: string }[]; external?: boolean }
  | { kind: "editorial"; mediaType: string; placement: string; details: string; src?: string; poster?: string; alt?: string }
  | { kind: "note"; text: string };

export type CopySection = { id: string; title: string; items: CopyItem[] };
export type CopyPage = {
  number: number;
  name: string;
  breadcrumb: string;
  url: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: CopyItem[];
  sections: CopySection[];
};

export const V3_PAGES = pageData as CopyPage[];

const normalizePath = (path: string) => {
  const pathname = path.startsWith("http") ? new URL(path).pathname : path;
  if (pathname === "/") return "/";
  return `/${pathname.split("/").filter(Boolean).join("/")}/`;
};

export const V3_PAGE_BY_PATH = Object.fromEntries(
  V3_PAGES.map((page) => [normalizePath(page.url), page]),
) as Record<string, CopyPage>;

export const getV3Page = (path: string) => V3_PAGE_BY_PATH[normalizePath(path)];

export const getV3Layout = (page: CopyPage): "service" | "narrative" | "listing" => {
  const path = normalizePath(page.url);
  if (
    path.startsWith("/referenciak/") ||
    path === "/cikkek/" ||
    path === "/rolunk/media/" ||
    path === "/rolunk/karrier/"
  ) return "listing";
  if (path === "/" || path.startsWith("/rolunk/") || path === "/kapcsolat/") return "narrative";
  return "service";
};
