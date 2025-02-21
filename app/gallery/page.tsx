import ImageLightbox from '@/components/image-ligthbox'

export default function Gallery() {
  const images = [
    { src: '/images/placeholder1.svg', alt: 'Nature 1' },
    { src: '/images/placeholder2.svg', alt: 'Nature 2' },
    { src: '/images/placeholder3.svg', alt: 'Nature 3' },
    { src: '/images/placeholder1.svg', alt: 'Nature 4' },
    { src: '/images/placeholder2.svg', alt: 'Nature 5' },
    { src: '/images/placeholder3.svg', alt: 'Nature 6' },
  ]

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <ImageLightbox key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  )
}
