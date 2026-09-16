import type { Dictionary } from "@/dictionaries";
import AudienceCard from "./AudienceCard";

export default function Audiences({ dict }: { dict: Dictionary }) {
  const { audiences } = dict;

  return (
    <section id="who" aria-labelledby="who-heading" className="section">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{audiences.eyebrow}</p>
          <h2 id="who-heading" className="display mt-3 text-4xl sm:text-5xl">
            {audiences.heading}
          </h2>
          <span aria-hidden="true" className="rule mt-5" />
          <p className="lead mt-5 text-lg">{audiences.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          <AudienceCard id="students" {...audiences.students} tone="light" />
          <AudienceCard id="career-changers" {...audiences.changers} tone="dark" />
        </div>
      </div>
    </section>
  );
}
