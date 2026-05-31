import { Droplets } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ocean-deep text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-10 md:flex-row md:px-8">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-aqua">
            <Droplets className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-display text-lg font-bold">
            Mombasa<span className="text-accent">Wash</span>
          </span>
        </div>
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Mombasa Car Wash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
