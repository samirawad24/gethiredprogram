import type { Locale } from "@/lib/site";
import en, { type Dictionary } from "./en";
import es from "./es";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
export type { Dictionary };
