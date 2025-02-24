import Link from 'next/link'
import { NewsletterSubscription } from './newsletter-subscription'
import { siteConfig } from '@/lib/constants'

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`mt-32 border-t border-border/5 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* About & Social */}
            <div className="space-y-6">
              <h3 className="text-sm font-light tracking-widest">About</h3>
              <div className="space-y-4">
                <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                  {siteConfig.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-light text-muted-foreground/60">Follow on</span>
                  <a 
                    href={siteConfig.social[0].href}
                    className="text-sm font-light text-muted-foreground/60 hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tumblr
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-sm font-light tracking-widest">Stay Updated</h3>
              <div className="space-y-4">
                <p className="text-sm font-light text-muted-foreground/60 leading-relaxed">
                  Subscribe to receive updates about new works and creative explorations.
                </p>
                <NewsletterSubscription />
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light text-muted-foreground/40">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="/legal/privacy"
                className="text-xs font-light text-muted-foreground/40 hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/legal/terms"
                className="text-xs font-light text-muted-foreground/40 hover:text-foreground"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
