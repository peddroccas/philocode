> **Revisão vigente de 29/10/2026 — prevalece sobre o histórico abaixo.** Site com início, `/criacao-de-sites` e `/shopify`. Sites: página profissional R$ 990; landing page R$ 1.490; institucional de até 5 páginas R$ 2.490, todos como preços iniciais. Não anunciar limite de seções; definir conteúdo e funcionalidades na proposta. Incluem design, desenvolvimento, responsividade, SEO básico, WhatsApp, publicação e duas rodadas de ajustes no escopo. Materiais fornecidos pelo cliente. Custos externos e recursos adicionais separados.
>
> **Shopify:** desenvolvimento e personalização, sem design avulso. Ajustes desde R$ 290; seção Liquid R$ 590; página R$ 1.490; configuração de loja sobre tema existente, até 10 produtos, R$ 3.490; personalização de até três modelos de página sobre tema existente, R$ 5.990; avulso R$ 180/h. Páginas adaptadas ao tema/referências ou implementadas a partir de layout fornecido. Layout inteiramente novo exige avaliação e eventual parceiro designer. Custos Shopify, temas, domínio e apps separados; integrações complexas, migrações, apps próprios, headless e Plus fora dos pacotes. Alterações de tema em cópia não publicada com aprovação antes da publicação; apps e recursos globais alinhados separadamente.
>
> **Recorrência opcional:** sites R$ 129/mês técnico, R$ 249/mês técnico e até 1h de pequenas alterações; Shopify 5h por R$ 850/mês ou 10h por R$ 1.590/mês. Horas não acumulam e excedentes exigem aprovação. Sem atendimento ilimitado. Condições de clientes existentes preservadas. Promoção de 40%, vagas e calculadora por página removidas. CNPJ não confirmado oculto. Domínio verificado: `https://philocode.vercel.app`. Catálogo em `src/content/site.ts` como fonte única. Contratos solicitados e depois cancelados pelo usuário; não produzir nesta entrega.

# Briefing — Site institucional da PhiloCode

> **Nova marca (21/10/2026):** a empresa passou a se chamar **PhiloCode** (antes “Pôrto”, razão social “Porto Studio”). Os textos do site e este documento foram atualizados. Logos novas exportadas do Figma com fundo transparente: `public/images/philocode-logo.png` (âncora + nome em grafite, cabeçalho) e `public/images/philocode-logo-escuro.png` (âncora + nome claros, rodapé e imagem de compartilhamento).
>
> Fonte: formulário “Briefing Site Institucional” (Tally, submissão `e5Geoyk`, 16/10/2026), arquivos de marca enviados (logo e favicons) e complementos enviados pelo cliente no chat entre 16 e 20/10/2026. Oferta atual: **Essential** (site de uma página) **R$ 499**, primeira versão em 2 dias úteis · **Premium** (até 5 páginas) **R$ 1.197**, primeira versão em 5 a 7 dias úteis · **página extra R$ 150** · **2 rodadas de ajuste** (rodada = lista de pedidos enviada de uma vez) · **rodada extra R$ 150** · **pagamento via Pix: 50% de sinal e 50% na entrega** · **manutenção R$ 49/mês ou R$ 490/ano** (hospedagem, SSL, backup, 1 rodada de ajustes por mês, que não acumula; sem fidelidade) · **domínio registrado e pago pelo cliente, no nome dele; a PhiloCode conecta ao site** · **lançamento para os 5 primeiros clientes: 40% de desconto** (Essential R$ 299 e Premium R$ 718), em troca de depoimento e autorização de portfólio. Hospedagem: Vercel Pro.
>
> **Revisão de 21/10/2026 (oferta e textos atuais — prevalece sobre o restante deste documento):** preço por página — **primeira página R$ 499 + R$ 175 por página a mais** (2 = R$ 674; 3 = R$ 849; 5 = R$ 1.199); saíram os pacotes Essential/Premium. Lançamento: 40% para os 5 primeiros (R$ 299 + R$ 105 por página a mais), sem contrapartida exibida no site. Manutenção **R$ 59/mês ou R$ 590/ano** (hospedagem, segurança, backup, uma rodada de ajustes por mês, sem fidelidade). Rodada extra R$ 150. Domínio registrado pelo cliente. Textos reescritos em tom profissional e reduzidos: sem prazos de entrega, sem Pix e sem sinal; processo em 3 passos (Conversa, Criação, Publicação); 5 perguntas frequentes. Saíram a barra fixa de WhatsApp no celular, o título “…que ainda não estão na internet” (agora “Sites profissionais, feitos sob medida para o seu negócio.”) e o sinal “3 sites publicados”.
>
> **Cores finais (21/10/2026):** o botão de tema claro/escuro foi testado e **removido** a pedido do cliente. Valem as cores originais com o hero escuro: barra de anúncio escura, cabeçalho branco, **hero escuro com a maré de pixels**, projetos, como funciona, valores e dúvidas claros, contato em grafite e rodapé escuro.
>
> **Volta ao tema claro (21/10/2026):** a pedido do cliente, o site inteiro ficou claro de novo. Hero, cabeçalho, menu mobile, “Como funciona”, contato e rodapé claros; a maré de pixels continua no hero, com pontos em grafite que acendem em azul perto do cursor. Só a barra de anúncio e o cartão da oferta de lançamento seguem escuros, como destaque da promoção.
>
> **Hero e ritmo visual (21/10/2026):** depois de comparar quatro direções (página de opções publicada), o cliente escolheu a **“Maré de pixels”**: hero escuro com uma grade de pontos em canvas que ondula devagar e acende em azul perto do cursor (pausa fora da tela e com a aba oculta; fica parada com “reduzir movimento”). O cartão “Seu site PhiloCode” saiu. Cabeçalho e menu mobile passaram a ser escuros (logo escura original) para o topo formar um bloco só; “Como funciona” também ficou escura. Ritmo da página: escuro (topo) · claro (projetos) · escuro (processo) · claro (valores e dúvidas) · escuro (contato e rodapé). A faixa de lançamento ganhou o próprio seletor de páginas, sincronizado com a calculadora (os dois mostram o mesmo total, com um destaque curto quando o valor muda). Padding das seções no celular reduzido para 48 px. `overflow-x: clip` no body evita rolagem lateral.
>
> **Ajustes finais de 21/10/2026:** hero com um **cartão “Seu site PhiloCode”** (âncora pequena + o que vem no site: apresentação do negócio, serviços explicados com clareza, botão direto para o WhatsApp, publicado no seu domínio; rodapé “Duas rodadas de ajustes incluídas”), no lugar da âncora grande; sinais do hero: “Design exclusivo, sem templates · Pensado para gerar contatos · Pronto para celular e Google”; saiu o link “Ver projetos”; seção “Preços” renomeada para **“Valores”** (`#valores`); carrossel de projetos sem barra de rolagem; resposta sobre domínio sem citar preço.
>
> **Análise de conversão de 21/10/2026 (aplicada):** botão principal “Solicitar orçamento” (ícone do WhatsApp mantido); hero sem capturas de projetos (duplicavam o portfólio): no lugar, a âncora da marca em vetor, desenhada com a geometria do favicon; sinais do hero “Design sob medida · Preparado para o Google”; “Atendimento online” e “Atendimento direto…” removidos; projetos em carrossel no celular e grade 2 × 2 no computador, com o novo projeto **Jaqueline Trigueiro** (design de sobrancelhas, Ceilândia/DF); tabela de exemplos trocada por **calculadora** de 1 a 6 páginas (total + total com lançamento; o botão envia o número de páginas na mensagem); mensagens do WhatsApp terminam com “Meu negócio é: ”. Recusadas pelo cliente: preço no hero, pergunta sobre prazo, linha de garantia de 7 dias perto do preço, esconder o CNPJ pendente. Pendente: pedir depoimentos aos clientes do portfólio.
>
> **Revisão de 20/10/2026:** a esposa do cliente achou o site caro e com informação demais. O cliente reduziu os preços (de R$ 997/R$ 1.997 para R$ 597/R$ 1.197; lançamento de R$ 500/R$ 997 para R$ 497/R$ 997) e aprovou o enxugamento: saíram as seções “Para quem é” (serviços, redundante com os planos) e “Por que a PhiloCode” (diferenciais, redundante com hero e processo); o processo passou de 6 para 4 passos; preços de 5 para 3 blocos; perguntas frequentes de 8 para 5. A página extra caiu de R$ 297 para R$ 150 para ficar coerente com o Premium (4 páginas a mais por R$ 600).
> Legenda: **[Confirmado]** = informado pelo cliente · **[Sugerido]** = direção criativa ou texto proposto a partir da análise · **[Pendente]** = dado ausente, inconsistente ou a confirmar.

