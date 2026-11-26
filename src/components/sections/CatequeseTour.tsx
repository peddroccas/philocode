"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { catequese } from "@/content/site";

/**
 * Pinned: a tela real fica fixa à esquerda enquanto os três painéis passam à direita; cada painel troca a tela.
 * Sem JS, ou abaixo de 64rem, cada painel mostra a própria tela logo acima do texto.
 */
export function CatequeseTour() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const panels = root.current?.querySelectorAll<HTMLElement>("[data-panel]");
    if (!panels?.length || !("IntersectionObserver" in window)) return;
    setReady(true);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.panel));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={root} data-ready={ready ? "" : undefined} className="tour mt-[var(--space-2xl)] grid gap-16 lg:grid-cols-12 lg:gap-8">
      <div className="hidden lg:col-span-7 lg:block">
        <div className="sticky top-28">
          <div data-kind="product" className="relative aspect-16/10 overflow-hidden rounded-[var(--radius-frame)] border border-line bg-surface shadow-frame">
            {catequese.screens.map((screen, i) => (
              <Image
                key={screen.image}
                src={screen.image}
                alt={i === active ? screen.alt : ""}
                aria-hidden={i === active ? undefined : true}
                data-active={i === active ? "" : undefined}
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="tour-shot object-cover object-left-top"
              />
            ))}
          </div>
          <p className="mt-3 text-sm text-muted">{catequese.domain}, com dados fictícios de demonstração.</p>
        </div>
      </div>

      <ol className="grid gap-16 lg:col-span-4 lg:col-start-9 lg:gap-0">
        {catequese.screens.map((screen, i) => (
          <li key={screen.title} data-panel={i} className="lg:flex lg:min-h-[72svh] lg:flex-col lg:justify-center">
            <div data-kind="product" className="relative mb-8 aspect-16/10 overflow-hidden rounded-[var(--radius-frame)] border border-line bg-surface lg:hidden">
              <Image src={screen.image} alt={screen.alt} fill sizes="100vw" className="object-cover object-left-top" />
            </div>
            <h3 className="text-[1.625rem] leading-tight text-ink">{screen.title}</h3>
            <p className="mt-4 text-lead text-muted">{screen.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
