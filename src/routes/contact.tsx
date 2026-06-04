import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mombasa Car Wash" },
      { name: "description", content: "Find us on Nyali Road, Mombasa. Call, WhatsApp or email to reach our team." },
      { property: "og:title", content: "Contact — Mombasa Car Wash" },
      { property: "og:description", content: "Find us, call us, message us." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <div className="pt-24" />
      <Contact />
    </>
  );
}