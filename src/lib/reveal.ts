import type { CSSProperties } from "react";

/**
 * Animações de entrada das seções (CSS em globals.css + RevealObserver).
 * - up: sobe saindo de um leve desfoque
 * - mask: revela de cima para baixo (títulos)
 * - frame / frame-left: capturas de tela com perspectiva
 * - pop: pequenos marcadores
 * - line: traço que cresce da esquerda
 * - draw: SVG que se desenha (degraus da âncora)
 */
export type RevealVariant = "up" | "mask" | "frame" | "frame-left" | "pop" | "line" | "draw" | "fade";

export function reveal(variant: RevealVariant = "up", index = 0) {
  return {
    "data-reveal": variant,
    style: { "--reveal-i": index } as CSSProperties,
  };
}
