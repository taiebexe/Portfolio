"use client";

import { useEffect } from "react";

// Scroll reveals and the word-by-word statement. Without JS (or with reduced
// motion) nothing is hidden: the `js` class on <html> is what arms the CSS.
export function Effects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
      else observer.observe(el);
    }
    document.documentElement.classList.add("js");

    const statement = document.querySelector<HTMLElement>("[data-statement]");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!statement) return;
      const rect = statement.getBoundingClientRect();
      const start = window.innerHeight * 0.9;
      const distance = window.innerHeight * 0.45 + rect.height * 0.6;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / distance));
      statement.style.setProperty("--p", progress.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("js");
    };
  }, []);

  return null;
}
