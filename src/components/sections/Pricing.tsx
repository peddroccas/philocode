import clsx from "clsx";
import { pricing, type Plan } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { PixelSteps } from "@/components/ui/Icons";

function Price({ value, tone = "light" }: { value: string; tone?: "light" | "dark" }) {
  return (
    <p className={clsx("flex items-baseline gap-2", tone === "light" ? "text-ink" : "text-canvas")}>
      <span className="text-base font-medium">R$</span>
      <span className="text-5xl font-semibold tracking-tight">{value}</span>
    </p>
  );
}

function LaunchOffer() {
  const { launch } = pricing;
  if (!launch.active || launch.spotsLeft <= 0) return null;

  return (
    <article
      id="lancamento"
      aria-labelledby="oferta-lancamento"
      className="relative mt-12 scroll-mt-28 overflow-hidden rounded-card bg-linear-to-br from-graphite to-ink p-6 text-canvas shadow-frame sm:p-9"
    >
      <PixelSteps className="absolute top-0 right-10 h-5 w-24 -translate-y-px text-brand" />
      <div className="grid gap-7 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-12">
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
                    className={clsx("size-2.5 rounded-[2px]", index < launch.spotsLeft ? "bg-brand" : "bg-white/15")}
                  />
                ))}
              </span>
              {launch.spotsLeft} de {launch.spotsTotal} vagas
            </span>
          </p>
          <h3 id="oferta-lancamento" className="mt-4 text-2xl leading-tight font-semibold tracking-tight text-balance">
            {launch.title}
          </h3>
          <p className="mt-2 max-w-lg leading-relaxed text-mist">{launch.text}</p>
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
                  <Price value={item.price} tone="dark" />
                  <span className="mt-1 block text-sm text-mist">Normal: R$ {item.regularPrice}</span>
                </dd>
              </div>
            ))}
          </dl>
          <CtaButton location="lancamento" message={launch.message} className="mt-6 w-full sm:w-auto" />
        </div>
      </div>
    </article>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      aria-labelledby={`plano-${plan.id}`}
      className="flex flex-col rounded-card border border-line bg-surface p-6 shadow-card sm:p-9"
    >
      <p className="font-mono text-xs tracking-[0.08em] text-muted uppercase">{plan.tagline}</p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <div>
          <h3 id={`plano-${plan.id}`} className="text-2xl font-semibold tracking-tight text-ink">
            {plan.name}
          </h3>
          <p className="mt-1 text-muted">{plan.description}</p>
        </div>
        <Price value={plan.price} />
      </div>
      <ul className="mt-6 grid gap-2.5 border-t border-line pt-6">
        {plan.highlights.map((item) => (
          <li key={item} className="flex items-start gap-3 text-ink">
            <span aria-hidden className="mt-2 size-2 shrink-0 rounded-[2px] bg-brand" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <CtaButton location={`plano-${plan.id}`} message={plan.message} className="w-full sm:w-auto" />
      </div>
    </article>
  );
}

export function Pricing() {
  const { plans, maintenance } = pricing;

  return (
    <section id="precos" aria-labelledby="precos-title" className="scroll-mt-20 py-20 lg:py-28">
      <Container>
        <SectionHeading id="precos-title" eyebrow={pricing.eyebrow} title={pricing.title} intro={pricing.intro} />

        <LaunchOffer />

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:mt-6 lg:gap-6">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <p
          className="mt-5 rounded-card border border-line bg-canvas px-6 py-5 leading-relaxed text-muted sm:px-9 lg:mt-6"
        >
          <span className="font-semibold text-ink">
            {maintenance.name}: R$ {maintenance.price}/mês ou R$ {maintenance.annualPrice}/ano
          </span>{" "}
          — {maintenance.summary}{" "}
          <a href="#duvidas" className="font-medium text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-brand">
            Detalhes nas dúvidas
          </a>
        </p>
      </Container>
    </section>
  );
}
