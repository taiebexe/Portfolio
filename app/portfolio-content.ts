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
  tools: [
    { area: "Frontend", items: "React, TypeScript, Next.js, Tailwind" },
    { area: "Backend", items: "Java, Spring Boot, PostgreSQL, Flyway" },
    { area: "Python", items: "FastAPI, Flask, scikit-learn, Ollama" },
    { area: "Infra", items: "Docker, AWS, Google Cloud" },
  ],
  projects: [
    {
      name: "RepIQ",
      year: "2026",
      description:
        "Workout analytics for Hevy. You sign in with your Hevy account, it pulls your whole training history and charts volume, estimated 1RMs and how often you train, and flags lifts that have stalled. Gemini writes coaching notes and answers questions about your data. Nothing gets stored; there's no database behind it.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Gemini"],
      links: [
        { label: "Live", href: "https://rep-iq-ecru.vercel.app" },
        { label: "Code", href: "https://github.com/taiebexe/RepIQ" },
      ],
    },
    {
      name: "WohnSwipe",
      year: "2026",
      description:
        "Swipe-style apartment hunting for Berlin. The feed filters by budget and room count, right swipes go onto a shortlist, and each saved flat gets a German inquiry draft filled in from your renter profile. The listings are demo data for now.",
      stack: ["React", "Spring Boot", "PostgreSQL", "FastAPI", "Docker"],
      links: [{ label: "Code", href: "https://github.com/taiebexe/WohnSwipe" }],
    },
    {
      name: "Plant Inspector",
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
      year: "2025",
      description:
        "An expense tracker with accounts and spending categories, built on Spring Boot and Thymeleaf. A small Flask service with scikit-learn estimates future spending from past entries.",
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
