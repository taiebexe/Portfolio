import Image from "next/image";
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

function Heading({ id, top, bottom, as: Tag = "h2" }: { id: string; top: string; bottom: string; as?: "h1" | "h2" }) {
  return (
    <Tag className="heading" id={id}>
      {top} <span>{bottom}</span>
    </Tag>
  );
}

export default function Home() {
  return (
    <div className="page" id="top">
      <a className="skip-link" href="#main">Skip to content</a>

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
            <Heading as="h1" id="hero-title" top="Software" bottom="Developer" />
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

          <section className="section" id="projects" aria-labelledby="projects-title">
            <Heading id="projects-title" top="Recent" bottom="Projects" />
            <div className="rows">
              {portfolio.projects.map((project) => (
                <article className="row project" key={project.name}>
                  <div className={`thumb tone-${project.tone}`} aria-hidden="true">
                    <Icon name={project.icon} size={34} />
                  </div>
                  <div className="row-body">
                    <h3>
                      <a className="row-link" href={project.links[0].href}>{project.name}</a>
                    </h3>
                    <p className="row-sub">{project.tagline} · {project.year}</p>
                    <p className="row-text">{project.description}</p>
                    <p className="stack">{project.stack.join(" · ")}</p>
                    {project.links.length > 1 && (
                      <p className="row-extra">
                        {project.links.slice(1).map((link) => (
                          <a key={link.href} href={link.href}>
                            {link.label === "Code" ? "Source code" : link.label}
                          </a>
                        ))}
                      </p>
                    )}
                  </div>
                  <span className="row-arrow" aria-hidden="true"><Icon name="arrow-up-right" size={22} /></span>
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
            <div className="rows">
              {portfolio.experience.map((item) => (
                <article className="row" key={`${item.company}-${item.role}`}>
                  <div className="row-body">
                    <h3>{item.company}</h3>
                    <p className="row-sub">{item.role}</p>
                    {item.note && <p className="row-text">{item.note}</p>}
                    <p className="row-date">{item.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="tools" aria-labelledby="tools-title">
            <Heading id="tools-title" top="Everyday" bottom="Tools" />
            <ul className="tools">
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
            <p className="lead">
              I’m open to internships, student projects and anything else that sounds
              interesting. Email is the easiest way to reach me.
            </p>
            <div className="contact-actions">
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

          <footer className="site-footer">
            <span>{portfolio.name}</span>
            <span>{portfolio.location}</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
