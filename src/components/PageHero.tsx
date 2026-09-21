import Backdrop from "./Backdrop";

type Props = { eyebrow: string; heading: string; lead: string };

// Compact masthead for the pages below Home. Carries the page's one h1.
export default function PageHero({ eyebrow, heading, lead }: Props) {
  return (
    <section className="has-backdrop section section--alt">
      <Backdrop scrim="light" />
      <div className="shell">
        <div className="max-w-3xl" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display display--page mt-3">{heading}</h1>
          <span aria-hidden="true" className="rule mt-6" />
          <p className="lead mt-6 text-lg sm:text-xl">{lead}</p>
        </div>
      </div>
    </section>
  );
}
