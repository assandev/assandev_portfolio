'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import './contact.css'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = section.querySelectorAll('.contact-animate')
    elements.forEach((el, i) => {
      ; (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage('Please fill in all fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message')
    }
  }

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-header contact-animate">
        <h2 className="contact-header__title">Get in Touch</h2>
        <p className="contact-header__subtitle">
          Let&apos;s connect your <strong>business goals</strong> to scalable <strong>AI systems</strong>.
        </p>
      </div>

      <div className="contact-content">
        {/* Left — Contact Form */}
        <div className="contact-form-card contact-animate">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="name">Name</label>
              <input
                className="contact-form__input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                disabled={status === 'loading'}
                autoComplete="name"
              />
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="email">Email</label>
              <input
                className="contact-form__input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                disabled={status === 'loading'}
                autoComplete="email"
              />
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="message">Message</label>
              <textarea
                className="contact-form__textarea"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                disabled={status === 'loading'}
              />
            </div>

            <button
              className="contact-form__submit btn-hero rounded-lg"
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="contact-form__status contact-form__status--success">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form__status contact-form__status--error">
                {errorMessage}
              </p>
            )}
          </form>
        </div>

        {/* Right — Info Cards */}
        <div className="contact-info contact-animate">
          {/* Calendly Card */}
          <div className="contact-info-card">
            <div className="contact-info-card__content">
              <svg className="contact-info-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <h3 className="contact-info-card__title">Book a Meeting</h3>
              <p className="contact-info-card__desc">
                Schedule a 15-minute call to discuss your project or idea.
              </p>
              <a
                href="https://calendly.com/ansanchezdev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero contact-info-card__btn rounded-lg"
              >
                Open Calendly
              </a>
            </div>
          </div>

          {/* Direct Contact Card */}
          <div className="contact-info-card">
            <div className="contact-info-card__content">
              <svg className="contact-info-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <h3 className="contact-info-card__title">Direct Contact</h3>
              <div className="contact-info-card__links">
                <a href="mailto:ansanchezdev@gmail.com" className="contact-info-card__link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  ansanchezdev@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/asanchezfu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-card__link"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
