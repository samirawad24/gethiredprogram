import type { Dictionary } from "@/dictionaries";
import SectionHead from "./SectionHead";

type Quote = Dictionary["testimonials"]["featured"];

function Attribution({ item }: { item: Quote }) {
  return (
    <figcaption className="text-small" style={{ marginTop: "calc(20 * var(--u))" }}>
      <span className="block font-medium text-navy">{item.name}</span>
      {item.role}
    </figcaption>
  );
}

// One short quote set large, then the four longer stories in a ruled 2x2.
export default function Testimonials({ dict }: { dict: Dictionary }) {
  const { testimonials } = dict;

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="shell">
      <div className="section">
        <SectionHead id="testimonials-heading" eyebrow={testimonials.eyebrow} heading={testimonials.heading} />

        <figure style={{ marginTop: "calc(40 * var(--u))" }} data-reveal>
          <blockquote className="quote quote--lead">&ldquo;{testimonials.featured.quote}&rdquo;</blockquote>
          <Attribution item={testimonials.featured} />
        </figure>

        <hr className="hairline" style={{ marginTop: "calc(44 * var(--u))" }} />
        <ul className="columns columns--2x2 columns--quotes" data-reveal-stagger>
          {testimonials.items.map((item) => (
            <li key={item.name}>
              <figure className="flex h-full flex-col">
                <blockquote className="quote quote--long flex-1">&ldquo;{item.quote}&rdquo;</blockquote>
                <Attribution item={item} />
              </figure>
            </li>
          ))}
        </ul>

        {testimonials.translatedNote && (
          <p className="text-caption" style={{ marginTop: "calc(24 * var(--u))" }}>
            {testimonials.translatedNote}
          </p>
        )}
      </div>
    </section>
  );
}
