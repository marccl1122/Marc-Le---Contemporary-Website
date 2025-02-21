"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface FeaturedArtworkProps {
  src: string
  alt: string
  title: string
  description: string
}

export function FeaturedArtwork({ src, alt, title, description }: FeaturedArtworkProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-semibold">View Details</span>
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <Image
            src={src}
            alt={alt}
            width={800}
            height={600}
            className="rounded-lg"
          />
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

