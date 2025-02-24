"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import Hero3D from '@/components/hero-3d'

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  }

  const slideUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 0.2 }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <Hero3D />
        
        {/* Content */}
        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-widest leading-tight"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              Capturing moments in time
            </motion.h1>
            
            <motion.p 
              className="text-base font-light text-muted-foreground/60 leading-relaxed max-w-lg mx-auto"
              variants={slideUp}
              initial="initial"
              animate="animate"
            >
              {siteConfig.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Photography */}
            <motion.div 
              className="space-y-8"
              variants={slideUp}
              initial="initial"
              animate="animate"
            >
              <div className="space-y-4">
                <h2 className="text-xl font-light tracking-widest">Photography</h2>
                <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                  Visual exploration through the lens of contemplation.
                </p>
              </div>
              <div className="aspect-square bg-secondary/20 rounded-lg" />
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-3 text-sm font-light tracking-widest hover:text-foreground/60 transition-colors"
              >
                View Gallery
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Drawings */}
            <motion.div 
              className="space-y-8"
              variants={slideUp}
              initial="initial"
              animate="animate"
            >
              <div className="space-y-4">
                <h2 className="text-xl font-light tracking-widest">Drawings</h2>
                <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                  Artistic expressions through traditional mediums.
                </p>
              </div>
              <div className="aspect-square bg-secondary/20 rounded-lg" />
              <Link
                href="/drawings"
                className="group inline-flex items-center gap-3 text-sm font-light tracking-widest hover:text-foreground/60 transition-colors"
              >
                View Drawings
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Writing */}
            <motion.div 
              className="space-y-8"
              variants={slideUp}
              initial="initial"
              animate="animate"
            >
              <div className="space-y-4">
                <h2 className="text-xl font-light tracking-widest">Writing</h2>
                <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                  Thoughtful prose exploring existential themes.
                </p>
              </div>
              <div className="aspect-square bg-secondary/20 rounded-lg" />
              <Link
                href="/writing"
                className="group inline-flex items-center gap-3 text-sm font-light tracking-widest hover:text-foreground/60 transition-colors"
              >
                Read Latest
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
