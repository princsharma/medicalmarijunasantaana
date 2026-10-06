import { siteConfig } from "@/data/site";

export function getFullAddress() {
  const { street, city, state, zip } = siteConfig.address;
  return `${street}, ${city}, ${state} ${zip}`;
}

export function getGoogleMapsSearchUrl() {
  return `https://maps.google.com/?q=${encodeURIComponent(getFullAddress())}`;
}

export function getGoogleMapsEmbedUrl() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(getFullAddress())}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}
