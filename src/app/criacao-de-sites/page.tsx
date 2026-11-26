import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Pricing, Support } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Pains } from "@/components/sections/Pains";
import { JsonLd } from "@/components/sections/JsonLd";
import { projects, siteFaq, siteOffers, sitePains, formatPrice, whatsappMessages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/criacao-de-sites", "Criação de sites profissionais e institucionais · Philocode", `Página profissional a partir de R$ ${formatPrice(siteOffers[0].price)}, landing pages e sites institucionais. Design, desenvolvimento e publicação. Atendimento online para todo o Brasil.`);
export default function SitesPage() {
  return <>
    <Hero service="sites" title={{ before: "Um site profissional para você ser ", emphasis: "encontrado", after: "." }} subtitle="Página profissional, landing page ou site institucional, pronto para o celular e com um caminho direto para o seu WhatsApp." proof={[`${projects.items.length} sites de clientes no ar`, `A partir de R$ ${formatPrice(siteOffers[0].price)}`, "Publicado no seu domínio"]} />
    <Pains content={sitePains} />
    <Pricing /><Projects /><Process /><Support service="sites" /><Faq items={siteFaq} message={whatsappMessages.sites} /><Contact message={whatsappMessages.sites} /><JsonLd service="sites" />
  </>;
}
