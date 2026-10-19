import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { pagePath, pages, subPages, type NavPageKey, type PageKey } from "@/lib/routes";
import { site, type Locale } from "@/lib/site";
import Button from "./Button";
import LanguageToggle from "./LanguageToggle";
import RandomLetterSwap from "./RandomLetterSwap";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

type Props = { lang: Locale; dict: Dictionary; page: PageKey };

// Wordmark left; Home, About (with For Parents under it), Services, EN/ES and
// the booking button right. Phones get every page in the menu instead.
export default function Header({ lang, dict, page }: Props) {
  const link = (key: NavPageKey) => ({
    href: pagePath(lang, key),
    label: dict.nav[key],
    current: key === page,
    sub: key in subPages,
  });
  const desktopLinks = (["home", "about", "services"] as const).map((key) => ({
    ...link(key),
    children: pages.filter((child) => subPages[child] === key).map(link),
  }));
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
              <li key={item.href} className={item.children.length ? "site-nav__parent" : undefined}>
                <Link
                  href={item.href}
                  aria-current={item.current || item.children.some((child) => child.current) ? "page" : undefined}
                >
                  <RandomLetterSwap label={item.label} staggerDuration={0.025} duration={0.6} />
                </Link>
                {item.children.length > 0 && (
                  // Opens on hover and on keyboard focus (focus-within), so
                  // tabbing past About walks straight into it. No JS.
                  <ul className="site-nav__sub">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} aria-current={child.current ? "page" : undefined}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
