"use client";

import { useEffect, useState } from "react";

/**
 * Availability indicator for the support widget. Green + pulsing during office
 * hours (weekdays 08:00–16:00), solid red otherwise. Computed on the client and
 * refreshed each minute so it flips at open/close without a reload. Renders red
 * (closed) on first paint to avoid a hydration mismatch, then corrects on mount.
 */
const isOfficeHours = (d: Date) => {
  const day = d.getDay(); // 0 = Sunday … 6 = Saturday
  const hour = d.getHours();
  return day >= 1 && day <= 5 && hour >= 8 && hour < 16;
};

export function SupportStatusDot() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setOpen(isOfficeHours(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      className={`status-dot${open ? " is-open" : " is-closed"}`}
      role="img"
      aria-label={open ? "Ügyfélszolgálat elérhető" : "Ügyfélszolgálat jelenleg zárva"}
    />
  );
}
