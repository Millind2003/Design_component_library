import { cn } from "@/lib/utils";

/** container-regular: 95% wide, capped at 80rem, centred. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("cy-container", className)}>{children}</div>;
}

type ButtonVariant = "dark" | "light" | "lime" | "outline" | "secondary";

const variants: Record<ButtonVariant, string> = {
  dark: "bg-black text-white hover:bg-[var(--cy-oat-950)]",
  light: "bg-white text-black hover:bg-[var(--cy-oat-100)]",
  lime: "bg-[var(--cy-lime)] text-black hover:brightness-95",
  outline: "border-white text-white hover:bg-white/10",
  secondary: "border-black bg-white text-black hover:bg-[var(--cy-oat-100)]",
};

/**
 * Clay's button. The arrow sits in a clipped track — on hover the visible one
 * slides out to the right while a second slides in from the left.
 */
export function Button({
  href,
  variant = "dark",
  arrow = true,
  className,
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={cn("cy-btn", variants[variant], className)}>
      <span>{children}</span>
      {arrow ? (
        <span className="relative block h-[1em] w-[1em] overflow-hidden">
          <ArrowRight className="cy-btn-icon-out absolute inset-0" />
          <ArrowRight className="cy-btn-icon-in absolute inset-0" />
        </span>
      ) : null}
    </a>
  );
}

/** Phosphor's arrow-right, inlined so the icon font is not needed. */
export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden="true"
      className={cn("h-[1em] w-[1em]", className)}
    >
      <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  );
}

/** Small uppercase pill label used above the feature headings. */
export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-cy-mono text-[0.7rem] uppercase tracking-[0.06em]",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** The Clay wordmark — a filled rounded square plus the name. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
        <rect width="22" height="22" rx="6" fill="currentColor" />
        <path
          d="M15.5 8.4a4.6 4.6 0 1 0 0 5.2"
          stroke="var(--cy-oat-50)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[1.1rem] font-semibold tracking-[-0.02em]">Clay</span>
    </span>
  );
}
