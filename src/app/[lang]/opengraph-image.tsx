import { ImageResponse } from "next/og";
import { getDictionary } from "@/dictionaries";
import { hasLocale, locales, site } from "@/lib/site";

// Generated social share card (1200x630). Swap for a photo-based PNG later if you like.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Get Hired Program, career coaching with Ana Prato";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(hasLocale(lang) ? lang : "en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#fbf7f0",
          color: "#2b2521",
        }}
      >
        <div style={{ fontSize: 32, color: "#0f5f5c", letterSpacing: 2 }}>
          {site.brand.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700 }}>{site.coachName}</div>
          <div style={{ fontSize: 44, color: "#6b6058", marginTop: 12 }}>
            {dict.hero.role}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: "#0f5f5c",
            color: "#fbf7f0",
            fontSize: 32,
            padding: "18px 36px",
            borderRadius: 999,
          }}
        >
          {dict.hero.cta}
        </div>
      </div>
    ),
    size,
  );
}
