'use client'

import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import './experience.css'

import aegisai from '@/assets/logos/aegisai.png'
import caseware from '@/assets/logos/caseware.png'
import aci from '@/assets/logos/aci.png'
import idae from '@/assets/logos/idae.png'

export interface ExperienceEntry {
  id: string
  company: {
    name: string
    subtitle: string
    description: string
    logo: StaticImageData
    gradient: string
    roleGradient: string
    accent: string
  }
  role: {
    title: string
    period: string
    location: 'remote' | 'onsite' | 'hybrid'
    achievements: React.ReactNode[]
    technologies: string[]
  }
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'aegisai',
    company: {
      name: 'AegisAI',
      subtitle: 'Early-stage AI Startup for Safety Industry',
      description: 'Focused on building agent-based systems to support complex workflows. Work spanned product definition, system architecture, and hands-on implementation.',
      logo: aegisai,
      gradient: `linear-gradient(135deg,
        rgb(12, 6, 3) 0%,
        rgb(28, 14, 6) 15%,
        rgb(58, 28, 10) 40%,
        rgb(72, 35, 14) 65%,
        rgb(45, 22, 8) 85%,
        rgb(12, 6, 3) 100%)`,
      roleGradient: `linear-gradient(135deg,
        rgb(10, 5, 2) 0%,
        rgb(28, 14, 5) 25%,
        rgb(40, 20, 8) 50%,
        rgb(28, 14, 5) 75%,
        rgb(10, 5, 2) 100%)`,
      accent: '180, 90, 30',
    },
    role: {
      title: 'AI Engineer / Technical Product Lead',
      period: 'Oct 2025 — Present',
      location: 'remote',
      achievements: [
        <>Designed a graph-based <strong>multi-agent architecture</strong> to coordinate complex workflows, reducing user friction by <strong>~60%</strong>.</>,
        <>Led end-to-end <strong>AI PoCs</strong> from problem framing to validation, transforming ideas into demo-ready systems used in sales and executive discussions.</>,
        <>Acted as a <strong>technical product manager</strong>, translating business goals into agent responsibilities, orchestration patterns, and evaluation flows.</>,
      ],
      technologies: ['Agentic AI', 'GenAI', 'LangGraph', 'LangChain', 'System Architecture', 'AI Product Design'],
    },
  },
  {
    id: 'caseware',
    company: {
      name: 'Caseware',
      subtitle: 'AiDA | AI Platform',
      description: 'AI product focused on automating financial procedures using LLMs and retrieval-based architectures. Used by professional services teams where accuracy, explainability, and reliability are critical.',
      logo: caseware,
      gradient: `linear-gradient(135deg,
        rgb(12, 5, 5) 0%,
        rgb(28, 12, 10) 15%,
        rgb(58, 24, 20) 40%,
        rgb(72, 30, 25) 65%,
        rgb(45, 18, 15) 85%,
        rgb(12, 5, 5) 100%)`,
      roleGradient: `linear-gradient(135deg,
        rgb(10, 4, 4) 0%,
        rgb(25, 10, 8) 25%,
        rgb(38, 16, 13) 50%,
        rgb(25, 10, 8) 75%,
        rgb(10, 4, 4) 100%)`,
      accent: '180, 60, 50',
    },
    role: {
      title: 'AI Engineer Intern',
      period: 'Feb 2025 — Aug 2025',
      location: 'remote',
      achievements: [
        <>Built and improved <strong>RAG-based</strong> pipelines for document intelligence, focusing on accuracy, grounding, and personalization.</>,
        <>Designed <strong>multi-knowledge-base retrieval</strong> strategies to adapt responses to different user contexts.</>,
        <>Created a <strong>hybrid evaluation framework</strong> (heuristics + LLM-as-judge + metrics) to support production reliability decisions.</>,
      ],
      technologies: ['Python', 'LLMs', 'RAG', 'LangChain', 'AI Evaluation', 'Document Intelligence'],
    },
  },
  {
    id: 'aci',
    company: {
      name: 'ACI Worldwide',
      subtitle: 'BRE-B Real-Time Payments System',
      description: 'Mission-critical national payment infrastructure handling real-time, high-value transactions with strict SLAs, security, and regulatory constraints.',
      logo: aci,
      gradient: `linear-gradient(135deg,
        rgb(5, 5, 15) 0%,
        rgb(10, 10, 32) 15%,
        rgb(20, 20, 58) 40%,
        rgb(30, 28, 72) 65%,
        rgb(18, 17, 45) 85%,
        rgb(5, 5, 15) 100%)`,
      roleGradient: `linear-gradient(135deg,
        rgb(4, 4, 12) 0%,
        rgb(10, 10, 25) 25%,
        rgb(16, 15, 38) 50%,
        rgb(10, 10, 25) 75%,
        rgb(4, 4, 12) 100%)`,
      accent: '60, 55, 180',
    },
    role: {
      title: 'Intern Technical Consultant',
      period: 'Aug 2024 — Feb 2025',
      location: 'onsite',
      achievements: [
        <>Supported development and maintenance of <strong>real-time payment systems</strong> operating under high availability and low-latency requirements.</>,
        <>Worked closely with <strong>international financial institutions</strong> to align technical delivery with business and regulatory needs.</>,
        <>Gained hands-on experience operating in high-stakes production environments with <strong>cross-team coordination</strong>.</>,
      ],
      technologies: ['Java', 'High-Availability Systems', 'Real-Time Payments', 'Enterprise Systems', 'SLAs'],
    },
  },
  {
    id: 'idae',
    company: {
      name: 'IDAE',
      subtitle: 'Education & Program Scaling',
      description: 'National education initiative focused on increasing university access through standardized test preparation.',
      logo: idae,
      gradient: `linear-gradient(135deg,
        rgb(3, 8, 10) 0%,
        rgb(5, 18, 22) 15%,
        rgb(8, 35, 44) 40%,
        rgb(10, 45, 56) 65%,
        rgb(6, 28, 35) 85%,
        rgb(3, 8, 10) 100%)`,
      roleGradient: `linear-gradient(135deg,
        rgb(4, 10, 12) 0%,
        rgb(6, 20, 25) 25%,
        rgb(8, 28, 35) 50%,
        rgb(6, 20, 25) 75%,
        rgb(4, 10, 12) 100%)`,
      accent: '0, 120, 150',
    },
    role: {
      title: 'Regional Coordinator',
      period: 'Jan 2020 — Present',
      location: 'hybrid',
      achievements: [
        <>Scaled an <strong>internationally certified (ISO 9001:2015)</strong> education program across two regions.</>,
        <>Led partnerships, logistics, and team coordination to enable <strong>200+</strong> students, with <strong>80%</strong> advancing to university.</>,
        <>Structured operations for <strong>long-term sustainability</strong> with minimal direct oversight.</>,
      ],
      technologies: ['Leadership', 'Operations', 'Education', 'Scaling', 'Programs'],
    },
  },
]

