/**
 * Todo o conteúdo do site da PhiloCode.
 * Fonte: formulário de briefing (Tally, 16/10/2026) + complementos enviados pelo cliente no chat.
 * Dados ausentes usam o marcador visível "[A CONFIRMAR: …]" — ver docs/briefing.md, seção 24.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
/** O cliente ainda não tem domínio. Defina NEXT_PUBLIC_SITE_URL no deploy. */
export const SITE_URL_NOTE = "[A CONFIRMAR: domínio do site]";

export type Emphasis = { before: string; emphasis: string; after?: string };

export const company = {
  name: "PhiloCode",
  legalName: "PhiloCode",
  cnpj: "[A CONFIRMAR: número do CNPJ]",
  slogan: "Sites que transformam negócios.",
  city: "Brasília",
  state: "DF",
  summary: "Criação de sites profissionais e institucionais.",
};

export const contact = {
  whatsappDigits: "5561999016604",
  whatsappDisplay: "(61) 99901-6604",
  email: "pedroabernardes11@gmail.com",
  /** O formulário trouxe apenas https://www.instagram.com/ (sem perfil). Não exibido. */
  socialNote: "[A CONFIRMAR: perfis de Instagram e LinkedIn]",
  instagram: null as string | null,
  linkedin: null as string | null,
};

export const primaryCta = {
  label: "Solicitar orçamento",
};

/** Mensagens iniciais do WhatsApp por ponto de entrada (a validar com o cliente). */
export const whatsappMessages = {
  default: "Olá! Vim pelo site da PhiloCode e gostaria de um orçamento. Meu negócio é: ",
  process: "Olá! Vim pelo site da PhiloCode e gostaria de começar o meu site. Meu negócio é: ",
  faq: "Olá! Tenho uma dúvida sobre a criação de sites da PhiloCode: ",
} as const;

/** Mensagem do botão da calculadora de preço, com o número de páginas escolhido. */
export function pricingMessage(pages: number) {
  const size = pages === 1 ? "uma página" : `${pages} páginas`;
  return `Olá! Vi os preços no site da PhiloCode e gostaria de um orçamento para um site de ${size}. Meu negócio é: `;
}

export const nav = [
  { label: "Projetos", href: "#projetos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Valores", href: "#valores" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "PhiloCode · Criação de sites",
  title: { before: "Sites profissionais, feitos sob medida para o ", emphasis: "seu negócio", after: "." } satisfies Emphasis,
  subtitle:
    "Criamos sites claros e bem acabados para empresas e profissionais apresentarem o que fazem e receberem novos contatos.",
  trust: ["Design exclusivo, sem templates", "Pensado para gerar contatos", "Pronto para celular e Google"],
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
  eyebrow: "Como funciona",
  title: { before: "Simples, do início ", emphasis: "ao fim", after: "." } satisfies Emphasis,
  steps: [
    { title: "Conversa", text: "Você conta sobre o seu negócio e o que espera do site." },
    { title: "Criação", text: "Desenvolvemos o site e fazemos os ajustes que você pedir." },
    { title: "Publicação", text: "O site vai ao ar no seu domínio, pronto para receber contatos." },
  ],
};

export const pricing = {
  eyebrow: "Valores",
  title: { before: "Preço claro, ", emphasis: "sem surpresa", after: "." } satisfies Emphasis,
  intro: "Você paga pelo número de páginas que o seu site precisa.",
  firstPage: "499",
  extraPage: "175",
  /** Valores numéricos usados pela calculadora. */
  firstPageValue: 499,
  extraPageValue: 175,
  maxPages: 6,
  includes: ["Design feito para o seu negócio", "Funciona no celular e no computador", "Duas rodadas de ajustes", "Publicação no seu domínio"],
  /**
   * Oferta de lançamento real e limitada (5 vagas no total).
   * Atualize spotsLeft a cada cliente fechado e mude active para false quando as vagas
   * acabarem (a faixa e a barra do topo somem do site).
   */
  launch: {
    active: true,
    spotsTotal: 5,
    spotsLeft: 5,
    eyebrow: "Lançamento",
    announcement: "40% de desconto para os 5 primeiros clientes",
    title: "40% de desconto para os 5 primeiros clientes",
    firstPage: "299",
    extraPage: "105",
    firstPageValue: 299,
    extraPageValue: 105,
    message: "Olá! Vi a oferta de lançamento no site da PhiloCode e quero uma das 5 vagas. Meu negócio é: ",
  },
  extraRound: "150",
  maintenance: {
    name: "Manutenção",
    price: "59",
    annualPrice: "590",
    summary: "hospedagem, segurança, backup e uma rodada de ajustes por mês. Sem fidelidade.",
  },
};

export const faq = {
  eyebrow: "Dúvidas",
  title: { before: "Perguntas ", emphasis: "frequentes", after: "." } satisfies Emphasis,
  items: [
    {
      question: "Quantas páginas o meu site precisa?",
      answer:
        "A maioria dos profissionais começa com uma página, que reúne apresentação, serviços e contato. Empresas com vários serviços costumam precisar de mais. Na conversa, indicamos o formato ideal para o seu caso.",
    },
    {
      question: "O que é uma rodada de ajustes?",
      answer:
        "É a lista com tudo o que você quer mudar no site, enviada de uma vez. Cada projeto inclui duas rodadas; rodadas extras custam R$ 150.",
    },
    {
      question: "Como funciona a manutenção?",
      answer:
        "Custa R$ 59 por mês ou R$ 590 por ano e inclui hospedagem, segurança (SSL), backup e uma rodada de ajustes por mês. Não há fidelidade: se cancelar, entregamos o código do site e ajudamos a publicá-lo onde você preferir.",
    },
    {
      question: "Quem registra o domínio?",
      answer: "Você registra o domínio no seu nome, e nós cuidamos de conectá-lo ao site.",
    },
    {
      question: "Posso desistir depois de contratar?",
      answer: "Sim. Em até 7 dias após a contratação, devolvemos integralmente o valor pago.",
    },
  ],
  helpTitle: "Ainda tem dúvidas?",
  helpText: "Fale com a gente pelo WhatsApp.",
};

export const contactSection = {
  eyebrow: "Contato",
  title: { before: "Vamos conversar sobre o ", emphasis: "seu site", after: "?" } satisfies Emphasis,
  text: "Conte sobre o seu negócio pelo WhatsApp. Respondemos pessoalmente.",
  facts: ["Sediada em Brasília (DF)"],
};

export type Testimonial = { quote: string; author: string; role: string };
/** O cliente informou ter depoimentos, mas não os enviou. Lista vazia = seção oculta. */
export const testimonials: Testimonial[] = [];
