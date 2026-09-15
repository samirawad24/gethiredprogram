import type { Dictionary } from "@/dictionaries";
import ProgramStep from "./ProgramStep";

export default function Program({ dict }: { dict: Dictionary }) {
  const { program } = dict;

  return (
    <section id="program" aria-labelledby="program-heading" className="bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <h2 id="program-heading" className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            {program.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{program.intro}</p>
        </div>

        <ol className="mt-14 grid gap-x-10 md:grid-cols-2">
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
