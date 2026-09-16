import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/site";
import { site } from "@/lib/site";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";

type Props = { lang: Locale; dict: Dictionary };

export default function Header({ lang, dict }: Props) {
  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#program", label: dict.nav.program },
    { href: "#testimonials", label: dict.nav.testimonials },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/92 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          href={`/${lang}`}
          aria-label={dict.nav.home}
          className="flex shrink-0 items-center gap-2.5 text-navy"
        >
          <Logo className="h-10 w-10 sm:h-11 sm:w-11" />
          <span className="sr-only">{site.brand}</span>
        </Link>

        <nav aria-label={site.brand} className="flex items-center gap-2 sm:gap-6">
          <ul className="hidden items-center gap-6 text-sm font-medium text-ink/75 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-navy">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle lang={lang} dict={dict} />
          <a href="#booking" className="btn btn--cta btn--sm">
            {dict.nav.book}
          </a>
        </nav>
      </div>
    </header>
  );
}
