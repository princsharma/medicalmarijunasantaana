import { accessibilityStatement } from "@/data/policies/pages/accessibility-statement";
import { consentForTelehealth } from "@/data/policies/pages/consent-for-telehealth";
import { disclaimerPolicy } from "@/data/policies/pages/disclaimer";
import { editorialPolicy } from "@/data/policies/pages/editorial-policy";
import { hipaaCompliance } from "@/data/policies/pages/hipaa-compliance";
import { privacyPolicy } from "@/data/policies/pages/privacy-policy";
import { refundPolicy } from "@/data/policies/pages/refund-policy";
import { shippingPolicy } from "@/data/policies/pages/shipping-policy";
import { termsOfUse } from "@/data/policies/pages/terms-of-use";
import { getPolicyHref } from "@/data/policies/paths";
import type { PolicyCategory, PolicyPageData, PolicySlug } from "@/data/policies/types";

export type { PolicyCategory, PolicyPageData, PolicySlug } from "@/data/policies/types";
export { getPolicyHref, POLICY_HUB_PATH } from "@/data/policies/paths";

export const policiesHubContent = {
  eyebrow: "Legal center",
  title: "Our Policies",
  description:
    "Review the documents that explain how we protect your information, deliver telehealth care, and operate Medical Marijuana Card Santa Ana.",
} as const;

/** Display order matches footer columns. */
export const policyPages: PolicyPageData[] = [
  refundPolicy,
  privacyPolicy,
  editorialPolicy,
  shippingPolicy,
  termsOfUse,
  disclaimerPolicy,
  hipaaCompliance,
  consentForTelehealth,
  accessibilityStatement,
];

export const footerOurPoliciesLinks = policyPages
  .filter((p) => p.category === "our-policies")
  .map((p) => ({ label: p.shortTitle, href: getPolicyHref(p.slug) }));

export const footerLegalPolicyLinks = policyPages
  .filter((p) => p.category === "legal")
  .map((p) => ({ label: p.shortTitle, href: getPolicyHref(p.slug) }));

export function getPolicyBySlug(slug: string) {
  return policyPages.find((policy) => policy.slug === slug);
}

export function getPoliciesByCategory(category: PolicyCategory) {
  return policyPages.filter((policy) => policy.category === category);
}
