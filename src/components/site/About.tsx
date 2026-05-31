import { ShieldCheck, Leaf, Zap, Wrench } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  { icon: Wrench, title: "Experienced Team", desc: "Trained detailers with years of hands-on craft." },
  { icon: ShieldCheck, title: "Modern Equipment", desc: "Pro-grade foam cannons, polishers and extractors." },
  { icon: Leaf, title: "Eco-Conscious", desc: "Biodegradable soaps gentle on paint and reef." },
  { icon: Zap, title: "Fast Turnaround", desc: "Most washes done in under 45 minutes." },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="About Us"
          title="Coastal care for every car that rolls in."
          description="Mombasa Car Wash delivers professional exterior washing, interior detailing, engine cleaning, polishing, vacuuming and premium detailing for all vehicle types. Quality cleaning, customer convenience, every car spotless."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-6 shadow-card-ocean transition-all hover:-translate-y-1 hover:shadow-ocean">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-aqua text-primary-foreground shadow-glow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground md:text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
