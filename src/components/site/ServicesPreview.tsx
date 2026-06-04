import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./Section";
import { SERVICES } from "./Services";

export function ServicesPreview() {
  const featured = SERVICES.slice(0, 4);
  return (
    <section className="relative bg-secondary/40 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Services"
          title="A shine for every ride."
          description="From a quick rinse to full ceramic detailing — transparent pricing, professional results."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map(({ id, icon: Icon, name, desc, duration, price }) => (
            <div key={id} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card-ocean transition-all hover:-translate-y-1 hover:shadow-ocean">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-ocean text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {duration}
                </div>
                <div className="font-display text-base font-bold text-ocean-deep">{price}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="ocean" size="lg">
            <Link to="/services">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}