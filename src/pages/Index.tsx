import Navbar from "@/components/sowi/Navbar";
import Hero from "@/components/sowi/Hero";
import FlowBuilder from "@/components/sowi/FlowBuilder";
import Pillars from "@/components/sowi/Pillars";
import ParentGarden from "@/components/sowi/ParentGarden";
import HabitJourney from "@/components/sowi/HabitJourney";
import CTA from "@/components/sowi/CTA";
import Footer from "@/components/sowi/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <FlowBuilder />
        <HabitJourney />
        <ParentGarden />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
