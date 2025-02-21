"use client"

import { useState } from 'react'

interface PulseButtonProps {
  text: string
  onClick?: () => void
}

export function PulseButton({ text, onClick }: PulseButtonProps) {
  const [isPulsing, setIsPulsing] = useState(false)

  const handleClick = () => {
    setIsPulsing(true)
    setTimeout(() => setIsPulsing(false), 1000)
    if (onClick) onClick()
  }

  return (
    <button
      className={`
        px-6 py-3 rounded-full text-white font-bold
        bg-gradient-to-r from-neon-green to-neon-purple
        transition-all duration-300 ease-in-out
        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-purple
        ${isPulsing ? 'animate-pulse' : ''}
      `}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

