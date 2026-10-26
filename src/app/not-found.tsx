import Link from "next/link";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Page not found</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink">That page is not on this website.</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted">
        The address may be out of date. You can return home, read about services, or request an
        appointment.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="inline-flex justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white">
          Back to home
        </Link>
        <Link
          href="/contact#appointment"
          className="inline-flex justify-center rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink"
        >
          Request an Appointment
        </Link>
      </div>
    </Container>
  );
}
