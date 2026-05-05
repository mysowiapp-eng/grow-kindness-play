import { Wind, BookHeart, Sparkles, Sprout } from "lucide-react";

const pillars = [
  {
    icon: Sprout,
    title: "AI Yoga Flows",
    text: "Drag and drop poses like 'The Brave Lion' or 'Sleepy Sloth' into a custom adventure tailored to today's mood.",
    tone: "bg-primary/10 text-primary",
  },
  {
    icon: Wind,
    title: "Guided Meditation",
    text: "Story-led breathing journeys that meet kids where they are — from wiggly mornings to wind-down nights.",
    tone: "bg-accent/15 text-accent",
  },
  {
    icon: BookHeart,
    title: "Heart Journaling",
    text: "Playful prompts that help children name big feelings, build self-awareness and grow emotional vocabulary.",
    tone: "bg-sun/30 text-earth",
  },
  {
    icon: Sparkles,
    title: "Daily Habit Loop",
    text: "Tiny rituals, gentle nudges and seed-to-bloom progress that make mindfulness as natural as brushing teeth.",
    tone: "bg-primary/10 text-primary",
  },
];

const Pillars = () => {
  return (
    <section id="pillars" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">A whole little ecosystem</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-5">
            Four roots. One blooming child.
          </h2>
          <p className="text-lg text-foreground/70">
            Sowi blends movement, breath, reflection and rhythm — the four roots of a calm, confident kid.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, text, tone }) => (
            <article
              key={title}
              className="group p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-leaf"
            >
              <div className={`w-14 h-14 rounded-2xl grid place-items-center mb-6 ${tone} group-hover:scale-110 transition-transform duration-500`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-foreground/70 leading-relaxed text-[15px]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;