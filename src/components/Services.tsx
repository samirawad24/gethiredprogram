import type { Dictionary } from "@/dictionaries";
import Button from "./Button";
import { serviceIcons } from "./Icons";

type Props = { dict: Dictionary; moreHref?: string };

export default function Services({ dict, moreHref }: Props) {
  const { services } = dict;

  return (
    <section id="services" aria-labelledby="services-heading" className="section section--alt section--wash">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2 id="services-heading" className="display mt-3 text-4xl sm:text-5xl">
            {services.heading}
          </h2>
          <span aria-hidden="true" className="rule mt-5" />
          <p className="lead mt-5 text-lg">{services.intro}</p>
        </div>

        <ul className="card-row mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item) => {
            const Icon = serviceIcons[item.icon];
            return (
              <li key={item.title} className="card">
                <span className="icon-badge">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="lead mt-2 text-[0.95rem]">{item.text}</p>
              </li>
            );
          })}
        </ul>

        {moreHref && (
          <Button href={moreHref} variant="outline" className="mt-10">
            {services.allCta}
          </Button>
        )}
      </div>
    </section>
  );
}
