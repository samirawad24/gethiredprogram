import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { pagePath, type PageKey } from "@/lib/routes";
import { site, type Locale } from "@/lib/site";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

type Props = { lang: Locale; dict: Dictionary; page: PageKey };

export default function Header({ lang, dict, page }: Props) {
  const links = (["home", "about", "services", "contact"] as const).map((key) => ({
    href: pagePath(lang, key),
    label: dict.nav[key],
    current: key === page,
  }));
  const bookHref = pagePath(lang, "contact");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/92 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          href={pagePath(lang, "home")}
          aria-label={dict.nav.homeAria}
          className="flex h-11 min-w-11 shrink-0 items-center gap-2.5 text-navy"
        >
          <Logo className="h-10 w-10 sm:h-11 sm:w-11" />
          <span className="sr-only">{site.brand}</span>
        </Link>

        <nav aria-label={dict.nav.primary} className="flex items-center gap-2 sm:gap-6">
          <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={link.current ? "page" : undefined}
                  className={`border-b-2 pb-0.5 transition-colors ${
                    link.current
                      ? "border-gold text-navy"
                      : "border-transparent text-ink/75 hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <LanguageToggle lang={lang} dict={dict} page={page} />

          <Link href={bookHref} className="btn btn--cta btn--sm hidden sm:inline-flex">
            {dict.nav.book}
          </Link>

          <MobileNav
            links={links}
            bookHref={bookHref}
            bookLabel={dict.nav.book}
            openLabel={dict.nav.openMenu}
            closeLabel={dict.nav.closeMenu}
          />
        </nav>
      </div>
    </header>
  );
}
