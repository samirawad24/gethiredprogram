import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import { site, type Locale } from "@/lib/site";

// Hairline, wordmark, then Contact | domain, as in the mockup.
export default function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const domain = new URL(site.url).hostname.replace(/^www\./, "");

  return (
    <footer className="shell">
      <hr className="hairline" />
      <div className="site-footer__bar">
        <Link href={pagePath(lang, "home")} className="wordmark wordmark--footer">
          {site.brand}
        </Link>
        <div className="site-footer__links">
          <Link href={pagePath(lang, "contact")}>{dict.nav.contact}</Link>
          <span aria-hidden="true" />
          <a href={site.url}>{domain}</a>
        </div>
      </div>
    </footer>
  );
}
