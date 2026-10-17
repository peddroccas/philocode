/**
 * Todo o conteúdo do site da Pôrto.
 * Fonte: formulário de briefing (Tally, 16/10/2026) + complemento de preços enviado pelo cliente.
 * Dados ausentes usam o marcador visível "[A CONFIRMAR: …]" — ver docs/briefing.md, seção 24.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
/** O cliente ainda não tem domínio. Defina NEXT_PUBLIC_SITE_URL no deploy. */
export const SITE_URL_NOTE = "[A CONFIRMAR: domínio do site]";

export type Emphasis = { before: string; emphasis: string; after?: string };

export const company = {
  name: "Pôrto",
  legalName: "Porto Studio",
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
  label: "Chamar no WhatsApp",
};

/** Mensagens iniciais do WhatsApp por ponto de entrada (a validar com o cliente). */
export const whatsappMessages = {
  default: "Olá! Vim pelo site da Pôrto e gostaria de fazer o meu site.",
  serviceProfessional: "Olá! Vim pelo site da Pôrto e gostaria de fazer um site profissional.",
  serviceInstitutional:
    "Olá! Vim pelo site da Pôrto e gostaria de fazer um site institucional para a minha empresa.",
  projects: "Olá! Vi os projetos no site da Pôrto e gostaria de fazer o meu site.",
  process: "Olá! Vim pelo site da Pôrto e gostaria de começar o meu site.",
  faq: "Olá! Tenho uma dúvida sobre a criação de sites da Pôrto.",
} as const;

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Preços", href: "#precos" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "Pôrto · Criação de sites",
  title: {
    before: "Sites profissionais para empresas e profissionais que ",
    emphasis: "ainda não estão na internet",
    after: ".",
  } satisfies Emphasis,
  subtitle:
    "A Pôrto cria a sua presença na internet: um site claro, bem acabado e pensado para que as pessoas entendam o que você faz e entrem em contato.",
  secondaryLink: { label: "Ver projetos", href: "#projetos" },
  trust: ["Site de uma página em 2 dias úteis", "Atendimento 100% online", "Sediada em Brasília (DF)", "3 sites publicados"],
  visualCaption: "Projetos reais publicados pela Pôrto",
};

export const services = {
  eyebrow: "Serviços",
  title: { before: "Um site para cada ", emphasis: "momento", after: " do seu negócio." } satisfies Emphasis,
  intro:
    "A Pôrto faz uma coisa e faz com cuidado: criar sites. O ponto de partida é a sua situação.",
  items: [
    {
      id: "profissional",
      forWho: "Você é profissional e atende seus próprios clientes.",
      title: "Site profissional",
      description:
        "Uma página que apresenta você, o que você faz e como atende, com o contato sempre à mão.",
      detailLabel: "Já criamos para",
      details: ["Psicologia", "Advocacia", "Farmácia clínica"],
      ctaLabel: "Falar sobre site profissional",
      message: whatsappMessages.serviceProfessional,
    },
    {
      id: "institucional",
      forWho: "Você tem uma empresa e precisa apresentá-la na internet.",
      title: "Site institucional",
      description:
        "O site da sua empresa: quem vocês são, o que oferecem e como falar com vocês, organizado para transmitir confiança a quem chega.",
      detailLabel: "Para empresas que querem",
      details: ["Presença na internet", "Mais contatos", "Uma apresentação profissional"],
      ctaLabel: "Falar sobre site institucional",
      message: whatsappMessages.serviceInstitutional,
    },
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
  intro: "Cada um começou com uma conversa e um briefing. Clique para ver o site funcionando.",
  items: [
    {
      name: "Mateus Marques Rosa",
      segment: "Advocacia criminal · Brasília (DF)",
      description:
        "Página de apresentação com áreas de atuação, como funciona o atendimento e agendamento pelo WhatsApp.",
      url: "https://adv-mateus-marques.vercel.app/",
      domain: "adv-mateus-marques.vercel.app",
      image: "/images/projetos/mateus.webp",
      alt: "Primeira tela do site de Mateus Marques Rosa: título sobre defesa criminal em Brasília, botão de agendamento pelo WhatsApp e foto do advogado.",
    },
    {
      name: "Laura Antunes",
      segment: "Psicologia · Psicoterapia on-line",
      description:
        "Página de apresentação com atendimentos, como funciona, dúvidas frequentes e agendamento de conversa.",
      url: "https://laura-antunes.vercel.app/",
      domain: "laura-antunes.vercel.app",
      image: "/images/projetos/laura.webp",
      alt: "Primeira tela do site da psicóloga Laura Antunes: título em serifa sobre cuidado em meio às perdas e imagem de um arranjo de flores.",
    },
    {
      name: "Rafaela Antunes",
      segment: "Farmacêutica clínica · Saúde e performance",
      description: "Página de apresentação com a trajetória da profissional e o método que ela oferece.",
      url: "https://www.farmarafaelaantunes.com/",
      domain: "farmarafaelaantunes.com",
      image: "/images/projetos/farma.webp",
      alt: "Seção “Quem sou eu?” do site da farmacêutica clínica Rafaela Antunes, com retrato da profissional.",
    },
  ] satisfies Project[],
  footnote: "Mais dois projetos em desenvolvimento.",
};

export const differentials = {
  eyebrow: "Por que a Pôrto",
  title: { before: "O que você ", emphasis: "ganha", after: " com a gente." } satisfies Emphasis,
  items: [
    {
      icon: "ai",
      title: "AI First",
      text: "Usamos inteligência artificial no centro do processo para chegar mais rápido a um site bem resolvido, sem abrir mão da revisão humana.",
    },
    {
      icon: "speed",
      title: "Velocidade",
      text: "Um caminho curto entre a primeira conversa e o site no ar, com um processo enxuto e bem definido.",
    },
    {
      icon: "quality",
      title: "Qualidade do produto",
      text: "Design cuidadoso, textos claros e um site que funciona bem no celular, no computador e no Google.",
    },
    {
      icon: "service",
      title: "Atendimento próximo",
      text: "Você fala direto com quem desenvolve o seu site, do primeiro contato à entrega.",
    },
  ] as const,
};

export const howItWorks = {
  eyebrow: "Como funciona",
  title: { before: "Do primeiro contato ao ", emphasis: "site pronto", after: "." } satisfies Emphasis,
  intro: "Tudo online, com prazo e etapas definidos. Você sabe o que acontece em cada passo.",
  steps: [
    {
      title: "Você chama no WhatsApp",
      text: "Conte sobre o seu negócio. Se preferir conversar ao vivo, marcamos uma call. É opcional.",
    },
    {
      title: "Você responde o briefing",
      text: "Um formulário sobre o seu negócio, seus serviços e seu público. É dele que sai o seu site.",
    },
    {
      title: "Sinal de",
      highlight: "50%",
      text: "Você paga metade do valor via Pix e começamos a produção. A outra metade só na entrega.",
    },
    {
      title: "Primeira versão",
      highlight: "em 2 a 7 dias úteis",
      text: "Contados a partir do sinal: 2 dias úteis no site de uma página; 5 a 7 no site com até 5 páginas.",
    },
    {
      title: "Ajustes",
      highlight: "2 rodadas",
      text: "Em cada rodada, você envia de uma vez a lista com tudo o que quer mudar.",
    },
    {
      title: "Site no ar",
      text: "Você paga os outros 50%, o site é publicado e a manutenção mantém tudo funcionando.",
    },
  ] as { title: string; highlight?: string; text: string }[],
};

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  highlights: string[];
  message: string;
};

