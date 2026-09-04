import type { ReactNode } from "react";

/** Container-width dashed divider between the hero and the sidebar body. */
export const HeroDivider = () => (
  <div className="container">
    <hr className="my-[44px] md:my-[50px]" style={{ border: 0, borderTop: "1px dashed #ececec" }} />
  </div>
);

/**
 * Two-column body used across the sidebar + notch-hero pages: a fluid main
 * column and a fixed 340px sticky sidebar with a dashed left rule (desktop).
 * Mirrors the service subpage layout.
 *
 * Below `lg` the sidebar drops under the main column; on tablets it lays its
 * widgets out side by side instead of stretching each one across the full
 * content width.
 */
export const SidebarLayout = ({ children, sidebar }: { children: ReactNode; sidebar: ReactNode }) => (
  <div className="container">
    <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-x-0">
      <div className="min-w-0 lg:pr-10">{children}</div>
      <aside className="lg:border-l lg:border-dashed lg:border-[#ececec] lg:pl-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-start lg:grid-cols-1 lg:sticky lg:top-[110px]">{sidebar}</div>
      </aside>
    </div>
  </div>
);
