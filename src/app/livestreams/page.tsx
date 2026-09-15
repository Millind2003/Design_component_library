import type { Metadata } from "next";
import { LivestreamsHub } from "@/components/sites/clay/livestreams/LivestreamsHub";

export const metadata: Metadata = {
  title: "GTM livestreams | Clay.com",
  description:
    "Clay livestreams are live walkthroughs of real workflows, with space to ask questions as we go. All times are ET.",
};

export default function RootLivestreamsPage() {
  return (
    <div className="font-cy-sans">
      <LivestreamsHub />
    </div>
  );
}
