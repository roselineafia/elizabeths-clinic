import type { Metadata } from "next";
import Image from "next/image";
import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { clinic, consultations } from "@/data/site";
import { consultationTypeFromQuery } from "@/lib/consultation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call The Elizabeth's Clinic on 0543212869, view opening hours in Ashongman Estate, Accra, and prepare an appointment request. The form does not confirm a booking.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const initialType = consultationTypeFromQuery(params.type);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with the clinic, or prepare a request."
        description="Telephone is the reliable way to arrange a visit. The form below helps you gather the details. It does not send them to the clinic."
      />
      <section className="py-14">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <div className="relative hidden aspect-[16/7] overflow-hidden rounded-3xl bg-pale lg:block">
              <Image
                src="/images/clinician-detail.jpg"
                alt="Close photograph of a clinician holding a stethoscope."
                fill
                sizes="40vw"
                className="object-cover object-center"
              />
            </div>
            <article className="rounded-3xl border border-line p-6">
              <h2 className="text-xl font-semibold text-ink">Clinic details</h2>
              <dl className="mt-4 space-y-3 text-sm leading-6">
                <div>
                  <dt className="font-semibold text-ink">Telephone</dt>
                  <dd>
                    <a className="text-brand underline" href={clinic.phoneHref}>
                      {clinic.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Location</dt>
                  <dd className="text-muted">{clinic.location}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Opening hours</dt>
                  <dd className="text-muted">{clinic.hours.summary}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Consultation fees</dt>
                  <dd className="text-muted">
                    General {consultations[0].priceLabel}. Specialist {consultations[1].priceLabel}.
                  </dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={clinic.phoneHref}
                  className="inline-flex justify-center rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Call the clinic
                </a>
                <a
                  href={clinic.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink"
                >
                  WhatsApp message
                </a>
              </div>
              <p className="mt-3 text-xs leading-5 text-muted">
                WhatsApp opens a chat you start yourself. The clinic has not said that messages are
                monitored around the clock, and WhatsApp is not an emergency line.
              </p>
            </article>
            <article className="rounded-3xl bg-pale p-6">
              <h2 className="text-xl font-semibold text-ink">Directions</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                The published location is Ashongman Estate, Accra, Ghana. A street address and a
                verified map pin have not been provided, so the map link searches the estate rather
                than marking the clinic door.
              </p>
              <a
                href={clinic.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-brand underline"
              >
                Search Ashongman Estate on Google Maps
              </a>
              <p className="mt-3 text-sm leading-6 text-muted">
                Confirm the precise clinic location with the team before you travel if you are
                unsure.
              </p>
            </article>
          </div>
          <div id="appointment" className="scroll-mt-24">
            <h2 className="mb-4 text-2xl font-semibold text-ink">Appointment request</h2>
            <AppointmentForm initialType={initialType} />
          </div>
        </Container>
      </section>
    </>
  );
}
