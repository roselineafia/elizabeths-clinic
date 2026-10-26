import Link from "next/link";
import { BrandMark } from "@/components/shared/BrandMark";
import { clinic, consultations, navigation, socialLinks } from "@/data/site";
import { services } from "@/data/services";

export function Footer({ hasLogo }: { hasLogo: boolean }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <BrandMark hasLogo={hasLogo} variant="full" />
          <p className="mt-4 text-sm leading-6 text-white/75">{clinic.shortIntro}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
            Medical services
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={`/services#${service.id}`} className="hover:underline">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm leading-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">Visit</h2>
          <p className="mt-4">
            Telephone:{" "}
            <a className="font-semibold underline" href={clinic.phoneHref}>
              {clinic.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">{clinic.location}</p>
          <p className="mt-2">{clinic.hours.summary}</p>
          <p className="mt-2">
            General consultation {consultations[0].priceLabel}. Specialist consultation{" "}
            {consultations[1].priceLabel}.
          </p>
          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.14em] text-white/70">Social profiles</p>
            <ul className="mt-3 flex gap-2">
              {socialLinks.map((item) => (
                <li key={item.id}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-xs font-semibold hover:bg-white/10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{item.label}</span>
                      <span aria-hidden="true">{item.label.slice(0, 2)}</span>
                    </a>
                  ) : (
                    <span
                      className="grid h-10 w-10 place-items-center rounded-full border border-dashed border-white/30 text-xs text-white/70"
                      title={`${item.label} is not linked yet`}
                    >
                      <span className="sr-only">{item.label} is not linked yet</span>
                      <span aria-hidden="true">{item.label.slice(0, 2)}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-white/60">
              Icons are reserved here. Add a URL in the site settings only after the account exists.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs leading-5 text-white/70 sm:px-6 lg:px-8">
          <p>© {year} {clinic.name}. All rights reserved.</p>
          <p>
            This is a static demonstration website. The appointment form does not store details,
            send email, or notify the clinic. Call {clinic.phoneDisplay} to arrange a visit.
          </p>
        </div>
      </div>
    </footer>
  );
}
