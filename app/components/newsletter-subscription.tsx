"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function NewsletterSubscription() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log('Subscribing email:', email)
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    })
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-grow"
      />
      <Button type="submit">Subscribe</Button>
    </form>
  )
}

