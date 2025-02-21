"use client"

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 z-10">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          Marc Le
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/gallery" className="text-gray-600 dark:text-gray-300 hover:text-neon-green dark:hover:text-neon-purple">Gallery</Link>
          <Link href="/writing" className="text-gray-600 dark:text-gray-300 hover:text-neon-green dark:hover:text-neon-purple">Writing</Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-neon-green dark:hover:text-neon-purple">About</Link>
          <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-neon-green dark:hover:text-neon-purple">Contact</Link>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </nav>
    </header>
  )
}

