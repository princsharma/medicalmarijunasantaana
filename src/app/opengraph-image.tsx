import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #3a1f7a 0%, #5533c4 45%, #0d9488 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          <span>Medical Marijuana Card</span>
          <span>Santa Ana, CA</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 860,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              width: "fit-content",
              padding: "12px 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.20)",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            MMJ Santa Ana
          </div>

          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: -3,
              maxWidth: 900,
            }}
          >
            Get Your Medical Marijuana Card in Santa Ana
          </div>

          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              opacity: 0.9,
              maxWidth: 800,
            }}
          >
            Same-day telehealth evaluations, licensed doctors, and online support.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            opacity: 0.95,
          }}
        >
          <span>Fast • Affordable • HIPAA-compliant</span>
          <span>medicalmarijuanacardsantaana.com</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
