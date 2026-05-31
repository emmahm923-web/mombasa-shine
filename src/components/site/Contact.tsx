import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SectionHeader } from "./Section";

const rows = [
  { icon: MapPin, label: "Location", value: "Nyali Road, Mombasa, Kenya" },
  { icon: Phone, label: "Phone", value: "+254 700 000 000", href: "tel:+254700000000" },
  { icon: MessageCircle, label: "WhatsApp", value: "+254 700 000 000", href: "https://wa.me/254700000000" },
  { icon: Mail, label: "Email", value: "hello@mombasacarwash.co.ke", href: "mailto:hello@mombasacarwash.co.ke" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 7:00 AM – 7:00 PM · Sun: 8:00 AM – 5:00 PM" },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader eyebrow="Contact" title="Find us, call us, message us." />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {rows.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card-ocean transition-all hover:-translate-y-0.5 hover:shadow-ocean">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-aqua text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                    <div className="mt-0.5 text-base font-medium text-foreground">{value}</div>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-card-ocean min-h-[400px]">
            <iframe
              title="Mombasa Car Wash location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=39.6%2C-4.07%2C39.72%2C-4.0&layer=mapnik&marker=-4.0435%2C39.6682"
              className="h-full w-full"
              style={{ border: 0, minHeight: 400 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
