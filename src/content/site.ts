/** Conteúdo e catálogo aprovados em 29/10/2026. Preços iniciais para novos projetos. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://philocode.vercel.app").replace(/\/$/, "");
export type Emphasis = { before: string; emphasis: string; after?: string };
export type Service = "sites" | "shopify" | "catequese";
export type FaqItem = { question: string; answer: string };
export type Offer = { id: string; name: string; price: number; unit?: string; summary: string; includes: string[]; featured?: boolean };
export const company = {
  name: "Philocode", legalName: "Philocode", cnpj: "",
  slogan: "Engineering what’s next.", city: "Brasília", state: "DF",
  summary: "Desenvolvimento de software: sites, Shopify e sistema online de gestão da catequese. Atendimento online para todo o Brasil.",
};
export const contact = {
  whatsappDigits: "5561984837618", whatsappDisplay: "(61) 98483-7618", email: "philocodesystems@gmail.com",
  instagram: null as string | null, linkedin: null as string | null,
};
export const primaryCta = { label: "Pedir meu orçamento" };
export const whatsappMessages = {
  default: "Olá! Vim pelo site da Philocode e gostaria de conversar sobre um projeto de software. Meu negócio é: ",
  catequese: "Olá! Tenho interesse no Catequese Hub, o sistema de catequese da Philocode. Minha paróquia é: ",
  custom: "Olá! Preciso de um software sob medida e gostaria de conversar com a Philocode. A minha ideia é: ",
  sites: "Olá! Gostaria de um orçamento para criar um site com a Philocode. Meu negócio é: ",
  shopify: "Olá! Preciso de desenvolvimento ou personalização na Shopify. O endereço da minha loja é: ",
  agency: "Olá! Tenho uma agência e gostaria de conversar sobre uma parceria de desenvolvimento Shopify. Minha demanda é: ",
  process: "Olá! Gostaria de conversar sobre um projeto com a Philocode. Minha ideia é: ",
  faq: "Olá! Tenho uma dúvida sobre os serviços da Philocode: ",
};
export const nav = [
  { label: "Início", href: "/" }, { label: "Sites", href: "/criacao-de-sites" },
  { label: "Shopify", href: "/shopify" }, { label: "Catequese", href: "/sistema-catequese" },
  { label: "Projetos", href: "/#projetos" }, { label: "Contato", href: "/#contato" },
];
export const formatPrice = (value: number) => value.toLocaleString("pt-BR");
export function offerMessage(offer: Offer, service: Service) {
  return `Olá! Vi o serviço ${offer.name} da Philocode, a partir de R$ ${formatPrice(offer.price)}${offer.unit ?? ""}, e gostaria de um orçamento. ${service === "shopify" ? "Minha loja e o que preciso: " : "Meu negócio e o que preciso: "}`;
}
export const siteOffers: Offer[] = [
  { id: "profissional", name: "Página profissional", price: 990, summary: "Para quem quer apresentar o próprio trabalho e receber contatos sem complicação.", includes: ["Uma página para apresentar você e seus serviços", "Design e desenvolvimento incluídos", "Contato pelo WhatsApp"] },
  { id: "landing-page", name: "Landing page", price: 1490, featured: true, summary: "Uma página com um único objetivo: transformar a visita da sua campanha em conversa.", includes: ["Estrutura voltada à ação da campanha", "Design e desenvolvimento incluídos", "Formulário e chamadas para contato"] },
  { id: "institucional", name: "Site institucional", price: 2490, summary: "Para empresas que precisam mostrar quem são, o que oferecem e como falar com elas.", includes: ["Até 5 páginas com identidade compartilhada", "Design e desenvolvimento incluídos", "Navegação e estrutura de conteúdo"] },
];
export const siteProjectNote = "O conteúdo e os recursos do site são combinados na proposta. Domínio e hospedagem têm custos próprios.";
export const siteInclusions = ["Funciona no celular e no computador", "SEO técnico básico", "Duas rodadas de ajustes dentro do escopo", "Conexão do domínio e publicação"];
export const shopifyOffers: Offer[] = [
  { id: "ajuste", name: "Ajuste ou correção", price: 290, summary: "Para resolver uma alteração pequena ou um problema específico na loja.", includes: ["Uma demanda pontual delimitada na proposta", "Análise do problema antes da contratação", "Conferência no computador e no celular"] },
  { id: "secao", name: "Seção personalizada", price: 590, summary: "Um novo componente para o seu tema, do jeito que sua página precisa.", includes: ["Uma seção em Liquid", "Conteúdo editável no tema", "Sem integração externa neste escopo"] },
  { id: "pagina", name: "Página Shopify", price: 1490, featured: true, summary: "Uma landing page ou modelo de produto, integrado à identidade da sua loja.", includes: ["Visual alinhado ao tema e à sua marca", "A partir de referências ou de um layout pronto", "Modelo de página reutilizável na loja"] },
  { id: "loja", name: "Configuração de loja", price: 3490, summary: "Para começar com uma loja organizada sobre um tema existente.", includes: ["Aplicação da identidade visual ao tema", "Até 10 produtos e organização da navegação", "Configurações básicas de pagamento e entrega"] },
  { id: "personalizacao", name: "Personalização ampliada", price: 5990, summary: "Para adaptar mais partes da loja à experiência que sua operação precisa.", includes: ["Até 3 modelos de página personalizados", "Desenvolvimento sobre tema existente", "Funcionalidades delimitadas na proposta"] },
  { id: "hora", name: "Desenvolvimento avulso", price: 180, unit: "/h", summary: "Para demandas que precisam de análise e acompanhamento por hora.", includes: ["Estimativa apresentada antes de começar", "Registro do tempo dedicado", "Horas adicionais somente com aprovação"] },
];
export const support: Record<Service, Offer[]> = {
  sites: [
    { id: "acompanhamento", name: "Acompanhamento do site", price: 79, unit: "/mês", summary: "Seu site no ar, cuidado e atualizado.", includes: ["Hospedagem gerenciada e SSL", "Cuidados técnicos e cópia de recuperação", "Uma rodada de ajustes por mês"] },
  ],
  shopify: [
    { id: "cinco-horas", name: "Evolução essencial", price: 850, unit: "/mês", summary: "5 horas mensais para evoluir temas e páginas.", includes: ["Demandas priorizadas em conjunto", "Registro das horas utilizadas", "Horas não acumulam"] },
    { id: "dez-horas", name: "Evolução contínua", price: 1590, unit: "/mês", summary: "10 horas mensais para dar continuidade às melhorias.", includes: ["Demandas priorizadas em conjunto", "Registro das horas utilizadas", "Horas não acumulam"] },
  ],
  catequese: [],
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
  title: { before: "Sites que você pode ", emphasis: "abrir agora", after: "." } satisfies Emphasis,
  intro: "Projetos reais, no ar. Clique e veja como cada um funciona no celular e no computador.",
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
  eyebrow: "Como funciona", title: { before: "Do primeiro “oi” ao projeto no ar, ", emphasis: "sem surpresa", after: "." },
  steps: [
    { title: "Conversa", text: "Você conta o que precisa pelo WhatsApp, com as suas palavras. Nada de formulário longo." },
    { title: "Proposta", text: "Você recebe por escrito o escopo, o investimento, as revisões e o prazo, e só então decide." },
    { title: "Criação", text: "Desenvolvemos o projeto e mostramos uma prévia. Você pede os ajustes combinados." },
    { title: "Publicação", text: "Com a sua aprovação, colocamos no ar e mostramos como usar o que foi entregue." },
  ],
};
export const siteFaq: FaqItem[] = [
  { question: "Quanto tempo leva para o site ficar pronto?", answer: "O prazo é definido na proposta, de acordo com o formato escolhido e com a entrega dos textos e imagens. Você sabe a data antes de começar, e não depois." },
  { question: "Qual formato é melhor para o meu negócio?", answer: "Uma página profissional reúne apresentação, serviços e contato. Uma landing page atende a uma campanha ou oferta. Um institucional distribui informações em páginas próprias. Na conversa, ajudamos você a escolher." },
  { question: "O que está incluído no preço?", answer: `Design e desenvolvimento, versão para celular e computador, SEO técnico básico, WhatsApp, publicação e duas rodadas de ajustes dentro do escopo. Página profissional a partir de R$ ${formatPrice(siteOffers[0].price)}, landing page a partir de R$ ${formatPrice(siteOffers[1].price)} e institucional de até 5 páginas a partir de R$ ${formatPrice(siteOffers[2].price)}.` },
  { question: "Como é definido o escopo do projeto?", answer: "A proposta define o conteúdo e as funcionalidades que o seu site precisa. O investimento depende do trabalho envolvido, e não apenas da quantidade de blocos. Mudanças no escopo são avaliadas e orçadas antes de executar." },
  { question: "Quem fornece os textos, as imagens e o domínio?", answer: "Combinamos na proposta o que você já tem e o apoio necessário com textos e imagens. O domínio é registrado em seu nome, e nós cuidamos da conexão." },
  { question: "Como funcionam os ajustes e o prazo?", answer: "Cada projeto inclui duas rodadas de revisão dentro do escopo. Uma rodada é uma lista de pedidos enviada de uma vez. O prazo é definido na proposta, considerando os materiais e os retornos de aprovação. Pedidos adicionais são orçados antes da execução." },
  { question: "Preciso contratar manutenção?", answer: `O acompanhamento é opcional e custa R$ ${formatPrice(support.sites[0].price)}/mês. Inclui hospedagem gerenciada, SSL, cuidados técnicos, cópia de recuperação e uma rodada de ajustes por mês. Sem acompanhamento, você pode usar hospedagem própria. O domínio é pago separadamente.` },
  { question: "Como funciona a rodada mensal de ajustes?", answer: "Você reúne os pedidos de ajustes em uma lista e envia de uma vez, como atualização de textos, imagens e detalhes do site. Cada mês inclui uma rodada, que não acumula. Novas páginas ou funcionalidades são combinadas em uma proposta à parte." },
  { question: "Posso desistir depois de contratar?", answer: "Sim. Em até 7 dias após a contratação, devolvemos integralmente o valor pago." },
  { question: "Preciso entender de tecnologia?", answer: "Não. Você conta o que precisa com as suas palavras e aprova cada etapa. Domínio, publicação e a parte técnica ficam com a gente." },
];
export const shopifyFaq: FaqItem[] = [
  { question: "Vocês fazem design de lojas Shopify?", answer: "Nosso foco é desenvolvimento e personalização. Adaptamos o tema à sua marca e a referências alinhadas, ou implementamos layouts fornecidos. Um layout visual inteiramente novo exige avaliação específica e eventual parceria com designer; não está incluído no preço inicial de páginas." },
  { question: "Quanto custa uma página Shopify?", answer: `A partir de R$ ${formatPrice(shopifyOffers[2].price)} para uma landing page ou um modelo reutilizável de produto. Desenvolvemos a página a partir do tema da loja, de referências combinadas ou de um layout aprovado. O valor final depende das funcionalidades e é confirmado na proposta.` },
  { question: "Vocês alteram a loja que está no ar?", answer: "As alterações de tema são feitas em uma cópia não publicada. Você recebe uma prévia e aprova antes da publicação. Configurações de apps e recursos que afetam a loja inteira são alinhadas antes, porque nem tudo pode ser isolado no tema." },
  { question: "A assinatura da Shopify e os apps estão incluídos?", answer: "Não. Plano Shopify, domínio, tema pago, aplicativos e taxas de terceiros são contratados e pagos pelo cliente. Podemos configurar apps existentes conforme o combinado." },
  { question: "Quais serviços precisam de avaliação separada?", answer: "Integrações complexas, migrações de dados, apps próprios, headless e projetos Plus ficam fora destes pacotes. A viabilidade precisa ser avaliada antes de qualquer compromisso." },
  { question: "Como funciona o acompanhamento mensal?", answer: `Você pode reservar 5 horas por R$ ${formatPrice(support.shopify[0].price)}/mês ou 10 horas por R$ ${formatPrice(support.shopify[1].price)}/mês para evolução de temas e páginas. As horas não acumulam e excedentes exigem aprovação. Não inclui disponibilidade permanente nem atendimento ilimitado.` },
];
/** Catequese Hub (catequesehub.com.br): sistema de gestão da catequese, com preço fixo (somente mensalidade). */
export const catequese = {
  name: "Catequese Hub",
  domain: "catequesehub.com.br",
  pricing: {
    monthly: 149,
    annualMonths: 10,
    annual: 149 * 10,
    monthlyIncludes: ["Sistema pronto para a sua paróquia", "Acesso para a coordenação e link de inscrição para as famílias", "Hospedagem e backups", "Atualizações do sistema", "Suporte para a coordenação e os catequistas"],
  },
  features: [
    { title: "Inscrição online", text: "As famílias se inscrevem pelo celular, enviam os documentos e aceitam o termo de compromisso. A coordenação aprova e o catequizando entra na turma." },
    { title: "Turmas e catequizandos", text: "Ficha completa com pais, sacramentos, necessidades especiais e quem pode buscar. Documentos guardados e ficha com anexos em PDF ou ZIP." },
    { title: "Chamadas e presença", text: "Registro de cada encontro com os temas do itinerário e mapa de presença em PDF ou Excel para a turma." },
    { title: "Catequistas e formações", text: "Cadastro dos catequistas, acesso individual e registro das formações com tema, formador e presença." },
    { title: "Finanças e carnê", text: "Entradas, saídas e o carnê de cada catequizando, com PIX, dinheiro e cartão." },
    { title: "Ritos e WhatsApp", text: "Biblioteca de roteiros de ritos em PDF e convite das famílias para o grupo de WhatsApp da turma em um clique." },
  ],
  screens: [
    { image: "/images/catequese/painel-v2.webp", title: "Painel da coordenação", text: "Os totais da paróquia, os aniversariantes do mês e atalhos para tudo o que a coordenação usa no dia a dia.", alt: "Painel inicial do sistema de catequese com totais de catequizandos, turmas, catequistas e aniversariantes, atalhos para as áreas do sistema e a lista de aniversariantes do mês." },
    { image: "/images/catequese/catequizandos-v2.webp", title: "Catequizandos", text: "Todos os catequizandos com idade, turma, catequista e responsáveis, e a situação de batismo e primeira eucaristia de cada um.", alt: "Lista de catequizandos do sistema, com totais por etapa, busca e colunas de idade, turma, catequista, responsáveis, batismo e primeira eucaristia." },
    { image: "/images/catequese/turmas-v2.webp", title: "Turmas", text: "Cada turma com seus catequistas e catequizandos, separada por etapa, com lista em PDF e convite para o grupo da turma.", alt: "Tela de turmas do sistema de catequese, com as turmas agrupadas por etapa à esquerda e a lista de catequizandos e responsáveis da turma selecionada." },
  ],
  access: [
    ["Coordenação", "Vê e gerencia tudo: inscrições, turmas, finanças, catequistas e configurações."],
    ["Catequistas", "Veem apenas as próprias turmas e os catequizandos delas."],
  ] as [string, string][],
};
export const catequeseCtaLabel = "Quero assinar";
export const catequeseOfferMessage = `Olá! Vi o Catequese Hub da Philocode (R$ ${formatPrice(catequese.pricing.monthly)}/mês, ou R$ ${formatPrice(catequese.pricing.annual)} à vista por 12 meses) e gostaria de assinar. Minha paróquia é: `;
export const catequeseFaq: FaqItem[] = [
  { question: "Preciso instalar alguma coisa?", answer: "Não. É um sistema online, por assinatura: funciona no navegador, no celular ou no computador, sem instalar nada e sem a paróquia manter servidor. Você recebe o acesso da coordenação e começa a cadastrar." },
  { question: "As famílias precisam criar conta?", answer: "Não. Elas usam apenas o link de inscrição da paróquia, preenchem os dados, enviam os documentos e aguardam a aprovação da coordenação." },
  { question: "Os dados da minha paróquia ficam separados de outras?", answer: "Sim. Cada paróquia tem o seu próprio espaço, e os dados de uma não aparecem para as outras. Os documentos ficam em armazenamento privado e abrem apenas por links temporários." },
  { question: "Quem pode ver o quê?", answer: "A coordenação acessa tudo. Cada catequista vê somente as próprias turmas e os catequizandos delas." },
  { question: "Existe desconto pagando à vista?", answer: `Sim. Pagando R$ ${formatPrice(catequese.pricing.annual)} à vista, você usa o sistema por 12 meses, o equivalente a ${catequese.pricing.annualMonths} mensalidades.` },
  { question: "O que está incluído na mensalidade?", answer: `R$ ${formatPrice(catequese.pricing.monthly)} por mês, enquanto a paróquia usar o sistema. Inclui o sistema pronto para a paróquia, acesso da coordenação, link de inscrição para as famílias, hospedagem, backups, atualizações automáticas e suporte para a coordenação e os catequistas.` },
];
/** Produtos exibidos na home. Preços vêm dos catálogos acima. */
export const products = [
  { n: "01", title: "Criação de sites", desc: "Para profissionais e empresas que precisam ser encontrados na internet e receber contatos pelo WhatsApp.", points: ["Página profissional, landing page ou institucional", "Pronto para o celular e para o Google", "Publicado no seu domínio"], priceLabel: "Projetos a partir de", price: `R$ ${formatPrice(siteOffers[0].price)}`, href: "/criacao-de-sites", link: "Ver formatos e preços" },
  { n: "02", title: "Desenvolvimento Shopify", desc: "Para lojas e agências que querem a loja do jeito que imaginaram, sem brigar com o tema.", points: ["Seções e ajustes em Liquid", "Páginas de produto e de campanha", "Prévia aprovada antes de publicar"], priceLabel: "Ajustes pontuais a partir de", price: `R$ ${formatPrice(shopifyOffers[0].price)}`, href: "/shopify", link: "Ver serviços e preços" },
  { n: "03", title: "Catequese Hub", desc: "O sistema online para catequeses que querem tudo organizado, sem fichas de papel nem planilhas espalhadas.", points: ["Inscrição online das famílias", "Turmas, chamadas e carnê", "Acesso para coordenação e catequistas"], priceLabel: "Assinatura mensal", price: `R$ ${formatPrice(catequese.pricing.monthly)}/mês`, href: "/sistema-catequese", link: "Ver o sistema por dentro" },
];
/** Seções "Isso soa familiar?": problema antes do produto, nas palavras do cliente. */
export type PainItem = { who?: string; pain: string; fix: string; href?: string; link?: string };
export type PainsContent = { eyebrow: string; title: Emphasis; items: PainItem[] };
export const pains: PainsContent = {
  eyebrow: "Isso soa familiar?",
  title: { before: "Talvez você esteja ", emphasis: "aqui", after: "." },
  items: [
    { who: "Profissionais e empresas", pain: "“Os clientes me procuram no Google e encontram o concorrente.”", fix: "Um site claro, rápido e com um caminho direto para o WhatsApp.", href: "/criacao-de-sites", link: "Ver criação de sites" },
    { who: "Lojas Shopify e agências", pain: "“Toda mudança na loja vira uma briga com o tema.”", fix: "Seções, páginas e ajustes em Liquid, feitos sob medida para o seu tema.", href: "/shopify", link: "Ver desenvolvimento Shopify" },
    { who: "Catequeses", pain: "“A catequese vive em planilhas, papéis e grupos de WhatsApp.”", fix: "Inscrições, turmas, chamadas e carnê em um só sistema online.", href: "/sistema-catequese", link: "Conhecer o Catequese Hub" },
  ],
};
export const sitePains: PainsContent = {
  eyebrow: "Isso soa familiar?",
  title: { before: "Seu trabalho é bom. Falta ", emphasis: "ser encontrado", after: "." },
  items: [
    { pain: "“Quem me indica manda o meu Instagram, e a pessoa não entende o que eu faço.”", fix: "Uma página que explica seus serviços em segundos, com o botão certo para a pessoa te chamar." },
    { pain: "“Quando me procuram no Google, aparece um site antigo que não abre direito no celular.”", fix: "Um site feito primeiro para o celular, rápido e com SEO técnico básico." },
    { pain: "“Vou fazer uma campanha e não tenho para onde mandar as pessoas.”", fix: "Uma landing page com um só objetivo: fazer a pessoa falar com você." },
  ],
};
export const shopifyPains: PainsContent = {
  eyebrow: "Isso soa familiar?",
  title: { before: "O tema quase serve. ", emphasis: "Quase", after: "." },
  items: [
    { pain: "“Falta aquela seção que a minha página de produto precisa, e o tema não tem.”", fix: "Seções personalizadas em Liquid, editáveis no próprio editor do tema." },
    { pain: "“Tenho medo de mexer no código e quebrar a loja que está vendendo.”", fix: "Cada alteração é testada antes, longe da loja que está vendendo." },
    { pain: "“A agência tem o layout pronto, mas falta quem implemente na Shopify.”", fix: "Implementamos o layout pronto, com comunicação direta com a sua equipe." },
  ],
};
export const catequesePains: PainsContent = {
  eyebrow: "Isso soa familiar?",
  title: { before: "A coordenação merece ", emphasis: "menos papel", after: "." },
  items: [
    { pain: "“Todo início de ano é uma pilha de fichas e documentos para conferir.”", fix: "As famílias se inscrevem pelo celular e enviam os documentos. A coordenação só aprova." },
    { pain: "“Ninguém sabe ao certo quem faltou em quais encontros.”", fix: "A chamada de cada encontro fica registrada, com mapa de presença em PDF ou Excel." },
    { pain: "“O carnê fica num caderno, e conferir quem pagou leva horas.”", fix: "O carnê de cada catequizando com PIX, dinheiro e cartão, e as finanças em um só lugar." },
  ],
};
/** Garantias junto ao preço: a objeção é respondida no momento da decisão. */
export const guarantees: Record<Service, string[]> = {
  sites: ["Proposta por escrito, sem letra miúda", "Domínio registrado no seu nome", "Desistiu em até 7 dias? Devolvemos o valor pago"],
  shopify: ["Nada vai ao ar sem o seu ok", "O código fica no tema da sua loja", "Horas avulsas só com estimativa aprovada"],
  catequese: ["Sem instalar nada nem manter servidor", "Dados de cada paróquia separados e privados", "Atualizações incluídas, sem custo extra"],
};
export const homeFaq: FaqItem[] = [
  { question: "Preciso entender de tecnologia para contratar?", answer: "Não. Você conta o que precisa com as suas palavras, e a gente cuida da parte técnica, explicando cada etapa sem jargão." },
  { question: "E se eu não gostar do resultado?", answer: "Antes de publicar, você vê uma prévia e pede os ajustes das rodadas combinadas na proposta. Nos sites, você ainda pode desistir em até 7 dias após a contratação, com devolução integral." },
  { question: "A Philocode atende clientes de outras cidades?", answer: "Sim. Estamos em Brasília (DF) e atendemos online profissionais, empresas, lojas, agências e catequeses de todo o Brasil." },
  { question: "Como sei qual produto escolher?", answer: "Se você precisa apresentar seu trabalho e receber contatos, conheça criação de sites. Se já usa ou quer começar na Shopify, veja desenvolvimento Shopify. Se coordena uma catequese, conheça o Catequese Hub, nosso sistema online para catequeses. Se a sua necessidade é outra, conte a ideia e avaliamos um software sob medida." },
  { question: "Os valores do site são o orçamento final?", answer: "São preços iniciais para escopos específicos. A proposta confirma entregas, investimento e prazo antes do início. Novos preços não alteram as condições de contratos existentes." },
];
export const contactSection = {
  eyebrow: "Contato", title: { before: "Vamos tirar o seu projeto ", emphasis: "do papel", after: "?" },
  text: "Mande uma mensagem contando o que você precisa, do seu jeito. A gente responde com os próximos passos.", facts: ["Brasília (DF) · Atendimento online para todo o Brasil"],
};
export type Testimonial = { quote: string; author: string; role: string };
export const testimonials: Testimonial[] = [];
