'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { experiences, LocationIcon } from './Experience'
import './experience.css'
import './experience-carousel.css'

export default function ExperienceCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [isAnimating, setIsAnimating] = useState(false)
  const [navKey, setNavKey] = useState(0)
  const total = experiences.length

  const goTo = useCallback((index: number, dir: 'next' | 'prev') => {
    if (isAnimating || index === current) return
    setDirection(dir)
    setIsAnimating(true)
    setCurrent(index)
    setNavKey((k) => k + 1)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, current])

  const next = useCallback(() => {
    const nextIndex = (current + 1) % total
    goTo(nextIndex, 'next')
  }, [current, total, goTo])

  const prev = useCallback(() => {
    const prevIndex = (current - 1 + total) % total
    goTo(prevIndex, 'prev')
  }, [current, total, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const exp = experiences[current]

  return (
    <section className="experience-section experience-carousel">
      <div className="experience-header">
        <h2 className="experience-header__title">Experience</h2>
        <p className="experience-header__subtitle">
          Where I built, learned, and shaped the AI Engineer I&apos;m becoming
        </p>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-arrow carousel-arrow--left" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="carousel-track">
          <div
            key={exp.id}
            className={`experience-entry visible carousel-slide carousel-slide--${direction}`}
            style={{ '--card-accent': exp.company.accent } as React.CSSProperties}
          >
            {/* Left Card — Company */}
            <div
              className="experience-card experience-card--company"
              style={{ '--card-gradient': exp.company.gradient } as React.CSSProperties}
            >
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
        </div>

        <button className="carousel-arrow carousel-arrow--right" onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="carousel-dots">
        {experiences.map((_, i) => (
          <button
            key={`${i}-${navKey}`}
            className={`carousel-dot ${i === current ? 'carousel-dot--active' : ''}`}
            onClick={() => goTo(i, i > current ? 'next' : 'prev')}
            aria-label={`Go to ${experiences[i].company.name}`}
          />
        ))}
      </div>
    </section>
  )
}
