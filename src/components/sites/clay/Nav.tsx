"use client";

import { useEffect, useState } from "react";
import { megamenu, nav } from "./data";
import { Button, Container, Wordmark } from "./primitives";
import { cn } from "@/lib/utils";

/**
 * Floating pill nav over the hero. It starts transparent on the dark green and
 * picks up a light surface once the page scrolls past the hero.
 */
export function Nav({
  variant = "dark",
  offsetTop,
}: {
  variant?: "dark" | "light";
  /** Top-positioning classes, for routes that stack a banner above the nav
   *  (the persona pages). Defaults to flush with the top. */
  offsetTop?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = variant === "light" || scrolled;

  return (
    <div
      className={cn("fixed inset-x-0 z-50 pt-4", offsetTop ?? "top-0")}
      onMouseLeave={() => setOpen(null)}
    >
      <Container>
        <div
          className={cn(
            "flex items-center gap-6 rounded-[var(--cy-radius-sm)] px-4 py-2.5 transition-colors duration-300",
            isLight
              ? "bg-[var(--cy-oat-50)]/90 text-black shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-md border border-[var(--cy-oat-300)]"
              : "text-[var(--cy-oat-50)]",
          )}
        >
          <a href="#top" className="shrink-0">
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.links.map((link) => (
              <button
                key={link.label}
                type="button"
                onMouseEnter={() => setOpen(megamenu[link.label] ? link.label : null)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-[0.95rem] transition-colors",
                  isLight ? "hover:bg-black/5" : "hover:bg-white/10",
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <a
              href={nav.login.href}
              className={cn(
                "rounded-md px-3 py-1.5 text-[0.95rem] transition-colors",
                isLight ? "hover:bg-black/5" : "hover:bg-white/10",
              )}
            >
              {nav.login.label}
            </a>
            <Button
              href={nav.demo.href}
              arrow={false}
              variant={isLight ? "secondary" : "outline"}
              className="border"
            >
              {nav.demo.label}
            </Button>
            <Button
              href={nav.cta.href}
              arrow={false}
              variant={isLight ? "dark" : "light"}
            >
              {nav.cta.label}
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobile}
            onClick={() => setMobile((v) => !v)}
            className="ml-auto flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </button>
        </div>

        {/* megamenu */}
        {open && megamenu[open] ? (
          <div className="mt-2 hidden rounded-[var(--cy-radius)] border border-[var(--cy-oat-300)] bg-[var(--cy-oat-50)] p-6 text-black shadow-[0_16px_60px_rgba(0,0,0,0.12)] lg:block">
            <div className="grid grid-cols-4 gap-8">
              {megamenu[open].map((column) => (
                <div key={column.group}>
                  <div className="font-cy-mono text-[0.7rem] uppercase tracking-[0.06em] text-[var(--cy-oat-700)]">
                    {column.group}
                  </div>
                  <ul className="mt-3 space-y-2">
                    {column.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#product"
                          className="cy-p text-[0.95rem] text-black/80 transition-colors hover:text-black"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {mobile ? (
          <div className="mt-2 rounded-[var(--cy-radius)] bg-[var(--cy-oat-50)] p-4 text-black lg:hidden">
            {[...nav.links, nav.login, nav.demo, nav.cta].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobile(false)}
                className="block border-b border-[var(--cy-oat-300)] py-3 text-[0.95rem] last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </Container>
    </div>
  );
}
