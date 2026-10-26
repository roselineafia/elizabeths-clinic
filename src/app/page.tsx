import type { Metadata } from "next";
import { AppointmentSection } from "@/components/home/AppointmentSection";
import { ConsultationPricing } from "@/components/home/ConsultationPricing";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { PatientCare } from "@/components/home/PatientCare";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TrustHighlights } from "@/components/home/TrustHighlights";
import { Welcome } from "@/components/home/Welcome";
import { consultationTypeFromQuery } from "@/lib/consultation";

export const metadata: Metadata = {
  title: {
    absolute: "The Elizabeth's Clinic | Patient-Centred Healthcare in Accra",
  },
  description:
    "Discover patient-centred healthcare at The Elizabeth's Clinic in Ashongman Estate, Accra. View medical services, consultation fees, opening hours, and appointment request information.",
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const initialType = consultationTypeFromQuery(params.type);
  return (
    <>
      <Hero />
      <TrustHighlights />
      <Welcome />
      <ServicesPreview />
      <ConsultationPricing />
      <DoctorsPreview />
      <AppointmentSection initialType={initialType} />
      <PatientCare />
      <FAQSection />
      <FinalCta />
    </>
  );
}
