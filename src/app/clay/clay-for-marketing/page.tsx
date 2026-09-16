import type { Metadata } from "next";
import { Nav } from "@/components/sites/clay/Nav";
import { Footer } from "@/components/sites/clay/Closing";
import { AnnouncementBar } from "@/components/sites/clay/marketing/AnnouncementBar";
import { MarketingHero } from "@/components/sites/clay/marketing/MarketingHero";
import { LogoWall } from "@/components/sites/clay/marketing/LogoWall";
import { Pillars } from "@/components/sites/clay/marketing/Pillars";
import { UseCaseSection } from "@/components/sites/clay/marketing/UseCaseSection";
import { CaseStudies } from "@/components/sites/clay/marketing/CaseStudies";
import { useCases } from "@/components/sites/clay/marketing/data";

export const metadata: Metadata = {
  title: "Clay for Marketing Teams | Clay.com",
  description:
    "Act with the context to personalize your message and increase conversion at every stage of your funnel.",
};

export default function ClayForMarketingPage() {
  return (
    <div className="min-h-screen bg-[var(--cy-oat-100)] text-black">
      {/* Clay sticks the banner and nav together; the shared Nav is fixed, so
          it gets pushed down by the banner's 2.75rem height instead. */}
      <div className="sticky top-0 z-[60]">
        <AnnouncementBar />
      </div>
      <Nav offsetTop="top-0 min-[768px]:top-[2.75rem]" />

      <MarketingHero />
      <LogoWall />

      <main id="main">
        <Pillars />
        {useCases.map((useCase) => (
          <UseCaseSection key={useCase.heading} useCase={useCase} />
        ))}
        <CaseStudies />
      </main>

      <Footer
        primaryCta={{ label: "Start building for free", href: "https://app.clay.com/signup" }}
      />
    </div>
  );
}
