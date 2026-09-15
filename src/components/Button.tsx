type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  className?: string;
};

const styles = {
  primary: "bg-teal text-cream hover:bg-teal-dark",
  inverse: "bg-cream text-teal-dark hover:bg-white",
  secondary: "border border-ink/20 text-ink hover:border-teal hover:text-teal",
};

// In-page anchor styled as a button. Smooth scrolling comes from globals.css.
export default function Button({ href, children, variant = "primary", className = "" }: Props) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
