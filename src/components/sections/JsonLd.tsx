import { SITE_URL, company, contact, pricing } from "@/content/site";

/** Dados estruturados apenas com informações confirmadas pelo cliente. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    legalName: company.legalName,
    slogan: company.slogan,
    description: "Criação de sites profissionais e institucionais para empresas e profissionais.",
    url: SITE_URL,
    logo: `${SITE_URL}/images/porto-logo.png`,
    telephone: `+${contact.whatsappDigits}`,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.state,
      addressCountry: "BR",
    },
    makesOffer: [
      ...pricing.plans.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} — ${plan.tagline}`,
        // schema.org espera o número sem separador de milhar ("1997", não "1.997")
        price: plan.price.replace(".", ""),
        priceCurrency: "BRL",
      })),
      ...pricing.extras.map((extra) => ({
        "@type": "Offer",
        name: extra.label,
        price: extra.price,
        priceCurrency: "BRL",
      })),
      {
        "@type": "Offer",
        name: pricing.maintenance.name,
        priceSpecification: [
          {
            "@type": "UnitPriceSpecification",
            price: pricing.maintenance.price,
            priceCurrency: "BRL",
            unitText: "mês",
          },
          {
            "@type": "UnitPriceSpecification",
            price: pricing.maintenance.annualPrice,
            priceCurrency: "BRL",
            unitText: "ano",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
