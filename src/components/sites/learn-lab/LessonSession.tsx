"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { exercises, type BankExercise, type PickExercise } from "./data";
import { CheckIcon, CloseIcon, HeartIcon, SpeakerIcon, ZapIcon } from "./icons";
import { edgeStyle } from "./ui";

type Verdict = "pending" | "correct" | "wrong";

const XP_PER_QUESTION = 5;

export function LessonSession() {
  const [index, setIndex] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [xp, setXp] = useState(0);
  const [verdict, setVerdict] = useState<Verdict>("pending");
  const [picked, setPicked] = useState<string | null>(null);
  const [built, setBuilt] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const exercise = exercises[index];
  const isLast = index === exercises.length - 1;

  // Fills for questions already answered: 0% on question 1, 100% only once the
  // final answer is submitted.
  const answeredCount = index + (verdict === "pending" ? 0 : 1);
  const progress = Math.round((answeredCount / exercises.length) * 100);

  const hasAnswer = exercise.type === "pick" ? picked !== null : built.length > 0;

  function check() {
    if (!hasAnswer || verdict !== "pending") return;
    const right =
      exercise.type === "pick"
        ? picked === exercise.answerId
        : built.join(" ") === exercise.answer.join(" ");

    setVerdict(right ? "correct" : "wrong");
    if (right) setXp((v) => v + XP_PER_QUESTION);
    else setHearts((h) => Math.max(0, h - 1));
  }

  function next() {
    if (isLast) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setVerdict("pending");
    setPicked(null);
    setBuilt([]);
  }

  if (done) return <Complete xp={xp} hearts={hearts} />;

  const solution =
    exercise.type === "pick"
      ? (exercise.options.find((o) => o.id === exercise.answerId)?.label ?? "")
      : exercise.answer.join(" ");

  return (
    <div className="ll-app flex min-h-screen flex-col bg-[var(--ll-surface)] text-[var(--ll-ink)]">
      <TopBar hearts={hearts} progress={progress} />

      <main className="mx-auto flex w-full max-w-[720px] flex-1 flex-col px-4 py-8 sm:px-6">
        {exercise.type === "pick" ? (
          <PickBoard
            exercise={exercise}
            picked={picked}
            locked={verdict !== "pending"}
            onPick={setPicked}
          />
        ) : (
          <BankBoard
            exercise={exercise}
            built={built}
            locked={verdict !== "pending"}
            onChange={setBuilt}
          />
        )}
      </main>

      <SessionFooter
        verdict={verdict}
        hasAnswer={hasAnswer}
        isLast={isLast}
        solution={solution}
        onCheck={check}
        onNext={next}
      />
    </div>
  );
}

function TopBar({ hearts, progress }: { hearts: number; progress: number }) {
  return (
    <header className="flex items-center gap-4 px-4 py-4 sm:px-6">
      <Link
        href="/learn"
        aria-label="Quit lesson"
        className="shrink-0 text-[var(--ll-locked-dark)] transition-colors hover:text-[var(--ll-slate)]"
      >
        <CloseIcon className="h-6 w-6" />
      </Link>

      <div
        className="h-4 flex-1 overflow-hidden rounded-full bg-[var(--ll-line)]"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-[var(--ll-primary)] transition-[width] duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex shrink-0 items-center gap-1.5 text-[var(--ll-coral)]">
        <HeartIcon className="h-6 w-6" />
        <span className="text-base font-extrabold">{hearts}</span>
      </div>
    </header>
  );
}

