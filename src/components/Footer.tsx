import type { Dictionary } from "@/dictionaries";
import { site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer({ dict }: { dict: Dictionary }) {
  const { footer } = dict;
  const linkClass = "transition-colors hover:text-gold";

  return (
    <footer className="on-dark bg-navy-deep">
      <div className="shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo className="h-14 w-14 text-white/90" />
          <p className="mt-4 font-serif text-xl font-semibold">{site.brand}</p>
          <p className="lead mt-2 text-sm">{footer.tagline}</p>
        </div>

        <div>
          <h2 className="eyebrow">{footer.contact}</h2>
          <a href={`mailto:${site.email}`} className={`mt-3 inline-block ${linkClass}`}>
            {site.email}
          </a>
        </div>

        <div>
          <h2 className="eyebrow">{footer.follow}</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Instagram {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} {site.brand}. {footer.rights}
      </p>
    </footer>
  );
}
