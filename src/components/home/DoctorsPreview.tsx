import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { DoctorCard } from "@/components/shared/DoctorCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { doctors } from "@/data/doctors";

export function DoctorsPreview() {
  return (
    <section className="bg-mint/40 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Profiles"
            title="Your Care, Guided by Professionals."
            description="Family health and specialist clinicians at The Elizabeth's Clinic. Call to confirm who is available before you visit."
          />
          <Link href="/doctors" className="shrink-0 text-sm font-semibold text-brand hover:text-brand-dark">
            View all doctors
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </Container>
    </section>
  );
}
