"use client";

import { useState } from "react";
import { nav } from "./data";
import { Wordmark } from "./primitives";

/**
 * Two navs, exactly as the original ships them: a plain sticky 56px bar below
 * 1280px, and above it a grid-aligned bar whose links sit in the `col-[2/32]`
 * span with empty bordered cells either side, so the bar reads as part of the
 * blueprint grid rather than as a floating header.
 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [...nav.links, ...nav.company];

  return (
    <>
      {/* < 1280px */}
      <div className="sticky top-0 left-0 right-0 z-50 flex h-14 items-center border-b border-[var(--mv-gridline)] bg-white px-5 xl:hidden">
        <a href="#top" className="flex shrink-0 items-center transition-opacity hover:opacity-70">
          <Wordmark />
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 ml-auto flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
        >
          <span className="block h-px w-5 bg-black" />
          <span className="block h-px w-5 bg-black" />
        </button>
      </div>

      {open ? (
        <div className="sticky top-14 z-40 border-b border-[var(--mv-gridline)] bg-white px-5 xl:hidden">
          {[...links, nav.demo, nav.cta].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[var(--mv-gridline)] py-3 text-[16px] last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}

      {/* >= 1280px — aligned to the page grid */}
      <div className="sticky top-0 z-50 left-0 right-0 bg-white max-xl:hidden">
        <div className="mv-page-grid mv-page-grid-invisible h-full">
          <div className="col-[1/2] h-full border-l border-[var(--mv-gridline)] bg-white" />

          <div className="col-[2/32] flex h-full items-center border-l border-[var(--mv-gridline)] bg-white px-[calc(var(--mv-cell)*0.25)]">
            <a href="#top" className="flex shrink-0 items-center transition-opacity hover:opacity-70">
              <Wordmark />
            </a>

            <nav className="ml-auto flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2.5 text-[16px] leading-none tracking-[-0.01em] text-black transition-colors hover:text-black/60"
                >
                  {link.label}
                </a>
              ))}

              <div className="flex items-center gap-[calc(var(--mv-cell)*0.25)]">
                <a
                  href={nav.demo.href}
                  className="border border-black/25 px-5 py-1.5 text-[16px] leading-none text-black transition-colors hover:bg-black/5"
                >
                  {nav.demo.label}
                </a>
                <a
                  href={nav.cta.href}
                  className="border border-[var(--mv-blue-dark)] bg-[var(--mv-blue-dark)] px-5 py-1.5 text-[16px] leading-none text-white transition-colors hover:bg-[var(--mv-blue)]"
                >
                  {nav.cta.label}
                </a>
              </div>
            </nav>
          </div>

          <div className="col-[32/33] h-full border-x border-[var(--mv-gridline)] bg-white transition-colors hover:bg-black/5" />
        </div>
      </div>
    </>
  );
}
