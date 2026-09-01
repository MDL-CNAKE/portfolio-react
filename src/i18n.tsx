import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "it" | "en";

type Metric = { value: string; label: string };
type ProjectT = {
  status: string;
  featured?: boolean;
  title: string;
  subtitle: string;
  description: string;
  metrics: Metric[];
  tags: string[];
  link?: string;
};
type TimelineItem = {
  kind: string;
  period: string;
  title: string;
  place: string;
  status: string;
};

type Content = {
  nav: { about: string; projects: string; path: string; contact: string };
  hero: {
    kicker: string;
    subtitle: string;
    intro: string;
    ctaProjects: string;
    ctaGithub: string;
    ctaContact: string;
  };
  stats: { value: string; label: string }[];
  about: { kicker: string; title: string; paragraph: string };
  skillGroups: { title: string; tags: string[] }[];
  projectsSection: { kicker: string; title: string; paragraph: string; featuredBadge: string; githubLabel: string };
  projects: ProjectT[];
  timelineSection: { kicker: string; title: string; paragraph: string };
  timeline: TimelineItem[];
  contact: { kicker: string; title: string; paragraph: string; linkedinLabel: string; githubLabel: string };
  location: string;
};

export const profile = {
  name: "Marguerite El Mbimbey",
  fullName: "Marguerite El Mbimbey Moukoko",
  email: "meg.elmbimbey@gmail.com",
  phones: ["+39 347 6534662 (IT)", "+33 7 53 50 57 84 (FR)"],
  linkedin: "https://linkedin.com/in/marguerite-el-mbimbey-54557911b",
  github: "https://github.com/MDL-CNAKE",
};

const skillTags = {
  data: ["SQL", "PostgreSQL", "MySQL", "Flyway", "ETL", "Data modeling", "Data cleaning"],
  bi: ["Metabase", "Streamlit", "KPI", "Analyse de marché", "Pricing & marges"],
  ai: ["RAG", "LLM", "Agents IA", "Prompt engineering", "LangChain", "LlamaIndex", "ChromaDB", "pgvector"],
  ml: ["scikit-learn", "RandomForest", "Cross-validation", "Feature engineering", "Explicabilité"],
  dev: ["Python", "Java Spring Boot", "FastAPI", "API REST", "React", "TypeScript"],
  cloud: ["AWS", "Azure", "Docker", "Docker Compose", "Git / GitHub", "GCP (notions)"],
};

