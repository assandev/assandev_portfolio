import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Andres Sanchez - AI Engineer',
  description: 'AI Engineer × Product Thinker - Building where strategy, architecture, and execution meet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
