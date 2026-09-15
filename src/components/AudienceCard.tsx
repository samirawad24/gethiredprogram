import Button from "./Button";

type Props = {
  id: string;
  label: string;
  headline: string;
  benefits: string[];
  cta: string;
  tone: "light" | "dark";
};

export default function AudienceCard({ id, label, headline, benefits, cta, tone }: Props) {
  const dark = tone === "dark";

  return (
    <article
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`flex flex-col rounded-[2rem] p-8 sm:p-10 ${
        dark ? "bg-teal text-cream" : "border border-line bg-white/60 text-ink"
      }`}
    >
      <p className={`text-sm font-semibold uppercase tracking-[0.14em] ${dark ? "text-teal-soft" : "text-teal"}`}>
        {label}
      </p>
      <h3 id={`${id}-heading`} className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
        {headline}
      </h3>
      <ul className="mt-8 flex-1 space-y-4">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3 text-lg leading-snug">
            <span
              aria-hidden="true"
              className={`mt-2 size-2.5 shrink-0 rounded-full ${dark ? "bg-teal-soft" : "bg-teal"}`}
            />
            {benefit}
          </li>
        ))}
      </ul>
      <Button href="#booking" variant={dark ? "inverse" : "primary"} className="mt-10 self-start">
        {cta}
      </Button>
    </article>
  );
}
