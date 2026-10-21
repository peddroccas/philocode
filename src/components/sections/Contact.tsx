import { company, contact, contactSection } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { MailIcon, WhatsAppIcon } from "@/components/ui/Icons";

const cardClass =
  "flex min-h-20 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors";

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="scroll-mt-20 bg-linear-to-b from-graphite to-ink py-12 text-snow md:py-20 lg:py-28"
    >
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            id="contato-title"
            tone="dark"
            eyebrow={contactSection.eyebrow}
            title={contactSection.title}
            intro={contactSection.text}
          />
          <div>
            <CtaButton location="contato" className="mt-9 w-full sm:w-auto" />
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.9375rem] text-mist">
            {contactSection.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-[2px] bg-brand" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid gap-3">
          <li>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="contato-whatsapp"
              className={`${cardClass} hover:border-white/25 hover:bg-white/[0.07]`}
            >
              <WhatsAppIcon className="size-6 shrink-0 text-brand" />
              <span>
                <span className="block font-mono text-xs tracking-[0.08em] text-mist uppercase">WhatsApp e telefone</span>
                <span className="mt-0.5 block text-lg font-semibold">{contact.whatsappDisplay}</span>
              </span>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className={`${cardClass} hover:border-white/25 hover:bg-white/[0.07]`}>
              <MailIcon className="size-6 shrink-0 text-brand" />
              <span className="min-w-0">
                <span className="block font-mono text-xs tracking-[0.08em] text-mist uppercase">E-mail</span>
                <span className="mt-0.5 block text-lg font-semibold break-all">{contact.email}</span>
              </span>
            </a>
          </li>
          <li className="px-1 pt-1 text-sm text-mist">
            {company.legalName} · {company.city} ({company.state})
          </li>
        </ul>
      </Container>
    </section>
  );
}
