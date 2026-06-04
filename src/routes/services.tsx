import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { HomeCTA } from "@/components/site/HomeCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Mombasa Car Wash" },
      { name: "description", content: "Exterior wash, interior detailing, wax & polish, engine cleaning, tire shine and premium ceramic detailing in Mombasa." },
      { property: "og:title", content: "Services — Mombasa Car Wash" },
      { property: "og:description", content: "Transparent pricing for every wash and detail service." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <div className="pt-24" />
      <Services />
      <HomeCTA />
    </>
  );
}