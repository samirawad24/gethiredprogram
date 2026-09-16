type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

// Line icons for the service tiles, matching the four icons on the boards.
export function ResumeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M4.5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2.8 9.2h3.4V21H2.8zM9.1 9.2h3.3v1.6a3.7 3.7 0 0 1 3.3-1.8c2.5 0 4.3 1.6 4.3 4.9V21h-3.4v-6.5c0-1.6-.6-2.6-2-2.6-1.1 0-1.8.7-2.1 1.5-.1.2-.1.6-.1.9V21H9.1z" />
    </svg>
  );
}

export function InterviewIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.4A8.4 8.4 0 1 1 21 11.5Z" />
      <path d="M8.5 11h.01M12 11h.01M15.5 11h.01" />
    </svg>
  );
}

export function StrategyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.9" />
    </svg>
  );
}

export const serviceIcons = {
  resume: ResumeIcon,
  linkedin: LinkedInIcon,
  interview: InterviewIcon,
  strategy: StrategyIcon,
} as const;

export type ServiceIconName = keyof typeof serviceIcons;
