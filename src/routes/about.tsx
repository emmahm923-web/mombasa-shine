import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mombasa Car Wash" },
      { name: "description", content: "Coastal care for every car. Trained detailers, modern equipment and eco-conscious products in Mombasa." },
      { property: "og:title", content: "About — Mombasa Car Wash" },
      { property: "og:description", content: "Trained detailers, modern equipment, eco-conscious products." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <div className="pt-24" />
      <About />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}