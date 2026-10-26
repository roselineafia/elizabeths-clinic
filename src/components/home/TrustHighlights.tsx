import { Clock3, MapPin, Stethoscope, UserRound } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { clinic, consultations } from "@/data/site";

const items = [
  {
    icon: Stethoscope,
    label: "General consultation",
    value: consultations[0].priceLabel,
  },
  {
    icon: UserRound,
    label: "Specialist consultation",
    value: consultations[1].priceLabel,
  },
  {
    icon: Clock3,
    label: "Opening hours",
    value: clinic.hours.compact,
  },
  {
    icon: MapPin,
    label: "Location",
    value: clinic.locationShort,
  },
];

export function TrustHighlights() {
  return (
    <section className="relative z-10 -mt-2 pb-4">
      <Container>
        <ul className="grid gap-3 rounded-3xl border border-line bg-white p-3 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-3 rounded-2xl bg-pale/60 px-4 py-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-brand">
                <item.icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wide text-muted">
                  {item.label}
                </span>
                <span className="block text-sm font-semibold text-ink">{item.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
