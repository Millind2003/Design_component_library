"use client";

import { useState } from "react";
import { CheckIcon, ChestIcon, DumbbellIcon, LockIcon, StarIcon, TrophyIcon } from "./icons";
import { Mascot } from "./Mascot";
import type { NodeKind, NodeState, PathNode, Unit } from "./data";
import { units } from "./data";

/* The winding path is the signature layout device of this UI genre.
   Technique: nodes are laid out in a single vertical column, and each one is
   offset horizontally by a sine wave of its index. That produces the serpentine
   trail with pure CSS transforms — no absolute positioning, no SVG path, so it
   stays responsive and keeps document flow for scrolling. */
function offsetFor(index: number) {
  return Math.round(Math.sin(index * 0.9) * 88);
}

const kindIcon: Record<NodeKind, typeof StarIcon> = {
  lesson: StarIcon,
  practice: DumbbellIcon,
  chest: ChestIcon,
  trophy: TrophyIcon,
};

function nodeColors(state: NodeState, accent: string, accentEdge: string) {
  if (state === "locked") {
    return { face: "var(--ll-locked)", edge: "var(--ll-locked-dark)", fg: "#fff" };
  }
  if (state === "done") {
    return { face: "var(--ll-amber)", edge: "var(--ll-amber-dark)", fg: "#fff" };
  }
  return { face: accent, edge: accentEdge, fg: "#fff" };
}

export function LessonPath() {
  return (
    <div className="flex flex-col items-center pb-32">
      {units.map((unit) => (
        <UnitSection key={unit.number} unit={unit} />
      ))}
    </div>
  );
}

function UnitSection({ unit }: { unit: Unit }) {
  return (
    <section className="w-full">
      {/* Sticky unit banner — stays pinned while its own nodes scroll past */}
      <div
        className="sticky top-4 z-20 mx-auto mb-10 flex w-full max-w-[560px] items-center justify-between rounded-2xl px-5 py-4 text-white shadow-[0_4px_0_0_var(--edge)]"
        style={
          {
            backgroundColor: unit.accent,
            ["--edge" as string]: unit.accentEdge,
          } as React.CSSProperties
        }
      >
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.14em] opacity-80">
            {unit.title}
          </div>
          <div className="mt-0.5 text-lg font-extrabold">{unit.subtitle}</div>
        </div>
        <button className="rounded-xl border-2 border-white/30 px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors hover:bg-white/10">
          Guide
        </button>
      </div>

      <div className="relative flex flex-col items-center gap-6">
        {unit.nodes.map((node, i) => (
          <PathNodeButton
            key={node.id}
            node={node}
            offset={offsetFor(i)}
            accent={unit.accent}
            accentEdge={unit.accentEdge}
            showMascot={node.state === "active"}
          />
        ))}
      </div>
    </section>
  );
}

function PathNodeButton({
  node,
  offset,
  accent,
  accentEdge,
  showMascot,
}: {
  node: PathNode;
  offset: number;
  accent: string;
  accentEdge: string;
  showMascot: boolean;
}) {
  const [open, setOpen] = useState(false);
  const Icon = node.state === "locked" ? LockIcon : node.state === "done" ? CheckIcon : kindIcon[node.kind];
  const { face, edge, fg } = nodeColors(node.state, accent, accentEdge);
  const locked = node.state === "locked";

  return (
    <div
      className="relative flex items-center"
      style={{ transform: `translateX(${offset}px)` }}
    >
      {/* the floating "START" callout that marks where you are */}
      {node.state === "active" && !open && (
        <div className="pointer-events-none absolute -top-12 left-1/2 z-10 -translate-x-1/2">
          <div className="relative rounded-xl border-2 border-[var(--ll-line)] bg-white px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[var(--ll-primary)] shadow-sm">
            Start
            <span className="absolute -bottom-[7px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-[var(--ll-line)] bg-white" />
          </div>
        </div>
      )}

      <button
        onClick={() => !locked && setOpen((v) => !v)}
        aria-label={node.label}
        disabled={locked}
        className={`ll-node ${node.state === "active" ? "ll-halo" : ""} ${locked ? "is-locked cursor-not-allowed" : ""}`}
        style={
          {
            backgroundColor: face,
            color: fg,
            ["--ll-3d-edge" as string]: edge,
          } as React.CSSProperties
        }
      >
        <Icon className="h-8 w-8" />
      </button>

      {/* Mascot parked beside the current lesson */}
      {showMascot && (
        <Mascot className="ll-bob pointer-events-none absolute left-full ml-3 hidden h-24 w-24 sm:block" />
      )}

      {/* Tapping a node opens its lesson popover */}
      {open && !locked && (
        <div className="absolute left-1/2 top-full z-30 mt-4 w-[260px] -translate-x-1/2">
          <div
            className="rounded-2xl p-4 text-white shadow-[0_4px_0_0_var(--edge)]"
            style={
              { backgroundColor: face, ["--edge" as string]: edge } as React.CSSProperties
            }
          >
            <div className="text-base font-extrabold">{node.label}</div>
            <p className="mt-1 text-sm opacity-85">
              {node.state === "done" ? "Lesson complete — practice to keep it fresh." : "Lesson 1 of 4"}
            </p>
            <button
              className="ll-3d mt-3 w-full bg-white px-4 py-2.5 text-sm"
              style={
                { color: face, ["--ll-3d-edge" as string]: "rgba(0,0,0,.18)" } as React.CSSProperties
              }
            >
              {node.state === "done" ? "Practice +5 XP" : "Start +15 XP"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
