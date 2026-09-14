"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 520);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      className={`scroll-to-top${visible ? " scroll-to-top--visible" : ""}`}
      aria-label="Ugrás az oldal tetejére"
      title="Ugrás az oldal tetejére"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={21} strokeWidth={2} aria-hidden="true" />
    </button>
  );
};
