// Site-wide settings. Swap these values for real ones; no component changes needed.

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const site = {
  brand: "Get Hired Program",
  coachName: "Ana Prato",
  // Set NEXT_PUBLIC_SITE_URL in .env.local and in Vercel.
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
