import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { asset, site } from "@/lib/site";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-sand">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-28">
        {/* PLACEHOLDER image: replace site.images.about in src/lib/site.ts */}
        <Image
          src={asset(site.images.about)}
          alt={dict.about.imageAlt}
          width={700}
          height={700}
          sizes="(min-width: 768px) 35vw, 100vw"
          className="aspect-square w-full max-w-md rounded-full object-cover"
        />
        <div>
          <h2 id="about-heading" className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            {dict.about.heading}
          </h2>
          {dict.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-5 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
          <ul className="mt-8 flex flex-wrap gap-2">
            {dict.about.facts.map((fact) => (
              <li key={fact} className="rounded-full bg-cream px-4 py-2 text-sm text-ink">
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
