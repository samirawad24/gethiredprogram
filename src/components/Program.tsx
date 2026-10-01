import type { Dictionary } from "@/dictionaries";
import ProgramStep from "./ProgramStep";
import SectionHead from "./SectionHead";

export default function Program({ dict }: { dict: Dictionary }) {
  const { program } = dict;

  return (
    <section id="program" aria-labelledby="program-heading" className="shell">
      <hr className="hairline" />
      <div className="section">
        <SectionHead id="program-heading" eyebrow={program.eyebrow} heading={program.heading} intro={program.intro} />
        <ol
          className="grid gap-x-[calc(56*var(--u))] md:grid-cols-2"
          style={{ marginTop: "calc(36 * var(--u))" }}
          data-reveal-stagger
        >
          {program.steps.map((step, index) => (
            <ProgramStep
              key={step.title}
              number={index + 1}
              label={program.stepLabel}
              title={step.title}
              text={step.text}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
