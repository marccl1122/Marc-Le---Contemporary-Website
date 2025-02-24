"use client"

import { motion } from 'framer-motion'

interface DrawingItem {
  title: string
  description: string
  medium: string
  year: string
  // Add image path when implementing image upload
  // imagePath: string
}

// Template data - replace with your actual drawings
const drawings: DrawingItem[] = [
  {
    title: "Template Drawing 1",
    description: "Replace with your drawing description",
    medium: "Pencil on paper",
    year: "2024"
  },
  {
    title: "Template Drawing 2",
    description: "Replace with your drawing description",
    medium: "Charcoal on paper",
    year: "2024"
  },
  {
    title: "Template Drawing 3",
    description: "Replace with your drawing description",
    medium: "Mixed media",
    year: "2024"
  }
]

export default function Drawings() {
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
            <h1 className="text-3xl font-light tracking-widest">Drawings</h1>
            <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
              A collection of drawings exploring form, emotion, and the human experience.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {drawings.map((drawing, index) => (
            <motion.article
              key={index}
              className="group space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image placeholder - replace with your image component */}
              <div className="aspect-[3/4] bg-secondary/20 group-hover:bg-secondary/30 transition-colors duration-300" />
              
              <div className="space-y-3">
                <div className="space-y-1">
                  <h2 className="text-lg font-light tracking-wider">{drawing.title}</h2>
                  <p className="text-sm font-light text-muted-foreground/60">
                    {drawing.medium}, {drawing.year}
                  </p>
                </div>
                <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                  {drawing.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Instructions for adding drawings */}
        <motion.div 
          className="mt-32 max-w-xl mx-auto text-center space-y-4"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-xl font-light tracking-wider">Adding Your Drawings</h2>
          <div className="text-sm font-light text-muted-foreground/60 leading-relaxed space-y-2">
            <p>To add your drawings:</p>
            <ol className="list-decimal list-inside space-y-1 text-left">
              <li>Add your drawing images to the public/drawings directory</li>
              <li>Update the drawings array in this file with your drawing details</li>
              <li>Include the image path in each drawing object</li>
              <li>Customize the layout and styling as needed</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
