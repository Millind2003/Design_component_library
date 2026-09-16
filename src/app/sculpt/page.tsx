import type { Metadata } from "next";
import { Hero } from "@/components/sites/sculpt/Hero";
import { About } from "@/components/sites/sculpt/About";
import { SpeakerRail } from "@/components/sites/sculpt/SpeakerRail";
import { Agenda } from "@/components/sites/sculpt/Agenda";
import { BuildingBlocks } from "@/components/sites/sculpt/BuildingBlocks";
import { WhyAttend } from "@/components/sites/sculpt/WhyAttend";
import { Tickets } from "@/components/sites/sculpt/Tickets";
import { Faq } from "@/components/sites/sculpt/Faq";
import { Sponsors } from "@/components/sites/sculpt/Sponsors";
import { CountdownCta } from "@/components/sites/sculpt/CountdownCta";
import { Footer } from "@/components/sites/sculpt/Footer";
import { lastYear, speakers } from "@/components/sites/sculpt/data";

export const metadata: Metadata = {
  title: "Sculpt: The GTM conference by Clay",
  description:
    "A one-day gathering of the most creative minds in GTM. Thursday, October 8, 2026 — Pier 48, San Francisco.",
};

export default function SculptPage() {
  return (
    <div className="min-h-screen bg-[var(--sc-paper)] font-sc-sans text-[var(--sc-ink)]">
      <Hero />

      <main id="main">
        <About />

        {/* The stacked bands run z-index 1..6 in source order so each rounded
            top edge overlaps the section above it. */}
        <SpeakerRail
          group={lastYear}
          bg="var(--sc-dragonfruit-500)"
          z={1}
          variant="lastYear"
        />
        <SpeakerRail
          group={speakers}
          bg="var(--sc-lavender)"
          z={1}
          id="speakers"
          variant="current"
        />
        <Agenda />
        <BuildingBlocks />
        <WhyAttend />
        <Tickets />
        <Faq />
        <Sponsors />
        <CountdownCta />
      </main>

      <Footer />
    </div>
  );
}
