/** Conteúdo e catálogo aprovados em 29/10/2026. Preços iniciais para novos projetos. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://philocode.vercel.app").replace(/\/$/, "");
export type Emphasis = { before: string; emphasis: string; after?: string };
export type Service = "sites" | "shopify";
export type FaqItem = { question: string; answer: string };
export type Offer = { id: string; name: string; price: number; unit?: string; summary: string; includes: string[]; featured?: boolean };
export const company = {
  name: "PhiloCode", legalName: "PhiloCode", cnpj: "",
  slogan: "Seu negócio merece uma boa presença digital.", city: "Brasília", state: "DF",
  summary: "Sites profissionais e desenvolvimento Shopify. Atendimento online para todo o Brasil.",
};
export const contact = {
  whatsappDigits: "5561999016604", whatsappDisplay: "(61) 99901-6604", email: "pedroabernardes11@gmail.com",
  instagram: null as string | null, linkedin: null as string | null,
};
export const primaryCta = { label: "Solicitar orçamento" };
export const whatsappMessages = {
  default: "Olá! Vim pelo site da PhiloCode e gostaria de conversar sobre meu projeto. Meu negócio é: ",
  sites: "Olá! Gostaria de um orçamento para criar um site com a PhiloCode. Meu negócio é: ",
  shopify: "Olá! Preciso de desenvolvimento ou personalização na Shopify. O endereço da minha loja é: ",
  agency: "Olá! Tenho uma agência e gostaria de conversar sobre uma parceria de desenvolvimento Shopify. Minha demanda é: ",
  process: "Olá! Gostaria de conversar sobre um projeto com a PhiloCode. Minha ideia é: ",
  faq: "Olá! Tenho uma dúvida sobre os serviços da PhiloCode: ",
};
export const nav = [
  { label: "Início", href: "/" }, { label: "Criação de sites", href: "/criacao-de-sites" },
  { label: "Shopify", href: "/shopify" }, { label: "Projetos", href: "/#projetos" }, { label: "Contato", href: "/#contato" },
];
export const formatPrice = (value: number) => value.toLocaleString("pt-BR");
export function offerMessage(offer: Offer, service: Service) {
  return `Olá! Vi o serviço ${offer.name} da PhiloCode, a partir de R$ ${formatPrice(offer.price)}${offer.unit ?? ""}, e gostaria de um orçamento. ${service === "shopify" ? "Minha loja e o que preciso: " : "Meu negócio e o que preciso: "}`;
}
export const siteOffers: Offer[] = [
  { id: "profissional", name: "Página profissional", price: 990, summary: "Seu trabalho bem apresentado, com um caminho simples para novos contatos.", includes: ["Uma página para apresentar você e seus serviços", "Design e desenvolvimento incluídos", "Contato pelo WhatsApp"] },
  { id: "landing-page", name: "Landing page", price: 1490, featured: true, summary: "Uma página dedicada à sua campanha, serviço ou oferta.", includes: ["Estrutura voltada à ação da campanha", "Design e desenvolvimento incluídos", "Formulário e chamadas para contato"] },
  { id: "institucional", name: "Site institucional", price: 2490, summary: "Mais espaço para contar a história da empresa e apresentar seus serviços.", includes: ["Até 5 páginas com identidade compartilhada", "Design e desenvolvimento incluídos", "Navegação e estrutura de conteúdo"] },
];
export const siteInclusions = ["Funciona no celular e no computador", "SEO técnico básico", "Duas rodadas de ajustes dentro do escopo", "Conexão do domínio e publicação"];
export const shopifyOffers: Offer[] = [
  { id: "ajuste", name: "Ajuste ou correção", price: 290, summary: "Para resolver uma alteração pequena ou um problema específico na loja.", includes: ["Uma demanda pontual delimitada na proposta", "Análise do problema antes da contratação", "Conferência no computador e no celular"] },
  { id: "secao", name: "Seção personalizada", price: 590, summary: "Um novo componente para o seu tema, do jeito que sua página precisa.", includes: ["Uma seção em Liquid", "Conteúdo editável no tema", "Sem integração externa neste escopo"] },
  { id: "pagina", name: "Página Shopify", price: 1490, featured: true, summary: "Uma landing page ou modelo de produto, integrado à identidade da sua loja.", includes: ["Adaptação visual ao tema e referências alinhadas", "Ou implementação de um layout fornecido", "Um modelo reutilizável, não cadastro de produtos"] },
  { id: "loja", name: "Configuração de loja", price: 3490, summary: "Para começar com uma loja organizada sobre um tema existente.", includes: ["Aplicação da identidade visual ao tema", "Até 10 produtos e organização da navegação", "Configurações básicas de pagamento e entrega"] },
  { id: "personalizacao", name: "Personalização ampliada", price: 5990, summary: "Para adaptar mais partes da loja à experiência que sua operação precisa.", includes: ["Até 3 modelos de página personalizados", "Desenvolvimento sobre tema existente", "Funcionalidades delimitadas na proposta"] },
  { id: "hora", name: "Desenvolvimento avulso", price: 180, unit: "/h", summary: "Para demandas que precisam de análise e acompanhamento por hora.", includes: ["Estimativa apresentada antes de começar", "Registro do tempo dedicado", "Horas adicionais somente com aprovação"] },
];
export const support: Record<Service, Offer[]> = {
  sites: [
    { id: "tecnico", name: "Cuidados técnicos", price: 129, unit: "/mês", summary: "Para manter o site no ar e acompanhado.", includes: ["Hospedagem gerenciada e SSL", "Verificações técnicas e cópia de recuperação", "Sem alterações de conteúdo"] },
    { id: "conteudo", name: "Cuidados e conteúdo", price: 249, unit: "/mês", summary: "Para manter o site e fazer pequenas atualizações.", includes: ["Tudo do plano técnico", "Até 1 hora mensal de pequenas alterações", "Horas não acumulam"] },
  ],
  shopify: [
    { id: "cinco-horas", name: "Evolução essencial", price: 850, unit: "/mês", summary: "5 horas mensais para evoluir temas e páginas.", includes: ["Demandas priorizadas em conjunto", "Registro das horas utilizadas", "Horas não acumulam"] },
    { id: "dez-horas", name: "Evolução contínua", price: 1590, unit: "/mês", summary: "10 horas mensais para dar continuidade às melhorias.", includes: ["Demandas priorizadas em conjunto", "Registro das horas utilizadas", "Horas não acumulam"] },
  ],
};
export type Project = {
  name: string;
  segment: string;
  description: string;
  url: string;
  domain: string;
  image: string;
  alt: string;
};

/** Portfólio informado no formulário. [A CONFIRMAR: autorização de cada cliente para exibição] */
export const projects = {
  eyebrow: "Projetos",
  title: { before: "Sites que ", emphasis: "já estão no ar", after: "." } satisfies Emphasis,
  intro: "Alguns dos nossos trabalhos mais recentes.",
  items: [
    {
      name: "Mateus Marques Rosa",
      segment: "Advocacia criminal · Brasília (DF)",
      description: "Site com áreas de atuação, forma de atendimento e contato direto pelo WhatsApp.",
      url: "https://adv-mateus-marques.vercel.app/",
      domain: "adv-mateus-marques.vercel.app",
      image: "/images/projetos/mateus.webp",
      alt: "Primeira tela do site de Mateus Marques Rosa: título sobre defesa criminal em Brasília, botão de agendamento pelo WhatsApp e foto do advogado.",
    },
    {
      name: "Laura Antunes",
      segment: "Psicologia · Psicoterapia on-line",
      description: "Site com atendimentos, perguntas frequentes e agendamento de conversa.",
      url: "https://laura-antunes.vercel.app/",
      domain: "laura-antunes.vercel.app",
      image: "/images/projetos/laura.webp",
      alt: "Primeira tela do site da psicóloga Laura Antunes: título em serifa sobre cuidado em meio às perdas e imagem de um arranjo de flores.",
    },
    {
      name: "Jaqueline Trigueiro",
      segment: "Design de sobrancelhas · Ceilândia (DF)",
      description: "Site com serviços, antes e depois, o espaço de atendimento e agendamento pelo WhatsApp.",
      url: "https://jaqueline-trigueiro.vercel.app/",
      domain: "jaqueline-trigueiro.vercel.app",
      image: "/images/projetos/jaqueline.webp",
      alt: "Primeira tela do site de Jaqueline Trigueiro: título sobre design de sobrancelhas e micropigmentação em Ceilândia, botão de agendamento pelo WhatsApp e foto da profissional.",
    },
    {
      name: "Rafaela Antunes",
      segment: "Farmacêutica clínica · Saúde e performance",
      description: "Site com a trajetória da profissional e o método que ela oferece.",
      url: "https://www.farmarafaelaantunes.com/",
      domain: "farmarafaelaantunes.com",
      image: "/images/projetos/farma.webp",
      alt: "Seção “Quem sou eu?” do site da farmacêutica clínica Rafaela Antunes, com retrato da profissional.",
    },
  ] satisfies Project[],
};


