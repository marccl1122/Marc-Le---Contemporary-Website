"use client"

import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/constants'

export default function Privacy() {
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
            <h1 className="text-3xl font-light tracking-widest">Privacy Policy</h1>
            <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-light tracking-wider">Overview</h2>
              <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                {siteConfig.legal.privacy}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-light tracking-wider">Data Collection</h2>
              <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                This website collects minimal data necessary for basic functionality:
              </p>
              <ul className="list-disc list-inside text-sm font-light text-muted-foreground/60 space-y-2">
                <li>Essential cookies for site functionality</li>
                <li>Newsletter subscription emails (if provided)</li>
                <li>Contact form submissions</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-light tracking-wider">Newsletter Subscription</h2>
              <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                If you choose to subscribe to our newsletter:
              </p>
              <ul className="list-disc list-inside text-sm font-light text-muted-foreground/60 space-y-2">
                <li>Your email is stored securely</li>
                <li>You can unsubscribe at any time</li>
                <li>We never share your information with third parties</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-light tracking-wider">Contact</h2>
              <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                For any privacy-related questions or concerns, please contact us through the provided contact form.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
