import type { Metadata } from "next";
import {
  achievements,
  friends,
  profile,
  profileStats,
  type Achievement,
} from "@/components/sites/learn-lab/data";
import {
  FlameIcon,
  MedalIcon,
  TrophyIcon,
  ZapIcon,
} from "@/components/sites/learn-lab/icons";
import {
  Button3d,
  Card,
  PageBody,
  ProgressBar,
  StatTile,
} from "@/components/sites/learn-lab/ui";

export const metadata: Metadata = {
  title: "Profile — Duolingo",
  description:
    "Profile header, lifetime statistics, tiered achievements, and the friends list.",
};

const statIcon = {
  flame: FlameIcon,
  zap: ZapIcon,
  trophy: TrophyIcon,
  medal: MedalIcon,
};

export default function ProfilePage() {
  return (
    <PageBody>
      <ProfileHeader />

      <h2 className="mb-3 mt-8 text-lg font-extrabold text-[var(--ll-ink)]">Statistics</h2>
      <div className="grid grid-cols-2 gap-3">
        {profileStats.map((stat) => {
          const Icon = statIcon[stat.icon];
          return (
            <StatTile
              key={stat.label}
              icon={<Icon className="h-7 w-7" />}
              label={stat.label}
              value={stat.value}
              colour={stat.colour}
            />
          );
        })}
      </div>

      <h2 className="mb-3 mt-8 text-lg font-extrabold text-[var(--ll-ink)]">Achievements</h2>
      <Card className="mb-8">
        <ul className="flex flex-col divide-y-2 divide-[var(--ll-line)]">
          {achievements.map((a) => (
            <AchievementRow key={a.name} achievement={a} />
          ))}
        </ul>
      </Card>

      <h2 className="mb-3 text-lg font-extrabold text-[var(--ll-ink)]">Friends</h2>
      <Card>
        <ul className="flex flex-col gap-1">
          {friends.map((f) => (
            <li key={f.name} className="flex items-center gap-3 rounded-xl px-1 py-2">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--ll-canvas)] text-sm font-bold text-[var(--ll-slate)]">
                {f.initial}
              </span>
              <span className="flex-1 truncate text-sm font-bold text-[var(--ll-ink)]">
                {f.name}
              </span>
              <span className="text-sm font-bold text-[var(--ll-slate)]">
                {f.xp.toLocaleString()} XP
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </PageBody>
  );
}

function ProfileHeader() {
  return (
    <section className="rounded-2xl border-2 border-[var(--ll-line)] bg-[var(--ll-surface)] p-6">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <span
          className="grid h-24 w-24 shrink-0 place-items-center rounded-full text-3xl font-extrabold text-white"
          style={{
            background: "linear-gradient(135deg, var(--ll-primary), var(--ll-teal))",
          }}
        >
          {profile.name.slice(0, 1)}
        </span>

        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-extrabold tracking-tight text-[var(--ll-ink)]">
            {profile.name}
          </h1>
          <p className="text-sm text-[var(--ll-slate)]">{profile.username}</p>
          <p className="mt-1 text-xs text-[var(--ll-slate)]">{profile.joined}</p>

          <div className="mt-3 flex items-center justify-center gap-4 text-sm sm:justify-start">
            <span className="font-bold text-[var(--ll-ink)]">
              {profile.following}{" "}
              <span className="font-semibold text-[var(--ll-slate)]">Following</span>
            </span>
            <span className="font-bold text-[var(--ll-ink)]">
              {profile.followers}{" "}
              <span className="font-semibold text-[var(--ll-slate)]">Followers</span>
            </span>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-2">
          <div className="flex gap-1.5">
            {profile.courses.map((c) => (
              <span
                key={c}
                className="grid h-7 w-9 place-items-center rounded-md bg-[var(--ll-primary)] text-[11px] font-extrabold text-white"
              >
                {c}
              </span>
            ))}
          </div>
          <Button3d>Add friends</Button3d>
        </div>
      </div>
    </section>
  );
}

function AchievementRow({ achievement }: { achievement: Achievement }) {
  const { name, tier, description, current, goal, colour } = achievement;
  return (
    <li className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
      {/* Hexish tier badge — the roman numeral carries the level */}
      <span
        className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white"
        style={{ backgroundColor: colour, boxShadow: `0 4px 0 0 rgba(0,0,0,.18)` }}
      >
        <MedalIcon className="h-7 w-7" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="truncate text-sm font-extrabold text-[var(--ll-ink)]">
            {name}
          </span>
          <span
            className="shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white"
            style={{ backgroundColor: colour }}
          >
            Level {tier}
          </span>
        </div>
        <p className="truncate text-xs text-[var(--ll-slate)]">{description}</p>
        <div className="mt-1.5 flex items-center gap-2">
          <ProgressBar value={current} goal={goal} colour={colour} className="flex-1" />
          <span className="shrink-0 text-xs font-bold text-[var(--ll-slate)]">
            {current.toLocaleString()}/{goal.toLocaleString()}
          </span>
        </div>
      </div>
    </li>
  );
}
