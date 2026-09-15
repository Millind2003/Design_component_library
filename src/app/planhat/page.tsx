import { Nav, Hero, Logos } from "@/components/sites/planhat/Hero";
import {
  Automate,
  Awards,
  Platform,
  Applications,
  Outcomes,
} from "@/components/sites/planhat/Sections";
import {
  Industries,
  Story,
  Quotes,
  Promos,
  Cta,
  Footer,
} from "@/components/sites/planhat/Closing";

export default function PlanhatPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Automate />
        <Awards />
        <Platform />
        <Applications />
        <Outcomes />
        <Industries />
        <Story />
        <Quotes />
        <Promos />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
