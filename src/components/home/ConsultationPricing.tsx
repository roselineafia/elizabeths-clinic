import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { clinic, consultations } from "@/data/site";

export function ConsultationPricing() {
  const [general, specialist] = consultations;
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Fees"
          title="Clear consultation prices."
          description="Know the consultation fee before you request a visit. Other care is priced separately."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col rounded-3xl border border-line bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-semibold text-ink">{general.label}</h3>
            <p className="mt-3 text-4xl font-semibold text-brand">{general.priceLabel}</p>
            <p className="mt-4 flex-1 text-sm leading-6 text-muted">{general.description}</p>
            <Link
              href="/?type=general#appointment"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Request General Consultation
            </Link>
          </article>
          <article className="flex flex-col rounded-3xl bg-deep p-7 text-white shadow-sm">
            <h3 className="text-2xl font-semibold">{specialist.label}</h3>
            <p className="mt-3 text-4xl font-semibold">{specialist.priceLabel}</p>
            <p className="mt-4 flex-1 text-sm leading-6 text-white/80">{specialist.description}</p>
            <Link
              href="/?type=specialist#appointment"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-deep hover:bg-mint"
            >
              Request Specialist Consultation
            </Link>
          </article>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{clinic.feeDisclaimer}</p>
      </Container>
    </section>
  );
}
