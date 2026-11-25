"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";

/**
 * Fundo do hero: grade de projeto (blueprint) com linhas principais a cada 4 células e marcas "+" nas interseções.
 * Com mouse, a grade acende sob o cursor; em telas de toque, o brilho passeia sozinho (CSS).
 * Com "reduzir movimento", fica tudo parado. As regras visuais estão em globals.css (.blueprint).
 */
export function BlueprintGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;

    let frame = 0;
    function onMove(event: PointerEvent) {
      const rect = host!.getBoundingClientRect();
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el!.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        el!.style.setProperty("--my", `${event.clientY - rect.top}px`);
        el!.dataset.active = "";
      });
    }
    function onLeave() {
      delete el!.dataset.active;
    }
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className={clsx("blueprint", className)}>
      <div className="blueprint-glow" />
      <div className="blueprint-grid" />
      <div className="blueprint-marks" />
      <div className="blueprint-spot" />
    </div>
  );
}
