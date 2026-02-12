'use client'

import { useState, useEffect, useRef } from 'react'
import './projects.css'

export type ProjectType = 'video' | 'github'

export interface ProjectEntry {
  id: string
  name: string
  subtitle: string
  description: string
  type: ProjectType
  mediaSrc: string
  link: string
  accent: string
  gradient: string
  gridArea: string
}

export const projects: ProjectEntry[] = [
  {
    id: 'atun',
    name: 'ATUM',
    subtitle: 'Developer Assistant',
    description: 'AI-powered developer assistant designed to generate, evaluate, and improve source code across multiple languages.',
    type: 'video',
    mediaSrc: '/videos/atum.mp4',
    link: 'https://github.com/assandev/ATUM',
    accent: '139, 92, 246',
    gradient: `linear-gradient(135deg,
      rgb(8, 5, 20) 0%,
      rgb(18, 10, 40) 40%,
      rgb(28, 16, 58) 70%,
      rgb(8, 5, 20) 100%)`,
    gridArea: 'atun',
  },
  {
    id: 'cerberus',
    name: 'Cerberus',
    subtitle: 'CNN for vote reporting integrity',
    description: 'A CNN-based system designed to enhance transparency in handwritten vote reporting.',
    type: 'github',
    mediaSrc: '/images/cerberus.svg',
    link: 'https://github.com/assandev/cerberus',
    accent: '220, 60, 60',
    gradient: `linear-gradient(135deg,
      rgb(18, 5, 5) 0%,
      rgb(35, 10, 10) 40%,
      rgb(50, 15, 15) 70%,
      rgb(18, 5, 5) 100%)`,
    gridArea: 'cerberus',
  },
  {
    id: 'preq',
    name: 'Pre-Q',
    subtitle: 'Business workflow automation',
    description: 'Conversational agent that qualifies leads through rule-based reasoning and structured data pipelines.',
    type: 'github',
    mediaSrc: '/images/Pre-Q.svg',
    link: 'https://github.com/assandev/Pre-Q',
    accent: '16, 185, 129',
    gradient: `linear-gradient(135deg,
      rgb(3, 15, 12) 0%,
      rgb(6, 30, 24) 40%,
      rgb(10, 45, 35) 70%,
      rgb(3, 15, 12) 100%)`,
    gridArea: 'preq',
  },
  {
    id: 'guardian',
    name: 'Guardian',
    subtitle: 'Three agentic architecture',
    description: 'Multi-agent system coordinating three specialized AI agents for complex safety workflows.',
    type: 'video',
    mediaSrc: '/videos/Guardian.mp4',
    link: 'https://github.com/assandev/aegisai-agentic-poc',
    accent: '60, 130, 246',
    gradient: `linear-gradient(135deg,
      rgb(5, 8, 22) 0%,
      rgb(10, 18, 42) 40%,
      rgb(15, 30, 60) 70%,
      rgb(5, 8, 22) 100%)`,
    gridArea: 'guardian',
  },
  {
    id: 'aiorder',
    name: 'AI Order Management',
    subtitle: 'AI in business workflow',
    description: 'AI-enhanced backend service for automating customer communication.',
    type: 'github',
    mediaSrc: '/images/Order-Management.svg',
    link: 'https://github.com/assandev/AI-Order-Manager',
    accent: '234, 162, 40',
    gradient: `linear-gradient(135deg,
      rgb(18, 12, 3) 0%,
      rgb(35, 24, 6) 40%,
      rgb(50, 34, 8) 70%,
      rgb(18, 12, 3) 100%)`,
    gridArea: 'aiorder',
  },
]

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('[data-project-id]')
    if (!cards) return

    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.projectId!
            setVisibleCards((prev) => new Set(prev).add(id))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    cards.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-header">
        <h2 className="projects-header__title">Projects</h2>
        <p className="projects-header__subtitle">
          Built for <strong>real impact</strong>. Designed for <strong>continuous growth</strong>.
        </p>
      </div>

      <div className="projects-layout">
        {/* Left Sidebar */}
        <div className="projects-sidebar">
          {projects.map((project) => (
            <div
              key={`sidebar-${project.id}`}
              className={`projects-sidebar__card ${hoveredProject === project.id ? 'projects-sidebar__card--active' : ''
                }`}
              style={{ '--card-accent': project.accent } as React.CSSProperties}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="projects-sidebar__text">
                <span className="projects-sidebar__name">{project.name}</span>
                <span className="projects-sidebar__subtitle">{project.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Bento Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              data-project-id={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`projects-grid__card projects-grid__card--${project.type}${visibleCards.has(project.id) ? ' visible' : ''}${hoveredProject === project.id ? ' projects-grid__card--active' : ''}`}
              style={{
                '--card-accent': project.accent,
                '--card-gradient': project.gradient,
                gridArea: project.gridArea,
                transitionDelay: `${projects.indexOf(project) * 0.08}s`,
              } as React.CSSProperties}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Glass overlay */}
              <div className="projects-grid__glass" />

              {/* Moving specular highlight */}
              <div className="projects-grid__specular" />

              {/* Media content */}
              <div className="projects-grid__media">
                {project.type === 'video' ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="projects-grid__video"
                  >
                    <source src={project.mediaSrc.replace('.mp4', '.webm')} type="video/webm" />
                    <source src={project.mediaSrc} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={project.mediaSrc}
                    alt={project.name}
                    className="projects-grid__image"
                  />
                )}
              </div>

              {/* Hover overlay with description */}
              <div className="projects-grid__overlay">
                <h3 className="projects-grid__card-title">{project.name}</h3>
                <p className="projects-grid__card-desc">{project.description}</p>
                <span className="projects-grid__link-hint">
                  <ExternalLinkIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
