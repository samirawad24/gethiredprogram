type Props = {
  number: number;
  label: string;
  title: string;
  text: string;
  last: boolean;
};

// One stop on the journey: numbered circle with a connecting line to the next step.
export default function ProgramStep({ number, label, title, text, last }: Props) {
  return (
    <li className="relative flex gap-5 pb-10">
      {!last && (
        <span aria-hidden="true" className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-teal/25" />
      )}
      <span
        aria-hidden="true"
        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal font-serif text-xl font-semibold text-cream"
      >
        {number}
      </span>
      <div className="pt-1">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
          {label} {number}
        </p>
        <h3 className="mt-1 font-serif text-2xl font-semibold leading-snug">{title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{text}</p>
      </div>
    </li>
  );
}
