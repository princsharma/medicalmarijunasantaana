"use client";

import Link from "next/link";
import React, { useState, type ChangeEvent, type SubmitEvent } from "react";
import { CheckCircle2, Lock, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import {
  applicationFormSchema,
  formatApplicationPhone,
  mapApiFieldErrors,
  mapZodErrors,
} from "@/lib/validation";
import { cn } from "@/lib/utils";
import type { ApiResponse, FormStatus } from "@/types";

type ApplicationFormProps = {
  className?: string;
  showHeader?: boolean;
  submitLabel?: string;
  /** Removes outer card chrome when nested inside TelehealthApplyForm */
  embedded?: boolean;
};

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "acceptTerms" | "marketingConsent" | "form", string>
>;

export function ApplicationForm({
  className,
  showHeader = true,
  submitLabel = "Get Your Card",
  embedded = false,
}: ApplicationFormProps) {
  const shellClass = embedded
    ? "relative"
    : "relative overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl shadow-black/20";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function validateField(field: keyof FieldErrors, value: unknown) {
    const parsed = applicationFormSchema.safeParse({
      name,
      email,
      phone,
      acceptTerms,
      marketingConsent,
      [field === "acceptTerms" ? "acceptTerms" : field]: value,
    });

    if (parsed.success) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      return;
    }

    const fieldErrors = mapZodErrors(parsed.error);
    if (fieldErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);
    if (status === "success") setStatus("idle");
    validateField("name", value);
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
    if (status === "success") setStatus("idle");
    validateField("email", value);
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    const formatted = formatApplicationPhone(e.target.value);
    setPhone(formatted);
    if (status === "success") setStatus("idle");
    validateField("phone", formatted);
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatusMessage("");

    const payload = {
      name,
      email,
      phone,
      acceptTerms,
      marketingConsent,
    };

    const parsed = applicationFormSchema.safeParse(payload);
    if (!parsed.success) {
      setErrors(mapZodErrors(parsed.error));
      setStatus("error");
      setStatusMessage("Please correct the errors below.");
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const result = (await response.json()) as ApiResponse;

      if (!response.ok || !result.success) {
        setErrors(mapApiFieldErrors(result.errors));
        setStatus("error");
        setStatusMessage(result.message || "Unable to submit your application. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage(result.message);
      setName("");
      setEmail("");
      setPhone("");
      setAcceptTerms(false);
      setMarketingConsent(false);
    } catch {
      setStatus("error");
      setStatusMessage("An unexpected error occurred. Please try again or call us.");
    }
  }

  if (status === "success") {
    return (
      <div className={cn(shellClass, !embedded && "p-6 md:p-8", className)}>
        <div className="flex flex-col items-center py-6 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
            <CheckCircle2 className="size-8" />
          </span>
          <h3 className="mt-5 font-display text-2xl font-bold text-neutral-900">
            Application Received
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-600">{statusMessage}</p>
          <Button
            type="button"
            variant="outline"
            className="mt-6"
            onClick={() => {
              setStatus("idle");
              setStatusMessage("");
            }}
          >
            Submit Another Application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn(shellClass, !embedded && "p-6 md:p-8", className)}>
      {!embedded && (
        <>
          <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-100/80 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 size-40 rounded-full bg-accent-100/70 blur-3xl" />
        </>
      )}

      <div className="relative">
        {showHeader && (
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
                <Sparkles className="size-3.5" />
                Plans from $55
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold text-neutral-900">
                Get Your Card
              </h3>
            </div>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              Same Day
            </span>
          </div>
        )}

        {status === "error" && statusMessage && (
          <div
            className="mb-5 flex gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
            role="alert"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
            <p>{statusMessage}</p>
          </div>
        )}

        <div className="space-y-4">
          <Input
            id="applicationName"
            name="name"
            label="Name (First & Last)"
            placeholder="John Smith"
            required
            autoComplete="name"
            value={name}
            onChange={handleNameChange}
            error={errors.name}
            disabled={status === "loading"}
          />
          <Input
            id="applicationEmail"
            name="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            required
            autoComplete="email"
            value={email}
            onChange={handleEmailChange}
            error={errors.email}
            disabled={status === "loading"}
          />
          <Input
            id="applicationPhone"
            name="phone"
            type="tel"
            label="Phone Number"
            placeholder="(714) 555-0199"
            required
            autoComplete="tel"
            value={phone}
            onChange={handlePhoneChange}
            error={errors.phone}
            disabled={status === "loading"}
          />

          <Checkbox
            id="applicationTerms"
            name="acceptTerms"
            label={
              <>
                I accept the{" "}
                <Link
                  href="/terms-of-use"
                  className="text-brand-700 underline hover:text-brand-800"
                >
                  Terms and Conditions
                </Link>
              </>
            }
            checked={acceptTerms}
            onChange={(e) => {
              setAcceptTerms(e.target.checked);
              validateField("acceptTerms", e.target.checked);
            }}
            error={errors.acceptTerms}
            disabled={status === "loading"}
          />

          <Checkbox
            id="applicationMarketing"
            name="marketingConsent"
            label="I agree to receive emails with educational content and exclusive offers"
            checked={marketingConsent}
            onChange={(e) => setMarketingConsent(e.target.checked)}
            disabled={status === "loading"}
          />
        </div>

        <Button
          variant="accent"
          size="lg"
          fullWidth
          className="mt-6"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting…
            </>
          ) : (
            submitLabel
          )}
        </Button>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-neutral-500">
          <Lock className="size-3.5 text-brand-600" />
          Encrypted &amp; HIPAA-compliant
        </p>
      </div>
    </form>
  );
}
