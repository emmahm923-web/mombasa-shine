import { Car, Sparkles, Droplets, Wind, Wrench, CircleDot, Gem, Truck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./Section";

export const SERVICES = [
  { id: "exterior", icon: Droplets, name: "Exterior Wash", desc: "Hand wash, rinse, dry with microfiber.", duration: "20 min", price: "KSh 500" },
  { id: "interior", icon: Wind, name: "Interior Vacuum", desc: "Deep vacuum, dashboard wipe, glass clean.", duration: "30 min", price: "KSh 700" },
  { id: "fullbody", icon: Car, name: "Full Body Wash", desc: "Foam wash, exterior + interior package.", duration: "45 min", price: "KSh 1,200" },
  { id: "wax", icon: Sparkles, name: "Wax & Polish", desc: "Carnauba wax for mirror-like shine.", duration: "60 min", price: "KSh 2,500" },
  { id: "engine", icon: Wrench, name: "Engine Cleaning", desc: "Safe degrease and dressing of engine bay.", duration: "40 min", price: "KSh 1,500" },
  { id: "tire", icon: CircleDot, name: "Tire Shine", desc: "Wheels scrubbed, tires dressed glossy black.", duration: "15 min", price: "KSh 400" },
  { id: "premium", icon: Gem, name: "Premium Detailing", desc: "Clay bar, paint correction, ceramic sealant.", duration: "3 hrs", price: "KSh 8,500" },
  { id: "suv", icon: Truck, name: "SUV & Large Vehicle", desc: "Full-size wash tailored for SUVs and vans.", duration: "60 min", price: "KSh 1,800" },
];

export function Services() {
  return (
    <section id="services" className="relative bg-secondary/40 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Pick the shine your car deserves."
          description="From a quick rinse to full ceramic detailing — transparent pricing, professional results."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ id, icon: Icon, name, desc, duration, price }) => (
            <div key={id} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card-ocean transition-all hover:-translate-y-1 hover:shadow-ocean">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-aqua opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-ocean text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="relative font-display text-lg font-semibold text-foreground">{name}</h3>
              <p className="relative mt-1 text-sm text-muted-foreground">{desc}</p>
              <div className="relative mt-4 flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {duration}
                </div>
                <div className="font-display text-base font-bold text-ocean-deep">{price}</div>
              </div>
              <Button asChild variant="default" size="sm" className="relative mt-4 w-full">
                <a href="#book">Book This Service</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
