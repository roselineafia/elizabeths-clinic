export const faqs = [
  {
    id: "fees",
    question: "How much does a consultation cost?",
    answer:
      "A general consultation is GH₵300. A specialist consultation is GH₵1,000. These fees are a guide. Tests, medicines, procedures, and other services may cost extra. Please confirm the fee that applies to your visit.",
    topics: ["home", "services", "patient"],
  },
  {
    id: "hours",
    question: "When is the clinic open?",
    answer:
      "The Elizabeth's Clinic is open Monday to Friday, 8:00 AM–5:00 PM. Opening hours outside those times have not been published on this website.",
    topics: ["home", "patient"],
  },
  {
    id: "location",
    question: "Where is the clinic?",
    answer:
      "The clinic is in Ashongman Estate, Accra, Ghana. This website does not publish a street address or a verified map pin. Please confirm the precise location with the clinic before you travel.",
    topics: ["home", "patient"],
  },
  {
    id: "request",
    question: "Does the online form book my appointment?",
    answer:
      "No. The form prepares an appointment request on this demonstration website. It does not send your details to the clinic or reserve a time. Call 0543212869 so the clinic can confirm availability and arrange the visit.",
    topics: ["home", "services", "patient"],
  },
  {
    id: "specialist",
    question: "Can I see a particular specialist?",
    answer:
      "Specialist consultations are GH₵1,000 and depend on the specialty and on appointment availability. The clinic needs to confirm whether the specialist care you need can be arranged.",
    topics: ["home", "services", "patient"],
  },
  {
    id: "bring",
    question: "What should I bring to an appointment?",
    answer:
      "Bring anything that helps the clinician understand your concern: relevant medical records, a list of medicines you take, and a note of allergies. Bring identification or insurance documents if you have them. This website does not confirm that insurance is accepted.",
    topics: ["home", "patient"],
  },
  {
    id: "emergency",
    question: "What should I do in a medical emergency?",
    answer:
      "Do not use this website or the appointment form for an emergency. For an immediate medical emergency, seek urgent help at the nearest appropriate emergency facility or contact the relevant local emergency service. The clinic has not published a dedicated emergency line.",
    topics: ["patient", "services"],
  },
  {
    id: "extra-charges",
    question: "Are tests and medicines included in the consultation fee?",
    answer:
      "No. The published fees are for the consultation itself. Investigations, procedures, medicines, or other services may be charged separately. Ask the clinic what is included before you attend.",
    topics: ["services", "patient"],
  },
] as const;

export type FaqTopic = (typeof faqs)[number]["topics"][number];

export function faqsFor(topic: FaqTopic) {
  return faqs.filter((item) => item.topics.some((entry) => entry === topic));
}
