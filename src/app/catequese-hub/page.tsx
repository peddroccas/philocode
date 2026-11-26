import { CatequeseHero } from "@/components/sections/Hero";
import { CatequeseScreens, CatequeseFeatures, CatequesePricing } from "@/components/sections/Catequese";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/sections/JsonLd";
import { catequese, catequeseCtaLabel, catequeseFaq, formatPrice, whatsappMessages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/catequese-hub", "Catequese Hub · Sistema online para catequeses · Philocode", `Catequese Hub: inscrição online, turmas, chamadas, catequistas e carnê da catequese em um só sistema. Mensalidade de R$ ${formatPrice(catequese.pricing.monthly)}.`);
export default function CatequesePage() {
  return <>
    <CatequeseHero service="catequese" title={{ before: "A catequese da sua paróquia, ", emphasis: "organizada", after: "." }} subtitle="Chega de fichas de papel, planilhas e listas no WhatsApp. O Catequese Hub reúne inscrições online, turmas, chamadas, catequistas e carnê em um só sistema, direto no navegador." proof={[`R$ ${formatPrice(catequese.pricing.monthly)}/mês`, "Funciona no celular e no computador", "Suporte para coordenação e catequistas"]} />
    <CatequeseScreens /><CatequeseFeatures /><CatequesePricing /><Faq items={catequeseFaq} message={whatsappMessages.catequese} label={catequeseCtaLabel} /><Contact message={whatsappMessages.catequese} label={catequeseCtaLabel} /><JsonLd service="catequese" />
  </>;
}
