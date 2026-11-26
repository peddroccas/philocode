import Link from "next/link";
import { company, contact, nav } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night text-mist">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="md:col-span-2 lg:col-span-1">
<Logo className="text-3xl text-snow" />
            <p className="mt-5 max-w-xs text-lg text-snow">{company.slogan}</p>
            <p className="mt-2 text-[0.9375rem]">{company.summary}</p>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="text-sm font-semibold text-snow">Navegação</h2>
            <ul className="mt-4 grid gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-10 items-center hover:text-snow">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-snow">Contato</h2>
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
            © {company.legalName}{company.cnpj ? `, CNPJ ${company.cnpj}` : ""}
          </p>
        </div>
      </Container>
    </footer>
  );
}