---

## 1. Título do projeto

**PhiloCode — site institucional** (one-page em Next.js + Tailwind CSS).

## 2. Objetivo do site

- **[Confirmado]** Receber mais contatos.
- **[Confirmado]** Ação principal: o visitante agendar um atendimento — “chamar no WhatsApp / book a call”.
- **[Confirmado]** Resultado que a PhiloCode busca para o cliente: aumentar o faturamento de pessoas e empresas.
- **[Sugerido]** O site também funciona como **amostra do produto**: é o primeiro “site da PhiloCode” que o visitante vê, então o acabamento, a velocidade e a clareza dele são argumentos de venda.

## 3. Perfil do cliente e do negócio

| Campo | Dado | Status |
|---|---|---|
| Razão social | PhiloCode (antes “Porto Studio”; confirmar a razão social registrada) | **Pendente** |
| Nome no site | **PhiloCode** (nova marca em 21/10/2026; antes “Pôrto”) | Confirmado |
| Ramo | Criação de sites | Confirmado |
| Como explica o negócio | “Nós criamos sites, basicamente criamos sua presença na internet.” | Confirmado |
| Tempo de mercado | Empresa sendo aberta agora | Confirmado |
| Sede | Brasília (DF) | Confirmado |
| Slogan | “Sites que transformam negócios.” (banner enviado com as novas logos) | Confirmado |
| Modalidade | Atendimento online | Confirmado |
| CNPJ | Respondeu “Sim”, mas o número “não tem ainda” | **Pendente** |
| Conselho / certificações / prêmios | Não se aplica / não possui | Confirmado |
| Outros serviços | “Por enquanto não, mas vamos fazer eventualmente” | Confirmado |
| História | “Tive o insight de começar uma empresa e fui para onde tinha facilidade, desenvolvimento” | Confirmado (não exibir: cliente não quer seção de história) |
| Propósito | Gosto por lógica, programação e principalmente resolver problemas | Confirmado (usado como tom, não como seção) |

## 4. Público-alvo e suas situações

- **[Confirmado]** Pessoas e empresas que **não possuem site** e se beneficiariam de ter um.
- **[Confirmado]** Motivação: **falta de presença na internet**.
- **[Sugerido, com base no portfólio enviado]** Duas situações concretas em que o público procura a PhiloCode:
  1. **Profissional que atende clientes** (psicologia, advocacia, farmácia clínica — os três projetos publicados são desse tipo) e precisa de uma página que apresente a pessoa e facilite o contato.
  2. **Empresa** que precisa de um **site institucional** para apresentar quem é, o que oferece e como falar com ela.

## 5. Serviços e proposta de valor

- **[Confirmado]** Serviço único: **criação de sites profissionais e institucionais (para empresas)**. É o que a empresa tem hoje e o que deve ser destacado.
- **[Confirmado]** Diferenciais: **AI First, velocidade e qualidade do produto**.
- **[Confirmado]** O que os clientes mais valorizam: **atendimento e qualidade do serviço**.
- **[Confirmado — complemento do cliente]** Oferta: **Essential** (site de uma página) **R$ 499**, primeira versão em 2 dias úteis · **Premium** (até 5 páginas) **R$ 1.197**, primeira versão em 5 a 7 dias úteis · **página extra R$ 150** · **2 rodadas de ajuste** (rodada = lista de pedidos enviada de uma vez) · **rodada extra R$ 150** · **pagamento via Pix: 50% de sinal e 50% na entrega** · **manutenção R$ 49/mês ou R$ 490/ano** (hospedagem, SSL, backup, 1 rodada de ajustes por mês, que não acumula; sem fidelidade) · **domínio registrado e pago pelo cliente, no nome dele; a PhiloCode conecta ao site** · **lançamento para os 5 primeiros clientes: 40% de desconto** (Essential R$ 299 e Premium R$ 718), em troca de depoimento e autorização de portfólio. Nomes dos pacotes escolhidos pelo cliente (em inglês; “Signature” foi descartado por lembrar “assinatura”/mensalidade). O valor da rodada extra (R$ 150) foi sugerido e o cliente delegou a decisão. Histórico de preços na seção 26.
- **[Confirmado — complemento do cliente]** Processo comercial: **call opcional**; **pagamento via Pix, 50% de sinal e 50% na entrega**; **2 rodadas de ajuste**; primeira versão em **2 dias úteis** (Essential) ou **5 a 7 dias úteis** (Premium).
- **[Sugerido]** Proposta de valor: *a PhiloCode cria sua presença na internet com um site claro e bem acabado, feito para que as pessoas entendam o que você faz e entrem em contato.*
- Termos do cliente que precisam aparecer no site: “presença na internet”, “sites profissionais”, “sites institucionais”, “AI First”, “velocidade”, “qualidade”, “call”, “agendar”.

