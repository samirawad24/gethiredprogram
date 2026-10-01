type Props = { id: string; eyebrow?: string; heading: string; intro?: string; children?: React.ReactNode };

// Eyebrow, serif heading and an optional intro line, left aligned.
export default function SectionHead({ id, eyebrow, heading, intro, children }: Props) {
  return (
    <div className="section-head" data-reveal>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="serif h-section" style={{ marginTop: eyebrow ? "calc(14 * var(--u))" : undefined }}>
        {heading}
      </h2>
      {intro && (
        <p className="text-body" style={{ marginTop: "calc(16 * var(--u))" }}>
          {intro}
        </p>
      )}
      {children}
    </div>
  );
}
