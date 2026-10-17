import { services } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaLink } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { PixelSteps } from "@/components/ui/Icons";
import { reveal } from "@/lib/reveal";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="scroll-mt-20 py-20 lg:py-28">
      <Container>
        <SectionHeading id="servicos-title" eyebrow={services.eyebrow} title={services.title} intro={services.intro} />

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
          {services.items.map((item, index) => (
            <li
              key={item.id}
              {...reveal("up", index)}
              className="relative flex flex-col overflow-hidden rounded-card border border-line bg-surface p-7 shadow-card sm:p-9"
            >
              <PixelSteps
                {...reveal("draw", index + 3)}
                className="absolute top-7 right-7 h-4 w-14 text-line sm:top-9 sm:right-9" />
              <span className="font-mono text-xs text-muted">0{index + 1}</span>
              <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-muted">
                <span className="font-semibold text-ink">Para quem: </span>
                {item.forWho}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted">{item.description}</p>

              <div className="mt-6 border-t border-line pt-5">
                <p className="font-mono text-xs tracking-[0.08em] text-muted uppercase">{item.detailLabel}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="rounded-full bg-canvas px-3 py-1 text-sm text-ink ring-1 ring-line">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-7">
                <CtaLink location={`servico-${item.id}`} message={item.message}>
                  {item.ctaLabel}
                </CtaLink>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
