import Button from "./Button";

type Props = {
  id: string;
  label: string;
  headline: string;
  benefits: string[];
  cta: string;
  ctaHref: string;
  tone: "light" | "dark";
};

export default function AudienceCard({ id, label, headline, benefits, cta, ctaHref, tone }: Props) {
  const dark = tone === "dark";

  return (
    <article
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`card flex flex-col p-8 sm:p-10 ${dark ? "on-dark bg-navy" : ""}`}
    >
      <p className="eyebrow">{label}</p>
      <h3 id={`${id}-heading`} className="display display--band mt-4">
        {headline}
      </h3>
      <ul className="mt-8 flex-1 space-y-4">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3 leading-snug">
            <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-gold" />
            {benefit}
          </li>
        ))}
      </ul>
      <Button href={ctaHref} className="mt-10 self-start">
        {cta}
      </Button>
    </article>
  );
}
