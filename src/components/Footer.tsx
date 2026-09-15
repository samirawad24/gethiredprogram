import type { Dictionary } from "@/dictionaries";
import { site } from "@/lib/site";

export default function Footer({ dict }: { dict: Dictionary }) {
  const { footer } = dict;
  const linkClass = "transition-colors hover:text-teal-soft";

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold">{site.brand}</p>
          <p className="mt-2 text-cream/70">{footer.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-cream/60">{footer.contact}</h2>
          <a href={`mailto:${site.email}`} className={`mt-3 inline-block ${linkClass}`}>
            {site.email}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-cream/60">{footer.follow}</h2>
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
      <p className="border-t border-cream/10 px-5 py-6 text-center text-sm text-cream/50">
        &copy; {new Date().getFullYear()} {site.brand}. {footer.rights}
      </p>
    </footer>
  );
}
