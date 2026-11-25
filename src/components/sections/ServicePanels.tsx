import Link from "next/link";
import { products, whatsappMessages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { reveal } from "@/lib/reveal";

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
  return <section aria-labelledby="sob-medida-title" className="bg-night py-14 text-snow md:py-20"><Container className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
    <div><p className="font-mono text-xs tracking-widest text-mist">SOB MEDIDA</p><h2 id="sob-medida-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Nenhum sistema pronto resolve o seu caso?</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">Sistemas internos, automações e integrações para a sua operação. Conte a ideia e avaliamos juntos o que faz sentido construir.</p></div>
    <div className="lg:justify-self-end"><CtaButton location="home-sob-medida" message={whatsappMessages.custom} label="Contar minha ideia" tone="dark" /></div>
  </Container></section>;
}

