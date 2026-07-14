import { useEffect, useRef } from 'react'

const INTERACTIVE_SELECTOR = 'a, button, [data-cursor]'

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!finePointer.matches || reducedMotion.matches) return

    const ring = ringRef.current
    const dot = dotRef.current
    const label = labelRef.current
    if (!ring || !dot || !label) return

    let targetX = -100
    let targetY = -100
    let currentX = -100
    let currentY = -100
    let frame = 0

    document.body.classList.add('cursor-active')

    const render = () => {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      frame = window.requestAnimationFrame(render)
    }

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`
      ring.classList.add('is-visible')
      dot.classList.add('is-visible')

      const interactive = (event.target as Element | null)?.closest<HTMLElement>(INTERACTIVE_SELECTOR)
      const cursorLabel = interactive?.dataset.cursor ?? ''
      ring.classList.toggle('is-active', Boolean(interactive))
      ring.classList.toggle('has-label', Boolean(cursorLabel))
      label.textContent = cursorLabel
    }

    const handlePointerDown = () => ring.classList.add('is-pressed')
    const handlePointerUp = () => ring.classList.remove('is-pressed')
    const handlePointerLeave = () => {
      ring.classList.remove('is-visible')
      dot.classList.remove('is-visible')
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    window.addEventListener('pointerup', handlePointerUp, { passive: true })
    document.documentElement.addEventListener('mouseleave', handlePointerLeave)
    frame = window.requestAnimationFrame(render)

    return () => {
      document.body.classList.remove('cursor-active')
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave)
    }
  }, [])

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring">
        <span ref={labelRef} />
      </div>
      <div ref={dotRef} className="cursor-dot" />
    </div>
  )
}
