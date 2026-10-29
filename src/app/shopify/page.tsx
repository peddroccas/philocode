import { Hero } from "@/components/sections/Hero";
import { ThemeVisual } from "@/components/sections/ServicePanels";
import { ShopifyDetails } from "@/components/sections/ShopifyDetails";
import { Pricing, Support } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/sections/JsonLd";
import { shopifyFaq, shopifyOffers, formatPrice, whatsappMessages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/shopify", "Desenvolvimento e personalização Shopify · PhiloCode", `Temas, seções Liquid, páginas de produto e landing pages Shopify. Ajustes desde R$ ${formatPrice(shopifyOffers[0].price)}. Implementação de layouts para lojas e agências.`);
export default function ShopifyPage() {
  return <>
    <Hero service="shopify" eyebrow="Desenvolvimento Shopify" title={{ before: "Desenvolvimento Shopify para sua loja ", emphasis: "ir além", after: "." }} subtitle="Personalização de temas, páginas e seções para criar e evoluir sua loja Shopify. Atendimento direto para lojistas e agências."><ThemeVisual /></Hero>
    <ShopifyDetails /><Pricing service="shopify" /><Support service="shopify" /><Faq items={shopifyFaq} message={whatsappMessages.shopify} /><Contact message={whatsappMessages.shopify} /><JsonLd service="shopify" />
  </>;
}
