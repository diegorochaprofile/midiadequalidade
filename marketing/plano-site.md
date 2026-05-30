# Plano do Site Institucional — Mídia de Qualidade

> Documento de planejamento. A ideia é **alinhar tudo antes de codar**.
> O site inteiro segue a marca v2 (`identidade/design-guide.md`):
> fundo dark **#07080E**, **azul #2E6BFF** como protagonista, roxo só em glow,
> títulos em **Inter Tight**, corpo em **Inter**. **Sem laranja** (cor proibida).

---

## 1. Objetivo do site

Um site **one-page institucional** (com blog acoplado pro futuro) que:

1. Passe **autoridade e qualidade** logo no primeiro scroll — o cliente tem que sentir que está lidando com gente que sabe o que faz.
2. Explique **o que a agência faz** e **como trabalha** (método), de forma clara e técnica.
3. **Gere contato** — uma conversa/consultoria. Esse é o objetivo de conversão.
4. Sirva de **portfólio** quando os cases reais existirem.

**Métrica de sucesso:** cliques no CTA de contato (WhatsApp / formulário).
**Tom:** técnico, direto, confiante — sem "promessa fácil", sem guru. (ver `_memoria/preferencias.md`)

---

## 2. Referências — o que pegamos de cada

| Referência | O que aproveitamos | O que NÃO copiamos |
|---|---|---|
| **MazyOS** | Dark minimalista, hero com visual 3D, FAQ accordion, muito respiro | — |
| **High Media** | Estrutura comercial: prova social, grid "o que você recebe", stats, método, CTA repetido | O **laranja** (proibido) e os **números inflados** |
| **Simplu** | Telas/mockups flutuando com profundidade | O fundo claro (somos dark-first) |

> ⚠️ **Decisão de marca importante:** o High Media usa "+100 clientes / +R$80 milhões".
> Estamos em **fundação e não temos esses números** — inventá-los iria contra o nosso
> tom (nada de promessa/enganação). Em vez de stats falsos, na v1 usamos um bloco de
> **proposta de valor** (o que entregamos e como), e ativamos números/depoimentos
> **só quando forem reais**. Imagens placeholder (mockups) são OK pra visualizar o
> layout — texto/número mentiroso, não.

---

## 3. Stack recomendada

Recomendo dois passos, pra você ver rápido sem perder a qualidade no final:

### v0 — Protótipo estático (HTML/CSS/JS puro) — **primeiro**
- Abre direto no navegador, **sem instalar nada**, igual ao `marca-preview.html`.
- Serve pra você **sentir o visual e o conteúdo** e a gente ajustar rápido.
- Animações leves: CSS + `IntersectionObserver` (revelar ao scrollar).

### v1 — Produção em **Astro** — depois de aprovar o protótipo
- **Por que Astro:** gera HTML estático (rápido e ótimo pra SEO — importante pra quem
  vende presença digital), é baseado em componentes (header, card, seção reutilizáveis),
  tem **blog nativo** via "content collections" (markdown) e **pasta `public/`** —
  exatamente o que as skills `publicar-tema` e `aprovar-post` já esperam.
- **Deploy:** Netlify ou Vercel via GitHub (já temos a skill `/salvar` pro push).
  Cada push publica sozinho.
- **Animação/profundidade nível AstroLabs:** GSAP (scroll/reveal) + Lenis (scroll suave).
  Entram só na v1, sem exagero — performance e elegância acima de efeito.

**Alternativa se quiser simplificar:** ficar só no HTML/CSS/JS (sem build). Funciona,
mas perdemos blog estruturado e componentização. Minha recomendação é **HTML no protótipo,
Astro na produção**.

---

## 4. Estrutura de seções (one-page)

Ordem pensada pra levar o visitante da atenção até o contato:

