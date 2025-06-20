import './globals.css'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Love Personality Test | Discover Your Romantic Archetype</title>
        <meta name="description" content="Take the world's most accurate, verified love personality quiz. Unlock your romantic archetype, get expert advice, and more." />
        <meta property="og:title" content="Love Personality Test | Verified Romantic Quiz" />
        <meta property="og:description" content="Take the world's most trusted love personality quiz. Unlock your romantic archetype instantly." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://lovepersonalitytest.online/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href="https://lovepersonalitytest.online/" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
        <script src="https://js.paystack.co/v1/inline.js"></script>
      </head>
      <body>
        <nav className="flex items-center justify-between px-8 py-4 bg-white bg-opacity-80 shadow">
          <img src="/logo.png" alt="Love Personality Test Logo" className="h-12 w-auto" />
          <a href="/quiz" className="font-bold text-primary text-lg hover:text-deep transition">Take The Quiz</a>
        </nav>
        {children}
        <footer className="text-center py-6 mt-10 bg-gradient-to-tr from-primary via-pink-200 to-accent text-deep font-semibold">
          &copy; {new Date().getFullYear()} LovePersonalityTest.online. All rights reserved.
        </footer>
      </body>
    </html>
  )
}