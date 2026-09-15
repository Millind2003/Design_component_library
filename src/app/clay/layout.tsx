import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clay | Build systems to grow revenue",
  description:
    "Infrastructure to get any data, run agentic workflows, and launch GTM plays.",
};

export default function ClayLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Scope Clay's type stack to this route so it does not leak into the other
  // cloned sites sharing this app.
  return <div className="font-cy-sans">{children}</div>;
}
