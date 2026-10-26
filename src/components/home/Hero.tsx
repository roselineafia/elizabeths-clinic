import Image from "next/image";
import Link from "next/link";
import { MapPin, Stethoscope, HeartHandshake } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { clinic } from "@/data/site";

const highlights = [
  { icon: HeartHandshake, label: "Patient-centred approach." },
  { icon: Stethoscope, label: "Professional consultations." },
  { icon: MapPin, label: "Convenient Ashongman Estate location." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-mint/50 to-pale">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Compassionate care. Your health first.
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Healthcare That Puts <span className="text-brand">You First.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            At The Elizabeth&apos;s Clinic, we believe quality healthcare begins with listening. We
            are committed to providing respectful, patient-centred care and helping individuals and
            families make informed decisions about their health.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#appointment"
              className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Request an Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-brand/30 bg-white px-5 py-3 text-sm font-semibold text-brand-dark hover:border-brand"
            >
              Explore Our Services
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <li key={item.label} className="flex items-start gap-2 text-sm font-medium text-ink">
                <item.icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -left-6 top-8 hidden h-28 w-28 rounded-full bg-brand/10 lg:block" aria-hidden="true" />
          <div className="absolute -right-4 bottom-16 hidden h-20 w-20 rounded-full bg-clinic-blue/10 lg:block" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-pale shadow-lg">
            <Image
              src="/images/hero-clinician.jpg"
              alt="Studio portrait of a smiling clinician in a white coat and stethoscope."
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-md sm:left-6 sm:right-auto sm:max-w-xs">
            <p className="text-sm font-semibold text-ink">{clinic.locationShort}</p>
            <p className="mt-1 text-sm text-muted">{clinic.hours.compact}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
