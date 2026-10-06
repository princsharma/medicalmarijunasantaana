"use client";

import React, { useState, type ChangeEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { siteConfig } from "@/data/site";
import {
  contactFormSchema,
  formatApplicationPhone,
  mapApiFieldErrors,
  mapZodErrors,
  type ContactFormData,
} from "@/lib/validation";
import { cn } from "@/lib/utils";
import type { ApiResponse, FormStatus } from "@/types";

type ContactFormProps = {
  className?: string;
};

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message" | "form", string>>;
type ContactFormStatus = FormStatus | "email-draft";

function buildEmailDraftUrl({ name, email, phone, message }: ContactFormData) {
  const subject = "Website contact request";
  const body = [
    "Hello,",
    "",
    message,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    ...(phone ? [`Phone: ${phone}`] : []),
  ].join("\n");

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm({ className }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function validateField(field: keyof FieldErrors, value: string) {
    const parsed = contactFormSchema.safeParse({
      name,
      email,
      phone,
      message,
      [field]: value,
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

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatusMessage("");

    const payload = { name, email, phone, message };
    const parsed = contactFormSchema.safeParse(payload);

    if (!parsed.success) {
      setErrors(mapZodErrors(parsed.error));
      setStatus("error");
      setStatusMessage("Please correct the errors below.");
      return;
    }

    setErrors({});
    setStatus("loading");

    const openEmailDraft = (data: ContactFormData) => {
      setStatus("email-draft");
      setStatusMessage(
        "Online delivery isn't available right now. Your email app should open with your message ready; review and send it to complete."
      );
      window.location.href = buildEmailDraftUrl(data);
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const result = (await response.json()) as ApiResponse;

      if (response.status === 422) {
        setErrors(mapApiFieldErrors(result.errors));
        setStatus("error");
        setStatusMessage(result.message || "Please correct the errors below.");
        return;
      }

      if (!response.ok || !result.success) {
        openEmailDraft(parsed.data);
        return;
      }

      setStatus("success");
      setStatusMessage(result.message);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      openEmailDraft(parsed.data);
    }
  }

  if (status === "success") {
    return (
      <div className={cn("py-6 text-center", className)}>
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-neutral-900">Message Sent</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{statusMessage}</p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => {
            setStatus("idle");
            setStatusMessage("");
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn("space-y-4", className)}>
      {status === "email-draft" && (
        <div
          className="flex gap-3 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-900"
          role="status"
        >
          <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <div>
            <p>{statusMessage}</p>
            <a
              href={buildEmailDraftUrl({ name, email, phone, message })}
              className="mt-1 inline-block font-semibold underline underline-offset-2"
            >
              Open your email app again
            </a>
          </div>
        </div>
      )}

      {status === "error" && statusMessage && (
        <div
          className="flex gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <p>{statusMessage}</p>
        </div>
      )}

      <Input
        id="contactName"
        name="name"
        label="Full Name"
        placeholder="Your name"
        required
        autoComplete="name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
          validateField("name", e.target.value);
        }}
        error={errors.name}
        disabled={status === "loading"}
      />
      <Input
        id="contactEmail"
        name="email"
        type="email"
        label="Email"
        placeholder="you@example.com"
        required
        autoComplete="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
          validateField("email", e.target.value);
        }}
        error={errors.email}
        disabled={status === "loading"}
      />
      <Input
        id="contactPhone"
        name="phone"
        type="tel"
        label="Phone Number (optional)"
        placeholder="(714) 555-0199"
        autoComplete="tel"
        value={phone}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const formatted = formatApplicationPhone(e.target.value);
          setPhone(formatted);
          validateField("phone", formatted);
        }}
        error={errors.phone}
        disabled={status === "loading"}
      />
      <Textarea
        id="contactMessage"
        name="message"
        label="Message"
        placeholder="How can we help you?"
        required
        value={message}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setMessage(e.target.value);
          validateField("message", e.target.value);
        }}
        error={errors.message}
        disabled={status === "loading"}
      />
      <Button type="submit" size="lg" fullWidth disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
