import { createFileRoute } from "@tanstack/react-router";
import { Booking } from "@/components/site/Booking";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Wash — Mombasa Car Wash" },
      { name: "description", content: "Reserve your car wash or detailing slot online in under 60 seconds." },
      { property: "og:title", content: "Book a Wash — Mombasa Car Wash" },
      { property: "og:description", content: "Pick a service, choose a time — we'll handle the shine." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <div className="pt-24" />
      <Booking />
    </>
  );
}