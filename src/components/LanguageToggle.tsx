import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { pagePath, type PageKey } from "@/lib/routes";
import { locales, type Locale } from "@/lib/site";

type Props = { lang: Locale; dict: Dictionary; page: PageKey };

// EN · ES, as in the mockup. Switching keeps the reader's place: /en/about/
// goes to /es/about/, not back to the home page.
export default function LanguageToggle({ lang, dict, page }: Props) {
  return (
    <ul aria-label={dict.languageToggle.label} className="lang-switch">
      {locales.map((locale) => (
        <li key={locale}>
          <Link
            href={pagePath(locale, page)}
            hrefLang={locale}
            lang={locale}
            aria-label={dict.languageToggle[locale]}
            aria-current={locale === lang ? "true" : undefined}
          >
            {locale.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
}
