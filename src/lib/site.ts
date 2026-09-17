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
  // Brand art in /public/images/art. Each one is a slot for a real photo:
  // drop a file into /public/images and change the path here, nothing else.
  // Shapes: hero 4:5 portrait, heroWide 16:9, about 1:1, notebook 7:5,
  // backdrop 16:9. See "Swap in real photos" in README.md.
  images: {
    hero: "/images/art/hero-portrait.svg",
    heroWide: "/images/art/hero-wide.svg",
    about: "/images/art/about-desk.svg",
    notebook: "/images/art/notebook.svg",
    backdrop: "/images/art/desk-soft.svg",
  },
} as const;
