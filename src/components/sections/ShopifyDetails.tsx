import { guarantees, shopifyPains, support, whatsappMessages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { EmphasisText } from "@/components/ui/Heading";
import { OfferRow, ShopifyPriceTable } from "./Pricing";
import { reveal } from "@/lib/reveal";

const services = [
  ["Temas e seções", "Adaptação de cores, fontes, disposição e componentes. Seções em Liquid para você editar no tema."],
  ["Páginas de produto", "Modelos reutilizáveis que organizam informações, variantes e conteúdo do produto."],
  ["Landing pages", "Páginas de campanha alinhadas ao tema, à sua marca e às referências combinadas."],
  ["Layout em código", "Você ou sua agência envia o layout pronto. Nós implementamos na Shopify."],
  ["Ajustes e correções", "Correções de layout, comportamento e responsividade, com a demanda delimitada antes de começar."],
  ["Configuração de apps", "Instalação e configuração de apps existentes, conforme a compatibilidade com a sua loja."],
];

const steps = [
  ["Demanda e proposta", "Analisamos sua loja, as referências e o que precisa ser feito. Você recebe escopo, valor e prazo."],
  ["Desenvolvimento em prévia", "Alterações de tema são feitas em uma cópia não publicada. Você acompanha a prévia e solicita as revisões combinadas."],
  ["Aprovação e publicação", "Publicamos após a sua aprovação e orientamos o uso do que foi entregue."],
];

const stageHead = "text-section text-ink";

/**
 * Shopify · Narrative Workflow: a página conta o pedido em três etapas.
 * 1. o que a loja precisa; 2. a prévia e o preço; 3. o que continua depois de publicar.
 */
export function ShopifyDetails() {
  return (
    <>
      <section id="familiar" aria-labelledby="familiar-title" className="scroll-mt-24 bg-canvas py-[var(--section-gap)]">
          <Container>
            <h2 id="familiar-title" {...reveal("up")} className={stageHead}>
              <EmphasisText text={shopifyPains.title} />
            </h2>
            <ul className="mt-[var(--space-2xl)] grid gap-8 lg:grid-cols-3 lg:gap-8">
              {shopifyPains.items.map((item) => (
                <li key={item.pain} className="border-t-2 border-ink pt-6">
                  <blockquote className="font-display text-title leading-[1.3] font-semibold tracking-tight text-ink">{item.pain}</blockquote>
                  <p className="mt-4 leading-relaxed text-muted">{item.fix}</p>
                </li>
              ))}
            </ul>

            <div aria-labelledby="shopify-servicos-title" className="mt-[var(--space-2xl)] grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <h3 id="shopify-servicos-title" className="text-title text-ink">
                  O tema é o começo. A loja tem seu jeito.
                </h3>
                <p className="mt-3 max-w-[40ch] leading-relaxed text-muted">Trabalho técnico para colocar suas ideias em prática, respeitando a identidade da marca e a estrutura da Shopify.</p>
              </div>
              <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
                {services.map(([title, text]) => (
                  <li key={title} className="border-t border-line py-5">
                    <h4 className="font-semibold text-ink">{title}</h4>
                    <p className="mt-1 leading-relaxed text-muted">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

      <section id="como-funciona" aria-labelledby="shopify-processo-title" className="scroll-mt-24 border-y border-line bg-surface py-[var(--section-gap-l)]">
          <Container>
            <h2 id="shopify-processo-title" {...reveal("up")} className={stageHead}>
              Primeiro você confere. Depois a gente publica.
            </h2>
            <ol className="mt-[var(--space-2xl)] border-t border-ink [counter-reset:step]">
              {steps.map(([title, text]) => (
                <li key={title} className="grid gap-3 border-b border-line py-7 lg:grid-cols-12 lg:items-baseline lg:gap-8">
                  <h3 className="text-title text-ink before:mr-3 before:text-brand before:content-[counter(step)] [counter-increment:step] lg:col-span-4">{title}</h3>
                  <p className="max-w-[60ch] text-lead text-muted lg:col-span-7 lg:col-start-6">{text}</p>
                </li>
              ))}
            </ol>

            <div id="valores" className="mt-[var(--space-2xl)] scroll-mt-24">
              <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
                <h3 id="valores-title" className="text-[1.625rem] leading-tight text-ink lg:col-span-6">
                  Você sabe quanto custa antes de pedir.
                </h3>
                <p className="max-w-[44ch] text-muted lg:col-span-5 lg:col-start-8">Valores de partida para novos projetos. O valor final depende do que o seu projeto precisa.</p>
              </div>
              <div className="mt-10">
                <ShopifyPriceTable />
              </div>
              <p className="mt-7 max-w-[72ch] text-sm leading-relaxed text-muted">
                Configurações de apps e recursos globais podem afetar a loja publicada e são alinhadas antes da execução. O preço inicial de páginas inclui adaptação ao tema ou implementação de layout fornecido, sem serviço de design avulso.
              </p>
              <ul aria-label="Garantias" className="mt-10 grid gap-4 border-t border-line pt-6 sm:grid-cols-3 sm:gap-8">
                {guarantees.shopify.map((item) => (
                  <li key={item} className="flex gap-3 text-ink">
                    <span aria-hidden className="text-brand">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

      <section aria-labelledby="acompanhamento-title" className="bg-canvas py-[var(--section-gap)]">
          <Container>
            <div {...reveal("up")} className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
              <h2 id="acompanhamento-title" className={`${stageHead} lg:col-span-7`}>
                Sua loja pode continuar evoluindo.
              </h2>
              <p className="max-w-[44ch] text-lead text-muted lg:col-span-5">Opcional: horas mensais para melhorar a loja aos poucos, com as prioridades definidas em conjunto.</p>
            </div>
            <div className="mt-[var(--space-2xl)] border-t border-ink">
              {support.shopify.map((offer) => (
                <OfferRow key={offer.id} offer={offer} service="shopify" />
              ))}
            </div>


            <div aria-labelledby="agencias-title" className="mt-[var(--space-2xl)] grid gap-8 rounded-card bg-night p-8 text-snow sm:p-12 lg:grid-cols-12 lg:items-center lg:gap-8">
              <div className="lg:col-span-8">
                <h3 id="agencias-title" className="text-[1.625rem] leading-tight text-snow">
                  Seu layout. Nossa implementação.
                </h3>
                <p className="mt-4 max-w-[56ch] text-lead text-mist">Sua agência cuida da estratégia e do visual. A Philocode pode apoiar no desenvolvimento de páginas, seções e personalizações Shopify, com entregas e comunicação alinhadas.</p>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <CtaButton location="shopify-agencias" message={whatsappMessages.agency} label="Falar sobre parceria" tone="dark" className="w-full sm:w-auto" />
              </div>
            </div>
          </Container>
        </section>
    </>
  );
}
