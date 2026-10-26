# The Elizabeth's Clinic

A patient-centred website for The Elizabeth's Clinic in Ashongman Estate, Accra, Ghana. It explains services, consultation fees, opening hours, and how to request an appointment. It is a static demonstration site: the form does not send patient details anywhere.

## Features

- Home, medical services, sample doctor profiles, patient information, and contact pages.
- General consultation shown as GH₵300 and specialist consultation as GH₵1,000.
- Appointment request form with validation, a live fee display, and preselected consultation type from pricing links.
- Accessible mobile menu, FAQ accordion, click-to-call, and a WhatsApp link.
- Temporary wordmark until `public/images/clinic-logo.png` is added.
- Sample clinician cards that are clearly labelled and easy to replace.

## Technology

- Next.js (App Router) and React
- TypeScript in strict mode
- Tailwind CSS
- Lucide React icons
- React Hook Form and Zod

## Requirements

- Node.js 20 or newer
- npm

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Folder structure

```text
src/app/                  pages, layout, metadata, sitemap, robots
src/components/layout/    header, footer, mobile menu
src/components/home/      homepage sections
src/components/shared/    form, cards, accordion, buttons
src/components/doctors/   filterable profile directory
src/data/                 clinic facts, services, doctor profiles, FAQs
src/lib/                  validation and small helpers
public/images/            photographs and the optional official logo
public/documents/         reserved for confirmed clinic documents
```

## Reusable pieces

- `BrandMark` shows the official logo when the file exists, otherwise a temporary wordmark.
- `ServiceCard` and `DoctorCard` keep service and profile layouts consistent.
- `AppointmentForm` is the only appointment form. Home and contact both use it.
- `FaqAccordion` is the expandable question list.
- Clinic name, phone, hours, fees, navigation, and social URLs live in `src/data/site.ts`.

## Official logo

The supplied logo is already saved as `public/images/clinic-logo.png`. The footer shows the full lockup. The header shows the circular emblem from `public/images/clinic-mark.png` next to the clinic name, so the sticky bar stays compact.

To replace it:

1. Save the new full logo as `public/images/clinic-logo.png`.
2. Replace `public/images/clinic-mark.png` with the matching emblem, and replace `src/app/icon.png` if the favicon should change too.
3. Reload the site.

If `clinic-logo.png` is missing, the site shows a temporary wordmark and labels it as temporary.

## Doctor profiles and photographs

Edit `src/data/doctors.ts`. Names and specialties already match the clinic list. Each card shows the name, specialty, portrait, a short description, and a consultation enquiry button.

- Change a description only when the clinic confirms new wording. Do not add qualifications, registration numbers, years of practice, awards, or patient outcomes.
- Portraits live in `public/images/doctors/`. Replace a file with that clinician's own photograph when the clinic supplies it, and keep the same filename.
- Family health uses the general consultation fee. The other profiles use the specialist fee.

Image notes are in `public/images/README.md`.

## Fees, hours, and contact details

Edit `src/data/site.ts`.

- `clinic.phoneDisplay` and `clinic.phoneHref` are the telephone.
- `clinic.whatsappHref` uses the Ghana country code for the same number: `https://wa.me/233543212869`.
- `clinic.hours` is Monday to Friday, 8:00 AM–5:00 PM.
- `consultations` holds GH₵300 and GH₵1,000.
- `clinic.location` is Ashongman Estate, Accra, Ghana. Do not add a street or map pin unless the clinic confirms it.

## Social media

`socialLinks` in `src/data/site.ts` starts with empty `href` values. The footer shows a reserved icon and does not link anywhere.

When a real account exists, set `href` to the full URL, for example `https://www.instagram.com/the-real-account`. Leave `href` as `""` if the account does not exist.

## Appointment form

The form checks name, phone, optional email, consultation type, date, and consent in the browser. A valid submission shows this message and then clears the fields:

> Your appointment request has been prepared successfully. This demonstration website does not send requests directly to the clinic. Please call 0543212869 to confirm availability and arrange your appointment.

It does not email the clinic, save a database record, or write details to local storage. To connect a secure backend later, submit the validated values from `onSubmit` in `src/components/shared/AppointmentForm.tsx` to your own API. Do not log patient details in the browser console.

## GitHub

```bash
git init
git add .
git commit -m "Add The Elizabeth's Clinic website"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

Use the GitHub account that should own the project. Do not commit secrets. This repository does not need a `.env` file for the demonstration site.

## Vercel

1. Sign in at [vercel.com](https://vercel.com) and import the GitHub repository.
2. Framework preset: Next.js. Build command: `npm run build`. Output is handled by Next.js.
3. Optional environment variable: `NEXT_PUBLIC_SITE_URL` set to the live address, such as `https://your-project.vercel.app`. This is used for the sitemap and Open Graph metadata. If it is omitted, those links use `http://localhost:3000` until you set it.
4. Deploy. Vercel will install dependencies and run the production build.

After the first deploy, add the official logo and confirmed staff details, then push again.

## Content boundaries

The site does not claim accreditations, patient numbers, emergency care, or insurance acceptance. Specialist availability must be confirmed with the clinic. The website is not an emergency service.