function PickBoard({
  exercise,
  picked,
  locked,
  onPick,
}: {
  exercise: PickExercise;
  picked: string | null;
  locked: boolean;
  onPick: (id: string) => void;
}) {
  return (
    <>
      <h1 className="text-2xl font-extrabold tracking-tight">{exercise.prompt}</h1>

      <button
        type="button"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border-2 border-[var(--ll-line)] px-4 py-3 text-lg font-bold transition-colors hover:bg-[var(--ll-canvas)]"
      >
        <SpeakerIcon className="h-6 w-6 text-[var(--ll-primary)]" />
        {exercise.question}
      </button>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {exercise.options.map((option) => {
          const active = picked === option.id;
          return (
            <button
              key={option.id}
              type="button"
              disabled={locked}
              onClick={() => onPick(option.id)}
              className={`ll-3d flex flex-col items-center gap-3 border-2 bg-[var(--ll-surface)] px-3 py-5 disabled:cursor-not-allowed ${
                active
                  ? "border-[var(--ll-teal)] bg-[var(--ll-teal-bg)] text-[var(--ll-teal)]"
                  : "border-[var(--ll-line)] text-[var(--ll-ink)]"
              }`}
              style={edgeStyle(active ? "var(--ll-teal-light)" : "var(--ll-line)")}
            >
              <span className="text-4xl leading-none">{option.emoji}</span>
              <span className="text-sm font-bold">{option.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

function BankBoard({
  exercise,
  built,
  locked,
  onChange,
}: {
  exercise: BankExercise;
  built: string[];
  locked: boolean;
  onChange: (next: string[]) => void;
}) {
  /* Tiles are matched by position, not by word, so a bank containing the same
     word twice keeps both tiles independently selectable. */
  const bankSlots = exercise.bank.map((word, i) => {
    const takenCount = built.filter((w) => w === word).length;
    const earlierSame = exercise.bank.slice(0, i).filter((w) => w === word).length;
    return { word, i, used: earlierSame < takenCount };
  });

  return (
    <>
      <h1 className="text-2xl font-extrabold tracking-tight">{exercise.prompt}</h1>

      <p className="mt-6 rounded-xl border-2 border-[var(--ll-line)] px-4 py-3 text-lg font-bold">
        {exercise.question}
      </p>

      {/* answer tray — ruled top and bottom, words land here in order */}
      <div className="mt-8 min-h-[112px] border-y-2 border-[var(--ll-line)] py-3">
        <div className="flex flex-wrap gap-2">
          {built.map((word, i) => (
            <button
              key={`${word}-${i}`}
              type="button"
              disabled={locked}
              onClick={() => onChange(built.filter((_, j) => j !== i))}
              className="ll-3d border-2 border-[var(--ll-line)] bg-[var(--ll-surface)] px-3 py-2 text-sm font-bold disabled:cursor-not-allowed"
              style={edgeStyle("var(--ll-line)")}
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {bankSlots.map(({ word, i, used }) => (
          <button
            key={`${word}-${i}`}
            type="button"
            disabled={locked || used}
            onClick={() => onChange([...built, word])}
            aria-hidden={used}
            className={`ll-3d border-2 border-[var(--ll-line)] px-3 py-2 text-sm font-bold ${
              used
                ? "bg-[var(--ll-line)] text-transparent"
                : "bg-[var(--ll-surface)] text-[var(--ll-ink)]"
            }`}
            style={edgeStyle(used ? "transparent" : "var(--ll-line)")}
          >
            {word}
          </button>
        ))}
      </div>
    </>
  );
}

function SessionFooter({
  verdict,
  hasAnswer,
  isLast,
  solution,
  onCheck,
  onNext,
}: {
  verdict: Verdict;
  hasAnswer: boolean;
  isLast: boolean;
  solution: string;
  onCheck: () => void;
  onNext: () => void;
}) {
  const correct = verdict === "correct";
  const settled = verdict !== "pending";

  return (
    <footer
      className={`border-t-2 py-5 transition-colors ${
        settled
          ? correct
            ? "border-transparent bg-[var(--ll-primary-bg)]"
            : "border-transparent bg-[var(--ll-coral-bg)]"
          : "border-[var(--ll-line)]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        {settled ? (
          <div
            className="flex items-center gap-3"
            style={{ color: correct ? "var(--ll-primary-dark)" : "var(--ll-coral-dark)" }}
          >
            <span
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white"
              style={{ backgroundColor: correct ? "var(--ll-primary)" : "var(--ll-coral)" }}
            >
              {correct ? <CheckIcon className="h-5 w-5" /> : <CloseIcon className="h-5 w-5" />}
            </span>
            <div>
              <div className="text-base font-extrabold">
                {correct ? "Nice work!" : "Not quite"}
              </div>
              {!correct && <div className="text-sm font-semibold">Answer: {solution}</div>}
            </div>
          </div>
        ) : (
          <span className="hidden text-sm font-semibold text-[var(--ll-slate)] sm:block">
            Pick your answer to continue
          </span>
        )}

        {settled ? (
          <button
            type="button"
            onClick={onNext}
            className="ll-3d w-full px-8 py-3 text-sm text-white sm:w-auto"
            style={edgeStyle(correct ? "var(--ll-primary-dark)" : "var(--ll-coral-dark)", {
              backgroundColor: correct ? "var(--ll-primary)" : "var(--ll-coral)",
            })}
          >
            {isLast ? "Finish" : "Continue"}
          </button>
        ) : (
          <button
            type="button"
            onClick={onCheck}
            disabled={!hasAnswer}
            className="ll-3d w-full px-8 py-3 text-sm sm:w-auto"
            style={edgeStyle(hasAnswer ? "var(--ll-primary-dark)" : "transparent", {
              backgroundColor: hasAnswer ? "var(--ll-primary)" : "var(--ll-line)",
              color: hasAnswer ? "#fff" : "var(--ll-hare)",
            })}
          >
            Check
          </button>
        )}
      </div>
    </footer>
  );
}

function Complete({ xp, hearts }: { xp: number; hearts: number }) {
  return (
    <div className="ll-app flex min-h-screen flex-col items-center justify-center gap-6 bg-[var(--ll-surface)] px-6 text-center">
      <span className="text-6xl" aria-hidden>
        &#127881;
      </span>
      <h1 className="text-3xl font-extrabold tracking-tight text-[var(--ll-ink)]">
        Lesson complete!
      </h1>

      <div className="flex gap-3">
        <ScoreTile
          label="Total XP"
          value={String(xp)}
          colour="var(--ll-amber)"
          icon={<ZapIcon className="h-4 w-4" />}
        />
        <ScoreTile
          label="Hearts left"
          value={String(hearts)}
          colour="var(--ll-coral)"
          icon={<HeartIcon className="h-4 w-4" />}
        />
      </div>

      <Link
        href="/learn"
        className="ll-3d mt-2 bg-[var(--ll-primary)] px-8 py-3 text-sm text-white"
        style={edgeStyle("var(--ll-primary-dark)")}
      >
        Back to the path
      </Link>
    </div>
  );
}

function ScoreTile({
  label,
  value,
  colour,
  icon,
}: {
  label: string;
  value: string;
  colour: string;
  icon: ReactNode;
}) {
  return (
    <div className="w-32 rounded-2xl border-2 p-3" style={{ borderColor: colour }}>
      <div
        className="flex items-center justify-center gap-1.5 rounded-lg py-1 text-[11px] font-extrabold uppercase tracking-wide text-white"
        style={{ backgroundColor: colour }}
      >
        {icon}
        {label}
      </div>
      <div className="mt-2 text-2xl font-extrabold" style={{ color: colour }}>
        {value}
      </div>
    </div>
  );
}
