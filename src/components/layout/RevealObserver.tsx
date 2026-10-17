"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]:not([data-revealed])";

/**
 * Marca cada [data-reveal] como revelado quando entra na tela (uma vez só).
 * Também acompanha elementos inseridos ou recriados depois do carregamento.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;

    if (!("IntersectionObserver" in window)) {
      root.classList.remove("reveal-ready");
      root.dataset.revealBound = "true";
      return;
    }

    const observed = new WeakSet<Element>();
    const intersection = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          intersection.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    function observeAll() {
      document.querySelectorAll(SELECTOR).forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);
        intersection.observe(element);
      });
    }

    // Começa depois do primeiro quadro, com a hidratação já concluída.
    // O que já está na primeira tela entra em sequência imediatamente.
    const frame = requestAnimationFrame(() => {
      document.querySelectorAll(SELECTOR).forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          element.setAttribute("data-revealed", "");
        }
      });
      observeAll();
      root.dataset.revealBound = "true";
    });

    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      intersection.disconnect();
    };
  }, []);

  return null;
}

/**
 * Executado antes da primeira pintura: ativa os estados iniciais das animações.
 * Se o JavaScript não carregar em 3,5 s, o conteúdo volta a aparecer sem animação.
 */
export const revealBootScript = `(function(){var d=document.documentElement;d.classList.add("reveal-ready");setTimeout(function(){if(!d.dataset.revealBound){d.classList.remove("reveal-ready")}},3500)})();`;
