import { catequese, catequeseCtaLabel, catequeseOfferMessage, catequesePains, formatPrice, guarantees } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { CatequeseTour } from "./CatequeseTour";
import { reveal } from "@/lib/reveal";

/** Workbench · as telas reais do sistema, uma por vez, ao lado do que cada uma resolve. */
export function CatequeseScreens() {
  return (
    <section aria-labelledby="catequese-telas-title" className="bg-canvas py-[var(--section-gap)]">
      <Container>
        <SectionHeading
          id="catequese-telas-title"
          title={{ before: "Veja o sistema ", emphasis: "por dentro", after: "." }}
          intro="Telas reais do sistema, com dados fictícios de demonstração. É isso que a coordenação usa no dia a dia."
        />
        <CatequeseTour />
      </Container>
    </section>
  );
}

/** Os seis recursos em linhas; os três que respondem às queixas mais comuns trazem a frase de quem coordena. */
export function CatequeseFeatures() {
  const quoteFor: Record<string, string> = {
    "Inscrição online": catequesePains.items[0].pain,
    "Chamadas e presença": catequesePains.items[1].pain,
    "Finanças e carnê": catequesePains.items[2].pain,
  };
  return (
    <section aria-labelledby="catequese-recursos-title" className="border-y border-line bg-surface py-[var(--section-gap-l)]">
      <Container>
        <SectionHeading
          id="catequese-recursos-title"
          title={{ before: "A catequese da paróquia em ", emphasis: "um só lugar", after: "." }}
          intro="Da inscrição das famílias ao carnê, a coordenação e os catequistas trabalham no mesmo sistema, pelo navegador."
        />
        <ul className="mt-[var(--space-2xl)] border-t border-ink">
          {catequese.features.map((item, i) => (
            <li key={item.title} {...reveal("up", i % 3)} className="grid gap-3 border-b border-line py-8 lg:grid-cols-12 lg:items-start lg:gap-8">
              <h3 className="text-title text-ink lg:col-span-3">{item.title}</h3>
              <p className="max-w-[56ch] leading-relaxed text-muted lg:col-span-5">{item.text}</p>
              {quoteFor[item.title] && (
                <blockquote className="font-display text-[1.0625rem] leading-snug font-semibold tracking-tight text-ink lg:col-span-4">{quoteFor[item.title]}</blockquote>
              )}
            </li>
          ))}
        </ul>
        <CatequeseAccessTable />
      </Container>
    </section>
  );
}

/** Quem vê o quê: uma tabela de duas linhas, no fim da seção de recursos. */
function CatequeseAccessTable() {
  return (
    <div aria-labelledby="catequese-acessos-title" className="mt-[var(--space-2xl)] grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5">
        <h3 id="catequese-acessos-title" className="text-[1.625rem] leading-tight text-ink">
          Cada pessoa vê o que precisa ver.
        </h3>
        <p className="mt-4 max-w-[44ch] text-lead text-muted">Coordenação e catequistas entram com acessos diferentes, e cada um encontra só o que precisa.</p>
      </div>
      <table className="w-full text-left lg:col-span-6 lg:col-start-7 lg:self-end">
        <caption className="sr-only">Acessos do Catequese Hub</caption>
        <thead>
          <tr className="border-b border-ink text-sm text-muted">
            <th scope="col" className="pb-3 font-medium">Quem</th>
            <th scope="col" className="pb-3 font-medium">O que vê</th>
          </tr>
        </thead>
        <tbody>
          {catequese.access.map(([title, text]) => (
            <tr key={title} className="border-b border-line align-baseline">
              <th scope="row" className="py-6 pr-8 text-title font-semibold whitespace-nowrap text-ink">{title}</th>
              <td className="py-6 text-lead text-muted">{text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Offer · os dois jeitos de pagar lado a lado, o que a mensalidade inclui e as garantias. */
export function CatequesePricing() {
  const { pricing } = catequese;
  return (
    <section id="valores" aria-labelledby="valores-title" className="scroll-mt-24 border-t border-line bg-surface py-[var(--section-gap)]">
      <Container>
        <SectionHeading id="valores-title" title={{ before: "Um valor, ", emphasis: "sem rodeios", after: "." }} intro="Uma mensalidade fixa, sem pacotes nem cobrança por turma ou catequizando." />

        <div className="mt-[var(--space-2xl)] grid gap-12 lg:grid-cols-12 lg:gap-8">
          <dl className="grid border-t-2 border-ink lg:col-span-7">
            <div className="py-8">
              <dt className="font-semibold text-ink">Mensalidade</dt>
              <dd className="mt-3">
                <span className="num font-display text-display-s font-semibold text-ink">R$ {formatPrice(pricing.monthly)}</span>
                <span className="ml-1.5 text-muted">/mês</span>
              </dd>
              <dd className="mt-2 text-muted">Enquanto a paróquia usar o sistema.</dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line py-5">
              <dt className="font-semibold text-ink">Pagando à vista</dt>
              <dd>
                <span className="num font-display text-title font-semibold text-ink">R$ {formatPrice(pricing.annual)}</span>
                <span className="ml-1.5 text-muted">à vista</span>
              </dd>
              <dd className="w-full text-sm text-muted">12 meses de uso pelo preço de {pricing.annualMonths} mensalidades.</dd>
            </div>
          </dl>

          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="text-title text-ink">Incluído na mensalidade</h3>
            <ul className="mt-5 grid gap-3 text-[0.9375rem]">
              {pricing.monthlyIncludes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="text-brand">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <CtaButton location="catequese-oferta" message={catequeseOfferMessage} label={catequeseCtaLabel} className="mt-8 w-full sm:w-auto" />
          </div>
        </div>

        <ul aria-label="Garantias" className="mt-[var(--space-2xl)] grid gap-4 border-t border-line pt-6 sm:grid-cols-3 sm:gap-8">
          {guarantees.catequese.map((item) => (
            <li key={item} className="flex gap-3 text-ink">
              <span aria-hidden className="text-brand">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
