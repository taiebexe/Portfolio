import Image from "next/image";
import { portfolio } from "./portfolio-content";

const toolGroups = [
  { name: "Frontend", categories: ["Frontend"] },
  { name: "Backend", categories: ["Backend", "Data"] },
  { name: "AI & data", categories: ["AI / Data"] },
  { name: "Infrastructure", categories: ["DevOps", "Cloud"] },
];

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="site-nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label={`${portfolio.name} home`}>
            {portfolio.name}<span className="brand-period" aria-hidden="true">.</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="main" className="container">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="intro">Hi, I’m Taieb.</p>
            <h1 id="hero-title">{portfolio.headline}</h1>
            <p className="hero-summary">{portfolio.summary}</p>
            <div className="hero-actions">
              <a className="button" href="#work">View projects</a>
              <a className="text-link" href="#contact">Get in touch</a>
            </div>
            <p className="hero-location">{portfolio.location}</p>
          </div>
          <figure className="hero-portrait">
            <Image
              src="/taieb-bourbia-photo.jpg"
              alt="Taieb Bourbia"
              width={600}
              height={750}
              priority
              unoptimized
              sizes="(max-width: 700px) 220px, 300px"
              className="portrait-image"
            />
            <figcaption>{portfolio.name}<span>Software developer · CGI</span></figcaption>
          </figure>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected projects</h2>
            <p>Web applications and experiments in AI.</p>
          </div>
          <div className="project-list">
            {portfolio.projects.map((project, index) => (
              <article className="project" key={project.name}>
                <div className="project-heading">
                  <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{project.name}</h3>
                    <p className="project-meta">{project.type} <span>· {project.year}</span></p>
                  </div>
                </div>
                <div className="project-body">
                  <p>{project.description}</p>
                  <ul className="stack-list" aria-label={`${project.name} technologies`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a className="text-link" key={link.href} href={link.href} aria-label={`${link.label === "Live" ? "Live demo" : "Source code"} for ${project.name}`}>
                        {link.label === "Live" ? "Live demo" : "Source code"}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <details className="archive">
            <summary>Other repositories <span aria-hidden="true" className="details-toggle" /></summary>
            <div className="archive-list">
              {portfolio.archive.map((item) => (
                <a className="archive-item" href={item.href} key={item.href}>
                  <span>{item.name}</span><p>{item.detail}</p>
                </a>
              ))}
            </div>
          </details>
        </section>

        <section className="section split-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <h2 id="experience-title">Experience</h2>
            <p>Development, research, and teaching.</p>
          </div>
          <div className="experience-list">
            {portfolio.experience.map((item) => (
              <article className="experience" key={`${item.company}-${item.role}`}>
                <div className="experience-meta"><span>{item.company}</span><time>{item.date}</time></div>
                <h3>{item.role}</h3>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="about" aria-labelledby="about-title">
          <div className="section-heading"><h2 id="about-title">A little about me</h2></div>
          <div className="about-content">
            <p>I’m a student at TH Cologne and a working student in software development at CGI. My work spans web applications, backend services, and machine learning.</p>
            <p>Alongside development, I’ve supported university research in MLOps and taught practical sessions in algorithms and data structures.</p>
            <div className="tools" id="tools">
              <h3>Tools I work with</h3>
              <div className="tool-groups">
                {toolGroups.map((group) => (
                  <div className="tool-group" key={group.name}>
                    <h4>{group.name}</h4>
                    <p>{portfolio.technologies.filter((tool) => group.categories.includes(tool.category)).map((tool) => tool.name).join(" · ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-heading"><h2 id="contact-title">Get in touch</h2><p>{portfolio.availability}.</p></div>
          <a className="contact-email" href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
        </section>
      </main>

      <footer className="site-footer container">
        <p>{portfolio.name}<span>{portfolio.location}</span></p>
        <div className="footer-links" aria-label="Social links">
          {portfolio.links.filter((link) => link.href.startsWith("http")).map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        </div>
      </footer>
    </div>
  );
}
