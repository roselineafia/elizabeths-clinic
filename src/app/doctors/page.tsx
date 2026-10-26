import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { DoctorsDirectory } from "@/components/doctors/DoctorsDirectory";
import { doctors } from "@/data/doctors";
import { clinic } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the clinicians at The Elizabeth's Clinic, including family health, physician, surgical, pediatric, neurosurgical, and cardiology consultations.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our doctors"
        title="Clinicians at The Elizabeth's Clinic."
        description="Family health and specialist consultations in Ashongman Estate. Each profile shows who to ask for when you enquire."
      />
      <section className="py-14">
        <Container>
          <div className="rounded-3xl border border-brand/20 bg-mint px-5 py-4 text-sm leading-6 text-ink">
            A visit with a particular specialist depends on availability. Please call the clinic
            before you travel. Consultation fees do not include extra investigations, procedures,
            or medicines.
          </div>
          <div className="mt-8">
            <DoctorsDirectory doctors={[...doctors]} />
          </div>
        </Container>
      </section>
      <section className="pb-16">
        <Container className="rounded-[2rem] bg-deep px-6 py-10 text-white sm:px-10">
          <h2 className="text-2xl font-semibold">Ask before you book a specialist visit.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80">
            A specialist consultation is GH₵1,000. The fee does not guarantee that a named
            specialty is available that week. Call {clinic.phoneDisplay} to ask what can be arranged.
          </p>
          <Link
            href="/contact?type=specialist#appointment"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-deep"
          >
            Consultation enquiry
          </Link>
        </Container>
      </section>
    </>
  );
}
