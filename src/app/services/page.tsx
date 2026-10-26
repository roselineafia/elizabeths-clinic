import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqsFor } from "@/data/faqs";
import { services } from "@/data/services";
import { clinic, consultations } from "@/data/site";

export const metadata: Metadata = {
  title: "Medical Services",
  description:
    "Read about general and specialist consultations, preventive conversations, screening, family health, and follow-up visits at The Elizabeth's Clinic in Accra.",
};

export default function ServicesPage() {
  const [general, specialist] = consultations;
  return (
    <>
      <PageHero
        eyebrow="Medical services"
        title="Care organised around the reason for your visit."
        description="The Elizabeth's Clinic offers consultations that start with listening. The sections below explain what patients can ask about. They are not a promise that every check or specialty is available today."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact?type=general#appointment"
            className="inline-flex justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Request a general consultation
          </Link>
          <Link
            href="/contact?type=specialist#appointment"
            className="inline-flex justify-center rounded-full border border-brand/30 bg-white px-5 py-3 text-sm font-semibold text-brand-dark"
          >
            Request a specialist consultation
          </Link>
        </div>
      </PageHero>

      <section className="py-16">
        <Container>
          <SectionHeading
            title="A patient-centred starting point."
            description="Tell the clinic what you need help with. The team can then say whether that consultation can be arranged, what it costs, and what to bring."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl bg-mint p-6">
              <h2 className="text-xl font-semibold text-ink">{general.label}</h2>
              <p className="mt-2 text-3xl font-semibold text-brand">{general.priceLabel}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{general.description}</p>
            </article>
            <article className="rounded-3xl bg-deep p-6 text-white">
              <h2 className="text-xl font-semibold">{specialist.label}</h2>
              <p className="mt-2 text-3xl font-semibold">{specialist.priceLabel}</p>
              <p className="mt-3 text-sm leading-6 text-white/80">{specialist.description}</p>
            </article>
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">{clinic.feeDisclaimer}</p>
        </Container>
      </section>

      <section className="bg-pale/40 py-16">
        <Container className="space-y-6">
          {services.map((service) => {
            const fee = consultations.find((item) => item.id === service.consultationId);
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-3xl border border-line bg-white p-6 sm:p-8"
              >
                <h2 className="text-2xl font-semibold text-ink">{service.title}</h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-muted">{service.detail}</p>
                <p className="mt-4 text-sm font-semibold text-ink">
                  Related consultation fee: {fee?.priceLabel}. Confirm before you attend.
                </p>
                <Link
                  href={`/contact?type=${service.consultationId}#appointment`}
                  className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
                >
                  Request this consultation
                </Link>
              </article>
            );
          })}
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="How to request a service."
              description="Choose the consultation that fits your question, prepare a preferred date, and call 0543212869. The website form does not book the visit for you."
            />
          </div>
          <FaqAccordion items={faqsFor("services")} />
        </Container>
      </section>
    </>
  );
}
