import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Mombasa Car Wash" },
      { name: "description", content: "Exterior wash, interior detailing, polish, engine cleaning and more — premium car care in Mombasa." },
      { property: "og:title", content: "Services — Mombasa Car Wash" },
      { property: "og:description", content: "Premium car wash and detailing services in Mombasa." },
    ],
  }),
  component: () => <div className="pt-24"><Services /></div>,
});