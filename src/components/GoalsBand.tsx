import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import { asset, site, type Locale } from "@/lib/site";
import ArrowLink from "./ArrowLink";

// Warm gray band: the pitch on the left, a desk photo running off the right
// edge of the window.
export default function GoalsBand({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { goals } = dict;

  return (
    <section aria-labelledby="goals-heading" className="band">
      <div className="goals">
        <div data-reveal style={{ paddingTop: "calc(8 * var(--u))" }}>
          <h2 id="goals-heading" className="serif h-band">
            {goals.heading}
          </h2>
          <p className="text-body max-w-[23em]" style={{ marginTop: "calc(10 * var(--u))" }}>
            {goals.text}
          </p>
          <ArrowLink href={pagePath(lang, "about")} underline className="link-arrow--lg mt-[calc(15*var(--u))]">
            {goals.link}
          </ArrowLink>
        </div>
        <Image
          src={asset(site.images.goals)}
          alt={goals.imageAlt}
          width={451}
          height={197}
          sizes="(min-width: 768px) 45vw, 100vw"
          className="goals__img"
        />
      </div>
    </section>
  );
}
