import Link from "next/link";
import { siteOffers, shopifyOffers, formatPrice } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Heading";

export function HomeVisual() {
  return <div className="grid gap-4" aria-label="Duas formas de trabalhar com a PhiloCode">
    {[{ number: "01", name: "Seu negócio na internet", text: "Sites para apresentar seu trabalho e facilitar novos contatos.", href: "/criacao-de-sites", label: "Criação de sites" }, { number: "02", name: "Sua loja em evolução", text: "Páginas, temas e melhorias para sua operação Shopify.", href: "/shopify", label: "Desenvolvimento Shopify" }].map(item => <Link key={item.number} href={item.href} className="group rounded-card border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-brand/60 hover:bg-white/10 sm:p-8">
      <span className="flex items-center justify-between font-mono text-xs tracking-widest text-mist"><span>{item.number} / {item.label.toUpperCase()}</span><span aria-hidden className="text-xl text-brand">↗</span></span>
      <h2 className="mt-5 text-2xl font-semibold tracking-tight text-snow">{item.name}</h2><p className="mt-2 leading-relaxed text-mist">{item.text}</p>
    </Link>)}
  </div>;
}
export function ThemeVisual() {
  return <div className="rounded-card border border-white/15 bg-white/5 p-5 text-snow shadow-frame sm:p-7">
    <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-mist"><span>TEMA / PRÉVIA</span><span className="rounded-full bg-brand/15 px-3 py-1 text-snow">Não publicado</span></div>
    <div className="mt-6 grid grid-cols-[.8fr_1fr] gap-5 rounded-xl border border-white/10 p-4 sm:p-6">
      <div aria-hidden className="flex min-h-40 items-center justify-center rounded-lg bg-linear-to-br from-brand/30 to-white/5"><span className="font-serif text-6xl italic text-snow/80">P</span></div>
      <div className="self-center"><p className="font-mono text-[10px] tracking-widest text-mist">SUA MARCA</p><p className="mt-3 text-xl font-semibold">Seu produto,<br />bem apresentado.</p><div aria-hidden className="mt-4 h-2 w-3/4 rounded bg-white/15" /><div aria-hidden className="mt-2 h-2 w-1/2 rounded bg-white/10" /><div aria-hidden className="mt-5 rounded-md bg-accent px-3 py-2 text-center text-xs font-semibold">Adicionar ao carrinho</div></div>
    </div>
    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-mist">{["Liquid", "Responsivo", "Editável"].map(label => <span key={label} className="rounded-lg border border-white/10 px-2 py-3">{label}</span>)}</div>
    <p className="mt-5 text-xs leading-relaxed text-mist">Ilustração do processo. Alterações no tema são apresentadas para aprovação antes de publicar.</p>
  </div>;
}
export function Services() {
  return <section id="valores" aria-labelledby="servicos-title" className="scroll-mt-24 py-14 md:py-20 lg:py-24"><Container>
    <span id="lancamento" className="scroll-mt-24" />
    <SectionHeading id="servicos-title" eyebrow="O que fazemos" title={{ before: "O próximo passo do ", emphasis: "seu negócio", after: "." }} intro="Escolha o caminho que combina com o seu momento. O escopo e o investimento são confirmados antes de começar." />
    <div className="mt-9 grid gap-5 md:grid-cols-2">
      {[{ n: "01", title: "Criação de sites", desc: "Para profissionais e empresas que querem apresentar seus serviços com clareza e receber novos contatos.", points: ["Páginas profissionais", "Landing pages de campanha", "Sites institucionais"], price: siteOffers[0].price, href: "/criacao-de-sites", link: "Conhecer criação de sites" }, { n: "02", title: "Desenvolvimento Shopify", desc: "Para lojas e agências que precisam personalizar temas, implementar páginas e resolver demandas técnicas.", points: ["Ajustes e seções em Liquid", "Páginas de produto e campanhas", "Configuração e evolução de lojas"], price: shopifyOffers[0].price, href: "/shopify", link: "Conhecer serviços Shopify" }].map(item => <article key={item.n} className="flex flex-col rounded-card border border-line bg-surface p-7 sm:p-9"><p className="font-mono text-xs text-muted">{item.n} / SERVIÇOS</p><h3 className="mt-4 text-3xl font-semibold tracking-tight">{item.title}</h3><p className="mt-4 leading-relaxed text-muted">{item.desc}</p><ul className="my-6 space-y-3">{item.points.map(point => <li key={point} className="flex gap-3"><span aria-hidden className="text-brand">↗</span>{point}</li>)}</ul><div className="mt-auto border-t border-line pt-6"><p className="text-sm text-muted">{item.n === "02" ? "Ajustes pontuais a partir de" : "Projetos a partir de"}</p><p className="mt-1 text-3xl font-semibold">R$ {formatPrice(item.price)}</p><Link href={item.href} data-cta={`home-servico-${item.n}`} className="mt-5 inline-flex min-h-11 items-center gap-3 font-semibold text-accent underline decoration-line underline-offset-4">{item.link}<span aria-hidden>↗</span></Link></div></article>)}
    </div>
  </Container></section>;
}
