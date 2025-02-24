"use client"

import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/constants'

export default function Terms() {
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
            <h1 className="text-3xl font-light tracking-widest">Terms & Conditions</h1>
            <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-light tracking-wider">Project Overview</h2>
              <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                {siteConfig.legal.disclaimer}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-light tracking-wider">Usage Terms</h2>
              <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                {siteConfig.legal.terms}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-light tracking-wider">Content</h2>
              <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                All content on this website, including but not limited to text, graphics, images, and code, is for demonstration purposes only. The content is not intended for commercial use and should not be reproduced without permission.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-light tracking-wider">Contact</h2>
              <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                For any questions or concerns about these terms, please contact us through the provided contact form.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
