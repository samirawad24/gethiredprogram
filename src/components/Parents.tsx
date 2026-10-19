import type { Dictionary } from "@/dictionaries";
import { pagePath } from "@/lib/routes";
import type { Locale } from "@/lib/site";
import Button from "./Button";

// The For Parents page below its masthead: the opening note, what changed in
// hiring, what the student gets, why the practice is small, and the three
// questions parents ask. Same two-column rhythm as the About page.
export default function Parents({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { parents } = dict;
  const twoCols = "section grid gap-10 md:grid-cols-[462fr_529fr] md:gap-[calc(56*var(--u))]";

  return (
    <>
      <section aria-label={parents.hero.eyebrow} className="shell">
        <div className="max-w-[46rem]" data-reveal style={{ paddingBottom: "calc(56 * var(--u))" }}>
          <p className="text-body">{parents.intro}</p>
          <p className="text-body" style={{ marginTop: "calc(18 * var(--u))" }}>
            {parents.introQuote.before}
            <em className="serif text-heading">{parents.introQuote.quote}</em>
            {parents.introQuote.after}
          </p>
        </div>
      </section>

      <section aria-labelledby="changed-heading" className="shell">
        <hr className="hairline" />
        <div className={twoCols} data-reveal>
          <div>
            <h2 id="changed-heading" className="serif h-section">
              {parents.changed.heading}
            </h2>
          </div>
          <div>
            <ul className="tick-list text-body space-y-3">
              {parents.changed.items.map((item) => (
                <li key={item.lead}>
                  <strong className="font-semibold text-heading">{item.lead}</strong>
                  {item.rest}
                </li>
              ))}
            </ul>
            <p className="text-body" style={{ marginTop: "calc(26 * var(--u))" }}>
              {parents.changed.closing}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="gets-heading" className="shell">
        <hr className="hairline" />
        {/* Phones read heading, list, then "small"; desktop puts "small"
            under the heading with the list spanning both rows. */}
        <div className={`${twoCols} md:grid-rows-[auto_1fr]`} data-reveal>
          <h2 id="gets-heading" className="serif h-section">
            {parents.gets.heading}
          </h2>
          <ul className="tick-list text-body space-y-3 md:col-start-2 md:row-span-2 md:row-start-1">
            {parents.gets.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="md:col-start-1">
            <h3 className="serif h-band">{parents.small.heading}</h3>
            <p className="text-body" style={{ marginTop: "calc(14 * var(--u))" }}>
              {parents.small.text}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="shell">
        <hr className="hairline" />
        <div className={twoCols}>
          <div data-reveal>
            <h2 id="faq-heading" className="serif h-section">
              {parents.faq.heading}
            </h2>
          </div>
          <div>
            {parents.faq.items.map((item, index) => (
              <div
                key={item.q}
                data-reveal
                style={index ? { marginTop: "calc(30 * var(--u))", paddingTop: "calc(30 * var(--u))", borderTop: "var(--divider)" } : undefined}
              >
                <h3 className="serif h-card">{item.q}</h3>
                {item.a.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-body" style={{ marginTop: "calc(12 * var(--u))" }}>
                    {paragraph}
                  </p>
                ))}
                {item.list.length > 0 && (
                  <ul className="tick-list text-body space-y-2" style={{ marginTop: "calc(12 * var(--u))" }}>
                    {item.list.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {item.after && (
                  <p className="text-body" style={{ marginTop: "calc(12 * var(--u))" }}>
                    {item.after}
                  </p>
                )}
              </div>
            ))}
            <Button href={pagePath(lang, "contact")} size="md" className="mt-[calc(36*var(--u))]">
              {parents.cta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