## 6. Conversão e principal barreira

- **Ação principal:** chamar no WhatsApp. **[Confirmado — complemento]** A call é **opcional** e o cliente **não precisa de agendamento online**; o WhatsApp é o canal único de entrada.
- **Texto padrão do botão [Sugerido]:** **“Chamar no WhatsApp”** — usa a expressão do próprio cliente (“chamar no wpp”), diz o que acontece e por qual canal. Substituiu “Agendar call pelo WhatsApp” quando a call passou a ser opcional. Definido uma única vez em `src/content/site.ts` (`primaryCta.label`).
- **Principais barreiras [Confirmado]:** “Quanto tempo demora?”, “Tem manutenção?” e, talvez, preço.
- **Barreira de confiança [Sugerido]:** a empresa é nova, sem depoimentos enviados e sem avaliações no Google. A confiança é construída com **projetos reais publicados** (três sites no ar, com link), um **processo explicado passo a passo** e o próprio acabamento do site.
- Como o design reduz as barreiras: portfólio clicável logo após os serviços; seção “Como funciona” com as seis etapas (do contato ao site no ar, com prazo e pagamento); **seção “Preços” com valores claros** (R$ 997 com primeira versão em 2 dias úteis, e manutenção com o que está incluído e domínio no nome do cliente); perguntas frequentes respondendo prazo, valor, manutenção e domínio, com detalhes ainda pendentes na seção 24.

## 7. Direção de arte e conceito criativo

**Conceito [Sugerido]: “Ancoragem”.** O porto é o lugar onde o barco atraca; o site é o lugar onde o negócio passa a existir na internet. A âncora da logo é desenhada em degraus de pixel, unindo o porto (calma, segurança) ao código (precisão). O site traduz isso em uma interface **clara e calma**, com um único sinal azul (o mesmo azul dos “braços” da âncora) guiando o olhar até a ação.

**Personalidade [Confirmado]:** profissional, confiável, premium, elegante, minimalista. Em uma frase do cliente: **“clean e aconchegante”** — “bonito, clean, sem cores muito fortes, tema mais claro”.

