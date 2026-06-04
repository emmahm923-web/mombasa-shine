import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";
import { HomeCTA } from "@/components/site/HomeCTA";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mombasa Car Wash" },
      { name: "description", content: "See our detailing transformations: foam washes, polishing, interiors and ceramic finishes." },
      { property: "og:title", content: "Gallery — Mombasa Car Wash" },
      { property: "og:description", content: "Foam, shine, reflections — every detail captured." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <div className="pt-24" />
      <Gallery />
      <HomeCTA />
    </>
  );
}