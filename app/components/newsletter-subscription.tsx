"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { ArrowRight, Loader2 } from 'lucide-react'

export function NewsletterSubscription() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Replace with your newsletter service endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Subscription failed')
      }

      toast({
        title: "Successfully subscribed",
        description: "Thank you for joining our creative journey. You'll receive updates about new works and exhibitions.",
      })
      
      setEmail('')
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later or contact us directly."
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-transparent border-b border-border/20 py-2 text-sm font-light focus:outline-none focus:border-foreground/40 transition-colors"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
        </button>
      </div>
      <p className="text-xs font-light text-muted-foreground/60">
        By subscribing, you agree to receive updates about new works and exhibitions. You can unsubscribe at any time.
      </p>
    </form>
  )
}
