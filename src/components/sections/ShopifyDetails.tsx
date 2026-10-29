import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Heading";
import { CtaButton } from "@/components/ui/CtaButton";
import { whatsappMessages } from "@/content/site";
export function ShopifyDetails() {
  return <>
    <section aria-labelledby="shopify-servicos-title" className="py-14 md:py-20"><Container>
      <SectionHeading id="shopify-servicos-title" eyebrow="Desenvolvimento e personalização" title={{ before: "O tema é o começo. A loja tem ", emphasis: "seu jeito", after: "." }} intro="Trabalho técnico para colocar suas ideias em prática, respeitando a identidade da marca e a estrutura da Shopify." />
      <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[
        ["01", "Temas e seções", "Adaptação de cores, fontes, disposição e componentes. Seções em Liquid para você editar no tema."],
        ["02", "Páginas de produto", "Modelos reutilizáveis que organizam informações, variantes e conteúdo do produto."],
        ["03", "Landing pages", "Páginas de campanha alinhadas ao tema, à sua marca e às referências combinadas."],
        ["04", "Layout em código", "Você ou sua agência fornece o layout aprovado. Nós implementamos na Shopify."],
        ["05", "Ajustes e correções", "Correções de layout, comportamento e responsividade, com a demanda delimitada antes de começar."],
        ["06", "Configuração de apps", "Instalação e configuração de apps existentes, conforme compatibilidade e escopo aprovado."],
      ].map(([n, title, text]) => <article key={n} className="rounded-card border border-line bg-surface p-7"><span className="font-mono text-xs text-accent">{n}</span><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted">{text}</p></article>)}</div>
    </Container></section>
    <section id="como-funciona" aria-labelledby="shopify-processo-title" className="scroll-mt-24 border-y border-line bg-surface/60 py-14 md:py-20"><Container>
      <SectionHeading id="shopify-processo-title" eyebrow="Como funciona" title={{ before: "Primeiro você confere. Depois a gente ", emphasis: "publica", after: "." }} />
      <ol className="mt-9 grid gap-6 md:grid-cols-3">{[["Demanda e proposta", "Analisamos sua loja, as referências e o que precisa ser feito. Você recebe escopo, valor e prazo."], ["Desenvolvimento em prévia", "Alterações de tema são feitas em uma cópia não publicada. Você acompanha a prévia e solicita as revisões combinadas."], ["Aprovação e publicação", "Publicamos após a sua aprovação e orientamos o uso do que foi entregue."]].map(([title, text], i) => <li key={title} className="border-t-2 border-brand pt-5"><span className="font-mono text-xs text-muted">0{i + 1}</span><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted">{text}</p></li>)}</ol>
      <p className="mt-7 max-w-3xl text-sm leading-relaxed text-muted">Configurações de apps e recursos globais podem afetar a loja publicada e são alinhadas antes da execução. O preço inicial de páginas inclui adaptação ao tema ou implementação de layout fornecido, sem serviço de design avulso.</p>
    </Container></section>
    <section aria-labelledby="agencias-title" className="bg-ink py-14 text-snow md:py-20"><Container className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div><p className="font-mono text-xs tracking-widest text-mist">PARCERIA COM AGÊNCIAS</p><h2 id="agencias-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Seu layout. Nossa implementação.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">Sua agência cuida da estratégia e do visual. A PhiloCode pode apoiar no desenvolvimento de páginas, seções e personalizações Shopify, com entregas e comunicação alinhadas.</p></div>
      <div className="lg:justify-self-end"><CtaButton location="shopify-agencias" message={whatsappMessages.agency} /></div>
    </Container></section>
  </>;
}
