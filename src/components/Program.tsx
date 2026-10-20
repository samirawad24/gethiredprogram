import type { Dictionary } from "@/dictionaries";
import ProgramStep from "./ProgramStep";
import SectionHead from "./SectionHead";

export default function Program({ dict }: { dict: Dictionary }) {
  const { program } = dict;

  return (
    <section id="program" aria-labelledby="program-heading" className="shell">
      <hr className="hairline" />
      <div className="section">
        <SectionHead id="program-heading" eyebrow={program.eyebrow} heading={program.heading}>
          <h3 className="serif h-card" style={{ marginTop: "calc(24 * var(--u))" }}>
            {program.pace}
          </h3>
          <p className="text-body" style={{ marginTop: "calc(10 * var(--u))" }}>
            {program.intro}
          </p>
          <p className="text-body step__leave" style={{ marginTop: "calc(16 * var(--u))" }}>
            <strong>{program.tagline}</strong>
          </p>
        </SectionHead>
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
              leaveLabel={program.leaveLabel}
              leave={step.leave}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
