import Link from "next/link";
import { products, whatsappMessages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { AnchorSymbol } from "@/components/ui/Logo";
import { reveal } from "@/lib/reveal";

export function ThemeVisual() {
  return <div className="rounded-card border border-white/15 bg-[#121214] p-5 text-snow shadow-frame sm:p-7">
    <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-mist"><span>TEMA / PRÉVIA</span><span className="rounded-full bg-brand/15 px-3 py-1 text-snow">Não publicado</span></div>
    <div className="mt-6 grid grid-cols-[.8fr_1fr] gap-5 rounded-xl border border-white/10 p-4 sm:p-6">
      <div aria-hidden className="flex min-h-40 items-center justify-center rounded-lg bg-linear-to-br from-white/15 to-white/5"><AnchorSymbol className="h-16 w-auto text-snow/80" /></div>
      <div className="self-center"><p className="font-mono text-[10px] tracking-widest text-mist">SUA MARCA</p><p className="mt-3 text-xl font-semibold">Seu produto,<br />bem apresentado.</p><div aria-hidden className="mt-4 h-2 w-3/4 rounded bg-white/15" /><div aria-hidden className="mt-2 h-2 w-1/2 rounded bg-white/10" /><div aria-hidden className="mt-5 rounded-md bg-snow px-3 py-2 text-center text-xs font-semibold text-ink">Adicionar ao carrinho</div></div>
    </div>
    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-mist">{["Liquid", "Responsivo", "Editável"].map(label => <span key={label} className="rounded-lg border border-white/10 px-2 py-3">{label}</span>)}</div>
    <p className="mt-5 text-xs leading-relaxed text-mist">Ilustração do processo.</p>
  </div>;
}
export function Products() {
  return <section id="produtos" aria-labelledby="produtos-title" className="scroll-mt-24 py-14 md:py-20 lg:py-24"><Container>
    <span id="valores" className="scroll-mt-24" /><span id="lancamento" className="scroll-mt-24" />
    <SectionHeading id="produtos-title" eyebrow="Produtos" title={{ before: "Três caminhos. ", emphasis: "Escolha o seu", after: "." }} intro="Cada produto atende um tipo de negócio. Comece pelo que se parece com o seu." />
    <div className="mt-9 grid gap-5 lg:grid-cols-3">
      {products.map((item, i) => <article key={item.n} {...reveal("up", i)} className="brackets flex flex-col rounded-card border border-line bg-surface p-7 sm:p-8"><p className="font-mono text-xs text-muted">{item.n} / PRODUTOS</p><h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{item.title}</h3><p className="mt-4 leading-relaxed text-muted">{item.desc}</p><ul className="my-6 space-y-3">{item.points.map(point => <li key={point} className="flex gap-3"><span aria-hidden className="text-brand">↗</span>{point}</li>)}</ul><div className="mt-auto border-t border-line pt-6"><p className="text-sm text-muted">{item.priceLabel}</p><p className="mt-1 text-2xl font-semibold">{item.price}</p><Link href={item.href} data-cta={`home-produto-${item.n}`} className="mt-5 inline-flex min-h-11 items-center gap-3 font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink">{item.link}<span aria-hidden>↗</span></Link></div></article>)}
    </div>
  </Container></section>;
}
export function CustomSoftware() {
  return <section aria-labelledby="sob-medida-title" className="bg-ink py-14 text-snow md:py-20"><Container className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
    <div><p className="font-mono text-xs tracking-widest text-mist">SOB MEDIDA</p><h2 id="sob-medida-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Nenhum sistema pronto resolve o seu caso?</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">Sistemas internos, automações e integrações para a sua operação. Conte a ideia e avaliamos juntos o que faz sentido construir.</p></div>
    <div className="lg:justify-self-end"><CtaButton location="home-sob-medida" message={whatsappMessages.custom} label="Contar minha ideia" tone="dark" /></div>
  </Container></section>;
}

export function SiteVisual() {
  return (
    <div className="relative overflow-hidden rounded-card border border-white/15 bg-[#121214] p-6 text-snow shadow-frame backdrop-blur-sm sm:p-8">
      <div aria-hidden className="absolute -top-14 -right-14 size-48 rounded-full border border-brand/20" />
      <div aria-hidden className="absolute -top-8 -right-8 size-36 rounded-full border border-brand/20" />
      <p className="relative font-mono text-xs tracking-widest text-mist">SEU NEGÓCIO EM PRIMEIRO PLANO</p>
      <h2 className="relative mt-5 max-w-xs text-3xl leading-tight font-semibold tracking-tight">Da sua ideia ao próximo contato.</h2>
      <ol className="relative mt-8 space-y-5">
        {[
          ["01", "Apresente seu trabalho", "Uma presença que transmite quem você é."],
          ["02", "Organize seus serviços", "Informações claras para quem precisa de você."],
          ["03", "Facilite o contato", "Um botão claro para começar a conversa."],
        ].map(([number, title, text]) => (
          <li key={number} className="flex gap-4 border-t border-white/10 pt-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 font-mono text-xs text-snow">{number}</span>
            <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-mist">{text}</p></div>
          </li>
        ))}
      </ol>
      <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-5 text-xs text-mist">
        {["Sua identidade", "Celular e computador", "Seu domínio"].map(label => <span key={label} className="rounded-full border border-white/15 px-3 py-2">{label}</span>)}
      </div>
    </div>
  );
}
