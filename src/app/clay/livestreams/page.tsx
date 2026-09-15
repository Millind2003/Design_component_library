import type { Metadata } from "next";
import { LivestreamsHub } from "@/components/sites/clay/livestreams/LivestreamsHub";

export const metadata: Metadata = {
  title: "GTM livestreams | Clay.com",
  description:
    "Clay livestreams are live walkthroughs of real workflows, with space to ask questions as we go. All times are ET.",
  openGraph: {
    title: "GTM livestreams | Clay.com",
    description:
      "Clay livestreams are live walkthroughs of real workflows, with space to ask questions as we go. All times are ET.",
    images: [
      "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png",
    ],
  },
};

export default function ClayLivestreamsPage() {
  return <LivestreamsHub />;
}
