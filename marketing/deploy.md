# Deploy do site — Mídia de Qualidade

Pasta a publicar: **`marketing/site/`** (contém `index.html` + `assets/`).
O site é estático — não precisa de build nem servidor.

---

## Caminho A — Netlify Drop (mais rápido, ~2 min) ✅ recomendado pra ver no ar HOJE

1. Abra **https://app.netlify.com/drop**
2. Arraste a pasta **`marketing/site`** inteira pra dentro da página
3. Pronto — o Netlify sobe e te dá uma URL tipo `https://nome-aleatorio.netlify.app`
4. (Opcional) Crie uma conta grátis pra **manter** o site e poder renomear/configurar domínio
5. Em *Site settings → Change site name*, troque pra algo como `midia-de-qualidade` → `https://midia-de-qualidade.netlify.app`

> É o jeito mais rápido. Limitação: pra atualizar o site, você arrasta a pasta de novo.

---

## Caminho B — GitHub + Netlify (deploy automático) — recomendado pro longo prazo

Cada vez que salvar (push), o site atualiza sozinho. Combina com a skill `/salvar`.

1. Rode `/salvar` aqui no MazyOS pra subir tudo pro GitHub (ele configura o repositório)
2. No Netlify: *Add new site → Import from Git → GitHub → escolha o repositório*
3. Em *Publish directory*, aponte pra `marketing/site`
4. *Deploy* — pronto. A partir daí, todo push publica automático.

*(Vercel funciona igual: importa do GitHub, Root Directory = `marketing/site`.)*

---

## Domínio próprio — `midiadequalidade.com.br`

1. Registrar em **registro.br** (domínio .com.br)
2. No Netlify: *Domain settings → Add custom domain* → digite o domínio
3. O Netlify mostra os **DNS** (ou nameservers) — copie
4. No registro.br, aponte o DNS pro Netlify
5. HTTPS (cadeado) é automático e grátis (Let's Encrypt)

---

## Depois de publicar (ajustes finais)

- [ ] Trocar `(00) 00000-0000` e o `wa.me/5500000000000` pelo **WhatsApp real** (em `index.html`)
- [ ] Trocar `contato@midiadequalidade.com.br` se o e-mail for outro
- [ ] Atualizar `og:image` pra URL absoluta (`https://seu-dominio/assets/hero.jpg`)
- [ ] Conectar o formulário (no Netlify: adicionar `netlify` no `<form>` ativa o recebimento de leads grátis)
- [ ] Trocar os cases/logos placeholder pelos reais quando existirem
