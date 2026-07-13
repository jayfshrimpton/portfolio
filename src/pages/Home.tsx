import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../sections/HeroSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'
import ContactSection from '../sections/ContactSection'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const element = document.querySelector(location.hash)
    element?.scrollIntoView()
  }, [location.hash])

  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}
