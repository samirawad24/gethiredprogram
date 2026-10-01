type Props = { eyebrow: string; heading: string; lead: string };

// Masthead for the pages below Home, set like the home hero's text column.
// Carries the page's one h1.
export default function PageHero({ eyebrow, heading, lead }: Props) {
  return (
    <section className="shell" style={{ paddingTop: "calc(56 * var(--u))", paddingBottom: "calc(60 * var(--u))" }}>
      <div className="max-w-[46rem]" data-reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="serif h-page" style={{ marginTop: "calc(17 * var(--u))" }}>
          {heading}
        </h1>
        <p className="text-lead" style={{ marginTop: "calc(22 * var(--u))" }}>
          {lead}
        </p>
      </div>
    </section>
  );
}
