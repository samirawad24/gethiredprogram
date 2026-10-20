type Props = { number: number; label: string; title: string; text: string; leaveLabel: string; leave: string };

// One session: number, title and what you leave with, over a hairline.
export default function ProgramStep({ number, label, title, text, leaveLabel, leave }: Props) {
  return (
    <li className="flex gap-5 border-t border-line py-[calc(24*var(--u))]">
      <span className="step__number pt-[0.3em]" aria-hidden="true">
        {String(number).padStart(2, "0")}
      </span>
      <div>
        <p className="sr-only">
          {label} {number}
        </p>
        <h3 className="serif step__title">{title}</h3>
        <p className="text-body" style={{ marginTop: "calc(8 * var(--u))" }}>
          {text}
        </p>
        <p className="text-body step__leave">
          <strong>{leaveLabel}</strong> {leave}
        </p>
      </div>
    </li>
  );
}
