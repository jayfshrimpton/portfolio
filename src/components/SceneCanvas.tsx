import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

type FadeMaterial = THREE.MeshBasicMaterial | THREE.PointsMaterial | THREE.LineBasicMaterial

interface SceneZone {
  group: THREE.Group
  materials: Array<{ material: FadeMaterial; opacity: number }>
  z: number
  rotationSpeed: number
}

function remember(material: FadeMaterial, opacity: number) {
  material.transparent = true
  material.opacity = opacity
  return { material, opacity }
}

function createCoreZone() {
  const group = new THREE.Group()
  const materials: SceneZone['materials'] = []
  group.position.set(2.4, 0.2, 0)

  const shellMaterial = new THREE.MeshBasicMaterial({ color: 0x4f91ff, wireframe: true })
  const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(2.45, 2), shellMaterial)
  shell.rotation.set(0.28, -0.4, 0.12)
  group.add(shell)
  materials.push(remember(shellMaterial, 0.48))

  const pointMaterial = new THREE.PointsMaterial({ color: 0xb9d2ff, size: 2.2, sizeAttenuation: false })
  const points = new THREE.Points(new THREE.IcosahedronGeometry(1.72, 2), pointMaterial)
  group.add(points)
  materials.push(remember(pointMaterial, 0.74))

  ;[
    { radius: 3.15, tube: 0.008, rotation: [1.12, 0.1, 0.34] },
    { radius: 3.65, tube: 0.006, rotation: [0.2, 1.18, 0.2] },
  ].forEach((ring) => {
    const material = new THREE.MeshBasicMaterial({ color: 0x256dff, wireframe: true })
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(ring.radius, ring.tube, 5, 160), material)
    mesh.rotation.set(...(ring.rotation as [number, number, number]))
    group.add(mesh)
    materials.push(remember(material, 0.32))
  })

  return { group, materials, z: 0, rotationSpeed: 0.08 }
}

function createNetworkZone() {
  const group = new THREE.Group()
  const materials: SceneZone['materials'] = []
  group.position.set(-1.2, 0, -21)

  const nodeCount = 34
  const nodes: THREE.Vector3[] = []
  const pointPositions = new Float32Array(nodeCount * 3)
  for (let index = 0; index < nodeCount; index += 1) {
    const angle = index * 2.39996
    const radius = 1.1 + ((index * 37) % 13) * 0.19
    const point = new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius * 0.72,
      ((index * 17) % 11) * 0.24 - 1.2,
    )
    nodes.push(point)
    pointPositions.set([point.x, point.y, point.z], index * 3)
  }

  const pointGeometry = new THREE.BufferGeometry()
  pointGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3))
  const pointMaterial = new THREE.PointsMaterial({ color: 0x8ab8ff, size: 3, sizeAttenuation: false })
  group.add(new THREE.Points(pointGeometry, pointMaterial))
  materials.push(remember(pointMaterial, 0.9))

  const linePositions: number[] = []
  nodes.forEach((node, index) => {
    const connections = [nodes[(index + 1) % nodeCount], nodes[(index + 7) % nodeCount]]
    connections.forEach((target) => linePositions.push(node.x, node.y, node.z, target.x, target.y, target.z))
  })
  const lineGeometry = new THREE.BufferGeometry()
  lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x3278ed })
  group.add(new THREE.LineSegments(lineGeometry, lineMaterial))
  materials.push(remember(lineMaterial, 0.34))

  return { group, materials, z: -21, rotationSpeed: -0.045 }
}

function createStackZone() {
  const group = new THREE.Group()
  const materials: SceneZone['materials'] = []
  group.position.set(2.1, -0.1, -43)

  for (let index = 0; index < 4; index += 1) {
    const material = new THREE.MeshBasicMaterial({ color: index === 0 ? 0x82b3ff : 0x2f72e8, wireframe: true })
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(4.4 - index * 0.58, 4.4 - index * 0.58, 4.4 - index * 0.58), material)
    mesh.rotation.set(0.18 + index * 0.18, 0.4 + index * 0.27, index * 0.08)
    group.add(mesh)
    materials.push(remember(material, 0.4 - index * 0.055))
  }

  return { group, materials, z: -43, rotationSpeed: 0.038 }
}

function createOrbitZone() {
  const group = new THREE.Group()
  const materials: SceneZone['materials'] = []
  group.position.set(-1.8, 0.2, -65)

  for (let index = 0; index < 5; index += 1) {
    const radius = 1.2 + index * 0.55
    const material = new THREE.MeshBasicMaterial({ color: index % 2 === 0 ? 0x6ca7ff : 0x235fd0, wireframe: true })
    const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.012, 4, 120), material)
    ring.rotation.set(1.15 - index * 0.14, index * 0.24, index * 0.32)
    group.add(ring)
    materials.push(remember(material, 0.46 - index * 0.045))
  }

  const chartPoints = [
    new THREE.Vector3(-3.2, -1.8, 0.2),
    new THREE.Vector3(-2.2, -0.9, 0.1),
    new THREE.Vector3(-1.3, -1.25, 0),
    new THREE.Vector3(-0.2, 0.15, -0.1),
    new THREE.Vector3(0.8, -0.2, 0),
    new THREE.Vector3(2, 1.4, 0.2),
    new THREE.Vector3(3.2, 1.05, 0.1),
  ]
  const chartMaterial = new THREE.LineBasicMaterial({ color: 0xb6d1ff })
  group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(chartPoints), chartMaterial))
  materials.push(remember(chartMaterial, 0.76))

  return { group, materials, z: -65, rotationSpeed: -0.024 }
}

