// Shared primitives for the LearnLab screens. Every page composes these so
// spacing, radii and the 3D button edge stay identical across the app.

import type { CSSProperties, ReactNode } from "react";
import { StatsBar } from "./StatsBar";

/** Sets the `--ll-3d-edge` custom property without leaking `any` into callers. */
export function edgeStyle(edge: string, extra?: CSSProperties): CSSProperties {
  return { ...extra, ["--ll-3d-edge" as string]: edge } as CSSProperties;
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-[var(--ll-ink)] sm:text-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm text-[var(--ll-slate)]">{subtitle}</p>
        )}
      </div>
      {action}
    </header>
  );
}

export function Card({
  title,
  action,
  children,
  className = "",
}: {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border-2 border-[var(--ll-line)] bg-[var(--ll-surface)] p-4 ${className}`}
    >
      {(title || action) && (
        <header className="mb-3 flex items-center justify-between">
          {title && (
            <h2 className="text-base font-extrabold text-[var(--ll-ink)]">{title}</h2>
          )}
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

export function Button3d({
  children,
  colour = "var(--ll-primary)",
  edge = "var(--ll-primary-dark)",
  fg = "#fff",
  full,
  disabled,
  className = "",
  onClick,
  type = "button",
}: {
  children: ReactNode;
  colour?: string;
  edge?: string;
  fg?: string;
  full?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`ll-3d px-5 py-3 text-sm ${full ? "w-full" : ""} ${className}`}
      style={edgeStyle(edge, { backgroundColor: colour, color: fg })}
    >
      {children}
    </button>
  );
}

export function ProgressBar({
  value,
  goal,
  colour = "var(--ll-primary)",
  className = "",
}: {
  value: number;
  goal: number;
  colour?: string;
  className?: string;
}) {
  const pct = goal <= 0 ? 0 : Math.min(100, Math.round((value / goal) * 100));
  return (
    <div
      className={`h-3 overflow-hidden rounded-full bg-[var(--ll-line)] ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={goal}
    >
      <div
        className="h-full rounded-full transition-[width] duration-500"
        style={{ width: `${pct}%`, backgroundColor: colour }}
      />
    </div>
  );
}

export function StatTile({
  icon,
  label,
  value,
  colour,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  colour: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border-2 border-[var(--ll-line)] bg-[var(--ll-surface)] p-4">
      <span className="shrink-0" style={{ color: colour }}>
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-lg font-extrabold leading-tight text-[var(--ll-ink)]">
          {value}
        </div>
        <div className="truncate text-xs font-semibold text-[var(--ll-slate)]">
          {label}
        </div>
      </div>
    </div>
  );
}

/** Centre column + optional right rail — the shared frame for every screen.
    StatsBar lives inside `main` so it sticks over the scrolling column only,
    and the column re-centres itself when the rail drops out below `xl`. */
export function PageBody({
  children,
  rail,
}: {
  children: ReactNode;
  rail?: ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-[1120px] gap-6">
      <main className="min-w-0 flex-1">
        <StatsBar />
        <div className="px-4 pb-32 pt-8 sm:px-6">{children}</div>
      </main>
      {rail}
    </div>
  );
}