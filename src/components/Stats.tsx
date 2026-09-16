import type { Dictionary } from "@/dictionaries";

// The band of numbers under the hero, as on all three design boards.
export default function Stats({ dict }: { dict: Dictionary }) {
  const { stats } = dict;

  return (
    <section className="border-y border-line bg-white">
      <div className="shell py-8 md:py-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {stats.items.map((item) => (
            <div key={item.label} className="text-center">
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="display block text-4xl sm:text-5xl">{item.value}</span>
                <span className="mt-2 block text-sm text-muted">{item.label}</span>
              </dd>
            </div>
          ))}
        </dl>
        {/* PLACEHOLDER note: delete stats.placeholderNote from the dictionaries
            once every number above is real. */}
        <p className="mt-7 text-center text-xs text-muted">{stats.placeholderNote}</p>
      </div>
    </section>
  );
}
