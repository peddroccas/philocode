import { homeFaq, whatsappMessages, type FaqItem } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { PlusIcon } from "@/components/ui/Icons";
import { reveal } from "@/lib/reveal";

/** Perguntas em linhas separadas por fios: o título fica ao lado, fixo enquanto a lista rola. */
export function Faq({ items = homeFaq, message = whatsappMessages.faq, label }: { items?: FaqItem[]; message?: string; label?: string }) {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="scroll-mt-20 border-t border-line bg-surface py-[var(--section-gap)]">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div {...reveal("up")} className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 id="duvidas-title" className="text-section text-ink">
            Perguntas frequentes.
          </h2>
          <h3 className="mt-10 text-title text-ink">Ainda tem dúvidas?</h3>
          <p className="mt-2 text-muted">Converse com a gente pelo WhatsApp.</p>
          <CtaButton location="duvidas" message={message} label={label} className="mt-6 w-full sm:w-auto" />
        </div>

        <div className="border-t border-ink lg:col-span-7 lg:col-start-6">
          {items.map((item) => (
            <details key={item.question} data-faq={item.question} className="group border-b border-line">
              <summary className="flex min-h-20 list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-ink">
                {item.question}
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full ring-1 ring-line transition-colors group-open:bg-ink group-open:text-snow group-open:ring-ink">
                  <PlusIcon className="size-4.5 motion-safe:transition-transform group-open:rotate-45" />
                </span>
              </summary>
              <p className="max-w-[62ch] pr-14 pb-7 text-[1.0625rem] leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
