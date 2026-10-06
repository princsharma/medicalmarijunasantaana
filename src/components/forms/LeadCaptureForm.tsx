"use client";

import Link from "next/link";
import React, { useState, type ChangeEvent, type SubmitEvent } from "react";
import { Loader2 } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { buildHeallyRedirectUrl, getHeallyUtmSource } from "@/lib/heally";
import {
  formatLeadPhone,
  hasLeadFormErrors,
  validateLeadEmail,
  validateLeadForm,
  validateLeadName,
  validateLeadPhone,
  type LeadFormErrors,
} from "@/lib/lead-form-validation";
import { cn } from "@/lib/utils";

type LeadCaptureFormProps = {
  className?: string;
  submitLabel?: string;
  showHeader?: boolean;
  eyebrow?: string;
  priceLine?: string;
  price?: string;
  priceSuffix?: string;
};

export function LeadCaptureForm({
  className,
  submitLabel = "Get Your Card",
  showHeader = false,
  eyebrow,
  priceLine,
  price,
  priceSuffix,
}: LeadCaptureFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);
    const nameError = validateLeadName(value);
    setErrors((prev) => ({
      ...prev,
      fname: nameError ?? undefined,
      lname: undefined,
    }));
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({
      ...prev,
      email: validateLeadEmail(value) ?? undefined,
    }));
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    const formatted = formatLeadPhone(e.target.value);
    setPhone(formatted);
    setErrors((prev) => ({
      ...prev,
      phone: validateLeadPhone(formatted) ?? undefined,
    }));
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const nameParts = name.trim().split(/\s+/).filter(Boolean);
    const nextErrors = validateLeadForm({
      fname: nameParts[0] ?? "",
      lname: nameParts.slice(1).join(" "),
      email,
      phone,
      termsAccepted,
      marketingConsent,
    });

    setErrors(nextErrors);
    if (hasLeadFormErrors(nextErrors)) return;

    setSubmitting(true);

    const utmSource = getHeallyUtmSource();
    const redirectUrl = buildHeallyRedirectUrl({ name, email, phone, utmSource });

    try {
      sendGTMEvent({
        event: "heallyValidatedSubmit",
        utm_source: utmSource,
      });
    } catch {
      // GTM optional when not configured
    }

    window.location.href = redirectUrl;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
      noValidate
    >
      {showHeader && (
        <div className="mb-2">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-800">
              {eyebrow}
            </p>
          )}
          {(priceLine || price) && (
            <p className="mt-1 font-display text-xl font-bold text-neutral-900 md:text-2xl">
              {priceLine}{" "}
              {price && <span className="text-brand-700">{price}</span>}{" "}
              {priceSuffix}
            </p>
          )}
        </div>
      )}

      <Input
        id="leadName"
        name="name"
        label="Name (First & Last)"
        placeholder="Jane Doe"
        required
        autoComplete="name"
        value={name}
        onChange={handleNameChange}
        error={errors.fname ?? errors.lname}
      />

      <Input
        id="leadEmail"
        name="email"
        type="email"
        label="Email"
        placeholder="jane@example.com"
        required
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
        error={errors.email}
      />

      <Input
        id="leadPhone"
        name="phone"
        type="tel"
        label="Phone Number"
        placeholder="555-555-5555"
        required
        autoComplete="tel"
        value={phone}
        onChange={handlePhoneChange}
        error={errors.phone}
      />

      <Checkbox
        id="leadTerms"
        name="acceptTerms"
        label={
          <>
            I accept the{" "}
            <Link
              href="/terms-of-use"
              className="font-medium text-brand-700 underline hover:text-brand-800"
            >
              Terms and Conditions
            </Link>
          </>
        }
        checked={termsAccepted}
        onChange={(e) => {
          setTermsAccepted(e.target.checked);
          if (e.target.checked) {
            setErrors((prev) => ({ ...prev, termsAccepted: undefined }));
          }
        }}
        error={errors.termsAccepted}
      />

      <Checkbox
        id="leadMarketing"
        name="marketingConsent"
        label="I agree to receive emails with educational content, exclusive offers, partnership discounts, and marketing updates"
        checked={marketingConsent}
        onChange={(e) => {
          setMarketingConsent(e.target.checked);
          if (e.target.checked) {
            setErrors((prev) => ({ ...prev, marketingConsent: undefined }));
          }
        }}
        error={errors.marketingConsent}
      />

      <Button
        type="submit"
        size="lg"
        fullWidth
        className="mt-2 bg-brand-800 hover:bg-brand-900 shadow-lg shadow-brand-800/20"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Processing…
          </>
        ) : (
          submitLabel
        )}
      </Button>
    </form>
  );
}
