import Image from "next/image";
import { portfolio } from "./portfolio-content";

export default function Home() {
  return (
    <div className="page" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top">{portfolio.name}</a>
        <nav aria-label="Sections">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="intro" aria-label="Introduction">
          <div className="intro-text">
            <h1>Hi, I’m Taieb.</h1>
            <p>
              I study at TH Cologne and work part-time as a software developer at CGI.
              Most of what I build on my own is web apps with a Java or Python backend,
              and lately a few of them have a language model doing part of the work.
            </p>
            <p>
              Before CGI I did IT support at talentsconnect and helped on an MLOps
              research project at the university. I also tutor the Algorithms and
              Data Structures labs.
            </p>
            <p className="intro-links">
              <a href={`mailto:${portfolio.email}`}>Email</a>
              {portfolio.links.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
              <span>{portfolio.location}</span>
            </p>
          </div>
          <Image
            src="/taieb-bourbia-photo.jpg"
            alt="Portrait of Taieb Bourbia"
            width={600}
            height={750}
            priority
            unoptimized
            sizes="180px"
            className="portrait"
          />
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <div className="projects">
            {portfolio.projects.map((project) => (
              <article className="project" key={project.name}>
                <header>
                  <h3>{project.name}</h3>
                  <span className="year">{project.year}</span>
                </header>
                <p>{project.description}</p>
                <p className="project-footer">
                  <span className="stack">{project.stack.join(", ")}</span>
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} aria-label={`${project.name}: ${link.label === "Live" ? "live site" : "source code"}`}>
                      {link.label === "Live" ? "Live site" : "Code"} ↗
                    </a>
                  ))}
                </p>
              </article>
            ))}
          </div>

          <details className="archive">
            <summary>Smaller things on GitHub</summary>
            <ul>
              {portfolio.archive.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.name}</a>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </details>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <ol className="timeline">
            {portfolio.experience.map((item) => (
              <li key={`${item.company}-${item.role}`}>
                <span className="date">{item.date}</span>
                <div>
                  <h3>{item.role} <span className="company">· {item.company}</span></h3>
                  {item.note && <p>{item.note}</p>}
                </div>
              </li>
            ))}
          </ol>

          <h2 className="tools-title">Tools</h2>
          <dl className="tools">
            {portfolio.tools.map((group) => (
              <div key={group.area}>
                <dt>{group.area}</dt>
                <dd>{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <p>
            I’m open to internships, student projects and anything else that sounds
            interesting. Email is the easiest way to reach me:{" "}
            <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <span>{portfolio.name}, {portfolio.location}</span>
        <span className="footer-links">
          {portfolio.links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </span>
      </footer>
    </div>
  );
}
