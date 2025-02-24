"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import MobileMenu from './mobile-menu'

interface HeaderProps {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${scrolled ? 'backdrop-blur-sm bg-background/5' : ''}
      `}>
        <nav className="container mx-auto px-6 py-10">
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-20">
              <Link 
                href="/"
                className="text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
              >
                Home
              </Link>
              <Link 
                href="/gallery"
                className="text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
              >
                Gallery
              </Link>
              <Link 
                href="/canvas"
                className="text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
              >
                Canvas
              </Link>
              <Link 
                href="/writing"
                className="text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
              >
                Writing
              </Link>
              <Link 
                href="/podcast"
                className="text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
              >
                Podcast
              </Link>
              <Link 
                href="/about"
                className="text-[13px] font-light tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
              >
                About
              </Link>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-3.5 w-3.5" />
                ) : (
                  <Moon className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  )
}
