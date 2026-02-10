'use client'

import Image from 'next/image'
import './logoCarousel.css'

import aegisai from '@/assets/logos/aegisai.png'
import caseware from '@/assets/logos/caseware.png'
import aci from '@/assets/logos/aci.png'
import unal from '@/assets/logos/unal.png'
import idae from '@/assets/logos/idae.png'

const logos = [
  { src: aegisai, alt: 'AegisAI', className: '', href: 'https://aegisai.co' },
  { src: caseware, alt: 'Caseware', className: '', href: 'https://www.caseware.com/us/aida-future-accounting-audit' },
  { src: aci, alt: 'ACI Worldwide', className: '', href: 'https://www.aciworldwide.com' },
  { src: unal, alt: 'Universidad Nacional', className: 'logo--large', href: 'https://unal.edu.co' },
  { src: idae, alt: 'Idae', className: '', href: 'https://idae.com.co' },
]

export default function LogoCarousel() {
  return (
    <div className="logo-carousel">
      <div className="logo-carousel__track">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer" className={`logo-carousel__item ${logo.className}`}>
            <Image src={logo.src} alt={logo.alt} height={60} width={180} />
          </a>
        ))}
        {/* Duplicate for seamless infinite scroll */}
        {logos.map((logo, index) => (
          <a key={`dup-${index}`} href={logo.href} target="_blank" rel="noopener noreferrer" className={`logo-carousel__item ${logo.className}`}>
            <Image src={logo.src} alt={logo.alt} height={60} width={180} />
          </a>
        ))}
      </div>
    </div>
  )
}
