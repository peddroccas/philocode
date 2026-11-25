import { catequese, catequeseCtaLabel, catequeseOfferMessage, formatPrice } from "@/content/site";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { Guarantees } from "./Guarantees";
import { reveal } from "@/lib/reveal";

export function CatequeseScreens() {
  return <section aria-labelledby="catequese-telas-title" className="border-y border-line bg-surface/60 py-14 md:py-20"><Container>
    <SectionHeading id="catequese-telas-title" eyebrow="O sistema por dentro" title={{ before: "Veja o sistema ", emphasis: "por dentro", after: "." }} intro="Telas reais do sistema, com dados fictícios de demonstração. É isso que a coordenação usa no dia a dia." />
    <ul className="mt-10 space-y-12 lg:space-y-16">{catequese.screens.map((item, i) => <li key={item.title} className="grid items-center gap-6 lg:grid-cols-[1.45fr_1fr] lg:gap-12">
      <BrowserFrame src={item.image} alt={item.alt} domain={`${catequese.domain} · dados fictícios`} sizes="(min-width: 1024px) 720px, 100vw" className={i % 2 ? "lg:order-2" : ""} />
      <div className={i % 2 ? "lg:order-1" : ""}><p className="font-mono text-xs text-accent">0{i + 1}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight">{item.title}</h3><p className="mt-3 text-lg leading-relaxed text-muted">{item.text}</p></div>
    </li>)}</ul>
  </Container></section>;
}
export function CatequeseFeatures() {
  return <section aria-labelledby="catequese-recursos-title" className="py-14 md:py-20"><Container>
    <SectionHeading id="catequese-recursos-title" eyebrow="O que o sistema faz" title={{ before: "A catequese da paróquia em ", emphasis: "um só lugar", after: "." }} intro="Da inscrição das famílias ao carnê, a coordenação e os catequistas trabalham no mesmo sistema, pelo navegador." />
    <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{catequese.features.map((item, i) => <article key={item.title} {...reveal("up", i % 3)} className="brackets rounded-card border border-line bg-surface p-7"><span className="font-mono text-xs text-accent">0{i + 1}</span><h3 className="mt-5 text-xl font-semibold">{item.title}</h3><p className="mt-3 leading-relaxed text-muted">{item.text}</p></article>)}</div>
  </Container></section>;
}
export function CatequeseAccess() {
  return <section aria-labelledby="catequese-acessos-title" className="border-y border-line bg-surface/60 py-14 md:py-20"><Container>
    <SectionHeading id="catequese-acessos-title" eyebrow="Acessos" title={{ before: "Cada pessoa vê o que ", emphasis: "precisa ver", after: "." }} intro="Coordenação e catequistas entram com acessos diferentes, e cada um encontra só o que precisa." />
    <ul className="mt-9 grid gap-6 md:grid-cols-2">{catequese.access.map(([title, text], i) => <li key={title} className="border-t-2 border-brand pt-5"><span className="font-mono text-xs text-muted">0{i + 1}</span><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted">{text}</p></li>)}</ul>
  </Container></section>;
}
export function CatequesePricing() {
  const { pricing } = catequese;
  return <section id="valores" aria-labelledby="valores-title" className="scroll-mt-24 py-14 md:py-20 lg:py-24"><Container>
    <SectionHeading id="valores-title" eyebrow="Investimento" title={{ before: "Um valor, ", emphasis: "sem rodeios", after: "." }} intro="Uma mensalidade fixa, sem pacotes nem cobrança por turma ou catequizando." />
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
    <Guarantees service="catequese" />
  </Container></section>;
}
