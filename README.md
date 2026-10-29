# PhiloCode

Site da PhiloCode em Next.js 16 e Tailwind CSS v4.

## Páginas

- `/`: apresentação da empresa, frentes de serviços e portfólio de sites.
- `/criacao-de-sites`: página profissional, landing page, institucional e acompanhamento.
- `/shopify`: desenvolvimento e personalização de temas, páginas e componentes.

O catálogo de ofertas, preços, FAQ, contatos e mensagens está em `src/content/site.ts`. Os dados estruturados e as mensagens dos pacotes usam esse mesmo catálogo. Não há checkout ou contratação automática; o WhatsApp inicia uma conversa de orçamento.

## Desenvolvimento e validação

```sh
npm install
npm run dev
npm run build
npx tsc --noEmit
```

O ambiente de publicação pode definir `NEXT_PUBLIC_SITE_URL`; o padrão é `https://philocode.vercel.app`. A mesma base é usada nos metadados e no sitemap.

## Conteúdo e decisões

- `docs/briefing.md`: revisão vigente no topo e histórico de decisões.
- `docs/pesquisa-precos-2026-10.md`: pesquisa pública, limites da comparação e tabela aprovada.

Preços são iniciais para novos projetos. Contratos existentes mantêm suas condições. Não há serviço de design Shopify avulso. Cases Shopify e depoimentos não confirmados não devem ser criados.
