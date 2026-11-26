import { Hero } from "@/components/sections/Hero";
import { Products, CustomSoftware } from "@/components/sections/ServicePanels";
import { Projects } from "@/components/sections/Projects";
import { Pains } from "@/components/sections/Pains";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/sections/JsonLd";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/", "Philocode · Desenvolvimento de software", "Desenvolvimento de software: criação de sites, desenvolvimento Shopify, o Catequese Hub (gestão da catequese) e projetos sob medida. Atendimento online para todo o Brasil, direto de Brasília.");
export default function Home() {
  return <>
    <Hero
      title={{ before: "Sites, lojas Shopify e sistemas que fazem o seu negócio ", emphasis: "andar", after: "." }}
      subtitle="Um site feito para receber contatos, uma loja do jeito que você imaginou ou um sistema que tira a operação das planilhas."
      proof={["Feito para o celular", "Pronto para aparecer no Google", "Nada vai ao ar sem o seu ok"]}
    />
    <Pains />
    <Products /><Projects /><Process /><CustomSoftware /><Faq /><Contact /><JsonLd />
  </>;
}
