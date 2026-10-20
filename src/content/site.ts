/**
 * Todo o conteúdo do site da Pôrto.
 * Fonte: formulário de briefing (Tally, 16/10/2026) + complementos enviados pelo cliente no chat.
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
  projects: "Olá! Vi os projetos no site da Pôrto e gostaria de fazer o meu site.",
  process: "Olá! Vim pelo site da Pôrto e gostaria de começar o meu site.",
  faq: "Olá! Tenho uma dúvida sobre a criação de sites da Pôrto.",
} as const;

export const nav = [
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
  trust: ["Site de uma página em 2 dias úteis", "Atendimento online · Brasília (DF)", "3 sites publicados"],
  visualCaption: "Projetos reais publicados pela Pôrto",
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
  intro: "Profissionais que agora têm um site para mostrar o que fazem. Clique para ver cada um funcionando.",
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

export const howItWorks = {
  eyebrow: "Como funciona",
  title: { before: "Do primeiro contato ao ", emphasis: "site pronto", after: "." } satisfies Emphasis,
  intro: "Tudo online, em quatro passos.",
  steps: [
    {
      title: "Você chama no WhatsApp",
      text: "Conte sobre o seu negócio. Se preferir, marcamos uma call.",
    },
    {
      title: "Briefing e sinal",
      text: "Você responde um formulário sobre o seu negócio e paga 50% via Pix.",
    },
    {
      title: "Primeira versão",
      highlight: "em 2 a 7 dias úteis",
      text: "2 dias no site de uma página; 5 a 7 no de até 5 páginas.",
    },
    {
      title: "Ajustes e site no ar",
      text: "2 rodadas de ajuste, você paga os outros 50% e o site é publicado.",
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
  intro: "Pagamento via Pix: metade para começar, metade na entrega.",
  /**
   * Oferta de lançamento real e limitada (5 vagas no total, valendo para os dois pacotes).
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
    text: "Em troca, você nos dá um depoimento e autoriza mostrar o seu site no nosso portfólio.",
    prices: [
      { plan: "Essential", tagline: "Uma página", price: "299", regularPrice: "499" },
      { plan: "Premium", tagline: "Até 5 páginas", price: "718", regularPrice: "1.197" },
    ],
    message: "Olá! Vi no site da Pôrto a oferta de lançamento e quero uma das 5 vagas.",
  },
  plans: [
    {
      id: "essential",
      name: "Essential",
      tagline: "Site de uma página",
      price: "499",
      description: "Para profissionais e pequenos negócios.",
      highlights: ["Primeira versão em 2 dias úteis", "2 rodadas de ajuste"],
      message: "Olá! Vi os preços no site da Pôrto e quero o Essential (site de uma página).",
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "Site com até 5 páginas",
      price: "1.197",
      description: "Para empresas com vários serviços.",
      highlights: ["Primeira versão em 5 a 7 dias úteis", "2 rodadas de ajuste"],
      message: "Olá! Vi os preços no site da Pôrto e quero o Premium (site com até 5 páginas).",
    },
  ] satisfies Plan[],
  extras: [
    { label: "Página extra", price: "150" },
    { label: "Rodada de ajuste extra", price: "150" },
  ],
  maintenance: {
    name: "Manutenção",
    price: "49",
    annualPrice: "490",
    summary: "hospedagem, SSL, backup e 1 rodada de ajustes por mês. Sem fidelidade.",
  },
};

export const faq = {
  eyebrow: "Dúvidas",
  title: { before: "Perguntas ", emphasis: "frequentes", after: "." } satisfies Emphasis,
  items: [
    {
      question: "Quanto tempo leva para o site ficar pronto?",
      answer:
        "O prazo começa quando o sinal é pago. A primeira versão do site de uma página fica pronta em 2 dias úteis; a do site com até 5 páginas, em 5 a 7 dias úteis. Depois vêm as 2 rodadas de ajuste e a publicação.",
    },
    {
      question: "Quanto custa e como eu pago?",
      answer:
        "O Essential (uma página) custa R$ 499 e o Premium (até 5 páginas), R$ 1.197. Cada página extra custa R$ 150. O pagamento é via Pix: 50% de sinal para começar e 50% na entrega. Para os 5 primeiros clientes, há 40% de desconto: R$ 299 e R$ 718.",
    },
    {
      question: "O que é uma rodada de ajuste?",
      answer:
        "É quando você avalia o site e nos envia, de uma vez, a lista com tudo o que quer mudar: textos, fotos, cores, ordem das seções. Cada projeto tem 2 rodadas, e cada rodada extra custa R$ 150. Acrescentar páginas ou mudar a estrutura do site é orçado à parte.",
    },
    {
      question: "Como funciona a manutenção? E o domínio?",
      answer:
        "A manutenção custa R$ 49 por mês ou R$ 490 por ano: hospedagem, certificado SSL, backup e 1 rodada de ajustes por mês, que não acumula. Não tem fidelidade: se cancelar, o site fica no ar até o fim do período já pago (no anual, sem reembolso dos meses restantes) e nós transferimos o código completo e ajudamos a publicar o site na sua conta, sem custo. O domínio fica por sua conta: você registra no seu nome (um .com.br custa R$ 40 por ano no Registro.br) e nós conectamos ao site.",
    },
    {
      question: "E se eu desistir depois de pagar o sinal?",
      answer:
        "Você tem 7 dias a partir da contratação para desistir, e nós devolvemos o sinal integralmente, como prevê o art. 49 do Código de Defesa do Consumidor. Basta avisar pelo mesmo WhatsApp. Depois desse prazo, o sinal não é devolvido, porque paga o trabalho já feito.",
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
