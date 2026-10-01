import type { Dictionary } from "@/dictionaries";
import SectionHead from "./SectionHead";

// A deliberately short client list, sessions built around one person, and no
// geography requirement.
export default function Approach({ dict }: { dict: Dictionary }) {
  const { approach } = dict;

  return (
    <section id="approach" aria-labelledby="approach-heading" className="shell">
      <hr className="hairline" />
      <div className="section">
        <SectionHead id="approach-heading" eyebrow={approach.eyebrow} heading={approach.heading} intro={approach.intro} />
        <ul className="columns" style={{ marginTop: "calc(44 * var(--u))" }} data-reveal-stagger>
          {approach.items.map((item) => (
            <li key={item.title}>
              <h3 className="serif h-card">{item.title}</h3>
              <p className="text-body" style={{ marginTop: "calc(12 * var(--u))" }}>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
