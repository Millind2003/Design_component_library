"use client";

import { Header, Hero, LogoRail } from "@/components/sites/pallet/Hero";
import { Cases, Products, Insights } from "@/components/sites/pallet/Sections";
import { Features, Security, Cta, Footer } from "@/components/sites/pallet/Closing";
import { useReveal } from "@/components/sites/pallet/useReveal";

export default function PalletPage() {
  // Drives every [data-reveal] element on the page.
  useReveal();

  return (
    <div className="min-h-screen bg-[var(--pl-offwhite)] text-[var(--pl-black)]">
      <Header />
      <main>
        <Hero />
        <LogoRail />
        <Cases />
        <Products />
        <Insights />
        <Features />
        <Security />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
