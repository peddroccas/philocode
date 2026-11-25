import { ANCHOR_PATH } from "@/components/ui/Logo";

/**
 * Símbolo grande do hero: só o contorno da âncora sobre a grade.
 * O traço se desenha ao carregar e depois entra um preenchimento muito leve (CSS .hero-symbol em globals.css).
 */
export function HeroSymbol() {
  return (
    <div aria-hidden className="hero-symbol pointer-events-none relative hidden justify-self-center lg:block">
      <svg viewBox="8 0 104 116" className="h-[min(62vh,520px)] w-auto overflow-visible" fill="none">
        <path className="hero-symbol-fill" d={ANCHOR_PATH} />
        <path className="hero-symbol-line" d={ANCHOR_PATH} pathLength={1} />
      </svg>
    </div>
  );
}
