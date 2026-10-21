import { pricing } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Heading";
import { PricingBody } from "./PricingBody";

export function Pricing() {
  const { maintenance } = pricing;

  return (
    <section id="valores" aria-labelledby="valores-title" className="scroll-mt-20 py-12 md:py-20 lg:py-28">
      <Container>
        <SectionHeading id="valores-title" eyebrow={pricing.eyebrow} title={pricing.title} intro={pricing.intro} />

        <PricingBody />

        <p className="mt-5 rounded-card border border-line bg-canvas px-6 py-5 leading-relaxed text-muted sm:px-9 lg:mt-6">
          <span className="font-semibold text-ink">
            {maintenance.name}: R$ {maintenance.price}/mês ou R$ {maintenance.annualPrice}/ano
          </span>{" "}
          — {maintenance.summary}
        </p>
      </Container>
    </section>
  );
}
