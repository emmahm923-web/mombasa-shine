import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Mombasa Car Wash" },
      { name: "description", content: "Read what 800+ customers say about Mombasa Car Wash." },
      { property: "og:title", content: "Reviews — Mombasa Car Wash" },
      { property: "og:description", content: "Customer testimonials and ratings." },
    ],
  }),
  component: () => <div className="pt-24"><Testimonials /></div>,
});