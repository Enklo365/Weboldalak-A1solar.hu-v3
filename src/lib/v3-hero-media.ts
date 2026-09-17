import { heroMediaByPath } from "@/lib/v3-curated-media";

export type V3HeroMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
  position?: string;
};

const fallback: V3HeroMedia = {
  type: "image",
  src: "/media/v3/images/a1-solar-team-vineyard.webp",
  position: "center",
};

export const getV3HeroMedia = (path: string): V3HeroMedia => {
  const media = heroMediaByPath[path];
  if (!media) return fallback;
  return {
    type: media.type,
    src: media.src,
    poster: media.poster,
    position: media.position,
  };
};
