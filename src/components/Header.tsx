import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { pagePath, pages, type NavPageKey, type PageKey } from "@/lib/routes";
import { site, type Locale } from "@/lib/site";
import Button from "./Button";
import LanguageToggle from "./LanguageToggle";
import RandomLetterSwap from "./RandomLetterSwap";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

type Props = { lang: Locale; dict: Dictionary; page: PageKey };

// Wordmark left; Services, About, EN/ES and the booking button right, as in
// the mockup. Phones get every page in the menu instead.
export default function Header({ lang, dict, page }: Props) {
  const link = (key: NavPageKey) => ({
    href: pagePath(lang, key),
    label: dict.nav[key],
    current: key === page,
  });
  const desktopLinks = (["services", "about"] as const).map(link);
  const bookHref = pagePath(lang, "contact");

  return (
    <header className="site-header">
      <div className="shell site-header__bar">
        <Link href={pagePath(lang, "home")} aria-label={dict.nav.homeAria} className="brand-link">
          <Logo className="brand-logo brand-logo--header" />
          <span className="wordmark wordmark--header">{site.brand}</span>
        </Link>

        <nav aria-label={dict.nav.primary} className="site-nav">
          <ul className="site-nav__links max-md:hidden">
            {desktopLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={item.current ? "page" : undefined}>
                  <RandomLetterSwap label={item.label} staggerDuration={0.025} duration={0.6} />
                </Link>
              </li>
            ))}
          </ul>

          <span aria-hidden="true" className="site-nav__divider max-md:hidden" />

          <div className="max-md:hidden">
            <LanguageToggle lang={lang} dict={dict} page={page} />
          </div>

          <Button href={bookHref} size="sm" className="site-nav__cta max-md:hidden">
            {dict.nav.book}
          </Button>

          <MobileNav
            links={pages.map(link)}
            bookHref={bookHref}
            bookLabel={dict.nav.book}
            openLabel={dict.nav.openMenu}
            closeLabel={dict.nav.closeMenu}
            languages={<LanguageToggle lang={lang} dict={dict} page={page} />}
          />
        </nav>
      </div>
    </header>
  );
}
