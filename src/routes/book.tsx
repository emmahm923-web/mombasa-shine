import { createFileRoute } from "@tanstack/react-router";
import { Booking } from "@/components/site/Booking";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Wash — Mombasa Car Wash" },
      { name: "description", content: "Book your car wash online in under a minute. Pick a service, date, and time." },
      { property: "og:title", content: "Book a Wash — Mombasa Car Wash" },
      { property: "og:description", content: "Schedule your premium car wash and detailing online." },
    ],
  }),
  component: () => <div className="pt-24"><Booking /></div>,
});