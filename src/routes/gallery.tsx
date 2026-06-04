import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mombasa Car Wash" },
      { name: "description", content: "See our recent car detailing transformations in Mombasa." },
      { property: "og:title", content: "Gallery — Mombasa Car Wash" },
      { property: "og:description", content: "Detailing transformations and portfolio of work." },
    ],
  }),
  component: () => <div className="pt-24"><Gallery /></div>,
});