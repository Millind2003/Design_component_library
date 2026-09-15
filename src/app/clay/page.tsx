import { Nav } from "@/components/sites/clay/Nav";
import { Hero } from "@/components/sites/clay/Hero";
import { LogoWall } from "@/components/sites/clay/LogoWall";
import { Flow } from "@/components/sites/clay/Flow";
import { Prompt } from "@/components/sites/clay/Prompt";
import { Features } from "@/components/sites/clay/Features";
import { Customers, Updates, Footer } from "@/components/sites/clay/Closing";

export default function ClayPage() {
  return (
    <div className="min-h-screen bg-[var(--cy-oat-50)] text-black">
      <Nav />
      <main>
        <Hero />
        <LogoWall />
        <Flow />
        <Prompt />
        <Features />
        <Customers />
        <Updates />
      </main>
      <Footer />
    </div>
  );
}
