type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...stroke}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...stroke}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...stroke}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8.5 13.2 10.8 15.5 12 13.2 13.2 12 15.5 10.8 13.2 8.5 12 10.8 10.8Z" />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...stroke}>
      <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />
    </svg>
  );
}

export function DiamondIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...stroke}>
      <path d="M6 4h12l3 5-9 11L3 9l3-5Z" />
      <path d="M3 9h18M9 4l3 16 3-16" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...stroke}>
      <path d="M20 12a8 8 0 0 1-11.6 7.14L4 20l.9-4.1A8 8 0 1 1 20 12Z" />
      <path d="M8.5 11h7M8.5 14h4" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...stroke}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...stroke}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} {...stroke}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/** Degraus em pixel da base da âncora — motivo gráfico da marca. */
export function PixelSteps({ className, ...rest }: IconProps & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 96 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      {...rest}
    >
      <path d="M2 2v8h12v6h12v6h44v-6h12v-6h12V2" strokeLinejoin="miter" pathLength={1} />
    </svg>
  );
}