export const howItWorks = {
  eyebrow: "Como funciona", title: { before: "Uma boa entrega começa com ", emphasis: "clareza", after: "." },
  steps: [
    { title: "Conversa", text: "Entendemos seu negócio, o momento e o que você precisa resolver." },
    { title: "Proposta", text: "Combinamos entregas, investimento, revisões e prazo antes de começar." },
    { title: "Criação", text: "Desenvolvemos o projeto e apresentamos uma prévia para sua revisão." },
    { title: "Publicação", text: "Com sua aprovação, publicamos e orientamos os próximos passos." },
  ],
};
export const siteFaq: FaqItem[] = [
  { question: "Qual formato é melhor para o meu negócio?", answer: "Uma página profissional reúne apresentação, serviços e contato. Uma landing page atende a uma campanha ou oferta. Um institucional distribui informações em páginas próprias. Na conversa, ajudamos você a escolher." },
  { question: "O que está incluído no preço?", answer: `Design e desenvolvimento, versão para celular e computador, SEO técnico básico, WhatsApp, publicação e duas rodadas de ajustes dentro do escopo. Página profissional a partir de R$ ${formatPrice(siteOffers[0].price)}, landing page a partir de R$ ${formatPrice(siteOffers[1].price)} e institucional de até 5 páginas a partir de R$ ${formatPrice(siteOffers[2].price)}.` },
  { question: "Como é definido o escopo do projeto?", answer: "A proposta define o conteúdo e as funcionalidades que o seu site precisa. O investimento depende do trabalho envolvido, e não apenas da quantidade de blocos. Mudanças no escopo são avaliadas e orçadas antes de executar." },
  { question: "Quem fornece os textos, as imagens e o domínio?", answer: "Você fornece sua marca, textos e imagens e registra o domínio em seu nome. Nós conectamos o domínio ao site. Redação completa, identidade visual, blog, CMS, outros idiomas e integrações são avaliados separadamente." },
  { question: "Como funcionam os ajustes e o prazo?", answer: "Cada projeto inclui duas rodadas de revisão dentro do escopo. Uma rodada é uma lista de pedidos enviada de uma vez. O prazo é definido na proposta, considerando os materiais e os retornos de aprovação. Pedidos adicionais são orçados antes da execução." },
  { question: "Preciso contratar manutenção?", answer: `O acompanhamento é opcional. Cuidados técnicos custam R$ ${formatPrice(support.sites[0].price)}/mês; o plano com até uma hora de pequenas alterações custa R$ ${formatPrice(support.sites[1].price)}/mês. Sem o plano, você precisa de hospedagem própria. O domínio é separado. Contratos existentes mantêm suas condições.` },
  { question: "Posso desistir depois de contratar?", answer: "Sim. Em até 7 dias após a contratação, devolvemos integralmente o valor pago." },
];
export const shopifyFaq: FaqItem[] = [
  { question: "Vocês fazem design de lojas Shopify?", answer: "Nosso foco é desenvolvimento e personalização. Adaptamos o tema à sua marca e a referências alinhadas, ou implementamos layouts fornecidos. Um layout visual inteiramente novo exige avaliação específica e eventual parceria com designer; não está incluído no preço inicial de páginas." },
  { question: "Quanto custa uma página Shopify?", answer: `A partir de R$ ${formatPrice(shopifyOffers[2].price)} para uma landing page ou um modelo reutilizável de produto. Inclui adaptação ao tema existente e referências combinadas, ou implementação de layout fornecido. O valor final depende das funcionalidades; não inclui cadastro de todos os produtos.` },
  { question: "Vocês alteram a loja que está no ar?", answer: "As alterações de tema são feitas em uma cópia não publicada. Você recebe uma prévia e aprova antes da publicação. Configurações de apps e recursos que afetam a loja inteira são alinhadas antes, porque nem tudo pode ser isolado no tema." },
  { question: "A assinatura da Shopify e os apps estão incluídos?", answer: "Não. Plano Shopify, domínio, tema pago, aplicativos e taxas de terceiros são contratados e pagos pelo cliente. Podemos configurar apps existentes conforme o escopo aprovado." },
  { question: "Quais serviços precisam de avaliação separada?", answer: "Integrações complexas, migrações de dados, apps próprios, headless e projetos Plus ficam fora destes pacotes. A viabilidade precisa ser avaliada antes de qualquer compromisso." },
  { question: "Como funciona o acompanhamento mensal?", answer: `Você pode reservar 5 horas por R$ ${formatPrice(support.shopify[0].price)}/mês ou 10 horas por R$ ${formatPrice(support.shopify[1].price)}/mês para evolução de temas e páginas. As horas não acumulam e excedentes exigem aprovação. Não inclui disponibilidade permanente nem atendimento ilimitado.` },
];
export const homeFaq: FaqItem[] = [
  { question: "A PhiloCode atende clientes de outras cidades?", answer: "Sim. Estamos em Brasília (DF) e atendemos online profissionais, empresas, lojas e agências de todo o Brasil." },
  { question: "Como sei qual serviço escolher?", answer: "Se você precisa apresentar seu trabalho e receber contatos, conheça criação de sites. Se já usa ou quer começar na Shopify, conheça desenvolvimento e personalização Shopify. Podemos ajudar a entender seu caso pelo WhatsApp." },
  { question: "Os valores do site são o orçamento final?", answer: "São preços iniciais para escopos específicos. A proposta confirma entregas, investimento e prazo antes do início. Novos preços não alteram as condições de contratos existentes." },
];
export const contactSection = {
  eyebrow: "Contato", title: { before: "Vamos conversar sobre o ", emphasis: "seu projeto", after: "?" },
  text: "Conte o que você precisa. Vamos entender o seu momento e indicar o próximo passo.", facts: ["Brasília (DF) · Atendimento online para todo o Brasil"],
};
export type Testimonial = { quote: string; author: string; role: string };
export const testimonials: Testimonial[] = [];
