import AnimatedHero from '@/components/animated-hero'
import { PulseButton } from '@/components/pulse-button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedHero />
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Contemporary Artist
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Exploring the intersection of nature, existence, and art through photography and writing.
          </p>
          <div className="space-x-4">
            <Link href="/gallery" passHref>
              <PulseButton text="View Gallery" />
            </Link>
            <Link href="/writing" passHref>
              <PulseButton text="Read Blog" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

