import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { BlueprintGrid } from "./BlueprintGrid";
import { HeroSymbol } from "./HeroSymbol";
import { catequeseCtaLabel, whatsappMessages, type Emphasis, type Service } from "@/content/site";

/** Divide o título em palavras que sobem em sequência (CSS .word-rise; parado com "reduzir movimento"). */
function risingWords(title: Emphasis) {
  let index = 0;
  const words = (text: string | undefined) =>
    (text ?? "").split(/(\s+)/).map((part, i) =>
      part === "" ? null : /^\s+$/.test(part) ? part : (
        <span key={`${index}-${i}`} className="word-rise" style={{ "--w": index++ } as CSSProperties}>{part}</span>
      ),
    );
  return (
    <>
      {words(title.before)}
      {words(title.emphasis)}
      {words(title.after)}
    </>
  );
}

const enter = (delay: number) => ({ className: "hero-enter", style: { "--d": `${delay}ms` } as CSSProperties });

type Props = { title: Emphasis; subtitle: string; service?: Service; proof?: string[] };
export function Hero({ title, subtitle, service, proof }: Props) {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero-surface relative isolate scroll-mt-24 overflow-hidden">
      <BlueprintGrid className="absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-night/70 via-night/15 to-transparent" />
      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:py-28">
        <div>
          <h1 id="hero-title" className="text-[2.5rem] leading-[1.07] font-semibold tracking-tight text-balance text-snow sm:text-5xl lg:text-[3.6rem]">{risingWords(title)}</h1>
          <p {...enter(380)} className={`${enter(380).className} mt-6 max-w-xl text-lg leading-relaxed text-mist`}>{subtitle}</p>
          <div {...enter(480)} className={`${enter(480).className} mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5`}><CtaButton tone="dark" location={`${service ?? "home"}-hero`} message={whatsappMessages[service ?? "default"]} label={service === "catequese" ? catequeseCtaLabel : undefined} className="w-full sm:w-auto" /><a href={service ? "#valores" : "#produtos"} data-cta={`${service ?? "home"}-ver-valores`} className="inline-flex min-h-11 items-center gap-2 font-semibold text-snow underline decoration-white/30 underline-offset-4 hover:decoration-snow">{service ? "Ver serviços e valores" : "Conhecer produtos"}</a></div>
          {proof ? <ul {...enter(580)} className={`${enter(580).className} mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-mist`}>{proof.map(item => <li key={item} className="flex items-center gap-2"><span aria-hidden className="text-snow">✓</span>{item}</li>)}</ul> : <p {...enter(580)} className={`${enter(580).className} mt-7 flex items-center gap-2 text-sm text-mist`}>Atendimento direto, de Brasília para todo o Brasil</p>}
        </div>
        <HeroSymbol />
      </Container>
    </section>
  );
}
