// Site-wide settings. Swap these values for real ones; no component changes needed.

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

// URL prefix when the site lives in a subfolder (GitHub Pages project site). Empty on a custom domain.
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

// Prefix a file from /public with the base path, e.g. asset("/images/photo.jpg").
export const asset = (path: string) => `${basePath}${path}`;

export const site = {
  brand: "Get Hired Program",
  coachName: "Ana Prato",
  // Full public URL including any base path. Set NEXT_PUBLIC_SITE_URL.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://gethiredprogram.com").replace(/\/$/, ""),
  // Cal.com link in the form "username/event-slug". Set NEXT_PUBLIC_CAL_LINK.
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "",
  email: "hello@gethiredprogram.com", // PLACEHOLDER: confirm the real inbox
  linkedin: "https://www.linkedin.com/in/anaprato/",
  instagram: "https://www.instagram.com/gethired.program/",
  instagramHandle: "@gethired.program",
  // PLACEHOLDER images: drop real photos into /public/images and update these paths.
  images: {
    hero: "/images/placeholder-hero.svg",
    about: "/images/placeholder-about.svg",
  },
} as const;
