import type { Dictionary } from "@/dictionaries";
import SectionHead from "./SectionHead";

export default function Testimonials({ dict }: { dict: Dictionary }) {
  const { testimonials } = dict;

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="shell">
      <div className="section">
        <SectionHead id="testimonials-heading" eyebrow={testimonials.eyebrow} heading={testimonials.heading}>
          {/* PLACEHOLDER: delete placeholderNote from the dictionaries when
              the quotes are real. */}
          <p className="placeholder-chip" style={{ marginTop: "calc(16 * var(--u))" }}>
            {testimonials.placeholderNote}
          </p>
        </SectionHead>

        <ul className="columns" style={{ marginTop: "calc(44 * var(--u))" }} data-reveal-stagger>
          {testimonials.items.map((item) => (
            <li key={item.quote}>
              <figure className="flex h-full flex-col">
                <blockquote className="quote flex-1">&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption className="text-small" style={{ marginTop: "calc(20 * var(--u))" }}>
                  <span className="block font-medium text-navy">{item.name}</span>
                  {item.role}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
