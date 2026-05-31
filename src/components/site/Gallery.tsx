import { SectionHeader } from "./Section";
import g1 from "@/assets/gallery-polish.jpg";
import g2 from "@/assets/gallery-pressure.jpg";
import g3 from "@/assets/gallery-interior.jpg";
import g4 from "@/assets/gallery-foam-suv.jpg";
import g5 from "@/assets/gallery-rim.jpg";
import g6 from "@/assets/gallery-red.jpg";
import g7 from "@/assets/gallery-drying.jpg";
import g8 from "@/assets/hero-foam.jpg";

const photos = [
  { src: g4, alt: "SUV covered in foam", h: "row-span-2" },
  { src: g1, alt: "Polishing silver SUV hood", h: "" },
  { src: g2, alt: "Pressure washing rim", h: "" },
  { src: g6, alt: "Glossy red car paint", h: "" },
  { src: g3, alt: "Interior vacuum detailing", h: "row-span-2" },
  { src: g5, alt: "Polished black rim", h: "" },
  { src: g7, alt: "Drying blue car", h: "row-span-2" },
  { src: g8, alt: "Luxury sedan foam wash", h: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Gallery"
          title="The work speaks for itself."
          description="Foam, shine, reflections — every detail captured."
        />
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {photos.map((p, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-2xl shadow-card-ocean ${p.h}`}>
              <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
