"use client"

import { motion } from 'framer-motion'

export default function About() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  }

  return (
    <section className="min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto space-y-12"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="space-y-4">
            <h1 className="text-3xl font-light tracking-widest">About Marc Le</h1>
            <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
              Contemporary artist and writer based in Vancouver, exploring the delicate balance between human existence and the natural world.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-light tracking-wider">Artistic Vision</h2>
              <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                Through photography and prose, I seek to capture the ephemeral moments where humanity and nature intersect. My work explores themes of existence, time, and the profound beauty found in fleeting instances.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-light tracking-wider">Approach</h2>
              <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                Each photograph and written piece is a meditation on the relationship between consciousness and the natural world. I strive to create work that invites contemplation and reveals the extraordinary within the ordinary.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-light tracking-wider">Background</h2>
              <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                With a background in both visual arts and philosophy, my practice is deeply influenced by existentialist thought and environmental consciousness. I believe in the power of art to foster deeper connections with our surroundings and ourselves.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <h2 className="text-xl font-light tracking-wider">Exhibitions & Publications</h2>
            <ul className="space-y-4 text-sm font-light text-muted-foreground/60">
              <li className="space-y-1">
                <span className="block text-foreground/80">Nature's Dialogue - Solo Exhibition</span>
                <span className="block">Vancouver Contemporary Art Gallery, 2024</span>
              </li>
              <li className="space-y-1">
                <span className="block text-foreground/80">Temporal Reflections - Published Work</span>
                <span className="block">Contemporary Photography Quarterly, 2023</span>
              </li>
              <li className="space-y-1">
                <span className="block text-foreground/80">Existence in Nature - Group Exhibition</span>
                <span className="block">International Modern Art Festival, 2023</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
