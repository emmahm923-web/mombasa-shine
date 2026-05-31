import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Booking } from "@/components/site/Booking";
import { Gallery } from "@/components/site/Gallery";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mombasa Car Wash — Professional Shine, Every Time" },
      { name: "description", content: "Premium car wash and detailing in Mombasa. Book exterior wash, interior detailing, polish, engine cleaning and more — online in 60 seconds." },
      { property: "og:title", content: "Mombasa Car Wash — Professional Shine, Every Time" },
      { property: "og:description", content: "Fast, affordable, reliable car wash and detailing services in Mombasa." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" richColors />
    </div>
  );
}
