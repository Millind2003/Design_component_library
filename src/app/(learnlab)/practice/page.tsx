import type { Metadata } from "next";
import Link from "next/link";
import { practiceItems, type PracticeItem } from "@/components/sites/learn-lab/data";
import {
  BookIcon,
  ChevronRightIcon,
  LockIcon,
  MicIcon,
  RefreshIcon,
  SpeakerIcon,
  ZapIcon,
} from "@/components/sites/learn-lab/icons";
import { Card, PageBody, PageHeader, edgeStyle } from "@/components/sites/learn-lab/ui";

export const metadata: Metadata = {
  title: "Practice — Duolingo",
  description:
    "Practice hub: review mistakes, listening and speaking drills, and the word list.",
};

const practiceIcon = {
  refresh: RefreshIcon,
  speaker: SpeakerIcon,
  mic: MicIcon,
  book: BookIcon,
};

export default function PracticePage() {
  return (
    <PageBody>
      <PageHeader
        title="Practice hub"
        subtitle="Sharpen what you already know — practice never costs hearts."
      />

      <PracticeHighlight />

      <ul className="mt-5 flex flex-col gap-3">
        {practiceItems.map((item) => (
          <PracticeCard key={item.key} item={item} />
        ))}
      </ul>

      <Card title="This week" className="mt-8">
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { label: "Sessions", value: "14" },
            { label: "Words revised", value: "86" },
            { label: "Accuracy", value: "91%" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-xl font-extrabold text-[var(--ll-ink)]">{s.value}</div>
              <div className="text-xs font-semibold text-[var(--ll-slate)]">{s.label}</div>
            </div>
          ))}
        </div>
      </Card>
    </PageBody>
  );
}

/* The hero slot — one tap into a mixed review, which is the action the hub
   exists to push. */
function PracticeHighlight() {
  return (
    <section
      className="overflow-hidden rounded-2xl p-6 text-white"
      style={{
        background: "linear-gradient(135deg, var(--ll-teal) 0%, var(--ll-primary) 100%)",
      }}
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15">
          <ZapIcon className="h-9 w-9" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-extrabold">Mixed review</h2>
          <p className="mt-1 text-sm opacity-90">
            A quick 10-question set pulled from everything you have learned.
          </p>
        </div>
        <Link
          href="/lesson"
          className="ll-3d shrink-0 bg-white px-5 py-3 text-sm text-[var(--ll-primary)]"
          style={edgeStyle("rgba(0,0,0,.2)")}
        >
          Start +20 XP
        </Link>
      </div>
    </section>
  );
}

function PracticeCard({ item }: { item: PracticeItem }) {
  const Icon = practiceIcon[item.icon];
  const locked = Boolean(item.locked);

  const inner = (
    <>
      <span
        className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white"
        style={{
          backgroundColor: locked ? "var(--ll-locked)" : item.colour,
          boxShadow: `0 4px 0 0 ${locked ? "var(--ll-locked-dark)" : item.edge}`,
        }}
      >
        {locked ? <LockIcon className="h-6 w-6" /> : <Icon className="h-7 w-7" />}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate text-base font-extrabold text-[var(--ll-ink)]">
            {item.title}
          </span>
          {item.count !== undefined && (
            <span className="shrink-0 rounded-full bg-[var(--ll-coral)] px-2 py-0.5 text-[11px] font-extrabold text-white">
              {item.count}
            </span>
          )}
        </div>
        <p className="truncate text-sm text-[var(--ll-slate)]">{item.description}</p>
      </div>

      <ChevronRightIcon
        className={`h-5 w-5 shrink-0 ${locked ? "text-[var(--ll-locked-dark)]" : "text-[var(--ll-slate)]"}`}
      />
    </>
  );

  const base =
    "flex items-center gap-4 rounded-2xl border-2 border-[var(--ll-line)] bg-[var(--ll-surface)] p-4 text-left transition-colors";

  if (locked) {
    return (
      <li>
        <div className={`${base} cursor-not-allowed opacity-70`} aria-disabled>
          {inner}
        </div>
      </li>
    );
  }

  return (
    <li>
      <Link href="/lesson" className={`${base} hover:border-[var(--ll-primary-light)]`}>
        {inner}
      </Link>
    </li>
  );
}
