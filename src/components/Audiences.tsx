import type { Dictionary } from "@/dictionaries";
import AudienceCard from "./AudienceCard";

export default function Audiences({ dict }: { dict: Dictionary }) {
  const { audiences } = dict;

  return (
    <section id="who" aria-labelledby="who-heading" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <h2 id="who-heading" className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        {audiences.heading}
      </h2>
      <p className="mt-4 text-lg text-muted">{audiences.intro}</p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
        <AudienceCard id="students" {...audiences.students} tone="light" />
        <AudienceCard id="career-changers" {...audiences.changers} tone="dark" />
      </div>
    </section>
  );
}
