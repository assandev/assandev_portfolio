'use client'

import { useEffect } from 'react'
import './hero.css'
import LogoCarousel from './LogoCarousel'

export default function Hero() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar')
    if (!navbar) return

    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero relative min-h-screen overflow-hidden">
      {/* Atmospheric Glow - Left side diffuse effect */}
      <div className="hero__glow" />
      <div className="hero__vignette" />

      {/* Content Layer */}
      <div className="hero__content relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        {/* Navigation */}
        <nav className="navbar fixed top-0 left-0 right-0 z-50 px-6 py-6 lg:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div
              className="logo text-xl font-bold tracking-widest"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >ASSAN</div>
            <ul className="hidden md:flex items-center gap-10">
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#experience" className="nav-link">Experience</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>

              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1yfGirWwFrS3-DKsZmSoYIO2F5X_Lf32F/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button rounded-md bg-white px-5 py-2 text-sm font-medium text-[#05040A] transition-all duration-300 hover:bg-[#f0f0f0] hover:-translate-y-0.5"
            >
              View CV
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="hero-inner flex flex-col items-center mb-[30%]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
            <span className="text-[rgba(246,246,247,0.65)]"></span> AI Product Engineer
          </h1>



          <p className="font-montserrat text-lg md:text-xl font-normal text-[#94a3b8] mb-12">
            Building where <span className="text-white">strategy</span>, <span className="text-white">architecture</span>, and <span className="text-white">execution</span> meet
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-hero px-8 py-4 rounded-lg text-base font-medium">
              Get in Touch
            </a>
            <a href="#about" className="btn-hero px-8 py-4 rounded-lg text-base font-medium">
              About Me
            </a>
          </div>
        </div>

        {/* Company logos carousel */}
        <div className="absolute bottom-[28%] left-0 right-0 z-20">
          <LogoCarousel />
        </div>
      </div>
    </section>
  )
}
