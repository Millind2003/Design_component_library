import type { Metadata } from "next";
import { Nav } from "@/components/sites/clay/Nav";
import { Footer } from "@/components/sites/clay/Closing";
import { AnnouncementBar } from "@/components/sites/clay/marketing/AnnouncementBar";
import { ClaygentHero } from "@/components/sites/clay/claygent/ClaygentHero";
import { Features } from "@/components/sites/clay/claygent/Features";
import { RunsCounter } from "@/components/sites/clay/claygent/RunsCounter";
import { Steps } from "@/components/sites/clay/claygent/Steps";
import { CustomerQuotes } from "@/components/sites/clay/claygent/CustomerQuotes";
import { Faqs } from "@/components/sites/clay/claygent/Faqs";

export const metadata: Metadata = {
  title: "Claygent — AI Agents for GTM | Clay.com",
  description:
    "Build, test, and deploy GTM agents that research the web, execute plays, and orchestrate workflows — all connected to your first and third party data.",
};

export default function ClaygentPage() {
  return (
    <div className="min-h-screen bg-[var(--cy-oat-50)] text-black">
      {/* Clay stacks the banner above the nav; the shared Nav is fixed, so it
          gets pushed down by the banner's 2.75rem height instead. */}
      <div className="sticky top-0 z-[60]">
        <AnnouncementBar />
      </div>
      <Nav variant="light" offsetTop="top-0 min-[768px]:top-[2.75rem]" />

      <main id="main">
        <ClaygentHero />
        <Features />
        <RunsCounter />
        <Steps />
        <CustomerQuotes />
        <Faqs />
      </main>

      <Footer />
    </div>
  );
}
