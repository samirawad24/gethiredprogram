import type { Locale } from "./site";

// The site's pages, in mobile menu order. Add one here and it appears in the
// mobile menu and the sitemap; the desktop header picks its own (see Header).
export const pages = ["home", "about", "parents", "services", "contact"] as const;

// Pages that sit under another one in the menus: For Parents hangs off About.
export const subPages: Partial<Record<NavPageKey, NavPageKey>> = { parents: "about" };

// Policy pages. Linked from the footer and listed in the sitemap, kept out of
// the nav.
export const legalPages = ["privacy", "terms", "cookies"] as const;

export type NavPageKey = (typeof pages)[number];
export type LegalPageKey = (typeof legalPages)[number];
export type PageKey = NavPageKey | LegalPageKey;

const segments: Record<PageKey, string> = {
  home: "",
  about: "about",
  parents: "parents",
  services: "services",
  contact: "contact",
  privacy: "privacy",
  terms: "terms",
  cookies: "cookies",
};

// App-relative path, e.g. "/en/about/". next/link adds the base path itself,
// so never prefix it here.
export const pagePath = (lang: Locale, page: PageKey) => {
  const segment = segments[page];
  return segment ? `/${lang}/${segment}/` : `/${lang}/`;
};
