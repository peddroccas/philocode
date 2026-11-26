import Link from "next/link";
import { catequese, formatPrice, pains, products, projects, shopifyOffers, whatsappMessages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { reveal } from "@/lib/reveal";

/** O que cada produto mostra ao lado do texto: uma captura real ou, sem captura, os próprios preços. */
function ProductVisual({ index }: { index: number }) {
  if (index === 0) {
    const project = projects.items[1];
    return <BrowserFrame src={project.image} alt={project.alt} domain={project.domain} sizes="(min-width: 1024px) 52vw, 100vw" />;
  }
  if (index === 2) {
    const screen = catequese.screens[1];
    return <BrowserFrame src={screen.image} alt={screen.alt} domain={`${catequese.domain}, dados fictícios`} sizes="(min-width: 1024px) 52vw, 100vw" />;
  }
  return (
    <table className="w-full text-left">
      <caption className="sr-only">Alguns serviços Shopify e os preços de partida</caption>
      <tbody>
        {shopifyOffers.slice(0, 3).map((offer) => (
          <tr key={offer.id} className="border-b border-line">
            <th scope="row" className="py-4 pr-6 font-semibold text-ink">{offer.name}</th>
            <td className="num py-4 text-right font-display text-title font-semibold whitespace-nowrap text-ink">R$ {formatPrice(offer.price)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Início · Feature Stack: o título fica fixo à esquerda; os três produtos passam à direita, cada um aberto pela frase de quem precisa dele. */
export function Products() {
  return (
    <section id="produtos" aria-labelledby="produtos-title" className="scroll-mt-24 bg-canvas py-[var(--section-gap)]">
      <span id="valores" className="block scroll-mt-24" />
      <span id="lancamento" className="block scroll-mt-24" />
      <span id="familiar" className="block scroll-mt-24" />
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div {...reveal("up")} className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 id="produtos-title" className="text-section text-ink">
            Três caminhos. Escolha o seu.
          </h2>
          <p className="mt-4 max-w-[34ch] text-lead text-muted">Cada produto atende um tipo de negócio. Comece pelo que se parece com o seu.</p>
          <ol aria-label="Os três caminhos" className="mt-8 hidden border-t border-ink lg:block">
            {products.map((item) => (
              <li key={item.n} className="border-b border-line">
                <a href={`#caminho-${item.n}`} className="group flex min-h-14 items-center justify-between gap-4 py-3">
                  <span className="font-semibold text-ink underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-ink">{item.title}</span>
                  <span className="num text-sm whitespace-nowrap text-muted">{item.price}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        <ol className="grid gap-[var(--space-2xl)] lg:col-span-7 lg:col-start-6">
          {products.map((item, i) => {
            const pain = pains.items[i];
            return (
              <li key={item.n} id={`caminho-${item.n}`} className="scroll-mt-28 border-t-2 border-ink pt-8">
                <article aria-labelledby={`produto-${item.n}`} className="grid gap-7">
                  <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 id={`produto-${item.n}`} className="text-[1.75rem] leading-tight text-ink">{item.title}</h3>
                    <p className="text-sm text-muted">
                      {item.priceLabel} <span className="num font-display text-title font-semibold whitespace-nowrap text-ink">{item.price}</span>
                    </p>
                  </header>
                  <figure>
                    <blockquote className="font-display text-title leading-[1.3] font-semibold tracking-tight text-ink">{pain.pain}</blockquote>
                    <figcaption className="mt-2 text-sm text-muted">{pain.who}</figcaption>
                  </figure>
                  <div {...reveal("up")}>
                    <ProductVisual index={i} />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div>
                      <p className="max-w-[52ch] font-medium text-ink">{pain.fix}</p>
                      <p className="mt-2 max-w-[52ch] leading-relaxed text-muted">{item.desc}</p>
                      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] text-ink">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-baseline gap-2">
                            <span aria-hidden className="text-brand">✓</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={item.href}
                      data-cta={`home-produto-${item.n}`}
                      className="inline-flex min-h-11 items-center font-semibold whitespace-nowrap text-ink underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-ink"
                    >
                      {item.link}
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

/** Início · Statement: a pergunta do software sob medida, em uma frase grande. */
export function CustomSoftware() {
  return (
    <section aria-labelledby="sob-medida-title" className="bg-well py-[var(--section-gap-s)]">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
        <h2 id="sob-medida-title" {...reveal("up")} className="max-w-[22ch] text-section text-ink lg:col-span-8">
          Nenhum sistema pronto resolve o seu caso?
        </h2>
        <div className="lg:col-span-4">
          <p className="max-w-[40ch] text-lead text-muted">Sistemas internos, automações e integrações para a sua operação. Conte a ideia e avaliamos juntos o que faz sentido construir.</p>
          <CtaButton location="home-sob-medida" message={whatsappMessages.custom} label="Contar minha ideia" className="mt-8 w-full sm:w-auto" />
        </div>
      </Container>
    </section>
  );
}
