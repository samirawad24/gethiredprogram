"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Reveals [data-reveal] elements as they come into view, and numbers the
// children of [data-reveal-stagger] rows so they arrive one after another.
//
// The .js-motion class is added pre-paint by the inline script in lib/theme.ts,
// so nothing flashes. If that script never runs, the CSS never hides anything
// and the page is simply static.
export default function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-motion");

    const revealAll = () => {
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.setAttribute("data-revealed", ""));
    };

    // Reduced motion, or a browser without IntersectionObserver: show it all.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      revealAll();
      return;
    }

    // Staggered rows: mark the children, not the row, so each one arrives on
    // its own beat.
    document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((row) => {
      Array.from(row.children).forEach((child, index) => {
        const el = child as HTMLElement;
        el.setAttribute("data-reveal", "");
        el.style.setProperty("--reveal-index", String(index));
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    const targets = document.querySelectorAll("[data-reveal]:not([data-revealed])");
    targets.forEach((el) => observer.observe(el));

    // Safety net: if something goes wrong and nothing has been revealed by the
    // time the page has settled, show the content rather than hide it forever.
    const failsafe = window.setTimeout(() => {
      if (!document.querySelector("[data-reveal][data-revealed]")) revealAll();
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
