import {
  CalendarCheck,
  ClipboardList,
  IdCard,
  Video,
} from "lucide-react";

export const aboutContent = {
  eyebrow: "Our Story",
  title: "About Medical Marijuana Card Santa Ana",
  description:
    "We connect Santa Ana and Orange County patients with California-licensed physicians for medical marijuana evaluations — entirely by telehealth, built around local needs and state requirements.",
  whyHeading: "Why We Built This for Santa Ana",
  whyText:
    "Orange County has one of the largest medical marijuana patient communities in California, but the process can still feel confusing on a first try. Between state requirements, county MMIC rules, and knowing which conditions qualify, many patients get stuck before they book an appointment. We built this service to give Santa Ana patients a clear, honest path to physician certification — without hidden fees or confusing paperwork.",
  processHeading: "How the Process Works",
  disclaimer:
    "Physicians on our platform make their own independent decisions. We do not guarantee approvals, and no one on our team influences that clinical judgment.",
  includedHeading: "What We Do",
  notIncludedHeading: "What We Don't Do",
} as const;

export const aboutProcessSteps = [
  {
    step: "1",
    icon: ClipboardList,
    title: "Intake form",
    text: "Fill out a short HIPAA-compliant form with your basic information and medical history.",
  },
  {
    step: "2",
    icon: CalendarCheck,
    title: "Book appointment",
    text: "Schedule your telehealth visit. Most patients get an appointment within 24–48 hours.",
  },
  {
    step: "3",
    icon: Video,
    title: "Physician visit",
    text: "Meet with a California-licensed physician over secure video, usually 10–15 minutes.",
  },
  {
    step: "4",
    icon: IdCard,
    title: "Digital certification",
    text: "Receive your certification digitally if approved, so you can complete your state application.",
  },
] as const;

export const aboutIncluded = [
  "A telehealth evaluation with a California-licensed physician",
  "Guidance on what the state and county require",
  "A digital certification if the physician approves you",
] as const;

export const aboutNotIncluded = [
  "We don't sell or distribute cannabis products",
  "We don't process your state MMIC application — that's a separate fee submitted to your county",
  "We don't guarantee approval. That decision belongs to the evaluating physician",
] as const;
