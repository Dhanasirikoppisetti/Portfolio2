import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  'React',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Git',
  'Accessibility',
  'Responsive UI',
  'Performance',
  'API Integration',
  'Design Systems',
];

const projects = [
  {
    title: 'PulseGrid Analytics',
    description:
      'A dashboard concept for tracking team activity, product metrics, and release health in one crisp interface. Built to keep dense data readable without feeling heavy.',
    stack: ['React', 'Chart UI', 'CSS Grid'],
    github: 'https://github.com/dhanasiri-koppisetti/pulsegrid-analytics',
    demo: 'https://example.com',
  },
  {
    title: 'SkillGraph Studio',
    description:
      'A skill-mapping experience that visualizes growth over time with compact cards, progress indicators, and motion-led storytelling. Focused on clarity and personality.',
    stack: ['Frontend UI', 'Motion', 'Responsive Design'],
    github: 'https://github.com/dhanasiri-koppisetti/skillgraph-studio',
    demo: 'https://example.com',
  },
  {
    title: 'Portfolio Motion Lab',
    description:
      'A lightweight experimental site for testing parallax depth, staggered reveals, and cinematic hero composition. The goal is to make motion feel intentional, not decorative.',
    stack: ['Framer Motion', 'Vite', 'Accessibility'],
    github: 'https://github.com/dhanasiri-koppisetti/portfolio-motion-lab',
    demo: 'https://example.com',
  },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/dhanasiri-koppisetti' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhanasiri-koppisetti/' },
  { label: 'Email', href: 'mailto:dhanasiri.koppisetti@example.com' },
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{copy}</p>
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const blobOneY = useTransform(scrollY, [0, 1200], [0, 160]);
  const blobTwoY = useTransform(scrollY, [0, 1200], [0, -120]);
  const ringY = useTransform(scrollY, [0, 1200], [0, 90]);

  return (
    <div className="app-shell" id="home">
      <motion.div className="parallax-blob blob-one" style={{ y: blobOneY }} />
      <motion.div className="parallax-blob blob-two" style={{ y: blobTwoY }} />
      <motion.div className="parallax-ring" style={{ y: ringY }} />

      <header className="topbar">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">DK</span>
          <span>
            Dhana siri <strong>Koppisetti</strong>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-controls="site-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'site-nav open' : 'site-nav'} id="site-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="eyebrow">Frontend Development · UI Motion · Responsive Design</p>
            <h1>
              Build polished digital experiences with personality and motion.
            </h1>
            <p className="hero-text">
              I am Dhana siri Koppisetti, a frontend developer focused on clear interface systems,
              modern animation, and responsive layouts that feel sharp on every device.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects" onClick={() => setMenuOpen(false)}>
                View My Work
              </a>
              <a className="secondary-button" href="#contact" onClick={() => setMenuOpen(false)}>
                Contact Me
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <strong>5+</strong>
                <span>core frontend skills</span>
              </div>
              <div>
                <strong>3</strong>
                <span>featured projects</span>
              </div>
              <div>
                <strong>1</strong>
                <span>motion-first portfolio</span>
              </div>
            </div>
          </motion.div>

          <motion.aside
            className="hero-panel"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
          >
            <div className="hero-avatar" aria-hidden="true">
              <span>DK</span>
            </div>
            <div className="hero-panel-copy">
              <p className="eyebrow">Current focus</p>
              <h3>Designing fast, accessible, and expressive interfaces.</h3>
              <p>
                I enjoy component-based architecture, scroll storytelling, and systems that make
                collaboration with design and engineering teams straightforward.
              </p>
            </div>
          </motion.aside>
        </section>

        <section className="section-grid about-section" id="about">
          <SectionHeading
            eyebrow="About"
            title="A focused builder with a taste for visual clarity."
            copy="I create personal and product experiences that balance structure, motion, and readability. The goal is always the same: make the interface feel polished without slowing the user down."
          />

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="about-avatar" aria-hidden="true">
              <span>DK</span>
            </div>
            <div>
              <h3>Developer, UI thinker, and animation enthusiast.</h3>
              <p>
                I enjoy turning rough ideas into responsive experiences with clear hierarchy and
                memorable motion. Right now I am sharpening my frontend architecture and motion
                design skills while building projects that feel production-ready.
              </p>
              <p>
                My approach is practical: build the layout first, refine the content, then add
                motion only where it improves the story or the interaction.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="section-grid skills-section" id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="Tools and techniques I use to build responsive interfaces."
            copy="These are the technologies and working practices that shape the way I design and ship frontend work."
          />

          <motion.div
            className="skills-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.07 },
              },
            }}
          >
            {skills.map((skill) => (
              <motion.div
                className="skill-pill"
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="section-grid projects-section" id="projects">
          <SectionHeading
            eyebrow="Projects"
            title="Three portfolio-ready projects with a clear technical story."
            copy="Each project card includes the stack, a concise summary, and links so the structure is ready for a public showcase."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: 'easeOut' }}
              >
                <p className="project-index">0{index + 1}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-grid contact-section" id="contact">
          <SectionHeading
            eyebrow="Contact"
            title="Open to frontend roles, freelance work, and collaboration."
            copy="If you want to discuss a role, project, or design challenge, the fastest way to reach me is through email or LinkedIn."
          />

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {socials.map((item) => (
              <a key={item.label} href={item.href} target={item.label === 'Email' ? undefined : '_blank'} rel={item.label === 'Email' ? undefined : 'noreferrer'}>
                <span>{item.label}</span>
                <strong>{item.href.replace('mailto:', '')}</strong>
              </a>
            ))}
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <p>Dhana siri Koppisetti</p>
        <p>Frontend Development · UI / UX Design · Motion Design</p>
      </footer>
    </div>
  );
}

export default App;
