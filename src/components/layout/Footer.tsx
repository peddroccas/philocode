import Image from "next/image";
import { company, contact, nav } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { PixelSteps } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-night text-mist">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/images/philocode-logo-escuro.png"
              alt={company.name}
              width={427}
              height={137}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-xs text-lg text-snow">{company.slogan}</p>
            <p className="mt-2 text-[0.9375rem]">{company.summary}</p>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="font-mono text-xs tracking-[0.08em] text-snow uppercase">Navegação</h2>
            <ul className="mt-4 grid gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-flex min-h-10 items-center hover:text-snow">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs tracking-[0.08em] text-snow uppercase">Contato</h2>
            <ul className="mt-4 grid gap-1">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="rodape"
                  className="inline-flex min-h-10 items-center hover:text-snow"
                >
                  WhatsApp {contact.whatsappDisplay}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
              <li>
                <a href={`tel:+${contact.whatsappDigits}`} className="inline-flex min-h-10 items-center hover:text-snow">
                  Telefone {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="inline-flex min-h-10 items-center break-all hover:text-snow">
                  {contact.email}
                </a>
              </li>
              <li className="pt-1 text-[0.9375rem]">{company.city} ({company.state})</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            {company.legalName} · CNPJ {company.cnpj}
          </p>
          <PixelSteps className="h-4 w-16 text-white/20" />
        </div>
      </Container>
    </footer>
  );
}
