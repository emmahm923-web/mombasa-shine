import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomeCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-ocean" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.14_200/0.35),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <h2 className="text-balance font-display text-3xl font-bold text-white md:text-5xl">
          Ready for that showroom shine?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">
          Reserve your slot in under a minute. We'll handle the rest.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero" size="xl">
            <Link to="/book">
              <CalendarDays className="h-5 w-5" /> Book a wash
            </Link>
          </Button>
          <Button asChild variant="glass" size="xl">
            <Link to="/contact">
              Contact us <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}