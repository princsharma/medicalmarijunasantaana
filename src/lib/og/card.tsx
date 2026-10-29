import path from "node:path";
import { readFile } from "node:fs/promises";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { siteConfig } from "@/data/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function absoluteAssetUrl(path: string) {
  const base = siteConfig.url.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export type OgCardContent = {
  eyebrow: string;
  title: string;
  description?: string;
  photoPath?: string;
  footer?: string;
};

function titleFontSize(title: string) {
  if (title.length > 72) return 40;
  if (title.length > 52) return 48;
  if (title.length > 36) return 56;
  return 64;
}

async function loadPublicImageSrc(publicPath: string) {
  try {
    const filePath = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
    const ext = path.extname(filePath).toLowerCase();
    const input = await readFile(filePath);
    const pngBuffer =
      ext === ".png"
        ? input
        : await sharp(input).resize({ width: 640, height: 900, fit: "cover" }).png().toBuffer();
    return `data:image/png;base64,${pngBuffer.toString("base64")}`;
  } catch {
    return null;
  }
}

export async function createOgCardImage(content: OgCardContent) {
  const photoSrc = content.photoPath ? await loadPublicImageSrc(content.photoPath) : null;
  const showPhoto = Boolean(photoSrc);
  const footer = content.footer ?? "medicalmarijuanacardsantaana.com";
  const titleSize = titleFontSize(content.title);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #123c31 0%, #1a5c47 42%, #0f766e 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            minWidth: 0,
            padding: 56,
            paddingRight: showPhoto ? 24 : 56,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 18,
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.88,
            }}
          >
            <span>{siteConfig.shortName}</span>
            <span>Santa Ana, CA</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "flex-start",
                padding: "10px 18px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.22)",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              {content.eyebrow}
            </div>

            <div
              style={{
                fontSize: titleSize,
                lineHeight: 1.08,
                fontWeight: 800,
                letterSpacing: -2,
                maxWidth: showPhoto ? 620 : 900,
              }}
            >
              {content.title}
            </div>

            {content.description ? (
              <div
                style={{
                  fontSize: 26,
                  lineHeight: 1.35,
                  opacity: 0.92,
                  maxWidth: showPhoto ? 600 : 820,
                }}
              >
                {content.description}
              </div>
            ) : null}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 20,
              opacity: 0.92,
            }}
          >
            <span>Licensed physicians · Telehealth · HIPAA-aware</span>
            <span>{footer}</span>
          </div>
        </div>

        {showPhoto && photoSrc ? (
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              width: 400,
              paddingBottom: 40,
              paddingRight: 48,
            }}
          >
            <img
              src={photoSrc}
              alt=""
              width={320}
              height={520}
              style={{
                objectFit: "cover",
                objectPosition: "top center",
                borderRadius: 28,
                border: "4px solid rgba(255,255,255,0.28)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
              }}
            />
          </div>
        ) : null}
      </div>
    ),
    OG_SIZE
  );
}
