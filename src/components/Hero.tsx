import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import { asset, site, type Locale } from "@/lib/site";
import Button from "./Button";

// One markup, three looks. Classic and minimal put the portrait beside the
// text; the bold theme stretches it behind a navy scrim (see .hero in
// globals.css).
export default function Hero({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <section className="hero">
      <div className="shell hero__inner">
        <div className="hero__content" data-reveal>
          <p className="eyebrow">{dict.hero.eyebrow}</p>
          <h1 className="display display--hero mt-4">
            {dict.hero.headlineLead}
            <span className="display__accent">{dict.hero.headlineAccent}</span>
          </h1>
          <p className="lead mt-6 max-w-xl text-lg sm:text-xl">{dict.hero.promise}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={pagePath(lang, "contact")}>{dict.hero.cta}</Button>
            <Button href={pagePath(lang, "services")} variant="outline">
              {dict.hero.secondaryCta}
            </Button>
          </div>

          <p className="lead mt-7 text-sm">{dict.hero.note}</p>
        </div>

        <div className="hero__media">
          {/* Two crops of the same idea: the portrait sits beside the text,
              the wide one fills the section in the bold theme. Swap both for
              real photos via site.images.hero / heroWide. */}
          <Image
            src={asset(site.images.hero)}
            alt={dict.hero.imageAlt}
            width={1200}
            height={1500}
            priority
            sizes="(min-width: 900px) 50vw, 100vw"
            className="hero__img hero__img--portrait"
          />
          <Image
            src={asset(site.images.heroWide)}
            alt=""
            width={1920}
            height={1080}
            sizes="100vw"
            className="hero__img hero__img--wide"
          />
          <span aria-hidden="true" className="hero__scrim" />
        </div>
      </div>
    </section>
  );
}
