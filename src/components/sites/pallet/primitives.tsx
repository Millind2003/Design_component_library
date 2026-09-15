import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("pl-container", className)}>{children}</div>;
}

/**
 * The site's one pill button. The label sits left, the arrow in its own disc on
 * the right, and the disc nudges 3px on hover (420ms, ease-out).
 */
export function Pill({
  href,
  variant = "light",
  className,
  children,
}: {
  href: string;
  variant?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
}) {
  const light = variant === "light";
  return (
    <a
      href={href}
      className={cn(
        "pl-pill group",
        light
          ? "bg-white text-[var(--pl-black)] hover:bg-[var(--pl-eggshell)]"
          : "bg-[var(--pl-black)] text-white hover:bg-black",
        className,
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          "pl-pill__arrow",
          light ? "bg-[var(--pl-black)] text-white" : "bg-white text-[var(--pl-black)]",
        )}
      >
        <Arrow />
      </span>
    </a>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 8h9M8.5 4 12.5 8l-4 4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Section heading block — an optional eyebrow above an h2. */
export function SectionHeading({
  eyebrow,
  children,
  className,
  align = "left",
}: {
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
      data-reveal=""
    >
      {eyebrow ? (
        <span className="pl-eyebrow text-[var(--pl-gray)]">{eyebrow}</span>
      ) : null}
      <h2 className={cn("pl-h2 max-w-[880px]", align === "center" && "mx-auto")}>
        {children}
      </h2>
    </div>
  );
}

/** The Pallet wordmark: a filled square notch beside the name. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <rect width="16" height="16" rx="1" fill="currentColor" />
        <rect x="3" y="6" width="10" height="1.6" fill="var(--pl-white)" />
        <rect x="3" y="9" width="10" height="1.6" fill="var(--pl-white)" />
      </svg>
      <span className="text-[17px] tracking-[-0.03em]">Pallet</span>
    </span>
  );
}
