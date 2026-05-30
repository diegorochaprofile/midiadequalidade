# Prompts de imagem (placeholders do site)

> Cole estes prompts no **Gemini (Imagen)** ou **ChatGPT (DALL·E / GPT-Image)**.
> São **placeholders pra visualização** — você substitui pelos reais depois.
> Todos puxam a **paleta da marca**: fundo quase-preto **#07080E**, azul **#2E6BFF**,
> respiro de roxo #7B5CFF. **Sempre proibir laranja, vermelho e verde.**
>
> Dica geral: rode 2–4 variações de cada, salve em `marketing/site/assets/` com nomes
> claros (ex: `hero-bg.png`, `case-site-1.png`, `logo-fake-1.png`).
> Os prompts estão em inglês porque os modelos de imagem respondem melhor assim.

---

## 1. Visual do Hero (fundo principal)

**Uso:** fundo/elemento do topo do site. Gerar em 16:9 (paisagem), alta resolução.

**Variação A — estrutura em rede (abstrato, mais seguro):**
```
Abstract 3D render of a glowing network structure, thin interconnected lines and nodes,
floating in deep space. Background is near-black dark navy (#07080E). Electric blue (#2E6BFF)
glowing edges with a subtle violet (#7B5CFF) accent. Cinematic depth of field, soft particles,
volumetric light, premium high-tech aesthetic, dark and elegant, lots of negative space on the
left for text. No text, no logos, no orange, no red, no green. 16:9, ultra detailed.
```

**Variação B — forma 3D fluida (mais "MazyOS"):**
```
A sleek abstract 3D object made of dark glossy glass and brushed metal, smooth flowing organic
shape, floating against a near-black background (#07080E). Rim-lit with electric blue (#2E6BFF)
light and a faint violet glow. Studio lighting, reflections, cinematic, minimalist, premium tech
brand aesthetic, dark mood, empty space around for layout. No text, no logos, no orange. 16:9.
```

---

## 2. Logos de "marcas que confiam" (fictícios)

**Uso:** faixa de prova social. Gerar **logos fictícios monocromáticos** (sem nome de empresa real).

```
A set of 8 minimalist fictional company logos arranged in a grid, monochrome white on a fully
transparent or dark background. Mix of simple geometric icon-marks and clean sans-serif wordmarks
with invented brand names. Modern startup branding, flat, no gradients, consistent stroke weight,
high contrast. No real brand names or trademarks, no orange. Clean vector style.
```

> ✅ **Decidido: gerar por IA.** Rode o prompt acima e gere uns 8–10 logos fictícios.
> Dica: se algum sair com tipografia "quebrada", descarte — escolha os 6 mais limpos pra faixa.

---

## 3. Mockups de cases / portfólio

**Uso:** cards da seção "Resultados". Um por tipo de entrega.

**Case 1 — site/landing num laptop:**
```
Photorealistic mockup of a modern laptop displaying a sleek dark-themed website with blue (#2E6BFF)
accent buttons and clean UI, shown on a dark studio background (#07080E) with soft blue rim light
and subtle reflection. Premium agency portfolio shot, shallow depth of field. Placeholder/blurred
UI text (not readable). No orange, no real logos. 4:3.
```

**Case 2 — feed de Instagram num celular:**
```
Photorealistic smartphone mockup showing a cohesive, elegant Instagram grid feed for a premium
clinic, dark and sophisticated aesthetic with blue tones, consistent visual identity across the
9 posts. Phone floating on a near-black background (#07080E) with soft blue glow. No readable text,
no orange. Vertical 4:5.
```

**Case 3 — telas de UI/dashboard flutuando (estilo Simplu):**
```
Several floating UI dashboard screens arranged in an isometric, layered composition, dark blue
theme with glassmorphism and depth, glowing blue (#2E6BFF) data charts and cards, near-black
background (#07080E), soft particles and blue rim light. Premium SaaS / agency presentation.
No readable text, no orange, no logos. 16:9.
```

---

## 4. Retrato placeholder dos sócios

**Uso:** seção "Sobre". **Ideal é foto real** do Diego e do Gabriel — use isto só como stand-in
temporário (não vai parecer com vocês de verdade).

```
Professional studio portrait of a confident young entrepreneur, business-casual, neutral pose,
photographed against a near-black background (#07080E) with subtle blue (#2E6BFF) rim lighting,
cinematic, sharp, modern tech founder vibe. Clean, premium. No text, no orange. Vertical 4:5.
```

> Gere um para cada (variando "man" / aparência) ou, mais honesto, use uma **silhueta/avatar
> neutro** até ter as fotos reais. Recomendo trocar pelas fotos de verdade antes de publicar —
> combina mais com o "qualidade humana" da marca.

---

## 5. Imagem de compartilhamento (Open Graph)

**Uso:** miniatura quando o link do site é compartilhado (WhatsApp, redes). 1200×630.

```
Social share banner, 1200x630, near-black background (#07080E) with a subtle tech grid and blue
(#2E6BFF) glow gradient from the corner. Lots of empty space for a logo and a short headline.
Premium, minimalist, dark tech brand. No text, no orange. 1.91:1.
```

---

## 6. (Opcional) Texturas/fundos de seção

```
Seamless dark abstract background texture, near-black (#07080E), faint thin grid lines and soft
blue (#2E6BFF) radial glow, very subtle, lots of negative space, premium minimal tech. No text,
no objects, no orange. 16:9.
```

---

## Nomes dos arquivos (o site lê automático)

Salve em `marketing/site/assets/` com **exatamente** estes nomes — ao recarregar a página, entram sozinhos no lugar (e o placeholder some):

| Arquivo | Onde aparece |
|---|---|
| `hero.jpg` | fundo do hero ✅ (já feito) |
| `logo-1.png` … `logo-6.png` | faixa "marcas que confiam" |
| `case-1.jpg` | case 1 — Clínica odontológica (site) |
| `case-2.jpg` | case 2 — Advocacia (landing) |
| `case-3.jpg` | case 3 — Varejo (funil) |

> Se faltar algum, o placeholder cinza continua no lugar — nada quebra.

### Checklist pra cada imagem gerada
- [ ] Fundo dark, dentro do universo azul (sem laranja/vermelho/verde)
- [ ] Sem texto legível "quebrado" da IA
- [ ] Sem logo/nome de marca real
- [ ] Salva em `marketing/site/assets/` com nome claro
