import Image from "next/image";

export function BrandMark({
  hasLogo,
  tone = "dark",
  variant = "compact",
}: {
  hasLogo: boolean;
  tone?: "dark" | "light";
  variant?: "compact" | "full";
}) {
  if (hasLogo && variant === "full") {
    return (
      <span className="inline-flex rounded-2xl bg-white p-3">
        <Image
          src="/images/clinic-logo.png"
          alt="The Elizabeth's Clinic. Compassionate Care. Your Health. Our Priority."
          width={848}
          height={892}
          className="h-auto w-40 sm:w-48"
        />
      </span>
    );
  }

  if (hasLogo) {
    const text = tone === "light" ? "text-white" : "text-ink";
    return (
      <span className="flex items-center gap-2.5">
        <Image
          src="/images/clinic-mark.png"
          alt=""
          width={497}
          height={491}
          className="h-11 w-11"
        />
        <span className={`text-[13px] font-bold leading-tight sm:text-base ${text}`}>
          The Elizabeth&apos;s Clinic
        </span>
      </span>
    );
  }

  const text = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/75" : "text-muted";

  return (
    <span className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path d="M10.2 4.5h3.6v15h-3.6zM4.5 10.2h15v3.6h-15z" fill="currentColor" />
        </svg>
      </span>
      <span className="min-w-0 text-left">
        <span className={`block text-[13px] font-bold leading-tight sm:text-base ${text}`}>
          The Elizabeth&apos;s Clinic
        </span>
        <span className={`block text-[11px] leading-4 ${sub}`}>Temporary wordmark</span>
      </span>
    </span>
  );
}
