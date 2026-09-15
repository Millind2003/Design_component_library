"use client";

import { useEffect } from "react";

/**
 * The grid width is `min(100vw - scrollbar, 1440px)`. `100vw` includes the
 * classic scrollbar, so without this the 32 columns overflow by its width and
 * the page scrolls sideways. The original site sets the same variable at
 * runtime; this mirrors it.
 */
export function ScrollbarWidth() {
  useEffect(() => {
    const set = () => {
      const width = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty(
        "--mv-scrollbar-width",
        `${Math.max(0, width)}px`,
      );
    };

    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  return null;
}
