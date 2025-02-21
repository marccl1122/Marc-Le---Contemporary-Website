"use client"

import Link from 'next/link'
import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: "The Interconnectedness of Nature and Existence",
    excerpt: "Exploring the profound relationship between our natural surroundings and our sense of being...",
    slug: "nature-and-existence"
  },
  {
    id: 2,
    title: "Capturing Moments: The Philosophy of Photography",
    excerpt: "Delving into how the act of photography relates to our perception of time and reality...",
    slug: "philosophy-of-photography"
  },
  {
    id: 3,
    title: "Art as a Window to the Soul",
    excerpt: "Examining how artistic expression serves as a mirror to our inner selves and collective consciousness...",
    slug: "art-window-to-soul"
  }
]

export default function Writing() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Writing</h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-neon-green dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="space-y-8">
        {filteredPosts.map((post) => (
          <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
              <Link href={`/writing/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <Link href={`/writing/${post.slug}`} className="text-neon-green hover:text-green-600 dark:text-neon-purple dark:hover:text-purple-500">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

