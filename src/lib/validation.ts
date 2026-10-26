import { z } from "zod";
import { isTodayOrFuture, isValidPhone } from "@/lib/utils";

export const appointmentSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Please use 80 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter a phone number.")
    .refine(isValidPhone, "Enter a valid Ghanaian or international phone number."),
  email: z.union([
    z.literal(""),
    z.string().trim().email("Enter a valid email address."),
  ]),
  consultationType: z.enum(["general", "specialist"], {
    required_error: "Please choose a consultation type.",
    invalid_type_error: "Please choose a consultation type.",
  }),
  preferredDate: z
    .string()
    .min(1, "Please choose a preferred date.")
    .refine(isTodayOrFuture, "Please choose today or a future date."),
  preferredTime: z.string(),
  reason: z
    .string()
    .max(400, "Please keep this note to 400 characters or fewer."),
  consent: z
    .boolean()
    .refine(
      (value) => value,
      "Please confirm that you understand this is a request, not a confirmed appointment.",
    ),
});

export type AppointmentValues = z.infer<typeof appointmentSchema>;
