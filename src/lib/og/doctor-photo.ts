import path from "node:path";
import { readFile } from "node:fs/promises";
import sharp from "sharp";
import { getDoctorBySlug } from "@/data/doctors";

export const DOCTOR_OG_WIDTH = 1200;
export const DOCTOR_OG_HEIGHT = 630;

/** Same crop as slug hero: object-cover, object-top at OG aspect ratio. */
export async function renderDoctorPhotoPng(slug: string) {
  const doctor = getDoctorBySlug(slug);
  if (!doctor?.photo) {
    return null;
  }

  const filePath = path.join(process.cwd(), "public", doctor.photo.replace(/^\//, ""));
  const input = await readFile(filePath);

  return sharp(input)
    .resize(DOCTOR_OG_WIDTH, DOCTOR_OG_HEIGHT, {
      fit: "cover",
      position: "north",
    })
    .png()
    .toBuffer();
}
