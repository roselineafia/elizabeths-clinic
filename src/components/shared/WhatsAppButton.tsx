import { clinic } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={clinic.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#128C7E] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#0E7468]"
      aria-label="Message the clinic on WhatsApp. Not monitored as an emergency line."
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.95c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.89-1.25-4.77-4.16-4.91-4.35-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.39 1.02-.39h.73c.23 0 .55-.09.86.65.32.77 1.08 2.64 1.17 2.83.1.19.16.42.03.67-.12.24-.19.39-.37.6-.19.21-.39.46-.56.62-.19.17-.38.36-.16.7.21.34.95 1.57 2.04 2.54 1.4 1.25 2.58 1.64 2.94 1.82.36.19.57.16.78-.1.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18.33.12 2.07.98 2.42 1.15.36.18.59.27.68.42.09.16.09.9-.15 1.58z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
