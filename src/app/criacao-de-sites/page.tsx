import { Hero } from "@/components/sections/Hero";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Pricing, Support } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/sections/JsonLd";
import { siteFaq, siteOffers, projects, formatPrice, whatsappMessages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/criacao-de-sites", "Criação de sites profissionais e institucionais · PhiloCode", `Página profissional a partir de R$ ${formatPrice(siteOffers[0].price)}, landing pages e sites institucionais. Design, desenvolvimento e publicação. Atendimento online para todo o Brasil.`);
export default function SitesPage() {
  const project = projects.items[0];
  return <>
    <Hero service="sites" eyebrow="Criação de sites" title={{ before: "Seu trabalho merece um site à ", emphasis: "sua altura", after: "." }} subtitle="Sites claros e bem acabados para profissionais e empresas apresentarem seus serviços e facilitarem novos contatos.">
      <div className="min-w-0"><BrowserFrame src={project.image} alt={project.alt} domain={project.domain} sizes="(min-width: 1024px) 42vw, 90vw" /><p className="mt-4 text-sm text-mist">Projeto real · {project.name} · Advocacia</p></div>
    </Hero>
    <Pricing /><Projects /><Process /><Support service="sites" /><Faq items={siteFaq} message={whatsappMessages.sites} /><Contact message={whatsappMessages.sites} /><JsonLd service="sites" />
  </>;
}
