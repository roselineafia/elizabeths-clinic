import type { ReactNode } from "react";
import { Container } from "@/components/shared/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-gradient-to-b from-mint via-white to-white">
      <Container className="py-14 sm:py-18 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
