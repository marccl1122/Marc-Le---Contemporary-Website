import { NewsletterSubscription } from './newsletter-subscription'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">About Marc Le</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Contemporary artist exploring the intersection of nature, existence, and art through photography and writing.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/gallery" className="text-gray-600 dark:text-gray-400 hover:text-neon-green dark:hover:text-neon-purple">Gallery</a></li>
              <li><a href="/writing" className="text-gray-600 dark:text-gray-400 hover:text-neon-green dark:hover:text-neon-purple">Writing</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-neon-green dark:hover:text-neon-purple">About</a></li>
              <li><a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-neon-green dark:hover:text-neon-purple">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Stay updated with my latest works and writings.</p>
            <NewsletterSubscription />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Marc Le. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

