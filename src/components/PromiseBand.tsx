import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import { asset, site, type Locale } from "@/lib/site";
import ArrowLink from "./ArrowLink";

// The goals band layout from Home, carrying the program's promise.
export default function PromiseBand({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { promise } = dict;

  return (
    <section aria-labelledby="promise-heading" className="band">
      <div className="goals">
        <div data-reveal>
          <h2 id="promise-heading" className="serif h-band">
            {promise.heading}
          </h2>
          <p className="text-body max-w-[26em]" style={{ marginTop: "calc(12 * var(--u))" }}>
            {promise.sub}
          </p>
          <ArrowLink href={pagePath(lang, "contact")} underline className="link-arrow--lg mt-[calc(20*var(--u))]">
            {promise.cta}
          </ArrowLink>
        </div>
        <Image
          src={asset(site.images.goals)}
          alt={dict.goals.imageAlt}
          width={451}
          height={197}
          sizes="(min-width: 768px) 45vw, 100vw"
          className="goals__img"
        />
      </div>
    </section>
  );
}
