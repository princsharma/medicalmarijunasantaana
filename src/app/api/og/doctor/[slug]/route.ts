import { notFound } from "next/navigation";
import { getDoctorBySlug } from "@/data/doctors";
import { renderDoctorPhotoPng } from "@/lib/og/doctor-photo";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  if (!getDoctorBySlug(slug)) notFound();

  const png = await renderDoctorPhotoPng(slug);
  if (!png) notFound();

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
