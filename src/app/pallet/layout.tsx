import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pallet | AI systems that move the physical economy",
  description:
    "Supply chain and logistics teams run their operations on Pallet.",
};

export default function PalletLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Scope Pallet's type stack to this route.
  return <div className="font-pl-sans">{children}</div>;
}
