import { Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#flow", label: "Yoga Flow" },
  { href: "#pillars", label: "Meditation" },
  { href: "#journey", label: "Journaling" },
  { href: "#parents", label: "Parents Portal" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-leaf">
            <Sprout className="w-5 h-5" />
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight text-primary">sowi</span>
        </a>
        <div className="hidden md:flex items-center gap-9 font-medium text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <Button variant="hero" size="lg" className="rounded-full">
          Start Growing
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;