export const content: Record<Lang, Content> = {
  fr: {
    nav: { about: "À propos", projects: "Projets", path: "Parcours", contact: "Contact" },
    hero: {
      kicker: "DATA . IA . BUSINESS INTELLIGENCE",
      subtitle: "Étudiante ITS Academy . Turin",
      intro:
        "Du management opérationnel à la Business Intelligence, en passant par l'intelligence artificielle générative. Je consolide mes compétences en développement, machine learning et IA, avec un intérêt marqué pour le cloud et les web solutions.",
      ctaProjects: "Voir les projets",
      ctaGithub: "GitHub",
      ctaContact: "Me contacter",
    },
    stats: [
      { value: "4", label: "PROJETS PRÉSENTÉS" },
      { value: "10+", label: "ANS EN MANAGEMENT" },
      { value: "1800h", label: "FORMATION ITS ACADEMY" },
      { value: "3", label: "LANGUES PARLÉES" },
    ],
    about: {
      kicker: "PROFIL & COMPÉTENCES",
      title: "Un parcours atypique, une exigence constante",
      paragraph:
        "Après plus de 10 ans d'expérience en gestion opérationnelle et management d'équipe dans l'hôtellerie, j'ai choisi de me reconvertir dans l'IT. Actuellement étudiante en Business Intelligence Software Developer à l'ITS Academy ICT Piemonte de Turin, je répartis volontairement mes compétences entre données/BI, développement, IA générative et cloud.",
    },
    skillGroups: [
      { title: "Données & SQL", tags: skillTags.data },
      { title: "BI & Finance", tags: skillTags.bi },
      { title: "IA Générative & Agents", tags: skillTags.ai },
      { title: "Machine Learning", tags: skillTags.ml },
      { title: "Développement & API", tags: skillTags.dev },
      { title: "Cloud & DevOps", tags: skillTags.cloud },
    ],
    projectsSection: {
      kicker: "PROJETS",
      title: "Ce que j'ai construit",
      paragraph:
        "Du dashboard IA à l'expérimentation RAG - chaque projet documenté avec ses limites, pas seulement ses résultats.",
      featuredBadge: "PROJET PHARE",
      githubLabel: "GitHub",
    },
    projects: [
      {
        status: "EXPÉRIMENTATION",
        featured: true,
        title: "Assistant RAG personnel",
        subtitle: "Pipeline de Retrieval-Augmented Generation - expérimentation en cours",
        description:
          "Construction d'un pipeline RAG pour explorer comment un LLM peut répondre en s'appuyant sur une base documentaire personnalisée. Ingestion et découpage de documents, comparaison ChromaDB / pgvector comme vector stores, orchestration de la récupération avec LangChain et LlamaIndex, et prompt engineering pour réduire les hallucinations.",
        metrics: [
          { value: "2", label: "vector stores comparés" },
          { value: "2", label: "frameworks testés" },
        ],
        tags: ["LangChain", "LlamaIndex", "ChromaDB", "pgvector", "RAG", "Prompt Engineering"],
      },
      {
        status: "TERMINÉ",
        featured: true,
        title: "VirtualZ",
        subtitle: "Plateforme de gestion de bibliothèque de jeux Steam - projet académique en équipe de 6",
        description:
          "Backend Java Spring Boot, frontend React/TypeScript, pipeline Python de nettoyage de données pour un dataset de plus de 122 000 jeux. 20 PRs mergées : architecture, cache Caffeine, migration TypeScript complète, i18n, CI/CD Docker.",
        metrics: [
          { value: "6", label: "développeurs" },
          { value: "20", label: "PRs mergées" },
          { value: "122K+", label: "jeux dans le dataset" },
        ],
        tags: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Docker Compose"],
        link: "https://github.com/MDL-CNAKE",
      },
      {
        status: "TERMINÉ",
        title: "CruScout",
        subtitle: "Tableau de bord IA pour petits producteurs de vin",
        description:
          "Prédiction de qualité par Machine Learning, sommelier virtuel avec RAG, API REST et base MySQL versionnée avec Flyway.",
        metrics: [
          { value: "6 497", label: "vins analysés" },
          { value: "0.40", label: "R2 (test, corrigé)" },
          { value: "8", label: "migrations SQL" },
        ],
        tags: ["Python", "scikit-learn", "MySQL", "FastAPI", "React", "RAG", "LLM", "Docker"],
        link: "https://github.com/MDL-CNAKE",
      },
      {
        status: "TERMINÉ",
        title: "Opportunités Spiritueux Afrique",
        subtitle: "Modélisation bottom-up du marché africain des spiritueux",
        description:
          "Modélisation à partir de données Banque mondiale et OMS (Diageo, Pernod Ricard, Campari, Bacardi), validée contre les comptes publiés.",
        metrics: [
          { value: "4", label: "groupes analysés" },
          { value: "+20%", label: "écart vs. Diageo" },
          { value: "5", label: "facteurs du modèle" },
        ],
        tags: ["Python", "Streamlit", "Data Analysis", "Market Modeling", "PDF Reporting"],
        link: "https://github.com/MDL-CNAKE",
      },
    ],
    timelineSection: {
      kicker: "FORMATION & PARCOURS",
      title: "Un parcours atypique",
      paragraph: "Du management hôtelier à la Business Intelligence, avec la même exigence des deux côtés.",
    },
    timeline: [
      { kind: "FORMATION", period: "2025 - 2027", title: "Business Intelligence Software Developer", place: "ITS Academy ICT Piemonte, Turin - 1 800h", status: "EN COURS" },
      { kind: "FORMATION", period: "2023 - 2024", title: "Bachelor Business Management", place: "AIVA, Strasbourg - Commerce International & Vins/Spiritueux", status: "TERMINÉ" },
      { kind: "FORMATION", period: "2024 - 2025", title: "Formation Full Stack & Java", place: "ChallengeNetwork / Manpower", status: "TERMINÉ" },
      { kind: "EXPÉRIENCE", period: "Maintenant", title: "Recherche de stage curriculaire", place: "Data (Engineering, Analyse, Science), BI ou IA - Italie & France", status: "EN COURS" },
      { kind: "EXPÉRIENCE", period: "2012 - 2025", title: "Management opérationnel", place: "Doppio Malto Group, Rocco Forte Hotels - 10+ ans, encadrement d'équipes jusqu'à 15 personnes", status: "TERMINÉ" },
    ],
    contact: {
      kicker: "TRAVAILLONS ENSEMBLE",
      title: "Disponible pour un stage curriculaire",
      paragraph: "Data (Engineering, Analyse, Science), Business Intelligence ou IA, en Italie ou en France.",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    location: "Turin, Italie",
  },
  it: {
    nav: { about: "Chi sono", projects: "Progetti", path: "Percorso", contact: "Contatti" },
    hero: {
      kicker: "DATA . IA . BUSINESS INTELLIGENCE",
      subtitle: "Studentessa ITS Academy . Torino",
      intro:
        "Da oltre 10 anni di management operativo alla Business Intelligence, fino all'intelligenza artificiale generativa. Sto consolidando le mie competenze in sviluppo, machine learning e IA, con un forte interesse per il cloud e le soluzioni web.",
      ctaProjects: "Vedi i progetti",
      ctaGithub: "GitHub",
      ctaContact: "Contattami",
    },
    stats: [
      { value: "4", label: "PROGETTI PRESENTATI" },
      { value: "10+", label: "ANNI DI MANAGEMENT" },
      { value: "1800h", label: "FORMAZIONE ITS ACADEMY" },
      { value: "3", label: "LINGUE PARLATE" },
    ],
    about: {
      kicker: "PROFILO & COMPETENZE",
      title: "Un percorso atipico, un'esigenza costante",
      paragraph:
        "Dopo oltre 10 anni di esperienza nella gestione operativa e nel management di team nel settore alberghiero, ho scelto di riconvertirmi nell'IT. Attualmente studentessa in Business Intelligence Software Developer presso l'ITS Academy ICT Piemonte di Torino, distribuisco volontariamente le mie competenze tra dati/BI, sviluppo, IA generativa e cloud.",
    },
    skillGroups: [
      { title: "Dati & SQL", tags: skillTags.data },
      { title: "BI & Finance", tags: skillTags.bi },
      { title: "IA Generativa & Agenti", tags: skillTags.ai },
      { title: "Machine Learning", tags: skillTags.ml },
      { title: "Sviluppo & API", tags: skillTags.dev },
      { title: "Cloud & DevOps", tags: skillTags.cloud },
    ],
    projectsSection: {
      kicker: "PROGETTI",
      title: "Cosa ho costruito",
      paragraph:
        "Dalla dashboard IA alla sperimentazione RAG: ogni progetto documentato con i suoi limiti, non solo i risultati.",
      featuredBadge: "PROGETTO DI PUNTA",
      githubLabel: "GitHub",
    },
    projects: [
      {
        status: "SPERIMENTAZIONE",
        featured: true,
        title: "Assistente RAG personale",
        subtitle: "Pipeline di Retrieval-Augmented Generation - sperimentazione in corso",
        description:
          "Costruzione di una pipeline RAG per esplorare come un LLM possa rispondere basandosi su una base documentale personalizzata. Ingestione e suddivisione dei documenti, confronto tra ChromaDB e pgvector come vector store, orchestrazione del retrieval con LangChain e LlamaIndex, e prompt engineering per ridurre le allucinazioni.",
        metrics: [
          { value: "2", label: "vector store confrontati" },
          { value: "2", label: "framework testati" },
        ],
        tags: ["LangChain", "LlamaIndex", "ChromaDB", "pgvector", "RAG", "Prompt Engineering"],
      },
      {
        status: "COMPLETATO",
        featured: true,
        title: "VirtualZ",
        subtitle: "Piattaforma di gestione libreria giochi Steam - progetto accademico in team di 6",
        description:
          "Backend Java Spring Boot, frontend React/TypeScript, pipeline Python di pulizia dati per un dataset di oltre 122.000 giochi. 20 PR unite: architettura, cache Caffeine, migrazione TypeScript completa, i18n, CI/CD Docker.",
        metrics: [
          { value: "6", label: "sviluppatori" },
          { value: "20", label: "PR unite" },
          { value: "122K+", label: "giochi nel dataset" },
        ],
        tags: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Docker Compose"],
        link: "https://github.com/MDL-CNAKE",
      },
      {
        status: "COMPLETATO",
        title: "CruScout",
        subtitle: "Dashboard IA per piccoli produttori di vino",
        description:
          "Previsione della qualità tramite Machine Learning, sommelier virtuale con RAG, API REST e database MySQL versionato con Flyway.",
        metrics: [
          { value: "6 497", label: "vini analizzati" },
          { value: "0.40", label: "R2 (test, corretto)" },
          { value: "8", label: "migrazioni SQL" },
        ],
        tags: ["Python", "scikit-learn", "MySQL", "FastAPI", "React", "RAG", "LLM", "Docker"],
        link: "https://github.com/MDL-CNAKE",
      },
      {
        status: "COMPLETATO",
        title: "Opportunità Spirits Africa",
        subtitle: "Modellazione bottom-up del mercato africano degli spiriti",
        description:
          "Modellazione basata su dati Banca Mondiale e OMS (Diageo, Pernod Ricard, Campari, Bacardi), validata rispetto ai bilanci pubblicati.",
        metrics: [
          { value: "4", label: "gruppi analizzati" },
          { value: "+20%", label: "scarto vs. Diageo" },
          { value: "5", label: "fattori del modello" },
        ],
        tags: ["Python", "Streamlit", "Data Analysis", "Market Modeling", "PDF Reporting"],
        link: "https://github.com/MDL-CNAKE",
      },
    ],
    timelineSection: {
      kicker: "FORMAZIONE & PERCORSO",
      title: "Un percorso atipico",
      paragraph: "Dal management alberghiero alla Business Intelligence, con lo stesso rigore da entrambe le parti.",
    },
    timeline: [
      { kind: "FORMAZIONE", period: "2025 - 2027", title: "Business Intelligence Software Developer", place: "ITS Academy ICT Piemonte, Torino - 1.800h", status: "IN CORSO" },
      { kind: "FORMAZIONE", period: "2023 - 2024", title: "Bachelor Business Management", place: "AIVA, Strasburgo - Commercio Internazionale & Vini/Alcolici", status: "COMPLETATO" },
      { kind: "FORMAZIONE", period: "2024 - 2025", title: "Formazione Full Stack & Java", place: "ChallengeNetwork / Manpower", status: "COMPLETATO" },
      { kind: "ESPERIENZA", period: "Ora", title: "Ricerca di stage curriculare", place: "Data (Engineering, Analisi, Scienza), BI o IA - Italia & Francia", status: "IN CORSO" },
      { kind: "ESPERIENZA", period: "2012 - 2025", title: "Management operativo", place: "Doppio Malto Group, Rocco Forte Hotels - 10+ anni, gestione di team fino a 15 persone", status: "COMPLETATO" },
    ],
    contact: {
      kicker: "LAVORIAMO INSIEME",
      title: "Disponibile per uno stage curriculare",
      paragraph: "Data (Engineering, Analisi, Scienza), Business Intelligence o IA, in Italia o in Francia.",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    location: "Torino, Italia",
  },
  en: {
    nav: { about: "About", projects: "Projects", path: "Timeline", contact: "Contact" },
    hero: {
      kicker: "DATA . AI . BUSINESS INTELLIGENCE",
      subtitle: "ITS Academy Student . Turin",
      intro:
        "From over 10 years in operations management to Business Intelligence, and on to generative AI. I'm building my skills in development, machine learning and AI, with a strong interest in cloud and web solutions.",
      ctaProjects: "View projects",
      ctaGithub: "GitHub",
      ctaContact: "Contact me",
    },
    stats: [
      { value: "4", label: "FEATURED PROJECTS" },
      { value: "10+", label: "YEARS IN MANAGEMENT" },
      { value: "1800h", label: "ITS ACADEMY TRAINING" },
      { value: "3", label: "LANGUAGES SPOKEN" },
    ],
    about: {
      kicker: "PROFILE & SKILLS",
      title: "An unconventional path, a constant standard",
      paragraph:
        "After more than 10 years of experience in operations management and team leadership in hospitality, I chose to retrain in IT. Currently studying to become a Business Intelligence Software Developer at ITS Academy ICT Piemonte in Turin, I deliberately split my skills across data/BI, development, generative AI and cloud.",
    },
    skillGroups: [
      { title: "Data & SQL", tags: skillTags.data },
      { title: "BI & Finance", tags: skillTags.bi },
      { title: "Generative AI & Agents", tags: skillTags.ai },
      { title: "Machine Learning", tags: skillTags.ml },
      { title: "Development & API", tags: skillTags.dev },
      { title: "Cloud & DevOps", tags: skillTags.cloud },
    ],
    projectsSection: {
      kicker: "PROJECTS",
      title: "What I've built",
      paragraph:
        "From AI dashboards to RAG experiments - every project documented with its limitations, not just its results.",
      featuredBadge: "FEATURED PROJECT",
      githubLabel: "GitHub",
    },
    projects: [
      {
        status: "EXPERIMENTAL",
        featured: true,
        title: "Personal RAG Assistant",
        subtitle: "Retrieval-Augmented Generation pipeline - ongoing experiment",
        description:
          "Building a RAG pipeline to explore how an LLM can answer using a personalized document base. Document ingestion and chunking, comparing ChromaDB and pgvector as vector stores, retrieval orchestration with LangChain and LlamaIndex, and prompt engineering to reduce hallucinations.",
        metrics: [
          { value: "2", label: "vector stores compared" },
          { value: "2", label: "frameworks tested" },
        ],
        tags: ["LangChain", "LlamaIndex", "ChromaDB", "pgvector", "RAG", "Prompt Engineering"],
      },
      {
        status: "COMPLETED",
        featured: true,
        title: "VirtualZ",
        subtitle: "Steam game library management platform - 6-person academic team project",
        description:
          "Java Spring Boot backend, React/TypeScript frontend, Python data-cleaning pipeline for a dataset of over 122,000 games. 20 merged PRs: architecture, Caffeine caching, full TypeScript migration, i18n, Docker CI/CD.",
        metrics: [
          { value: "6", label: "developers" },
          { value: "20", label: "merged PRs" },
          { value: "122K+", label: "games in dataset" },
        ],
        tags: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Docker Compose"],
        link: "https://github.com/MDL-CNAKE",
      },
      {
        status: "COMPLETED",
        title: "CruScout",
        subtitle: "AI dashboard for small wine producers",
        description:
          "Quality prediction via Machine Learning, virtual sommelier with RAG, REST API and MySQL database versioned with Flyway.",
        metrics: [
          { value: "6,497", label: "wines analyzed" },
          { value: "0.40", label: "R2 (test, adjusted)" },
          { value: "8", label: "SQL migrations" },
        ],
        tags: ["Python", "scikit-learn", "MySQL", "FastAPI", "React", "RAG", "LLM", "Docker"],
        link: "https://github.com/MDL-CNAKE",
      },
      {
        status: "COMPLETED",
        title: "African Spirits Opportunities",
        subtitle: "Bottom-up modeling of the African spirits market",
        description:
          "Modeling based on World Bank and WHO data (Diageo, Pernod Ricard, Campari, Bacardi), validated against published financials.",
        metrics: [
          { value: "4", label: "groups analyzed" },
          { value: "+20%", label: "gap vs. Diageo" },
          { value: "5", label: "model factors" },
        ],
        tags: ["Python", "Streamlit", "Data Analysis", "Market Modeling", "PDF Reporting"],
        link: "https://github.com/MDL-CNAKE",
      },
    ],
    timelineSection: {
      kicker: "TRAINING & PATH",
      title: "An unconventional path",
      paragraph: "From hotel management to Business Intelligence, with the same rigor on both sides.",
    },
    timeline: [
      { kind: "TRAINING", period: "2025 - 2027", title: "Business Intelligence Software Developer", place: "ITS Academy ICT Piemonte, Turin - 1,800h", status: "ONGOING" },
      { kind: "TRAINING", period: "2023 - 2024", title: "Bachelor Business Management", place: "AIVA, Strasbourg - International Trade & Wines/Spirits", status: "COMPLETED" },
      { kind: "TRAINING", period: "2024 - 2025", title: "Full Stack & Java Training", place: "ChallengeNetwork / Manpower", status: "COMPLETED" },
      { kind: "EXPERIENCE", period: "Now", title: "Looking for a curricular internship", place: "Data (Engineering, Analysis, Science), BI or AI - Italy & France", status: "ONGOING" },
      { kind: "EXPERIENCE", period: "2012 - 2025", title: "Operations Management", place: "Doppio Malto Group, Rocco Forte Hotels - 10+ years, managing teams of up to 15 people", status: "COMPLETED" },
    ],
    contact: {
      kicker: "LET'S WORK TOGETHER",
      title: "Available for a curricular internship",
      paragraph: "Data (Engineering, Analysis, Science), Business Intelligence or AI, in Italy or France.",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    location: "Turin, Italy",
  },
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Content;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "fr";
    const saved = window.localStorage.getItem("lang");
    if (saved === "fr" || saved === "it" || saved === "en") return saved;
    return "fr";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
