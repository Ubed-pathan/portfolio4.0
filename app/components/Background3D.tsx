'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useTheme } from './ThemeProvider'

export default function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
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

    // Smooth background animation
    const animateBackground = () => {
      if (backgroundRef.current) {
        const time = Date.now() * 0.0008
        const translateX = Math.sin(time) * 2
        const translateY = Math.cos(time * 0.7) * 3
        const rotation = Math.sin(time * 0.3) * 0.5
        
        backgroundRef.current.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`
      }
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
      {/* Simple static background for mobile - NO animations */}
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
          {/* Desktop animated backgrounds */}
          {/* Animated background gradients */}
          <div 
            ref={backgroundRef}
            className="fixed inset-0 -z-20 transition-all duration-1000 ease-in-out"
            style={{
              background: theme === 'dark' 
                ? `
                  radial-gradient(circle at 20% 80%, rgba(45, 45, 45, 0.4) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(64, 64, 64, 0.3) 0%, transparent 50%),
                  linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)
                `
                : `
                  radial-gradient(circle at 20% 80%, rgba(220, 215, 195, 0.8) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(200, 195, 175, 0.7) 0%, transparent 50%),
                  linear-gradient(135deg, #ffffff 0%, #faf7f2 50%, #f5f5dc 100%)
                `
            }}
          />

          {/* Animated mesh background */}
          <div className="fixed inset-0 -z-19 overflow-hidden">
            <svg
              className={`absolute inset-0 w-full h-full ${theme === 'dark' ? 'opacity-5' : 'opacity-15'}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke={theme === 'dark' ? '#666666' : '#888888'}
                    strokeWidth={theme === 'dark' ? '1' : '1.5'}
                    className="animate-pulse"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Floating geometric shapes */}
          <div className="fixed inset-0 -z-18 overflow-hidden">
            {/* Animated triangles */}
            <div 
              className={`absolute w-0 h-0 animate-spin
                ${theme === 'dark' 
                  ? 'opacity-5 border-l-gray-400 border-r-transparent border-b-gray-400' 
                  : 'opacity-25 border-l-gray-600 border-r-transparent border-b-gray-600'
                }
              `}
              style={{
                borderLeftWidth: '30px',
                borderRightWidth: '30px',
                borderBottomWidth: '52px',
                top: '15%',
                left: '80%',
                animationDuration: '30s',
                animationDirection: 'reverse'
              }}
            />
            <div 
              className={`absolute w-0 h-0 animate-spin
                ${theme === 'dark' 
                  ? 'opacity-4 border-l-gray-500 border-r-transparent border-b-gray-500' 
                  : 'opacity-20 border-l-gray-700 border-r-transparent border-b-gray-700'
                }
              `}
              style={{
                borderLeftWidth: '20px',
                borderRightWidth: '20px',
                borderBottomWidth: '35px',
                top: '70%',
                left: '10%',
                animationDuration: '25s'
              }}
            />

            {/* Animated circles with pulse */}
            <div 
              className={`absolute w-24 h-24 rounded-full animate-pulse
                ${theme === 'dark' 
                  ? 'opacity-8 bg-gray-600' 
                  : 'opacity-30 bg-gray-500'
                }
              `}
              style={{
                top: '25%',
                right: '15%',
                animationDuration: '4s'
              }}
            />
            <div 
              className={`absolute w-16 h-16 rounded-full animate-ping
                ${theme === 'dark' 
                  ? 'opacity-6 bg-gray-700' 
                  : 'opacity-25 bg-gray-600'
                }
              `}
              style={{
                bottom: '30%',
                right: '30%',
                animationDuration: '6s'
              }}
            />
          </div>
          
          {/* Floating orbs with enhanced animation */}
          <div className="fixed inset-0 -z-17 overflow-hidden">
            <div 
              className={`absolute w-96 h-96 rounded-full blur-3xl
                ${theme === 'dark' 
                  ? 'opacity-12 bg-gray-400' 
                  : 'opacity-35 bg-gray-400'
                }
              `}
              style={{
                top: '10%',
                left: '10%',
                animation: 'float 20s ease-in-out infinite, drift 25s ease-in-out infinite alternate'
              }}
            />
            <div 
              className={`absolute w-80 h-80 rounded-full blur-3xl
                ${theme === 'dark' 
                  ? 'opacity-10 bg-gray-500' 
                  : 'opacity-30 bg-gray-500'
                }
              `}
              style={{
                top: '60%',
                right: '20%',
                animation: 'float 25s ease-in-out infinite reverse, drift 30s ease-in-out infinite'
              }}
            />
            <div 
              className={`absolute w-72 h-72 rounded-full blur-3xl
                ${theme === 'dark' 
                  ? 'opacity-8 bg-gray-600' 
                  : 'opacity-25 bg-gray-600'
                }
              `}
              style={{
                bottom: '20%',
                left: '30%',
                animation: 'float 18s ease-in-out infinite, drift 22s ease-in-out infinite alternate-reverse'
              }}
            />
          </div>

          {/* Flowing lines animation */}
          <div className="fixed inset-0 -z-16 overflow-hidden">
            <svg className={`absolute inset-0 w-full h-full ${theme === 'dark' ? 'opacity-4' : 'opacity-20'}`}>
              <path
                d="M0,100 Q150,50 300,100 T600,100"
                fill="none"
                stroke={theme === 'dark' ? '#555555' : '#777777'}
                strokeWidth={theme === 'dark' ? '2' : '3'}
                className="animate-pulse"
                style={{ animationDuration: '8s' }}
              />
              <path
                d="M100,200 Q250,150 400,200 T700,200"
                fill="none"
                stroke={theme === 'dark' ? '#555555' : '#777777'}
                strokeWidth={theme === 'dark' ? '1.5' : '2.5'}
                className="animate-pulse"
                style={{ animationDuration: '10s', animationDelay: '2s' }}
              />
              <path
                d="M50,300 Q200,250 350,300 T650,300"
                fill="none"
                stroke={theme === 'dark' ? '#555555' : '#777777'}
                strokeWidth={theme === 'dark' ? '1' : '2'}
                className="animate-pulse"
                style={{ animationDuration: '12s', animationDelay: '4s' }}
              />
            </svg>
          </div>

          {/* Enhanced gradient overlay with rotation */}
          <div 
            className={`fixed inset-0 -z-15 transition-all duration-2000 ease-in-out
              ${theme === 'dark' ? 'opacity-20' : 'opacity-35'}
            `}
            style={{
              background: theme === 'dark'
                ? `
                  conic-gradient(from 0deg at 50% 50%, 
                    rgba(128, 128, 128, 0.15) 0deg,
                    rgba(64, 64, 64, 0.08) 90deg,
                    rgba(105, 105, 105, 0.12) 180deg,
                    rgba(48, 48, 48, 0.05) 270deg,
                    rgba(128, 128, 128, 0.15) 360deg
                  )
                `
                : `
                  conic-gradient(from 0deg at 50% 50%, 
                    rgba(180, 180, 180, 0.35) 0deg,
                    rgba(160, 160, 160, 0.25) 90deg,
                    rgba(200, 200, 200, 0.30) 180deg,
                    rgba(140, 140, 140, 0.20) 270deg,
                    rgba(180, 180, 180, 0.35) 360deg
                  )
                `,
              animation: 'spin 60s linear infinite'
            }}
          />

          {/* Particle dots animation */}
          <div className="fixed inset-0 -z-14 overflow-hidden">
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full animate-bounce
                  ${theme === 'dark' 
                    ? 'opacity-20 bg-gray-400' 
                    : 'opacity-40 bg-gray-600'
                  }
                `}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

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

