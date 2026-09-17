import type { Dictionary } from "@/dictionaries";

// Initials stand in for a headshot. Real photos of real clients can replace
// this; stock faces next to a quote would be inventing the person.
const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

export default function Testimonials({ dict }: { dict: Dictionary }) {
  const { testimonials } = dict;

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="section">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 id="testimonials-heading" className="display mt-3 text-4xl sm:text-5xl">
            {testimonials.heading}
          </h2>
          <span aria-hidden="true" className="rule mt-5" />
          {/* PLACEHOLDER note: delete placeholderNote from the dictionaries when
              the quotes are real. */}
          <p className="mt-5 inline-block rounded-md bg-gold-soft px-3 py-1 text-sm text-navy">
            {testimonials.placeholderNote}
          </p>
        </div>

        <ul className="card-row mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <li key={item.quote} className="card flex flex-col p-7">
              <figure className="flex flex-1 flex-col">
                <span aria-hidden="true" className="font-serif text-5xl leading-none text-gold">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 font-serif text-lg leading-snug">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-sm">
                  <span aria-hidden="true" className="avatar">
                    {initials(item.name)}
                  </span>
                  <span>
                    <span className="block font-semibold">{item.name}</span>
                    <span className="text-muted">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
