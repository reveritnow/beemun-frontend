import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BEEMUN — Zero Plastic • Zero Synthetic Marketplace',
  description: 'A curated marketplace for ZPS 100 products reviewed for zero plastic, zero synthetic, full disclosure, and BEEMUN trust.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
