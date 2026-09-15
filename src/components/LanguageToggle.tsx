import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/site";

type Props = { lang: Locale; dict: Dictionary };

export default function LanguageToggle({ lang, dict }: Props) {
  const other: Locale = lang === "en" ? "es" : "en";

  return (
    <Link
      href={`/${other}`}
      hrefLang={other}
      lang={other}
      aria-label={dict.languageToggle.ariaLabel}
      className="rounded-full border border-line px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-teal hover:text-teal"
    >
      {dict.languageToggle.label}
    </Link>
  );
}
