export const portfolio = {
  name: "Taieb Bourbia",
  role: "Software developer",
  location: "Cologne, Germany",
  email: "taieb.bourbia@gmail.com",
  summary:
    "Student at TH Cologne and working student in software development at CGI. I build web apps with Java, React and Python.",
  links: [
    { label: "GitHub", href: "https://github.com/taiebexe" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/taiebbourbia/" },
  ],
  intro:
    "I study at TH Cologne and work part-time as a software developer at CGI. Most of what I build on my own is web apps with a Java or Python backend, and lately a few of them have a language model doing part of the work.",
  cardBio: "Student at TH Cologne, working student in software development at CGI.",
  stats: [
    { value: "12", label: "Public repos" },
    { value: "4", label: "Roles since 2025" },
    { value: "3", label: "Main languages" },
  ],
  highlights: [
    { text: "Web apps with Java and Python backends", href: "#projects", icon: "layers", tone: "orange" },
    { text: "React, Spring Boot, FastAPI, Docker", href: "#tools", icon: "layout", tone: "lime" },
  ],
  tools: [
    { name: "Java", note: "Backend language", logo: "/logos/java.svg" },
    { name: "Spring Boot", note: "REST APIs", logo: "/logos/spring.svg" },
    { name: "React", note: "Frontend", logo: "/logos/react.svg" },
    { name: "TypeScript", note: "Typed JavaScript", logo: "/logos/typescript.svg" },
    { name: "Next.js", note: "React framework", logo: "/logos/nextjs.svg" },
    { name: "Python", note: "ML and scripting", logo: "/logos/python.svg" },
    { name: "PostgreSQL", note: "Database", logo: "/logos/postgresql.svg" },
    { name: "Docker", note: "Containers", logo: "/logos/docker.svg" },
    { name: "AWS", note: "Cloud", logo: "/logos/aws.svg" },
    { name: "Google Cloud", note: "Cloud", logo: "/logos/googlecloud.svg" },
  ],
  projects: [
    {
      name: "RepIQ",
      tagline: "Workout analytics for Hevy",
      icon: "activity",
      tone: "orange",
      year: "2026",
      description:
        "Sign in with your Hevy account and it pulls your whole training history, charts volume, estimated 1RMs and how often you train, and flags lifts that have stalled. Gemini writes coaching notes and answers questions about your data. Nothing gets stored; there's no database behind it.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Gemini"],
      links: [
        { label: "Live", href: "https://rep-iq-ecru.vercel.app" },
        { label: "Code", href: "https://github.com/taiebexe/RepIQ" },
      ],
    },
    {
      name: "WohnSwipe",
      tagline: "Swipe-style apartment search for Berlin",
      icon: "home",
      tone: "blue",
      year: "2026",
      description:
        "The feed filters by budget and room count, right swipes go onto a shortlist, and each saved flat gets a German inquiry draft filled in from your renter profile. The listings are demo data for now.",
      stack: ["React", "Spring Boot", "PostgreSQL", "FastAPI", "Docker"],
      links: [{ label: "Code", href: "https://github.com/taiebexe/WohnSwipe" }],
    },
    {
      name: "Plant Inspector",
      tagline: "Photo sorting with a vision model",
      icon: "leaf",
      tone: "lime",
      year: "2026",
      description:
        "Sorts plant photos into usable shots and empty pots or debris, using llava:34b on a university Ollama server. Every image gets a label and a short explanation, and each run produces a PDF report. With ground-truth labels it also prints accuracy and a confusion matrix.",
      stack: ["Python", "LLaVA", "Pillow", "scikit-learn"],
      links: [
        {
          label: "Code",
          href: "https://github.com/taiebexe/picture_classification-and-filtering-",
        },
      ],
    },
    {
      name: "Wallet Tracker",
      tagline: "Expense tracker with forecasts",
      icon: "wallet",
      tone: "violet",
      year: "2025",
      description:
        "Accounts and spending categories on Spring Boot and Thymeleaf. A small Flask service with scikit-learn estimates future spending from past entries.",
      stack: ["Java", "Spring Boot", "PostgreSQL", "Flask"],
      links: [{ label: "Code", href: "https://github.com/taiebexe/Wallet-Tracker" }],
    },
  ],
  archive: [
    {
      name: "secure-ai-login",
      detail:
        "Spring Boot auth with JWT/OAuth2, MFA and roles, plus a Python service that flags unusual logins. Unfinished.",
      href: "https://github.com/taiebexe/secure-ai-login",
    },
    {
      name: "SpringBootCrudAPI",
      detail: "The CRUD API I wrote while learning Spring Boot.",
      href: "https://github.com/taiebexe/SpringBootCrudAPI",
    },
    {
      name: "3D-rendering",
      detail: "Rendering basics in plain Java.",
      href: "https://github.com/taiebexe/3D-rendering-",
    },
    {
      name: "Kreis_durch3Punkte",
      detail: "Finds the circle through three points. A small geometry exercise.",
      href: "https://github.com/taiebexe/Kreis_durch3Punkte",
    },
    {
      name: "studium",
      detail: "Coursework and exercises from university.",
      href: "https://github.com/taiebexe/studium",
    },
  ],
  experience: [
    {
      role: "Working student, software development",
      company: "CGI",
      date: "Jun 2026 – now",
      note: "",
    },
    {
      role: "Student tutor, Algorithms and Data Structures",
      company: "TH Cologne",
      date: "Mar 2026 – now",
      note: "I run lab groups for the module and review homework submissions.",
    },
    {
      role: "Research assistant (HiWi), MLOps",
      company: "TH Cologne",
      date: "Oct 2025 – Mar 2026",
      note: "Helped on a research project around ML pipelines: training and testing models, evaluating the results and writing up the documentation.",
    },
    {
      role: "Working student, IT support and infrastructure",
      company: "talentsconnect Group",
      date: "Aug 2025 – Jun 2026",
      note: "Everyday IT: Active Directory accounts, hardware and software setup, helping colleagues when something broke. I also picked up some AWS, Google Cloud and Windows Server work alongside the DevOps team.",
    },
  ],
};
