import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import { asset, site, type Locale } from "@/lib/site";
import Button from "./Button";

// Art on one side, the line that sells the program on the other. Board 2 runs
// this split full width; it also gives the page a picture in the middle.
export default function PromiseBand({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <section aria-labelledby="promise-heading" className="promise section--alt">
      <div className="promise__media">
        <Image
          src={asset(site.images.notebook)}
          alt={dict.promise.imageAlt}
          width={1400}
          height={1000}
          sizes="(min-width: 900px) 50vw, 100vw"
          className="promise__img"
        />
      </div>

      <div className="promise__body" data-reveal>
        <span aria-hidden="true" className="rule" />
        <h2 id="promise-heading" className="display display--band mt-6">
          {dict.promise.heading}
        </h2>
        <p className="lead mt-5 text-lg">{dict.promise.sub}</p>
        <Button href={pagePath(lang, "contact")} className="mt-8 self-start">
          {dict.promise.cta}
        </Button>
      </div>
    </section>
  );
}
