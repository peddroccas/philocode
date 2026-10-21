"use client";

import { useEffect, useRef } from "react";

const GAP = 22;
const REACH = 140;

/**
 * "Maré de pixels": grade de pontos que ondula devagar e acende em azul perto do cursor.
 * Pausa fora da tela e com a aba oculta; com "reduzir movimento", desenha um quadro parado.
 */
export function TideCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = host!.clientWidth;
      height = host!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw(0);
    }

    function draw(now: number) {
      const time = now / 1000;
      ctx!.clearRect(0, 0, width, height);
      for (let y = GAP / 2; y < height + GAP; y += GAP) {
        for (let x = GAP / 2; x < width; x += GAP) {
          const wave = Math.sin(x * 0.018 + time * 0.9) * Math.cos(y * 0.022 - time * 0.6);
          const yy = y + wave * 7;
          const near = Math.max(0, 1 - Math.hypot(x - mouse.x, yy - mouse.y) / REACH);
          const size = 1 + (wave + 1) * 0.55 + near * 2.2;
          const alpha = 0.14 + (wave + 1) * 0.16 + near * 0.6;
          ctx!.fillStyle =
            near > 0.05 ? `rgba(35,137,248,${Math.min(alpha + 0.2, 1)})` : `rgba(170,190,215,${alpha})`;
          ctx!.fillRect(x - size / 2, yy - size / 2, size, size);
        }
      }
    }

    function loop(now: number) {
      draw(now);
      frame = requestAnimationFrame(loop);
    }

    function start() {
      if (reduce || frame || !visible || document.hidden) return;
      frame = requestAnimationFrame(loop);
    }

    function stop() {
      cancelAnimationFrame(frame);
      frame = 0;
    }

    function onMove(event: PointerEvent) {
      const rect = host!.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    }

    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const viewObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    viewObserver.observe(host);

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    resize();
    start();

    return () => {
      stop();
      resizeObserver.disconnect();
      viewObserver.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
