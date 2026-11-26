import { ShopifyHero } from "@/components/sections/Hero";
import { ShopifyDetails } from "@/components/sections/ShopifyDetails";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/sections/JsonLd";
import { shopifyFaq, shopifyOffers, formatPrice, whatsappMessages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/shopify", "Desenvolvimento e personalização Shopify · Philocode", `Temas, seções Liquid, páginas de produto e landing pages Shopify. Ajustes desde R$ ${formatPrice(shopifyOffers[0].price)}. Implementação de layouts para lojas e agências.`);
export default function ShopifyPage() {
  return <>
    <ShopifyHero service="shopify" title={{ before: "Sua loja Shopify do seu jeito, ", emphasis: "sem brigar com o tema", after: "." }} subtitle="Seções em Liquid, páginas de produto, landing pages e ajustes para lojistas e agências que querem ir além do tema." proof={[`Ajustes a partir de R$ ${formatPrice(shopifyOffers[0].price)}`, "Seções editáveis no tema", "Atendimento direto, sem intermediários"]} />
    <ShopifyDetails /><Faq items={shopifyFaq} message={whatsappMessages.shopify} /><Contact message={whatsappMessages.shopify} /><JsonLd service="shopify" />
  </>;
}
