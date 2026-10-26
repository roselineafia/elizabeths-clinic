import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Choose your consultation type.",
    text: "Select a general consultation at GH₵300 or a specialist consultation at GH₵1,000.",
  },
  {
    number: "02",
    title: "Submit your preferred appointment details.",
    text: "Add a preferred date and a way for the clinic to reach you by telephone.",
  },
  {
    number: "03",
    title: "Wait for confirmation from the clinic.",
    text: "A request is not a booking. The clinic confirms the date and time.",
  },
];

export function AppointmentSection({
  initialType = "general",
}: {
  initialType?: "general" | "specialist";
}) {
  return (
    <section id="appointment" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Appointments"
          title="How to request an appointment."
          description="Use the form to prepare your request, then call the clinic. Nothing is reserved until the clinic confirms it."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="rounded-3xl border border-line bg-white p-5">
              <p className="text-sm font-semibold text-brand">{step.number}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <AppointmentForm initialType={initialType} />
        </div>
      </Container>
    </section>
  );
}
