import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import { asset, site, type Locale } from "@/lib/site";
import Button from "./Button";

export default function Hero({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { hero } = dict;

  return (
    <section className="hero">
      <div className="shell hero__grid">
        <div className="hero__text" data-reveal>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="serif h-hero" style={{ marginTop: "calc(13 * var(--u))" }}>
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-lead hero__promise" style={{ marginTop: "calc(26 * var(--u))" }}>
            {hero.promise}
          </p>
          <Button href={pagePath(lang, "contact")} size="lg" flow className="mt-[calc(31*var(--u))]">
            {hero.cta}
          </Button>
          <ul className="note-list text-small" style={{ marginTop: "calc(20 * var(--u))" }}>
            {hero.note.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <figure>
          <Image
            src={asset(site.images.hero)}
            alt={hero.imageAlt}
            width={528}
            height={519}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="hero__img"
          />
          {/* PLACEHOLDER: delete this caption with the real portrait. */}
          <figcaption className="text-caption" style={{ marginTop: "calc(8 * var(--u))" }}>
            {hero.imageCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
