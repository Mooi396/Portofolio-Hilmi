import { useRef, useState } from 'react'
import './App.css'

const profile = {
  name: 'Hilmi Khalim',
  role: 'Frontend Developer & UI Designer',
  bio: 'Saya adalah developer yang fokus pada pembuatan interface modern, responsif, dan user-friendly untuk produk digital. Saya suka menggabungkan desain yang bersih dengan pengalaman pengguna yang terasa natural.',
  image:
    'aku.jpeg',
}

const socials = [
  { label: 'GitHub', url: 'https://github.com/mooi396', icon: 'GH' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/hilmi-khalim-undefined-b47a2a436?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: 'IN' },
  { label: 'Instagram', url: 'https://instagram.com/HlmKhlim', icon: 'IG' },
  { label: 'Email', url: 'mailto:hilmikhalim03@email.com', icon: 'EM' },
]

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Done' },
  { value: '3+', label: 'Client Reviews' },
]

const skills = [
  'React JS',
  'JavaScript',
  'Laravel',
  'Tailwind CSS',
  'Python',
  'UI/UX Design',
  'Figma',
  'HTML & CSS',
  'Git',
]

const projects = [
  {
    title: 'Sistem Informasi Manajemen Forum P3M',
    type: 'Web App',
    description:
      'Aplikasi web untuk manajemen forum P3M dengan fitur CRUD, autentikasi, dan dashboard statistik.',
    stack: ['React', 'Tailwind CSS', 'Firebase', 'Express'],
    link: 'https://www.forump3m.my.id/',
  },
  {
    title: 'Portofolio Pt. Langgeng Kencana Asri',
    type: 'Landing Page',
    description:
      'Landing page untuk perusahaan jasa konstruksi dengan portfolio proyek, testimonial, dan formulir kontak.',
    stack: ['HTML', 'CSS', 'Responsive'],
    link: 'https://langgengkencanaasri.com/',
  },
  {
    title: 'Design Aplikasi Mobile untuk Mitigasi Banjir Rob',
    type: 'Design UI/UX',
    description:
      'Design aplikasi mobile untuk mitigasi banjir rob di indramayu dengan teknolgi CNN dan SAM VQA.',
    stack: ['figma', 'UI/UX Design', 'Prototyping'],
    link: 'https://www.figma.com/proto/bNujAOkmcE26sk26rn5Fkh/KMIPN-2026?node-id=468-482&starting-point-node-id=468%3A482&t=yLm3VmoWoCGFH15Q-1',
  },
]

function LetterSwap({ text, className = '' }) {
  return (
    <span className={`letter-swap ${className}`} aria-hidden="true">
      {Array.from(text).map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="letter-swap-char"
          style={{ '--letter-delay': `${index * 0.055}s` }}
        >
          {letter === ' ' ? '\u00a0' : letter}
        </span>
      ))}
    </span>
  )
}

function SkillMarquee() {
  const renderCopy = (copyIndex) => (
    <div className="skill-marquee-copy" aria-hidden="true" key={copyIndex}>
      {skills.map((skill, index) => (
        <span
          key={`${copyIndex}-${skill}`}
          style={{ '--skill-delay': `${index * 0.12}s` }}
        >
          {skill}
        </span>
      ))}
    </div>
  )

  return (
    <div className="skill-marquee" aria-label={`Skills: ${skills.join(', ')}`}>
      <div className="skill-marquee-track">
        {renderCopy(0)}
        {renderCopy(1)}
      </div>
    </div>
  )
}

function StaggeredText({ text }) {
  return (
    <span className="staggered-text" aria-label={text}>
      {text.split(' ').map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="staggered-word"
          style={{ '--stagger-delay': `${index * 0.12}s` }}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
    </span>
  )
}

function App() {
  const imageWrapRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleImageMove = (event) => {
    const imageWrap = imageWrapRef.current
    if (!imageWrap) return

    const bounds = imageWrap.getBoundingClientRect()
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5

    imageWrap.style.setProperty('--cursor-rotate-x', `${vertical * -14}deg`)
    imageWrap.style.setProperty('--cursor-rotate-y', `${horizontal * 14}deg`)
  }

  const resetImageTilt = () => {
    const imageWrap = imageWrapRef.current
    if (!imageWrap) return

    imageWrap.style.setProperty('--cursor-rotate-x', '0deg')
    imageWrap.style.setProperty('--cursor-rotate-y', '0deg')
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Hilmi Khalim.</div>
        <button
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${isMenuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Available for freelance work</p>
            <h1 aria-label={`Hello, I'm ${profile.name}`}>
              <LetterSwap text="Hello, I'm " />
              <LetterSwap text={profile.name} className="letter-swap-name" />
            </h1>
            <h2>{profile.role}</h2>
            <p className="lead">{profile.bio}</p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                See My Work
              </a>
              <a className="secondary-btn" href={`mailto:${profile.email}`}>
                Contact Me
              </a>
              <a className="secondary-btn cv-btn" href="/cv-hilmi-khalim.pdf" download>
                Download CV
              </a>
            </div>
          </div>

          <div className="profile-panel">
            <div
              ref={imageWrapRef}
              className="image-wrap"
              onPointerMove={handleImageMove}
              onPointerLeave={resetImageTilt}
            >
              <img src={profile.image} alt={profile.name} />
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Key statistics">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="content-section split-section">
          <div>
            <p className="section-tag">About Me</p>
            <h3>
              <StaggeredText text="Desain yang jelas, pengalaman yang terasa." />
            </h3>
          </div>
          <p>
            Saya membantu brand dan startup membangun produk digital yang tidak hanya
            terlihat bagus, tetapi juga mudah dipahami dan nyaman digunakan. Dari
            landing page sampai dashboard, saya fokus pada struktur, konsistensi visual,
            dan pengalaman yang memudahkan user dalam mencapai tujuannya.
          </p>
        </section>

        <section id="projects" className="content-section">
          <div className="section-heading">
            <div>
              <p className="section-tag">Featured Projects</p>
              <h3>Work that speaks for itself.</h3>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-header">
                  <span className="project-type">{project.type}</span>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <ul>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
          <div className="section-heading">
            <div>
              <p className="section-tag">Skills</p>
              <h3>Tools and stack I use.</h3>
            </div>
          </div>

          <SkillMarquee />
        </section>

        <section id="contact" className="content-section contact-box">
          <div>
            <p className="section-tag">Let&apos;s Connect</p>
            <h3>Ready to build something meaningful?</h3>
          </div>
          <div className="contact-panel">
            <div className="contact-meta">
            </div>

            <div className="social-list">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-item"
                >
                  <span className="social-badge">{social.icon}</span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
