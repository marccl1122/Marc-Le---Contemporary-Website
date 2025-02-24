import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from "@/components/ui/toaster"
import Hero3D from '@/components/hero-3d'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marc Le - Contemporary Artist',
  description: 'Explore the photography and existentialist writings of Marc Le',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            <Hero3D />
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