export const pricing = {
  eyebrow: "Preços",
  title: { before: "Preço claro, ", emphasis: "sem surpresa", after: "." } satisfies Emphasis,
  intro: "Você sabe quanto vai investir antes da primeira conversa.",
  /**
   * Oferta de lançamento real e limitada (5 vagas no total, valendo para os dois pacotes).
   * Atualize spotsLeft a cada cliente fechado e mude active para false quando as vagas
   * acabarem (a faixa some do site).
   */
  launch: {
    active: true,
    spotsTotal: 5,
    spotsLeft: 5,
    eyebrow: "Lançamento",
    announcement: "Preço de lançamento para os 5 primeiros clientes",
    title: "Preço de lançamento para os 5 primeiros clientes",
    text: "Em troca, você nos dá um depoimento e autoriza mostrar o seu site no portfólio da Pôrto. Mesmo prazo, mesmas 2 rodadas de ajuste.",
    prices: [
      { plan: "Essential", tagline: "Uma página", price: "500", regularPrice: "997" },
      { plan: "Premium", tagline: "Até 5 páginas", price: "997", regularPrice: "1.997" },
    ],
    message: "Olá! Vi no site da Pôrto a oferta de lançamento e quero uma das 5 vagas.",
  },
  plans: [
    {
      id: "essential",
      name: "Essential",
      tagline: "Site de uma página",
      price: "997",
      description: "Tudo o que o seu negócio precisa em uma única página, com o contato a um toque.",
      highlights: [
        "Primeira versão em 2 dias úteis",
        "2 rodadas de ajuste",
        "Domínio no seu nome, primeiro ano incluso",
        "Para profissionais e pequenos negócios",
      ],
      message: "Olá! Vi os preços no site da Pôrto e quero o Essential (site de uma página).",
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "Site com até 5 páginas",
      price: "1.997",
      description: "Uma página para cada assunto: início, sobre, serviços, contato e o que mais o seu negócio precisar.",
      highlights: [
        "Primeira versão em 5 a 7 dias úteis",
        "2 rodadas de ajuste",
        "Domínio no seu nome, primeiro ano incluso",
        "Para empresas com vários serviços",
      ],
      message: "Olá! Vi os preços no site da Pôrto e quero o Premium (site com até 5 páginas).",
    },
  ] satisfies Plan[],
  extras: [
    { label: "Página extra", price: "297" },
    { label: "Rodada de ajuste extra", price: "150" },
  ],
  terms: [
    {
      title: "Pagamento",
      text: "Via Pix: 50% de sinal para começar e 50% na entrega. Desistiu em até 7 dias? Devolvemos o sinal.",
    },
    {
      title: "Rodada de ajuste",
      text: "É uma lista com todos os seus pedidos, enviada de uma vez. Não é uma alteração por mensagem.",
    },
    {
      title: "Cancelamento",
      text: "Manutenção sem fidelidade. Se cancelar, transferimos o código completo e ajudamos a publicar o site na sua conta, sem custo.",
    },
  ],
  maintenance: {
    name: "Manutenção",
    price: "49",
    priceSuffix: "por mês",
    annual: "ou R$ 490 por ano",
    annualPrice: "490",
    description: "Para o seu site continuar no ar, seguro e atualizado.",
    includes: [
      "Hospedagem",
      "Certificado SSL (cadeado de segurança)",
      "Backup",
      "1 rodada de ajustes por mês (não acumula)",
    ],
    domainNote: "O domínio é seu: o primeiro ano fica por nossa conta, e as renovações, por sua.",
  },
};

