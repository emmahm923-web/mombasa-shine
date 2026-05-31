import { Clock, BadgeCheck, Sparkles, Smile, Leaf, CalendarCheck, Zap, Award } from "lucide-react";

const items = [
  { icon: Clock, t: "Same-Day Service" },
  { icon: BadgeCheck, t: "Affordable Pricing" },
  { icon: Sparkles, t: "Professional Detailing" },
  { icon: Smile, t: "Friendly Staff" },
  { icon: Leaf, t: "Premium Products" },
  { icon: CalendarCheck, t: "Convenient Booking" },
  { icon: Zap, t: "Fast Service" },
  { icon: Award, t: "Satisfaction Guaranteed" },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-ocean" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.78_0.14_200/0.3),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Why Choose Us
          </div>
          <h2 className="text-balance text-3xl font-bold text-white md:text-5xl">
            Eight reasons Mombasa keeps coming back.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map(({ icon: Icon, t }) => (
            <div key={t} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-1">
              <Icon className="h-7 w-7 text-accent" />
              <div className="mt-3 font-display text-sm font-semibold text-white md:text-base">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
