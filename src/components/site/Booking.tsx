import { useState } from "react";
import { z } from "zod";
import { CalendarDays, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeader } from "./Section";
import { SERVICES } from "./Services";
import { toast } from "sonner";

const vehicleTypes = ["Sedan", "SUV", "Pickup", "Van", "Motorcycle"];
const timeSlots = ["7:00 AM", "9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  vehicle: z.string().min(1, "Select vehicle type"),
  service: z.string().min(1, "Select a service"),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  notes: z.string().max(500).optional(),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  name: "", phone: "", email: "", vehicle: "", service: "", date: "", time: "", notes: "",
};

export function Booking() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please complete the form");
      return;
    }
    setSubmitted(true);
    toast.success("Booking received — we'll confirm shortly.");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="book" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Book Online"
          title="Reserve your wash in 60 seconds."
          description="Pick a service, choose a time — we'll handle the shine."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-ocean md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center animate-fade-up">
                <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-gradient-aqua text-primary-foreground shadow-glow">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Booking received!</h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Your booking has been received. We'll confirm shortly via WhatsApp or a phone call.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => { setSubmitted(false); setForm(initial); }}>
                  Book another wash
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Full name">
                  <Input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jane Doe" maxLength={80} />
                </Field>
                <Field label="Phone number">
                  <Input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+254 700 000 000" maxLength={20} />
                </Field>
                <Field label="Email" className="md:col-span-2">
                  <Input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" maxLength={120} />
                </Field>
                <Field label="Vehicle type">
                  <Select value={form.vehicle} onValueChange={(v) => set("vehicle", v)}>
                    <SelectTrigger><SelectValue placeholder="Select vehicle" /></SelectTrigger>
                    <SelectContent>
                      {vehicleTypes.map((v) => <SelectItem key={v} value={v}>{v}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Service">
                  <Select value={form.service} onValueChange={(v) => set("service", v)}>
                    <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => <SelectItem key={s.id} value={s.name}>{s.name} — {s.price}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Preferred date">
                  <Input type="date" min={today} value={form.date} onChange={(e) => set("date", e.target.value)} />
                </Field>
                <Field label="Time slot">
                  <Select value={form.time} onValueChange={(v) => set("time", v)}>
                    <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Notes (optional)" className="md:col-span-2">
                  <Textarea rows={3} value={form.notes ?? ""} onChange={(e) => set("notes", e.target.value)} placeholder="Anything we should know? Special requests, location, etc." maxLength={500} />
                </Field>
                <Button type="submit" variant="hero" size="xl" className="md:col-span-2">
                  <CalendarDays className="h-5 w-5" /> Confirm Booking
                </Button>
              </form>
            )}
          </div>
          <aside className="flex flex-col gap-4">
            <a href="https://wa.me/254700000000?text=Hi%20Mombasa%20Car%20Wash%2C%20I%27d%20like%20to%20book%20a%20wash." target="_blank" rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-[#25D366] p-5 text-white shadow-card-ocean transition-transform hover:-translate-y-0.5">
              <MessageCircle className="h-7 w-7" />
              <div>
                <div className="text-xs font-semibold uppercase opacity-90">Quick book</div>
                <div className="font-display text-base font-bold">WhatsApp Us</div>
              </div>
            </a>
            <a href="tel:+254700000000"
              className="flex items-center gap-4 rounded-2xl bg-gradient-ocean p-5 text-white shadow-card-ocean transition-transform hover:-translate-y-0.5">
              <Phone className="h-7 w-7" />
              <div>
                <div className="text-xs font-semibold uppercase opacity-90">Or call</div>
                <div className="font-display text-base font-bold">+254 700 000 000</div>
              </div>
            </a>
            <div className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
              <div className="font-display font-semibold text-foreground">Open today</div>
              <div className="mt-1">7:00 AM – 7:00 PM</div>
              <div className="mt-3 text-xs">Walk-ins welcome. Booking guarantees your slot.</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
