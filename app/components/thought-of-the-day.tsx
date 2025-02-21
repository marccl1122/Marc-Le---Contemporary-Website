"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "./ui/card"

const thoughts = [
  "Art is the lie that enables us to realize the truth.",
  "In the midst of chaos, there is also opportunity.",
  "The purpose of art is washing the dust of daily life off our souls.",
  "Nature is not a place to visit. It is home.",
  "The most beautiful experience we can have is the mysterious.",
]

export function ThoughtOfTheDay() {
  const [thought, setThought] = useState('')

  useEffect(() => {
    setThought(thoughts[Math.floor(Math.random() * thoughts.length)])
  }, [])

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Thought of the Day</h3>
        <p className="text-gray-600 dark:text-gray-300 italic">{thought}</p>
      </CardContent>
    </Card>
  )
}