1. **Nav fixa** — logo MQ (`identidade/logo-mq.svg`) à esquerda · links (Serviços · Método · Resultados · FAQ) · botão CTA "Falar com a gente". Fundo translúcido com blur ao scrollar.
2. **Hero** — headline forte + subhead + CTA primário. Fundo dark com grid sutil + glow azul + visual de profundidade (ver prompts de imagem). *Echo: MazyOS.*
3. **Prova social** — faixa "Marcas que confiam" com logos. *Placeholder fake por enquanto. Echo: High Media.*
4. **O que fazemos / Serviços** — grid de cards: Sites & Landing Pages · Instagram (gestão + conteúdo) · Tráfego Pago · Automação (WhatsApp) · Identidade Visual. Ícones (Lucide), título, 1 linha. *Echo: "Veja o que você recebe".*
5. **Como funciona / Método** — 3–4 passos (Diagnóstico → Estratégia → Execução → Acompanhamento). Mostra processo = confiança.
6. **Diferencial** — bloco curto: IA pra produtividade + qualidade humana. Sem "magia de IA".
7. **Resultados / Cases** — grid de cards de projeto (mockup + tipo de cliente + o que foi feito). *Placeholder fake por enquanto.*
8. **Sobre / Os sócios** — Diego & Gabriel, a história curta da agência (fundada em 2026, casa montada com rigor). *Fotos reais depois; placeholder agora.*
9. **FAQ** — accordion com 5–6 perguntas (o que fazem, pra quem serve, como começa, prazo, investimento, IA). *Echo: MazyOS.*
10. **CTA final** — bloco grande "Vamos conversar" → WhatsApp + formulário simples (nome, contato, mensagem).
11. **Footer** — logo branco, contato, redes, e-mail, © Mídia de Qualidade.

---

## 5. Conteúdo: o que é real x placeholder

| Item | Fonte | Status |
|---|---|---|
| Textos (hero, serviços, método, FAQ) | **Eu escrevo** no tom da marca; vocês revisam | A produzir |
| Logos "marcas que confiam" | **Placeholder fake** (marcas fictícias) | Prompt pronto → seção 6 |
| Cases / portfólio | **Placeholder fake** (mockups) | Prompt pronto → seção 6 |
| Stats / números | **Não usar até serem reais** (ver aviso §2) | Bloqueado de propósito |
| Depoimentos | **Não usar até serem reais** | Bloqueado de propósito |
| Fotos dos sócios | **Reais (ideal)** — placeholder neutro enquanto não tem | Prompt placeholder → seção 6 |
| Ícones de serviço | **Lucide / Tabler** (SVG, não IA) | Eu integro |
| Contato — CTA nos **dois** (WhatsApp + formulário) | Número/e-mail **vocês fornecem** | Decidido; número e e-mail **pendentes** (placeholder até lá) |

---

## 6. Imagens placeholder (geradas por IA)

Os prompts prontos pra colar no Gemini/GPT estão em **`marketing/site/prompts-imagens.md`**.
Cobrem: visual do hero, logos de "marcas parceiras" fictícias, mockups de cases
(site, Instagram, dashboard) e retrato placeholder dos sócios — **todos na paleta da marca**
(dark + azul, sem laranja). São só pra visualização; você substitui pelos reais depois.

> Regra: nas marcas/cases fake, **nunca usar nome ou logo de empresa real** — só fictícios,
> pra não ter problema legal nem passar informação falsa.

---

## 7. Deploy & domínio

- **Repositório:** GitHub (skill `/salvar` já cuida do commit/push).
- **Hospedagem:** Netlify ou Vercel (grátis pra começar, deploy automático no push, HTTPS incluso).
- **Domínio:** `midiadequalidade.com.br` ✅ (definido). Falta registrar no registro.br e apontar pro Netlify/Vercel. O site já é montado preparado pra ele.
- **Extras:** favicon = `logo-mq.svg`; imagem de compartilhamento (Open Graph) na paleta da marca.

---

## 8. Próximos passos (ordem proposta)

1. ✅ Aprovar este plano (ajustar seções/stack se quiser).
2. Você gera as imagens placeholder com os prompts (seção 6) e joga em `marketing/site/assets/`.
3. Eu monto o **protótipo v0** (HTML) do site inteiro pra você navegar.
4. Ajustamos texto e layout em cima do protótipo.
5. Migro pra **Astro (v1)** + animações + blog + deploy.
6. Registramos domínio e publicamos.

> Posso começar o protótipo v0 já com placeholders cinza (sem esperar as imagens) — assim
> você vê a estrutura andando enquanto gera os assets. É só dizer.
