import type { Metadata } from "next";
import { LessonSession } from "@/components/sites/learn-lab/LessonSession";

export const metadata: Metadata = {
  title: "Lesson — Duolingo",
  description:
    "The in-lesson session screen: progress bar, hearts, exercise board, and the check/continue footer.",
};

/* Deliberately outside the (learnlab) group — a lesson takes over the whole
   viewport with no sidebar, which is what makes it read as a session. */
export default function LessonPage() {
  return <LessonSession />;
}
