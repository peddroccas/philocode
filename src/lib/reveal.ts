import type { CSSProperties } from "react";

/**
 * Animação de entrada (CSS em globals.css + RevealObserver):
 * - frame / frame-left: capturas de tela que sobem levemente ao aparecer
 * - up: títulos de seção e cartões, em sequência pelo índice
 * - fade: só opacidade
 */
export type RevealVariant = "frame" | "frame-left" | "fade" | "up";

export function reveal(variant: RevealVariant, index = 0) {
  return {
    "data-reveal": variant,
    style: { "--reveal-i": index } as CSSProperties,
  };
}
