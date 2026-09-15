import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planhat | Agents that deliver customer outcomes",
  description:
    "Commercial teams at B2B enterprises use Planhat to automate work across the customer lifecycle, turning better outcomes into lasting revenue growth.",
};

export default function PlanhatLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Scope Planhat's type stack to this route so it does not leak into the other
  // cloned sites sharing this app.
  return <div className="font-ph-sans">{children}</div>;
}
