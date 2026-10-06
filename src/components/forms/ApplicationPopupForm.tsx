"use client";

import Link from "next/link";
import React, { useState, type ChangeEvent, type SubmitEvent } from "react";
import {
  ArrowRight,
  Loader2,
  Lock,
  Mail,
  UserRound,
} from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { buildHeallyRedirectUrl, getHeallyUtmSource } from "@/lib/heally";
import {
  formatLeadPhone,
  hasLeadFormErrors,
  validateFname,
  validateLeadEmail,
  validateLeadForm,
  validateLeadPhone,
  validateLname,
  type LeadFormErrors,
} from "@/lib/lead-form-validation";
import { cn } from "@/lib/utils";

const STATE_CODE = "CA";

const STEPS = [
  { id: 1, label: "Your Name" },
  { id: 2, label: "Contact Info" },
] as const;

type ApplicationPopupFormProps = {
  onClose: () => void;
};

export function ApplicationPopupForm({ onClose }: ApplicationPopupFormProps) {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setFirstName(value);
    setErrors((prev) => ({
      ...prev,
      fname: validateFname(value) ?? undefined,
    }));
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setLastName(value);
    setErrors((prev) => ({
      ...prev,
      lname: validateLname(value) ?? undefined,
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

  function goToStep(next: number) {
    setStep(next);
  }

  function handleContinueFromInfo() {
    const fnameError = validateFname(firstName);
    const lnameError = validateLname(lastName);
    if (fnameError || lnameError) {
      setErrors((prev) => ({
        ...prev,
        fname: fnameError ?? undefined,
        lname: lnameError ?? undefined,
      }));
      return;
    }
    goToStep(2);
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validateLeadForm({
      fname: firstName,
      lname: lastName,
      email,
      phone,
      termsAccepted,
      marketingConsent,
    });

    setErrors(nextErrors);
    if (hasLeadFormErrors(nextErrors)) return;

    setSubmitting(true);

    const utmSource = getHeallyUtmSource();
    const redirectUrl = buildHeallyRedirectUrl({
      name: fullName,
      email,
      phone,
      state: STATE_CODE,
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
    <div className="flex flex-col">
      {/* Stepper */}
      <div className="mb-8 flex items-start justify-center gap-0 px-2 sm:px-6">
        {STEPS.map((item, index) => {
          const isActive = step === item.id;
          const isComplete = step > item.id;

          return (
            <div key={item.id} className="flex flex-1 flex-col items-center">
              <div className="flex w-full items-center">
                {index > 0 && (
                  <span
                    className={cn(
                      "h-0.5 flex-1",
                      isComplete || isActive ? "bg-brand-600" : "bg-neutral-200"
                    )}
                  />
                )}
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-full text-md font-bold transition-colors",
                    isActive
                      ? "bg-brand-700 text-white shadow-md shadow-brand-700/25"
                      : isComplete
                        ? "bg-brand-600 text-white"
                        : "border-2 border-neutral-200 bg-white text-neutral-400"
                  )}
                >
                  {item.id}
                </span>
                {index < STEPS.length - 1 && (
                  <span
                    className={cn(
                      "h-0.5 flex-1",
                      step > item.id ? "bg-brand-600" : "bg-neutral-200"
                    )}
                  />
                )}
              </div>
              <span
                className={cn(
                  "mt-4 text-center text-[15px] font-semibold sm:text-md",
                  isActive ? "text-brand-800" : "text-neutral-500"
                )}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Step content */}
      {step === 1 && (
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="mx-auto flex size-24 shrink-0 items-center justify-center rounded-full bg-brand-100 sm:mx-0">
            <UserRound className="size-10 text-brand-700" strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-xl font-bold text-neutral-900 sm:text-2xl">
              Tell us about yourself
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Enter your legal first and last name as it appears on your ID.
            </p>

            <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/40 p-4">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Input
                  id="popupFirstName"
                  name="firstName"
                  label="First Name"
                  placeholder="Jane"
                  required
                  autoComplete="given-name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  error={errors.fname}
                />
                <Input
                  id="popupLastName"
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  required
                  autoComplete="family-name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  error={errors.lname}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-center sm:justify-start">
              <button
                type="button"
                onClick={handleContinueFromInfo}
                className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-brand-800 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-800/20 transition-all hover:bg-brand-900 sm:w-auto sm:min-w-[200px]"
              >
                Continue
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="mx-auto flex size-24 shrink-0 items-center justify-center rounded-full bg-brand-100 sm:mx-0">
              <Mail className="size-10 text-brand-700" strokeWidth={2} />
            </div>
            <div className="min-w-0 flex-1 space-y-4">
              <div>
                <h3 className="font-display text-xl font-bold text-neutral-900 sm:text-2xl">
                  How can we reach you?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                  We&apos;ll send your approval details and appointment link to these contacts.
                </p>
              </div>

              <div className="space-y-4 rounded-2xl border border-brand-100 bg-brand-50/40 p-4">
                <Input
                  id="popupEmail"
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
                  id="popupPhone"
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
              </div>

              <div className="space-y-3 rounded-2xl border border-brand-100 bg-white p-4">
                <Checkbox
                  id="popupTerms"
                  name="acceptTerms"
                  label={
                    <>
                      I accept the{" "}
                      <Link
                        href="/terms-of-use"
                        className="font-medium text-brand-700 underline hover:text-brand-800"
                        onClick={onClose}
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
                  id="popupMarketing"
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
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => goToStep(1)}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-brand-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition-colors hover:border-brand-300 hover:bg-brand-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-800 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-800/20 transition-all hover:bg-brand-900 disabled:opacity-60 sm:flex-none"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Processing…
                    </>
                  ) : (
                    <>
                      Get Your Card
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {/* Security footer */}
      <p className="mt-10 flex items-center justify-center gap-2 text-sm font-medium text-brand-800/70">
        <Lock className="size-4 shrink-0 text-brand-600" />
        100% Secure &amp; Confidential
      </p>
    </div>
  );
}
