import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Integral Coach Factory iV 2024 - Industry Visit Guide',
  description: 'Comprehensive guide for the three-day industrial visit to Integral Coach Factory Chennai. Includes schedules, instructions, transportation details, and FAQ.',
  keywords: ['ICF', 'Integral Coach Factory', 'Chennai', 'Industrial Visit', 'Railway', 'Manufacturing', 'Education', 'Industry Tour'],
  authors: [{ name: 'Team SPARK' }],
  creator: 'Team SPARK',
  publisher: 'Industry Visit Coordination Team',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://icf-industry-visit.vercel.app',
    title: 'Integral Coach Factory iV 2024 - Industry Visit Guide',
    description: 'Comprehensive guide for the three-day industrial visit to Integral Coach Factory Chennai',
    siteName: 'ICF Industry Visit Guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integral Coach Factory iV 2024 - Industry Visit Guide',
    description: 'Comprehensive guide for the three-day industrial visit to Integral Coach Factory Chennai',
  },
  metadataBase: new URL('https://icf-industry-visit.vercel.app'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900 transition-colors duration-300">
            <Navigation />
            <main className="pt-16">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
