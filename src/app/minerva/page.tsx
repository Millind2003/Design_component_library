import { Nav } from "@/components/sites/minerva/Nav";
import { Hero } from "@/components/sites/minerva/Hero";
import { LogoMarquee } from "@/components/sites/minerva/LogoMarquee";
import { Consumers } from "@/components/sites/minerva/Consumers";
import { Context } from "@/components/sites/minerva/Context";
import { Agents } from "@/components/sites/minerva/Agents";
import { Stories, ByTheNumbers } from "@/components/sites/minerva/Stories";
import { Security } from "@/components/sites/minerva/Security";
import { Footer } from "@/components/sites/minerva/Footer";

export default function MinervaPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <Consumers />
        <Context />
        <Agents />
        <Stories />
        <ByTheNumbers />
        <Security />
      </main>
      <Footer />
    </div>
  );
}
