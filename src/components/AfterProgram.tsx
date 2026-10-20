import type { Dictionary } from "@/dictionaries";
import SectionHead from "./SectionHead";

// After the eight sessions: Ana stays in touch at no extra cost.
export default function AfterProgram({ dict }: { dict: Dictionary }) {
  const { afterProgram } = dict;

  return (
    <section aria-labelledby="after-heading" className="shell">
      <hr className="hairline" />
      <div className="section">
        <SectionHead id="after-heading" heading={afterProgram.heading} intro={afterProgram.text}>
          <p className="text-body step__leave" style={{ marginTop: "calc(16 * var(--u))" }}>
            <strong>{afterProgram.closing}</strong>
          </p>
        </SectionHead>
      </div>
    </section>
  );
}
