// Mark this file as a Client Component
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Assuming you're using framer-motion for animations
import { siteConfig } from '@/lib/constants';

interface GalleryProps {
  className?: string; // Optional className prop
}

const Gallery: React.FC<GalleryProps> = ({ className }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className={`min-h-screen pt-32 ${className}`}>
      <div className="container mx-auto px-12">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-24 space-y-6"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-3xl font-light tracking-widest">Gallery</h1>
          <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
            A collection of moments frozen in time, each telling its own story of nature's boundless beauty.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {siteConfig.gallery.categories.map((category, index) => (
            <motion.article
              key={category.name}
              variants={fadeIn}
              className="group relative aspect-[3/4] bg-secondary/20"
              onClick={() => setSelectedImage(selectedImage === index ? null : index)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  <span className="text-sm font-light tracking-widest text-foreground/60 block mb-3">
                    {category.name}
                  </span>
                  <p className="text-sm text-muted-foreground/90 mt-2">
                    {category.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;