"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Envia um evento "cta_click" ao Vercel Analytics em cada clique num elemento com data-cta,
 * com o local do clique (hero, precos, lancamento…).
 * Eventos personalizados exigem plano pago na Vercel; no plano gratuito são ignorados.
 */
export function CtaTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-cta]") : null;
      if (!target?.dataset.cta) return;
      track("cta_click", { location: target.dataset.cta });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
