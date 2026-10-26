export const services = [
  {
    id: "general-consultation",
    title: "General Medical Consultation",
    icon: "stethoscope",
    consultationId: "general",
    summary:
      "A consultation for new or ongoing health concerns, with time to explain what you are experiencing and discuss sensible next steps.",
    detail:
      "A general consultation is a starting point for many patients. The clinician listens to your concern, reviews relevant information you bring, and explains what can reasonably be considered next. It does not include every test, medicine, or procedure.",
  },
  {
    id: "specialist-consultation",
    title: "Specialist Consultation",
    icon: "user",
    consultationId: "specialist",
    summary:
      "An assessment with a specialist, available only when the relevant specialty and appointment time have been confirmed.",
    detail:
      "Specialist consultations depend on which specialties the clinic can arrange and whether an appointment is available. Please tell the clinic what kind of specialist care you are seeking so the team can confirm whether it can be offered.",
  },
  {
    id: "preventive-health",
    title: "Preventive Health and Wellness",
    icon: "heart",
    consultationId: "general",
    summary:
      "Conversations about staying well, including lifestyle questions and which checks may be worth discussing.",
    detail:
      "Preventive visits are for patients who want to talk about staying well, not only about a current illness. Any screening or further check is discussed individually and is not automatically included in the consultation fee.",
  },
  {
    id: "health-screening",
    title: "Health Screening and Assessment",
    icon: "clipboard",
    consultationId: "general",
    summary:
      "A structured look at a health question you want assessed. The exact checks depend on what the clinic confirms is appropriate.",
    detail:
      "Screening and assessment are not the same for every person. The clinic will confirm which checks, if any, are suitable and whether they carry a separate charge.",
  },
  {
    id: "family-health",
    title: "Family Health",
    icon: "users",
    consultationId: "general",
    summary:
      "Consultations for adults and families who want clear, respectful guidance about everyday health concerns.",
    detail:
      "Family health visits are for people seeking care for themselves or support in understanding a family member's appointment. Please confirm who the consultation is for when you call or send a request.",
  },
  {
    id: "follow-up",
    title: "Follow-up Consultation",
    icon: "calendar",
    consultationId: "general",
    summary:
      "A return visit to review advice already given, discuss how you have been since your last appointment, or clarify next steps.",
    detail:
      "A follow-up is still a consultation and should be requested like any other appointment. Bring notes from previous visits if you have them. The fee that applies should be confirmed with the clinic.",
  },
] as const;

export type ServiceIcon = (typeof services)[number]["icon"];
export type Service = (typeof services)[number];
