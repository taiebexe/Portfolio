export const portfolio = {
  name: "Taieb Bourbia",
  initials: "TB",
  role: "Software developer",
  location: "Cologne, Germany",
  availability: "Open to internships, student projects, and collaborations",
  email: "taieb.bourbia@gmail.com",
  headline:
    "Software developer.",
  summary:
    "I study at TH Cologne and work in software development at CGI. I build web applications with Java, React, and Python, and explore practical uses for AI.",
  links: [
    { label: "Email", href: "mailto:taieb.bourbia@gmail.com" },
    { label: "GitHub", href: "https://github.com/taiebexe" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/taiebbourbia/" },
  ],
  marquee: [
    "Full-stack products",
    "AI workflows",
    "Java services",
    "React interfaces",
    "MLOps research",
    "Cloud infrastructure",
  ],
  focus: [
    "TH Cologne student",
    "Java and Spring Boot services",
    "React and TypeScript apps",
    "Python and AI experiments",
  ],
  technologies: [
    {
      name: "React",
      label: "React",
      logo: "/logos/react.svg",
      category: "Frontend",
      detail: "Component systems, dashboards, and interactive product UI.",
      tone: "cyan",
    },
    {
      name: "TypeScript",
      label: "TS",
      logo: "/logos/typescript.svg",
      category: "Frontend",
      detail: "Typed interfaces, API contracts, and maintainable app logic.",
      tone: "blue",
    },
    {
      name: "Next.js",
      label: "N",
      logo: "/logos/nextjs.svg",
      category: "Frontend",
      detail: "Production-ready web apps, routing, metadata, and rendering.",
      tone: "black",
    },
    {
      name: "Tailwind CSS",
      label: "TW",
      logo: "/logos/tailwindcss.svg",
      category: "Frontend",
      detail: "Responsive systems with fast styling and clean visual rhythm.",
      tone: "sky",
    },
    {
      name: "Java",
      label: "Java",
      logo: "/logos/java.svg",
      category: "Backend",
      detail: "Coursework, data structures, APIs, and service fundamentals.",
      tone: "red",
    },
    {
      name: "Spring Boot",
      label: "Spring",
      logo: "/logos/spring.svg",
      category: "Backend",
      detail: "REST APIs, authentication flows, and structured server apps.",
      tone: "green",
    },
    {
      name: "PostgreSQL",
      label: "PG",
      logo: "/logos/postgresql.svg",
      category: "Data",
      detail: "Relational data modeling for full-stack product workflows.",
      tone: "indigo",
    },
    {
      name: "Python",
      label: "Py",
      logo: "/logos/python.svg",
      category: "AI / Data",
      detail: "ML experiments, automation, reports, and model integrations.",
      tone: "yellow",
    },
    {
      name: "Docker",
      label: "D",
      logo: "/logos/docker.svg",
      category: "DevOps",
      detail: "Containerized services and repeatable local development.",
      tone: "blue",
    },
    {
      name: "AWS",
      label: "AWS",
      logo: "/logos/aws.svg",
      category: "Cloud",
      detail: "Infrastructure exposure through IT support and cloud topics.",
      tone: "orange",
    },
    {
      name: "Google Cloud",
      label: "GCP",
      logo: "/logos/googlecloud.svg",
      category: "Cloud",
      detail: "Cloud and infrastructure work across support environments.",
      tone: "multi",
    },
    {
      name: "MLOps",
      label: "ML",
      logo: "/logos/mlops.svg",
      category: "AI / Data",
      detail: "Research support for ML pipelines, evaluation, and documentation.",
      tone: "purple",
    },
  ],
  projects: [
    {
      name: "RepIQ",
      type: "AI fitness analytics",
      year: "2026",
      description:
        "A workout analytics app for Hevy. It turns training history into progress charts, training metrics, and AI coaching insights without storing user data.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Gemini"],
      links: [
        { label: "Code", href: "https://github.com/taiebexe/RepIQ" },
        { label: "Live", href: "https://rep-iq-ecru.vercel.app" },
      ],
    },
    {
      name: "WohnSwipe",
      type: "Apartment discovery",
      year: "2026",
      description:
        "An apartment search app for Berlin renters. Users swipe through ranked listings, save matches, and generate inquiry messages based on their renter profile.",
      stack: ["React", "Vite", "Spring Boot", "PostgreSQL", "FastAPI", "Docker"],
      links: [{ label: "Code", href: "https://github.com/taiebexe/WohnSwipe" }],
    },
    {
      name: "Plant Inspector AI",
      type: "Computer vision tool",
      year: "2026",
      description:
        "A tool that uses LLaVA to distinguish viable plants from empty pots and debris in images. Includes classification metrics and PDF reports.",
      stack: ["Python", "LLaVA", "Pillow", "Matplotlib", "Scikit-learn"],
      links: [
        {
          label: "Code",
          href: "https://github.com/taiebexe/picture_classification-and-filtering-",
        },
      ],
    },
    {
      name: "Wallet Tracker",
      type: "Personal finance",
      year: "2025",
      description:
        "An expense tracker with user accounts, spending categories, and forecasts. Built around a Spring Boot backend and a Python prediction service.",
      stack: ["Java", "Spring Boot", "Thymeleaf", "PostgreSQL", "Flask", "Scikit-learn"],
      links: [{ label: "Code", href: "https://github.com/taiebexe/Wallet-Tracker" }],
    },
  ],
  archive: [
    {
      name: "secure-ai-login",
      detail:
        "Cloud authentication concept with Spring Boot, JWT/OAuth2, MFA, role-based access, and Python anomaly detection.",
      href: "https://github.com/taiebexe/secure-ai-login",
    },
    {
      name: "SpringBootCrudAPI",
      detail: "Java/Spring Boot CRUD API practice project.",
      href: "https://github.com/taiebexe/SpringBootCrudAPI",
    },
    {
      name: "3D-rendering-",
      detail: "Java project exploring graphics and rendering fundamentals.",
      href: "https://github.com/taiebexe/3D-rendering-",
    },
    {
      name: "Circle Through Three Points",
      detail: "Java geometry exercise for calculating a circle through three points.",
      href: "https://github.com/taiebexe/Kreis_durch3Punkte",
    },
    {
      name: "Study Projects",
      detail: "Study coding projects and coursework practice.",
      href: "https://github.com/taiebexe/studium",
    },
  ],
  experience: [
    {
      role: "Working Student in Software Development",
      company: "CGI",
      type: "Part-time",
      date: "June 2026–Present",
      location: "Cologne, North Rhine-Westphalia, Germany · Hybrid",
      bullets: ["Working-student role in software development."],
      skills: ["Software Development"],
    },
    {
      role: "Student Tutor – Algorithms and Data Structures",
      company: "TH Cologne",
      type: "Part-time",
      date: "March 2026–Present",
      location: "Cologne, North Rhine-Westphalia, Germany · Hybrid",
      bullets: [
        "Supervised practical groups in the Algorithms and Data Structures module.",
        "Reviewed homework assignments and supported hands-on lab exercises.",
      ],
      skills: ["Java", "Data Structures", "Algorithms"],
    },
    {
      role: "Research Assistant (HiWi) – MLOps & AI",
      company: "TH Cologne",
      type: "Part-time",
      date: "October 2025–March 2026",
      location: "Cologne, North Rhine-Westphalia, Germany · Hybrid",
      bullets: [
        "Contributed to a university research project in MLOps and machine learning.",
        "Supported the development, testing, and evaluation of ML models and data pipelines.",
        "Created technical documentation and analyzed research results.",
      ],
      skills: ["MLOps", "Large Language Models", "Machine Learning", "Data Pipelines"],
    },
    {
      role: "Working Student in IT Support and Infrastructure",
      company: "talentsconnect Group",
      type: "Part-time",
      date: "August 2025–June 2026",
      location: "Cologne, North Rhine-Westphalia, Germany · Hybrid",
      bullets: [
        "Supported IT operations, including user administration, hardware/software setup, and technical support.",
        "Contributed to cloud and infrastructure topics across AWS, Google Cloud, Windows Server, and Active Directory.",
        "Worked closely with DevOps and specialist teams to help keep IT systems stable.",
      ],
      skills: ["DevOps", "Technical Support", "AWS", "Google Cloud", "Windows Server"],
    },
  ],
  capabilities: [
    {
      title: "Product frontend",
      detail:
        "React, Next.js, Vite, Tailwind, responsive layouts, dashboards, charts, and motion that supports the user flow.",
    },
    {
      title: "Backend systems",
      detail:
        "Java, Spring Boot, REST APIs, authentication flows, PostgreSQL, Flyway migrations, Docker, and service-oriented app structure.",
    },
    {
      title: "AI and data",
      detail:
        "Python, Flask/FastAPI, LLaVA vision classification, AI coaching insights, reporting, metrics, and practical model integration.",
    },
  ],
};
