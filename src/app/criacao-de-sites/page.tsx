import { SitesHero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { SitesBento, Support } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/sections/JsonLd";
import { projects, siteFaq, siteOffers, formatPrice, whatsappMessages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/criacao-de-sites", "Criação de sites profissionais e institucionais · Philocode", `Página profissional a partir de R$ ${formatPrice(siteOffers[0].price)}, landing pages e sites institucionais. Design, desenvolvimento e publicação. Atendimento online para todo o Brasil.`);
export default function SitesPage() {
  return <>
    <SitesHero service="sites" title={{ before: "Um site profissional para você ser ", emphasis: "encontrado", after: "." }} subtitle="Página profissional, landing page ou site institucional, pronto para o celular e com um caminho direto para o seu WhatsApp." proof={[`${projects.items.length} sites de clientes no ar`, "Publicado no seu domínio"]} />
    <SitesBento /><Projects variant="bento" /><Process variant="rows" /><Support service="sites" /><Faq items={siteFaq} message={whatsappMessages.sites} /><Contact message={whatsappMessages.sites} /><JsonLd service="sites" />
  </>;
}
