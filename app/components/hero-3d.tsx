"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Animation variables
    let particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []
    const particleCount = 50

    // Create particles away from center
    for (let i = 0; i < particleCount; i++) {
      let x = Math.random() * canvas.width
      let y = Math.random() * canvas.height
      
      // Ensure particles are not in the center
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const distanceFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
      
      if (distanceFromCenter < 100) {
        // If too close to center, move particle to edge
        const angle = Math.random() * Math.PI * 2
        x = centerX + Math.cos(angle) * 150
        y = centerY + Math.sin(angle) * 150
      }

      particles.push({
        x,
        y,
        size: Math.random() * 1.5 + 0.5, // Smaller particles
        speedX: (Math.random() - 0.5) * 0.3, // Slower movement
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1 // Lower opacity
      })
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw connections first (behind particles)
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 120)})`
            ctx.stroke()
          }
        })

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <motion.div 
      className="fixed inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background pointer-events-none" />
      <canvas 
        ref={canvasRef}
        className="w-full h-full opacity-20 dark:opacity-30"
        style={{ background: 'transparent' }}
      />
    </motion.div>
  )
}
