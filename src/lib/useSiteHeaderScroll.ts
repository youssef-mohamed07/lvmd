"use client";

import { useEffect, useState } from "react";

const TOP_THRESHOLD = 8;
const SCROLL_DELTA = 6;

export function useSiteHeaderScroll(menuOpen = false) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const nextScrolled = y > TOP_THRESHOLD;

      if (menuOpen || reducedMotion) {
        setScrolled(nextScrolled);
        setHidden(false);
        lastY = y;
        return;
      }

      if (y <= TOP_THRESHOLD) {
        setScrolled(false);
        setHidden(false);
      } else {
        setScrolled(true);
        const delta = y - lastY;
        if (delta > SCROLL_DELTA) setHidden(true);
        else if (delta < -SCROLL_DELTA) setHidden(false);
      }

      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return { scrolled, hidden };
}
