"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function SakuraPetals() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create sakura petals
    const petalCount = 50
    const petals: THREE.Mesh[] = []

    // Petal geometry - simple curved shape
    const petalShape = new THREE.Shape()
    petalShape.moveTo(0, 0)
    petalShape.quadraticCurveTo(0.15, 0.15, 0, 0.3)
    petalShape.quadraticCurveTo(-0.15, 0.15, 0, 0)

    const petalGeometry = new THREE.ShapeGeometry(petalShape)

    // Petal materials - various shades of pink/white
    const petalColors = [
      new THREE.Color(0xffd1dc), // Light pink
      new THREE.Color(0xffb6c1), // Light pink 2
      new THREE.Color(0xffc0cb), // Pink
      new THREE.Color(0xfff0f5), // Lavender blush
      new THREE.Color(0xffe4e9), // Misty rose
    ]

    for (let i = 0; i < petalCount; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7 + Math.random() * 0.3,
      })

      const petal = new THREE.Mesh(petalGeometry, material)

      // Random initial position
      petal.position.x = (Math.random() - 0.5) * 15
      petal.position.y = Math.random() * 10 + 5
      petal.position.z = (Math.random() - 0.5) * 5

      // Random scale
      const scale = 0.3 + Math.random() * 0.4
      petal.scale.set(scale, scale, scale)

      // Random rotation
      petal.rotation.x = Math.random() * Math.PI
      petal.rotation.y = Math.random() * Math.PI
      petal.rotation.z = Math.random() * Math.PI

      // Store animation data
      petal.userData = {
        fallSpeed: 0.005 + Math.random() * 0.01,
        swaySpeed: 0.5 + Math.random() * 1,
        swayAmount: 0.5 + Math.random() * 1,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        initialX: petal.position.x,
        time: Math.random() * Math.PI * 2,
      }

      scene.add(petal)
      petals.push(petal)
    }

    // Animation
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)

      petals.forEach((petal) => {
        const data = petal.userData

        // Fall down
        petal.position.y -= data.fallSpeed

        // Sway side to side
        data.time += 0.01
        petal.position.x = data.initialX + Math.sin(data.time * data.swaySpeed) * data.swayAmount

        // Gentle rotation
        petal.rotation.x += data.rotationSpeed.x
        petal.rotation.y += data.rotationSpeed.y
        petal.rotation.z += data.rotationSpeed.z

        // Reset when below screen
        if (petal.position.y < -5) {
          petal.position.y = 10 + Math.random() * 5
          petal.position.x = (Math.random() - 0.5) * 15
          data.initialX = petal.position.x
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
}
