"use client";

import { Container } from "../primitives";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--cy-oat-100)] pt-24 pb-12 sm:pt-28 md:pt-32 border-b border-[var(--cy-oat-200)]">
      {/* Top Sculpt Banner */}
      <div className="absolute top-0 inset-x-0 bg-[#2b0827] text-[#fbf6f0] py-2 px-4 z-20 text-xs sm:text-sm font-medium">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-bold tracking-wider uppercase font-cy-mono text-[#ff80bf] text-xs">
                SCULPT
              </span>
              <span className="text-[#f1e6f1] truncate">
                The most creative minds in GTM. October 8, San Francisco
              </span>
            </div>
            <a
              href="https://www.sculpt.clay.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 shrink-0 text-[#ff80bf] hover:text-white transition-colors"
            >
              <span className="font-semibold uppercase text-xs tracking-wider">
                GET TICKETS
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-6 sm:py-10 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-[-0.03em] text-black leading-[1.05] mb-5">
            Go-to-market with Clay
          </h1>
          <p className="text-lg sm:text-xl text-black/70 leading-relaxed max-w-2xl font-normal">
            Our best content on growing your GTM motion, from outbound sales
            automation to AI lead generation.
          </p>
        </div>
      </Container>
    </section>
  );
}
