import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { pagePath, type PageKey } from "@/lib/routes";
import { locales, site, type Locale } from "@/lib/site";

// One place that builds title, description, canonical and hreflang for a page.
// Every route calls this so the four never drift apart.
export function buildMetadata(lang: Locale, page: PageKey): Metadata {
  const dict = getDictionary(lang);
  const meta = dict.meta[page];
  const url = `${site.url}${pagePath(lang, page)}`;
  const ogImage = `${site.url}/${lang}/og.png`;

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((locale) => [locale, `${site.url}${pagePath(locale, page)}`]),
  );
  languages["x-default"] = `${site.url}${pagePath("en", page)}`;

  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    applicationName: site.brand,
    authors: [{ name: site.coachName, url: site.linkedin }],
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      siteName: site.brand,
      title: meta.title,
      description: meta.description,
      locale: lang === "es" ? "es_US" : "en_US",
      alternateLocale: lang === "es" ? ["en_US"] : ["es_US"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: dict.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}
