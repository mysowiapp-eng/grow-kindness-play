import { Sprout } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-16 pb-10 bg-card border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                <Sprout className="w-5 h-5" />
              </span>
              <span className="font-display text-2xl font-semibold text-primary">sowi</span>
            </div>
            <p className="text-foreground/65 max-w-sm leading-relaxed">
              Making mindfulness as natural as breathing for the next generation.
            </p>
          </div>
          <div>
            <p className="font-bold text-sm mb-3">Product</p>
            <ul className="space-y-2 text-sm text-foreground/65">
              <li><a href="#flow" className="hover:text-primary">Yoga Flow Builder</a></li>
              <li><a href="#pillars" className="hover:text-primary">Meditation</a></li>
              <li><a href="#parents" className="hover:text-primary">Parent Module</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-sm mb-3">Company</p>
            <ul className="space-y-2 text-sm text-foreground/65">
              <li><a href="#" className="hover:text-primary">For Schools</a></li>
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-foreground/50">
          <p>© 2026 Sowi Mindfulness Labs. Grown with care.</p>
          <p className="uppercase tracking-[0.2em] font-bold">Plant · Nourish · Bloom</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;