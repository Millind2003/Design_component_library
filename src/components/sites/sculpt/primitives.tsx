import { cn } from "@/lib/utils";

/** container-large: full width, capped at 80rem, centred. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("sc-container", className)}>{children}</div>;
}

/** padding-global wrapper — the horizontal gutter that steps down per breakpoint. */
export function Gutter({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("sc-pad-x", className)}>{children}</div>;
}

type ButtonVariant = "solidLime" | "ube" | "dragonfruit" | "lime";

const variants: Record<ButtonVariant, string> = {
  // .button.cc-solid-lime — the filled pill
  solidLime:
    "min-w-[11.1rem] justify-center rounded-[0.925rem] bg-[var(--sc-lime-200)] px-[0.625rem] py-[0.7rem] pl-4 text-[var(--sc-ink)] hover:bg-[var(--sc-lime-300)]",
  // .button — transparent, lime text
  lime: "justify-start bg-transparent text-[var(--sc-lime-200)]",
  // .button.cc-ube
  ube: "justify-start bg-transparent text-[var(--sc-ube)]",
  // .button.cc-dragonfruit
  dragonfruit: "justify-start bg-transparent text-[var(--sc-dragonfruit-500)]",
};

/**
 * Sculpt's button. The arrow lives in a clipped square: the resting one slides
 * out to the top-right while a second slides in from the bottom-left.
 */
export function Button({
  href,
  variant = "lime",
  className,
  size = "sm",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  size?: "sm" | "rg";
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={cn("sc-btn", variants[variant], className)}>
      <span className={size === "rg" ? "sc-text-rg" : "sc-text-sm"}>{children}</span>
      <span className="sc-btn-clip">
        <ArrowUpRight className="sc-btn-icon sc-btn-icon-base" />
        <ArrowUpRight className="sc-btn-icon sc-btn-icon-top" />
      </span>
    </a>
  );
}

/** The diagonal arrow used on every Sculpt button. */
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <path d="M4.5 11.5 11.5 4.5" />
      <path d="M5.5 4.5h6v6" />
    </svg>
  );
}

/** Uppercase mono label used above section headings. */
export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span className={cn("sc-eyebrow text-[var(--sc-ube)]", className)}>{children}</span>
  );
}
