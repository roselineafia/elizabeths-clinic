import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/data/doctors";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/5] bg-pale">
        <Image
          src={doctor.image}
          alt={doctor.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
          style={{ objectPosition: doctor.imagePosition }}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-ink">{doctor.name}</h3>
        <p className="mt-1 text-sm font-medium text-clinic-blue">{doctor.specialty}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{doctor.summary}</p>
        <Link
          href={`/contact?type=${doctor.consultationId}#appointment`}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Consultation enquiry
        </Link>
      </div>
    </article>
  );
}
