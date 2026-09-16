"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { MarketingLink } from "./types";

/**
 * The "Clay for [Marketing teams]" pill above the hero headline — a Webflow
 * dropdown that switches between the three persona landing pages. Webflow opens
 * these on hover at desktop and on tap below it, so both are wired up here.
 */
export function PersonaSwitcher({
  label,
  current,
  items,
}: {
  label: string;
  current: string;
  items: MarketingLink[];
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={root}
      className="relative inline-flex items-center gap-2 rounded-[10px] bg-[var(--cy-oat-300)] py-1 pl-3 pr-1"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="text-[1rem]">{label}</span>

      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative flex max-w-fit cursor-pointer items-center justify-center gap-2",
          "rounded-[var(--cy-radius-sm)] border-[0.5px] border-[var(--cy-oat-400)] bg-white",
          "py-[0.5em] pl-[1em] pr-[3em] text-[1rem] font-medium tracking-[-0.01em] text-black",
          "whitespace-nowrap transition-colors duration-300 hover:bg-[var(--cy-oat-300)]",
        )}
      >
        {current}
        <ChevronDown
          className={cn(
            "absolute right-5 top-1/2 h-[1em] w-[1em] -translate-y-1/2 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      <nav
        role="menu"
        aria-label={label}
        className={cn(
          "absolute left-0 top-[calc(100%+0.25rem)] z-50 block w-max min-w-full",
          "rounded-lg border-[0.5px] border-[var(--cy-oat-400)] bg-[var(--cy-oat-100)] p-4",
          "transition-opacity duration-150",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            className={cn(
              "mt-2 flex rounded border-[0.5px] border-[var(--cy-oat-400)] bg-white",
              "px-5 py-2.5 text-[0.8rem] text-[#222] transition-colors first:mt-0",
              "hover:bg-[var(--cy-oat-300)]",
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

/** Webflow's dropdown caret, inlined. */
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M2.8 5.2a1 1 0 0 1 1.4 0L8 9l3.8-3.8a1 1 0 1 1 1.4 1.4l-4.5 4.5a1 1 0 0 1-1.4 0L2.8 6.6a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}
