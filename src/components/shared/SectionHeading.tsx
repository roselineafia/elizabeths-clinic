import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const Heading = as;
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
