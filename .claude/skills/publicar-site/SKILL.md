---
name: publicar-site
description: >
  Builda o site Astro (em site/) e publica em produção no Netlify via CLI, num comando só.
  Use quando o usuário disser "publicar o site", "publica o astro", "subir o site", "/publicar-site",
  ou pedir pra colocar no ar uma mudança do site institucional. NÃO confundir com /aprovar-post
  (que publica um post de blog + carrossel nas redes) — esta skill só publica o site.
---

# /publicar-site — Build + deploy do site Astro no Netlify

Coloca o site institucional (Astro, em `site/`) no ar em **midiadequalidade.netlify.app**.

## Contexto importante (ler antes)

O site no Netlify **NÃO está conectado ao GitHub pra deploy automático**. Dar `git push`
sozinho **não** atualiza o ar. A publicação real acontece via **Netlify CLI**, que sobe a
pasta `site/dist` já buildada direto pra produção. (Quando/se o auto-deploy via Git for
ligado no painel do Netlify, essa skill continua válida como deploy manual.)

## Particularidades da máquina (Windows do Diego)

`node`, `npm`, `git` e `netlify` **não estão no PATH** do PowerShell. Resolver assim:

- **node / npm:** prefixar o PATH → `$env:Path = "C:\Program Files\nodejs;" + $env:Path`
- **netlify CLI:** chamar pelo caminho completo → `& "$env:APPDATA\npm\netlify.cmd"`
- **git:** usar pela ferramenta Bash (Git Bash), não pelo PowerShell

## Workflow

### Passo 1 — Garantir login no Netlify

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path
& "$env:APPDATA\npm\netlify.cmd" status
```

- Se aparecer "You don't appear to be in a folder that is linked", seguir pro Passo 2 (link).
- Se reclamar que não está logado, rodar `netlify login` **em background** (abre o navegador;
  surgir o link de autorização pro usuário) e aguardar concluir.
- Se o `netlify` CLI não existir: instalar com `npm install -g netlify-cli` (com o PATH do node setado).

### Passo 2 — Linkar a pasta ao site (uma vez só)

Se ainda não existe `.netlify/state.json`, linkar **pelo nome** (sem prompt interativo):

```powershell
& "$env:APPDATA\npm\netlify.cmd" link --name midiadequalidade
```

### Passo 3 — Build fresh do Astro

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path
cd "<raiz>\site"
npm run build
```

Confirmar que terminou com "Complete!" e que `site/dist/index.html` existe. Se o build
falhar, **parar e relatar** o erro — não fazer deploy de build quebrado.

### Passo 4 — Commitar a fonte (opcional, mas recomendado)

O deploy não depende disso, mas mantém o GitHub em dia. Pela ferramenta Bash, da raiz:

```bash
git add site netlify.toml
git commit -m "Atualiza site"   # só se houver mudança
git push origin main
```

(`node_modules/`, `dist/` e `.astro/` ficam fora pelo `.gitignore` — conferir que o staged
não inclui nenhum deles.)

### Passo 5 — Deploy de produção

Rodar **da raiz do projeto** (onde fica o `.netlify/state.json` do link), com o caminho `site/dist`:

```powershell
cd "<raiz>"
& "$env:APPDATA\npm\netlify.cmd" deploy --prod --dir site/dist
```

Aguardar "Deploy is live!". Capturar a Production URL e o link de Build logs do output.

### Passo 6 — Verificar no ar

Pela ferramenta Bash, confirmar que respondem **200**:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://midiadequalidade.netlify.app/
curl -s -o /dev/null -w "%{http_code}\n" https://midiadequalidade.netlify.app/blog/
```

A home deve conter o marcador `/_astro/` (confirma que é o build do Astro, não o estático antigo).

### Passo 7 — Resumo

```
✓ Site publicado: https://midiadequalidade.netlify.app
  Páginas conferidas: / e /blog/ → 200
  Build logs: <link do Netlify>
```

## Tratamento de erro

- **Build falhou:** parar, mostrar o erro do `astro build`, não fazer deploy.
- **`deploy --dir site/dist` reclama que a pasta não existe:** rodar o build (Passo 3) antes.
- **Login expirou:** rodar `netlify login` de novo e tentar.
- **/blog/ continua 404 depois do deploy:** o build subiu vazio ou errado — checar `site/dist`
  localmente (`/blog/index.html` existe?) e refazer.

## Princípios

1. **Nunca deploiar build quebrado.** Passo 3 tem que terminar limpo.
2. **CLI é o caminho real de publicação** enquanto o auto-deploy via Git não estiver ligado.
3. **Verificar sempre no ar** (Passo 6) — "Deploy is live!" do CLI + 200 no curl.
