import type { ReactNode } from "react";
import { Sidebar } from "@/components/sites/learn-lab/Sidebar";

/* Shell shared by every LearnLab screen: the fixed left rail plus the offset
   that keeps content clear of it. Individual pages own their centre column
   and right rail via <PageBody>. */
export default function LearnLabLayout({ children }: { children: ReactNode }) {
  return (
    <div className="ll-app min-h-screen bg-[var(--ll-canvas)] text-[var(--ll-ink)]">
      <Sidebar />
      <div className="lg:pl-[88px] xl:pl-[256px]">{children}</div>
    </div>
  );
}