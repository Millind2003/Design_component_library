import { leaderboard, quests } from "./data";
import { ChestIcon, TrophyIcon } from "./icons";

export function RightRail() {
  return (
    <aside className="hidden w-[368px] shrink-0 flex-col gap-5 py-6 pr-6 xl:flex">
      <UnlockCard />
      <QuestsCard />
      <LeaderboardCard />
      <p className="px-2 text-xs leading-relaxed text-[var(--ll-slate)]">
        A study clone of Duolingo&apos;s web app, rebuilt from scratch for practice.
        Not affiliated with or endorsed by Duolingo.
      </p>
    </aside>
  );
}

function Card({
  title,
  action,
  children,
}: {
  title: string;
  action?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border-2 border-[var(--ll-line)] bg-[var(--ll-surface)] p-4">
      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-extrabold text-[var(--ll-ink)]">{title}</h2>
        {action && (
          <button className="text-xs font-bold uppercase tracking-wide text-[var(--ll-primary)]">
            {action}
          </button>
        )}
      </header>
      {children}
    </section>
  );
}

function UnlockCard() {
  return (
    <section className="rounded-2xl border-2 border-[var(--ll-line)] bg-[var(--ll-surface)] p-4">
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--ll-teal)]/15 text-[var(--ll-teal)]">
          <ChestIcon className="h-7 w-7" />
        </span>
        <div>
          <h2 className="text-base font-extrabold text-[var(--ll-ink)]">Unlock Leagues</h2>
          <p className="mt-1 text-sm text-[var(--ll-slate)]">
            Finish 4 more lessons to start competing this week.
          </p>
        </div>
      </div>
      <button
        className="ll-3d mt-4 w-full bg-[var(--ll-primary)] px-4 py-3 text-sm text-white"
        style={{ ["--ll-3d-edge" as string]: "var(--ll-primary-dark)" } as React.CSSProperties}
      >
        Continue
      </button>
    </section>
  );
}

function QuestsCard() {
  return (
    <Card title="Daily quests" action="View all">
      <ul className="flex flex-col gap-4">
        {quests.map((q) => {
          const pct = Math.min(100, Math.round((q.current / q.goal) * 100));
          return (
            <li key={q.title} className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--ll-amber)]/15 text-[var(--ll-amber)]">
                <TrophyIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between">
                  <span className="truncate text-sm font-bold text-[var(--ll-ink)]">
                    {q.title}
                  </span>
                  <span className="ml-2 shrink-0 text-xs font-bold text-[var(--ll-slate)]">
                    {q.current}/{q.goal}
                  </span>
                </div>
                {/* progress bar: rounded track + inset highlight on the fill */}
                <div className="mt-1.5 h-3 overflow-hidden rounded-full bg-[var(--ll-line)]">
                  <div
                    className="h-full rounded-full bg-[var(--ll-amber)]"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

function LeaderboardCard() {
  return (
    <Card title="Bronze league" action="See all">
      <ol className="flex flex-col">
        {leaderboard.map((row) => (
          <li
            key={row.rank}
            className={`flex items-center gap-3 rounded-xl px-2 py-2 ${
              row.you ? "bg-[var(--ll-primary)]/10" : ""
            }`}
          >
            <span
              className={`w-5 text-sm font-extrabold ${
                row.rank <= 3 ? "text-[var(--ll-amber)]" : "text-[var(--ll-slate)]"
              }`}
            >
              {row.rank}
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--ll-canvas)] text-xs font-bold text-[var(--ll-slate)]">
              {row.name.slice(0, 1)}
            </span>
            <span
              className={`flex-1 truncate text-sm ${
                row.you ? "font-extrabold text-[var(--ll-primary)]" : "font-semibold text-[var(--ll-ink)]"
              }`}
            >
              {row.name}
            </span>
            <span className="text-sm font-bold text-[var(--ll-slate)]">{row.xp} XP</span>
          </li>
        ))}
      </ol>
    </Card>
  );
}
