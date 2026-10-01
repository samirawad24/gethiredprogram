import type { Dictionary } from "@/dictionaries";

// Confidence today, interviews tomorrow, a career you'll love: three short
// serif lines on the warm gray band.
export default function ValueBand({ dict }: { dict: Dictionary }) {
  return (
    <section className="band">
      <ul className="shell columns text-center" style={{ paddingBlock: "calc(44 * var(--u))" }} data-reveal-stagger>
        {dict.values.items.map((item) => (
          <li key={item} className="serif h-card !px-4">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
