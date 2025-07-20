'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useTheme } from './ThemeProvider'

export default function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Skip ALL 3D rendering and complex backgrounds on mobile
    if (isMobile || !mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.current.appendChild(renderer.domElement)

    // ===== PROFESSIONAL MINIMAL BACKGROUND WITH WHITE/BLACK/GRAY/CREAMY PALETTE =====
    
    // Subtle floating particles
    const particles: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>[] = []
    const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8)
    
    for (let i = 0; i < 80; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: theme === 'dark' ? 0x808080 : 0xf5f5dc, // Gray for dark, creamy for light
        transparent: true,
        opacity: 0.1 + Math.random() * 0.1
      })
      
      const particle = new THREE.Mesh(particleGeometry, material)
      particle.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      )
      
      particle.userData = {
        speed: 0.0005 + Math.random() * 0.0005,
        originalY: particle.position.y
      }
      
      particles.push(particle)
      scene.add(particle)
    }

    // Elegant geometric shapes - very minimal
    const shapes: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>[] = []
    
    // Add a few subtle wireframe cubes
    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({
        color: theme === 'dark' ? 0x696969 : 0xd3d3d3, // Dim gray for dark, light gray for light
        transparent: true,
        opacity: 0.08,
        wireframe: true
      })
      
      const cube = new THREE.Mesh(geometry, material)
      cube.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      )
      
      cube.userData = {
        rotationSpeed: 0.001 + Math.random() * 0.001
      }
      
      shapes.push(cube)
      scene.add(cube)
    }

    // Add subtle grid lines in the distance
    const gridLines: THREE.Line<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.LineBasicMaterial>[] = []
    const gridSize = 20
    const divisions = 20
    
    for (let i = 0; i <= divisions; i++) {
      const position = (i / divisions) * gridSize - gridSize / 2
      
      // Vertical lines
      const vGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(position, -gridSize/2, -8),
        new THREE.Vector3(position, gridSize/2, -8)
      ])
      const vMaterial = new THREE.LineBasicMaterial({
        color: theme === 'dark' ? 0x404040 : 0xf0f0f0, // Dark gray for dark, very light gray for light
        transparent: true,
        opacity: 0.05
      })
      const vLine = new THREE.Line(vGeometry, vMaterial)
      gridLines.push(vLine)
      scene.add(vLine)
      
      // Horizontal lines
      const hGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-gridSize/2, position, -8),
        new THREE.Vector3(gridSize/2, position, -8)
      ])
      const hMaterial = new THREE.LineBasicMaterial({
        color: theme === 'dark' ? 0x404040 : 0xf0f0f0, // Dark gray for dark, very light gray for light
        transparent: true,
        opacity: 0.05
      })
      const hLine = new THREE.Line(hGeometry, hMaterial)
      gridLines.push(hLine)
      scene.add(hLine)
    }

    camera.position.z = 5

    // Smooth background animation (no-op, placeholder for future enhancements)
    const animateBackground = () => {
      // No backgroundRef used; function intentionally left blank
    }

    // Slow, professional animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      const time = Date.now() * 0.0005 // Very slow time multiplier

      // Gentle particle movement
      particles.forEach((particle, index) => {
        particle.rotation.x += particle.userData.speed * 0.5
        particle.rotation.y += particle.userData.speed * 0.3
        
        // Subtle floating motion
        particle.position.y = particle.userData.originalY + Math.sin(time + index * 0.5) * 0.3
        
        // Gentle opacity pulsing
        particle.material.opacity = 0.05 + Math.sin(time + index) * 0.03
      })

      // Very slow shape rotation
      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotationSpeed
        shape.rotation.y += shape.userData.rotationSpeed * 0.7
        shape.rotation.z += shape.userData.rotationSpeed * 0.3
      })

      // Subtle grid animation
      gridLines.forEach((line, index) => {
        line.material.opacity = 0.02 + Math.sin(time * 0.5 + index * 0.1) * 0.01
      })

      animateBackground()
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [theme, isMobile])

  return (
    <>
      {/* Mobile: Only static gradient - NO animations */}
      {isMobile ? (
        <div className="fixed inset-0 -z-10">
          <div 
            className={`absolute inset-0 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900 to-black'
                : 'bg-gradient-to-br from-gray-50 to-white'
            }`}
          />
        </div>
      ) : (
        <>
          {/* Desktop: Keep all existing animations */}

          {/* 3D Canvas - Desktop only */}
          <div ref={mountRef} className="fixed inset-0 -z-10" />
        </>
      )}

      <style jsx>{`
        @keyframes drift {
          0% { transform: translateX(0px) translateY(0px); }
          100% { transform: translateX(50px) translateY(-30px); }
        }
      `}</style>
    </>
  )
}

