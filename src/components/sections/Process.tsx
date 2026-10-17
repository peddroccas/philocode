import { howItWorks, whatsappMessages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { reveal } from "@/lib/reveal";

/** Desktop: seis degraus que sobem, como a base da âncora. Mobile/tablet: lista com linha guia. */
const stepOffsets = ["lg:mt-40", "lg:mt-32", "lg:mt-24", "lg:mt-16", "lg:mt-8", "lg:mt-0"];

export function Process() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="scroll-mt-20 border-y border-line bg-surface/60 py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="como-funciona-title"
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          intro={howItWorks.intro}
        />

        <ol className="mt-12 grid gap-0 lg:mt-2 lg:grid-cols-6">
          {howItWorks.steps.map((step, index) => (
            <li
              key={step.title}
              {...reveal("up", index)}
              className={`relative border-l-2 border-ink/15 pb-9 pl-8 last:pb-0 lg:border-t-2 lg:pt-6 lg:pr-4 lg:pb-0 lg:pl-5 ${stepOffsets[index]}`}
            >
              <span
                {...reveal("pop", index + 2)}
                aria-hidden
                className="absolute top-0 -left-[7px] size-3 rounded-[3px] bg-brand lg:-top-[7px]"
              />
              <span className="font-mono text-xs tracking-[0.08em] text-muted">PASSO 0{index + 1}</span>
              <h3 className="mt-2 text-xl leading-snug font-semibold tracking-tight text-ink lg:text-lg">
                {step.title}
                {step.highlight && (
                  <>
                    {" "}
                    <em className="emphasis-underline font-serif font-normal tracking-normal whitespace-nowrap">
                      {step.highlight}
                    </em>
                  </>
                )}
              </h3>
              <p className="mt-2 leading-relaxed text-muted lg:text-[0.9375rem]">{step.text}</p>
            </li>
          ))}
        </ol>

        <div
          {...reveal("up", 0)}
          className="mt-14 flex flex-col gap-4 rounded-card border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <p className="text-lg font-medium text-ink">O primeiro passo é uma conversa.</p>
          <CtaButton location="processo" message={whatsappMessages.process} className="w-full sm:w-auto" />
        </div>
      </Container>
    </section>
  );
}
