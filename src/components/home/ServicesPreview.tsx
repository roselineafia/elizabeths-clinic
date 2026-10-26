import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/data/services";

export function ServicesPreview() {
  const [featured, ...rest] = services;
  return (
    <section className="bg-pale/50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Healthcare Services for Your Needs."
          description="These categories describe the kinds of consultations patients can ask about. Availability should be confirmed with the clinic before you attend."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ServiceCard service={featured} featured />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {rest.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
