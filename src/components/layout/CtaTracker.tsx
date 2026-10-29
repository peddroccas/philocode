"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/** Tracks intent, not completed sales. Custom events require Vercel Pro or Enterprise. */
export function CtaTracker() {
  useEffect(() => {
    function context() {
      const page = window.location.pathname;
      return { page, service: page === "/shopify" ? "shopify" : page === "/criacao-de-sites" ? "sites" : "home" };
    }
    function onClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[data-cta]") : null;
      if (!target?.dataset.cta) return;
      const channel = target.hostname === "wa.me" ? "whatsapp" : "navigation";
      track("cta_click", { location: target.dataset.cta, ...context(), channel });
    }
    function onToggle(event: Event) {
      const target = event.target;
      if (!(target instanceof HTMLDetailsElement) || !target.open || !target.dataset.faq) return;
      track("faq_open", { question: target.dataset.faq, ...context() });
    }
    document.addEventListener("click", onClick);
    document.addEventListener("toggle", onToggle, true);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("toggle", onToggle, true);
    };
  }, []);
  return null;
}
