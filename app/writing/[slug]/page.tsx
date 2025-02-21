import { notFound } from 'next/navigation'

const blogPosts = {
  "nature-and-existence": {
    title: "The Interconnectedness of Nature and Existence",
    content: `
      <p>In the vast tapestry of existence, nature stands as both our origin and our constant companion. As we navigate the complexities of being, we find ourselves inexorably linked to the natural world around us. This interconnectedness goes beyond mere physical dependence; it permeates our consciousness, shaping our understanding of life itself.</p>
      
      <p>Through the lens of existentialism, we can explore how our relationship with nature informs our sense of purpose and meaning. The cycles of growth, decay, and renewal observed in nature mirror our own journeys of self-discovery and transformation. Just as a forest regenerates after a fire, we too have the capacity for resilience and rebirth in the face of life's challenges.</p>
      
      <p>Moreover, immersing ourselves in nature can provide a profound sense of perspective. In the presence of ancient trees or expansive landscapes, our individual concerns often fade into insignificance. This shift in perspective doesn't diminish our existence but rather contextualizes it within the greater whole of life on Earth.</p>
      
      <p>As we grapple with questions of meaning and purpose, nature offers not just inspiration, but also a framework for understanding our place in the universe. We are not separate from nature, but an integral part of its intricate web. Recognizing this connection can lead to a deeper appreciation of our own existence and a greater sense of responsibility towards the world we inhabit.</p>
      
      <p>In conclusion, by exploring the relationship between nature and existence, we open ourselves to a more holistic understanding of what it means to be alive. This awareness can guide us towards living more authentically and in greater harmony with the world around us.</p>
    `
  },
  "philosophy-of-photography": {
    title: "Capturing Moments: The Philosophy of Photography",
    content: `
      <p>Photography, at its core, is an art form that freezes time, allowing us to examine and reflect upon fleeting moments. This ability to capture and preserve instants of reality raises profound questions about the nature of time, perception, and the human experience.</p>
      
      <p>When we press the shutter, we're not just recording light; we're making a statement about what we deem significant. Each photograph is a conscious decision to elevate a particular moment above the constant flow of time. This act of selection and preservation is inherently philosophical, forcing us to consider what we value and why.</p>
      
      <p>Moreover, photography challenges our understanding of reality. A photograph is simultaneously a direct representation of what was in front of the lens and a subjective interpretation shaped by the photographer's choices. This duality invites us to question the nature of truth and the reliability of our perceptions.</p>
      
      <p>The temporal aspect of photography also provides a unique lens through which to examine our relationship with the past and future. Photographs allow us to revisit moments long gone, evoking memories and emotions tied to specific times and places. They serve as bridges between our present selves and our past experiences, influencing how we construct our personal narratives and identities.</p>
      
      <p>In conclusion, photography is not merely a technical skill but a philosophical practice. It encourages us to be more present, to carefully observe our surroundings, and to contemplate the significance of fleeting moments. Through this art form, we gain insights into the nature of existence, perception, and the passage of time.</p>
    `
  },
  "art-window-to-soul": {
    title: "Art as a Window to the Soul",
    content: `
      <p>Art, in its myriad forms, has long been recognized as a powerful medium for self-expression and exploration of the human condition. It serves as a window not only to the individual soul of the artist but also to the collective consciousness of humanity. Through creating and experiencing art, we gain profound insights into our inner selves and the world around us.</p>
      
      <p>When an artist pours their emotions, thoughts, and experiences into their work, they're engaging in a form of self-reflection and self-discovery. The creative process often brings to light aspects of the psyche that may have remained hidden in everyday life. In this sense, art becomes a tool for introspection and personal growth.</p>
      
      <p>Moreover, art has the unique ability to communicate complex emotions and ideas that may be difficult to express through words alone. A painting, a piece of music, or a photograph can evoke feelings and thoughts that resonate deeply with the viewer or listener, creating a bridge between the artist's inner world and that of the audience.</p>
      
      <p>On a broader scale, art serves as a mirror to society, reflecting our collective values, fears, and aspirations. It has the power to challenge societal norms, provoke thought, and inspire change. Through art, we can explore complex social issues, confront uncomfortable truths, and imagine alternative futures.</p>

      <p>The universality of art also allows us to connect with others across cultural and temporal boundaries. A piece of art created centuries ago can still evoke powerful emotions in a modern viewer, highlighting the enduring nature of human experiences and emotions. This connection through art fosters empathy and understanding, allowing us to see the world through different perspectives.</p>

      <p>In conclusion, art as a window to the soul offers us a unique opportunity for self-discovery, emotional expression, and connection with others. It invites us to delve deeper into our own psyche, while simultaneously reaching out to understand the experiences of others. By engaging with art, we not only enrich our own lives but also contribute to the collective understanding of what it means to be human.</p>
    `
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">{post.title}</h1>
      <div className="prose dark:prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

