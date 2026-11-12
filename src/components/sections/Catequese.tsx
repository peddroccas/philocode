import { catequese, catequeseCtaLabel, catequeseOfferMessage, formatPrice } from "@/content/site";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";

/** Ilustração em código de um painel de coordenação. Dados fictícios, sem nomes reais. */
export function CatequeseVisual() {
  return <div className="rounded-card border border-white/15 bg-white/5 p-5 text-snow shadow-frame backdrop-blur-sm sm:p-7">
    <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-mist"><span>PAINEL / COORDENAÇÃO</span><span className="rounded-full bg-brand/15 px-3 py-1 text-snow">Inscrições abertas</span></div>
    <div className="mt-5 space-y-3">
      <div className="rounded-xl border border-white/10 p-4"><div className="flex items-center justify-between"><p className="font-semibold">Turma Eucaristia · 2026</p><span className="font-mono text-xs text-mist">CHAMADA</span></div><div aria-hidden className="mt-3 flex gap-2">{["✓", "✓", "✓", "–", "✓", "✓"].map((mark, i) => <span key={i} className={`flex size-8 items-center justify-center rounded-md border text-sm ${mark === "✓" ? "border-brand/40 bg-brand/15 text-snow" : "border-white/10 text-mist"}`}>{mark}</span>)}</div></div>
      <div className="flex items-center justify-between rounded-xl border border-white/10 p-4"><div><p className="font-semibold">Inscrições para aprovar</p><p className="mt-1 text-sm text-mist">Documentos enviados pelas famílias</p></div><span aria-hidden className="rounded-md bg-accent px-3 py-2 text-xs font-semibold">Aprovar</span></div>
      <div className="rounded-xl border border-white/10 p-4"><div className="flex items-center justify-between"><p className="font-semibold">Carnê do mês</p><span className="font-mono text-xs text-mist">PIX · DINHEIRO · CARTÃO</span></div><div aria-hidden className="mt-3 h-2 w-full rounded bg-white/10"><div className="h-2 w-2/3 rounded bg-brand" /></div></div>
    </div>
    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-mist">{["Coordenação", "Catequistas", "Famílias"].map(label => <span key={label} className="rounded-lg border border-white/10 px-2 py-3">{label}</span>)}</div>
    <p className="mt-5 text-xs leading-relaxed text-mist">Ilustração do sistema, com dados fictícios.</p>
  </div>;
}
export function CatequeseScreens() {
  return <section aria-labelledby="catequese-telas-title" className="border-y border-line bg-surface/60 py-14 md:py-20"><Container>
    <SectionHeading id="catequese-telas-title" eyebrow="O sistema por dentro" title={{ before: "Veja como ele ", emphasis: "funciona", after: "." }} intro="Telas do sistema, com dados fictícios de demonstração." />
    <ul className="mt-10 space-y-12 lg:space-y-16">{catequese.screens.map((item, i) => <li key={item.title} className="grid items-center gap-6 lg:grid-cols-[1.45fr_1fr] lg:gap-12">
      <BrowserFrame src={item.image} alt={item.alt} domain="sistema de catequese · dados fictícios" sizes="(min-width: 1024px) 720px, 100vw" className={i % 2 ? "lg:order-2" : ""} />
      <div className={i % 2 ? "lg:order-1" : ""}><p className="font-mono text-xs text-accent">0{i + 1}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight">{item.title}</h3><p className="mt-3 text-lg leading-relaxed text-muted">{item.text}</p></div>
    </li>)}</ul>
  </Container></section>;
}
export function CatequeseFeatures() {
  return <section aria-labelledby="catequese-recursos-title" className="py-14 md:py-20"><Container>
    <SectionHeading id="catequese-recursos-title" eyebrow="O que o sistema faz" title={{ before: "A catequese da paróquia em ", emphasis: "um só lugar", after: "." }} intro="Da inscrição das famílias ao carnê, a coordenação e os catequistas trabalham no mesmo sistema, pelo navegador." />
    <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{catequese.features.map((item, i) => <article key={item.title} className="rounded-card border border-line bg-surface p-7"><span className="font-mono text-xs text-accent">0{i + 1}</span><h3 className="mt-5 text-xl font-semibold">{item.title}</h3><p className="mt-3 leading-relaxed text-muted">{item.text}</p></article>)}</div>
  </Container></section>;
}
export function CatequeseAccess() {
  return <section aria-labelledby="catequese-acessos-title" className="border-y border-line bg-surface/60 py-14 md:py-20"><Container>
    <SectionHeading id="catequese-acessos-title" eyebrow="Acessos" title={{ before: "Cada pessoa vê o que ", emphasis: "precisa ver", after: "." }} intro="Os dados de cada paróquia ficam separados dos de outras paróquias, e os documentos das famílias ficam em armazenamento privado." />
    <ul className="mt-9 grid gap-6 md:grid-cols-2">{catequese.access.map(([title, text], i) => <li key={title} className="border-t-2 border-brand pt-5"><span className="font-mono text-xs text-muted">0{i + 1}</span><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted">{text}</p></li>)}</ul>
  </Container></section>;
}
export function CatequesePricing() {
  const { pricing } = catequese;
  return <section id="valores" aria-labelledby="valores-title" className="scroll-mt-24 py-14 md:py-20 lg:py-24"><Container>
    <SectionHeading id="valores-title" eyebrow="Investimento" title={{ before: "Um valor, ", emphasis: "sem rodeios", after: "." }} intro="Assinatura de preço fixo, só a mensalidade. Sem pacotes por número de turmas ou de catequizandos." />
    <article className="mt-9 rounded-card border border-brand bg-surface p-6 shadow-frame sm:p-8">
      <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] md:items-center md:gap-0 md:divide-x md:divide-line">
        <div className="md:pr-8">
          <p className="font-mono text-xs tracking-widest text-muted">MENSALIDADE</p>
          <p className="mt-3 flex flex-wrap items-baseline gap-1.5"><span className="text-lg">R$</span><span className="text-5xl font-semibold tracking-tight">{formatPrice(pricing.monthly)}</span><span className="text-muted">/mês</span></p>
          <CtaButton location="catequese-oferta" message={catequeseOfferMessage} label={catequeseCtaLabel} className="mt-6 w-full sm:w-auto" />
        </div>
        <ul className="space-y-3 text-[.9375rem] md:pl-8">{pricing.monthlyIncludes.map(item => <li key={item} className="flex gap-3"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-[2px] bg-brand" /><span>{item}</span></li>)}</ul>
      </div>
      <div className="mt-8 flex flex-col gap-3 rounded-xl border border-line bg-canvas p-5 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="font-semibold">Pagando à vista</p><p className="mt-1 text-muted">12 meses de uso pelo preço de {pricing.annualMonths} mensalidades.</p></div>
        <p className="flex items-baseline gap-1.5"><span className="text-lg">R$</span><span className="text-3xl font-semibold tracking-tight">{formatPrice(pricing.annual)}</span><span className="text-muted">à vista</span></p>
      </div>
    </article>
  </Container></section>;
}
