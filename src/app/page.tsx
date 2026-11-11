import { Hero } from "@/components/sections/Hero";
import { CodeVisual } from "@/components/sections/CodeVisual";
import { Products, CustomSoftware } from "@/components/sections/ServicePanels";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/sections/JsonLd";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/", "PhiloCode · Desenvolvimento de software", "Desenvolvimento de software: criação de sites, desenvolvimento Shopify, sistema de gestão da catequese e projetos sob medida. Atendimento online para todo o Brasil, direto de Brasília.");
export default function Home() {
  return <>
    <Hero eyebrow="PhiloCode · Desenvolvimento de software" title={{ before: "Software que faz o seu negócio ", emphasis: "andar", after: "." }} subtitle="Criamos sites, desenvolvemos lojas Shopify e oferecemos um sistema de gestão para paróquias. Quando você precisa de algo diferente, construímos sob medida."><CodeVisual /></Hero>
    <Products /><Projects /><Process /><CustomSoftware /><Faq /><Contact /><JsonLd />
  </>;
}
