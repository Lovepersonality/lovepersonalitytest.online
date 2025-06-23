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
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Love Personality Test – Discover Your Romantic Type | Best Relationship Quiz 2025',
  description: 'Take the Love Personality Test and discover your unique romantic personality type! Fun, insightful, and scientifically designed. Find out if you are a Romantic Dreamer, Adventurer, Charmer, or Thinker. Join thousands discovering their love type!',
  keywords: ['Love Test', 'Personality Quiz', 'Romantic Personality', 'Relationship Quiz', 'Dating', 'Love Types', 'Romantic Type', 'Relationship advice', 'Online quiz'],
  authors: [{ name: 'LovePersonalityTest.online', url: 'https://lovepersonalitytest.online' }],
  openGraph: {
    title: 'Love Personality Test – Discover Your Romantic Type',
    description: 'Reveal your unique love personality! Take the best and most insightful Love Personality Test online.',
    url: 'https://lovepersonalitytest.online',
    siteName: 'Love Personality Test',
    images: [
      {
        url: '/og-image.svg',
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
    images: ['/og-image.svg'],
    creator: '@YourTwitterHandle'
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
      <head>
        {/* Favicon for SEO */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* FAQ Schema for Google Rich Results */}
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the Love Personality Test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Love Personality Test is a free, science-inspired quiz designed to reveal your romantic personality type and help you understand your relationship style."
                }
              },
              {
                "@type": "Question",
                "name": "Is the Love Personality Test free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! The Love Personality Test is completely free and available to everyone online."
                }
              },
              {
                "@type": "Question",
                "name": "How accurate is the Love Personality Test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our quiz is based on relationship psychology research and is meant for fun and self-discovery. For serious advice, consult a professional."
                }
              }
            ]
          })}
        </script>
      </head>
      <body className="bg-gradient-to-br from-pink-100 via-rose-50 to-violet-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}