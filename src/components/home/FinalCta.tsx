import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { clinic } from "@/data/site";

export function FinalCta() {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-[2rem] bg-brand px-6 py-10 text-white sm:px-10">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Take the Next Step in Your Healthcare Journey.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/85">
            Request a consultation or call the clinic during opening hours. A request is not a
            confirmed appointment.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#appointment"
              className="inline-flex justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-mint"
            >
              Request an Appointment
            </Link>
            <a
              href={clinic.phoneHref}
              className="inline-flex justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Call {clinic.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
