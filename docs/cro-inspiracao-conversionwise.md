# CRO: referências do conversionwise.com para o novo site Philocode

Análise feita em 25/11/2026 a partir do recurso "CRO Magic" (botão de varinha no canto inferior direito do conversionwise.com).

## Como funciona a varinha ("CRO Magic")

- Botão flutuante fixo (ícone de varinha + rótulo "CRO MAGIC ✨"), com `aria-pressed` e `aria-label`.
- Ao ativar, abre um painel: "Welcome behind the curtain." Ele explica que a página vai mostrar como ela própria converte visitantes. Mostra uma barra de progresso ("0/19 secrets found"), um CTA "Book your free call now" e um link "Exit CRO Magic".
- Pinos rosa numerados aparecem sobre cada elemento da página. Ao clicar, um tooltip mostra: `01 · Categoria · Princípio`, um título curto, a explicação e um botão "Next secret →", que rola até o próximo item. O último botão vira "Book your call →".
- Gamificação: o progresso conta os segredos vistos, e a página inteira vira uma demonstração de competência. O visitante aprende CRO enquanto é convencido.
- Implementação: um script único com uma lista `N` de `{seletor, categoria, princípio, título, texto}`. Os pinos são posicionados com `getBoundingClientRect` e ficam numa camada absoluta. Itens cujo seletor não existe na página são ignorados.

**Decisão (25/11/2026):** não copiar o recurso. Usamos apenas os princípios abaixo no conteúdo do site.

## Os 25 princípios que eles anotam

| # | Elemento | Princípio | O que fazem |
|---|---|---|---|
| 1 | Link "Reviews (354+)" no menu | Prova social no menu | O número convence antes do clique |
| 2 | CTA no menu fixo | CTA sempre ao alcance | O botão acompanha a rolagem |
| 3 | Selo Trustpilot | Barra de confiança | Prova antes do pitch |
| 4 | Título principal | Clareza + relevância | Para quem é + o que a pessoa ganha, em ~8 palavras |
| 5 | Subtítulo | Benefícios, não recursos | Nomeia o problema e depois a recompensa, sem jargão |
| 6 | Vídeo do fundador | Simpatia + autoridade | Rosto real, ~90 s |
| 7 | CTA principal | Um único CTA claro | Diz o que acontece depois, tem contraste e uma seta direcional |
| 8 | Nota abaixo do CTA | Prova ancorando o CTA | Nota + quantidade de avaliações + número de clientes no momento da dúvida |
| 9 | Depoimento de referência | Endosso de especialista | Rosto, nome completo e resultado em número |
| 10 | Parede de logos | Associação a empresas | "+4.000 more" |
| 11 | "Sound familiar?" | Problema primeiro | Fala do visitante antes de falar de si |
| 12 | Cards de dor | Títulos emotivos | Frases que o cliente pensa às 23h |
| 13 | "Better way to grow" | Problema → solução | Mais "13 anos" de credibilidade |
| 14 | Gráfico do processo | Mostrar, não contar | Um processo complexo entendido em 2 s |
| 15 | Estatísticas | Toda promessa com prova | Números logo abaixo da promessa |
| 16 | Dois serviços | Regra do um | Dois caminhos em vez de seis caixas |
| 17 | "Vai funcionar com meu setup?" | Tratamento de objeções | Responde antes de o cliente perguntar |
| 18 | 3 passos | Reduzir atrito | O primeiro passo é só uma conversa grátis |
| 19 | CTA no meio da página | Pedir na hora certa | Logo depois do "como começar", com prova |
| 20 | Cases | Resultados, não adjetivos | "$471K/mês para a marca X" |
| 21 | Carrossel de depoimentos | Segurança na quantidade | Muitos nomes reais |
| 22 | Sobre / fundadores | Pessoas reais, história real | Agências sem rosto assustam |
| 23 | FAQ | Tratamento de objeções | Cada pergunta é uma venda perdida |
| 24 | CTA final | Repetir o pedido | A mesma ação única no fim |
| 25 | Prêmios no rodapé | Credibilidade | Até o rodapé vende |

Eles também usam uma barra de anúncio no topo com contagem regressiva (urgência real, ligada à Black Friday).

## Aplicação ao site Philocode (estado atual → proposta)

| Princípio | Hoje | Proposta |
|---|---|---|
| Clareza + relevância no título | "Software que faz o seu negócio andar." é genérico | Título com público + resultado, por exemplo "Sites, lojas Shopify e sistemas que trazem clientes para o seu negócio." Usar o slogan "Engineering what's next." como assinatura da marca, não como título |
| Um CTA claro | "Solicitar orçamento" (WhatsApp) | CTA que diz o que acontece depois: "Conversar no WhatsApp: resposta em até 1 dia útil →", com seta |
| CTA no menu fixo | Verificar o Header | Garantir o CTA visível no header fixo, inclusive no mobile |
| Prova ancorando o CTA | Não existe (`testimonials` está vazio) | Abaixo do CTA: "4 sites no ar · atendimento em todo o Brasil · 7 dias de garantia". **Só números reais** |
| Problema primeiro | A home começa pelos produtos | Seção "Isso soa familiar?" com 3 dores por público (profissional sem site, lojista com tema travado, paróquia em planilha) |
| Regra do um | 3 produtos + sob medida | Manter 3 caminhos claros e selecionar por público ("Sou profissional / Tenho loja / Sou de paróquia") |
| Mostrar, não contar | `CodeVisual` | Prints reais (catequese, sites entregues) no lugar de visuais abstratos |
| Resultados, não adjetivos | Projetos sem métricas | Adicionar um resultado por projeto quando houver (contatos/mês, tempo de carregamento, nota PageSpeed) |
| Pessoas reais | Sem rosto | Bloco "Quem faz": foto + nome + história curta do fundador |
| Reduzir atrito | "Como funciona" com 4 passos | Destacar "1. Conversa grátis de 15 min" e o que acontece depois |
| Tratamento de objeções | Os FAQs já são bons | Puxar a objeção principal para perto do preço ("E se eu não gostar?" → garantia de 7 dias) |
| Repetir o pedido | Seção Contato no fim | Adicionar um CTA no meio da página, depois de Projetos/Processo |
| Toda promessa com prova | — | Números técnicos verificáveis (Lighthouse 95+, carregamento < 1 s) |

**Regra:** não inventar avaliações, números ou logos. A ConversionWise funciona porque toda prova é real. Onde ainda não há prova, usar garantias, transparência de preço e demonstração técnica.
