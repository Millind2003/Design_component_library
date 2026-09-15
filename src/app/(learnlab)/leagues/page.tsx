import type { Metadata } from "next";
import {
  DEMOTION_CUTOFF,
  PROMOTION_CUTOFF,
  leagueTable,
  leagues,
} from "@/components/sites/learn-lab/data";
import { ClockIcon, LockIcon, TrophyIcon } from "@/components/sites/learn-lab/icons";
import { PageBody } from "@/components/sites/learn-lab/ui";

export const metadata: Metadata = {
  title: "Leagues — Duolingo",
  description:
    "Weekly league standings with promotion and demotion zones, tier progression, and a live countdown.",
};

export default function LeaguesPage() {
  return (
    <PageBody>
      <TierStrip />
      <LeagueHeader />
      <StandingsTable />
    </PageBody>
  );
}

/* Horizontal tier rail. Locked tiers wash out to greyscale so the one you are
   in reads as the only saturated badge in the row. */
function TierStrip() {
  return (
    <div className="-mx-4 mb-8 overflow-x-auto px-4 sm:-mx-6 sm:px-6">
      <ul className="flex min-w-max items-end gap-4 pb-2">
        {leagues.map((league) => {
          const current = league.key === "bronze";
          return (
            <li key={league.key} className="flex w-16 flex-col items-center gap-2">
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl transition-transform ${
                  current ? "scale-110" : ""
                }`}
                style={{
                  backgroundColor: league.unlocked ? league.colour : "var(--ll-locked)",
                  boxShadow: `0 4px 0 0 ${league.unlocked ? league.edge : "var(--ll-locked-dark)"}`,
                  filter: league.unlocked ? undefined : "grayscale(1)",
                }}
              >
                {league.unlocked ? (
                  <TrophyIcon className="h-7 w-7 text-white" />
                ) : (
                  <LockIcon className="h-6 w-6 text-white/80" />
                )}
              </span>
              <span
                className={`text-center text-[11px] font-bold uppercase tracking-wide ${
                  current ? "text-[var(--ll-ink)]" : "text-[var(--ll-slate)]"
                }`}
              >
                {league.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function LeagueHeader() {
  return (
    <div className="mb-6 rounded-2xl border-2 border-[var(--ll-line)] bg-[var(--ll-surface)] p-6 text-center">
      <h1 className="text-2xl font-extrabold tracking-tight text-[var(--ll-ink)]">
        Bronze League
      </h1>
      <p className="mx-auto mt-2 max-w-md text-sm text-[var(--ll-slate)]">
        The top {PROMOTION_CUTOFF} learners advance to Silver. The bottom{" "}
        {leagueTable.length - DEMOTION_CUTOFF + 1} drop out.
      </p>
      <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[var(--ll-coral)]/12 px-3 py-2 text-sm font-bold text-[var(--ll-coral)]">
        <ClockIcon className="h-4 w-4" />
        3 days left
      </div>
    </div>
  );
}

function ZoneLabel({ text, colour }: { text: string; colour: string }) {
  return (
    <li aria-hidden className="flex items-center gap-3 py-3">
      <span className="h-0.5 flex-1 rounded-full" style={{ backgroundColor: colour }} />
      <span
        className="text-[11px] font-extrabold uppercase tracking-[0.14em]"
        style={{ color: colour }}
      >
        {text}
      </span>
      <span className="h-0.5 flex-1 rounded-full" style={{ backgroundColor: colour }} />
    </li>
  );
}

function StandingsTable() {
  return (
    <section className="rounded-2xl border-2 border-[var(--ll-line)] bg-[var(--ll-surface)] p-3 sm:p-4">
      <ol className="flex flex-col">
        {leagueTable.map((row) => (
          <RowWithZones key={row.rank} row={row} />
        ))}
      </ol>
    </section>
  );
}

function RowWithZones({ row }: { row: (typeof leagueTable)[number] }) {
  const medal =
    row.rank === 1 ? "#f5a524" : row.rank === 2 ? "#9aa5b8" : row.rank === 3 ? "#b87333" : null;

  return (
    <>
      <li
        className={`flex items-center gap-3 rounded-xl px-2 py-2.5 sm:px-3 ${
          row.you ? "bg-[var(--ll-primary)]/10 ring-2 ring-[var(--ll-primary-light)]" : ""
        }`}
      >
        <span
          className="w-6 shrink-0 text-center text-sm font-extrabold"
          style={{ color: medal ?? "var(--ll-slate)" }}
        >
          {row.rank}
        </span>
        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: medal ?? "var(--ll-locked-dark)" }}
        >
          {row.name.slice(0, 1)}
        </span>
        <span
          className={`flex-1 truncate text-sm ${
            row.you
              ? "font-extrabold text-[var(--ll-primary)]"
              : "font-semibold text-[var(--ll-ink)]"
          }`}
        >
          {row.name}
        </span>
        <span className="shrink-0 text-sm font-bold text-[var(--ll-slate)]">
          {row.xp.toLocaleString()} XP
        </span>
      </li>

      {row.rank === PROMOTION_CUTOFF && (
        <ZoneLabel text="Promotion zone" colour="var(--ll-primary)" />
      )}
      {row.rank === DEMOTION_CUTOFF - 1 && (
        <ZoneLabel text="Demotion zone" colour="var(--ll-coral)" />
      )}
    </>
  );
}
