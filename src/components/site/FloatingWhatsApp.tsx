import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/254700000000?text=Hi%20Mombasa%20Car%20Wash%2C%20I%27d%20like%20to%20book%20a%20wash."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition-transform hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}
