import type { CSSProperties } from "react";

/**
 * Animação de entrada (CSS em globals.css + RevealObserver), usada só nas imagens de trabalho:
 * - frame / frame-left: capturas de tela que sobem levemente ao aparecer
 * - fade: etiqueta do hero
 * Textos não animam.
 */
export type RevealVariant = "frame" | "frame-left" | "fade";

export function reveal(variant: RevealVariant, index = 0) {
  return {
    "data-reveal": variant,
    style: { "--reveal-i": index } as CSSProperties,
  };
}
