import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqsFor } from "@/data/faqs";

export function FAQSection() {
  return (
    <section className="bg-pale/40 py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Questions"
          title="Practical answers before you visit."
          description="Fees, hours, location, and how appointment requests work."
        />
        <div>
          <FaqAccordion items={faqsFor("home")} />
          <Link
            href="/patient-information#questions"
            className="mt-4 inline-flex text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Read more patient information
          </Link>
        </div>
      </Container>
    </section>
  );
}
