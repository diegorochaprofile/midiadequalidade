---
name: publicar-site
description: >
  Builda o site oficial (Next.js em site-next/) como export estático e publica em produção no
  Netlify via CLI, num comando só. Use quando o usuário disser "publicar o site", "subir o site",
  "/publicar-site", ou pedir pra colocar no ar uma mudança do site institucional. NÃO confundir
  com /aprovar-post (que publica post de blog + carrossel nas redes).
---

# /publicar-site — Build + deploy do site Next.js no Netlify

Coloca o site institucional (**Next.js**, em `site-next/`) no ar em **midiadequalidade.netlify.app**.

## Contexto importante (ler antes)

- O site oficial é **Next.js (App Router) com `output: "export"`** — gera uma pasta `site-next/out/`
  100% estática que vai direto pro Netlify. Fonte em `site-next/`.
- ⚠️ A pasta `site/` é o **site Astro antigo, APOSENTADO** (mantido só pelo blog, hoje fora do ar).
  **Não** buildar/deployar `site/` — o site oficial é `site-next/`.
- O Netlify **NÃO está conectado ao GitHub pra deploy automático**. `git push` sozinho **não**
  atualiza o ar. A publicação real é via **Netlify CLI**, subindo `site-next/out`.

## Particularidades da máquina (Windows do Diego)

`node`, `npm`, `git` e `netlify` **não estão no PATH** do PowerShell:
- **node / npm:** prefixar → `$env:Path = "C:\Program Files\nodejs;" + $env:Path`
- **netlify CLI:** caminho completo → `& "$env:APPDATA\npm\netlify.cmd"`
- **git:** usar pela ferramenta Bash (Git Bash), não pelo PowerShell

## Workflow

### Passo 1 — Garantir login + link

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path
& "$env:APPDATA\npm\netlify.cmd" status
```

- Deve mostrar `Current project: midiadequalidade`. Se não estiver logado, rodar `netlify login`
  **em background** (abre o navegador) e aguardar.
- Se não estiver linkado (`.netlify/state.json` na raiz não existe): `netlify link --name midiadequalidade`.

### Passo 2 — Build estático do Next.js

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path
cd "<raiz>\site-next"
npm run build
```

Confirmar que terminou com **"✓ Compiled successfully"** e que existe `site-next/out/index.html`.
Se o build falhar, **parar e relatar** — não deploiar build quebrado.

### Passo 3 — Commitar a fonte (recomendado)

Pela ferramenta Bash, da raiz:

```bash
git add site-next netlify.toml
git commit -m "Atualiza site"   # só se houver mudança
git push origin main
```

(`node_modules/`, `.next/` e `out/` ficam fora pelo `.gitignore` — conferir que o staged não inclui nenhum.)

### Passo 4 — Deploy de produção

Rodar **da raiz** (onde fica o `.netlify/state.json`), apontando pro export:

```powershell
cd "<raiz>"
& "$env:APPDATA\npm\netlify.cmd" deploy --prod --dir "site-next/out"
```

Aguardar **"Deploy is live!"**. Capturar a Production URL e o link de Build logs.

### Passo 5 — Verificar no ar

Pela ferramenta Bash:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://midiadequalidade.netlify.app/
curl -s -o /dev/null -w "%{http_code}\n" https://midiadequalidade.netlify.app/icon.png
curl -s https://midiadequalidade.netlify.app/ | grep -o "/_next/" | head -1
```

Home e favicon devem dar **200**, e o HTML deve conter `/_next/` (confirma que é o build Next.js).

### Passo 6 — Resumo

```
✓ Site publicado: https://midiadequalidade.netlify.app
  Stack: Next.js (export estático) · favicon /icon.png OK
  Build logs: <link do Netlify>
```

## Tratamento de erro

- **Build falhou:** parar, mostrar o erro do `next build`, não deploiar.
- **`deploy --dir site-next/out` reclama que a pasta não existe:** rodar o build (Passo 2) antes.
- **`--site <nome>` dá "Not Found":** o flag `--site` só aceita ID; usar o **link da raiz** (rodar
  da raiz sem `--site`), ou `netlify link --name midiadequalidade` primeiro.
- **Login expirou:** rodar `netlify login` de novo.

## Princípios

1. **Nunca deploiar build quebrado.** Passo 2 tem que terminar limpo.
2. **CLI é o caminho real de publicação** enquanto o auto-deploy via Git não estiver ligado.
3. **Site oficial = `site-next/` (Next.js).** Nunca confundir com `site/` (Astro aposentado).
4. **Verificar sempre no ar** (Passo 5) — "Deploy is live!" + 200 + marcador `/_next/`.
