import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import { asset, site, type Locale } from "@/lib/site";
import Button from "./Button";

export default function About({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { about } = dict;
  const { insider } = about;

  return (
    <section id="about" aria-labelledby="about-heading" className="shell">
      <hr className="hairline" />
      <div className="section grid items-center gap-10 md:grid-cols-[529fr_462fr] md:gap-[calc(56*var(--u))]">
        {/* PLACEHOLDER: same stand-in portrait as Home until the real photo is in. */}
        <figure>
          <Image
            src={asset(site.images.hero)}
            alt={dict.hero.imageAlt}
            width={528}
            height={519}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="hero__img"
          />
          <figcaption className="text-caption" style={{ marginTop: "calc(8 * var(--u))" }}>
            {dict.hero.imageCaption}
          </figcaption>
        </figure>

        <div data-reveal>
          <h2 id="about-heading" className="serif h-section">
            {about.heading}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-body" style={{ marginTop: "calc(18 * var(--u))" }}>
              {paragraph}
            </p>
          ))}
          <ul className="tick-list text-body space-y-2" style={{ marginTop: "calc(26 * var(--u))" }}>
            {about.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* The intro ends on a colon, so the steps follow it in reading order
          on phones too; the closing line and button come last. */}
      <hr className="hairline" />
      <div className="section grid gap-10 md:grid-cols-[529fr_462fr] md:gap-[calc(56*var(--u))]" data-reveal>
        <div>
          <h3 className="serif h-band">{insider.heading}</h3>
          <p className="text-body" style={{ marginTop: "calc(18 * var(--u))" }}>
            {insider.intro}
          </p>
        </div>
        <div>
          <ul className="tick-list text-body space-y-3">
            {insider.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-body" style={{ marginTop: "calc(30 * var(--u))" }}>
            {insider.closing}
          </p>
          <Button href={pagePath(lang, "contact")} size="md" className="mt-[calc(22*var(--u))]">
            {about.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
