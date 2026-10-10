import type { CSSProperties } from "react";
import Image from "next/image";
import { Effects } from "./effects";
import { Icon } from "./icons";
import { portfolio } from "./portfolio-content";

const sections = [
  { href: "#top", label: "Home", icon: "home" },
  { href: "#projects", label: "Projects", icon: "folder" },
  { href: "#experience", label: "Experience", icon: "briefcase" },
  { href: "#tools", label: "Tools", icon: "tool" },
  { href: "#contact", label: "Contact", icon: "mail" },
];

const socials = [
  { label: "Email", href: `mailto:${portfolio.email}`, icon: "mail" },
  ...portfolio.links.map((link) => ({ ...link, icon: link.label.toLowerCase() })),
];

const statementWords = portfolio.statement.split(" ");

function Heading({ id, top, bottom, as: Tag = "h2" }: { id: string; top: string; bottom: string; as?: "h1" | "h2" }) {
  return (
    <Tag className="heading" id={id} data-reveal={Tag === "h2" ? "" : undefined}>
      {top} <span>{bottom}</span>
    </Tag>
  );
}

export default function Home() {
  return (
    <div className="page" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="grain" aria-hidden="true" />
      <Effects />

      <nav className="dock" aria-label="Sections">
        {sections.map((item) => (
          <a key={item.href} href={item.href} aria-label={item.label} data-label={item.label}>
            <Icon name={item.icon} size={20} />
          </a>
        ))}
      </nav>

      <div className="layout">
        <aside className="profile" aria-label="Profile">
          <div className="profile-card">
            <svg className="arc arc-top" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="98" /></svg>
            <svg className="arc arc-bottom" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="98" /></svg>
            <Image
              src="/taieb-bourbia-photo.jpg"
              alt="Portrait of Taieb Bourbia"
              width={733}
              height={1100}
              priority
              unoptimized
              sizes="240px"
              className="portrait"
            />
            <p className="profile-name">{portfolio.name}</p>
            <span className="badge" aria-hidden="true"><Icon name="code" size={16} /></span>
            <p className="profile-bio">{portfolio.cardBio}</p>
            <div className="socials">
              {socials.map((link) => (
                <a key={link.href} href={link.href} aria-label={link.label}>
                  <Icon name={link.icon} size={22} />
                </a>
              ))}
            </div>
          </div>
        </aside>

        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-title">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="shape shape-star" src="/shapes/star.png" alt="" width={120} height={120} />
              <Heading as="h1" id="hero-title" top="Software" bottom="Developer" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="shape shape-bolt" src="/shapes/bolt.png" alt="" width={110} height={110} />
            </div>
            <p className="lead">{portfolio.intro}</p>

            <dl className="stats">
              {portfolio.stats.map((stat) => (
                <div key={stat.label}>
                  <dd>{stat.value}</dd>
                  <dt>{stat.label}</dt>
                </div>
              ))}
            </dl>

            <div className="highlights">
              {portfolio.highlights.map((card) => (
                <a className={`highlight tone-${card.tone}`} href={card.href} key={card.href}>
                  <Icon name={card.icon} size={36} />
                  <span className="highlight-text">{card.text}</span>
                  <span className="highlight-arrow"><Icon name="arrow-right" size={18} /></span>
                </a>
              ))}
            </div>
          </section>

          <section className="statement-section" aria-label="What I do">
            <p className="statement" data-statement style={{ "--n": statementWords.length } as CSSProperties}>
              {statementWords.map((word, index) => (
                <span key={index} style={{ "--i": index } as CSSProperties}>{word} </span>
              ))}
            </p>
          </section>

          <section className="section" id="projects" aria-labelledby="projects-title">
            <Heading id="projects-title" top="Recent" bottom="Projects" />
            <div className="cards">
              {portfolio.projects.map((project) => (
                <article className="card" key={project.name} data-reveal="">
                  <div className={`cover tone-${project.tone}`} aria-hidden="true">
                    <span className="cover-year">{project.year}</span>
                    <span className="cover-arrow"><Icon name="arrow-up-right" size={20} /></span>
                    <span className="cover-icon"><Icon name={project.icon} size={56} /></span>
                    <span className="cover-name">{project.name}</span>
                  </div>
                  <h3>
                    <a className="card-link" href={project.links[0].href}>{project.name}</a>
                  </h3>
                  <p className="card-sub">{project.tagline}</p>
                  <p className="card-text">{project.description}</p>
                  <p className="stack">{project.stack.join(" · ")}</p>
                  {project.links.length > 1 && (
                    <p className="card-extra">
                      {project.links.slice(1).map((link) => (
                        <a key={link.href} href={link.href}>
                          {link.label === "Code" ? "Source code" : link.label}
                        </a>
                      ))}
                    </p>
                  )}
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
            <Heading id="experience-title" top="Work" bottom="Experience" />
            <div className="jobs">
              {portfolio.experience.map((item) => (
                <article className="job" key={`${item.company}-${item.role}`} data-reveal="">
                  <div>
                    <h3>{item.company}</h3>
                    <p className="job-role">{item.role}</p>
                  </div>
                  <p className="job-date">{item.date}</p>
                  {item.note && <p className="job-note">{item.note}</p>}
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="tools" aria-labelledby="tools-title">
            <Heading id="tools-title" top="Everyday" bottom="Tools" />
            <ul className="tools" data-reveal="">
              {portfolio.tools.map((tool) => (
                <li key={tool.name}>
                  <span className="tool-logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tool.logo} alt="" width={28} height={28} loading="lazy" />
                  </span>
                  <span>
                    <strong>{tool.name}</strong>
                    <small>{tool.note}</small>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="section contact" id="contact" aria-labelledby="contact-title">
            <Heading id="contact-title" top="Let’s work" bottom="Together" />
            <p className="lead" data-reveal="">
              I’m open to internships, student projects and anything else that sounds
              interesting. Email is the easiest way to reach me.
            </p>
            <div className="contact-actions" data-reveal="">
              <a className="button" href={`mailto:${portfolio.email}`}>
                {portfolio.email} <Icon name="arrow-up-right" size={18} />
              </a>
              {portfolio.links.map((link) => (
                <a className="button button-ghost" key={link.href} href={link.href}>
                  <Icon name={link.label.toLowerCase()} size={18} /> {link.label}
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-tagline">Thanks for<br />stopping by.</p>
          <div>
            <p className="footer-label">/Quick links</p>
            <div className="chips">
              {sections.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            </div>
          </div>
          <div>
            <p className="footer-label">/Contact</p>
            <a className="footer-contact" href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
            <p className="footer-place">{portfolio.location}</p>
          </div>
        </div>
        <p className="wordmark" aria-hidden="true">Taieb</p>
        <p className="footer-legal">© {new Date().getFullYear()} {portfolio.name}</p>
      </footer>
    </div>
  );
}
