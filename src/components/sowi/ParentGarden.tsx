import { Button } from "@/components/ui/button";
import { TrendingUp, Heart, Calendar } from "lucide-react";

const ParentGarden = () => {
  return (
    <section id="parents" className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-earth text-background rounded-[40px] overflow-hidden grid lg:grid-cols-2 shadow-leaf">
          <div className="p-12 lg:p-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-sun mb-4">The Parent Garden</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Roots for them. <span className="text-sun">Insight for you.</span>
            </h2>
            <p className="text-lg text-background/75 leading-relaxed mb-10 max-w-md">
              Not a surveillance dashboard — a window into emotional growth. See patterns, celebrate streaks, and gently guide them toward independence.
            </p>

            <ul className="space-y-5 mb-10">
              {[
                { icon: Calendar, title: "Weekly mindfulness reports", text: "Understand which practices resonate most." },
                { icon: Heart, title: "Shared journaling moments", text: "Conversation prompts for the dinner table." },
                { icon: TrendingUp, title: "Empowerment, not control", text: "Less screen time, more self-led calm." },
              ].map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-background/10 grid place-items-center shrink-0">
                    <Icon className="w-5 h-5 text-sun" />
                  </span>
                  <div>
                    <p className="font-bold">{title}</p>
                    <p className="text-sm text-background/65">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button variant="bloom" size="xl">Explore the Parent Module</Button>
          </div>

          <div className="bg-background/5 p-12 flex items-center justify-center">
            <div className="w-full max-w-md bg-background text-foreground rounded-3xl p-7 shadow-2xl">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">Aria's growth</p>
                  <h4 className="font-display text-xl font-semibold">This week</h4>
                </div>
                <span className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">+14%</span>
              </div>
              <div className="flex gap-3 items-end h-44 mb-4">
                {[40, 60, 50, 90, 75, 85, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-xl bg-gradient-to-t from-primary to-primary/40"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[10px] font-bold text-foreground/40 mb-6">
                {["M","T","W","T","F","S","S"].map((d,i)=>(<span key={i}>{d}</span>))}
              </div>
              <div className="border-t border-border pt-5 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/60">Mood reflection</span>
                  <span className="font-bold">🌼 Curious</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/60">Streak</span>
                  <span className="font-bold">14 days</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/60">Independence</span>
                  <span className="font-bold text-primary">Rising ↑</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentGarden;