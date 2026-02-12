import Experience from '@/components/experience/Experience'
import './preview.css'

export default function PreviewPage() {
  return (
    <div className="preview-page">
      <div className="preview-label">
        Experience — Liquid Glass
        <span>Cards with accent-tinted glass and specular highlights</span>
      </div>
      <Experience />
    </div>
  )
}
