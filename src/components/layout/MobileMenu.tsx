"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { navigation } from "@/data/site";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  function follow(href: string) {
    onClose();
    router.push(href);
  }

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-deep/40"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white p-5 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Menu</p>
          <button
            ref={closeRef}
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line"
            onClick={onClose}
          >
            <X aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-3 py-3 text-base font-medium text-ink hover:bg-mint"
              onClick={(event) => {
                event.preventDefault();
                follow(item.href);
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact#appointment"
          className="mt-6 rounded-full bg-brand px-4 py-3 text-center text-sm font-semibold text-white"
          onClick={(event) => {
            event.preventDefault();
            follow("/contact#appointment");
          }}
        >
          Request an Appointment
        </Link>
      </div>
    </div>
  );
}
