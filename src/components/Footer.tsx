import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { legalPages, pagePath } from "@/lib/routes";
import { site, type Locale } from "@/lib/site";
import { InstagramIcon, LinkedInIcon } from "./Icons";
import Logo from "./Logo";

// Hairline, badge and wordmark, then Contact | domain and the two social
// buttons. Below: the policy links, copyright, business details and the
// no-guarantee line.
export default function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const domain = new URL(site.url).hostname.replace(/^www\./, "");

  return (
    <footer className="shell">
      <hr className="hairline" />
      <div className="site-footer__bar">
        <Link href={pagePath(lang, "home")} aria-label={dict.nav.homeAria} className="brand-link">
          <Logo className="brand-logo brand-logo--footer" />
          <span className="wordmark wordmark--footer">{site.brand}</span>
        </Link>
        <div className="site-footer__links">
          <Link href={pagePath(lang, "contact")}>{dict.nav.contact}</Link>
          <span aria-hidden="true" />
          <a href={site.url}>{domain}</a>
          <span aria-hidden="true" className="max-md:hidden" />
          <ul className="social-list">
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn">
                <LinkedInIcon className="h-[1.1em] w-[1.1em]" />
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
                <InstagramIcon className="h-[1.1em] w-[1.1em]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-footer__legal text-caption">
        <nav aria-label={dict.footer.legalNav}>
          <ul className="site-footer__legal-links">
            {legalPages.map((key) => (
              <li key={key}>
                <Link href={pagePath(lang, key)}>{dict.legal[key].heading}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p>
          &copy; {new Date().getFullYear()} {site.legalName}. {dict.footer.rights} {site.location} ·{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p>{dict.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
