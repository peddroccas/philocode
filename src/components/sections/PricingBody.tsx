"use client";

import { useState } from "react";
import clsx from "clsx";
import { pricing, pricingMessage } from "@/content/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { PixelSteps } from "@/components/ui/Icons";

const brl = (value: number) => value.toLocaleString("pt-BR");
const pagesLabel = (pages: number) => (pages === 1 ? "uma página" : `${pages} páginas`);

function totals(pages: number) {
  const { launch } = pricing;
  return {
    regular: pricing.firstPageValue + (pages - 1) * pricing.extraPageValue,
    launch: launch.firstPageValue + (pages - 1) * launch.extraPageValue,
  };
}

function Price({ value, size = "lg", tone = "light" }: { value: string; size?: "lg" | "md"; tone?: "light" | "dark" }) {
  return (
    <span className={clsx("flex items-baseline gap-1.5", tone === "light" ? "text-ink" : "text-snow")}>
      <span className="text-base font-medium">R$</span>
      {/* key força a animação curta a cada novo valor, para mostrar que o preço mudou */}
      <span
        key={value}
        className={clsx(
          "font-semibold tracking-tight tabular-nums motion-safe:animate-[price-pop_.45s_ease-out]",
          size === "lg" ? "text-5xl" : "text-4xl",
        )}
      >
        {value}
      </span>
    </span>
  );
}

/** Botões de 1 a 6 páginas. Aparece na faixa de lançamento e na calculadora, sempre sincronizados. */
function PageSelector({
  pages,
  onChange,
  tone,
  label,
}: {
  pages: number;
  onChange: (pages: number) => void;
  tone: "light" | "dark";
  label: string;
}) {
  return (
    <fieldset>
      <legend className={clsx("font-mono text-xs tracking-[0.08em] uppercase", tone === "light" ? "text-muted" : "text-mist")}>
        {label}
      </legend>
      <div className="mt-3 grid grid-cols-6 gap-2">
        {Array.from({ length: pricing.maxPages }, (_, index) => index + 1).map((value) => {
          const active = pages === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(value)}
              className={clsx(
                "min-h-11 rounded-xl border text-base font-semibold transition-colors",
                tone === "light" &&
                  (active ? "border-ink bg-ink text-canvas" : "border-line bg-surface text-ink hover:border-ink/40"),
                tone === "dark" &&
                  (active
                    ? "border-brand bg-brand text-night"
                    : "border-white/15 bg-white/5 text-snow hover:border-white/40"),
              )}
            >
              {value}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function LaunchOffer({ pages, onChange }: { pages: number; onChange: (pages: number) => void }) {
  const { launch } = pricing;
  if (!launch.active || launch.spotsLeft <= 0) return null;
  const total = totals(pages);

  return (
    <article
      id="lancamento"
      aria-labelledby="oferta-lancamento"
      className="relative mt-8 scroll-mt-28 overflow-hidden rounded-card md:mt-12 bg-linear-to-br from-graphite to-night p-6 text-snow shadow-frame sm:p-9"
    >
      <PixelSteps className="absolute top-0 right-10 h-5 w-24 -translate-y-px text-brand" />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
        <div>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-[0.08em] text-mist uppercase">
            <span className="flex items-center gap-3">
              <span aria-hidden className="h-0.75 w-5 rounded-full bg-brand" />
              {launch.eyebrow}
            </span>
            <span className="flex items-center gap-2">
              <span aria-hidden className="flex gap-1">
                {Array.from({ length: launch.spotsTotal }, (_, index) => (
                  <span
                    key={index}
                    className={clsx("size-2.5 rounded-[2px]", index < launch.spotsLeft ? "bg-brand" : "bg-white/15")}
                  />
                ))}
              </span>
              {launch.spotsLeft} de {launch.spotsTotal} vagas
            </span>
          </p>
          <h3 id="oferta-lancamento" className="mt-4 text-2xl leading-tight font-semibold tracking-tight text-balance">
            {launch.title}
          </h3>
          <p className="mt-2 text-mist">
            R$ {launch.firstPage} a primeira página e R$ {launch.extraPage} cada página a mais.
          </p>
        </div>

        <div className="grid gap-6 lg:border-l lg:border-white/10 lg:pl-12">
          <PageSelector pages={pages} onChange={onChange} tone="dark" label="Quantas páginas?" />
          <div aria-live="polite">
            <p className="text-sm text-mist">Seu site de {pagesLabel(pages)} com desconto</p>
            <div className="mt-1">
              <Price value={brl(total.launch)} tone="dark" />
            </div>
            <p className="mt-1 text-sm text-mist">
              Normal: R$ {brl(total.regular)}
            </p>
          </div>
          <CtaButton location="lancamento" message={launch.message} className="w-full sm:w-auto sm:justify-self-start" />
        </div>
      </div>
    </article>
  );
}

/** Faixa de lançamento, preço por página e calculadora, com o número de páginas compartilhado. */
export function PricingBody() {
  const [pages, setPages] = useState(1);
  const total = totals(pages);
  const showLaunch = pricing.launch.active && pricing.launch.spotsLeft > 0;

  return (
    <>
      <LaunchOffer pages={pages} onChange={setPages} />

      <article
        aria-labelledby="preco-site"
        className="mt-5 grid gap-8 rounded-card border border-line bg-surface p-6 shadow-card sm:p-9 lg:mt-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12"
      >
        <div>
          <h3 id="preco-site" className="text-2xl font-semibold tracking-tight text-ink">
            Site sob medida
          </h3>
          <dl className="mt-6 grid grid-cols-2 gap-6">
            <div>
              <dt className="text-sm text-muted">Primeira página</dt>
              <dd className="mt-1">
                <Price value={pricing.firstPage} />
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Cada página a mais</dt>
              <dd className="mt-1">
                <Price value={pricing.extraPage} />
              </dd>
            </div>
          </dl>
          <ul className="mt-8 grid gap-2.5 border-t border-line pt-6">
            {pricing.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink">
                <span aria-hidden className="mt-2 size-2 shrink-0 rounded-[2px] bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="self-start rounded-2xl bg-canvas p-5 sm:p-6">
          <PageSelector pages={pages} onChange={setPages} tone="light" label="Quantas páginas?" />

          <div className="mt-6 border-t border-line pt-5" aria-live="polite">
            <p className="text-sm text-muted">Total para {pagesLabel(pages)}</p>
            <div className="mt-1">
              <Price value={brl(total.regular)} size="md" />
            </div>
            {showLaunch && (
              <p className="mt-2 text-sm text-ink">
                Com o desconto de lançamento: <strong className="font-semibold">R$ {brl(total.launch)}</strong>
              </p>
            )}
          </div>

          <CtaButton location={`calculadora-${pages}`} message={pricingMessage(pages)} className="mt-6 w-full" />
          <p className="mt-3 text-sm text-muted">Precisa de mais páginas? Fale com a gente.</p>
        </div>
      </article>
    </>
  );
}
