import { cn } from "@/lib/utils";

type Side = "top" | "bottom" | "left" | "right";

/**
 * Clay's `.frame-box` — hairline rules that trace a section's gutters, each one
 * fading out toward both ends via a pair of gradient shades.
 *
 * Purely decorative, so the whole box is aria-hidden and non-interactive.
 */
export function FrameLines({
  sides = ["top", "bottom", "left", "right"],
  className,
}: {
  sides?: Side[];
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 mx-4 flex items-center justify-center min-[768px]:mx-9 min-[992px]:mx-12",
        className,
      )}
    >
      {sides.map((side) => (
        <Line key={side} side={side} />
      ))}
    </div>
  );
}

const B = "var(--cy-border)";

function Line({ side }: { side: Side }) {
  const horizontal = side === "top" || side === "bottom";

  return (
    <div
      className={cn(
        "absolute",
        horizontal
          ? "inset-x-0 h-px"
          : "inset-y-0 w-px",
        side === "top" && "top-0 -mt-px",
        side === "bottom" && "bottom-0 -mb-px",
        side === "left" && "left-0 -ml-px",
        side === "right" && "right-0 -mr-px",
      )}
      style={{ backgroundColor: B }}
    >
      {/* the two shades taper the rule out at each end */}
      <Shade side={side} at="start" />
      <Shade side={side} at="end" />
    </div>
  );
}

function Shade({ side, at }: { side: Side; at: "start" | "end" }) {
  const horizontal = side === "top" || side === "bottom";
  const length = "clamp(3rem, 6vw, 8rem)";

  if (horizontal) {
    return (
      <div
        className="absolute inset-y-0"
        style={{
          width: length,
          [at === "start" ? "left" : "right"]: 0,
          [at === "start" ? "marginLeft" : "marginRight"]: `calc(-1 * ${length})`,
          backgroundImage:
            at === "start"
              ? `linear-gradient(270deg, ${B}, transparent)`
              : `linear-gradient(270deg, transparent, ${B})`,
        }}
      />
    );
  }

  return (
    <div
      className="absolute inset-x-0"
      style={{
        height: length,
        [at === "start" ? "top" : "bottom"]: 0,
        [at === "start" ? "marginTop" : "marginBottom"]: `calc(-1 * ${length})`,
        backgroundImage:
          at === "start"
            ? `linear-gradient(0deg, ${B}, transparent)`
            : `linear-gradient(0deg, transparent, ${B})`,
      }}
    />
  );
}

/** The noise + clay-overlay pair Clay layers on every coloured slab. */
export function SlabTextures() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -m-0.5 inset-0">
      <div
        className="absolute inset-0 z-[2] bg-[length:100%_50%] bg-center opacity-85 mix-blend-hard-light"
        style={{ backgroundImage: "url(/sites/clay/texture-clay-overlay.webp)" }}
      />
      <div
        className="absolute inset-0 z-[3] bg-[length:100%_50%] bg-center opacity-85 mix-blend-overlay"
        style={{ backgroundImage: "url(/sites/clay/texture-clay-overlay.webp)" }}
      />
      <div
        className="absolute inset-0 z-[4] bg-[length:60px_60px] bg-left-top mix-blend-overlay"
        style={{ backgroundImage: "url(/sites/clay/texture-noise.webp)" }}
      />
    </div>
  );
}
