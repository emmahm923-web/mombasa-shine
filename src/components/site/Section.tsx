import { type ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ocean-deep">
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-bold text-foreground md:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 text-balance text-base text-muted-foreground md:text-lg">{description}</p>
      )}
    </div>
  );
}
