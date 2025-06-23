import './globals.css'
import { Playfair_Display, Poppins } from 'next/font/google'
import type { Metadata } from 'next'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700'] // Specify the weights you need
})

export const metadata: Metadata = {
  title: 'Love Personality Test – Discover Your Romantic Type',
  description: 'Take the Love Personality Test and reveal your unique romantic style! Fun, interactive, and deeply insightful. Find out if you are a Romantic Dreamer, an Adventurer, or something else.',
  keywords: ['Love Test', 'Personality Quiz', 'Romantic Personality', 'Relationship Quiz', 'Dating', 'Love Types'],
  authors: [{ name: 'LovePersonalityTest.online', url: 'https://lovepersonalitytest.online' }],
  openGraph: {
    title: 'Love Personality Test – Discover Your Romantic Type',
    description: 'Reveal your unique love personality! Take the fun and interactive Love Personality Test.',
    url: 'https://lovepersonalitytest.online',
    siteName: 'Love Personality Test',
    images: [
      {
        url: '/og-image.svg', // Points to your OG image in public/
        width: 1200,
        height: 630,
        alt: 'Love Personality Test – Romantic Profile',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Love Personality Test – Discover Your Romantic Type',
    description: 'Reveal your unique love personality! Take the fun and interactive Love Personality Test.',
    images: ['/og-image.svg'], // Points to your OG image in public/
    creator: '@YourTwitterHandle' // Optional: replace with your Twitter handle
  },
  robots: { index: true, follow: true },
  viewport: 'width=device-width, initial-scale=1',
  category: 'dating',
  alternates: {
    canonical: 'https://lovepersonalitytest.online',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}