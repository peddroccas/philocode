import { Hero } from "@/components/sections/Hero";
import { ThemeVisual } from "@/components/sections/ServicePanels";
import { ShopifyDetails } from "@/components/sections/ShopifyDetails";
import { Pricing, Support } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Pains } from "@/components/sections/Pains";
import { JsonLd } from "@/components/sections/JsonLd";
import { shopifyFaq, shopifyOffers, shopifyPains, formatPrice, whatsappMessages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/shopify", "Desenvolvimento e personalização Shopify · Philocode", `Temas, seções Liquid, páginas de produto e landing pages Shopify. Ajustes desde R$ ${formatPrice(shopifyOffers[0].price)}. Implementação de layouts para lojas e agências.`);
export default function ShopifyPage() {
  return <>
    <Hero service="shopify" eyebrow="Desenvolvimento Shopify" title={{ before: "Sua loja Shopify do seu jeito, ", emphasis: "sem brigar com o tema", after: "." }} subtitle="Seções em Liquid, páginas de produto, landing pages e ajustes para lojistas e agências que querem ir além do tema." proof={[`Ajustes a partir de R$ ${formatPrice(shopifyOffers[0].price)}`, "Seções editáveis no tema", "Atendimento direto, sem intermediários"]}><ThemeVisual /></Hero>
    <Pains content={shopifyPains} />
    <ShopifyDetails /><Pricing service="shopify" /><Support service="shopify" /><Faq items={shopifyFaq} message={whatsappMessages.shopify} /><Contact message={whatsappMessages.shopify} /><JsonLd service="shopify" />
  </>;
}
