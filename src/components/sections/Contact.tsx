import { company, contact, contactSection, whatsappMessages } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/Heading";
import { MailIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { AnchorSymbol } from "@/components/ui/Logo";

const cardClass =
  "flex min-h-20 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors";

export function Contact({ message = whatsappMessages.default, label }: { message?: string; label?: string }) {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative isolate scroll-mt-20 overflow-hidden bg-night py-12 text-snow md:py-20 lg:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute -right-24 -bottom-32 -z-10 size-[34rem] text-white/[0.045] lg:right-[-4rem]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full fill-none stroke-current motion-safe:animate-[spin-slow_120s_linear_infinite]" strokeWidth="0.25" strokeDasharray="0.6 2.4">
          <circle cx="50" cy="50" r="49" />
        </svg>
        <AnchorSymbol className="absolute inset-[22%] size-[56%]" />
      </div>
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
            <CtaButton tone="dark" location="contato" message={message} label={label} className="mt-9 w-full sm:w-auto" />
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.9375rem] text-mist">
            {contactSection.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-[2px] bg-snow" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid gap-3">
          <li>
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="contato-whatsapp"
              className={`${cardClass} hover:border-white/25 hover:bg-white/[0.07]`}
            >
              <WhatsAppIcon className="size-6 shrink-0 text-snow" />
              <span>
                <span className="block font-mono text-xs tracking-[0.08em] text-mist uppercase">WhatsApp</span>
                <span className="mt-0.5 block text-lg font-semibold">{contact.whatsappDisplay}</span>
              </span>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className={`${cardClass} hover:border-white/25 hover:bg-white/[0.07]`}>
              <MailIcon className="size-6 shrink-0 text-snow" />
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
