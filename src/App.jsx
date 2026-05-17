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
  'Python',
  'JavaScript',
  'Java',
  'C++',
  'React',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'Docker',
  'Git',
  'Tailwind CSS',
  'REST APIs',
];

const projects = [
  {
    title: 'Payment Gateway',
    description:
      'Asynchronous payment processing system with Redis job queues and secure webhook verification. Handles refund management and scalable payment processing.',
    stack: ['Node.js', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/dhanasiri-koppisetti/payment-gateway',
    demo: 'https://github.com/dhanasiri-koppisetti/payment-gateway',
  },
  {
    title: 'Mini SQL Database Engine',
    description:
      'SQL engine supporting SELECT, WHERE filtering, and COUNT aggregation. Built CLI interface for executing queries directly on CSV datasets.',
    stack: ['Python', 'SQL', 'CLI'],
    github: 'https://github.com/dhanasiri-koppisetti/mini-sql-engine',
    demo: 'https://github.com/dhanasiri-koppisetti/mini-sql-engine',
  },
  {
    title: 'Internationalized Web App',
    description:
      'Multilingual React SPA supporting English, Spanish, Arabic (RTL), and Japanese. Implements language switching with locale-aware formatting.',
    stack: ['React', 'Tailwind CSS', 'i18n'],
    github: 'https://github.com/dhanasiri-koppisetti/i18n-webapp',
    demo: 'https://i18n-webapp-demo.vercel.app',
  },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/dhanasiri-koppisetti' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhanasiri-koppisetti/' },
  { label: 'Email', href: 'mailto:koppisettidhanasiri@gmail.com' },
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
            <p className="eyebrow">B.Tech AI/ML · Full Stack Developer · Problem Solver</p>
            <h1>
              Build scalable applications with clean code and solid fundamentals.
            </h1>
            <p className="hero-text">
              I'm Dhana Siri Koppisetti, a B.Tech student in AI/ML with strong foundations in data
              structures, backend development, and full-stack web technologies. I build asynchronous
              systems, craft responsive UIs, and solve algorithmic challenges.
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
                <strong>200+</strong>
                <span>problems solved</span>
              </div>
              <div>
                <strong>8.68</strong>
                <span>college CGPA</span>
              </div>
              <div>
                <strong>5+</strong>
                <span>projects built</span>
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
              <h3>Building scalable backends and interactive frontends.</h3>
              <p>
                Focused on data structures, algorithms, and full-stack development. Experienced with
                asynchronous systems, database optimization, and responsive UI design across multiple
                frameworks and languages.
              </p>
            </div>
          </motion.aside>
        </section>

        <section className="section-grid about-section" id="about">
          <SectionHeading
            eyebrow="About"
            title="Motivated student with strong technical foundations."
            copy="I build scalable applications with clean code, focusing on data structures, algorithms, and full-stack web development. My goal is to solve complex problems efficiently and create responsive, user-friendly interfaces."
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
              <h3>B.Tech AI/ML student with full-stack capabilities.</h3>
              <p>
                Currently pursuing B.Tech in Artificial Intelligence and Machine Learning at Aditya
                College of Engineering and Technology (CGPA: 8.68). I have built production-like
                applications including asynchronous payment systems, SQL query engines, and
                multilingual web applications.
              </p>
              <p>
                My approach combines problem-solving fundamentals with practical web development.
                I focus on code quality, performance optimization, and building systems that scale.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="section-grid skills-section" id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="Languages, frameworks, and tools I use daily."
            copy="Strong foundations in data structures and algorithms, combined with hands-on experience across the full stack. Certified in multiple programming languages and cloud technologies."
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
            title="Three production-focused projects demonstrating full-stack capabilities."
            copy="Each project represents real-world problem solving: from asynchronous systems to database optimization to multilingual web applications."
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
            title="Let's connect and build something great."
            copy="Interested in internships, freelance opportunities, or just want to discuss tech? Reach out via email, LinkedIn, or check out my GitHub for more projects."
          />

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <a href="tel:+919951718354">
              <span>Phone</span>
              <strong>+91 9951718354</strong>
            </a>
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
        <p>Dhana Siri Koppisetti</p>
        <p>B.Tech AI/ML · Full Stack Development · Problem Solving</p>
      </footer>
    </div>
  );
}

export default App;
