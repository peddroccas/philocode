"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";

/**
 * Fundo do hero: grade de projeto (blueprint) com as guias de construção da âncora.
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
      <div className="blueprint-grid" />
      <div className="blueprint-spot" />
      <svg className="blueprint-guides" viewBox="0 0 600 600" fill="none">
        <circle cx="300" cy="300" r="270" pathLength={1} />
        <circle cx="300" cy="330" r="175" pathLength={1} />
        <circle className="blueprint-orbit" cx="300" cy="300" r="225" />
        {["M300 0v600", "M0 300h600", "M110 0v600", "M490 0v600", "M0 170h600", "M0 470h600"].map((d, i) => (
          <path key={d} d={d} pathLength={1} style={{ animationDelay: `${300 + i * 90}ms` }} />
        ))}
      </svg>
    </div>
  );
}
