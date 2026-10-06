import { siteConfig } from "@/data/site";

export type HeallyLeadPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  state: string;
  state_of_evaluation: string;
  timezone: string;
  extra_data: {
    "contact[contact_type]": string;
    "product[name]": string;
    utm_source: string;
  };
};

/** UTM source derived from site URL — matches mmjcalifornia reference */
export function getHeallyUtmSource(siteUrl: string = siteConfig.url): string {
  return `utm_${siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
}

/** Base64url encode preset JSON for Heally prefill query param */
export function encodeHeallyPreset(payload: HeallyLeadPayload): string {
  const json = JSON.stringify(payload);
  const base64 =
    typeof window !== "undefined"
      ? btoa(json)
      : Buffer.from(json, "utf-8").toString("base64");

  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function buildHeallyLeadPayload(input: {
  name: string;
  email: string;
  phone: string;
  state?: string;
  utmSource?: string;
}): HeallyLeadPayload {
  const nameParts = input.name.trim().split(/\s+/);
  const utmSource = input.utmSource ?? getHeallyUtmSource();
  const stateCode = input.state?.trim().toUpperCase() || "CA";

  return {
    first_name: nameParts[0] ?? "",
    last_name: nameParts.slice(1).join(" "),
    email: input.email.trim().toLowerCase(),
    phone: input.phone,
    state: stateCode,
    state_of_evaluation: stateCode,
    timezone: "PST",
    extra_data: {
      "contact[contact_type]": "Web Form",
      "product[name]": siteConfig.heally.productName,
      utm_source: utmSource,
    },
  };
}

/** Build full Heally redirect URL with query params */
export function buildHeallyRedirectUrl(input: {
  name: string;
  email: string;
  phone: string;
  state?: string;
  utmSource?: string;
}): string {
  const utmSource = input.utmSource ?? getHeallyUtmSource();
  const payload = buildHeallyLeadPayload({ ...input, utmSource });
  const preset = encodeHeallyPreset(payload);

  const params = new URLSearchParams({
    redirect: siteConfig.heally.redirect,
    preset,
    utm_source: utmSource,
  });

  return `${siteConfig.heally.prefillUrl}?${params.toString()}`;
}
