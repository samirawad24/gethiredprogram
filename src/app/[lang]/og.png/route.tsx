import { ImageResponse } from "next/og";
import { getDictionary } from "@/dictionaries";
import { hasLocale, locales, site } from "@/lib/site";

// Social share card (1200x630), exported as /en/og.png and /es/og.png.
// Swap for a photo-based PNG later if you like.
export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function GET(_request: Request, { params }: RouteContext<"/[lang]/og.png">) {
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
    { width: 1200, height: 630 },
  );
}
