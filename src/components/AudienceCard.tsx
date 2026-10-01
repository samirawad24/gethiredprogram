import ArrowLink from "./ArrowLink";

type Props = {
  id: string;
  label: string;
  headline: string;
  benefits: string[];
  cta: string;
  ctaHref: string;
};

export default function AudienceCard({ id, label, headline, benefits, cta, ctaHref }: Props) {
  return (
    <article id={id} aria-labelledby={`${id}-heading`} className="flex flex-col">
      <p className="eyebrow">{label}</p>
      <h3 id={`${id}-heading`} className="serif h-card" style={{ marginTop: "calc(14 * var(--u))" }}>
        {headline}
      </h3>
      <ul className="tick-list text-body flex-1 space-y-3" style={{ marginTop: "calc(22 * var(--u))" }}>
        {benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      <ArrowLink href={ctaHref} className="mt-[calc(26*var(--u))] self-start">
        {cta}
      </ArrowLink>
    </article>
  );
}
