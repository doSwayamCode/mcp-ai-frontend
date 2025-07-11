import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { GlobalAnimatedBackground } from '@/components/global-animated-background'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Intern Dedo - Find Your Dream Internship',
  description: 'Get the latest internship opportunities delivered straight to your inbox. 100% Free Forever!',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <GlobalAnimatedBackground />
        {children}
      </body>
    </html>
  )
}
