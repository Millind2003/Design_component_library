import { cn } from "@/lib/utils";
import { Container, Gutter } from "./primitives";

/**
 * Sculpt's page rhythm: every band after the hero is a coloured card with a
 * 4rem rounded top edge that pulls 4rem up over the band before it, each on a
 * higher z-index than the last. The result is a stack of overlapping sheets.
 *
 * `z` must increase down the page — the source hard-codes 1..6 in source order.
 */
export function Section({
  id,
  bg,
  z,
  dark = false,
  flat = false,
  className,
  children,
}: {
  id?: string;
  /** Any CSS colour; omit for the page's own paper background. */
  bg?: string;
  z: number;
  /** Light type on a dark ground. */
  dark?: boolean;
  /** Skip the rounded top edge (the agenda continues the band above it). */
  flat?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      style={{ backgroundColor: bg, zIndex: z }}
      className={cn(
        "relative -mb-16 pb-16",
        !flat && "rounded-t-[4rem]",
        dark && "text-[var(--sc-paper)]",
        className,
      )}
    >
      <Gutter>
        <Container>{children}</Container>
      </Gutter>
    </section>
  );
}

/** padding-vertical padding-large — the inner vertical rhythm. */
export function SectionBody({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("sc-pad-y", className)}>{children}</div>;
}
