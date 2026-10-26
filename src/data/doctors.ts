export const doctors = [
  {
    id: "roseline-ansabeah",
    name: "Dr. Roseline Ansabeah",
    specialty: "Family Health Practitioner",
    filter: "family",
    consultationId: "general",
    summary:
      "Family health consultations for everyday concerns, check-ups, and follow-up care.",
    image: "/images/doctors/roseline-ansabeah.jpg",
    imageAlt: "Professional portrait",
    imagePosition: "center 18%",
  },
  {
    id: "augustine-domelevo",
    name: "Dr. Augustine Domelevo",
    specialty: "Physician Specialist",
    filter: "physician",
    consultationId: "specialist",
    summary:
      "Physician specialist consultations for medical assessment and clinical advice.",
    image: "/images/doctors/augustine-domelevo.jpg",
    imageAlt: "Professional portrait",
    imagePosition: "center 12%",
  },
  {
    id: "opoku",
    name: "Dr. Opoku",
    specialty: "Surgeon Specialist",
    filter: "surgery",
    consultationId: "specialist",
    summary:
      "Surgical specialist consultations, arranged according to clinic availability.",
    image: "/images/doctors/opoku.jpg",
    imageAlt: "Professional portrait",
    imagePosition: "center 15%",
  },
  {
    id: "sabina-mensah",
    name: "Dr. Sabina Mensah",
    specialty: "Pediatrician Specialist",
    filter: "pediatric",
    consultationId: "specialist",
    summary: "Consultations for children, including assessment and follow-up care.",
    image: "/images/doctors/sabina-mensah.jpg",
    imageAlt: "Professional portrait",
    imagePosition: "center 8%",
  },
  {
    id: "michael",
    name: "Dr. Michael",
    specialty: "Neurosurgeon Specialist",
    filter: "neurosurgery",
    consultationId: "specialist",
    summary:
      "Neurosurgical consultations. Call the clinic to confirm this specialty can be arranged.",
    image: "/images/doctors/michael.jpg",
    imageAlt: "Professional portrait",
    imagePosition: "78% 28%",
  },
  {
    id: "narcia-hammond",
    name: "Dr. Narcia Hammond",
    specialty: "Cardiologist",
    filter: "cardiology",
    consultationId: "specialist",
    summary: "Cardiology consultations for heart-related concerns, subject to availability.",
    image: "/images/doctors/narcia-hammond.jpg",
    imageAlt: "Professional portrait",
    imagePosition: "center 12%",
  },
] as const;

export type Doctor = (typeof doctors)[number];

export const doctorFilters = [
  { id: "all", label: "All doctors" },
  { id: "family", label: "Family health" },
  { id: "physician", label: "Physician" },
  { id: "surgery", label: "Surgery" },
  { id: "pediatric", label: "Pediatrician" },
  { id: "neurosurgery", label: "Neurosurgery" },
  { id: "cardiology", label: "Cardiology" },
] as const;
