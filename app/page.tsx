import Image from "next/image";
import type { CSSProperties } from "react";
import { portfolio } from "./portfolio-content";
import ScrollReveal from "./ScrollReveal";

type TechLogoProps = {
  label: string;
  logo: string;
  tone: string;
};

function TechLogo({ label, logo, tone }: TechLogoProps) {
  return (
    <span
      className={`tech-mark tech-mark-${tone}`}
      style={{ "--logo": `url(${logo})` } as CSSProperties}
      aria-hidden="true"
    >
      <span>{label}</span>
    </span>
  );
}

export default function Home() {
  const marqueeItems = [...portfolio.marquee, ...portfolio.marquee];
  const heroTools = portfolio.technologies.slice(0, 5);

  return (
    <main className="site-shell">
      <ScrollReveal />
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label={`${portfolio.name} home`}>
          <span className="brand-mark" aria-hidden="true" />
          <span>{portfolio.name}</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#tools">Tools</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <Image
          src="/portfolio-hero.jpg"
          alt="Abstract translucent panels on a bright desk"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-wash" />
        <div className="motion-line motion-line-one" />
        <div className="motion-line motion-line-two" />

        <div className="hero-content">
          <p className="eyebrow reveal" style={{ "--delay": "0ms" } as CSSProperties}>
            {portfolio.role} / {portfolio.location}
          </p>
          <h1 className="hero-title reveal" style={{ "--delay": "90ms" } as CSSProperties}>
            {portfolio.headline}
          </h1>
          <p className="hero-summary reveal" style={{ "--delay": "180ms" } as CSSProperties}>
            {portfolio.summary}
          </p>
          <div className="hero-actions reveal" style={{ "--delay": "270ms" } as CSSProperties}>
            <a className="button primary" href="#work">
              View work
            </a>
            <a className="button secondary" href="#tools">
              Explore stack
            </a>
          </div>
          <div className="hero-stats reveal" style={{ "--delay": "360ms" } as CSSProperties}>
            {portfolio.stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal" style={{ "--delay": "210ms" } as CSSProperties}>
          <figure className="hero-portrait">
            <Image
              src="/taieb-bourbia-photo.jpg"
              alt="Professional portrait of Taieb Bourbia"
              fill
              priority
              unoptimized
              sizes="(max-width: 900px) 72vw, 380px"
              className="portrait-image"
            />
          </figure>
          <div className="floating-card floating-card-top">
            <span>Currently</span>
            <strong>CGI working student</strong>
          </div>
          <div className="floating-card floating-card-bottom">
            <span>Focus</span>
            <strong>AI + full-stack systems</strong>
          </div>
          <div className="hero-toolbelt" aria-label="Core technologies">
            {heroTools.map((tool, index) => (
              <div
                className="hero-tool"
                key={tool.name}
                style={{ "--delay": `${index * 90}ms` } as CSSProperties}
                title={tool.name}
              >
                <TechLogo label={tool.label} logo={tool.logo} tone={tool.tone} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marquee-band" aria-label="Portfolio focus">
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading reveal">
          <p className="eyebrow">Selected work</p>
          <h2>Projects with product shape, technical depth, and a clear finish.</h2>
        </div>
        <div className="project-grid">
          {portfolio.projects.map((project, index) => (
            <article
              className={`project-card reveal${index === 0 ? " featured" : ""}`}
              key={project.name}
              style={{ "--delay": `${index * 90}ms` } as CSSProperties}
            >
              <div className="project-index">0{index + 1}</div>
              <div className="project-meta">
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="stack-list" aria-label={`${project.name} stack`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-links" aria-label={`${project.name} links`}>
                {project.links.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section tools-section" id="tools">
        <div className="section-heading reveal">
          <p className="eyebrow">Technologies</p>
          <h2>A practical stack for building, shipping, and improving real products.</h2>
        </div>
        <div className="tool-grid">
          {portfolio.technologies.map((tool, index) => (
            <article
              className="tool-card reveal"
              key={tool.name}
              style={{ "--delay": `${index * 45}ms` } as CSSProperties}
            >
              <TechLogo label={tool.label} logo={tool.logo} tone={tool.tone} />
              <div>
                <span className="tool-category">{tool.category}</span>
                <h3>{tool.name}</h3>
                <p>{tool.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline-section" id="experience">
        <div className="section-heading reveal">
          <p className="eyebrow">Experience</p>
          <h2>Software development, AI research, teaching, and infrastructure work.</h2>
        </div>
        <div className="timeline">
          {portfolio.experience.map((item, index) => (
            <article
              className="timeline-item reveal"
              key={`${item.company}-${item.role}`}
              style={{ "--delay": `${index * 80}ms` } as CSSProperties}
            >
              <div className="experience-date">
                <span>{item.date}</span>
                <small>{item.duration}</small>
              </div>
              <div className="experience-body">
                <div className="experience-heading">
                  <h3>{item.role}</h3>
                  <p>
                    {item.company} · {item.type}
                  </p>
                  <small>{item.location}</small>
                </div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="experience-skills" aria-label={`${item.role} skills`}>
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" id="about">
        <div className="section-heading reveal">
          <p className="eyebrow">About</p>
          <h2>Simple interfaces, thoughtful systems, and motion with restraint.</h2>
        </div>
        <div className="capability-grid">
          {portfolio.capabilities.map((capability, index) => (
            <article
              className="capability-card reveal"
              key={capability.title}
              style={{ "--delay": `${index * 80}ms` } as CSSProperties}
            >
              <h3>{capability.title}</h3>
              <p>{capability.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section archive-section">
        <div className="section-heading reveal">
          <p className="eyebrow">More repos</p>
          <h2>Smaller builds, study work, and technical experiments.</h2>
        </div>
        <div className="archive-list">
          {portfolio.archive.map((item, index) => (
            <a
              className="archive-item reveal"
              href={item.href}
              key={item.href}
              style={{ "--delay": `${index * 60}ms` } as CSSProperties}
            >
              <span>{item.name}</span>
              <p>{item.detail}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let us make something sharp, useful, and easy to understand.</h2>
          <p>{portfolio.availability}</p>
          <a className="contact-email" href={`mailto:${portfolio.email}`}>
            {portfolio.email}
          </a>
        </div>
        <div className="contact-links reveal" style={{ "--delay": "120ms" } as CSSProperties}>
          {portfolio.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
