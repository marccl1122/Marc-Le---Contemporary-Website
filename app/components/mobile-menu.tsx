"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { createPortal } from 'react-dom'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <div 
      className={`
        fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-300 md:hidden
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <Link 
          href="/"
          className="text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
          onClick={onClose}
        >
          Home
        </Link>
        <Link 
          href="/gallery"
          className="text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
          onClick={onClose}
        >
          Gallery
        </Link>
        <Link 
          href="/canvas"
          className="text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
          onClick={onClose}
        >
          Canvas
        </Link>
        <Link 
          href="/writing"
          className="text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
          onClick={onClose}
        >
          Writing
        </Link>
        <Link 
          href="/podcast"
          className="text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
          onClick={onClose}
        >
          Podcast
        </Link>
        <Link 
          href="/about"
          className="text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
          onClick={onClose}
        >
          About
        </Link>
        <button
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
            onClose()
          }}
          className="opacity-60 hover:opacity-100 transition-opacity mt-4"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="h-3.5 w-3.5" />
          ) : (
            <Moon className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </div>,
    document.body
  )
}
