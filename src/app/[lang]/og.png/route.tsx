import { readFile } from "node:fs/promises";
import { join } from "node:path";
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

  // Inlined at build time: the card is generated once per language during the
  // static export, so reading from disk here costs nothing at runtime.
  const logo = await readFile(join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
          background: "#0b1b31",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={132} height={132} alt="" />
          <div style={{ fontSize: 32, color: "#e0a43a", letterSpacing: 2 }}>
            {site.brand.toUpperCase()}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700 }}>{site.coachName}</div>
          <div style={{ fontSize: 44, color: "rgba(255,255,255,0.78)", marginTop: 12 }}>
            {dict.schema.jobTitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: "#e0a43a",
            color: "#0b1b31",
            fontSize: 32,
            padding: "18px 36px",
            borderRadius: 8,
          }}
        >
          {dict.hero.cta}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
