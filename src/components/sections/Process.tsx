import { howItWorks, whatsappMessages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { reveal } from "@/lib/reveal";

/**
 * Como funciona. "steps": quatro etapas lado a lado numa lista numerada de verdade (Início).
 * "rows": as mesmas etapas em linhas largas, título à esquerda e texto à direita (Sites).
 */
export function Process({ variant = "steps" }: { variant?: "steps" | "rows" }) {
  const title = `${howItWorks.title.before}${howItWorks.title.emphasis}${howItWorks.title.after ?? ""}`;
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-title" className="scroll-mt-20 bg-canvas py-[var(--section-gap-s)]">
      <Container>
        <h2 id="como-funciona-title" {...reveal("up")} className="text-section text-ink">
          {title}
        </h2>

        {variant === "steps" ? (
          <ol className="mt-[var(--space-2xl)] grid gap-10 [counter-reset:step] sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {howItWorks.steps.map((step, index) => (
              <li
                key={step.title}
                {...reveal("up", index)}
                className="border-t-2 border-ink pt-6 [counter-increment:step] before:block before:font-display before:text-section before:leading-none before:font-semibold before:text-line before:content-[counter(step)]"
              >
                <h3 className="mt-6 text-title text-ink">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        ) : (
          <ol className="mt-[var(--space-2xl)] border-t border-ink [counter-reset:step]">
            {howItWorks.steps.map((step) => (
              <li
                key={step.title}
                className="grid gap-3 border-b border-line py-8 [counter-increment:step] before:text-sm before:font-medium before:text-muted before:content-['Etapa_'_counter(step)] lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:before:col-span-2"
              >
                <h3 className="text-title text-ink lg:col-span-4">{step.title}</h3>
                <p className="max-w-[56ch] text-lead text-muted lg:col-span-6">{step.text}</p>
              </li>
            ))}
          </ol>
        )}

        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lead font-medium text-ink">O primeiro passo é só uma conversa, sem compromisso.</p>
          <CtaButton location="processo" message={whatsappMessages.process} className="w-full sm:w-auto" />
        </div>
      </Container>
    </section>
  );
}
