// Conteúdo tipado da landing — voz Mídia de Qualidade (sem jargão de growth).
// Editar copy aqui; o visual fica em tailwind.config.ts.

export const contact = {
  whatsappNumber: "5531985945898",
  whatsappHref:
    "https://wa.me/5531985945898?text=Ol%C3%A1!%20Quero%20um%20diagn%C3%B3stico%20da%20minha%20presen%C3%A7a%20digital.",
  phoneLabel: "(31) 98594-5898",
  email: "midiadequalidade7@gmail.com",
  instagram: "https://instagram.com/midiadequalidadeofc",
  linkedin: "#",
};

export const nav = {
  links: [
    { label: "Serviços", href: "/#servicos" },
    { label: "Método", href: "/#metodo" },
    { label: "Cases", href: "/#cases" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/#contato" },
  ],
  cta: { label: "Fala com a gente", href: "/#contato" },
};

export const hero = {
  eyebrow: "Mídia de Qualidade · Presença digital",
  // partes em `accent: true` recebem o gradiente azul
  title: [
    { text: "Qualidade que se nota" },
    { text: " na " },
    { text: "primeira impressão.", accent: true },
  ],
  lead: "Sites, conteúdo, tráfego e automação — construídos com rigor técnico. A IA acelera o trabalho; os profissionais garantem o resultado.",
  primaryCta: { label: "Falar com a gente", href: "#contato" },
  secondaryCta: { label: "Ver o que fazemos", href: "#servicos" },
};

export const logos = {
  label: "Marcas que confiam no nosso trabalho",
  // placeholders (a agência está em fundação)
  items: ["Cliente 01", "Cliente 02", "Cliente 03", "Cliente 04", "Cliente 05", "Cliente 06"],
};

export type Service = { num: string; title: string; description: string; icon: string };

export const services: { eyebrow: string; title: string; intro: string; items: Service[] } = {
  eyebrow: "O que fazemos",
  title: "Tudo o que sua presença digital precisa.",
  intro: "Da estrutura à execução — com qualidade em cada entrega, não só no discurso.",
  items: [
    {
      num: "01",
      title: "Sites & Landing Pages",
      description:
        "Sites dark, rápidos e bem produzidos. Da estrutura ao texto, pensados pra transmitir autoridade e converter.",
      icon: "monitor",
    },
    {
      num: "02",
      title: "Instagram",
      description:
        "Gestão e conteúdo com identidade. Feed coeso e presença que constrói reputação ao longo do tempo.",
      icon: "instagram",
    },
    {
      num: "03",
      title: "Tráfego Pago",
      description:
        "Campanhas orientadas a venda, não a vaidade. Verba investida com método e leitura de dados.",
      icon: "trending",
    },
    {
      num: "04",
      title: "Automação (WhatsApp)",
      description:
        "Atendimento e processos automatizados — pra responder rápido, em escala, sem perder o toque humano.",
      icon: "chat",
    },
    {
      num: "05",
      title: "Identidade Visual",
      description:
        "Marca com pegada tech: logo, paleta e direção visual que passam qualidade em todo ponto de contato.",
      icon: "sparkles",
    },
  ],
};

export type Step = { num: string; title: string; description: string };

export const method: { eyebrow: string; title: string; intro: string; steps: Step[] } = {
  eyebrow: "Como funciona",
  title: "Método claro, do início ao fim.",
  intro: "Sem achismo. Cada etapa tem objetivo e entrega.",
  steps: [
    {
      num: "1",
      title: "Diagnóstico",
      description: "Entendemos seu momento, seu cliente e o que está travando hoje.",
    },
    {
      num: "2",
      title: "Estratégia",
      description: "Definimos o plano: canais, prioridades e metas claras.",
    },
    {
      num: "3",
      title: "Execução",
      description: "Colocamos no ar com qualidade: site, conteúdo, campanhas, automação.",
    },
    {
      num: "4",
      title: "Acompanhamento",
      description: "Medimos, ajustamos e evoluímos o que está funcionando.",
    },
  ],
};

export const differential = {
  eyebrow: "Nosso diferencial",
  title: [
    { text: "IA é a nossa " },
    { text: "ferramenta", accent: true },
    { text: ". Não o nosso discurso." },
  ],
  body: "Ela acelera o trabalho e aumenta a produtividade. Mas o que entrega resultado é a competência de quem está por trás. A IA é meio; a qualidade é responsabilidade nossa.",
};

export type Case = { tag: string; title: string; description: string };

export const cases: { eyebrow: string; title: string; note: string; items: Case[] } = {
  eyebrow: "Resultados",
  title: "Trabalho que fala por si.",
  note: "Exemplos do tipo de entrega que fazemos (ilustrativos — em breve, projetos reais).",
  items: [
    {
      tag: "Site + Instagram",
      title: "Clínica odontológica",
      description:
        "Presença digital do zero: site, identidade e feed coeso pra transmitir confiança.",
    },
    {
      tag: "Identidade + Landing",
      title: "Escritório de advocacia",
      description: "Marca sóbria e landing de captação focada em autoridade.",
    },
    {
      tag: "Tráfego + Automação",
      title: "Varejo local",
      description:
        "Campanhas e atendimento automatizado pra vender pela internet com consistência.",
    },
  ],
};

export const finalCta = {
  title: "Vamos construir sua presença digital?",
  lead: "Conta rapidamente seu momento. A gente responde com um diagnóstico do que faz sentido pra você — sem compromisso.",
  cta: { label: "Chamar no WhatsApp", href: contact.whatsappHref },
};
