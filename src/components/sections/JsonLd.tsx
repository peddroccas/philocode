import { SITE_URL, company, contact, siteOffers, shopifyOffers, support, catequese, type Offer, type Service } from "@/content/site";

const catequeseOffers: Offer[] = [
  { id: "implantacao", name: "Implantação do sistema de catequese", price: catequese.pricing.setup, summary: "Sistema pronto para a paróquia começar a usar.", includes: catequese.pricing.setupIncludes },
  { id: "mensalidade", name: "Mensalidade do sistema de catequese", price: catequese.pricing.monthly, unit: "/mês", summary: "Hospedagem, backups, atualizações e suporte.", includes: catequese.pricing.monthlyIncludes },
  { id: "anual", name: "Sistema de catequese à vista por 12 meses", price: catequese.pricing.annual, unit: "/ano", summary: "12 meses de uso pelo preço de 10 mensalidades.", includes: catequese.pricing.monthlyIncludes },
];
const offersByService: Record<Service, { name: string; path: string; offers: Offer[]; fixed?: boolean }> = {
  sites: { name: "Criação de sites", path: "/criacao-de-sites", offers: [...siteOffers, ...support.sites] },
  shopify: { name: "Desenvolvimento Shopify", path: "/shopify", offers: [...shopifyOffers, ...support.shopify] },
  catequese: { name: "Sistema de gestão da catequese", path: "/sistema-catequese", offers: catequeseOffers, fixed: true },
};
export function JsonLd({ service }: { service?: Service }) {
  const current = service ? offersByService[service] : undefined;
  const path = current?.path ?? "/";
  const data = {
    "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${SITE_URL}/#empresa`,
    name: company.name, description: company.summary, url: `${SITE_URL}${path}`, logo: `${SITE_URL}/images/philocode-logo.png`,
    telephone: `+${contact.whatsappDigits}`, email: contact.email,
    address: { "@type": "PostalAddress", addressLocality: company.city, addressRegion: company.state, addressCountry: "BR" },
    areaServed: { "@type": "Country", name: "Brasil" },
    ...(current ? { hasOfferCatalog: { "@type": "OfferCatalog", name: current.name, itemListElement: current.offers.map(offer => ({
      "@type": "Offer", name: offer.name, url: `${SITE_URL}${path}#valores`, description: current.fixed ? offer.summary : `${offer.summary} Valor inicial; escopo confirmado na proposta.`,
      priceSpecification: { "@type": "UnitPriceSpecification", [current.fixed ? "price" : "minPrice"]: offer.price, priceCurrency: "BRL", ...(offer.unit ? { unitText: offer.unit === "/h" ? "hora" : offer.unit === "/ano" ? "ano" : "mês" } : {}) },
      itemOffered: { "@type": "Service", name: offer.name },
    })) } } : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "<") }} />;
}
