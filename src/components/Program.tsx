import type { Dictionary } from "@/dictionaries";
import ProgramStep from "./ProgramStep";

export default function Program({ dict }: { dict: Dictionary }) {
  const { program } = dict;

  return (
    <section id="program" aria-labelledby="program-heading" className="section section--alt">
      <div className="shell">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">{program.eyebrow}</p>
          <h2 id="program-heading" className="display display--section mt-3">
            {program.heading}
          </h2>
          <span aria-hidden="true" className="rule mt-5" />
          <p className="lead mt-5 text-lg">{program.intro}</p>
        </div>

        <ol className="mt-14 grid gap-x-10 md:grid-cols-2" data-reveal-stagger>
          {program.steps.map((step, index) => (
            <ProgramStep
              key={step.title}
              number={index + 1}
              label={program.stepLabel}
              title={step.title}
              text={step.text}
              last={index === program.steps.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
