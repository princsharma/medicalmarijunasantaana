import type { Doctor } from "@/data/doctors";
import { doctorDisplayName, getDoctorBySlug } from "@/data/doctors";
import { DEFAULT_OG_CARD_PATH } from "@/lib/og/og-cards";

export async function getDoctorSlugOgAlt(slug: string) {
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return "Medical Marijuana Card Santa Ana";
  return `${doctorDisplayName(doctor)} — Medical Marijuana Card Santa Ana`;
}

/** Same file as the doctor profile hero (`public/doctors/...`). */
export function getDoctorSlugOgImagePath(doctor: Doctor) {
  return doctor.photo ?? DEFAULT_OG_CARD_PATH;
}
