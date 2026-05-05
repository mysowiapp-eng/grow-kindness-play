import { Sprout, Leaf, Flower2, TreeDeciduous } from "lucide-react";

const stages = [
  { icon: Sprout, title: "Plant the seed", text: "Pick a tiny daily ritual — 3 breaths, one pose, a single feeling word." },
  { icon: Leaf, title: "Water it daily", text: "Gentle reminders & playful streaks turn the ritual into a rhythm." },
  { icon: Flower2, title: "Watch it bloom", text: "Kids lead their own practice, choosing flows that match their day." },
  { icon: TreeDeciduous, title: "Grow strong roots", text: "A lifelong habit of self-awareness, calm and emotional confidence." },
];

const HabitJourney = () => {
  return (
    <section id="journey" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">From seed to sky</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-5">
            Habits don't happen overnight. <span className="text-primary">They grow.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {stages.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="relative bg-card p-7 rounded-3xl border border-border/40 shadow-sm">
              <div className="absolute -top-5 left-7 w-12 h-12 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-leaf">
                <Icon className="w-6 h-6" />
              </div>
              <p className="font-display text-xs font-bold text-primary/60 mt-2 mb-2">STAGE {i + 1}</p>
              <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HabitJourney;