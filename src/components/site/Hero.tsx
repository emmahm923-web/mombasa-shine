import { ArrowRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-foam.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury car covered in white foam at Mombasa Car Wash"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/60 via-ocean-deep/70 to-ocean-deep/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.14_200/0.35),transparent_60%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:justify-center md:px-8 md:pb-24 md:pt-28">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Mombasa's #1 Detailing Studio
          </div>
          <h1 className="text-balance text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Professional Shine,{" "}
            <span className="bg-gradient-to-r from-accent to-ocean-foam bg-clip-text text-transparent">
              Every Time.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base text-white/85 md:text-lg">
            Fast. Affordable. Reliable car wash and detailing services in Mombasa —
            booked in under a minute.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/book">
                Book Now <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/services">View Services</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm">4.9 from 800+ customers</span>
            </div>
            <div className="hidden h-4 w-px bg-white/30 sm:block" />
            <div className="text-sm">Open today · 7:00 AM – 7:00 PM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
