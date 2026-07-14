import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../sections/HeroSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'
import ContactSection from '../sections/ContactSection'
import { OnTrackSection } from '../sections/OnTrackSection'
import { usePortfolioMotion } from '../hooks/usePortfolioMotion'

export default function Home() {
  const location = useLocation()
  usePortfolioMotion()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (!location.hash) {
        window.scrollTo(0, 0)
        return
      }

      document.querySelector(location.hash)?.scrollIntoView({ block: 'start' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.hash])

  return (
    <main id="main-content" className="portfolio-main">
      <HeroSection />
      <ProjectsSection />
      <OnTrackSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
