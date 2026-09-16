import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Figtree, Playfair_Display } from "next/font/google";
import { getDictionary } from "@/dictionaries";
import { hasLocale, locales, site } from "@/lib/site";
import { defaultTheme, themeInitScript } from "@/lib/theme";
import "../globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  const ogImage = `${site.url}/${lang}/og.png`;

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: site.brand,
    authors: [{ name: site.coachName, url: site.linkedin }],
    alternates: {
      canonical: `${site.url}/${lang}/`,
      languages: { en: `${site.url}/en/`, es: `${site.url}/es/`, "x-default": `${site.url}/en/` },
    },
    openGraph: {
      type: "website",
      url: `${site.url}/${lang}/`,
      siteName: site.brand,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang === "es" ? "es_US" : "en_US",
      alternateLocale: lang === "es" ? ["en_US"] : ["es_US"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: dict.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      data-theme={defaultTheme}
      // The inline script below rewrites data-theme before paint.
      suppressHydrationWarning
      className={`${playfair.variable} ${figtree.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
