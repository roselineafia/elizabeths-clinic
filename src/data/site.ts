export const clinic = {
  name: "The Elizabeth's Clinic",
  shortIntro:
    "A private clinic in Ashongman Estate, Accra, offering patient-centred consultations with clear information about fees, hours, and how to request an appointment.",
  location: "Ashongman Estate, Accra, Ghana",
  locationShort: "Ashongman Estate, Accra",
  phoneDisplay: "0543212869",
  phoneHref: "tel:0543212869",
  whatsappHref: "https://wa.me/233543212869",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Ashongman%20Estate%2C%20Accra%2C%20Ghana",
  hours: {
    days: "Monday to Friday",
    summary: "Monday to Friday, 8:00 AM–5:00 PM",
    compact: "Mon–Fri, 8 AM–5 PM",
  },
  tagline: "Professional care. Clear information. Respect for every patient.",
  announcement: "Your health matters. We're here to care for you.",
  feeDisclaimer:
    "Consultation fees are displayed for guidance. Additional investigations, procedures, medicines, or other services may incur separate charges. Please confirm the applicable fees with the clinic.",
  emergencyNotice:
    "This website is not an emergency service. Appointment requests are not monitored as an emergency communication channel. For an immediate medical emergency, seek urgent help at the nearest appropriate emergency facility or contact the relevant local emergency service.",
  formSuccess:
    "Your appointment request has been prepared successfully. This demonstration website does not send requests directly to the clinic. Please call 0543212869 to confirm availability and arrange your appointment.",
} as const;

export const consultations = [
  {
    id: "general",
    label: "General Consultation",
    price: 300,
    priceLabel: "GH₵300",
    description:
      "For general health concerns, initial assessments, and appropriate guidance on next steps.",
  },
  {
    id: "specialist",
    label: "Specialist Consultation",
    price: 1000,
    priceLabel: "GH₵1,000",
    description:
      "For specialist assessment, subject to the relevant specialty and appointment availability.",
  },
] as const;

export type ConsultationId = (typeof consultations)[number]["id"];

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Medical Services" },
  { href: "/doctors", label: "Our Doctors" },
  { href: "/patient-information", label: "Patient Information" },
  { href: "/contact", label: "Contact" },
] as const;

export const socialLinks: { id: string; label: string; href: string }[] = [
  { id: "instagram", label: "Instagram", href: "" },
  { id: "facebook", label: "Facebook", href: "" },
  { id: "tiktok", label: "TikTok", href: "" },
];

export const timeOptions = [
  { value: "", label: "No preferred time" },
  { value: "08:00-10:00", label: "8:00 AM–10:00 AM" },
  { value: "10:00-12:00", label: "10:00 AM–12:00 PM" },
  { value: "12:00-14:00", label: "12:00 PM–2:00 PM" },
  { value: "14:00-17:00", label: "2:00 PM–5:00 PM" },
] as const;

export function getConsultation(id: string | null | undefined) {
  return consultations.find((item) => item.id === id);
}

export function siteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) {
    try {
      return new URL(configured).origin;
    } catch {
      return "http://localhost:3000";
    }
  }
  return "http://localhost:3000";
}
