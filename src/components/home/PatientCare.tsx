import { Ear, Lock, MessageCircle, Scale, Shield, Undo2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const points = [
  { icon: Ear, title: "Listening to patient concerns", text: "Your account of what is happening comes first." },
  { icon: MessageCircle, title: "Respectful communication", text: "Questions are welcome, without judgement." },
  { icon: Scale, title: "Clear explanations", text: "Options are described in language you can use." },
  { icon: Lock, title: "Patient privacy", text: "Personal information is treated with care and discretion." },
  { icon: Shield, title: "Informed decision-making", text: "You take part in choices about your care." },
  { icon: Undo2, title: "Follow-up guidance", text: "You leave knowing what to do next, or what still needs confirming." },
];

export function PatientCare() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How we care"
          title="Your Health. Your Questions. Your Care."
        />
        <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <li key={point.title} className="flex gap-4 border-t border-line pt-5">
              <point.icon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-clinic-blue" />
              <div>
                <h3 className="font-semibold text-ink">{point.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{point.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
