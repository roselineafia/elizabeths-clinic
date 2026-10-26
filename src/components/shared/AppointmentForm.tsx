"use client";

import { useId, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clinic, consultations, getConsultation, timeOptions } from "@/data/site";
import { appointmentSchema, type AppointmentValues } from "@/lib/validation";
import { todayIso } from "@/lib/utils";

const emptyValues: AppointmentValues = {
  fullName: "",
  phone: "",
  email: "",
  consultationType: "general",
  preferredDate: "",
  preferredTime: "",
  reason: "",
  consent: false,
};

export function AppointmentForm({
  initialType = "general",
}: {
  initialType?: "general" | "specialist";
}) {
  return <AppointmentFields key={initialType} initialType={initialType} />;
}

function AppointmentFields({ initialType }: { initialType: AppointmentValues["consultationType"] }) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [preparing, setPreparing] = useState(false);
  const [selectedType, setSelectedType] = useState(initialType);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      ...emptyValues,
      consultationType: initialType,
    },
  });

  const price = getConsultation(selectedType);

  async function onSubmit() {
    setPreparing(true);
    await new Promise((resolve) => setTimeout(resolve, 250));
    setPreparing(false);
    setSubmitted(true);
    setSelectedType(initialType);
    reset({ ...emptyValues, consultationType: initialType });
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-3xl border border-brand/30 bg-mint p-6 sm:p-8"
      >
        <h3 className="text-xl font-semibold text-ink">Request prepared</h3>
        <p className="mt-3 text-sm leading-7 text-ink">
          Your appointment request has been prepared successfully. This demonstration website does
          not send requests directly to the clinic. Please call{" "}
          <a className="font-semibold text-brand underline" href={clinic.phoneHref}>
            {clinic.phoneDisplay}
          </a>{" "}
          to confirm availability and arrange your appointment.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
          onClick={() => setSubmitted(false)}
        >
          Prepare another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-line bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message} id={`${formId}-name`} required>
          <input
            id={`${formId}-name`}
            type="text"
            autoComplete="name"
            className={inputClass(Boolean(errors.fullName))}
            aria-invalid={Boolean(errors.fullName)}
            {...register("fullName")}
          />
        </Field>
        <Field label="Phone number" error={errors.phone?.message} id={`${formId}-phone`} required>
          <input
            id={`${formId}-phone`}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="0543212869"
            className={inputClass(Boolean(errors.phone))}
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
        </Field>
        <Field
          label="Email address"
          hint="Optional"
          error={errors.email?.message}
          id={`${formId}-email`}
        >
          <input
            id={`${formId}-email`}
            type="email"
            autoComplete="email"
            className={inputClass(Boolean(errors.email))}
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
        </Field>
        <Field
          label="Consultation type"
          error={errors.consultationType?.message}
          id={`${formId}-type`}
          required
        >
          <select
            id={`${formId}-type`}
            className={inputClass(Boolean(errors.consultationType))}
            aria-invalid={Boolean(errors.consultationType)}
            {...register("consultationType", {
              onChange: (event) => {
                const value = event.target.value;
                if (value === "general" || value === "specialist") setSelectedType(value);
              },
            })}
          >
            {consultations.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label} — {item.priceLabel}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Preferred appointment date"
          error={errors.preferredDate?.message}
          id={`${formId}-date`}
          required
        >
          <input
            id={`${formId}-date`}
            type="date"
            onFocus={(event) => {
              event.currentTarget.min = todayIso();
            }}
            className={inputClass(Boolean(errors.preferredDate))}
            aria-invalid={Boolean(errors.preferredDate)}
            {...register("preferredDate")}
          />
        </Field>
        <Field label="Preferred time" hint="Optional" id={`${formId}-time`}>
          <select id={`${formId}-time`} className={inputClass(false)} {...register("preferredTime")}>
            {timeOptions.map((option) => (
              <option key={option.value || "any"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="Reason for visit"
          hint="Optional. A short note is enough. Please do not include a detailed medical history."
          error={errors.reason?.message}
          id={`${formId}-reason`}
        >
          <textarea
            id={`${formId}-reason`}
            rows={4}
            className={inputClass(Boolean(errors.reason))}
            aria-invalid={Boolean(errors.reason)}
            {...register("reason")}
          />
        </Field>
      </div>

      <p className="mt-5 rounded-2xl bg-pale px-4 py-3 text-sm text-ink" aria-live="polite">
        {price
          ? `${price.label}: ${price.priceLabel}. This is the consultation fee only.`
          : "Choose a consultation type to see the fee."}
      </p>

      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm leading-6 text-ink">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-brand"
            aria-invalid={Boolean(errors.consent)}
            {...register("consent")}
          />
          <span>
            I understand this is an appointment request, not a confirmed booking. The clinic must
            confirm the date and time.
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-2 text-sm text-red-700" role="alert">
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={preparing}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {preparing ? "Preparing request..." : "Prepare appointment request"}
      </button>
    </form>
  );
}

function Field({
  label,
  hint,
  error,
  id,
  required,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  id: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </label>
      {hint ? <p className="mt-1 text-xs leading-5 text-muted">{hint}</p> : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p className="mt-1.5 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(invalid: boolean) {
  return `w-full rounded-2xl border bg-white px-3 py-2.5 text-sm text-ink outline-none ring-brand/30 focus:ring-2 ${
    invalid ? "border-red-600" : "border-line"
  }`;
}
