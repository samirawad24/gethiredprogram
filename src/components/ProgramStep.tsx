type Props = {
  number: number;
  label: string;
  title: string;
  text: string;
  last: boolean;
};

// One stop on the journey: numbered marker with a line running to the next one.
export default function ProgramStep({ number, label, title, text, last }: Props) {
  return (
    <li className="relative flex gap-5 pb-10">
      {!last && (
        <span
          aria-hidden="true"
          className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-line"
        />
      )}
      <span aria-hidden="true" className="step__marker">
        {number}
      </span>
      <div className="pt-1">
        <p className="eyebrow">
          {label} {number}
        </p>
        <h3 className="display mt-1.5 text-2xl">{title}</h3>
        <p className="lead mt-2">{text}</p>
      </div>
    </li>
  );
}
