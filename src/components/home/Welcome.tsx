import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { clinic } from "@/data/site";

export function Welcome() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Welcome"
            title="Care That Begins With You."
            description="A visit should feel clear and respectful from the first conversation. We take time to listen, explain options in plain language, and protect your privacy while you decide what is right for you."
          />
          <div className="mt-6 space-y-4 text-base leading-7 text-muted">
            <p>
              Patients are treated as people, not as a list of symptoms. You can ask questions,
              share what matters to you, and take part in decisions about your care.
            </p>
            <p>
              Dignity, privacy, and straightforward communication stay at the centre of every
              appointment. If something is uncertain, we say so and help you understand the next
              practical step.
            </p>
          </div>
          <p className="mt-6 border-l-4 border-brand pl-4 text-base font-medium text-ink">
            {clinic.tagline}
          </p>
        </div>
        <figure className="overflow-hidden rounded-[2rem] border border-line bg-pale">
          <div className="relative aspect-[5/4]">
            <Image
              src="/images/consultation-still.jpg"
              alt="A stethoscope beside a laptop."
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
      </Container>
    </section>
  );
}
