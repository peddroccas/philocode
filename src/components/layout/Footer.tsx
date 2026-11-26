import Link from "next/link";
import { company, contact, nav } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

/** Colofão: a marca, um parágrafo com quem somos e como falar, e os links do site. */
export function Footer() {
  return (
    <footer className="border-t border-night-line bg-night text-mist">
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-5">
          <Logo className="text-3xl text-snow" />
          <p className="mt-6 text-lead text-snow">{company.slogan}</p>
        </div>

        <div className="lg:col-span-7">
          <p className="max-w-[60ch] text-[0.9375rem] leading-relaxed">
            {company.summary} {company.legalName}, {company.city} ({company.state}). Fale pelo{" "}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="rodape"
              className="whitespace-nowrap text-snow underline decoration-night-line underline-offset-4 hover:decoration-snow"
            >
              WhatsApp {contact.whatsappDisplay}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>{" "}
            ou pelo e-mail{" "}
            <a href={`mailto:${contact.email}`} className="text-snow underline decoration-night-line underline-offset-4 hover:decoration-snow">
              {contact.email}
            </a>
            .
          </p>

          <nav aria-label="Rodapé" className="mt-10">
            <h2 className="sr-only">Navegação</h2>
            <ul className="flex flex-wrap gap-x-8 gap-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-snow">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-10 border-t border-night-line pt-6 text-sm">
            © {company.legalName}
            {company.cnpj ? `, CNPJ ${company.cnpj}` : ""}
          </p>
        </div>
      </Container>
    </footer>
  );
}
