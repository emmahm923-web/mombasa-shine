import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mombasa Car Wash — Professional Shine, Every Time" },
      { name: "description", content: "Premium car wash and detailing in Mombasa. Book exterior wash, interior detailing, polish, engine cleaning and more — online in 60 seconds." },
      { property: "og:title", content: "Mombasa Car Wash — Professional Shine, Every Time" },
      { property: "og:description", content: "Fast, affordable, reliable car wash and detailing services in Mombasa." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
    </>
  );
}
