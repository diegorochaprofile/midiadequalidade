---
name: aprovar-post
description: >
  Aprova e publica um post da fila — flipa o blog de draft pra published, copia os PNGs do
  carrossel pro public folder do site, faz commit e push (Netlify/Vercel deploya), aguarda
  o deploy, e posta o carrossel no Instagram + Facebook via Meta Graph API. Use quando o
  usuário disser "aprovar post X", "publicar o post do tema Y", "/aprovar-post X", ou quando
  quiser disparar a publicação automática de um conteúdo já criado pela skill /publicar-tema.
---

# /aprovar-post — Pipeline de aprovação e publicação automática

Faz a ponte entre o conteúdo aprovado (blog + carrossel + legendas, criado por `/publicar-tema`)
e a publicação real no feed (site + Instagram + Facebook).

## Quando NÃO usar

- Conteúdo ainda não foi criado → use `/publicar-tema` primeiro
- Usuário ainda está revisando → não rodar até ele dizer "aprovado" / "pode postar"
- Site não está deployado / Meta API não configurada → seguir setup abaixo

## Pré-requisitos (uma vez só)

- `.env` na raiz com:
  - `META_PAGE_ACCESS_TOKEN` — token de longa duração da Página FB
  - `META_PAGE_ID` — ID da Página FB
  - `META_IG_USER_ID` — ID da conta Insta Business
  - `SITE_URL` — ex: `https://exemplo.com.br`
- Site Astro publicado no Netlify **via CLI** (ver skill `/publicar-site`). **Atenção: NÃO há deploy automático via Git** — o `git push` versiona, mas quem coloca no ar é o `netlify deploy` do Passo 6.
- Conta Insta Business conectada à Página FB
- Página FB com permissões corretas no Meta App
- Scripts `scripts/postar-instagram.js` e `scripts/postar-facebook.js` configurados

Se algo disso faltar: parar e apontar pro guia de setup (criar `marketing/automacao-meta-setup.md` se ainda não existir).

## Argumento

`/aprovar-post <slug>` — onde `<slug>` é o nome do arquivo do blog **sem `.md`**.

Exemplo: `/aprovar-post como-conservar-produto`

Se o usuário não passou slug, listar os blogs em draft (arquivos com `draft: true`) e perguntar qual.

## Workflow

### Passo 1 — Localizar arquivos

- Blog: `site/.../blog/<slug>.md` (caminho depende do stack — Astro, Hugo, etc.)
- Carrossel: procurar `marketing/conteudo/<slug>-*` (a pasta tem sufixo de data)
- Validar que existem PNGs em `<pasta-carrossel>/instagram/slide-XX.png` (2 a 10)
- Validar que existem `legenda.md` e `legenda-linkedin.md`

Se faltar qualquer um, parar e relatar.

### Passo 2 — Mostrar resumo + pedir confirmação final

Mostrar pro usuário:
- Título do blog
- Quantos slides do carrossel
- Primeiras 200 chars da legenda
- URL final que vai ser publicada

Perguntar: **"Confirma publicação? (sim/não)"**. Só seguir se ele disser sim.

### Passo 3 — Flipar draft pra false

Editar o frontmatter do blog: `draft: true` → `draft: false`.

### Passo 4 — Copiar PNGs pro public folder do site

- Origem: `marketing/conteudo/<slug>-<data>/instagram/slide-*.png`
- Destino: `site/.../public/img/posts/<slug>/slide-*.png`
- Criar pasta de destino se não existir
- Sobrescrever se já existir (caso seja re-publicação)

### Passo 5 — Commit + push

```bash
git add site/<caminho>/blog/<slug>.md site/<caminho>/public/img/posts/<slug>/
git commit -m "publicar: <título do blog>"
git push origin main
```

Esperar push terminar com sucesso. **Isso só versiona — não publica.** A publicação real é o Passo 6.

### Passo 6 — Build + deploy no Netlify (via CLI)

O `git push` **não** dispara deploy automático. Buildar o Astro e subir via CLI — mesmo fluxo
da skill `/publicar-site` (ela tem as manhas de PATH do Windows). O `npm run build` copia
`site/public/img/posts/<slug>/` pra dentro de `site/dist/`, então os slides vão junto:

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path
cd "<raiz>\site"
npm run build      # confirmar "Complete!" — se falhar, abortar (não deploiar build quebrado)
cd "<raiz>"
& "$env:APPDATA\npm\netlify.cmd" deploy --prod --dir site/dist
```

Aguardar **"Deploy is live!"**. Depois validar que o post **e** a primeira imagem estão no ar
(a Meta API busca a imagem por URL pública — sem isso ela falha):

```bash
curl -s -o /dev/null -w "%{http_code}\n" "$SITE_URL/blog/$slug/"
curl -s -o /dev/null -w "%{http_code}\n" "$SITE_URL/img/posts/$slug/slide-01.png"
```

Ambos têm que dar **200**. Se o `/blog/<slug>/` não subir, conferir que o `draft: false` foi
salvo (Passo 3) e que o `<slug>.md` está na content collection do Astro (`site/src/content/blog/`).

### Passo 7 — Postar no Instagram

```bash
node --env-file=.env scripts/postar-instagram.js marketing/conteudo/<slug>-<data>
```

Capturar o post id retornado. Se falhar, **não seguir pra Facebook** — relatar e parar.

### Passo 8 — Postar no Facebook

```bash
node --env-file=.env scripts/postar-facebook.js marketing/conteudo/<slug>-<data>
```

Capturar o post id retornado.

### Passo 9 — LinkedIn

LinkedIn é manual por enquanto (API de empresa precisa de aprovação demorada). Mostrar pro usuário:

```
LinkedIn: cole esse texto manualmente em https://linkedin.com/in/<seu-perfil>:
<conteúdo de legenda-linkedin.md>
```

### Passo 10 — Resumo

Mostrar:
```
✓ Post publicado: <título>

Site:        <SITE_URL>/blog/<slug>/
Instagram:   <link do post>
Facebook:    <link do post>
LinkedIn:    pendente — texto pronto em legenda-linkedin.md (postar manual)
```

## Tratamento de erro

- Push falhou: rollback do `draft: false` (restaura `draft: true`), relata e para
- Build do Astro falhou: abortar antes do deploy (não publicar build quebrado), relata o erro
- `netlify deploy` falhou ou URL não dá 200: relata, pergunta se quer tentar de novo ou abortar — **não seguir pra Meta API** sem o post e a imagem no ar
- Insta API falhou: para e relata. Site já está no ar, blog publicado — só o post no feed que não foi
- FB falhou mas Insta OK: relata, sugere tentar de novo só o FB depois

## Princípios

1. **Confirmação humana antes de qualquer coisa irreversível.** Nunca pular o passo 2.
2. **Idempotente onde possível.** Re-rodar com mesmo slug deve detectar publicação prévia (blog não-draft, PNGs já no public/) e perguntar se é pra re-postar ou só atualizar.
3. **Falha cedo, falha alto.** Qualquer pré-requisito faltando = abortar e explicar o que falta.
4. **Logar tudo.** Cada passo imprime o que está fazendo e o resultado.
