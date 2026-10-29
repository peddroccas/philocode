import { siteOffers, shopifyOffers, siteInclusions, support, formatPrice, offerMessage, whatsappMessages, type Offer, type Service } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Heading";
import { CtaButton } from "@/components/ui/CtaButton";

function OfferCard({ offer, service }: { offer: Offer; service: Service }) {
  return <article className={`relative flex min-w-0 flex-col rounded-card border bg-surface p-6 sm:p-7 ${offer.featured ? "border-brand shadow-frame" : "border-line shadow-card"}`}>
    <p className="mb-4 font-mono text-xs tracking-widest text-muted">{offer.featured ? "PÁGINA SOB MEDIDA" : "ESCOPO DEFINIDO NA PROPOSTA"}</p>
    <h3 className="text-2xl font-semibold tracking-tight">{offer.name}</h3><p className="mt-3 leading-relaxed text-muted">{offer.summary}</p>
    <div className="mt-6"><p className="text-sm text-muted">A partir de</p><p className="mt-1 flex flex-wrap items-baseline gap-1.5"><span className="text-lg">R$</span><span className="text-4xl font-semibold tracking-tight">{formatPrice(offer.price)}</span><span className="text-muted">{offer.unit}</span></p></div>
    <ul className="mt-6 mb-7 space-y-3 border-t border-line pt-6 text-[.9375rem]">{offer.includes.map(item => <li key={item} className="flex gap-3"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-[2px] bg-brand" /><span>{item}</span></li>)}</ul>
    <CtaButton location={`${service}-oferta-${offer.id}`} message={offerMessage(offer, service)} className="mt-auto w-full" />
  </article>;
}
export function Pricing({ service = "sites" }: { service?: Service }) {
  const offers = service === "sites" ? siteOffers : shopifyOffers;
  return <section id="valores" aria-labelledby="valores-title" className="scroll-mt-24 py-14 md:py-20 lg:py-24"><Container>
    <SectionHeading id="valores-title" eyebrow="Investimento" title={{ before: "Você sabe o que ", emphasis: "vai receber", after: "." }} intro="Valores iniciais para novas contratações. Entendemos sua demanda e confirmamos entregas, prazo e investimento na proposta." />
    {service === "shopify" ? <div className="mt-9 space-y-10">{[{ title: "Ajustes e componentes", offers: offers.slice(0, 2) }, { title: "Páginas e lojas", offers: offers.slice(2, 5) }, { title: "Demandas por hora", offers: offers.slice(5) }].map(group => <div key={group.title}><h3 className="mb-4 font-mono text-xs tracking-widest text-muted uppercase">{group.title}</h3><div className={`grid gap-5 ${group.offers.length === 3 ? "lg:grid-cols-3" : group.offers.length === 2 ? "md:grid-cols-2" : "max-w-xl"}`}>{group.offers.map(offer => <OfferCard key={offer.id} offer={offer} service={service} />)}</div></div>)}</div> : <div className="mt-9 grid gap-5 lg:grid-cols-3">{offers.map(offer => <OfferCard key={offer.id} offer={offer} service={service} />)}</div>}
    {service === "sites" ? <div className="mt-7 rounded-card border border-line bg-surface p-6 sm:p-8"><h3 className="text-lg font-semibold">Incluído em todos os formatos</h3><ul className="mt-4 grid gap-3 sm:grid-cols-2">{siteInclusions.map(item => <li key={item} className="flex gap-3 text-muted"><span aria-hidden className="text-brand">✓</span>{item}</li>)}</ul><p className="mt-5 border-t border-line pt-5 text-sm leading-relaxed text-muted">Você fornece marca, imagens e textos. Redação completa, identidade visual, blog, CMS, outros idiomas e integrações são orçados separadamente. Domínio e hospedagem são custos separados do projeto.</p></div> : <p className="mt-7 max-w-4xl text-sm leading-relaxed text-muted">Plano Shopify, domínio, temas e aplicativos pagos são contratados pelo cliente. Layout visual inteiramente novo exige avaliação específica e eventual parceria com designer. Integrações complexas, migrações, apps próprios, headless e projetos Plus ficam fora dos pacotes.</p>}
    {service === "sites" && <div className="mt-7 flex flex-col gap-5 rounded-card bg-ink p-6 text-snow sm:flex-row sm:items-center sm:justify-between sm:p-8"><div><h3 className="text-xl font-semibold">Seu projeto precisa de algo a mais?</h3><p className="mt-2 text-mist">Funcionalidades e projetos ampliados são avaliados sob orçamento.</p></div><CtaButton location="sites-sob-orcamento" message={whatsappMessages.sites} /></div>}
  </Container></section>;
}
export function Support({ service }: { service: Service }) {
  return <section aria-labelledby="acompanhamento-title" className="border-t border-line bg-surface/60 py-14 md:py-20"><Container>
    <SectionHeading id="acompanhamento-title" eyebrow="Depois da entrega" title={{ before: "Seu projeto pode continuar ", emphasis: "evoluindo", after: "." }} intro="Acompanhamento opcional, com escopo e tempo de atendimento combinados." />
    <div className="mt-8 grid gap-5 md:grid-cols-2">{support[service].map(offer => <OfferCard key={offer.id} offer={offer} service={service} />)}</div>
    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">Sem atendimento ilimitado ou disponibilidade permanente. Serviços e horas adicionais exigem aprovação prévia. As condições de contratos existentes são preservadas.{service === "sites" ? " Sem acompanhamento, o cliente precisa contratar hospedagem própria. O domínio é pago separadamente." : " O acompanhamento não inclui a assinatura da plataforma nem os custos dos apps."}</p>
  </Container></section>;
}
