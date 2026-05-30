# Empresa

> Memória central do negócio. O Claude lê esse arquivo antes de cada resposta.

**Nome:** Mídia de Qualidade
**Negócio:** Agência de marketing e presença digital com IA como diferencial
**O que faz:** Ajuda empresas a construir autoridade e posicionamento no mundo digital — criação de site, presença e gestão de Instagram, tráfego pago e automação de processos. Usa IA pra ganhar produtividade, mas o que vende de verdade é a confiança na qualidade dos profissionais. O foco é o cliente sentir que está lidando com gente que sabe o que faz.
**Perfil:** Agência / consultoria (em fase de fundação)
**Atende clientes:** Empresas e PJs que precisam de autoridade e posicionamento digital, automação de processos e melhoria de presença online. Nichos de partida: advogados, dentistas, clínicas e PJs em geral.
**Equipe:** 2 sócios.
- **Diego** — mais voltado ao operacional
- **Gabriel** — mais voltado a marketing e vendas

  Estágio inicial: ainda definindo funções. Por ora os dois fazem um pouco de tudo e querem enxergar todos os processos da empresa. Criar e documentar esses processos é parte do trabalho.
**Ferramentas:** MazyOS + Claude Code e suas skills como espinha dorsal da operação. Git + Node instalados na máquina do Diego (atenção: `node`/`npm`/`git`/`netlify` não estão no PATH do PowerShell — node fica em `C:\Program Files\nodejs`, netlify CLI em `%APPDATA%\npm\netlify.cmd`, git via Git Bash). Código versionado no GitHub (repo privado **github.com/diegorochaprofile/midiadequalidade**). Site institucional é um projeto **Astro** em `site/`, publicado em **midiadequalidade.netlify.app**. **Importante: o Netlify NÃO está conectado ao Git pra deploy automático** — publicação é feita via **Netlify CLI** (`netlify deploy --prod --dir site/dist`), encapsulada na skill `/publicar-site`. Demais ferramentas a definir.
**Principais entregas:** Sites e landing pages, gestão e conteúdo de Instagram, tráfego pago, automação de processos (ex: atendimento via WhatsApp), criação de identidade visual.

## Contexto adicional

- O diferencial declarado é IA + qualidade humana: a IA aumenta produtividade, mas a confiança vem da competência dos profissionais. Comunicação nunca deve soar como "guru de IA".
- Empresa criada do zero em 2026 — está montando a própria estrutura (marca, site, redes, processos) ao mesmo tempo em que se prepara pra atender clientes.
