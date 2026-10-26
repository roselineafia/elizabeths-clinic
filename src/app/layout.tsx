import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import { BackToTop } from "@/components/shared/BackToTop";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { clinic, siteUrl } from "@/data/site";
import { clinicLogoExists } from "@/lib/logo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const description =
  "Discover patient-centred healthcare at The Elizabeth's Clinic in Ashongman Estate, Accra. View medical services, consultation fees, opening hours, and appointment request information.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "The Elizabeth's Clinic | Patient-Centred Healthcare in Accra",
    template: "%s | The Elizabeth's Clinic",
  },
  description,
  openGraph: {
    title: "The Elizabeth's Clinic | Patient-Centred Healthcare in Accra",
    description,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/hero-clinician.jpg",
        alt: "Portrait of a clinician in a white coat.",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const hasLogo = clinicLogoExists();
  return (
    <html lang="en-GB" className={`${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-ink antialiased">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="bg-deep text-sm text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>{clinic.announcement}</p>
            <a className="font-semibold underline" href={clinic.phoneHref}>
              Call {clinic.phoneDisplay}
            </a>
          </div>
        </div>
        <Header hasLogo={hasLogo} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer hasLogo={hasLogo} />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
