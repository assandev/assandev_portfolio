import ExperienceCarousel from '@/components/experience/ExperienceCarousel'
import './preview.css'

export default function PreviewPage() {
  return (
    <div className="preview-page">
      <div className="preview-label">
        Experience — Carousel Layout
        <span>Horizontal navigation with auto-advance and dot indicators</span>
      </div>
      <ExperienceCarousel />
    </div>
  )
}
