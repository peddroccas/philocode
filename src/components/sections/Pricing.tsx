import clsx from "clsx";
import { pricing, type Plan } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { PixelSteps } from "@/components/ui/Icons";
import { reveal } from "@/lib/reveal";

function Price({ value, suffix, size, tone = "light" }: { value: string; suffix?: string; size: "lg" | "md"; tone?: "light" | "dark" }) {
  return (
    <p className={clsx("flex items-baseline gap-2", tone === "light" ? "text-ink" : "text-canvas")}>
      <span className="text-lg font-medium">R$</span>
      <span className={size === "lg" ? "text-6xl font-semibold tracking-tight sm:text-7xl" : "text-5xl font-semibold tracking-tight"}>
        {value}
      </span>
      {suffix && <span className={clsx("text-lg", tone === "light" ? "text-muted" : "text-mist")}>{suffix}</span>}
    </p>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-ink">
          <span aria-hidden className="mt-2 size-2 shrink-0 rounded-[2px] bg-brand" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function LaunchOffer() {
  const { launch } = pricing;
  if (!launch.active || launch.spotsLeft <= 0) return null;

  return (
    <article
      id="lancamento"
      {...reveal("frame", 0)}
      aria-labelledby="oferta-lancamento"
      className="relative mt-12 scroll-mt-28 overflow-hidden rounded-card bg-linear-to-br from-graphite to-ink p-6 text-canvas shadow-frame sm:p-10"
    >
      <PixelSteps {...reveal("draw", 2)} className="absolute top-0 right-10 h-5 w-24 -translate-y-px text-brand" />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-12">
        <div>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-[0.08em] text-mist uppercase">
            <span className="flex items-center gap-3">
              <span aria-hidden className="h-0.75 w-5 rounded-full bg-brand" />
              {launch.eyebrow}
            </span>
            <span className="flex items-center gap-2">
              <span aria-hidden className="flex gap-1">
                {Array.from({ length: launch.spotsTotal }, (_, index) => (
                  <span
                    key={index}
                    className={clsx(
                      "size-2.5 rounded-[2px]",
                      index < launch.spotsLeft ? "bg-brand" : "bg-white/15",
                    )}
                  />
                ))}
              </span>
              {launch.spotsLeft} de {launch.spotsTotal} vagas disponíveis
            </span>
          </p>
          <h3 id="oferta-lancamento" className="mt-4 text-2xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl">
            {launch.title}
          </h3>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-mist">{launch.text}</p>
        </div>

        <div className="lg:border-l lg:border-white/10 lg:pl-12">
          <dl className="grid grid-cols-2 gap-6">
            {launch.prices.map((item) => (
              <div key={item.plan}>
                <dt>
                  <span className="block font-mono text-xs tracking-[0.08em] text-mist uppercase">{item.plan}</span>
                  <span className="mt-0.5 block text-sm text-mist">{item.tagline}</span>
                </dt>
                <dd className="mt-2">
                  <Price value={item.price} size="md" tone="dark" />
                  <span className="mt-1 block text-sm text-mist">Normal: R$ {item.regularPrice}</span>
                </dd>
              </div>
            ))}
          </dl>
          <CtaButton location="lancamento" message={launch.message} className="mt-7 w-full sm:w-auto" />
        </div>
      </div>
    </article>
  );
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <article
      {...reveal("frame", index)}
      aria-labelledby={`plano-${plan.id}`}
      className="flex flex-col rounded-card border border-line bg-surface p-6 shadow-card sm:p-10"
    >
      <p className="font-mono text-xs tracking-[0.08em] text-muted uppercase">{plan.tagline}</p>
      <h3 id={`plano-${plan.id}`} className="mt-3 text-2xl font-semibold tracking-tight text-ink">
        {plan.name}
      </h3>
      <div className="mt-5">
        <Price value={plan.price} size="lg" />
      </div>
      <p className="mt-5 text-lg leading-relaxed text-muted">{plan.description}</p>
      <div className="mt-6 border-t border-line pt-6">
        <Bullets items={plan.highlights} />
      </div>
      <div className="mt-auto pt-8">
        <CtaButton location={`plano-${plan.id}`} message={plan.message} className="w-full sm:w-auto" />
      </div>
    </article>
  );
}

export function Pricing() {
  const { plans, maintenance, extras, terms } = pricing;

  return (
    <section id="precos" aria-labelledby="precos-title" className="scroll-mt-20 py-20 lg:py-28">
      <Container>
        <SectionHeading id="precos-title" eyebrow={pricing.eyebrow} title={pricing.title} intro={pricing.intro} />

        <LaunchOffer />

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:mt-6 lg:gap-6">
          {plans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:mt-6 lg:grid-cols-[1.4fr_1fr] lg:gap-6">
          <article
            {...reveal("up", 0)}
            aria-labelledby="preco-manutencao"
            className="grid gap-8 rounded-card border border-line bg-canvas p-6 sm:p-10 md:grid-cols-2"
          >
            <div>
              <p className="font-mono text-xs tracking-[0.08em] text-muted uppercase">Depois que o site está no ar</p>
              <h3 id="preco-manutencao" className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                {maintenance.name}
              </h3>
              <div className="mt-5">
                <Price value={maintenance.price} suffix={maintenance.priceSuffix} size="md" />
                <p className="mt-1.5 text-muted">{maintenance.annual}</p>
              </div>
              <p className="mt-5 leading-relaxed text-muted">{maintenance.description}</p>
            </div>
            <div className="flex flex-col md:border-l md:border-line md:pl-8">
              <Bullets items={maintenance.includes} />
              <p className="mt-auto pt-6 text-[0.9375rem] font-medium text-ink">{maintenance.domainNote}</p>
            </div>
          </article>

          <aside {...reveal("up", 1)} aria-label="Condições" className="rounded-card border border-line bg-surface p-6 sm:p-10">
            <dl className="grid gap-6">
              <div className="grid grid-cols-2 gap-6">
                {extras.map((extra) => (
                  <div key={extra.label}>
                    <dt className="font-mono text-xs tracking-[0.08em] text-muted uppercase">{extra.label}</dt>
                    <dd className="mt-1 text-2xl font-semibold tracking-tight text-ink">R$ {extra.price}</dd>
                  </div>
                ))}
              </div>
              {terms.map((term) => (
                <div key={term.title} className="border-t border-line pt-6">
                  <dt className="font-mono text-xs tracking-[0.08em] text-muted uppercase">{term.title}</dt>
                  <dd className="mt-1.5 leading-relaxed text-ink">{term.text}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

      </Container>
    </section>
  );
}
