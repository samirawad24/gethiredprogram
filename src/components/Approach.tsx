import type { Dictionary } from "@/dictionaries";
import { approachIcons } from "./Icons";

// What actually sets this coaching apart: a deliberately short client list,
// sessions built around one person, and no geography requirement.
export default function Approach({ dict }: { dict: Dictionary }) {
  const { approach } = dict;

  return (
    <section id="approach" aria-labelledby="approach-heading" className="section section--wash">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{approach.eyebrow}</p>
          <h2 id="approach-heading" className="display mt-3 text-4xl sm:text-5xl">
            {approach.heading}
          </h2>
          <span aria-hidden="true" className="rule mt-5" />
          <p className="lead mt-5 text-lg">{approach.intro}</p>
        </div>

        <ul className="card-row mt-12 grid gap-5 md:grid-cols-3">
          {approach.items.map((item) => {
            const Icon = approachIcons[item.icon];
            return (
              <li key={item.title} className="card">
                <span className="icon-badge">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="display mt-5 text-xl">{item.title}</h3>
                <p className="lead mt-2 text-[0.95rem]">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
