"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Content column used by every flow section: 1440px cap, gutter padding, and
 * one cell of inset with hairline edges once the 32-column grid is active.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("mv-container", className)}>{children}</div>;
}

/** Fires once when the element first enters the viewport. */
export function useInView<T extends HTMLElement>(rootMargin = "-8%") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}

/**
 * Section heading. The source splits every heading into per-word spans and
 * staggers them in on entry — `text-[32px] lg:text-[48px]`, medium weight,
 * leading 1, tracking -0.01em.
 */
export function Heading({
  text,
  as: Tag = "h2",
  className,
  stagger = 0.045,
}: {
  text: string;
  as?: "h1" | "h2" | "p";
  className?: string;
  stagger?: number;
}) {
  const { ref, inView } = useInView<HTMLHeadingElement>();

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={cn(
        "mv-heading block w-full min-w-0 text-[32px] lg:text-[48px]",
        className,
      )}
    >
      {text.split(" ").map((word, i, all) => (
        <span key={`${word}-${i}`} className="inline">
          {/* Plain until observed, so the copy is never invisible if the
              observer does not run (no JS, prerender, reduced motion). */}
          <span
            className={inView ? "mv-word" : "inline-block"}
            style={inView ? { animationDelay: `${i * stagger}s` } : undefined}
          >
            {word}
          </span>
          {i < all.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}

/**
 * Buttons are square, one cell tall on desktop, and come in three fills the
 * site uses: solid black, Minerva blue, and white with a hairline border.
 */
export function Button({
  href,
  variant = "black",
  className,
  children,
}: {
  href: string;
  variant?: "black" | "blue" | "white";
  className?: string;
  children: React.ReactNode;
}) {
  const variants = {
    black: "bg-black border-black text-white hover:bg-black/85",
    blue: "bg-[var(--mv-blue)] border-[var(--mv-blue)] text-white hover:bg-[var(--mv-blue-dark)]",
    white:
      "bg-white text-black border-[var(--mv-gridline)] hover:bg-[var(--mv-grey-light)]",
  } as const;

  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex w-fit select-none items-center justify-center overflow-hidden border px-8 text-[14px] font-medium !leading-none whitespace-nowrap transition-colors duration-200 active:scale-[.98] max-xl:py-3 lg:text-[16px] xl:h-[var(--mv-cell)]",
        variants[variant],
        className,
      )}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </a>
  );
}

/** Body paragraph — the site's standard 16/20px text with -0.02em tracking. */
export function Body({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("mv-body text-[16px] lg:text-[20px]", className)}>
      {children}
    </p>
  );
}

/** Small uppercase field label used across the product panels. */
export function FieldLabel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mv-body text-[12px] uppercase text-black/40", className)}>
      {children}
    </div>
  );
}

/** Arrow glyph used on links and carousel controls. */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

/** The Minerva wordmark glyph. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
        <rect width="15" height="15" fill="currentColor" />
        <rect x="4" y="4" width="7" height="7" fill="var(--mv-grey-light)" />
      </svg>
      <span className="text-[16px] font-medium tracking-[-0.01em]">Minerva</span>
    </span>
  );
}
