import type { Metadata } from "next";
import { ScrollbarWidth } from "@/components/sites/minerva/ScrollbarWidth";

export const metadata: Metadata = {
  title: "Minerva | AI for marketing leaders",
  description:
    "Minerva helps marketers create time to do the work they love, while delegating operational work to AI.",
  openGraph: {
    title: "Minerva | AI for marketing leaders",
    description:
      "Minerva helps marketers create time to do the work they love, while delegating operational work to AI.",
    images: ["/sites/minerva/social.webp"],
  },
};

export default function MinervaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Scope the Minerva type stack to this route so it does not leak into the
  // other cloned sites sharing this app.
  return (
    <div className="font-mv-sans overflow-x-clip">
      <ScrollbarWidth />
      {children}
    </div>
  );
}
