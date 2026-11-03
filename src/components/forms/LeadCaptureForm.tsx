"use client";

import Link from "next/link";
import React, { useState, type ChangeEvent } from "react";
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
  validateFname,
  validateLname,
  validateLeadForm,
  validateLeadPhone,
  type LeadFormErrors,
} from "@/lib/lead-form-validation";
import { cn } from "@/lib/utils";

type LeadField = "firstName" | "lastName" | "email" | "phone";

type LeadFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  termsAccepted: boolean;
  marketingConsent: boolean;
  errors: LeadFormErrors;
  submitting: boolean;
};

const initialFormState: LeadFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  termsAccepted: false,
  marketingConsent: false,
  errors: {},
  submitting: false,
};

const fieldErrorKey = {
  firstName: "fname",
  lastName: "lname",
  email: "email",
  phone: "phone",
} as const satisfies Record<LeadField, keyof LeadFormErrors>;

const fieldValidators = {
  firstName: validateFname,
  lastName: validateLname,
  email: validateLeadEmail,
  phone: validateLeadPhone,
} as const;

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
  const [form, setForm] = useState<LeadFormState>(initialFormState);

  function setField(field: LeadField, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
      errors: {
        ...current.errors,
        [fieldErrorKey[field]]: fieldValidators[field](value) ?? undefined,
      },
    }));
  }

  function setConsent(field: "termsAccepted" | "marketingConsent", checked: boolean) {
    setForm((current) => ({
      ...current,
      [field]: checked,
      errors: checked ? { ...current.errors, [field]: undefined } : current.errors,
    }));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") {
      setConsent(name as "termsAccepted" | "marketingConsent", checked);
      return;
    }

    const field = name as LeadField;
    setField(field, field === "phone" ? formatLeadPhone(value) : value);
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validateLeadForm({
      fname: form.firstName,
      lname: form.lastName,
      email: form.email,
      phone: form.phone,
      termsAccepted: form.termsAccepted,
      marketingConsent: form.marketingConsent,
    });

    if (hasLeadFormErrors(nextErrors)) {
      setForm((current) => ({ ...current, errors: nextErrors }));
      return;
    }

    setForm((current) => ({ ...current, errors: {}, submitting: true }));

    const utmSource = getHeallyUtmSource();
    const fullName = `${form.firstName.trim()} ${form.lastName.trim()}`.trim();
    const redirectUrl = buildHeallyRedirectUrl({
      name: fullName,
      email: form.email,
      phone: form.phone,
      utmSource,
    });

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

      <div className="grid grid-cols-2 gap-3">
        <Input
          id="leadFirstName"
          name="firstName"
          label="First Name"
          placeholder="Ryan"
          required
          autoComplete="given-name"
          value={form.firstName}
          onChange={handleChange}
          error={form.errors.fname}
        />
        <Input
          id="leadLastName"
          name="lastName"
          label="Last Name"
          placeholder="Mitchell"
          required
          autoComplete="family-name"
          value={form.lastName}
          onChange={handleChange}
          error={form.errors.lname}
        />
      </div>

      <Input
        id="leadEmail"
        name="email"
        type="email"
        label="Email"
        placeholder="ryanmitchell@gmail.com"
        required
        autoComplete="email"
        value={form.email}
        onChange={handleChange}
        error={form.errors.email}
      />

      <Input
        id="leadPhone"
        name="phone"
        type="tel"
        label="Phone Number"
        placeholder="555-555-5555"
        required
        autoComplete="tel"
        value={form.phone}
        onChange={handleChange}
        error={form.errors.phone}
      />

      <Checkbox
        id="leadTerms"
        name="termsAccepted"
        label={
          <>
            I accept the{" "}
            <Link
              href="/our-policies/terms-of-use"
              className="font-medium text-brand-700 underline hover:text-brand-800"
            >
              Terms and Conditions
            </Link>
          </>
        }
        checked={form.termsAccepted}
        onChange={handleChange}
        error={form.errors.termsAccepted}
      />

      <Checkbox
        id="leadMarketing"
        name="marketingConsent"
        label="I agree to receive emails with educational content, exclusive offers, partnership discounts, and marketing updates"
        checked={form.marketingConsent}
        onChange={handleChange}
        error={form.errors.marketingConsent}
      />

      <Button
        type="submit"
        size="lg"
        fullWidth
        className="mt-2 bg-brand-800 hover:bg-brand-900 shadow-lg shadow-brand-800/20"
        disabled={form.submitting}
      >
        {form.submitting ? (
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
