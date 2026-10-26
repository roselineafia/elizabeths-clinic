"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { BrandMark } from "@/components/shared/BrandMark";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { clinic, navigation } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header({ hasLogo }: { hasLogo: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0" aria-label={`${clinic.name} home`}>
          <BrandMark hasLogo={hasLogo} />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-ink hover:bg-mint",
                  active && "bg-mint text-brand-dark",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact#appointment"
            className="hidden rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark sm:inline-flex"
          >
            Request an Appointment
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
