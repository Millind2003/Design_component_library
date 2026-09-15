import { FlameIcon, GemIcon, HeartIcon } from "./icons";

/* Duolingo's three counters, each locked to its own colour: fox-orange
   streak, macaw-blue gems, cardinal-red hearts. */
const stats = [
  { Icon: FlameIcon, value: "12", color: "var(--ll-orange)", label: "Day streak" },
  { Icon: GemIcon, value: "480", color: "var(--ll-teal)", label: "Gems" },
  { Icon: HeartIcon, value: "5", color: "var(--ll-coral)", label: "Hearts" },
];

export function StatsBar() {
  return (
    <div className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b-2 border-[var(--ll-line)] bg-[var(--ll-surface)]/95 px-4 py-3 backdrop-blur sm:px-6 xl:justify-end xl:gap-8">
      {/* course selector */}
      <button className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition-colors hover:bg-[var(--ll-polar)] xl:mr-auto">
        <span className="text-2xl leading-none" aria-hidden>
          &#127466;&#127480;
        </span>
        <span className="text-sm font-extrabold text-[var(--ll-ink)]">Spanish</span>
      </button>

      {stats.map(({ Icon, value, color, label }) => (
        <div
          key={label}
          className="flex items-center gap-1.5"
          title={label}
          style={{ color }}
        >
          <Icon className="h-6 w-6" />
          <span className="text-base font-extrabold">{value}</span>
        </div>
      ))}
    </div>
  );
}
