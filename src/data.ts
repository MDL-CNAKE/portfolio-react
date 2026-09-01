export const profile = {
  name: "Marguerite El Mbimbey",
  fullName: "Marguerite El Mbimbey Moukoko",
  tagline: "Data · IA · Business Intelligence",
  subtitle: "Étudiante ITS Academy · Turin",
  intro:
    "Du management opérationnel à la Business Intelligence, en passant par l'intelligence artificielle générative. Je consolide mes compétences en développement, machine learning et IA, avec un intérêt marqué pour le cloud et les web solutions.",
  email: "meg.elmbimbey@gmail.com",
  phones: ["+39 347 6534662 (IT)", "+33 7 53 50 57 84 (FR)"],
  linkedin: "https://linkedin.com/in/marguerite-el-mbimbey-54557911b",
  github: "https://github.com/MDL-CNAKE",
  location: "Turin, Italie",
};

export const stats = [
  { value: "4", label: "PROJETS PRÉSENTÉS" },
  { value: "10+", label: "ANS EN MANAGEMENT" },
  { value: "1800h", label: "FORMATION ITS ACADEMY" },
  { value: "3", label: "LANGUES PARLÉES" },
];

export const skillGroups = [
  {
    title: "Données & SQL",
    tags: ["SQL", "PostgreSQL", "MySQL", "Flyway", "ETL", "Data modeling", "Data cleaning"],
  },
  {
    title: "BI & Finance",
    tags: ["Metabase", "Streamlit", "KPI", "Analyse de marché", "Pricing & marges"],
  },
  {
    title: "IA Générative & Agents",
    tags: ["RAG", "LLM", "Agents IA", "Prompt engineering", "LangChain", "LlamaIndex", "ChromaDB", "pgvector"],
  },
  {
    title: "Machine Learning",
    tags: ["scikit-learn", "RandomForest", "Cross-validation", "Feature engineering", "Explicabilité"],
  },
  {
    title: "Développement & API",
    tags: ["Python", "Java Spring Boot", "FastAPI", "API REST", "React", "TypeScript"],
  },
  {
    title: "Cloud & DevOps",
    tags: ["AWS", "Azure", "Docker", "Docker Compose", "Git / GitHub", "GCP (notions)"],
  },
];

export type Project = {
  status: string;
  featured?: boolean;
  title: string;
  subtitle: string;
  description: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    status: "EXPÉRIMENTATION",
    featured: true,
    title: "Assistant RAG personnel",
    subtitle: "Pipeline de Retrieval-Augmented Generation — expérimentation en cours",
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
    subtitle: "Plateforme de gestion de bibliothèque de jeux Steam — projet académique en équipe de 6",
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
      { value: "0.40", label: "R² (test, corrigé)" },
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
];

export const timeline = [
  {
    kind: "FORMATION",
    period: "2025 – 2027",
    title: "Business Intelligence Software Developer",
    place: "ITS Academy ICT Piemonte, Turin — 1 800h",
    status: "EN COURS",
  },
  {
    kind: "FORMATION",
    period: "2023 – 2024",
    title: "Bachelor Business Management",
    place: "AIVA, Strasbourg — Commerce International & Vins/Spiritueux",
    status: "TERMINÉ",
  },
  {
    kind: "FORMATION",
    period: "2024 – 2025",
    title: "Formation Full Stack & Java",
    place: "ChallengeNetwork / Manpower",
    status: "TERMINÉ",
  },
  {
    kind: "EXPÉRIENCE",
    period: "Maintenant",
    title: "Recherche de stage curriculaire",
    place: "Data (Engineering, Analyse, Science), BI ou IA — Italie & France",
    status: "EN COURS",
  },
  {
    kind: "EXPÉRIENCE",
    period: "2012 – 2025",
    title: "Management opérationnel",
    place: "Doppio Malto Group, Rocco Forte Hotels — 10+ ans, encadrement d'équipes jusqu'à 15 personnes",
    status: "TERMINÉ",
  },
];
