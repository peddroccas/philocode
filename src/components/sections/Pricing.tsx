import {
  formatPrice,
  guarantees,
  offerMessage,
  shopifyOffers,
  siteInclusions,
  sitePains,
  siteProjectNote,
  support,
  whatsappMessages,
  type Offer,
  type Service,
} from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton, CtaLink } from "@/components/ui/CtaButton";
import { EmphasisText } from "@/components/ui/Heading";
import { reveal } from "@/lib/reveal";

/** Sites · Bento: as queixas de quem chega, o que vem em todo formato, as garantias e o caminho para algo maior. */
export function SitesBento() {
  return (
    <section id="familiar" aria-labelledby="familiar-title" className="scroll-mt-24 bg-canvas py-[var(--section-gap)]">
      <Container className="grid gap-[var(--gap-columns)] lg:grid-cols-12">
        <div {...reveal("up")} className="rounded-card bg-surface p-8 ring-1 ring-line sm:p-10 lg:col-span-7 lg:row-span-2">
          <h2 id="familiar-title" className="text-section text-ink">
            <EmphasisText text={sitePains.title} />
          </h2>
          <ul className="mt-10 grid gap-8">
            {sitePains.items.map((item) => (
              <li key={item.pain} className="border-t border-line pt-6">
                <blockquote className="font-display text-title leading-[1.3] font-semibold tracking-tight text-ink">{item.pain}</blockquote>
                <p className="mt-3 max-w-[52ch] leading-relaxed text-muted">{item.fix}</p>
              </li>
            ))}
          </ul>
        </div>

        <div {...reveal("up", 1)} className="rounded-card bg-well p-8 sm:p-10 lg:col-span-5">
          <h3 className="text-title text-ink">Incluído em todos os formatos</h3>
          <ul className="mt-6 grid gap-3">
            {siteInclusions.map((item) => (
              <li key={item} className="flex gap-3 text-ink">
                <span aria-hidden className="text-brand">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-muted">{siteProjectNote}</p>
        </div>

        <ul aria-label="Garantias" {...reveal("up", 2)} className="grid content-center gap-5 rounded-card bg-well p-8 sm:p-10 lg:col-span-5">
          {guarantees.sites.map((item) => (
            <li key={item} className="text-lead font-medium text-ink">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-6 rounded-card bg-night p-8 text-snow sm:p-10 lg:col-span-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-title text-snow">Seu projeto precisa de algo a mais?</h3>
            <p className="mt-2 text-mist">Sistemas, integrações e projetos maiores são avaliados sob orçamento.</p>
          </div>
          <CtaButton location="sites-sob-orcamento" message={whatsappMessages.sites} tone="dark" className="w-full sm:w-auto" />
        </div>
      </Container>
    </section>
  );
}

export function OfferRow({ offer, service }: { offer: Offer; service: Service }) {
  return (
    <div className="grid gap-6 border-b border-line py-8 lg:grid-cols-12 lg:items-center lg:gap-8">
      <div className="lg:col-span-5">
        <h3 className="text-title text-ink">{offer.name}</h3>
        <p className="mt-2 max-w-[44ch] leading-relaxed text-muted">{offer.summary}</p>
      </div>
      <ul className="grid gap-2 text-[0.9375rem] text-ink lg:col-span-4">
        {offer.includes.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden className="text-brand">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-6 lg:col-span-3 lg:flex-col lg:items-end">
        <p className="lg:text-right">
          <span className="num font-display text-[1.75rem] leading-none font-semibold tracking-tight text-ink">R$ {formatPrice(offer.price)}</span>
          <span className="ml-1 text-muted">{offer.unit}</span>
        </p>
        <CtaButton size="md" location={`${service}-oferta-${offer.id}`} message={offerMessage(offer, service)} label="Escolher este" />
      </div>
    </div>
  );
}

/** Acompanhamento depois da entrega: oferta em linha, com o que inclui e o preço. */
export function Support({ service }: { service: Service }) {
  return (
    <section aria-labelledby="acompanhamento-title" className="border-t border-line bg-surface py-[var(--section-gap-s)]">
      <Container>
        <div {...reveal("up")} className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 id="acompanhamento-title" className="text-section text-ink lg:col-span-7">
            {service === "sites" ? "Depois do ar, a gente continua cuidando." : "Sua loja pode continuar evoluindo."}
          </h2>
          <p className="max-w-[44ch] text-lead text-muted lg:col-span-5">
            {service === "sites"
              ? "Opcional: hospedagem, segurança e ajustes mensais para você não precisar pensar no site."
              : "Opcional: horas mensais para melhorar a loja aos poucos, com as prioridades definidas em conjunto."}
          </p>
        </div>
        <div className="mt-[var(--space-2xl)] border-t border-ink">
          {support[service].map((offer) => (
            <OfferRow key={offer.id} offer={offer} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Shopify · tabela de preços de partida: serviço, o que é, preço e a ação. */
export function ShopifyPriceTable() {
  return (
    <div>
      <table className="w-full text-left max-md:block">
        <caption className="sr-only">Serviços Shopify e preços de partida</caption>
        <thead>
          <tr className="border-b border-ink text-sm text-muted max-md:hidden">
            <th scope="col" className="pb-3 font-medium">Serviço</th>
            <th scope="col" className="pb-3 font-medium">Para quê</th>
            <th scope="col" className="pb-3 text-right font-medium">A partir de</th>
            <th scope="col" className="pb-3 text-right font-medium">
              <span className="sr-only">Pedir</span>
            </th>
          </tr>
        </thead>
        <tbody className="max-md:block max-md:border-t max-md:border-ink">
          {shopifyOffers.map((offer) => (
            <tr key={offer.id} className="border-b border-line align-middle max-md:grid max-md:grid-cols-[1fr_auto] max-md:gap-x-4 max-md:gap-y-2 max-md:py-6">
              <th scope="row" className="py-6 pr-6 text-title font-semibold text-ink max-md:col-span-2 max-md:p-0 md:whitespace-nowrap">{offer.name}</th>
              <td className="max-w-[44ch] py-6 pr-6 leading-relaxed text-muted max-md:col-span-2 max-md:p-0">{offer.summary}</td>
              <td className="num py-6 pr-6 text-right font-display text-title font-semibold whitespace-nowrap text-ink max-md:p-0 max-md:text-left">
                R$ {formatPrice(offer.price)}
                {offer.unit}
              </td>
              <td className="py-6 text-right whitespace-nowrap max-md:p-0">
                <CtaLink location={`shopify-oferta-${offer.id}`} message={offerMessage(offer, "shopify")} className="py-2">
                  Escolher este
                </CtaLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
