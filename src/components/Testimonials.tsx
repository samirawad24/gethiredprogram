import type { Dictionary } from "@/dictionaries";

export default function Testimonials({ dict }: { dict: Dictionary }) {
  const { testimonials } = dict;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28"
    >
      <h2 id="testimonials-heading" className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        {testimonials.heading}
      </h2>
      {/* PLACEHOLDER note: delete placeholderNote from the dictionaries when quotes are real */}
      <p className="mt-3 inline-block rounded-md bg-teal-soft px-3 py-1 text-sm text-teal-dark">
        {testimonials.placeholderNote}
      </p>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.items.map((item) => (
          <li key={item.quote} className="flex flex-col rounded-[1.5rem] border border-line bg-white/60 p-7">
            <figure className="flex flex-1 flex-col">
              <span aria-hidden="true" className="font-serif text-5xl leading-none text-teal">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 font-serif text-xl leading-snug">{item.quote}</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="block font-semibold">{item.name}</span>
                <span className="text-muted">{item.role}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
