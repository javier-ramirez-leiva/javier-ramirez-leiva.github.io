import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sun,
  Terminal,
  Wrench,
  X,
} from 'lucide-react'
import translations from './data/translations.json'
import { profile, experience, education, skills, projects, resumePdfs } from './data/resume'

const navigation = [
  ['about', 'About-Nav'],
  ['experience', 'Experience-Nav'],
  ['education', 'Education-Nav'],
  ['projects', 'Projects-Nav'],
  ['skills', 'Skills-Nav'],
]

function readLocale() {
  try {
    const saved = localStorage.getItem('jrl-language')
    return ['en', 'fr', 'es'].includes(saved) ? saved : 'en'
  } catch {
    return 'en'
  }
}

function readTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function SectionHeading({ id, index, eyebrow, title, icon: Icon }) {
  return (
    <div className="section-heading flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <div className="section-index" aria-hidden="true">{index}</div>
        <div className="min-w-0">
          <p className="micro-label mb-1">{eyebrow}</p>
          <h2 id={id} className="section-title">{title}</h2>
        </div>
      </div>
      {Icon && <Icon aria-hidden="true" className="section-icon shrink-0" size={22} strokeWidth={1.6} />}
    </div>
  )
}

function SkillPanel({ t }) {
  return (
    <div className="surface skills-panel overflow-hidden">
      <div className="skills-heading">
        <div className="flex items-center justify-between gap-2">
          <span className="micro-label">// {t('toolkit')}</span>
          <Cpu size={19} strokeWidth={1.7} aria-hidden="true" className="text-accent" />
        </div>
        <h2 className="mt-3 text-[1.5rem] font-extrabold tracking-tight">{t('Skills-Section')}</h2>
        <p className="muted mt-1 text-sm">{t('toolkitCaption')}</p>
      </div>
      <div className="divide-y divide-(--border)">
        {skills.map((skill, index) => (
          <div className="skill-group" key={skill.headingKey}>
            <div className="flex items-center gap-2.5">
              <span className="skill-number">0{index + 1}</span>
              <h3 className="text-sm font-bold leading-snug">{t(skill.headingKey)}</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {skill.values.map((item) => <span className="skill-pill" key={item}>{t(item)}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div className="skills-footer flex items-center gap-2">
        <span className="pulse-dot" aria-hidden="true" />
        <span>{t('jobNote')}</span>
      </div>
    </div>
  )
}

function Header({ locale, setLocale, theme, setTheme, t }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="page-container flex min-h-19 items-center justify-between gap-3">
        <a className="brand flex shrink-0 items-center gap-2.5" href="#top" onClick={() => setMenuOpen(false)} aria-label={`Javier Ramirez · ${t('homeLabel')}`}>
          <span className="brand-icon"><Terminal size={21} strokeWidth={2.5} aria-hidden="true" /></span>
          <span className="brand-name hidden min-[390px]:inline">javier<span className="text-accent">.</span>dev</span>
        </a>
        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex" aria-label={t('navLabel')}>
          {navigation.map(([id, key]) => <a key={id} href={`#${id}`} className="nav-link">{t(key)}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <label className="select-wrapper" title={t('changeLanguage')}>
            <Globe2 aria-hidden="true" size={15} className="select-icon" />
            <select
              value={locale}
              onChange={(event) => { setLocale(event.target.value); setMenuOpen(false) }}
              aria-label={t('changeLanguage')}
              className="language-select"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="es">ES</option>
            </select>
            <ChevronDown aria-hidden="true" size={13} className="select-chevron" />
          </label>
          <button
            type="button"
            className="icon-button"
            aria-label={theme === 'dark' ? t('themeToLight') : t('themeToDark')}
            title={theme === 'dark' ? t('themeToLight') : t('themeToDark')}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="icon-button lg:hidden"
            aria-label={menuOpen ? t('closeMenu') : t('toggleMenu')}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-navigation border-t border-(--border) lg:hidden" aria-label={t('mobileNavLabel')}>
          <div className="page-container grid gap-1 py-3">
            {navigation.map(([id, key]) => (
              <a href={`#${id}`} className="mobile-nav-link" key={id} onClick={() => setMenuOpen(false)}>
                {t(key)} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
            <a href={`mailto:${profile.email}`} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              {t('nav_contact')} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

function Hero({ locale, t }) {
  const [firstName, ...remainingNames] = profile.displayName.split(' ')
  return (
    <section className="hero relative overflow-hidden rounded-3xl sm:rounded-[28px]" aria-labelledby="page-title">
      <div className="hero-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute" aria-hidden="true" />
      <div className="relative z-10 grid items-center gap-8 px-6 pb-7 pt-10 sm:px-10 sm:pb-9 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10 lg:px-12 lg:py-16">
        <div className="min-w-0">
          <div className="hero-eyebrow inline-flex items-center gap-2"><span className="hero-led" aria-hidden="true" />{t('eyebrow')}</div>
          <h1 id="page-title" className="hero-name mt-7">{firstName}<br /><span>{remainingNames.join(' ')}<span className="hero-period">.</span></span></h1>
          <p className="hero-role mt-5 flex items-center gap-2.5"><Code2 size={18} strokeWidth={1.9} aria-hidden="true" />{t('SofwareEngineer-Title')}</p>
          <p className="hero-intro mt-5 max-w-140">{t('heroIntro')}</p>
          <p className="hero-desc mt-3 max-w-140">{t('heroDescription')}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="primary-button" href={`mailto:${profile.email}`}><Mail size={17} strokeWidth={1.9} aria-hidden="true" />{t('ContactMe-Button')}<ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="secondary-button" href={resumePdfs[locale]} download><Download size={17} strokeWidth={1.9} aria-hidden="true" />{t('Download-Button')}</a>
          </div>
          <div className="mt-7 flex items-center gap-3.5">
            <span className="hero-small-label">{t('socialLinks')}</span>
            <span className="hero-small-line" aria-hidden="true" />
            <a className="hero-social" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} aria-hidden="true" /></a>
            <a className="hero-social" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-portrait-wrap mx-auto w-full max-w-62.5 sm:sm:max-w-66.25 lg:max-w-none">
          <div className="portrait-frame">
            <img src="/images/profile.jpg" alt={t('profileImageAlt')} width="300" height="300" className="h-full w-full object-cover object-top" />
          </div>
        </div>
      </div>
      <div className="hero-bottom relative z-10 grid gap-3 px-6 py-4 sm:grid-cols-3 sm:gap-4 sm:px-10 lg:px-12">
        <div className="hero-data-item"><MapPin size={15} aria-hidden="true" /><span>{t('basedIn')}</span><strong>{t('location')}</strong></div>
        <div className="hero-data-item"><Globe2 size={15} aria-hidden="true" /><span>{t('languagesLabel')}</span><strong>EN / FR / ES</strong></div>
        <div className="hero-data-item"><Cpu size={15} aria-hidden="true" /><span>{t('currentFocus')}</span><strong>{t('focusTags')}</strong></div>
      </div>
    </section>
  )
}

function About({ t }) {
  return (
    <section id="about" className="scroll-mt-28" aria-labelledby="about-heading">
      <div className="surface overflow-hidden">
        <div className="grid md:grid-cols-[1.2fr_0.8fr]">
          <div className="p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2"><span className="little-square" /> <span className="micro-label">01 / {t('aboutIntro')}</span></div>
            <h2 id="about-heading" className="card-title">{t('About-Title')}</h2>
            <p className="body-copy mt-4">{t('About-Text')}</p>
          </div>
          <div className="about-contact p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2"><span className="little-square" /> <span className="micro-label">02 / {t('ContactInfo-Title')}</span></div>
            <h2 className="card-title">{t('nav_contact')}</h2>
            <div className="mt-5 grid gap-4">
              <a className="contact-row" href={`mailto:${profile.email}`}><Mail size={16} aria-hidden="true" /><span className="min-w-0 break-all">{profile.email}</span><ArrowUpRight size={14} aria-hidden="true" className="ml-auto shrink-0" /></a>
              <a className="contact-row" href={profile.phoneHref}><Phone size={16} aria-hidden="true" /><span>{profile.phoneDisplay}</span></a>
              <div className="contact-row"><MapPin size={16} aria-hidden="true" /><span>{t('location')}</span></div>
              <div className="contact-row"><Globe2 size={16} aria-hidden="true" /><span>{t('Language-Text')}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience({ t }) {
  return (
    <section id="experience" className="scroll-mt-28" aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading" index="02" eyebrow={t('timeline')} title={t('Experience-Section')} icon={BriefcaseBusiness} />
      <div className="timeline relative space-y-4">
        {experience.map((job, index) => (
          <article key={job.company} className="timeline-item relative surface p-5 sm:p-7">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="micro-label mb-1">{job.company}</p>
                <h3 className="text-lg font-bold tracking-tight sm:text-xl">{t(job.roleKey)}</h3>
              </div>
              <span className="date-label">{job.ongoing ? `${job.date} — ${t('present')}` : job.date}</span>
            </div>
            <p className="body-copy mt-3">{t(job.descriptionKey)}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.tags.map((tag) => <span className="technology-tag" key={tag}>{tag}</span>)}
            </div>
            <details className="experience-details mt-5" open={index === 0 ? true : undefined}>
              <summary className="details-summary"><span className="flex items-center gap-2"><span className="details-glyph" aria-hidden="true">+</span>{t('details')}</span><ChevronDown size={16} className="details-chevron" aria-hidden="true" /></summary>
              <ul className="detail-list mt-3 space-y-2.5">
                {job.detailKeys.map((key) => <li key={key}>{t(key)}</li>)}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </section>
  )
}

function Education({ t }) {
  return (
    <section id="education" className="scroll-mt-28" aria-labelledby="education-heading">
      <SectionHeading id="education-heading" index="03" eyebrow={t('academic')} title={t('Education-Section')} icon={GraduationCap} />
      <div className="grid gap-3">
        {education.map((school) => (
          <article className="surface education-item p-5 sm:p-6" key={school.institution}>
            <div className="flex flex-wrap justify-between gap-x-5 gap-y-2">
              <h3 className="font-bold leading-snug">{t(school.courseKey)}</h3>
              <span className="date-label shrink-0">{school.date}</span>
            </div>
            <p className="school-label mt-1">{school.institution}</p>
            <p className="body-copy mt-3 text-sm">{t(school.descriptionKey)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects({ t }) {
  const [selected, setSelected] = useState(0)
  const project = projects[selected]
  const title = project.nameKey ? t(project.nameKey) : project.name

  function onProjectKeyDown(event, index) {
    let next = index
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % projects.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + projects.length - 1) % projects.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = projects.length - 1
    else return
    event.preventDefault()
    setSelected(next)
    document.getElementById(`project-tab-${next}`)?.focus()
  }

  return (
    <section id="projects" className="scroll-mt-28" aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading" index="04" eyebrow={t('featured')} title={t('Projects-Section')} icon={Wrench} />
      <p className="body-copy -mt-2 mb-5">{t('projectsIntro')}</p>
      <div className="grid grid-cols-2 gap-2 sm:gap-3" role="tablist" aria-label={t('selectProject')}>
        {projects.map((item, index) => (
          <button
            id={`project-tab-${index}`}
            key={item.id}
            role="tab"
            type="button"
            tabIndex={selected === index ? 0 : -1}
            aria-selected={selected === index}
            aria-controls="project-panel"
            onKeyDown={(event) => onProjectKeyDown(event, index)}
            onClick={() => setSelected(index)}
            className={`project-tab ${selected === index ? 'project-tab-active' : ''}`}
          >
            <span className="project-tab-top flex items-center justify-between"><span>{item.number} /</span>{selected === index ? <Check size={15} aria-hidden="true" /> : <ArrowUpRight size={15} aria-hidden="true" />}</span>
            <span className="project-tab-title">{item.nameKey ? t(item.nameKey) : item.name}</span>
          </button>
        ))}
      </div>
      <div className="surface project-panel mt-3 overflow-hidden" id="project-panel" role="tabpanel" aria-labelledby={`project-tab-${selected}`} tabIndex={0}>
        <div className="p-5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="micro-label">{t(project.tagKey)}</span>
            <span className="date-label">{t('projectLabel')} / {project.number}</span>
          </div>
          <h3 className="mt-3 text-[1.4rem] font-extrabold tracking-tight sm:text-[1.7rem]">{title}</h3>
          <p className="body-copy mt-3">{t(project.descriptionKey)}</p>
          {project.url && (
            <a href={project.url} className="text-link mt-5 inline-flex items-center gap-1.5" target="_blank" rel="noopener noreferrer">
              {t('readMore')} <ExternalLink size={15} aria-hidden="true" />
            </a>
          )}
        </div>
        {project.youtubeId && (
          <div className="project-video-wrap">
            <iframe
              key={project.id}
              title={`${title} — ${t('watchDemo')}`}
              src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}${project.youtubeStart ? `?start=${project.youtubeStart}` : ''}`}
              className="aspect-video w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}
        {!project.youtubeId && <div className="project-video-empty flex items-center gap-2 px-5 py-5 sm:px-8"><Code2 size={18} aria-hidden="true" />{t('noDemo')}</div>}
      </div>
    </section>
  )
}

function Footer({ t }) {
  return (
    <footer className="page-container pb-8 pt-10">
      <div className="footer-line flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
        <div>
          <p className="font-bold tracking-tight">{profile.name}<span className="text-accent">_</span></p>
          <p className="muted mt-1 text-xs">{t('footerText')}</p>
        </div>
        <a href="#top" className="footer-back flex items-center gap-2 text-sm font-semibold">{t('backToTop')}<ArrowRight className="-rotate-90" size={16} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}

export default function App() {
  const [locale, setLocale] = useState(readLocale)
  const [theme, setTheme] = useState(readTheme)
  const t = (key) => translations[locale][key] ?? translations.en[key] ?? key

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = `${profile.name} | ${t('SofwareEngineer-Title')}`
    try { localStorage.setItem('jrl-language', locale) } catch { /* Optional preference storage. */ }
  }, [locale]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#08111c' : '#edf2f5')
    try { localStorage.setItem('jrl-theme', theme) } catch { /* Optional preference storage. */ }
  }, [theme])

  return (
    <div id="top" className="min-h-screen overflow-x-clip">
      <a className="skip-link" href="#main">{t('skipToContent')}</a>
      <Header locale={locale} setLocale={setLocale} theme={theme} setTheme={setTheme} t={t} />
      <main id="main" className="page-container pb-4 pt-5 sm:pt-7">
        <Hero locale={locale} t={t} />
        <div className="cv-layout mt-8 grid items-start gap-8">
          <div className="min-w-0 space-y-9 sm:space-y-11">
            <About t={t} />
            <Experience t={t} />
            <Education t={t} />
            <Projects t={t} />
          </div>
          {/* On non-touch desktops, skills appear in a right-hand rail. On tablets/mobile, the
              aside follows all main sections because it comes second in DOM order. */}
          <aside id="skills" className="skills-aside min-w-0 scroll-mt-28" aria-label={t('Skills-Section')}>
            <SkillPanel t={t} />
          </aside>
        </div>
        <div className="bottom-cta surface mt-9 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="micro-label">// {t('contactLabel')}</p>
            <p className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">{t('heroIntro')}</p>
          </div>
          <a href={`mailto:${profile.email}`} className="primary-button shrink-0">{t('sendEmail')}<ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </main>
      <Footer t={t} />
    </div>
  )
}
