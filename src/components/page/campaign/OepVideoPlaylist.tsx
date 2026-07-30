"use client";

import { useState } from "react";

type PlaylistVideo = { id: string; title: string };

const PLAYLIST_ID = "PLq0O3JGSosnaGtyIHSxpuC6c_BKALmMBf";

/** Real videos of the A1 Solar "Otthoni Energiatároló Program" YouTube playlist. */
const VIDEOS: PlaylistVideo[] = [
  { id: "QdHKaDdU-7Q", title: "Otthoni Energiatároló Program - Bővebben a backup funkcióról" },
  { id: "KOr6kHyYtYo", title: "Beszélgetés a Fox ESS termékeiről" },
  { id: "KY9szBYnKNI", title: "Mit kell megcsinálnod most, hogy biztosan készen állj az Otthoni Energiatároló Program 2. ütemére?" },
  { id: "Qk6zTkxL5SM", title: "Deye termékbemutató webinárium 02.12. – Otthoni Energiatároló Programhoz" },
  { id: "ZKmRQF-jdiI", title: "Huawei termékbemutató webinárium 02.12. – Otthoni Energiatároló Programhoz" },
  { id: "bJmgGtlM0GQ", title: "Sigenergy hybrid inverter és akkumulátor unboxing" },
  { id: "sYqcPJGA0j4", title: "Otthoni Energiatároló Program – teendők a pályázat benyújtása után" },
  { id: "BA3C7xvVI2U", title: "Deye termékbemutató webinárium – Otthoni Energiatároló Programhoz" },
  { id: "srm9lZnI1wk", title: "Huawei termékbemutató webinárium – Otthoni Energiatároló Programhoz" },
  { id: "c8zymJ44K-I", title: "Fox ESS termékbemutató webinárium – Otthoni Energiatároló Programhoz" },
  { id: "ayORCJ4zk-8", title: "Sigenergy termékbemutató webinárium – Otthoni Energiatároló Programhoz" },
  { id: "0klKAvUMHyM", title: "Otthoni Energiatároló Program – módosítás 2026.01.29." },
  { id: "P3Qi3THftV8", title: "Otthoni Energiatároló Program - pályázat önálló benyújtása" },
];

/**
 * Tiled video player for the OEP subpage: a large player on the left and a
 * scrollable playlist rail on the right. Selecting a tile swaps the main player
 * (autoplays after the first interaction).
 */
export const OepVideoPlaylist = () => {
  const [activeId, setActiveId] = useState(VIDEOS[0].id);
  const [hasPlayed, setHasPlayed] = useState(false);

  const src = `https://www.youtube-nocookie.com/embed/${activeId}?rel=0${hasPlayed ? "&autoplay=1" : ""}`;

  const onSelect = (id: string) => {
    setHasPlayed(true);
    setActiveId(id);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Main player */}
      <div
        className="relative aspect-video overflow-hidden rounded-[20px]"
        style={{ background: "#000", border: "1px solid var(--line)" }}
      >
        <iframe
          key={activeId}
          src={src}
          title="A1 Solar – Otthoni Energiatároló Program videó"
          className="absolute inset-0 h-full w-full"
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Playlist grid below the player */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="font-semibold text-[var(--ink)]" style={{ fontSize: "15px" }}>
            Lejátszási lista
          </span>
          <span className="text-[var(--ink-muted)]" style={{ fontSize: "13px" }}>
            {VIDEOS.length} videó
          </span>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {VIDEOS.map((video, index) => {
            const isActive = video.id === activeId;
            return (
              <li key={video.id}>
                <button
                  type="button"
                  onClick={() => onSelect(video.id)}
                  aria-current={isActive ? "true" : undefined}
                  className="flex h-full w-full flex-col overflow-hidden rounded-[14px] text-left transition-colors"
                  style={{
                    background: isActive ? "#fff" : "var(--surface-3)",
                    border: isActive ? "1px solid var(--brand)" : "1px solid var(--line)",
                  }}
                >
                  <span className="relative block overflow-hidden" style={{ aspectRatio: "16 / 9", background: "#000" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <span
                      className="absolute inset-0 flex items-center justify-center transition-opacity"
                      style={{ background: "rgba(0,0,0,0.30)", opacity: isActive ? 1 : 0 }}
                    >
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                  <span className="flex flex-1 flex-col gap-1 p-3">
                    <span
                      className="block"
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.35,
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? "var(--brand)" : "var(--ink)",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {video.title}
                    </span>
                    <span className="mt-auto block text-[var(--ink-muted)]" style={{ fontSize: "11px" }}>
                      {index + 1}. videó
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { PLAYLIST_ID };
