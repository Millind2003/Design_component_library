import type { Metadata } from "next";
import {
  dailyQuests,
  friendsQuest,
  monthlyQuest,
  streakWeek,
  type Quest,
} from "@/components/sites/learn-lab/data";
import {
  BookIcon,
  CheckIcon,
  ChestIcon,
  ClockIcon,
  FlameIcon,
  GemIcon,
  TargetIcon,
  ZapIcon,
} from "@/components/sites/learn-lab/icons";
import { Button3d, Card, PageBody, PageHeader, ProgressBar } from "@/components/sites/learn-lab/ui";

export const metadata: Metadata = {
  title: "Quests — Duolingo",
  description:
    "Daily quests, a monthly challenge, a friends quest, and the streak calendar that ties them together.",
};

const questIcon = {
  xp: ZapIcon,
  lesson: BookIcon,
  streak: FlameIcon,
  target: TargetIcon,
  clock: ClockIcon,
};

export default function QuestsPage() {
  return (
    <PageBody>
      <PageHeader
        title="Quests"
        subtitle="Finish quests to earn gems and keep your streak alive."
      />
      <StreakCalendar />
      <MonthlyChallenge />

      <Card
        title="Daily quests"
        className="mb-5"
        action={
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[var(--ll-coral)]">
            <ClockIcon className="h-4 w-4" />
            9 hours left
          </span>
        }
      >
        <ul className="flex flex-col gap-5">
          {dailyQuests.map((quest) => (
            <QuestRow key={quest.title} quest={quest} />
          ))}
        </ul>
      </Card>

      <FriendsQuest />
    </PageBody>
  );
}

function StreakCalendar() {
  return (
    <Card className="mb-5">
      <div className="flex items-center gap-3">
        <FlameIcon className="h-10 w-10 text-[var(--ll-amber)]" />
        <div>
          <div className="text-xl font-extrabold text-[var(--ll-ink)]">12 day streak</div>
          <p className="text-sm text-[var(--ll-slate)]">
            Practise today to make it 13.
          </p>
        </div>
      </div>

      <ul className="mt-5 flex items-center justify-between gap-1.5">
        {streakWeek.map((d, i) => (
          <li key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <span className="text-[11px] font-bold uppercase text-[var(--ll-slate)]">
              {d.day}
            </span>
            <span
              className={`grid h-9 w-9 place-items-center rounded-full border-2 ${
                d.done
                  ? "border-transparent bg-[var(--ll-amber)] text-white"
                  : d.today
                    ? "border-dashed border-[var(--ll-amber)] text-[var(--ll-amber)]"
                    : "border-[var(--ll-line)] text-[var(--ll-locked-dark)]"
              }`}
            >
              {d.done ? <CheckIcon className="h-4 w-4" /> : <FlameIcon className="h-4 w-4" />}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function MonthlyChallenge() {
  const pct = Math.round((monthlyQuest.current / monthlyQuest.goal) * 100);
  return (
    <section
      className="mb-5 overflow-hidden rounded-2xl p-5 text-white"
      style={{
        background: "linear-gradient(135deg, var(--ll-primary) 0%, #7c3aed 100%)",
      }}
    >
      <div className="flex items-start gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15">
          <ChestIcon className="h-8 w-8" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-bold uppercase tracking-[0.14em] opacity-80">
            Monthly challenge
          </div>
          <h2 className="mt-0.5 text-lg font-extrabold">{monthlyQuest.title}</h2>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/25">
            <div className="h-full rounded-full bg-white" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-2 flex items-center justify-between text-sm font-bold">
            <span>
              {monthlyQuest.current} / {monthlyQuest.goal} lessons
            </span>
            <span className="inline-flex items-center gap-1">
              <GemIcon className="h-4 w-4" />
              {monthlyQuest.reward}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuestRow({ quest }: { quest: Quest }) {
  const Icon = questIcon[quest.icon];
  const complete = quest.current >= quest.goal;

  return (
    <li className="flex items-center gap-3">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--ll-amber)]/15 text-[var(--ll-amber)]">
        <Icon className="h-6 w-6" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="truncate text-sm font-bold text-[var(--ll-ink)]">
            {quest.title}
          </span>
          <span className="shrink-0 text-xs font-bold text-[var(--ll-slate)]">
            {quest.current}/{quest.goal}
          </span>
        </div>
        <p className="truncate text-xs text-[var(--ll-slate)]">{quest.description}</p>
        <ProgressBar
          value={quest.current}
          goal={quest.goal}
          colour="var(--ll-amber)"
          className="mt-1.5"
        />
      </div>
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
          complete
            ? "bg-[var(--ll-teal)] text-white"
            : "bg-[var(--ll-canvas)] text-[var(--ll-locked-dark)]"
        }`}
        title={complete ? "Reward unlocked" : `Reward: ${quest.reward} gems`}
      >
        <ChestIcon className="h-5 w-5" />
      </span>
    </li>
  );
}

function FriendsQuest() {
  return (
    <Card title="Friends quest">
      <p className="mb-3 text-sm text-[var(--ll-slate)]">
        Teamed up with <strong className="text-[var(--ll-ink)]">{friendsQuest.partner}</strong>
      </p>
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--ll-primary)] text-sm font-bold text-white">
          K
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between">
            <span className="truncate text-sm font-bold text-[var(--ll-ink)]">
              {friendsQuest.title}
            </span>
            <span className="ml-2 shrink-0 text-xs font-bold text-[var(--ll-slate)]">
              {friendsQuest.current}/{friendsQuest.goal}
            </span>
          </div>
          <ProgressBar
            value={friendsQuest.current}
            goal={friendsQuest.goal}
            colour="var(--ll-teal)"
            className="mt-1.5"
          />
        </div>
      </div>
      <Button3d full className="mt-4">
        Nudge your partner
      </Button3d>
    </Card>
  );
}
