import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { asset, site } from "@/lib/site";
import Button from "./Button";
import { CheckIcon } from "./Icons";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" aria-labelledby="about-heading" className="section">
      <div className="shell grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* PLACEHOLDER image: replace site.images.about in src/lib/site.ts */}
        <Image
          src={asset(site.images.about)}
          alt={dict.about.imageAlt}
          width={700}
          height={700}
          sizes="(min-width: 768px) 45vw, 100vw"
          className="w-full rounded-[var(--radius-media)] object-cover"
          style={{ aspectRatio: "1 / 1" }}
        />

        <div>
          <p className="eyebrow">{dict.about.eyebrow}</p>
          <h2 id="about-heading" className="display mt-3 text-4xl sm:text-5xl">
            {dict.about.heading}
          </h2>
          <span aria-hidden="true" className="rule mt-5" />

          {dict.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="lead mt-5 text-lg">
              {paragraph}
            </p>
          ))}

          <ul className="mt-8 space-y-3">
            {dict.about.facts.map((fact) => (
              <li key={fact} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>

          <Button href="#booking" className="mt-9">
            {dict.about.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
