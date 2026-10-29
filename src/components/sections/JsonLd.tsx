import { SITE_URL, company, contact, siteOffers, shopifyOffers, support, type Service } from "@/content/site";
export function JsonLd({ service }: { service?: Service }) {
  const path = service === "sites" ? "/criacao-de-sites" : service === "shopify" ? "/shopify" : "/";
  const catalog = service ? [...(service === "sites" ? siteOffers : shopifyOffers), ...support[service]] : [];
  const data = {
    "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${SITE_URL}/#empresa`,
    name: company.name, description: company.summary, url: `${SITE_URL}${path}`, logo: `${SITE_URL}/images/philocode-logo.png`,
    telephone: `+${contact.whatsappDigits}`, email: contact.email,
    address: { "@type": "PostalAddress", addressLocality: company.city, addressRegion: company.state, addressCountry: "BR" },
    areaServed: { "@type": "Country", name: "Brasil" },
    ...(catalog.length ? { hasOfferCatalog: { "@type": "OfferCatalog", name: service === "sites" ? "Criação de sites" : "Desenvolvimento Shopify", itemListElement: catalog.map(offer => ({
      "@type": "Offer", name: offer.name, url: `${SITE_URL}${path}#valores`, description: `${offer.summary} Valor inicial; escopo confirmado na proposta.`,
      priceSpecification: { "@type": "UnitPriceSpecification", minPrice: offer.price, priceCurrency: "BRL", ...(offer.unit ? { unitText: offer.unit === "/h" ? "hora" : "mês" } : {}) },
      itemOffered: { "@type": "Service", name: offer.name },
    })) } } : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }} />;
}
