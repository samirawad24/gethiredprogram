import type { MetadataRoute } from "next";
import { legalPages, pagePath, pages } from "@/lib/routes";
import { locales, site } from "@/lib/site";

export const dynamic = "force-static";

// Every page in every language, each listing its translations.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...pages, ...legalPages].flatMap((page) => {
    const languages = Object.fromEntries(
      locales.map((lang) => [lang, `${site.url}${pagePath(lang, page)}`]),
    );

    return locales.map((lang) => ({
      url: `${site.url}${pagePath(lang, page)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page === "home" ? (lang === "en" ? 1 : 0.9) : (legalPages as readonly string[]).includes(page) ? 0.3 : 0.8,
      alternates: { languages },
    }));
  });
}
