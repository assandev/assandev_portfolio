import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://andressanchez.dev'

export const metadata: Metadata = {
  title: 'Andres Sanchez - AI Engineer',
  description: 'AI Engineer × Product Thinker - Building where strategy, architecture, and execution meet',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'LLM',
    'Product Engineer',
    'Full Stack',
    'Python',
    'TypeScript',
    'Agentic Systems',
    'RAG',
  ],
  authors: [{ name: 'Andres Sanchez' }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Andres Sanchez - AI Engineer',
    title: 'Andres Sanchez - AI Engineer',
    description: 'AI Engineer × Product Thinker - Building where strategy, architecture, and execution meet',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Andres Sanchez - AI Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andres Sanchez - AI Engineer',
    description: 'AI Engineer × Product Thinker - Building where strategy, architecture, and execution meet',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#05040A" />
      </head>
      <body>{children}</body>
    </html>
  )
}
