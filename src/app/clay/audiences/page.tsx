import type { Metadata } from "next";
import { Nav } from "@/components/sites/clay/Nav";
import { Footer } from "@/components/sites/clay/Closing";
import { AnnouncementBar } from "@/components/sites/clay/marketing/AnnouncementBar";
import { LogoWall } from "@/components/sites/clay/marketing/LogoWall";
import { AudiencesHero } from "@/components/sites/clay/audiences/AudiencesHero";
import { FeaturedCustomer } from "@/components/sites/clay/audiences/FeaturedCustomer";
import { Capabilities } from "@/components/sites/clay/audiences/Capabilities";
import { UseCases } from "@/components/sites/clay/audiences/UseCases";
import { Integrations } from "@/components/sites/clay/audiences/Integrations";
import { ClayUniversity } from "@/components/sites/clay/audiences/ClayUniversity";
import { logoWallEyebrow } from "@/components/sites/clay/audiences/data";

export const metadata: Metadata = {
  title: "Audiences, Centralize your GTM data | Clay.com",
  description:
    "Audiences combines your CRM, data warehouse, signals, and 150+ enrichment providers into a unified data layer inside Clay.",
};

export default function ClayAudiencesPage() {
  return (
    <div className="min-h-screen bg-[var(--cy-oat-100)] text-black">
      {/* Clay sticks the banner and nav together; the shared Nav is fixed, so
          it gets pushed down by the banner's 2.75rem height instead. */}
      <div className="sticky top-0 z-[60]">
        <AnnouncementBar />
      </div>
      <Nav variant="light" offsetTop="top-0 min-[768px]:top-[2.75rem]" />

      <AudiencesHero />

      <main id="main">
        <section className="pb-0 pt-8">
          <LogoWall eyebrow={logoWallEyebrow} />
        </section>
        <FeaturedCustomer />
        <Capabilities />
        <UseCases />
        <Integrations />
        <ClayUniversity />
      </main>

      <Footer />
    </div>
  );
}
