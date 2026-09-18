import type { Locale } from "./site";

// The site's pages, in nav order. Add one here and it appears in the header,
// the mobile menu, the footer and the sitemap.
export const pages = ["home", "about", "services", "contact"] as const;
export type PageKey = (typeof pages)[number];

const segments: Record<PageKey, string> = {
  home: "",
  about: "about",
  services: "services",
  contact: "contact",
};

// App-relative path, e.g. "/en/about/". next/link adds the base path itself,
// so never prefix it here.
export const pagePath = (lang: Locale, page: PageKey) => {
  const segment = segments[page];
  return segment ? `/${lang}/${segment}/` : `/${lang}/`;
};
