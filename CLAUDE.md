# MazyOS — Sistema operacional do negócio

Sua empresa roda em cima desse arquivo. Aqui ficam as regras de operação
do MazyOS — como o Claude lê o contexto, aprende com correções, mantém
tudo atualizado e cria skills novas conforme a operação evolui.

Esse arquivo é editável. Quando o `/instalar` rodar, ele complementa o
final dessa página com as regras específicas do seu negócio.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

---

# Mídia de Qualidade — regras do negócio

> Seção adicionada pelo `/instalar`. Perfil: **agência / consultoria**.

## O que é esse workspace

Operação da Mídia de Qualidade — agência de marketing e presença digital
com IA como diferencial. Aqui ficam a marca da agência, os clientes,
propostas, conteúdo e entregas. A empresa está em fase de fundação:
boa parte do trabalho inicial é estruturar a própria casa (marca, site,
redes, processos) antes/enquanto começa a atender em escala.

**Estrutura de pastas:**
- `_memoria/` — quem é a agência, como falamos, foco atual
- `identidade/` — marca da agência (pegada tech; ver `design-guide.md`)
- `clientes/` — uma subpasta por cliente, autossuficiente
- `briefings/` — briefings antes de virar cliente
- `propostas/` — propostas comerciais em andamento
- `marketing/` — conteúdo institucional da própria agência
- `site-next/` — **site institucional oficial** (Next.js, export estático); publica via `/publicar-site`
- `site/` — site Astro antigo, **aposentado** (mantido pelo blog, hoje fora do ar)
- `saidas/` — documentos pontuais, análises
- `dados/` — arquivos a analisar (relatórios de cliente, exports)
- `scripts/` — automações e utilitários
- `templates/` — moldes de perfil, skills e identidade
- `tarefas.md` — pipeline da agência

## Sobre a agência

Somos uma agência de marketing, presença digital e automação. Atendemos
empresas e PJs (advogados, dentistas, clínicas e PJs em geral) que
precisam de autoridade e posicionamento online. Serviços principais:

- Sites e landing pages (estilo dark/tech, bem produzidos)
- Gestão e conteúdo de Instagram
- Tráfego pago
- Automação de processos (ex: atendimento via WhatsApp)
- Identidade visual

Time: 2 sócios (Diego — operacional · Gabriel — marketing/vendas).
Em fase inicial os dois atuam em tudo, pra conhecer todos os processos.

## Diferencial e tom

IA é diferencial de **produtividade**, não o argumento de venda. O que
vende é a confiança na qualidade dos profissionais. A comunicação é
clara, técnica e profissional — sem jargão de guru, sem soar como
vendedor de promessa. Detalhe completo em `_memoria/preferencias.md`.

## Regras do sistema

- Cliente novo → criar pasta `clientes/<Nome>/` com briefing, estratégia
  e subpastas conforme as entregas contratadas
- Proposta nova → `propostas/<cliente>-<data>.html` antes de fechar
- Casos de sucesso ficam em `clientes/<Nome>/caso.md` (reuso em pitches)
- Toda peça visual respeita `identidade/design-guide.md` (universo
  azul/roxo tech, dark-first)

## Ferramentas conectadas

- [ ] Notion
- [ ] Gmail
- [ ] Google Calendar
- [ ] Canva
- [ ] Meta Ads
- [ ] Google Ads

*(Marcar conforme for instalando os MCPs)*

## Skills externas instaladas

- **HELIX** (`~/.claude/skills/helix`, global — disponível em qualquer projeto).
  Engine de *design intelligence* + geração de código. Decodifica a "DNA
  visual" de qualquer referência (URL, landing, carrossel, screenshot) em
  `BLUEPRINT.md`, tokens Tailwind, `design-system.md`, `voice.md` e auditoria
  — ou gera uma landing **Next.js + React + Tailwind** completa. Também valida
  código contra os contratos (`helix validate`) e mede fidelidade visual vs.
  referência (`helix mirror`).
  - **Quando usar na agência:** entregas de **site/landing pra cliente**
    (decodificar uma referência que o cliente curtiu → design system →
    landing), auditar o site de um prospect num pitch, ou montar pacote de
    onboarding visual. Casa com a candidata a skill "padrão de site dark/tech
    pra clientes" (ver `_memoria/estrategia.md`).
  - **Como chamar:** "helix wizard" (guiado) ou comandos diretos —
    "helix decode <url>", "helix landing", "helix audit <url>". Precisa de
    Node + Playwright/Chromium (já instalados nesta máquina).
  - ⚠️ **Stack:** HELIX gera **Next.js + Tailwind**. O site institucional da
    agência é **Astro** (`site/`) — usar HELIX pra entregas/landings, não pra
    mexer no site institucional sem adaptar a saída.
