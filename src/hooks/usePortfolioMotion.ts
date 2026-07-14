import { useEffect } from 'react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, CustomEase)
CustomEase.create('portfolio-out', '0.16, 1, 0.3, 1')
CustomEase.create('portfolio-in-out', '0.87, 0, 0.13, 1')

const lenisEase = (value: number) => Math.min(1, 1.001 - Math.pow(2, -10 * value))

export function usePortfolioMotion() {
  useEffect(() => {
    const main = document.querySelector<HTMLElement>('.portfolio-main')
    if (!main) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let lenis: Lenis | undefined
    let ticker: ((time: number) => void) | undefined

    if (!reducedMotion) {
      lenis = new Lenis({
        duration: 1.12,
        easing: lenisEase,
        smoothWheel: true,
        wheelMultiplier: 0.88,
        anchors: { offset: -76 },
      })

      const updateScrollTrigger = () => ScrollTrigger.update()
      lenis.on('scroll', updateScrollTrigger)
      ticker = (time: number) => lenis?.raf(time * 1000)
      gsap.ticker.add(ticker)
      gsap.ticker.lagSmoothing(0)
    }

    const context = gsap.context(() => {
      const progress = document.querySelector<HTMLElement>('#scroll-progress')
      if (progress) {
        ScrollTrigger.create({
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            progress.style.transform = `scaleX(${self.progress})`
          },
        })
      }

      if (reducedMotion) {
        gsap.set('[data-reveal], [data-hero-word], [data-hero-detail]', {
          clearProps: 'all',
          opacity: 1,
        })
        return
      }

      const load = gsap.timeline({ defaults: { ease: 'portfolio-out' } })
      load
        .fromTo('[data-nav-item]', { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.06 }, 0.08)
        .fromTo('[data-hero-word]', { yPercent: 115 }, { yPercent: 0, duration: 1.15, stagger: 0.09 }, 0.18)
        .fromTo(
          '[data-hero-detail]',
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 },
          0.52,
        )

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.1,
          },
          defaults: { ease: 'portfolio-in-out' },
        })
        .to('.hero-name-first', { xPercent: -15, opacity: 0.2 }, 0)
        .to('.hero-name-last', { xPercent: 11, opacity: 0.16 }, 0)
        .to('.hero-details', { y: -72, opacity: 0 }, 0)
        .to('.hero-scroll', { y: 40, opacity: 0 }, 0)

      gsap.utils.toArray<HTMLElement>('[data-reveal]', main).forEach((element) => {
        gsap.fromTo(
          element,
          { y: 64, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.05,
            ease: 'portfolio-out',
            scrollTrigger: {
              trigger: element,
              start: 'top 86%',
              once: true,
            },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>('[data-project]').forEach((project) => {
        const line = project.querySelector<HTMLElement>('.project-progress-line')
        if (!line) return

        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'portfolio-in-out',
            scrollTrigger: {
              trigger: project,
              start: 'top 80%',
              end: 'bottom 30%',
              scrub: 0.8,
            },
          },
        )
      })
    }, main)

    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      window.cancelAnimationFrame(refreshFrame)
      context.revert()
      if (ticker) gsap.ticker.remove(ticker)
      lenis?.destroy()
    }
  }, [])
}
