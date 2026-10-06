/** Client-side lead form validation — aligned with mmjcalifornia reference */

export type LeadFormErrors = {
  fname?: string;
  lname?: string;
  email?: string;
  phone?: string;
  termsAccepted?: string;
  marketingConsent?: string;
};

const namePartPattern = /^[a-zA-Z'-]+(\s+[a-zA-Z'-]+)*$/;

export function validateFname(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed || !namePartPattern.test(trimmed)) {
    return "Please enter your first name.";
  }
  return null;
}

export function validateLname(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed || !namePartPattern.test(trimmed)) {
    return "Please enter your last name.";
  }
  return null;
}

/** Validates a combined "First Last" name field (used by single-field forms). */
export function validateLeadName(value: string): string | null {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (parts.length < 2) {
    return "Please enter your first and last name.";
  }

  const fnameError = validateFname(parts[0]);
  if (fnameError) return fnameError;

  const lnameError = validateLname(parts.slice(1).join(" "));
  if (lnameError) return lnameError;

  return null;
}

export function validateLeadEmail(value: string): string | null {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim())) {
    return "Please enter a valid email address.";
  }
  return null;
}

export function validateLeadPhone(value: string): string | null {
  if (!/^\d{3}-\d{3}-\d{4}$/.test(value)) {
    return "Please enter a valid phone number (e.g., 555-555-5555).";
  }
  return null;
}

export function formatLeadPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length > 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length > 3) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  return digits;
}

export function validateLeadForm(input: {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  termsAccepted: boolean;
  marketingConsent: boolean;
}): LeadFormErrors {
  const errors: LeadFormErrors = {};

  const fnameError = validateFname(input.fname);
  if (fnameError) errors.fname = fnameError;

  const lnameError = validateLname(input.lname);
  if (lnameError) errors.lname = lnameError;

  const emailError = validateLeadEmail(input.email);
  if (emailError) errors.email = emailError;

  const phoneError = validateLeadPhone(input.phone);
  if (phoneError) errors.phone = phoneError;

  if (!input.termsAccepted) {
    errors.termsAccepted = "Please accept the Terms and Conditions to continue.";
  }

  if (!input.marketingConsent) {
    errors.marketingConsent = "Please accept to continue.";
  }

  return errors;
}

export function hasLeadFormErrors(errors: LeadFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
