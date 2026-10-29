import { howItWorks, whatsappMessages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";

/** Desktop: três degraus que sobem, como a base da âncora. Mobile/tablet: lista com linha guia. */
const stepOffsets = ["", "", "", ""];

export function Process() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="scroll-mt-20 border-y border-line bg-surface/60 py-12 md:py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="como-funciona-title"
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
        />

        <ol className="mt-8 grid gap-0 md:mt-12 lg:mt-12 lg:grid-cols-4">
          {howItWorks.steps.map((step, index) => (
            <li
              key={step.title}
              className={`relative border-l-2 border-ink/15 pb-9 pl-8 last:pb-0 lg:border-t-2 lg:pt-7 lg:pr-10 lg:pb-0 lg:pl-6 ${stepOffsets[index]}`}
            >
              <span
                aria-hidden
                className="absolute top-0 -left-[7px] size-3 rounded-[3px] bg-brand lg:-top-[7px]"
              />
              <span className="font-mono text-xs tracking-[0.08em] text-muted">PASSO 0{index + 1}</span>
              <h3 className="mt-2 text-xl leading-snug font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <div
          className="mt-10 flex flex-col gap-4 rounded-card border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7 md:mt-14"
        >
          <p className="text-lg font-medium text-ink">O primeiro passo é uma conversa.</p>
          <CtaButton location="processo" message={whatsappMessages.process} className="w-full sm:w-auto" />
        </div>
      </Container>
    </section>
  );
}
