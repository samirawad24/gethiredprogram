import type { Dictionary } from "@/dictionaries";
import SectionHead from "./SectionHead";

// The four services in full, split by hairlines like "How can I help?".
export default function Services({ dict }: { dict: Dictionary }) {
  const { services } = dict;

  return (
    <section id="services" aria-labelledby="services-heading" className="shell">
      <hr className="hairline" />
      <div className="section">
        <SectionHead id="services-heading" heading={services.heading} intro={services.intro} />
        <ul
          className="columns columns--2x2"
          style={{ marginTop: "calc(44 * var(--u))" }}
          data-reveal-stagger
        >
          {services.items.map((item) => (
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
