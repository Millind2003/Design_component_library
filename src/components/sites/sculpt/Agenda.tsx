"use client";

import { useState } from "react";
import { agenda } from "./data";
import { Container, Gutter } from "./primitives";
import { cn } from "@/lib/utils";
import type { SculptAgendaItem, SculptRoundtable } from "./types";

/**
 * "The whole day, at a glance" — a three-stage schedule grid.
 *
 * INTERACTION MODEL: click-driven. The chips filter by `data-track`; plenary
 * sessions (`data-plenary="yes"`) stay visible under every filter because they
 * span all three stages. Each session opens a dialog with its detail.
 *
 * Chip order in the source is All talks / Marketing / RevOps + GTM Engineering,
 * matching track values "" / "marketing" / "revops".
 */
const TRACKS = ["", "marketing", "revops"];

export function Agenda() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<SculptAgendaItem | null>(null);

  const track = TRACKS[active];
  const visible = (item: SculptAgendaItem) =>
    !track || item.plenary || item.track === track;

  return (
    <section
      id="agenda"
      style={{ zIndex: 2 }}
      className="relative -mb-16 bg-[var(--sc-dragonfruit-500)] pb-[calc(144px+4rem)] text-[var(--sc-paper)]"
    >
      <Gutter>
        <Container>
          <div className="sc-pad-y flex flex-col gap-10">
            <h2 className="sc-h1 max-w-[20ch]">{agenda.title}</h2>

            <div className="flex flex-wrap items-center gap-3">
              <span className="sc-eyebrow text-[var(--sc-lavender)]">{agenda.tip}</span>
              <div
                role="group"
                aria-label="Filter the agenda by track"
                className="flex flex-wrap gap-2"
              >
                {agenda.chips.map((chip, i) => (
                  <button
                    key={chip}
                    type="button"
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                    className={cn(
                      "sc-eyebrow rounded-full border px-4 py-2 transition-colors",
                      i === active
                        ? "border-[var(--sc-lime-200)] bg-[var(--sc-lime-200)] text-[var(--sc-ink)]"
                        : "border-[var(--sc-paper)]/40 text-[var(--sc-paper)] hover:border-[var(--sc-paper)]",
                    )}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* stage headers — hidden below the 3-column layout */}
            <div className="hidden grid-cols-[5rem_repeat(3,1fr)] gap-4 min-[992px]:grid">
              <span />
              {agenda.stages.map((stage) => (
                <span key={stage} className="sc-eyebrow text-[var(--sc-lavender)]">
                  {stage}
                </span>
              ))}
            </div>

            <div className="flex flex-col">
              {agenda.blocks.map((block, bi) =>
                block.kind === "break" ? (
                  <div
                    key={bi}
                    className="flex items-baseline gap-4 border-t border-[var(--sc-paper)]/20 py-5 min-[992px]:grid min-[992px]:grid-cols-[5rem_repeat(3,1fr)]"
                  >
                    <span className="sc-eyebrow text-[var(--sc-lavender)]">
                      {block.time}
                    </span>
                    <span className="sc-text-rg min-[992px]:col-span-3">
                      {block.label}
                    </span>
                  </div>
                ) : (
                  <div key={bi} className="border-t border-[var(--sc-paper)]/20">
                    {block.rows.map((row, ri) => {
                      const shown = row.cells.filter(
                        (c): c is SculptAgendaItem => !!c && visible(c),
                      );
                      if (!shown.length) return null;
                      return (
                        <div
                          key={ri}
                          className="flex flex-col gap-3 py-5 min-[992px]:grid min-[992px]:grid-cols-[5rem_repeat(3,1fr)] min-[992px]:gap-4"
                        >
                          <span className="sc-eyebrow text-[var(--sc-lavender)]">
                            {row.time}
                          </span>
                          {row.cells.map((cell, ci) => {
                            if (!cell || !visible(cell)) {
                              return <div key={ci} className="hidden min-[992px]:block" />;
                            }
                            return (
                              <div
                                key={ci}
                                className={cn(
                                  cell.plenary && "min-[992px]:col-span-3",
                                )}
                              >
                                <AgendaItem item={cell} onOpen={() => setOpen(cell)} />
                              </div>
                            );
                          })}

                          {/* third column: the roundtable slot for this band */}
                          {ri === 0 && block.roundtable ? (
                            <Roundtable rt={block.roundtable} />
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                ),
              )}
            </div>
          </div>
        </Container>
      </Gutter>

      {open ? <AgendaDialog item={open} onClose={() => setOpen(null)} /> : null}
    </section>
  );
}

function AgendaItem({
  item,
  onOpen,
}: {
  item: SculptAgendaItem;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={onOpen}
      className={cn(
        "group w-full rounded-3xl border border-[var(--sc-paper)]/20 p-4 text-left transition-colors",
        "hover:border-[var(--sc-lime-200)] hover:bg-[var(--sc-paper)]/5",
        item.plenary && "bg-[var(--sc-paper)]/5",
      )}
    >
      {item.heads.length ? (
        <span className="mb-3 flex -space-x-2">
          {item.heads.map((head, i) => (
            <span
              key={`${head.name}-${i}`}
              title={`${head.name}${head.co ? ` — ${head.co}` : ""}`}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--sc-lavender)] text-[0.65rem] font-semibold text-[var(--sc-ink)] ring-2 ring-[var(--sc-dragonfruit-500)]"
            >
              {initials(head.name)}
            </span>
          ))}
        </span>
      ) : null}

      <span className="sc-text-rg block font-medium">{item.title}</span>
      {item.who ? (
        <span className="sc-text-sm mt-1 block opacity-70">{item.who}</span>
      ) : null}

      {item.desc ? (
        <span className="sc-text-sm mt-2 block opacity-0 transition-opacity duration-300 group-hover:opacity-70">
          {item.desc}
        </span>
      ) : null}

      <span className="mt-3 flex flex-wrap gap-2">
        {item.stage ? <Chip>{item.stage}</Chip> : null}
        {item.pill ? <Chip accent>{item.pill}</Chip> : null}
      </span>
    </button>
  );
}

function Roundtable({ rt }: { rt: SculptRoundtable }) {
  return (
    <div className="rounded-3xl border border-dashed border-[var(--sc-paper)]/25 p-4">
      <span className="sc-eyebrow block text-[var(--sc-lavender)]">{rt.time}</span>
      <span className="sc-text-rg mt-2 block font-medium">{rt.label}</span>
      {rt.location ? (
        <span className="sc-text-sm mt-1 block opacity-70">{rt.location}</span>
      ) : null}
      {rt.desc ? <p className="sc-text-sm mt-3 opacity-70">{rt.desc}</p> : null}
      {rt.link ? (
        <span className="sc-eyebrow mt-3 block text-[0.7rem] opacity-60">{rt.link}</span>
      ) : null}
    </div>
  );
}

function Chip({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={cn(
        "sc-eyebrow rounded-full px-2.5 py-1 text-[0.7rem]",
        accent
          ? "bg-[var(--sc-lime-200)] text-[var(--sc-ink)]"
          : "bg-[var(--sc-paper)]/10 text-[var(--sc-paper)]",
      )}
    >
      {children}
    </span>
  );
}

function AgendaDialog({
  item,
  onClose,
}: {
  item: SculptAgendaItem;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[80vh] w-full max-w-[40rem] overflow-y-auto rounded-[2rem] bg-[var(--sc-paper)] p-8 text-[var(--sc-ink)]"
      >
        <div className="flex items-start justify-between gap-6">
          <h3 className="sc-h3">{item.title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-full border border-[var(--sc-oat-300)] px-3 py-1 text-sm"
          >
            Close
          </button>
        </div>

        {item.who ? <p className="sc-text-rg mt-3 opacity-70">{item.who}</p> : null}
        {item.desc ? <p className="sc-text-rg mt-5">{item.desc}</p> : null}

        {item.heads.length ? (
          <ul className="mt-6 flex flex-col gap-3">
            {item.heads.map((head, i) => (
              <li key={`${head.name}-${i}`} className="sc-text-sm">
                <span className="font-medium">{head.name}</span>
                {head.role ? <span className="opacity-70"> — {head.role}</span> : null}
                {head.co ? <span className="opacity-70"> @ {head.co}</span> : null}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-2">
          {item.stage ? <Chip>{item.stage}</Chip> : null}
          {item.end ? <Chip>ends {item.end}</Chip> : null}
        </div>
      </div>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0] ?? "")
    .join("")
    .toUpperCase();
}
