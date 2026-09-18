import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { pagePath, type PageKey } from "@/lib/routes";
import type { Locale } from "@/lib/site";

type Props = { lang: Locale; dict: Dictionary; page: PageKey };

// Switches language without losing the reader's place: /en/about/ goes to
// /es/about/, not back to the home page.
export default function LanguageToggle({ lang, dict, page }: Props) {
  const other: Locale = lang === "en" ? "es" : "en";

  return (
    <Link
      href={pagePath(other, page)}
      hrefLang={other}
      lang={other}
      aria-label={dict.languageToggle.ariaLabel}
      className="inline-flex h-11 items-center rounded-md border border-line px-3 text-sm font-medium text-ink transition-colors hover:border-navy hover:text-navy sm:h-9"
    >
      {dict.languageToggle.label}
    </Link>
  );
}
