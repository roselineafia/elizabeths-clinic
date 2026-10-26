import Link from "next/link";
import {
  CalendarCheck,
  ClipboardCheck,
  HeartPulse,
  Stethoscope,
  UserRound,
  Users,
} from "lucide-react";
import type { Service, ServiceIcon } from "@/data/services";
import { cn } from "@/lib/utils";

const icons: Record<ServiceIcon, typeof Stethoscope> = {
  stethoscope: Stethoscope,
  user: UserRound,
  heart: HeartPulse,
  clipboard: ClipboardCheck,
  users: Users,
  calendar: CalendarCheck,
};

export function ServiceCard({
  service,
  featured = false,
}: {
  service: Service;
  featured?: boolean;
}) {
  const Icon = icons[service.icon];
  return (
    <article
      id={service.id}
      className={cn(
        "group flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-sm transition hover:border-brand/40 hover:shadow-md",
        featured && "bg-mint/70 sm:p-8",
      )}
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pale text-clinic-blue">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{service.summary}</p>
      <Link
        href={`/services#${service.id}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
      >
        Learn more
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