**Tradução visual [Sugerido]:**
- Fundo claro (slate 50) predominante, superfícies brancas, texto em grafite da marca.
- Aconchego vem da tipografia: títulos em sans geométrica com **palavras-chave em serifa itálica**, dando calor sem perder a sobriedade.
- Motivo gráfico: **degraus em pixel** (da base da âncora) usados como divisor e na escada do “Como funciona”; **traço azul curto** (dos braços da âncora) como marcador de rótulos.
- Seção de contato em **gradiente grafite (#2c3037 → #20242b)**, a cor da âncora, como “fundo do porto” antes do rodapé.

## 8. Identidade visual e paleta

- **[Confirmado]** Logotipo existe (âncora em pixel + “PhiloCode”), versões clara e escura, horizontal e vertical, e favicons.
- **[Confirmado]** Identidade “parcialmente” definida. Cores informadas: **gradiente #2c3037 → #20242b** e **slate 50**. Cor a evitar: **rosa**.
- **[Confirmado pelos arquivos]** O azul dos braços da âncora é **#2389f8**; o fundo das versões escuras é **#020618**.

| Papel | Hex | Token Tailwind | Uso |
|---|---|---|---|
| Fundo principal | `#f8fafc` | `canvas` | Fundo da página (slate 50 informado pelo cliente) |
| Superfície | `#ffffff` | `surface` | Cabeçalho, cartões |
| Texto / títulos | `#20242b` | `ink` | Títulos e texto (fim do gradiente da marca) — 15,6:1 sobre `canvas` |
| Grafite | `#2c3037` | `graphite` | Início do gradiente, superfícies escuras |
| Texto secundário | `#525a66` | `muted` | Textos de apoio — 6,6:1 sobre `canvas` |
| Linhas | `#e2e8f0` | `line` | Bordas e divisores |
| Azul da marca | `#2389f8` | `brand` | Detalhes gráficos, anel de foco, marcadores (não usado em texto pequeno sobre claro) |
| Destaque (ação) | `#1468c8` | `accent` | **Somente** o botão principal — texto branco 5,5:1 (AA) |
| Destaque hover | `#0f57a8` | `accent-strong` | Hover/ativo do botão principal |
| Noite | `#020618` | `night` | Rodapé (mesmo fundo da logo escura) |
| Texto sobre escuro | `#f8fafc` / `#aab2bf` | `canvas` / `mist` | Títulos e apoio em fundos escuros — `mist` 7,6:1 sobre `#20242b` |

O azul da logo (#2389f8) com texto branco tem contraste 3,7:1 e não passa AA para texto de botão; por isso o botão usa uma versão mais profunda do mesmo azul (`accent`). Nenhum tom de rosa é usado.

## 9. Tipografia [Sugerido]

| Uso | Família | Peso | Mobile → Desktop |
|---|---|---|---|
| Títulos (`h1`, `h2`, `h3`) | **Figtree** (sans geométrica próxima do lettering “PhiloCode”) | 600 | h1 36 → 64 px · h2 30 → 44 px · h3 20 → 22 px |
| Palavra-chave em títulos | **Instrument Serif** itálico | 400 | mesmo tamanho do título |
| Texto corrido | Figtree | 400 | 16 → 18 px (lead 18 → 20 px), entrelinha 1,6 |
| Navegação e botões | Figtree | 500 / 600 | 15–16 px |
| Rótulos (eyebrows), números de etapa, domínios | **JetBrains Mono** | 500 | 12–13 px, caixa alta, espaçamento 0,08 em |

Carregadas com `next/font/google`, `display: "swap"`, apenas os pesos acima. A fonte mono é um aceno discreto ao lado “código / AI First” da empresa.

## 10. Direção de imagens

- **[Confirmado]** Não há fotos profissionais, fotos de espaço nem vídeos.
- **[Sugerido]** A imagem real mais forte que a PhiloCode tem é **o próprio trabalho**. O site usa **capturas de tela dos três sites publicados** (capturadas em 1440 × 900, 2×, em 16/10/2026), apresentadas em molduras de navegador desenhadas em CSS.
- Nada de banco de imagens, mockups 3D genéricos ou ilustrações de “equipe”.
- Formas gráficas apenas em CSS/SVG inline: degraus em pixel e traço azul.

## 11. Materiais disponíveis

| Arquivo | Conteúdo verificado | Uso |
|---|---|---|
| `… Logo horizontal (âncora) — Layout claro — Sem fundo.png` (540 × 275) | Âncora + “PhiloCode” em grafite, fundo transparente | Recortado → `public/images/philocode-logo.png` (cabeçalho) |
| `… Logo horizontal — Layout escuro — Sem fundo.png` (554 × 275) | Âncora + “PhiloCode” claros, fundo transparente | Recortado → `public/images/philocode-logo-escuro.png` (rodapé e imagem de compartilhamento) |
| `… Logo horizontal — Layout claro/escuro` (com e sem fundo) | Apenas a palavra “PhiloCode” | Não usado |
| `… Logo vertical …` (claro e escuro) | Âncora sobre “PhiloCode” | Não usado (reserva para redes/OG) |
| `Favicon - escuro.png` / `Favicon - claro.png` | Âncora isolada, fundo transparente | Escuro → `src/app/icon.png` |
| Sites do portfólio | laura-antunes.vercel.app, adv-mateus-marques.vercel.app, farmarafaelaantunes.com | Capturas em `public/images/projetos/` |

Observações: as logos vêm do Figma da marca (21/10/2026), já com o nome **PhiloCode** e exportadas com fundo transparente; o arquivo também tem dois banners 1584 × 396 (um com o slogan “Sites que transformam negócios.”), não exibidos no site. Os PNG têm ≈ 420 px de largura útil; funcionam no cabeçalho e no rodapé, mas uma **logo em SVG** continua recomendada. Os links do Tally são privados e temporários; foi usada a cópia local do formulário.

## 12. Estrutura de páginas

**[Sugerido]** One-page com âncoras (o serviço é único e a ação é uma só; várias páginas só diluiriam o caminho até a call).

Seções solicitadas **[Confirmado]** e onde estão:

| Solicitado | Onde está |
|---|---|
| Início | Hero (`#inicio`) |
| Serviços + Especialidades | Dentro dos planos de preço (“Para profissionais e pequenos negócios” / “Para empresas com vários serviços”). A seção própria saiu na revisão de 20/10 |
| Experiência profissional | “Projetos” (`#projetos`) — portfólio real |
| Depoimentos | **Não exibida** — cliente diz ter, mas nenhum foi enviado (estrutura pronta em `site.ts`, renderiza só se houver itens) |
| Perguntas frequentes | `#duvidas` |
| Contato + Agendamento | `#contato` |

| Preços (pedido no complemento do chat) | `#precos` |

Também incluído **[Sugerido]**: “Como funciona” (processo descrito pelo cliente). “Por que a PhiloCode” existiu até 20/10 e saiu na revisão. Não incluídos: Sobre/história (cliente respondeu “Não”), Localização (atendimento só online).

Ordem: Barra de anúncio → Cabeçalho → Hero → Projetos → Como funciona → Preços → Dúvidas → Contato → Rodapé, + barra fixa mobile. O visitante vê quem já é atendido, entende o processo e só então vê o preço.

## 13. Descrição das seções

### 13.0 Barra de anúncio (`AnnouncementBar`)
- **Finalidade:** avisar logo na entrada que há preço de lançamento, sem competir com o botão principal.
- **Conteúdo:** “40% de desconto para os 5 primeiros clientes” · “5 de 5 vagas” · “Ver oferta →”. A barra inteira é um link para a faixa de lançamento (`#lancamento`), com `data-cta="barra-anuncio"`.
- **Composição:** faixa fina em `night` acima do cabeçalho, com os quadradinhos de vagas em azul (desktop). No mobile quebra em duas linhas, sem cobrir o botão principal da primeira tela.
- **Regra:** usa o mesmo `pricing.launch` da faixa de preços; some sozinha quando `active` é `false` ou as vagas chegam a zero.

### 13.1 Cabeçalho (`Header`)
- **Finalidade:** marca + navegação + ação sempre visível.
- **Conteúdo:** logo (link para o topo), links Serviços · Projetos · Como funciona · Dúvidas · Contato, botão principal.
- **Composição:** `sticky top-0`, fundo branco translúcido com desfoque e linha inferior. Logo 32–36 px de altura.
- **Mobile (< lg):** logo + botão “Menu” (`aria-expanded`, `aria-controls`); painel com os links e o botão principal; fecha ao clicar em link ou com Esc. O botão principal não aparece no cabeçalho mobile porque a barra fixa inferior já cumpre esse papel.
- **CTA:** `data-cta="header"`.

### 13.2 Hero (`Hero`)
- **Finalidade:** dizer em segundos o que é, para quem, e oferecer a call.
- **Conteúdo [Sugerido, baseado no formulário]:**
  - Rótulo: “PhiloCode · Criação de sites”
  - `h1`: “Sites profissionais para empresas e profissionais que *ainda não estão na internet*.”
  - Subtítulo: “A PhiloCode cria a sua presença na internet: um site claro, bem acabado e pensado para que as pessoas entendam o que você faz e entrem em contato.”
  - Botão principal + link secundário “Ver projetos”.
  - Sinais de confiança **[Confirmado]**: “Site de uma página em 2 dias úteis” · “Atendimento online · Brasília (DF)” · “3 sites publicados”.
- **Composição:** desktop 2 colunas (texto à esquerda, ~55%; à direita duas molduras de navegador sobrepostas com capturas reais de projetos e etiqueta “Projetos reais da PhiloCode”). Fundo `canvas` com grade de pixels muito sutil.
- **Mobile:** rótulo → título → subtítulo → botão (largura total) → link → sinais → imagem (abaixo da dobra, sem empurrar o botão).
- **CTA:** `data-cta="hero"`.

### 13.3 Para quem é (`Services`) — removida em 20/10/2026
Repetia o que os planos já dizem (site profissional = Essential; site institucional = Premium). O “para quem” foi para a descrição de cada plano.

### 13.4 Projetos (`Projects`) — “Experiência profissional”
- **Finalidade:** provar a qualidade com trabalho real (principal sinal de confiança disponível).
- **Conteúdo [Confirmado]:** três sites publicados + “mais dois em desenvolvimento”.
  - Laura Antunes — Psicóloga · laura-antunes.vercel.app
  - Mateus Marques Rosa — Advocacia criminal · adv-mateus-marques.vercel.app
  - Rafaela Antunes — Farmacêutica clínica · farmarafaelaantunes.com
  (Segmentos lidos nos próprios sites publicados.)
- **Composição:** o primeiro projeto em destaque (largura total, captura à esquerda, texto à direita); os outros dois lado a lado. Capturas em moldura de navegador com o domínio em mono. Link “Ver site no ar ↗” (nova aba).
- **Fecho:** “Mais dois projetos em desenvolvimento.” + botão principal (`data-cta="projetos"`).

### 13.5 Por que a PhiloCode (`Differentials`) — removida em 20/10/2026
AI First, velocidade, qualidade e atendimento já aparecem no hero (prazo de 2 dias úteis), nos projetos e no processo.

### 13.6 Como funciona (`Process`)
- `h2`: “Simples, do início *ao fim*.”
  1. **Conversa** — “Você conta sobre o seu negócio e o que espera do site.”
  2. **Criação** — “Desenvolvemos o site e fazemos os ajustes que você pedir.”
  3. **Publicação** — “O site vai ao ar no seu domínio, pronto para receber contatos.”
- Desktop: três degraus; mobile: lista com linha guia. CTA “O primeiro passo é uma conversa.” (`data-cta="processo"`).

### 13.7 Preços (`Pricing`)
- `h2`: “Preço claro, *sem surpresa*.” — apoio: “Você paga pelo número de páginas que o seu site precisa.”
- **Faixa de lançamento** (`#lancamento`): “40% de desconto para os 5 primeiros clientes” · vagas em quadradinhos · Primeira página **R$ 299** (normal R$ 499) · Cada página a mais **R$ 105** (normal R$ 175) · botão (`data-cta="lancamento"`).
- **Site sob medida**: Primeira página **R$ 499** · Cada página a mais **R$ 175** · inclui: design feito para o seu negócio, funciona no celular e no computador, duas rodadas de ajustes, publicação no seu domínio · botão (`data-cta="precos"`) · tabela de exemplos (1, 2, 3 e 5 páginas).
- **Linha da manutenção:** “Manutenção: R$ 59/mês ou R$ 590/ano — hospedagem, segurança, backup e uma rodada de ajustes por mês. Sem fidelidade.”

### 13.8 Dúvidas (`Faq`)
- **Finalidade:** responder às dúvidas e objeções informadas.
- **Perguntas:** prazo, manutenção, valor, como é o atendimento (ver seção 14 e pendências).
- **Composição:** desktop 2 colunas — título + cartão “Não encontrou sua dúvida?” à esquerda (sticky), acordeão à direita. `<details>`/`<summary>` nativos, ícone “+” que gira para “×”, cartão aberto com fundo branco e borda azul à esquerda.
- **CTA:** “Não encontrou sua dúvida? Fale com a gente” + botão principal (`data-cta="duvidas"`, mensagem própria).

### 13.9 Contato (`Contact`)
- **Finalidade:** última chamada com os dados reais visíveis.
- **Conteúdo:** `h2` “Vamos colocar seu negócio *na internet*?” · apoio · botão principal · WhatsApp **(61) 99901-6604** · e-mail **pedroabernardes11@gmail.com** · “Atendimento online · Sediada em Brasília (DF)”.
- **Composição:** fundo gradiente grafite da marca, texto claro, cartões de contato com borda translúcida.
- **CTA:** `data-cta="contato"`.

### 13.10 Rodapé (`Footer`)
- Fundo `night` (#020618) com a logo escura original, slogan “Sites que transformam negócios.”, navegação, contatos clicáveis, “PhiloCode · CNPJ [A CONFIRMAR]”.

### 13.11 Barra fixa mobile (`MobileCtaBar`)
- Abaixo de `md`: barra branca fixa no rodapé da tela com o botão principal (largura total, 48 px+), respeitando `safe-area-inset-bottom`; a página ganha espaço inferior equivalente para não cobrir o rodapé. `data-cta="barra-mobile"`.

## 13.12 Políticas de cancelamento e transferência [Confirmado pelo cliente em 16/10/2026]

- **Manutenção sem fidelidade e sem multa.** Mensal: o site fica no ar até o fim do mês já pago. Anual: fica no ar até o fim do ano pago, **sem reembolso** proporcional.
- **Transferência gratuita ao cancelar:** repositório com o código completo, imagens, passo a passo de publicação e ajuda para colocar o site no ar na conta do cliente (ou de quem ele indicar). O domínio já é do cliente.
- **Sinal devolvido integralmente em até 7 dias da contratação** (art. 49 do CDC: direito de arrependimento em contratação fora do estabelecimento, como internet e WhatsApp), **para qualquer cliente**, pessoa física ou empresa, para simplificar. O cliente desiste pelo mesmo WhatsApp da contratação (Decreto 7.962/2013, art. 5º). Depois de 7 dias, o sinal não é devolvido, porque paga o trabalho já feito. Política anterior (“não reembolsa após a produção começar”) foi revista após conferência do CDC.
- **Onde aparece:** perguntas frequentes (“E se eu quiser cancelar a manutenção?”, “E se eu desistir depois de pagar o sinal?”) e item “Cancelamento” nas condições da seção de preços.

## 14. Conteúdos e textos

Todos os textos finais estão em `src/content/site.ts`. Respostas das perguntas frequentes:

| Pergunta | Resposta no site |
|---|---|
| Quantas páginas o meu site precisa? | “A maioria dos profissionais começa com uma página, que reúne apresentação, serviços e contato. Empresas com vários serviços costumam precisar de mais. Na conversa, indicamos o formato ideal para o seu caso.” |
| O que é uma rodada de ajustes? | “É a lista com tudo o que você quer mudar no site, enviada de uma vez. Cada projeto inclui duas rodadas; rodadas extras custam R$ 150.” |
| Como funciona a manutenção? | “Custa R$ 59 por mês ou R$ 590 por ano e inclui hospedagem, segurança (SSL), backup e uma rodada de ajustes por mês. Não há fidelidade: se cancelar, entregamos o código do site e ajudamos a publicá-lo onde você preferir.” |
| Quem registra o domínio? | “Você, no seu nome. Um domínio .com.br custa R$ 40 por ano no Registro.br. Nós conectamos o domínio ao site.” |
| Posso desistir depois de contratar? | “Sim. Em até 7 dias após a contratação, devolvemos integralmente o valor pago.” (direito de arrependimento, art. 49 do CDC; mantido por exigência legal) |

Todas as respostas são **[Confirmado]** pelo cliente; a redação é sugerida.

## 15. Botões e chamadas para ação

- **Texto único:** “Chamar no WhatsApp” (`primaryCta.label`). Links por cartão de serviço usam estilo de link e o mesmo canal.
- **WhatsApp:** `https://wa.me/5561999016604?text=…` gerado por `src/lib/whatsapp.ts`.
- **Mensagens pré-preenchidas [Sugerido — a validar com o cliente]:**

| `data-cta` | Mensagem |
|---|---|
| `header`, `hero`, `contato`, `contato-whatsapp`, `rodape`, `barra-mobile`, `menu-mobile` | “Olá! Vim pelo site da PhiloCode e gostaria de fazer o meu site.” |
| `projetos` | “Olá! Vi os projetos no site da PhiloCode e gostaria de fazer o meu site.” |
| `processo` | “Olá! Vim pelo site da PhiloCode e gostaria de começar o meu site.” |
| `plano-essential` | “Olá! Vi os preços no site da PhiloCode e quero o Essential (site de uma página).” |
| `plano-premium` | “Olá! Vi os preços no site da PhiloCode e quero o Premium (site com até 5 páginas).” |
| `lancamento` | “Olá! Vi no site da PhiloCode a oferta de lançamento e quero uma das 5 vagas.” |
| `barra-anuncio` | Link interno para `#lancamento` (não abre o WhatsApp). |
| `duvidas` | “Olá! Tenho uma dúvida sobre a criação de sites da PhiloCode.” |

## 16. Dados reais

| Dado | Valor | Status |
|---|---|---|
| WhatsApp | +55 61 99901-6604 | Confirmado |
| Telefone fixo | mesmo número do WhatsApp | Confirmado — exibido uma vez |
| E-mail | pedroabernardes11@gmail.com | Confirmado (informado como e-mail profissional) |
| Instagram / LinkedIn / outras redes | O formulário traz apenas `https://www.instagram.com/` (página inicial, sem perfil) | **Pendente** — não exibido |
| Perfil no Google | Não possui | Confirmado |
| Domínio | A PhiloCode ainda não tem domínio próprio. **Política para clientes:** domínio registrado no nome do cliente | **Pendente** (domínio da PhiloCode) / Confirmado (política) |
| Hospedagem | Possui | Confirmado (qual não foi informado) |
| Site atual | Não possui | Confirmado |
| Horários | Não há horários a informar | Confirmado |
| Agendamento | Sem agendamento online: contato pelo WhatsApp, call opcional combinada na conversa | Confirmado (complemento) |

## 17. Experiência do usuário

- Um caminho só: entender → ver projetos reais → entender o processo e o preço → chamar no WhatsApp.
- A ação principal aparece no cabeçalho, no hero, em cada cartão de serviço, após os projetos, após o processo, nas dúvidas, no contato e na barra mobile.
- Links externos de projetos abrem em nova aba; âncoras com `scroll-mt` para não ficar sob o cabeçalho fixo.
- Sem formulário no site: o cliente não pediu e não há destino para os dados. O briefing do Tally é enviado depois do primeiro contato pelo WhatsApp, conforme o processo do cliente.

### 17.1 Animações de entrada — revistas em 20/10/2026

A primeira versão animava todas as seções ao rolar (títulos, textos, cartões, ícones). A pedido do cliente, foi reduzida ao que os sites de referência fazem:
- **Concorrentes diretos (UpSites, Lucas Ferraz):** nenhum efeito de aparecer ao rolar; texto sempre parado.
- **Agência grande (Instrument):** anima só a grade de trabalhos do portfólio.
- **Referência de acabamento (Linear):** texto parado; movimento só nas ilustrações do produto.

**Regra atual: texto nunca anima; só imagens de trabalho.**
- Capturas do hero: sobem levemente e aparecem ao carregar a página (`frame`, `frame-left`), com a etiqueta “Projetos reais publicados pela PhiloCode” em `fade`.
- Cartões de projetos: sobem levemente quando entram na tela (`frame`).
- Curva `cubic-bezier(0.16, 1, 0.3, 1)`, 1 s, 32 px de deslocamento. `prefers-reduced-motion` desliga tudo; sem JavaScript tudo aparece normalmente.
- Código: `src/lib/reveal.ts`, `src/components/layout/RevealObserver.tsx`, bloco de animação em `src/app/globals.css`.

## 18. Responsividade

Mobile-first, breakpoints Tailwind; referência 1440 / 768 / 390 / 360 px; conteúdo até 1248 px (`max-w-312`).
- **Hero:** 1 coluna no mobile com botão na primeira tela; 2 colunas a partir de `lg`.
- **Serviços:** 1 → 2 colunas (`md`).
- **Projetos:** destaque empilhado no mobile e horizontal a partir de `lg`; outros dois 1 → 2 colunas.
- **Diferenciais:** 1 → 2 (`sm`) → 4 (`lg`).
- **Processo:** lista vertical com linha guia no mobile/tablet; degraus a partir de `lg`.
- **Dúvidas:** 1 coluna no mobile (cartão “não encontrou” abaixo do acordeão); 2 colunas a partir de `lg`.
- Botões principais com largura total no mobile, altura mínima 48 px. Nenhuma rolagem horizontal.

## 19. Acessibilidade

- Contraste AA (ver tabela de cores); foco visível com anel azul `brand` em todos os interativos.
- Um `h1`; `h2` por seção; `h3` nos cartões. Marcos `header`, `nav`, `main`, `footer`.
- Menu mobile com `aria-expanded`/`aria-controls`, Esc fecha; acordeão nativo `<details>`.
- Ícones decorativos com `aria-hidden`; links externos avisam “(abre em nova aba)” para leitores de tela.
- Animações apenas `motion-safe:`.
- Link “Pular para o conteúdo”.

## 20. Confiança e prova social

- **Usado:** projetos reais publicados (com link), processo transparente, sede e modalidade de atendimento.
- **Não usado:** depoimentos (não enviados), avaliações (não possui perfil no Google), anos de mercado (empresa nova), números de clientes além dos projetos listados.
- Nenhum espaço visual sugere avaliações ou selos inexistentes.

## 21. Restrições e o que não aparece

- **[Confirmado]** A fé cristã dos sócios **não deve aparecer** no site.
- Não há seção de história (cliente respondeu “Não”).
- Nada de rosa.
- Nenhuma promessa de resultado (“aumentar o faturamento” é o objetivo do cliente, não uma garantia exibida) e nenhuma urgência artificial. Os preços aparecem só com os valores informados, sem “de/por”, sem selo de promoção e sem prazo de oferta.
- Serviços futuros (“vamos fazer eventualmente”) não aparecem.

## 22. Requisitos específicos do negócio

- O site é vitrine do próprio produto: deve carregar rápido, ser impecável no mobile e ter boa nota de acessibilidade.
- **Uso do portfólio:** os sites são de clientes reais da PhiloCode. Antes de publicar, confirmar a autorização de cada cliente para exibir nome, segmento e captura (ver pendências).

## 23. Decisões técnicas

- Next.js 16 (App Router, TypeScript) + Tailwind CSS v4 (tokens em `@theme` no `globals.css`), site estático.
- Sem bibliotecas de componentes ou animação; ícones em SVG inline.
- Conteúdo em `src/content/site.ts`; links de WhatsApp em `src/lib/whatsapp.ts`.
- SEO: Metadata API, Open Graph gerado (`opengraph-image.tsx`), JSON-LD `ProfessionalService` só com dados reais, `sitemap.ts`, `robots.ts`. Como não há domínio, `SITE_URL` vem de `NEXT_PUBLIC_SITE_URL` (padrão `http://localhost:3000`).
- **Integrações:** WhatsApp implementado. Agenda online: descartada pelo cliente (a call é opcional e combinada pelo WhatsApp). **Vercel Web Analytics instalado** a pedido do cliente (16/10/2026): `@vercel/analytics` com `<Analytics />` no layout (visitantes e páginas, sem cookies). Cliques nos botões viram o evento `cta_click` com a propriedade `location` = valor do `data-cta` (`src/components/layout/CtaTracker.tsx`); eventos personalizados exigem plano pago na Vercel (o cliente usará o Pro). A coleta só começa depois de ativar o Analytics no painel do projeto na Vercel e publicar. Pixels de anúncio continuam fora.
- Formulário de contato: não implementado (sem destino informado).
- **Hospedagem dos sites de clientes: Vercel Pro** (decisão do cliente, por usar Next.js). As regras de uso da Vercel proíbem uso comercial no plano gratuito (Hobby) e citam “receber pagamento para criar, atualizar ou hospedar o site”. O Pro custa US$ 20/mês por membro (uma conta para todos os clientes), com US$ 20 de uso incluído, cobrados em dólar no cartão internacional com IOF. Os sites do portfólio atual precisam migrar para essa conta.

## 24. Pendências

| # | Pendência | Onde está no código |
|---|---|---|
| 1 | Número do CNPJ (respondeu “Sim”, mas “não tem ainda”) | `src/content/site.ts` → `company.cnpj` (exibido no rodapé) |
| 2 | Assinar o Vercel Pro e migrar os sites do portfólio do plano gratuito | Fora do código (infraestrutura) |
| 3 | Manter o contador de vagas de lançamento atualizado e desligar a faixa quando acabar | `src/content/site.ts` → `pricing.launch.spotsLeft` / `active` |
| 4 | Confirmar com contador o enquadramento do CNPJ (as fontes divergem sobre MEI para desenvolvimento de sites) | Fora do código |
| 5 | Domínio do site | `src/content/site.ts` → `SITE_URL_NOTE`; definir `NEXT_PUBLIC_SITE_URL` |
| 6 | Perfis reais de Instagram / LinkedIn (o formulário só tem a página inicial do Instagram) | `src/content/site.ts` → `contact.socialNote` (não exibido) |
| 7 | Depoimentos: o cliente diz que tem, mas não enviou | `src/content/site.ts` → `testimonials` (vazio → seção oculta) |
| 8 | Área de atendimento: “Atende outras cidades? Não”, mas “Brasil inteiro” como região principal; o site diz apenas “atendimento online” | Briefing (decidir antes de usar “todo o Brasil” em textos e SEO) |
| 9 | Autorização dos clientes do portfólio para exibir nome e captura | `src/content/site.ts` → `projects` |
| 10 | Logo em SVG (PNG atual tem ≈ 420 px de largura) | `public/images/philocode-logo*.png` |
| 11 | Validar textos de apoio dos diferenciais, dos passos do processo e mensagens pré-preenchidas do WhatsApp;  | `src/content/site.ts` → `differentials`, `whatsappMessages` |
| 12 | E-mail em domínio próprio (hoje é Gmail pessoal) — opcional | `src/content/site.ts` → `contact.email` |
| 13 | Validar com advogado ou contador as políticas (arrependimento, cancelamento, transferência) e formalizá-las em contrato | Fora do código |
| 14 | Enviar resumo do contrato ao cliente antes do Pix (escopo, prazo, rodadas, 50/50, arrependimento, cancelamento), como pede o art. 4º do Decreto 7.962/2013 | Fora do código (processo comercial) |
| 15 | Exibir identificação do fornecedor exigida pelo art. 2º do Decreto 7.962/2013 (CNPJ e endereço) quando o CNPJ existir | `src/content/site.ts` → `company` (rodapé) |

## 25. Checklist de conversão e qualidade

Verificado em 16/10/2026 (dev server local, Chrome/Edge; larguras 1440, 768, 390 e 360 px).

- [x] O título do hero diz o que é oferecido e para quem (“Sites profissionais para empresas e profissionais que ainda não estão na internet.”). “Onde” fica nos sinais de confiança (atendimento online, Brasília) porque a área de atendimento ainda está pendente (item 9).
- [x] O botão principal aparece na primeira tela no desktop e no mobile (em 360 × 780 termina a 556 px).
- [x] “Como funciona” cobre a jornada completa (contato → briefing → sinal → primeira versão em 2 dias úteis → ajustes → site no ar).
- [x] Texto do botão específico, igual em todo o site, definido só em `primaryCta.label`.
- [x] Foto do profissional: não se aplica (empresa sem fotos). O hero usa capturas reais dos sites publicados, identificadas por domínio.
- [x] Sinais de confiança verificáveis perto do botão (atendimento 100% online, sede em Brasília, 3 sites publicados com link).
- [x] Serviços organizados pela situação do visitante, cada cartão com sua ação e mensagem própria.
- [x] Projetos, Como funciona, Preços e Dúvidas terminam com um próximo passo. (Não há seção Sobre: o cliente não quis seção de história.)
- [x] Dados reais de contato visíveis e clicáveis no contato e no rodapé (WhatsApp, `tel:`, `mailto:`).
- [x] Barra fixa mobile com a ação principal; o rodapé reserva o espaço equivalente.
- [x] Menu mobile (abre, fecha com Esc devolvendo o foco, fecha ao clicar em link) e perguntas frequentes nativas com estado aberto estilizado.
- [x] Sem rolagem horizontal em 1440, 768, 390 e 360 px.
- [x] Contraste AA (menor par de texto: `muted` sobre `canvas` 6,7:1; botão 5,5:1), foco visível, áreas de toque ≥ 48 px.
- [x] Metadados, Open Graph gerado, JSON-LD `ProfessionalService` só com dados reais, sitemap e robots.
- [x] `npm run lint` e `npm run build` sem erros.
- [x] Sem blocos redundantes, urgência artificial, promessas de resultado ou dados inventados; dados ausentes marcados com `[A CONFIRMAR]` (todos listados na seção 24).

Limitação da verificação: as capturas foram feitas em navegador headless. O teste em aparelho real (iOS/Android) fica pendente.

## 26. Referência de mercado usada para os preços (pesquisa de 16/10/2026)

Faixas tiradas de páginas de agências e fornecedores (têm interesse comercial; servem como referência, não como tabela oficial):

- **Pacotes “site em 48h”** (geralmente template/WordPress): R$ 297 a R$ 1.200 pela criação, com manutenção de R$ 60 a R$ 120/mês.
- **Landing page / one page básica:** R$ 500 a R$ 2.500. **Agência, institucional simples:** R$ 2.500 a R$ 8.000.
- **Manutenção com alterações incluídas:** R$ 200 a R$ 700/mês.
- **Domínio .com.br:** R$ 40/ano no Registro.br.

Decisão: R$ 997 posiciona a PhiloCode acima de quem vende template e bem abaixo de agência, com o prazo de 2 dias úteis e o design sob medida como diferenciais. A manutenção de R$ 49/mês fica na faixa dos pacotes simples, com uma alteração mensal incluída.

**Prazo:** conta a partir do sinal pago (confirmado pelo cliente).

**Oferta aprovada em 16/10/2026 (substituída na revisão de 20/10):** **Essential** (site de uma página) **R$ 997**, primeira versão em 2 dias úteis · **Premium** (até 5 páginas) **R$ 1.997**, primeira versão em 5 a 7 dias úteis · **página extra R$ 297** · **2 rodadas de ajuste** (rodada = lista de pedidos enviada de uma vez) · **rodada extra R$ 150** · **pagamento via Pix: 50% de sinal e 50% na entrega** · **manutenção R$ 49/mês ou R$ 490/ano** (hospedagem, SSL, backup, 1 rodada de ajustes por mês, que não acumula) · **domínio registrado e pago pelo cliente, no nome dele; a PhiloCode conecta ao site** · **lançamento para os 5 primeiros clientes:** Essential R$ 500 e Premium R$ 997, em troca de depoimento e autorização de portfólio. Referências para o Premium: institucional de 3 a 5 páginas custa R$ 1.500 a R$ 4.000 com freelancer e R$ 2.500 a R$ 6.000 com agência; página extra R$ 150 a R$ 500. Modelo de “site por assinatura sem entrada” (R$ 40 a R$ 100/mês com fidelidade de 12 meses) foi descartado por competir só por preço.

**Revisão de 20/10/2026:** a esposa do cliente achou o site caro e com informação demais. O cliente reduziu os preços (de R$ 997/R$ 1.997 para R$ 597/R$ 1.197; lançamento de R$ 500/R$ 997 para R$ 497/R$ 997) e aprovou o enxugamento: saíram as seções “Para quem é” (serviços, redundante com os planos) e “Por que a PhiloCode” (diferenciais, redundante com hero e processo); o processo passou de 6 para 4 passos; preços de 5 para 3 blocos; perguntas frequentes de 8 para 5. A página extra caiu de R$ 297 para R$ 150 para ficar coerente com o Premium (4 páginas a mais por R$ 600). Observação registrada: a esposa do cliente não é o público-alvo; recomendado validar preço e clareza com 3 a 5 pessoas do perfil (profissionais e donos de pequenos negócios sem site).

**Ajuste de 20/10/2026:** desconto de lançamento passou a ser **40%** (R$ 597 → R$ 358; R$ 1.197 → R$ 718, arredondados para baixo).

**Ajuste de 20/10/2026 (2):** Essential passou a **R$ 500** (preço normal); com 40% de lançamento, **R$ 300**. Premium segue R$ 1.197 (lançamento R$ 718).

**Ajuste de 20/10/2026 (3):** Essential a **R$ 499** (preço terminado em 9, pedido do cliente); lançamento com 40%: **R$ 299**.

**Ajuste de 20/10/2026 (4):** o domínio deixou de ser incluso. O cliente registra e paga o domínio no próprio nome; a PhiloCode conecta ao site. Saiu dos planos e foi reescrito nas perguntas frequentes.
