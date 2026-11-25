import { Hero } from "@/components/sections/Hero";
import { CatequeseVisual, CatequeseScreens, CatequeseFeatures, CatequeseAccess, CatequesePricing } from "@/components/sections/Catequese";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Pains } from "@/components/sections/Pains";
import { JsonLd } from "@/components/sections/JsonLd";
import { catequese, catequeseCtaLabel, catequeseFaq, catequesePains, formatPrice, whatsappMessages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/sistema-catequese", "Catequese Hub · Sistema de gestão da catequese · Philocode", `Catequese Hub: inscrição online, turmas, chamadas, catequistas e carnê da catequese em um só sistema. Mensalidade de R$ ${formatPrice(catequese.pricing.monthly)}.`);
export default function CatequesePage() {
  return <>
    <Hero service="catequese" eyebrow="Catequese Hub · Sistema online para paróquias" title={{ before: "A catequese da sua paróquia, ", emphasis: "organizada", after: "." }} subtitle="Chega de fichas de papel, planilhas e listas no WhatsApp. Inscrições online, turmas, chamadas, catequistas e carnê em um só sistema, direto no navegador." proof={[`R$ ${formatPrice(catequese.pricing.monthly)}/mês`, "Funciona no celular e no computador", "Suporte para coordenação e catequistas"]}><CatequeseVisual /></Hero>
    <Pains content={catequesePains} />
    <CatequeseScreens /><CatequeseFeatures /><CatequeseAccess /><CatequesePricing /><Faq items={catequeseFaq} message={whatsappMessages.catequese} label={catequeseCtaLabel} /><Contact message={whatsappMessages.catequese} label={catequeseCtaLabel} /><JsonLd service="catequese" />
  </>;
}
