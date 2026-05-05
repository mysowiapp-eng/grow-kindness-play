import { Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/sowi-hero.jpg";

const Hero = () => {
  return (
    <section className="relative pt-12 md:pt-20 pb-24">
      {/* decorative blobs */}
      <div aria-hidden className="absolute -top-20 -left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div aria-hidden className="absolute top-40 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <div className="animate-bloom">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider mb-7">
            <Sparkles className="w-3.5 h-3.5" />
            Planting Seeds of Mindfulness
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-7">
            Nurture their nature,
            <span className="block text-primary">every single day.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-xl mb-10">
            Sowi uses AI to grow personalized yoga adventures, guided stillness and heart-centered journaling — designed for little minds to bloom into mindful humans.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Button variant="bloom" size="xl">Create Your First Flow</Button>
            <Button variant="outline" size="xl" className="rounded-3xl border-2 border-primary/20 bg-card text-primary hover:bg-primary/5">
              <Play className="w-4 h-4" /> Watch Demo
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[0,1,2,3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full ring-4 ring-background bg-gradient-sun" />
              ))}
            </div>
            <p className="text-sm font-medium text-foreground/70">
              <span className="font-bold text-foreground">12,000+ families</span> growing daily
            </p>
          </div>
        </div>

        <div className="relative animate-bloom [animation-delay:200ms]">
          <div className="absolute -inset-5 bg-primary/20 rounded-[44px] -rotate-2" />
          <div className="absolute -inset-5 bg-accent/15 rounded-[44px] rotate-2" />
          <div className="relative rounded-[36px] overflow-hidden shadow-leaf bg-card">
            <img
              src={heroImg}
              alt="A child happily holding a yoga tree pose in a sunlit garden"
              width={1024}
              height={1024}
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* floating cards */}
          <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-soft flex items-center gap-3 animate-float">
            <div className="w-12 h-12 rounded-xl bg-gradient-sun grid place-items-center text-xl">🌟</div>
            <div>
              <p className="font-bold text-sm">5 Day Streak!</p>
              <p className="text-xs text-foreground/60">Leo is blooming</p>
            </div>
          </div>

          <div className="absolute -top-6 -right-2 bg-card p-3 px-4 rounded-2xl shadow-soft flex items-center gap-2 animate-float [animation-delay:1s]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-xs font-bold text-foreground/80 uppercase tracking-wide">Calm mode active</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;