function createFinalZone() {
  const group = new THREE.Group()
  const materials: SceneZone['materials'] = []
  group.position.set(1.4, 0, -88)

  const knotMaterial = new THREE.MeshBasicMaterial({ color: 0x4e90ff, wireframe: true })
  const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(2.3, 0.55, 180, 16, 2, 3), knotMaterial)
  knot.rotation.set(0.45, 0.2, -0.25)
  group.add(knot)
  materials.push(remember(knotMaterial, 0.34))

  const haloMaterial = new THREE.MeshBasicMaterial({ color: 0xaacaff, wireframe: true })
  const halo = new THREE.Mesh(new THREE.TorusGeometry(4.2, 0.012, 4, 180), haloMaterial)
  halo.rotation.x = 1.18
  group.add(halo)
  materials.push(remember(haloMaterial, 0.38))

  return { group, materials, z: -88, rotationSpeed: 0.028 }
}

export function SceneCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const location = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let renderer: THREE.WebGLRenderer

    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' })
    } catch {
      document.documentElement.dataset.webgl = 'off'
      return
    }

    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, reducedMotion ? 1 : 1.6))
    renderer.outputColorSpace = THREE.SRGBColorSpace

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x07090d, 0.026)
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 140)
    camera.position.set(0, 0, 12)

    const zones: SceneZone[] = [
      createCoreZone(),
      createNetworkZone(),
      createStackZone(),
      createOrbitZone(),
      createFinalZone(),
    ]
    zones.forEach((zone) => scene.add(zone.group))

    const particleCount = reducedMotion ? 280 : 760
    const particlePositions = new Float32Array(particleCount * 3)
    for (let index = 0; index < particleCount; index += 1) {
      const seed = index + 1
      particlePositions[index * 3] = Math.sin(seed * 91.7) * 13
      particlePositions[index * 3 + 1] = Math.cos(seed * 47.3) * 8
      particlePositions[index * 3 + 2] = 8 - ((seed * 29.1) % 108)
    }
    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x739fe5,
      size: 1.3,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.34,
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    const pointer = new THREE.Vector2()
    let targetProgress = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
    let progress = targetProgress
    let animationFrame = 0
    let pageVisible = !document.hidden
    const clock = new THREE.Clock()

    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    const handlePointer = (event: PointerEvent) => {
      if (reducedMotion) return
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const handleVisibility = () => {
      pageVisible = !document.hidden
      if (pageVisible) clock.start()
    }

    const scrollDriver = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        targetProgress = self.progress
      },
    })

    const render = () => {
      animationFrame = window.requestAnimationFrame(render)
      if (!pageVisible) return

      const delta = Math.min(clock.getDelta(), 0.05)
      progress += (targetProgress - progress) * (reducedMotion ? 1 : 0.055)
      const focusZ = -progress * 88

      camera.position.z = focusZ + 12
      camera.position.x = Math.sin(progress * Math.PI * 3.1) * 1.05 + pointer.x * 0.34
      camera.position.y = Math.cos(progress * Math.PI * 2.4) * 0.42 + pointer.y * 0.24
      camera.lookAt(-camera.position.x * 0.16, -camera.position.y * 0.12, focusZ)

      zones.forEach((zone, index) => {
        const distance = Math.abs(focusZ - zone.z)
        const visibility = THREE.MathUtils.clamp(1 - distance / 24, 0.055, 1)
        zone.group.rotation.y += delta * zone.rotationSpeed
        zone.group.rotation.x += delta * zone.rotationSpeed * 0.34
        zone.group.position.y += Math.sin(clock.elapsedTime * 0.38 + index) * 0.00055
        zone.materials.forEach(({ material, opacity }) => {
          material.opacity = opacity * visibility
        })
      })

      particles.rotation.z = progress * 0.16
      particles.position.z = focusZ * 0.015
      renderer.render(scene, camera)
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('pointermove', handlePointer, { passive: true })
    document.addEventListener('visibilitychange', handleVisibility)
    animationFrame = window.requestAnimationFrame(render)
    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.cancelAnimationFrame(refreshFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointer)
      document.removeEventListener('visibilitychange', handleVisibility)
      scrollDriver.kill()
      scene.traverse((object) => {
        if ('geometry' in object && object.geometry instanceof THREE.BufferGeometry) object.geometry.dispose()
        if ('material' in object) {
          const material = object.material as THREE.Material | THREE.Material[]
          if (Array.isArray(material)) material.forEach((entry) => entry.dispose())
          else material.dispose()
        }
      })
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="scene-canvas" aria-hidden="true" />
}
