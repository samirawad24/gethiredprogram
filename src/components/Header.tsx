import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/site";
import { site } from "@/lib/site";
import LanguageToggle from "./LanguageToggle";

type Props = { lang: Locale; dict: Dictionary };

export default function Header({ lang, dict }: Props) {
  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#program", label: dict.nav.program },
    { href: "#testimonials", label: dict.nav.testimonials },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={`/${lang}`}
          aria-label={dict.nav.home}
          className="font-serif text-lg font-semibold tracking-tight text-ink"
        >
          {site.brand}
        </Link>

        <nav className="flex items-center gap-2 sm:gap-6">
          <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-teal">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle lang={lang} dict={dict} />
          <a
            href="#booking"
            className="hidden rounded-full bg-teal px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-teal-dark sm:inline-block"
          >
            {dict.nav.book}
          </a>
        </nav>
      </div>
    </header>
  );
}
