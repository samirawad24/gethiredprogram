import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import { site, type Locale } from "@/lib/site";
import { InstagramIcon, LinkedInIcon } from "./Icons";
import Logo from "./Logo";

export default function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { footer } = dict;
  const linkClass = "transition-colors hover:text-gold";
  const pages = (["home", "about", "services", "contact"] as const).map((key) => ({
    href: pagePath(lang, key),
    label: dict.nav[key],
  }));

  return (
    <footer className="on-dark bg-navy-deep">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Logo className="h-14 w-14" />
          <p className="mt-4 font-serif text-xl font-semibold">{site.brand}</p>
          <p className="lead mt-2 text-sm">{footer.tagline}</p>
        </div>

        <div>
          <h2 className="eyebrow">{footer.pages}</h2>
          <ul className="mt-3 space-y-2">
            {pages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className={linkClass}>
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">{footer.contact}</h2>
          <a href={`mailto:${site.email}`} className={`mt-3 inline-block ${linkClass}`}>
            {site.email}
          </a>
        </div>

        <div>
          <h2 className="eyebrow">{footer.follow}</h2>
          <ul className="mt-3 flex items-center gap-3">
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-btn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${site.instagramHandle}`}
                className="social-btn"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </li>
          </ul>
          <p className="lead mt-3 text-sm">{site.instagramHandle}</p>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} {site.brand}. {footer.rights}
      </p>
    </footer>
  );
}
