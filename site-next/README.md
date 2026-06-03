# Mídia de Qualidade — site (teste HELIX)

Landing institucional gerada com **HELIX** a partir da estrutura de
`easygrowth.com.br`, **revestida com a identidade visual da Mídia de Qualidade**
(dark #07080E, azul #2E6BFF, Inter Tight + Inter) e com a **voz da MQ** (sem
jargão de growth). Stack: **Next.js 14 (App Router) + React + TypeScript +
Tailwind + framer-motion**.

> Run de teste — gerado em `saidas/helix-teste/`. Não substitui o site Astro
> oficial; serve pra avaliar o HELIX.

## Rodar

```bash
npm install
npm run dev
# http://localhost:3000
```

`npm run build` gera a versão de produção.

## Onde mexer
- **Copy:** `lib/content.ts` (todo o texto, tipado).
- **Visual/tokens:** `tailwind.config.ts` (cores, fontes, radii, motion).
- **Seções:** `components/sections/` (Hero, Services, Method, Cases, etc.).
- **Motion:** `components/motion/` (Reveal, Stagger) — tokens da referência.

## Estrutura
```
app/            layout (fontes + metadata), page (composição), globals.css
components/
  ui/           Container, Button, SectionHeader
  motion/       Reveal, Stagger (framer-motion)
  sections/     Nav, Hero, LogoMarquee, Services, Method, Differential, Cases, FinalCTA, Footer
  icons/        ícones SVG monolineares
lib/content.ts  conteúdo tipado (voz MQ)
tailwind.config.ts  tokens MQ + motion da referência
```

## Deploy
Vercel (push + import) ou Netlify (suporta Next.js). Adapte os contatos/links em
`lib/content.ts` antes de publicar.

---
Conteúdo de placeholder: foto dos sócios, logos de clientes e cases são
ilustrativos (a agência está em fundação).
