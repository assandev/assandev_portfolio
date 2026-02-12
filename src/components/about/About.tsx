'use client'

import { useState } from 'react'
import Image from 'next/image'
import profilePhoto from '@/assets/logos/perfil.png'
import './about.css'

interface SkillCategory {
  title: string
  items: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'AI Systems & Architectures',
    items: [
      'Agentic orchestration using stateful multi-agent graphs',
      'RAG pipelines (hybrid retrieval, re-ranking, evaluation strategies)',
      'LLM API integration and tool-calling architectures',
      'Prompt engineering & structured output design',
      'AI evaluation frameworks (heuristics + LLM-as-judge)'
    ]
  },
  {
    title: 'Product & Systems Thinking',
    items: [
      'End-to-end ownership of AI features (problem → architecture → validation)',
      'User-centric workflow design for AI-driven systems',
      'Translating business requirements into technical roadmaps',
      'Systems thinking across AI, backend, and user experience layers',
      'Balancing model performance, cost, and latency tradeoffs'
    ]
  },
  {
    title: 'Execution & Leadership',
    items: [
      'Leading ambiguous AI initiatives from PoC to demo-ready systems',
      'Cross-functional alignment between engineering and product',
      'Structured decision-making under uncertainty',
      'Proactive scope definition beyond formal role boundaries'
    ]
  },
  {
    title: 'Engineering Foundations',
    items: [
      'Python, TypeScript',
      'Backend services (Node, Express)',
      'SQL / NoSQL databases',
      'Dockerized environments',
      'API design & integration'
    ]
  },
  {
    title: 'Professional Focus',
    items: [
      'Human–AI interaction and intelligent UX',
      'Product-driven AI engineering',
      'Applied AI systems at production scale',
      'Agent-based workflows for complex decision automation'
    ]
  }
]

export default function About() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleCategory = (title: string) => {
    setOpenCategory(openCategory === title ? null : title)
  }

  return (
    <section id="about" className="about-section">
      <div className="about-card">
        {/* Level 1 - Profile (Centered) */}
        <div className="about-level-1">
          <div className="about-profile">
            <div className="about-profile__photo">
              <Image
                src={profilePhoto}
                alt="Andres Sanchez"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <h2 className="about-profile__name">Andres Sanchez</h2>
            <p className="about-profile__title">AI Engineer × Product Thinker</p>

            <div className="about-profile__buttons">
              <a
                href="https://linkedin.com/in/asanchezfu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero about-profile__btn rounded-lg"
              >
                <svg className="about-profile__btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/assandev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero about-profile__btn rounded-lg"
              >
                <svg className="about-profile__btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:ansanchezdev@gmail.com"
                className="btn-hero about-profile__btn rounded-lg"
              >
                <svg className="about-profile__btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Level 2 - About Text (Left) + Skills (Right) */}
        <div className="about-level-2">
          {/* Left - About Me Text */}
          <div className="about-text">
            <p>
              I'm an <strong>AI Engineer</strong> with a strong focus on building <strong>AI-powered systems</strong> that are reliable, useful, and grounded in <strong>real user needs</strong>. I enjoy working <strong>end to end</strong>, from understanding the problem and the people behind it, to designing <strong>system architectures</strong> and delivering <strong>production-ready solutions</strong>. I'm particularly motivated by environments where I can <strong>take ownership</strong> beyond formal scope and turn ambiguous challenges into <strong>clear, actionable outcomes</strong>.
            </p>
            <p>
              My goal is to continue growing as an <strong>AI Engineer</strong> while evolving toward <strong>technical and product leadership</strong>. Operating at the intersection of <strong>AI, user experience, and business impact</strong>, and contributing to systems that create <strong>meaningful, lasting change</strong>.
            </p>
          </div>

          {/* Right - Skills Dropdowns */}
          <div className="about-skills">
            {skillCategories.map((category) => (
              <div key={category.title} className="about-dropdown">
                <button
                  className={`about-dropdown__header ${openCategory === category.title ? 'open' : ''}`}
                  onClick={() => toggleCategory(category.title)}
                >
                  <span>{category.title}</span>
                  <svg
                    className="about-dropdown__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div className={`about-dropdown__content ${openCategory === category.title ? 'open' : ''}`}>
                  <ul className="about-dropdown__list">
                    {category.items.map((item, index) => (
                      <li key={index} className="about-skill-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
