import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-sun rounded-[40px] p-14 md:p-20 text-center overflow-hidden">
          <div aria-hidden className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-background/40 blur-2xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary/30 blur-2xl" />
          </div>
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6 text-earth max-w-3xl mx-auto">
              Plant the first seed today. Grow a calmer kid for life.
            </h2>
            <p className="text-lg text-earth/80 max-w-xl mx-auto mb-10">
              Free to start. No screens for them, just calm. Built by educators, kids' yoga teachers and child psychologists.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="xl">Start Growing — It's Free</Button>
              <Button variant="outline" size="xl" className="rounded-3xl border-2 border-earth/30 bg-transparent text-earth hover:bg-earth/10">
                Talk to our team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;