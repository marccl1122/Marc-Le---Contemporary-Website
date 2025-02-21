import Image from 'next/image'
import { ThoughtOfTheDay } from '../components/thought-of-the-day'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">About Marc Le</h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/3">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Marc Le"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="mt-8">
            <ThoughtOfTheDay />
          </div>
        </div>
        <div className="w-full lg:w-2/3 space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            As a contemporary artist, I find myself drawn to the intricate dance between nature and human existence. My journey in art began with a deep fascination for the natural world, which I explored through the lens of my camera. Over time, this visual exploration evolved into a philosophical inquiry, leading me to delve into existentialist writings and thoughts.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            My work aims to capture the essence of our relationship with nature and our place within it. Through photography, I seek to freeze moments of profound beauty and complexity, inviting viewers to pause and reflect on their own connection to the world around them.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            In my writing, I explore themes of existence, consciousness, and the human condition, always circling back to how these concepts are reflected in and influenced by the natural world. I believe that by understanding our deep connection to nature, we can gain valuable insights into our own existence and purpose.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            My artistic journey is one of continuous exploration and growth. I invite you to join me in this exploration, to see the world through my lens and to engage with the philosophical questions that drive my work.
          </p>
        </div>
      </div>
    </div>
  )
}
