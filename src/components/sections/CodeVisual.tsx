"use client";

import { useEffect, useRef, useState } from "react";

type Tab = { file: string; lines: string[] };

const TABS: Tab[] = [
  { file: "sites.tsx", lines: ["const site = {", '  negocio: "o seu",', "  celular: true,", '  contato: "whatsapp",', "};"] },
  { file: "loja.liquid", lines: ["{% for item in collection.products %}", "  <h2>{{ item.title }}</h2>", "  {{ item.price | money }}", "{% endfor %}"] },
  { file: "catequese.ts", lines: ["const turma = await turmas.criar({", '  etapa: "Eucaristia",', "  ano: 2026,", "});", "await chamada.registrar(turma);"] },
];

const TOTALS = TABS.map((tab) => tab.lines.reduce((sum, line) => sum + line.length, 0));
const TICK_MS = 26;
const HOLD_TICKS = 90;
const TOKEN = /("[^"]*"|\b(?:const|await|true|for|in|endfor)\b|\b\d+\b)/g;

/** Divide a linha em trechos para dar cor a textos, palavras-chave e números. */
function tokenize(line: string) {
  return line.split(TOKEN).filter(Boolean).map((text) => {
    const tone = text.startsWith('"') ? "text-mist" : /^(const|await|true|for|in|endfor|\d+)$/.test(text) ? "font-semibold text-white" : "text-snow/80";
    return { text, tone };
  });
}

/** Mostra só os primeiros `count` caracteres da linha, mantendo as cores. */
function visibleSegments(line: string, count: number) {
  let left = count;
  const out: { text: string; tone: string }[] = [];
  for (const segment of tokenize(line)) {
    if (left <= 0) break;
    out.push({ text: segment.text.slice(0, left), tone: segment.tone });
    left -= segment.text.length;
  }
  return out;
}

/**
 * Janela de editor de código decorativa: alterna entre os produtos e "digita" algumas linhas.
 * Pausa fora da tela e com a aba oculta; com "reduzir movimento", fica parada na primeira aba.
 */
export function CodeVisual() {
  const rootRef = useRef<HTMLDivElement>(null);
  // Começa completo na primeira aba (sem vazio antes da hidratação) e só depois passa para a próxima.
  const [state, setState] = useState({ tab: 0, count: TOTALS[0] });
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let inView = true;
    const update = () => setRunning(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    observer.observe(root);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setState((prev) => {
        if (prev.count < TOTALS[prev.tab] + HOLD_TICKS) return { tab: prev.tab, count: prev.count + 1 };
        return { tab: (prev.tab + 1) % TABS.length, count: 0 };
      });
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [running]);

  const tab = TABS[state.tab];
  const done = state.count >= TOTALS[state.tab];
  // Início de cada linha na contagem de caracteres digitados.
  const starts = tab.lines.map((_, i) => tab.lines.slice(0, i).reduce((sum, l) => sum + l.length, 0));

  return (
    <div ref={rootRef} aria-hidden className="overflow-hidden rounded-card border border-white/15 bg-[#121214] text-snow shadow-frame">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <span className="flex gap-1.5"><span className="size-2.5 rounded-full bg-white/20" /><span className="size-2.5 rounded-full bg-white/20" /><span className="size-2.5 rounded-full bg-white/20" /></span>
        <span className="font-mono text-xs text-mist">philocode/</span>
      </div>
      <div className="flex border-b border-white/10 font-mono text-xs">
        {TABS.map((item, index) => (
          <span key={item.file} className={`border-r border-white/10 px-4 py-2.5 ${index === state.tab ? "bg-white/[0.06] text-snow shadow-[inset_0_-2px_0_var(--color-snow)]" : "text-mist"}`}>{item.file}</span>
        ))}
      </div>
      <div className="h-44 overflow-hidden px-4 py-4 font-mono text-[13px] leading-6 sm:px-5">
        {tab.lines.map((line, index) => {
          const remaining = state.count - starts[index];
          const shown = Math.max(0, Math.min(line.length, remaining));
          const typing = !done && shown > 0 && shown < line.length;
          return (
            <div key={index} className="flex min-h-6 gap-4 whitespace-pre">
              <span className="w-3 shrink-0 text-right text-white/30 select-none">{index + 1}</span>
              <span>
                {visibleSegments(line, shown).map((segment, i) => <span key={i} className={segment.tone}>{segment.text}</span>)}
                {typing || (!done && shown === line.length && remaining === line.length) ? <span className="ml-px inline-block h-4 w-[7px] translate-y-0.5 bg-snow motion-safe:animate-pulse" /> : null}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 font-mono text-xs sm:px-5">
        <span className={done ? "text-snow" : "text-mist"}>{done ? "✓ build ok · publicado" : "compilando…"}</span>
        <span className="text-mist">philocode</span>
      </div>
    </div>
  );
}
