import { Hero } from "@/components/sections/Hero";
import { CatequeseVisual, CatequeseScreens, CatequeseFeatures, CatequeseAccess, CatequesePricing } from "@/components/sections/Catequese";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/sections/JsonLd";
import { catequese, catequeseCtaLabel, catequeseFaq, formatPrice, whatsappMessages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("/sistema-catequese", "Sistema de gestão da catequese · PhiloCode", `Inscrição online, turmas, chamadas, catequistas e carnê da catequese em um só sistema. Implantação de R$ ${formatPrice(catequese.pricing.setup)} e mensalidade de R$ ${formatPrice(catequese.pricing.monthly)}.`);
export default function CatequesePage() {
  return <>
    <Hero service="catequese" eyebrow="Sistema online para paróquias" title={{ before: "A catequese da sua paróquia, ", emphasis: "organizada", after: "." }} subtitle={`Inscrições online, turmas, chamadas, catequistas e carnê em um só sistema, direto no navegador, por assinatura. Implantação de R$ ${formatPrice(catequese.pricing.setup)} e mensalidade de R$ ${formatPrice(catequese.pricing.monthly)}.`}><CatequeseVisual /></Hero>
    <CatequeseScreens /><CatequeseFeatures /><CatequeseAccess /><CatequesePricing /><Faq items={catequeseFaq} message={whatsappMessages.catequese} label={catequeseCtaLabel} /><Contact message={whatsappMessages.catequese} label={catequeseCtaLabel} /><JsonLd service="catequese" />
  </>;
}
