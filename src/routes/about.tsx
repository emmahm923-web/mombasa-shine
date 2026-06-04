import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mombasa Car Wash" },
      { name: "description", content: "Learn about Mombasa Car Wash — coastal-inspired premium detailing studio." },
      { property: "og:title", content: "About — Mombasa Car Wash" },
      { property: "og:description", content: "Our story, mission, and commitment to quality." },
    ],
  }),
  component: () => <div className="pt-24"><About /></div>,
});