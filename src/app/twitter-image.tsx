import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg, #2d1b69 0%, #4b2aa7 45%, #0f766e 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            width: "100%",
            maxWidth: 1040,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.9,
            }}
          >
            Medical Marijuana Card Santa Ana
          </div>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: -3,
            }}
          >
            Get Approved for Your MMIC in Minutes
          </div>
          <div style={{ fontSize: 28, opacity: 0.9 }}>
            Licensed doctors. Same-day telehealth. Trusted guidance.
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
