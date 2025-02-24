"use client"

import { motion } from 'framer-motion'

export default function Canvas() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  }

  return (
    <section className="min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto space-y-12 mb-20"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-light tracking-widest">Digital Canvas</h1>
            <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
              Interactive digital art experiments and explorations.
            </p>
          </div>

          <div className="space-y-12">
            {/* Canvas Template */}
            <div className="space-y-8">
              <div className="aspect-video bg-secondary/20 rounded-lg flex items-center justify-center">
                <p className="text-sm font-light text-muted-foreground/60">
                  Interactive Canvas Area
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-light tracking-wider">Digital Artwork Template</h2>
                <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                  Add your interactive digital artworks here. Each piece can include:
                </p>
                <ul className="list-disc list-inside text-sm font-light text-muted-foreground/60 space-y-2">
                  <li>HTML5 Canvas elements</li>
                  <li>WebGL experiments</li>
                  <li>Interactive animations</li>
                  <li>Digital art descriptions</li>
                  <li>Technical details</li>
                </ul>
              </div>
            </div>

            {/* Instructions */}
            <div className="text-sm font-light text-muted-foreground/60 leading-relaxed space-y-2">
              <p>To add digital artworks:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Create your canvas-based artwork</li>
                <li>Add interactive elements and controls</li>
                <li>Include descriptions and context</li>
                <li>Optimize for performance</li>
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
