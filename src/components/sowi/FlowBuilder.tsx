import { Plus, GripVertical, Sparkles } from "lucide-react";

const poses = [
  { name: "Sun Salutation", time: "2 min", color: "bg-sun/40", emoji: "☀️" },
  { name: "Brave Lion", time: "1 min", color: "bg-accent/30", emoji: "🦁" },
  { name: "Tall Tree", time: "90 sec", color: "bg-primary/20", emoji: "🌳" },
  { name: "Sleepy Sloth", time: "3 min", color: "bg-earth/15", emoji: "🦥" },
];

const FlowBuilder = () => {
  return (
    <section id="flow" className="py-24">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">The Magic Yoga Lab</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Drag. Drop. <span className="text-primary">Breathe.</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            Our AI suggests poses based on your child's energy, age and the time of day — then weaves them into a story they'll actually want to follow.
          </p>
          <ul className="space-y-4">
            {[
              "Adapts to space, mood and minutes available",
              "Story-led narration turns each flow into an adventure",
              "Shareable flows kids can build for friends and siblings",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 grid place-items-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <span className="text-foreground/80">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-card rounded-[36px] p-8 shadow-leaf border border-border/40">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Today's Flow</p>
                <h3 className="font-display text-2xl font-semibold">Aria's Morning Garden</h3>
              </div>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-2 rounded-full hover:bg-accent/20 transition-colors">
                <Sparkles className="w-3.5 h-3.5" /> Suggest
              </button>
            </div>

            <div className="space-y-3">
              {poses.map((p, i) => (
                <div
                  key={p.name}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border/40 hover:border-primary/40 hover:shadow-sm transition-all cursor-grab active:cursor-grabbing"
                >
                  <GripVertical className="w-4 h-4 text-foreground/30" />
                  <div className={`w-12 h-12 rounded-xl grid place-items-center text-xl ${p.color}`}>{p.emoji}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{p.name}</p>
                    <p className="text-xs text-foreground/50">Step {i + 1} · {p.time}</p>
                  </div>
                  <div className="text-xs font-bold text-primary">●●●</div>
                </div>
              ))}
              <button className="w-full p-4 rounded-2xl border-2 border-dashed border-primary/30 text-primary text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors">
                <Plus className="w-4 h-4" /> Add another pose
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowBuilder;