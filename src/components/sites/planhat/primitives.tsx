import { cn } from "@/lib/utils";

/** 1440px page with a 120px gutter — the site's content column is 1200px. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("ph-container", className)}>{children}</div>;
}

/** Small uppercase, wide-tracked label above every section heading. */
export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("ph-eyebrow text-[var(--ph-muted-2)]", className)}>
      {children}
    </p>
  );
}

/**
 * Square button. Planhat uses only two fills — solid black on light grounds,
 * solid white on dark — with a small chevron that nudges right on hover.
 */
export function Button({
  href,
  variant = "dark",
  className,
  children,
}: {
  href: string;
  variant?: "dark" | "light" | "outline";
  className?: string;
  children: React.ReactNode;
}) {
  const variants = {
    dark: "bg-black text-white hover:bg-[#27221e]",
    light: "bg-white text-black hover:bg-[var(--ph-off)]",
    outline: "border border-[var(--ph-line)] text-black hover:bg-[var(--ph-off)]",
  } as const;

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 px-5 py-3.5 transition-colors",
        variants[variant],
        className,
      )}
    >
      <span className="ph-label">{children}</span>
      <Chevron className="transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

export function Chevron({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 2.5 7.5 6 4 9.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

/** The ↗ mark Planhat sets beside section headings and card titles. */
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 18 18 6M8 6h10v10"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Planhat's wordmark — a filled dome over the name. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg width="26" height="16" viewBox="0 0 26 16" aria-hidden="true">
        <path d="M1 12h24c0-6-5.4-10-12-10S1 6 1 12Z" fill="currentColor" />
        <rect x="0" y="12.5" width="26" height="1.6" rx="0.8" fill="currentColor" />
      </svg>
      <span
        className="text-[1.35rem] leading-none"
        style={{ fontFamily: "var(--font-ph-display)", letterSpacing: "-0.02em" }}
      >
        Planhat
      </span>
    </span>
  );
}

/** Five-star rating used under the short customer quotes. */
export function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex gap-1", className)} aria-label="5 out of 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
        </svg>
      ))}
    </span>
  );
}
