# Pôrto — site institucional

Site one-page da Pôrto (criação de sites), em Next.js 16 + Tailwind CSS v4.

- Briefing completo, decisões e pendências: [`docs/briefing.md`](docs/briefing.md)
- Todo o conteúdo (textos, preços, contatos, mensagens do WhatsApp): [`src/content/site.ts`](src/content/site.ts)
- Tokens de cor, fontes e animações de entrada: [`src/app/globals.css`](src/app/globals.css)

## Rodar

```bash
npm install
npm run dev
```

Build de produção: `npm run build`. Antes de publicar, defina `NEXT_PUBLIC_SITE_URL` com o domínio final (usado em metadados, sitemap, robots e JSON-LD).

## Pendências

Procure por `[A CONFIRMAR` no projeto. Todas estão listadas na seção 24 do briefing.
