import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GuideStride — Business Software for Fishing Guides',
  description: 'GuideStride helps independent fishing guides manage clients, log trips, track payments, and grow their business — all from their phone. Simple and affordable at $20/month.',
  keywords: [
    'fishing guide software',
    'fishing guide business management',
    'guide service app',
    'fishing guide booking software',
    'fishing guide client management',
    'manage fishing guide business',
    'fishing guide trip logging',
    'fishing charter management software',
    'fishing guide tools',
    'small guide business software',
  ],
  authors: [{ name: 'GuideStride' }],
  creator: 'GuideStride',
  publisher: 'GuideStride',
  metadataBase: new URL('https://guidestride.com'),
  alternates: { canonical: 'https://guidestride.com' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://guidestride.com',
    siteName: 'GuideStride',
    title: 'GuideStride — Business Software for Fishing Guides',
    description: 'Simple, affordable software that helps fishing guides manage clients, log trips, track payments, and grow their business. $20/month.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'GuideStride — Business Software for Fishing Guides' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GuideStride — Business Software for Fishing Guides',
    description: 'Simple, affordable software that helps fishing guides manage clients, log trips, and grow their business.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { icon: '/icon.png', apple: '/icon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
