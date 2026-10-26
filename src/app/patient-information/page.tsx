import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { PageHero } from "@/components/shared/PageHero";
import { faqsFor } from "@/data/faqs";
import { clinic, consultations } from "@/data/site";

export const metadata: Metadata = {
  title: "Patient Information",
  description:
    "Prepare for a visit to The Elizabeth's Clinic: what to bring, how appointment requests work, consultation fees, opening hours, and what to do in an emergency.",
};

export default function PatientInformationPage() {
  const [general, specialist] = consultations;
  return (
    <>
      <PageHero
        eyebrow="Patient information"
        title="What to know before you come in."
        description="Straightforward guidance for patients and families. If a detail is not listed here, please confirm it with the clinic."
      />

      <section className="py-16">
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-line p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">Before your visit</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
              <li>Relevant medical records, if you have them.</li>
              <li>A list of medicines you take.</li>
              <li>A note of allergies.</li>
              <li>Identification, and insurance documents if you use them.</li>
            </ul>
            <p className="mt-4 text-sm leading-6 text-muted">
              This website does not confirm that insurance is accepted. Ask the clinic if you plan
              to use a scheme.
            </p>
          </article>
          <article className="rounded-3xl border border-line p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">Appointment requests</h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              You can prepare a request on the contact page, then call {clinic.phoneDisplay}. The
              clinic confirms the date and time. Submitting the form does not reserve an
              appointment.
            </p>
            <Link
              href="/contact#appointment"
              className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white"
            >
              Go to the request form
            </Link>
          </article>
          <article className="rounded-3xl bg-mint p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">Consultation fees</h2>
            <p className="mt-4 text-lg font-semibold text-ink">
              General consultation: {general.priceLabel}
            </p>
            <p className="mt-1 text-lg font-semibold text-ink">
              Specialist consultation: {specialist.priceLabel}
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">{clinic.feeDisclaimer}</p>
          </article>
          <article className="rounded-3xl bg-pale p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">Opening hours</h2>
            <p className="mt-4 text-lg font-semibold text-ink">{clinic.hours.summary}</p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Please call during these hours to arrange a visit. Hours outside this schedule are
              not published here.
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-white pb-16">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            Patient rights and respectful care
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Dignity", "You should be treated with respect throughout your visit."],
              ["Privacy", "Personal health information is not for casual discussion."],
              ["Respectful communication", "You can ask questions and expect a clear answer."],
              ["Informed participation", "Decisions about your care should involve you."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-line p-5">
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="questions" className="scroll-mt-24 bg-pale/50 py-16">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">Frequently asked questions</h2>
          <div className="mt-6">
            <FaqAccordion items={faqsFor("patient")} />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-3xl border border-red-200 bg-red-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">Emergency disclaimer</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-ink">{clinic.emergencyNotice}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
