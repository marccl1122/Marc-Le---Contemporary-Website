"use client"

import { motion } from 'framer-motion'

export default function Podcast() {
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
            <h1 className="text-3xl font-light tracking-widest">Podcast</h1>
            <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
              Exploring art, existence, and creativity through conversations.
            </p>
          </div>

          <div className="space-y-12">
            {/* Podcast Episodes Template */}
            <div className="space-y-8">
              <div className="p-6 bg-secondary/20 rounded-lg space-y-4">
                <h2 className="text-xl font-light tracking-wider">Episode Template</h2>
                <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                  Add your podcast episodes here. Each episode can include:
                </p>
                <ul className="list-disc list-inside text-sm font-light text-muted-foreground/60 space-y-2">
                  <li>Episode title and number</li>
                  <li>Description and show notes</li>
                  <li>Audio player embed</li>
                  <li>Guest information</li>
                  <li>Links and resources</li>
                </ul>
              </div>
            </div>

            {/* Instructions */}
            <div className="text-sm font-light text-muted-foreground/60 leading-relaxed space-y-2">
              <p>To add podcast episodes:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Host your audio files on a podcast platform</li>
                <li>Add episode details to this page</li>
                <li>Include embed codes from your hosting platform</li>
                <li>Update metadata and descriptions</li>
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
