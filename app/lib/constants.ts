export const siteConfig = {
  name: 'Marc Le',
  description: 'A portfolio project showcasing contemporary art, digital experiments, and creative explorations through various mediums including photography, drawings, writing, and interactive canvas works.',
  url: 'https://marcle.com',
  navigation: [
    { name: 'Gallery', href: '/gallery' },
    { name: 'Drawings', href: '/drawings' },
    { name: 'Writing', href: '/writing' },
    { name: 'Canvas', href: '/canvas' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'About', href: '/about' },
  ],
  gallery: {
    categories: [
      { name: 'Landscape', description: 'A serene landscape capturing the essence of tranquility' },
      { name: 'Mountains', description: 'Majestic mountain peaks reaching into the clouds' },
      { name: 'Forest', description: 'A mystical forest path leading to unknown adventures' },
      { name: 'Ocean', description: 'Powerful ocean waves dancing with the shore' },
      { name: 'Desert', description: 'The golden hour painting the desert in warm hues' },
      { name: 'Arctic', description: 'Pure arctic wilderness in its pristine form' },
    ]
  },
  canvas: {
    categories: [
      { name: 'Abstract', description: 'Exploring the beauty of abstraction in art.' },
      { name: 'Portraits', description: 'Capturing the essence of individuals through portraiture.' },
      { name: 'Still Life', description: 'A collection of inanimate objects arranged artistically.' },
    ]
  },
  podcast: {
    episodes: [
      { title: 'Episode 1: The Art of Photography', description: 'Discussing techniques and inspirations in photography.' },
      { title: 'Episode 2: Nature and Art', description: 'Exploring the relationship between nature and artistic expression.' },
      { title: 'Episode 3: The Creative Process', description: 'Insights into the creative process of artists.' },
    ]
  },
  social: [
    { name: 'Tumblr', href: 'https://marcle.tumblr.com' }
  ],
  legal: {
    disclaimer: 'This is a portfolio project created to showcase web development and design capabilities. All content, including images, text, and other media, is for demonstration purposes only.',
    terms: 'The source code of this project is available for educational and demonstration purposes. No real user data is collected or stored.',
    privacy: 'This site uses minimal cookies necessary for basic functionality. No personal data is collected or shared with third parties.'
  }
}

export type SiteConfig = typeof siteConfig
