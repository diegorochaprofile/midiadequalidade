# Identidade visual

> Como a marca aparece em tudo que o MazyOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.
> Edite quando a marca evoluir.

**Status:** **marca v2 fechada** (30/05/2026). Direção dark/tech minimalista, referência de acabamento MazyOS. Paleta puxada pro quase-preto, azul como protagonista, roxo rebaixado a glow sutil. Fontes e logos definidos abaixo.

---

## Cores (paleta v2 — fechada)

- **Fundo principal:** #07080E *(quase-preto com leve azul — base dark, estilo MazyOS)*

- **Superfície / cards / badges:** #0B0D15 *(um tom acima do fundo)*

- **Azul / CTA (protagonista):** #2E6BFF *(ação, destaque, gradientes)*

- **Azul claro:** #5B8DFF *(hover, segundo ponto do gradiente azul)*

- **Texto principal:** #F4F6FF *(branco levemente azulado)*

- **Roxo (uso reduzido):** #6E56F0 *(SÓ em glow sutil de profundidade — não em logo, texto ou base)*

- **Cor proibida:** laranja/vermelho de "promoção", verde-limão, paletas que fujam do universo dark/azul tech

> Mudança v1→v2: fundo saiu do azul-marinho #0A0E27 pro quase-preto #07080E; roxo deixou de ser detalhe ativo e virou só glow.

---

## Tipografia (fechada)

- **Títulos, destaques e logo:** **Inter Tight** *(neutra e premium, casa com o dark minimalista — Google Fonts)*

- **Corpo, subtítulos e botões:** **Inter** *(sans-serif limpa — Google Fonts)*

- **Peso do título:** 700 (bold) · **corpo:** 400/500 · **subtítulo:** 600

- Import: `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap`

---

## Estilo geral

Dark, tech e bem produzido. Referência de acabamento: sites tipo AstroLabs (dark com animação, profundidade, carrossel) — **mas com paleta própria**: azul criativo como base, roxo nos detalhes, um azul mais vibrante pra contraste e CTAs. Sensação de tecnologia + qualidade + confiança. Não é "tech genérico azulzinho": é azul com personalidade, contraste e camadas. Essa linguagem tech vale pra empresa inteira (site, redes, propostas), não só pro site.

---

## Elementos-chave

- Bordas: sutis, 1px com baixa opacidade (linhas que dão estrutura sem poluir)
- Border-radius dos cards: 12-16px
- Botões: estilo moderno, possível leve glow/gradiente azul→roxo nos CTAs
- Sombras / glow: sim, glows sutis azul/roxo pra dar profundidade no dark
- Fundo: profundidade com grid/linhas/elementos geométricos discretos (não fundo chapado)

---

## O que NUNCA fazer

- Sair do universo azul/roxo tech (nada de laranja de promoção, verde, paletas quentes)
- Visual "vendedor de promessa": sem selos de desconto gritante, sem exagero
- Fundo claro como base (a marca é dark-first)
- Poluir com elementos demais — tech aqui é sofisticado, não carregado

---

## Logo

**Logo principal — "MQ" 3D** (adotado em 30/05/2026)
- `identidade/logo-mq-completo.png` — lockup completo: monograma MQ azul (com linhas de velocidade) + "Mídia de Qualidade" + tagline "Estratégia · Criatividade · Resultados". Fundo transparente. Usar no **footer do site**, propostas e apresentações.
- `marketing/site/assets/logo-mark.png` — só o **monograma MQ** recortado. Usar no **header do site** (ao lado do nome) e no **favicon**.

**Avatar social — logo MQ circular** (`identidade/logo-mq-badge.png`)
- Mesma marca em badge circular com fundo escuro. Usar como **foto de perfil das redes** (Instagram etc.).

**Legado — monograma plano SVG** (`identidade/logo-mq.svg`, `identidade/logo-mq-branco.svg`)
- Primeira versão vetorial flat. Mantida como alternativa monocromática/vetorial; o site passou a usar a versão 3D acima.

- **Fonte do logo:** Inter Tight 700. **Cores:** gradiente azul #2E6BFF→#5B8DFF; versão branca pra fundos com foto/cor.
- **Onde usar:** header do site e de propostas, slide final do carrossel (CTA), apresentações, avatar das redes.
- **Tamanho sugerido:** largura 120-200px nos HTMLs; símbolo/monograma ≥ 48px.
- **Nota técnica:** os SVGs carregam a fonte via `@import` (renderiza certo no navegador). Pra exportar PNG/usar offline (avatar do Instagram), abrir o SVG no navegador com a fonte carregada e exportar, ou converter as letras em curvas num editor vetorial.
- **Pré-visualização da marca:** `identidade/marca-preview.html`.

---

## Observações adicionais

- Referência visual citada pelos sócios: AstroLabs (estilo/acabamento, **não** as cores).
- Identidade está em construção — esse guia é o ponto de partida pra criar logo e marca.
