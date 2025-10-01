'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeJSBackgroundClient() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current || typeof window === 'undefined') return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create animated shapes
    const shapes: THREE.Mesh[] = []
    const geometries = [
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.SphereGeometry(1.5, 32, 32),
      new THREE.TorusGeometry(1, 0.4, 16, 100),
      new THREE.OctahedronGeometry(1.2),
      new THREE.TetrahedronGeometry(1.5)
    ]

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x667eea, 
        transparent: true, 
        opacity: 0.1,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x764ba2, 
        transparent: true, 
        opacity: 0.1,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x38bdf8, 
        transparent: true, 
        opacity: 0.1,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x10b981, 
        transparent: true, 
        opacity: 0.1,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xf59e0b, 
        transparent: true, 
        opacity: 0.1,
        wireframe: true 
      })
    ]

    // Create multiple shapes
    for (let i = 0; i < 8; i++) {
      const geometry = geometries[i % geometries.length]
      const material = materials[i % materials.length]
      const mesh = new THREE.Mesh(geometry, material)
      
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      )
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      
      shapes.push(mesh)
      scene.add(mesh)
    }

    // Add floating particles
    const particleGeometry = new THREE.BufferGeometry()
    const particleCount = 100
    const positions = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30
      positions[i + 1] = (Math.random() - 0.5) * 30
      positions[i + 2] = (Math.random() - 0.5) * 30
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x667eea,
      size: 0.1,
      transparent: true,
      opacity: 0.6
    })
    
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Add animated LuGo logo with actual image
    const textureLoader = new THREE.TextureLoader()
    const logoTexture = textureLoader.load('/images/lugo.PNG')
    
    const logoGeometry = new THREE.PlaneGeometry(3, 3)
    const logoMaterial = new THREE.MeshBasicMaterial({ 
      map: logoTexture,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide
    })
    
    const logo = new THREE.Mesh(logoGeometry, logoMaterial)
    logo.position.set(0, 8, -5)
    logo.rotation.x = -Math.PI / 2
    scene.add(logo)

    camera.position.z = 15

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 * (index + 1)
        shape.rotation.y += 0.003 * (index + 1)
        shape.rotation.z += 0.002 * (index + 1)
      })

      // Rotate particles
      particles.rotation.y += 0.001

      // Animate logo
      logo.rotation.y += 0.005
      logo.position.y = 8 + Math.sin(Date.now() * 0.001) * 0.3

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: -1 }}
    />
  )
} 