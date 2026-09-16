import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { asset, site } from "@/lib/site";
import Button from "./Button";

// One markup, three looks. Classic and minimal put the portrait beside the
// text; the bold theme stretches it behind a navy scrim (see .hero in
// globals.css).
export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="hero">
      <div className="shell hero__inner">
        <div className="hero__content">
          <p className="eyebrow">{dict.hero.eyebrow}</p>
          <h1 className="display mt-4 text-[2.65rem] sm:text-6xl lg:text-[4.25rem]">
            {dict.hero.headlineLead}
            <span className="display__accent">{dict.hero.headlineAccent}</span>
          </h1>
          <p className="lead mt-6 max-w-xl text-lg sm:text-xl">{dict.hero.promise}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#booking">{dict.hero.cta}</Button>
            <Button href="#program" variant="outline">
              {dict.hero.secondaryCta}
            </Button>
          </div>

          <p className="lead mt-7 text-sm">{dict.hero.note}</p>
        </div>

        <div className="hero__media">
          {/* PLACEHOLDER image: replace site.images.hero in src/lib/site.ts */}
          <Image
            src={asset(site.images.hero)}
            alt={dict.hero.imageAlt}
            width={900}
            height={1100}
            priority
            sizes="(min-width: 900px) 50vw, 100vw"
            className="hero__img"
          />
          <span aria-hidden="true" className="hero__scrim" />
        </div>
      </div>
    </section>
  );
}
