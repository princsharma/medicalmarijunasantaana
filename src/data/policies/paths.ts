import type { PolicySlug } from "@/data/policies/types";

export const POLICY_HUB_PATH = "/our-policies";

export function getPolicyHref(slug: PolicySlug) {
  return `${POLICY_HUB_PATH}/${slug}`;
}