export function LocationIcon({ location }: { location: 'remote' | 'onsite' | 'hybrid' }) {
  if (location === 'remote') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    )
  }
  if (location === 'onsite') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const entries = listRef.current?.querySelectorAll('.experience-entry')
    if (!entries) return

    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    entries.forEach((el, i) => {
      ; (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <h2 className="experience-header__title">Experience</h2>
        <p className="experience-header__subtitle">
          Where I <strong>built,</strong> <strong>learned,</strong> and <strong>shaped</strong> the <strong>AI Technical Product Manager</strong> I&apos;m becoming
        </p>
      </div>

      <div className="experience-list" ref={listRef}>
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-entry" style={{ '--card-accent': exp.company.accent } as React.CSSProperties}>
            {/* Left Card — Company */}
            <div
              className="experience-card experience-card--company"
              style={{ '--card-gradient': exp.company.gradient } as React.CSSProperties}
            >
              <div className="experience-card__glass" />
              <div className="experience-card__specular" />
              <div className="experience-card__logo">
                <Image
                  src={exp.company.logo}
                  alt={exp.company.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="experience-card__company-subtitle">{exp.company.subtitle}</span>
              <p className="experience-card__company-desc">{exp.company.description}</p>
            </div>

            {/* Right Card — Role */}
            <div
              className="experience-card experience-card--role"
              style={{ '--card-role-gradient': exp.company.roleGradient } as React.CSSProperties}
            >
              <div className="experience-card__glass" />
              <div className="experience-card__specular" />
              <div className="experience-card__location-badge">
                <LocationIcon location={exp.role.location} />
                <span>{exp.role.location}</span>
              </div>

              <h3 className="experience-card__role-title">{exp.role.title}</h3>
              <span className="experience-card__period">{exp.role.period}</span>

              <ul className="experience-card__achievements">
                {exp.role.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>

              <div className="experience-card__technologies">
                {exp.role.technologies.map((tech, i) => (
                  <span key={i} className="experience-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
