import { company, contact, contactSection, whatsappMessages } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";

/** Fechamento de toda página: o convite, e o telefone e o e-mail em tipo grande. */
export function Contact({ message = whatsappMessages.default, label }: { message?: string; label?: string }) {
  return (
    <section id="contato" aria-labelledby="contato-title" className="scroll-mt-20 bg-night-2 py-[var(--section-gap)] text-snow">
      <Container className="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-6">
          <SectionHeading id="contato-title" tone="dark" title={contactSection.title} intro={contactSection.text} />
          <CtaButton tone="dark" location="contato" message={message} label={label} className="mt-10 w-full sm:w-auto" />
        </div>

        <div className="grid gap-10 border-t border-night-line pt-10 lg:col-span-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
        <dl className="grid gap-10">
          <div>
            <dt className="text-sm text-mist">WhatsApp</dt>
            <dd className="mt-2">
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="contato-whatsapp"
                className="font-display text-[1.75rem] font-semibold tracking-tight whitespace-nowrap text-snow underline decoration-night-line decoration-2 underline-offset-8 hover:decoration-snow"
              >
                {contact.whatsappDisplay}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-mist">E-mail</dt>
            <dd className="mt-2">
              <a
                href={`mailto:${contact.email}`}
                className="text-lg font-semibold break-all text-snow underline sm:text-title decoration-night-line decoration-2 underline-offset-8 hover:decoration-snow"
              >
                {contact.email}
              </a>
            </dd>
          </div>
        </dl>
          <div className="text-[0.9375rem] text-mist">
            <p>{company.legalName}, {company.city} ({company.state})</p>
            {contactSection.facts.slice(1).map((fact) => (
              <p key={fact}>{fact}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
