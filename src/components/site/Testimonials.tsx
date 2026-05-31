import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./Section";

const reviews = [
  { name: "Amina K.", text: "Best car wash in Mombasa. My car looked brand new — the foam wash and wax made the paint glow.", rating: 5 },
  { name: "Daniel O.", text: "Fast service and excellent detailing. They cleaned spots I thought were permanent.", rating: 5 },
  { name: "Priya S.", text: "Easy online booking and very professional staff. I'm switching all my cars to this place.", rating: 5 },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary/40 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader eyebrow="Reviews" title="Loved by Mombasa drivers." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card-ocean md:p-8">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-accent/30" />
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-base text-foreground/90">"{r.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-aqua font-display text-sm font-bold text-primary-foreground">
                  {r.name[0]}
                </div>
                <div className="font-medium text-foreground">{r.name}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
