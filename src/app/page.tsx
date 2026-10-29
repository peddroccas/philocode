import { Hero } from "@/components/sections/Hero";
import { HomeVisual, Services } from "@/components/sections/ServicePanels";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/sections/JsonLd";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/", "PhiloCode · Sites profissionais e desenvolvimento Shopify", "Sites para profissionais e empresas, personalização de temas e desenvolvimento Shopify. Atendimento online para todo o Brasil, direto de Brasília.");
export default function Home() {
  return <>
    <Hero eyebrow="PhiloCode · Sites e Shopify" title={{ before: "Sites profissionais e Shopify para seu negócio ", emphasis: "ir além", after: "." }} subtitle="Criamos sites para apresentar seu trabalho e desenvolvemos páginas e personalizações Shopify para evoluir sua loja."><HomeVisual /></Hero>
    <Services /><Projects /><Process /><Faq /><Contact /><JsonLd />
  </>;
}