export const faq = {
  eyebrow: "Dúvidas",
  title: { before: "Perguntas ", emphasis: "frequentes", after: "." } satisfies Emphasis,
  items: [
    {
      question: "Quanto tempo leva para o site ficar pronto?",
      answer:
        "O prazo começa a contar quando o sinal é pago. A primeira versão do site de uma página fica pronta em 2 dias úteis; a do site com até 5 páginas, em 5 a 7 dias úteis. Depois vêm as 2 rodadas de ajuste e a publicação.",
    },
    {
      question: "Quanto custa um site?",
      answer:
        "O Essential (site de uma página) custa R$ 997 e o Premium (até 5 páginas), R$ 1.997. Cada página extra custa R$ 297. O pagamento é via Pix: 50% de sinal para começarmos e 50% na entrega. Para os 5 primeiros clientes, há preço de lançamento: R$ 500 no Essential e R$ 997 no Premium.",
    },
    {
      question: "O que é uma rodada de ajuste?",
      answer:
        "É quando você avalia o site e nos envia, de uma vez, a lista com tudo o que quer mudar: textos, fotos, cores, ordem das seções. Nós aplicamos tudo e mandamos a nova versão. Cada projeto tem 2 rodadas, e cada rodada extra custa R$ 150. Mudar a estrutura do site ou acrescentar páginas não conta como ajuste e é orçado à parte.",
    },
    {
      question: "Vocês fazem manutenção depois que o site está no ar?",
      answer:
        "Sim. A manutenção custa R$ 49 por mês ou R$ 490 por ano e inclui hospedagem, certificado SSL, backup e 1 rodada de ajustes por mês: você envia de uma vez a lista do que quer trocar (textos, fotos, informações) e nós atualizamos. A rodada não acumula de um mês para o outro. Mudanças maiores, como páginas ou seções novas, são orçadas à parte.",
    },
    {
      question: "O domínio fica no nome de quem?",
      answer:
        "No seu. O domínio (o endereço do site, como seunegocio.com.br) é registrado no seu nome, e você continua sendo o titular mesmo se um dia deixar de contratar a manutenção. O primeiro ano de registro fica por nossa conta; as renovações anuais são pagas por você (um .com.br custa R$ 40 por ano no Registro.br).",
    },
    {
      question: "E se eu quiser cancelar a manutenção?",
      answer:
        "Você cancela quando quiser, sem fidelidade e sem multa. No plano mensal, o site fica no ar até o fim do mês já pago; no anual, até o fim do ano pago, sem reembolso dos meses restantes. Antes disso, entregamos tudo, sem custo: o código completo do site, as imagens e um passo a passo de publicação, e ajudamos a colocar o site no ar na sua conta ou na de quem você escolher. O domínio já está no seu nome.",
    },
    {
      question: "E se eu desistir depois de pagar o sinal?",
      answer:
        "Você tem 7 dias a partir da contratação para desistir, e nós devolvemos o sinal integralmente, como prevê o art. 49 do Código de Defesa do Consumidor. Basta avisar pelo mesmo WhatsApp em que você contratou. Depois desse prazo, o sinal não é devolvido, porque paga o trabalho já feito.",
    },
    {
      question: "Como funciona o atendimento?",
      answer:
        "Todo o atendimento é online. Você chama no WhatsApp e, se preferir, marcamos uma call. Depois, você responde a um formulário de briefing e nós desenvolvemos o seu site a partir das suas respostas.",
    },
  ],
  helpTitle: "Não encontrou sua dúvida?",
  helpText: "Fale com a gente pelo WhatsApp. A resposta vem de quem desenvolve o seu site.",
};

export const contactSection = {
  eyebrow: "Contato",
  title: { before: "Vamos colocar seu negócio ", emphasis: "na internet", after: "?" } satisfies Emphasis,
  text: "Chame no WhatsApp e conte sobre o seu negócio. Se preferir conversar ao vivo, marcamos uma call.",
  facts: ["Atendimento online", "Sediada em Brasília (DF)"],
};

export type Testimonial = { quote: string; author: string; role: string };
/** O cliente informou ter depoimentos, mas não os enviou. Lista vazia = seção oculta. */
export const testimonials: Testimonial[] = [];
