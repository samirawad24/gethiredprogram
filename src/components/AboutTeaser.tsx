import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import { asset, site, type Locale } from "@/lib/site";
import { CheckIcon } from "./Icons";

// Short version of the About page, for Home. The full story lives on /about/.
export default function AboutTeaser({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <section aria-labelledby="about-teaser-heading" className="section">
      <div className="shell grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-full w-full rounded-[var(--radius-media)] border border-gold/45 md:-bottom-6 md:-left-6"
          />
          <Image
            src={asset(site.images.about)}
            alt={dict.about.imageAlt}
            width={1100}
            height={1100}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="relative w-full rounded-[var(--radius-media)] object-cover"
            style={{ aspectRatio: "1 / 1" }}
          />
        </div>

        <div>
          <p className="eyebrow">{dict.about.eyebrow}</p>
          <h2 id="about-teaser-heading" className="display mt-3 text-4xl sm:text-5xl">
            {dict.about.heading}
          </h2>
          <span aria-hidden="true" className="rule mt-5" />
          <p className="lead mt-5 text-lg">{dict.about.paragraphs[0]}</p>

          <ul className="mt-8 space-y-3">
            {dict.about.facts.map((fact) => (
              <li key={fact} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>

          <Link href={pagePath(lang, "about")} className="btn btn--primary mt-9">
            {dict.about.teaserCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
