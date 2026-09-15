import { Navbar } from "@/components/sites/companion-energy/Navbar";
import { Hero } from "@/components/sites/companion-energy/Hero";
import { Platform } from "@/components/sites/companion-energy/Platform";
import { Benefits } from "@/components/sites/companion-energy/Benefits";
import { Testimonials } from "@/components/sites/companion-energy/Testimonials";
import { HowItWorks } from "@/components/sites/companion-energy/HowItWorks";
import { Automation } from "@/components/sites/companion-energy/Automation";
import { Industries } from "@/components/sites/companion-energy/Industries";
import { WhyCompanion } from "@/components/sites/companion-energy/WhyCompanion";
import { FinalCta } from "@/components/sites/companion-energy/FinalCta";
import { Footer } from "@/components/sites/companion-energy/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Platform />
        <Benefits />
        <Testimonials />
        <HowItWorks />
        <Automation />
        <Industries />
        <WhyCompanion />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
