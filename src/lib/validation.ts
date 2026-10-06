import { z } from "zod";

export const applicationFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Please enter a valid 10-digit phone number"),
  acceptTerms: z
    .boolean()
    .refine((val) => val === true, "You must accept the Terms and Conditions"),
  marketingConsent: z.boolean().optional(),
});

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .refine(
      (val) => val === "" || /^\(\d{3}\) \d{3}-\d{4}$/.test(val),
      "Please enter a valid phone number"
    ),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;

/** Formats user input as (XXX) XXX-XXXX for application/contact API schemas */
export function formatApplicationPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function mapZodErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0]?.toString() ?? "form";
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}

export function mapApiFieldErrors(
  errors?: Record<string, string[]>
): Record<string, string> {
  if (!errors) return {};
  return Object.fromEntries(
    Object.entries(errors).map(([key, messages]) => [key, messages[0] ?? "Invalid value"])
  );
}
