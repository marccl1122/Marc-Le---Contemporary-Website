"use client"

import { useEffect, useState } from 'react'

export default function AnimatedHero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-neon-green to-neon-purple"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 
          className="text-6xl font-bold text-white text-center"
          style={{
            transform: `translateY(${-offset * 0.2}px)`,
          }}
        >
          Marc Le
        </h1>
      </div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white bg-opacity-10"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${offset * (Math.random() + 0.2)}px)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

