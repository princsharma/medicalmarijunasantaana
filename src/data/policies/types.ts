import type { LegalSection } from "@/components/ui/LegalPage";

export type PolicyCategory = "our-policies" | "legal";

export type PolicySlug =
  | "refund-policy"
  | "privacy-policy"
  | "editorial-policy"
  | "shipping-policy"
  | "terms-of-use"
  | "disclaimer"
  | "hipaa-compliance"
  | "consent-for-telehealth"
  | "accessibility-statement";

export type PolicyPageData = {
  slug: PolicySlug;
  category: PolicyCategory;
  title: string;
  shortTitle: string;
  description: string;
  summary: string;
  updated?: string;
  intro: string | string[];
  sections: LegalSection[];
  footerDisclaimer?: string;
};
