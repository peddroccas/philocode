import clsx from "clsx";

/** Geometria do símbolo (âncora com ponta de seta), viewBox 0 0 120 120. Ver Figma: Logo/Símbolo. */
export const ANCHOR_PATH =
  "M60 6 82 32H66V93.6L96 73.6V56h12v24L60 112 12 80V56h12v17.6L54 93.6V32H38Z";

export function AnchorSymbol({ className, title }: { className?: string; title?: string }) {
  return (
    <svg viewBox="12 4 96 110" className={className} fill="currentColor" role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <path d={ANCHOR_PATH} />
    </svg>
  );
}

/** Logo horizontal: símbolo + wordmark "philocode" em Sora. Herda a cor do texto. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <AnchorSymbol className="h-[1.15em] w-auto" />
      <span className="font-display leading-none font-semibold tracking-[-0.04em]">philocode</span>
    </span>
  );
}
