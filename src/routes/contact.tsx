import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mombasa Car Wash" },
      { name: "description", content: "Visit or call Mombasa Car Wash on Nyali Road. Open 7AM–7PM daily." },
      { property: "og:title", content: "Contact — Mombasa Car Wash" },
      { property: "og:description", content: "Location, hours, and contact details." },
    ],
  }),
  component: () => <div className="pt-24"><Contact /></div>,
});