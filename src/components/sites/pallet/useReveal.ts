"use client";

import { useEffect } from "react";

/**
 * Adds `is-visible` to every `[data-reveal]` element once it enters the
 * viewport, which is what starts the CSS transition declared in globals.css.
 *
 * The site reveals once and then leaves the element alone, so each node is
 * unobserved after it fires. Elements already on screen at mount get the class
 * immediately, so nothing sits invisible if the observer never runs.
 */
export function useReveal(rootMargin = "0px 0px -12% 0px") {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (nodes.length === 0) return;

    if (typeof IntersectionObserver === "undefined") return;

    // Opt in to the hidden start state only now that we can guarantee something
    // will reveal it again.
    const root = document.documentElement;
    root.classList.add("pl-js");

    // Anything already on screen reveals on the next frame rather than waiting
    // for a scroll that may never come.
    requestAnimationFrame(() => {
      nodes.forEach((n) => {
        const r = n.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) n.classList.add("is-visible");
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin, threshold: 0.05 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => {
      observer.disconnect();
      root.classList.remove("pl-js");
    };
  }, [rootMargin]);
}
