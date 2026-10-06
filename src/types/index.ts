export type NavItem = {
  label: string;
  href: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  badge: string;
  description: string;
  features: string[];
  highlighted: boolean;
};

export type Review = {
  name: string;
  rating: number;
  text: string;
  date: string;
};

export type FaqCategory =
  | "getting-started"
  | "process"
  | "eligibility"
  | "privacy"
  | "benefits"
  | "renewal";

export type FaqItem = {
  question: string;
  answer: string;
  category?: FaqCategory;
};

export type FormStatus = "idle" | "loading" | "success" | "error";

export type ApiResponse<T = unknown> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
};
