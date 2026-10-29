import { Hero } from "@/components/sections/Hero";
import { SiteVisual } from "@/components/sections/ServicePanels";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Pricing, Support } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/sections/JsonLd";
import { siteFaq, siteOffers, formatPrice, whatsappMessages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/criacao-de-sites", "Criação de sites profissionais e institucionais · PhiloCode", `Página profissional a partir de R$ ${formatPrice(siteOffers[0].price)}, landing pages e sites institucionais. Design, desenvolvimento e publicação. Atendimento online para todo o Brasil.`);
export default function SitesPage() {
  return <>
    <Hero service="sites" eyebrow="Criação de sites" title={{ before: "Sites profissionais, feitos à ", emphasis: "sua altura", after: "." }} subtitle="Sites claros e bem acabados para profissionais e empresas apresentarem seus serviços e facilitarem novos contatos.">
      <SiteVisual />
    </Hero>
    <Pricing /><Projects /><Process /><Support service="sites" /><Faq items={siteFaq} message={whatsappMessages.sites} /><Contact message={whatsappMessages.sites} /><JsonLd service="sites" />
  </>;
}
