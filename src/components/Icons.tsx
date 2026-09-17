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

export function SmallGroupIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M6.2 19.5a5.8 5.8 0 0 1 11.6 0" />
      <path d="M4.5 11.2a2.4 2.4 0 1 0-.9-4.3M19.5 11.2a2.4 2.4 0 1 0 .9-4.3" opacity="0.5" />
    </svg>
  );
}

export function TailoredIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 7h14M5 12h14M5 17h14" />
      <circle cx="9" cy="7" r="2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="8" cy="17" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
    </svg>
  );
}

export const approachIcons = {
  smallGroup: SmallGroupIcon,
  tailored: TailoredIcon,
  globe: GlobeIcon,
} as const;

export type ApproachIconName = keyof typeof approachIcons;

export const serviceIcons = {
  resume: ResumeIcon,
  linkedin: LinkedInIcon,
  interview: InterviewIcon,
  strategy: StrategyIcon,
} as const;

export type ServiceIconName = keyof typeof serviceIcons;
