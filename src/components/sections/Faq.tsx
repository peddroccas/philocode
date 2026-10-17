import { faq, whatsappMessages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { PlusIcon } from "@/components/ui/Icons";
import { reveal } from "@/lib/reveal";

export function Faq() {
  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-title"
      className="scroll-mt-20 border-t border-line bg-surface/60 py-20 lg:py-28"
    >
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div className="contents lg:block">
          <SectionHeading id="duvidas-title" eyebrow={faq.eyebrow} title={faq.title} />

          <aside
            {...reveal("up", 2)}
            className="order-last rounded-card border border-line bg-surface p-7 shadow-card lg:sticky lg:top-28 lg:mt-10">
            <h3 className="text-xl font-semibold tracking-tight text-ink">{faq.helpTitle}</h3>
            <p className="mt-2 leading-relaxed text-muted">{faq.helpText}</p>
            <CtaButton location="duvidas" message={whatsappMessages.faq} className="mt-6 w-full" />
          </aside>
        </div>

        <div className="grid content-start gap-3">
          {faq.items.map((item, index) => (
            <details
              key={item.question}
              {...reveal("up", index)}
              className="group rounded-2xl border border-line bg-surface transition-colors open:border-l-4 open:border-l-brand open:shadow-card"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 rounded-2xl px-6 py-4 text-lg font-semibold text-ink">
                {item.question}
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-canvas ring-1 ring-line group-open:bg-ink group-open:text-canvas group-open:ring-ink">
                  <PlusIcon className="size-4.5 motion-safe:transition-transform group-open:rotate-45" />
                </span>
              </summary>
              <p className="max-w-2xl px-6 pb-6 text-[1.0625rem] leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
