import type { Dictionary } from "@/dictionaries";
import { CheckIcon, InterviewIcon, StrategyIcon } from "./Icons";

const icons = [CheckIcon, InterviewIcon, StrategyIcon];

// Short navy band between sections: confidence today, interviews tomorrow,
// a career you'll love.
export default function ValueBand({ dict }: { dict: Dictionary }) {
  return (
    <section className="on-dark section section--navy">
      <div className="shell card-row grid gap-8 text-center sm:grid-cols-3" data-reveal-stagger>
        {dict.values.items.map((item, index) => {
          const Icon = icons[index] ?? CheckIcon;
          return (
            <div key={item} className="card flex flex-col items-center">
              <span className="icon-badge">
                <Icon className="h-6 w-6" />
              </span>
              <p className="display display--value mt-4">{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
