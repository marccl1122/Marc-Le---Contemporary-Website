"use client"

import { useState } from 'react'
import Image from 'next/image'

interface ImageLightboxProps {
  src: string
  alt: string
}

export default function ImageLightbox({ src, alt }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div 
        className="cursor-pointer" 
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={400}
          height={300}
          className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  )
}

