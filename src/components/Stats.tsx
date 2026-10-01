import type { Dictionary } from "@/dictionaries";

// Four facts about the coaching, split by the same hairlines as the services.
export default function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section className="shell">
      <dl className="columns columns--4 section" style={{ "--cols": 4 } as React.CSSProperties} data-reveal-stagger>
        {dict.stats.items.map((item) => (
          <div key={item.label} className="flex flex-col-reverse justify-end">
            <dt className="text-small" style={{ marginTop: "calc(10 * var(--u))" }}>
              {item.label}
            </dt>
            <dd className="serif stat__value">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
